#pragma once

// TODO Yuval: use current device context and stream
#include "cuda_runtime.h"
#include "appUtils/ntt/ntt.cuh"
#include "polynomials/gpu_backend/kernels.cuh"

namespace polynomials {

  /*============================== Polynomial GPU-context ==============================*/
  template <typename C, typename D, typename I>
  class GPUPolynomialContext : public IPolynomialContext<C, D, I>
  {
    typedef IPolynomialContext<C, D, I> PolyContext;

    // TODO Yuval: add device context to be able to know which device it is and get a corresponding stream
  public:
    C* init_from_coefficients(uint32_t nof_coefficients, const C* h_coefficients) override
    {
      void* storage = getOrAllocate(nof_coefficients);
      if (h_coefficients) { cudaMemcpy(storage, h_coefficients, nof_coefficients * sizeof(C), cudaMemcpyHostToDevice); }
      set_state(State::Coefficients);
      return m_coefficients;
    }

    I* init_from_rou_evaluations(uint32_t nof_evaluations, const I* h_evaluations) override
    {
      void* storage = getOrAllocate(nof_evaluations);
      if (h_evaluations) { cudaMemcpy(storage, h_evaluations, nof_evaluations * sizeof(I), cudaMemcpyHostToDevice); }
      set_state(State::EvaluationsOnRou);
      return m_evaluations;
    }

    uint32_t size() override { return m_nof_elements; }

    std::pair<C*, uint32_t> get_coefficients(uint32_t nof_coeffs) override
    {
      transform_state(State::Coefficients, nof_coeffs);
      return std::make_pair(m_coefficients, m_nof_elements);
    }
    std::pair<I*, uint32_t> get_rou_evaluations(uint32_t nof_evals) override
    {
      transform_state(State::EvaluationsOnRou, nof_evals);
      return std::make_pair(m_evaluations, m_nof_elements);
    }

    void print(std::ostream& os) override
    {
      os << "(id=" << PolyContext::m_id << ")[";
      if (m_state == State::Coefficients) {
        for (size_t i = 0; i < m_nof_elements; ++i) {
          os << m_coefficients[i];
          if (i < m_nof_elements - 1) { os << ", "; }
        }
        os << "] (state=coefficients)" << std::endl;
      } else if (m_state == State::EvaluationsOnRou) {
        for (size_t i = 0; i < m_nof_elements; ++i) {
          os << m_evaluations[i];
          if (i < m_nof_elements - 1) { os << ", "; }
        }
        os << "] (state=rou evaluations)" << std::endl;
      }
    }

    ~GPUPolynomialContext() { release(); }

  private:
    enum State { Coefficients, EvaluationsOnRou };
    void release()
    {
      if (m_storage != nullptr) { cudaFree(m_storage); }

      m_storage = nullptr;
      m_coefficients = nullptr;
      m_evaluations = nullptr;
      m_nof_elements = 0;
    }

    void* getOrAllocate(uint32_t nof_elements)
    {
      const uint32_t nof_elements_nearset_power_of_two = 1 << uint32_t(ceil(log2(nof_elements)));
      const bool is_already_allocated = nof_elements_nearset_power_of_two <= m_nof_elements;
      if (is_already_allocated) { return m_storage; }

      release();
      const uint32_t mem_size = nof_elements_nearset_power_of_two * ElementSize;
      cudaMallocManaged(&m_storage, mem_size); // TODO Yuval use streams and async
      // TODO Yuval: memset zeros?
      m_nof_elements = nof_elements_nearset_power_of_two;
      return m_storage;
    }

    void set_state(State state)
    {
      m_coefficients = nullptr;
      m_evaluations = nullptr;
      switch (state) {
      case State::Coefficients:
        m_coefficients = reinterpret_cast<C*>(m_storage);
        break;
      case State::EvaluationsOnRou:
        m_evaluations = reinterpret_cast<I*>(m_storage);
        break;
      default:
        throw std::runtime_error("not implemented");
      }
      m_state = state;
    }

    void transform_state(State new_state, uint32_t new_nof_elements = 0)
    {
      // TODO Yuval ceil to power of two
      uint32_t old_nof_elements = m_nof_elements;
      new_nof_elements = new_nof_elements == 0 ? old_nof_elements : new_nof_elements;
      const bool is_mem_alloc_required = new_nof_elements > old_nof_elements;

      const bool is_already_in_state = new_state == m_state;
      if (is_already_in_state && !is_mem_alloc_required) return;

      void* src_p = m_storage;
      void* dst_p = m_storage;

      const size_t old_mem_size = old_nof_elements * ElementSize;
      const size_t new_mem_size = new_nof_elements * ElementSize;
      std::cout << "is_mem_alloc_required=" << is_mem_alloc_required << std::endl;
      if (is_mem_alloc_required) {
        cudaMallocManaged(&m_storage, new_mem_size);
        dst_p = m_storage;
      }

      const bool is_coeffs_to_coeffs = m_state == State::Coefficients && new_state == State::Coefficients;
      const bool is_coeff_to_rou_evaluations = m_state == State::Coefficients && new_state == State::EvaluationsOnRou;
      const bool is_rou_evals_to_rou_evals = m_state == State::EvaluationsOnRou && new_state == State::EvaluationsOnRou;
      const bool is_rou_evals_to_coeffs = m_state == State::EvaluationsOnRou && new_state == State::Coefficients;

      // TODO Yuval: can do the NTTs with more efficient ordering and store it
      auto ntt_config = ntt::DefaultNTTConfig<C>();
      // TODO Yuval: set device context
      ntt_config.are_inputs_on_device = true;
      ntt_config.are_outputs_on_device = true;
      // TODO Yuval: assumed that evals are always R and coeffs N
      if (is_coeffs_to_coeffs) {
        // simply copy old coefficients to larger memory
        cudaMemcpy(dst_p, src_p, old_mem_size, cudaMemcpyDeviceToDevice);
      } else if (is_coeff_to_rou_evaluations) {
        std::cout << "coeffs to evaluations!\n";
        // copy coeffs to new mem and compute NTT inplace with new size
        if (is_mem_alloc_required) { cudaMemcpy(dst_p, src_p, old_mem_size, cudaMemcpyDeviceToDevice); }
        ntt_config.ordering = ntt::Ordering::kNR; // TODO Yuval how to choose that?
        ntt::NTT((C*)dst_p, new_nof_elements, ntt::NTTDir::kForward, ntt_config, (C*)dst_p);
      } else if (is_rou_evals_to_rou_evals) {
        // NTT to coeffs and a second in-place NTT for compute evals
        ntt_config.ordering = ntt::Ordering::kRN; // TODO Yuval how to choose that?
        ntt::NTT((C*)src_p, old_nof_elements, ntt::NTTDir::kInverse, ntt_config, (C*)dst_p); // to coeffs
        ntt_config.ordering = ntt::Ordering::kNR; // TODO Yuval how to choose that?
        ntt::NTT((C*)dst_p, old_nof_elements, ntt::NTTDir::kForward, ntt_config, (C*)dst_p);
      } else if (is_rou_evals_to_coeffs) {
        // NTT to new memory. Higher coefficients should be zeros
        ntt_config.ordering = ntt::Ordering::kRN; // TODO Yuval how to choose that?
        ntt::NTT((C*)src_p, old_nof_elements, ntt::NTTDir::kInverse, ntt_config, (C*)dst_p); // to coeffs
      }

      set_state(new_state);
      m_nof_elements = new_nof_elements;
    }

    size_t size() const { return m_nof_elements * ElementSize; }
    State get_state() const { return m_state; }

    // Members
    // ElementSize helps allocate single memory for both coefficients and evaluations
    static constexpr size_t ElementSize = std::max(sizeof(C), sizeof(I));

    uint32_t m_nof_elements;   // #coefficients or #evaluations
    void* m_storage = nullptr; // actual allocated memory. Coefficients/evaluations point to storage
    C* m_coefficients = nullptr;
    I* m_evaluations = nullptr;

    State m_state; // whether data is in coefficients or evaluations form
  };

  /*============================== Polynomial GPU-backend ==============================*/

  template <typename C, typename D, typename I, typename ECpoint>
  class GPUPolynomialBackend : public IPolynomialBackend<C, D, I, ECpoint>
  {
    typedef IPolynomialContext<C, D, I> PolyContext;

  public:
    void add_sub(PolyContext& res, PolyContext& a, PolyContext& b, bool add1_sub0)
    {
      auto [a_coeff_p, a_nof_coeff] = a.get_coefficients();
      auto [b_coeff_p, b_nof_coeff] = b.get_coefficients();

      const auto res_nof_coeff = max(a_nof_coeff, b_nof_coeff);
      auto* res_coeff_p = res.init_from_coefficients(res_nof_coeff);

      const int NOF_THREADS = 32;
      const int NOF_BLOCKS = (res_nof_coeff + NOF_THREADS - 1) / NOF_THREADS;
      AddSubKernel<<<NOF_BLOCKS, NOF_THREADS>>>(a_coeff_p, b_coeff_p, a_nof_coeff, b_nof_coeff, add1_sub0, res_coeff_p);
    }

    void add(PolyContext& res, PolyContext& a, PolyContext& b) override { add_sub(res, a, b, true /*=add*/); }
    void subtract(PolyContext& res, PolyContext& a, PolyContext& b) override { add_sub(res, a, b, false /*=sub*/); }

    void multiply(PolyContext& c, PolyContext& a, PolyContext& b) override
    {
      const uint32_t a_N = a.size();
      const uint32_t b_N = b.size();
      const uint32_t N = max(a_N, b_N);

      // (1) transform a,b to coefficients such that both have N coefficients
      auto [a_coeff_p, a_nof_coeff] = a.get_coefficients(N);
      auto [b_coeff_p, b_nof_coeff] = b.get_coefficients(N);

      // (2) allocate c (c=a*b)
      const auto c_N = 2 * N;
      I* c_evals_low_p = c.init_from_rou_evaluations(c_N);
      I* c_evals_high_p = c_evals_low_p + N;

      std::cout << "a_N=" << a_N << ", b_N=" << b_N << ", c_N=" << c_N << "\n";

      // (3) compute NTT of a,b on coset and write to c
      auto ntt_config = ntt::DefaultNTTConfig<C>();
      ntt_config.are_inputs_on_device = true;
      ntt_config.are_outputs_on_device = true;
      ntt_config.ordering = ntt::Ordering::kNR;
      // ntt_config.coset_gen =
      // test_type::omega(c_N); // TODO Yuval: MUST USE THE ROOT CORRESPONDING TO THE ONE IN INIT DOMAIN!!!

      c.print(std::cout);
      ntt::NTT(a_coeff_p, N, ntt::NTTDir::kForward, ntt_config, c_evals_low_p);  // a_H1
      ntt::NTT(a_coeff_p, N, ntt::NTTDir::kForward, ntt_config, c_evals_high_p); // b_H1

      a.print(std::cout);
      b.print(std::cout);
      c.print(std::cout);

      // (4) compute a_H1 * b_H1 inplace
      const int NOF_THREADS = 32;
      const int NOF_BLOCKS = (N + NOF_THREADS - 1) / NOF_THREADS;
      Mul<<<NOF_BLOCKS, NOF_THREADS>>>(c_evals_low_p, c_evals_high_p, N, c_evals_high_p);

      // (5) transform a,b to evaluations
      auto [a_evals_p, a_nof_evals] = a.get_rou_evaluations(N);
      auto [b_evals_p, b_nof_evals] = b.get_rou_evaluations(N);
      a.print(std::cout);
      b.print(std::cout);
      c.print(std::cout);

      // (6) compute a_H0 * b_H0
      Mul<<<NOF_BLOCKS, NOF_THREADS>>>(a_evals_p, b_evals_p, N, c_evals_low_p);
      std::cout << "finally\n";
      c.print(std::cout);
      std::cout << "MUL DONE\n";
      c.print(std::cout);
    }
    void divide(PolyContext& Quotient_out, PolyContext& Remainder_out, PolyContext& op_a, PolyContext& op_b) override
    {
      throw std::runtime_error("not implemented yet");
    }
    void quotient(PolyContext& out, PolyContext& op_a, PolyContext& op_b) override
    {
      throw std::runtime_error("not implemented yet");
    }
    void remainder(PolyContext& out, PolyContext& op_a, PolyContext& op_b) override
    {
      throw std::runtime_error("not implemented yet");
    }
    void divide_by_vanishing_polynomial(PolyContext& out, PolyContext& op_a, uint32_t vanishing_poly_degree) override
    {
      throw std::runtime_error("not implemented yet");
    }

    // arithmetic with monomials
    void add_monomial_inplace(PolyContext& poly, C monomial_coeff, uint32_t monomial) override
    {
      throw std::runtime_error("not implemented yet");
    }
    void sub_monomial_inplace(PolyContext& poly, C monomial_coeff, uint32_t monomial) override
    {
      throw std::runtime_error("not implemented yet");
    }

    // dot product with coefficients
    ECpoint dot_product_with_coefficients(PolyContext& op, ECpoint* points, uint32_t nof_points) override
    {
      return ECpoint::zero();
    }

    int32_t degree(PolyContext& p) override
    {
      auto [coeff, nof_coeff] = p.get_coefficients();

      // TODO Yuval use streams and async
      int32_t* d_degree;
      int32_t h_degree;
      cudaMalloc(&d_degree, sizeof(int32_t));
      // TODO parallelize kernel
      HighestNonZeroIdx<<<1, 1>>>(coeff, nof_coeff, d_degree);
      cudaMemcpy(&h_degree, d_degree, sizeof(int32_t), cudaMemcpyDeviceToHost);
      cudaFree(d_degree);

      return h_degree + 1;
    }

    I evaluate(PolyContext& p, const D& domain_x) override
    {
      auto [coeff, nof_coeff] = p.get_coefficients();
      I *d_evaluation, *d_domain_x;
      I* d_tmp;
      cudaMalloc(&d_evaluation, sizeof(I));
      cudaMalloc(&d_domain_x, sizeof(I));
      cudaMemcpy(d_domain_x, &domain_x, sizeof(I), cudaMemcpyHostToDevice);
      cudaMalloc(&d_tmp, sizeof(I) * nof_coeff);
      const int NOF_THREADS = 32;
      const int NOF_BLOCKS = (nof_coeff + NOF_THREADS - 1) / NOF_THREADS;
      // TODO Yuval: reduce better
      evalutePolynomialWithoutReduction<<<NOF_BLOCKS, NOF_THREADS>>>(domain_x, coeff, nof_coeff, d_tmp);
      dummyReduce<<<1, 1>>>(d_tmp, nof_coeff, d_evaluation);

      I h_evaluation;
      cudaMemcpy(&h_evaluation, d_evaluation, sizeof(I), cudaMemcpyDeviceToHost);
      cudaFree(d_evaluation);
      cudaFree(d_domain_x);
      cudaFree(d_tmp);

      return h_evaluation;
    }
    void evaluate(PolyContext& p, const D* domain_x, uint32_t nof_domain_points, I* evaluations /*OUT*/) override
    {
      throw std::runtime_error("not implemented yet");
    }

    C get_coefficient(PolyContext& op, uint32_t coeff_idx) override
    {
      // TODO Yuval: implement by copying to hostreturn
      throw std::runtime_error("not implemented yet");
      return C::zero();
    }
    uint32_t get_coefficients(PolyContext& op, C* coefficients) override
    {
      throw std::runtime_error("not implemented yet");
      return 0; // TODO Yuval: implement by copying to hostreturn }
    }
  };
} // namespace polynomials