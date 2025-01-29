#include "fields/field_config.cuh"
using namespace field_config;

#include "fri.cu"
#include "utils/utils.h"
#include "fields/point.cuh"

namespace fri {
  /**
   * Extern "C" version of [fold_line](@ref fold_line) function with the following values of
   * template parameters (where the field is given by `-DFIELD` env variable during build):
   *  - `E` is the extension field type used for evaluations and alpha
   *  - `S` is the scalar field type used for domain elements
   * @param line_eval Pointer to the array of evaluations on the line
   * @param domain_elements Pointer to the array of domain elements
   * @param alpha The folding factor
   * @param folded_evals Pointer to the array where folded evaluations will be stored
   * @param n The number of evaluations
   * @param ctx The device context; if the stream is not 0, then everything is run async
   * @return `cudaSuccess` if the execution was successful and an error code otherwise.
   */
  extern "C" cudaError_t CONCAT_EXPAND(FIELD, fold_line)(
    scalar_t* line_eval1,
    scalar_t* line_eval2,
    scalar_t* line_eval3,
    scalar_t* line_eval4,
    scalar_t* domain_elements,
    q_extension_t alpha,
    scalar_t* folded_evals1,
    scalar_t* folded_evals2,
    scalar_t* folded_evals3,
    scalar_t* folded_evals4,
    uint64_t n,
    FriConfig& cfg)
  {
    return fri::fold_line(
      line_eval1, 
      line_eval2, 
      line_eval3, 
      line_eval4, 
      domain_elements, 
      alpha, 
      folded_evals1, 
      folded_evals2, 
      folded_evals3, 
      folded_evals4, 
      n, 
      cfg
    );
  };

  extern "C" cudaError_t CONCAT_EXPAND(FIELD, fold_line_new)(
    scalar_t* line_eval1,
    scalar_t* line_eval2,
    scalar_t* line_eval3,
    scalar_t* line_eval4,
    uint64_t line_domain_initial_index,
    uint32_t line_domain_log_size,
    q_extension_t alpha,
    scalar_t* folded_evals1,
    scalar_t* folded_evals2,
    scalar_t* folded_evals3,
    scalar_t* folded_evals4,
    uint64_t n,
    FriConfig& cfg)
  {
    line_t line_domain(line_domain_initial_index, line_domain_log_size);
    line_t test_domain(coset_t::half_odds(line_domain_log_size));
    scalar_t* domain_elements;
    line_domain.get_twiddles(&domain_elements);
    cfg.are_domain_elements_on_device = true;
    return fri::fold_line(
      line_eval1, 
      line_eval2, 
      line_eval3, 
      line_eval4, 
      domain_elements, 
      alpha, 
      folded_evals1, 
      folded_evals2, 
      folded_evals3, 
      folded_evals4, 
      n, 
      cfg
    );
  };

  /**
   * Extern "C" version of [fold_circle_into_line](@ref fold_circle_into_line) function with the following values of
   * template parameters (where the field is given by `-DFIELD` env variable during build):
   *  - `E` is the extension field type used for evaluations and alpha
   *  - `S` is the scalar field type used for domain elements
   * @param circle_evals Pointer to the array of evaluations on the circle
   * @param domain_elements Pointer to the array of domain elements
   * @param alpha The folding factor
   * @param folded_line_evals Pointer to the array where folded evaluations will be stored
   * @param n The number of evaluations
   * @param ctx The device context; if the stream is not 0, then everything is run async
   * @return `cudaSuccess` if the execution was successful and an error code otherwise.
   */
  extern "C" cudaError_t CONCAT_EXPAND(FIELD, fold_circle_into_line)(
    scalar_t* circle_evals1,
    scalar_t* circle_evals2,
    scalar_t* circle_evals3,
    scalar_t* circle_evals4,
    scalar_t* domain_elements,
    q_extension_t alpha,
    scalar_t* folded_line_evals1,
    scalar_t* folded_line_evals2,
    scalar_t* folded_line_evals3,
    scalar_t* folded_line_evals4,
    uint64_t n,
    FriConfig& cfg)
  {
    return fri::fold_circle_into_line(
      circle_evals1,  
      circle_evals2,  
      circle_evals3,  
      circle_evals4,  
      domain_elements, 
      alpha, 
      folded_line_evals1, 
      folded_line_evals2, 
      folded_line_evals3, 
      folded_line_evals4, 
      n, 
      cfg
    );
  };

  extern "C" cudaError_t CONCAT_EXPAND(FIELD, fold_circle_into_line_new)(
    scalar_t* circle_evals1,
    scalar_t* circle_evals2,
    scalar_t* circle_evals3,
    scalar_t* circle_evals4,
    uint64_t domain_initial_index,
    uint32_t domain_log_size,
    q_extension_t alpha,
    scalar_t* folded_line_evals1,
    scalar_t* folded_line_evals2,
    scalar_t* folded_line_evals3,
    scalar_t* folded_line_evals4,
    uint64_t n,
    FriConfig& cfg)
  {
    domain_t test_domain(domain_log_size + 1);
    domain_t domain(coset_t(domain_initial_index, domain_log_size));
    scalar_t* domain_elements;
    domain.get_twiddles(&domain_elements);
    cfg.are_domain_elements_on_device = true;
    return fri::fold_circle_into_line(
      circle_evals1,  
      circle_evals2,  
      circle_evals3,  
      circle_evals4,  
      domain_elements, 
      alpha, 
      folded_line_evals1, 
      folded_line_evals2, 
      folded_line_evals3, 
      folded_line_evals4, 
      n, 
      cfg
    );
  };

  extern "C" cudaError_t CONCAT_EXPAND(FIELD, precompute_fri_twiddles)(
    uint32_t log_size
    )
  {
    CHK_INIT_IF_RETURN();
    for(uint32_t i = 2; i <= log_size; ++i) {
      coset_t coset = coset_t::half_odds(i);
      domain_t domain(coset);
      domain.compute_twiddles();
      line_t line_domain(coset);
      line_domain.compute_twiddles();
    }
    return CHK_LAST();
  };
} // namespace fri
