#pragma once

/**
 * This file contains methods for working with elements of a prime field. It is based on and evolved from Matter Labs'
 * [Zprize
 * submission](https://github.com/matter-labs/z-prize-msm-gpu/blob/main/bellman-cuda-rust/bellman-cuda-sys/native/ff_dispatch_st.h).
 *
 * TODO: DmytroTym: current version needs refactoring (e.g. there's no reason to have different classes Field and
 * ff_storage among other issues). But because this is an internal file and correctness and performance are unaffected,
 * refactoring it is low in the priority list.
 *
 * Documentation of methods is intended to explain inner workings to developers working on icicle. In its current state
 * it mostly explains modular multiplication and related methods. One important quirk of modern CUDA that's affecting
 * most methods is explained by [Niall Emmart](https://youtu.be/KAWlySN7Hm8?si=h7nzDujnvubWXeDX&t=4039). In short, when
 * 64-bit MAD (`r = a * b + c`) instructions get compiled down to SASS (CUDA assembly) they require two-register values
 * `r` and `c` to start from even register (e.g. `r` can live in registers 20 and 21, or 14 and 15, but not 15 and 16).
 * This complicates implementations forcing us to segregate terms into two categories depending on their alignment.
 * Which is where `even` and `odd` arrays across the codebase come from.
 */

// CUDA compiles both host and device math. CPU needs only host math.
#ifdef __CUDACC__
  #include "gpu-utils/sharedmem.h"
  #include "device_math.h"
#endif // __CUDACC__
#include "host_math.h"

#include "icicle/errors.h"
#include "icicle/utils/rand_gen.h"
#include "host_math.h"
#include "storage.h"

#include <iomanip>
#include <iostream>
#include <random>
#include <sstream>
#include <string>
#include <cassert>

using namespace icicle;

#ifdef __CUDA_ARCH__
namespace base_math = device_math;
#else
namespace base_math = host_math;
#endif

template <class CONFIG>
class Field
{
public:
  static constexpr unsigned TLC = CONFIG::limbs_count;
  static constexpr unsigned NBITS = CONFIG::modulus_bit_count;

  static constexpr HOST_DEVICE_INLINE Field zero() { return Field{CONFIG::zero}; }

  static constexpr HOST_DEVICE_INLINE Field one() { return Field{CONFIG::one}; }

  static constexpr HOST_DEVICE_INLINE Field from(uint32_t value)
  {
    storage<TLC> scalar{};
    scalar.limbs[0] = value;
    for (int i = 1; i < TLC; i++) {
      scalar.limbs[i] = 0;
    }
    return Field{scalar};
  }

  static HOST_INLINE Field omega(uint32_t logn)
  {
    if (logn == 0) { return Field{CONFIG::one}; }

    if (logn > CONFIG::omegas_count) { THROW_ICICLE_ERR(eIcicleError::INVALID_ARGUMENT, "Field: Invalid omega index"); }

    Field omega = Field{CONFIG::rou};
    for (int i = 0; i < CONFIG::omegas_count - logn; i++)
      omega = sqr(omega);
    return omega;
  }

  static HOST_INLINE Field omega_inv(uint32_t logn)
  {
    if (logn == 0) { return Field{CONFIG::one}; }

    if (logn > CONFIG::omegas_count) {
      THROW_ICICLE_ERR(eIcicleError::INVALID_ARGUMENT, "Field: Invalid omega_inv index");
    }

    Field omega = inverse(Field{CONFIG::rou});
    for (int i = 0; i < CONFIG::omegas_count - logn; i++)
      omega = sqr(omega);
    return omega;
  }

  static HOST_INLINE Field
  hex_str2scalar(const std::string& in_str) // The input string should be in a hex format - 0xABCD....
  {
    assert(in_str.substr(0, 2) == "0x" && "The input string is not in hex format!");
    std::string tmp_str = in_str.substr(2); // Strip "0x" from the string.
    int length = tmp_str.length();
    // Split string into chunks of 8 chars (for uint32_t) and store in scalar storage.
    storage<TLC> scalar{};
    // for (int str_idx=((int)((length-8)/8))*8, limb_idx = 0; str_idx>=0; str_idx-=8, limb_idx++) {   //
    // ((int)((length-8)/8))*8 is for case if length<8.
    for (int str_idx = length - 8, limb_idx = 0; str_idx >= -7;
         str_idx -= 8, limb_idx++) { // ((int)((length-8)/8))*8 is for case if length<8.
      if (str_idx < 0) {
        scalar.limbs[limb_idx] = strtoul(tmp_str.substr(0, str_idx + 8).c_str(), nullptr, 16);
      } else {
        scalar.limbs[limb_idx] = strtoul(tmp_str.substr(str_idx, 8).c_str(), nullptr, 16);
      }
    }
    return Field{scalar};
  }

  static HOST_DEVICE_INLINE Field inv_log_size(uint32_t logn)
  {
    if (logn == 0) { return Field{CONFIG::one}; }
    base_math::index_err(logn, CONFIG::omegas_count);
    storage_array<CONFIG::omegas_count, TLC> const inv = CONFIG::inv;
    return Field{inv.storages[logn - 1]};
  }

  static constexpr HOST_INLINE unsigned get_omegas_count()
  {
    if constexpr (has_member_omegas_count<CONFIG>()) {
      return CONFIG::omegas_count;
    } else {
      return 0;
    }
  }

  template <typename T>
  static constexpr bool has_member_omegas_count()
  {
    return sizeof(T::omegas_count) > 0;
  }

  // private:
  typedef storage<TLC> ff_storage;
  typedef storage<2 * TLC> ff_wide_storage;

  /**
   * A new addition to the config file - \f$ 2^{32 \cdot num\_limbs} - p \f$.
   */
  static constexpr HOST_DEVICE_INLINE ff_storage get_neg_modulus() { return CONFIG::neg_modulus; }

  /**
   * A new addition to the config file - the number of times to reduce in [reduce](@ref reduce) function.
   */
  static constexpr HOST_DEVICE_INLINE unsigned num_of_reductions() { return CONFIG::num_of_reductions; }

  static constexpr unsigned slack_bits = 32 * TLC - NBITS;

  struct Wide {
    ff_wide_storage limbs_storage;

    static constexpr Wide HOST_DEVICE_INLINE from_field(const Field& xs)
    {
      Wide out{};
#ifdef __CUDA_ARCH__
      UNROLL
#else
  #pragma unroll
#endif
      for (unsigned i = 0; i < TLC; i++)
        out.limbs_storage.limbs[i] = xs.limbs_storage.limbs[i];
      return out;
    }

    template <unsigned REDUCTION_SIZE = 1>
    static constexpr HOST_DEVICE_INLINE Wide sub_modulus_squared(const Wide& xs)
    {
      if (REDUCTION_SIZE == 0) return xs;
      const ff_wide_storage modulus = get_modulus_squared<REDUCTION_SIZE>();
      Wide rs = {};
      return sub_limbs<2 * TLC, true>(xs.limbs_storage, modulus, rs.limbs_storage) ? xs : rs;
    }

    template <unsigned MODULUS_MULTIPLE = 1>
    static constexpr HOST_DEVICE_INLINE Wide neg(const Wide& xs)
    {
      const ff_wide_storage modulus = get_modulus_squared<MODULUS_MULTIPLE>();
      Wide rs = {};
      sub_limbs<2 * TLC, false>(modulus, xs.limbs_storage, rs.limbs_storage);
      return rs;
    }

    friend HOST_DEVICE Wide operator+(Wide xs, const Wide& ys)
    {
      Wide rs = {};
      add_limbs<2 * TLC, false>(xs.limbs_storage, ys.limbs_storage, rs.limbs_storage);
      return sub_modulus_squared<1>(rs);
    }

    friend HOST_DEVICE_INLINE Wide operator-(Wide xs, const Wide& ys)
    {
      Wide rs = {};
      uint32_t carry = sub_limbs<2 * TLC, true>(xs.limbs_storage, ys.limbs_storage, rs.limbs_storage);
      if (carry == 0) return rs;
      const ff_wide_storage modulus = get_modulus_squared<1>();
      add_limbs<2 * TLC, false>(rs.limbs_storage, modulus, rs.limbs_storage);
      return rs;
    }
  };

  // return modulus multiplied by 1, 2 or 4
  template <unsigned MULTIPLIER = 1>
  static constexpr HOST_DEVICE_INLINE ff_storage get_modulus()
  {
    switch (MULTIPLIER) {
    case 1:
      return CONFIG::modulus;
    case 2:
      return CONFIG::modulus_2;
    case 4:
      return CONFIG::modulus_4;
    default:
      return {};
    }
  }

  // return m
  static constexpr HOST_DEVICE_INLINE ff_storage get_m() { return CONFIG::m; }

  // return modulus^2, helpful for ab +/- cd
  template <unsigned MULTIPLIER = 1>
  static constexpr HOST_DEVICE_INLINE ff_wide_storage get_modulus_squared()
  {
    switch (MULTIPLIER) {
    case 1:
      return CONFIG::modulus_squared;
    case 2:
      return CONFIG::modulus_squared_2;
    case 4:
      return CONFIG::modulus_squared_4;
    default:
      return {};
    }
  }

  static HOST_DEVICE_INLINE Field get_reduced_digit(int i) //TODO - check error
  {
    base_math::index_err(i, CONFIG::reduced_digits_count);
    storage_array<CONFIG::reduced_digits_count, TLC> const reduced_digits = CONFIG::reduced_digits;
    return Field{reduced_digits.storages[i]};
  }

  //   template <unsigned MULTIPLIER = 1>
  // static constexpr HOST_DEVICE_INLINE ff_wide_storage get_reduced_digit()
  // {
  //   switch (MULTIPLIER) {
  //   case 0:
  //     return CONFIG::reduced_digit_0;
  //   case 1:
  //     return CONFIG::reduced_digit_1;
  //   case 0:
  //     return CONFIG::reduced_digit_0;
  //   case 0:
  //     return CONFIG::reduced_digit_0;
  //   case 0:
  //     return CONFIG::reduced_digit_0;
  //   case 0:
  //     return CONFIG::reduced_digit_0;
  //   default:
  //     return {};
  //   }
  // }

  template <unsigned NLIMBS, bool CARRY_OUT>
  static constexpr HOST_DEVICE_INLINE uint32_t
  add_limbs(const storage<NLIMBS>& xs, const storage<NLIMBS>& ys, storage<NLIMBS>& rs)
  {
    return base_math::template add_sub_limbs<NLIMBS, false, CARRY_OUT>(xs, ys, rs);
  }

  template <unsigned NLIMBS, bool CARRY_OUT>
  static constexpr HOST_DEVICE_INLINE uint32_t
  sub_limbs(const storage<NLIMBS>& xs, const storage<NLIMBS>& ys, storage<NLIMBS>& rs)
  {
    return base_math::template add_sub_limbs<NLIMBS, true, CARRY_OUT>(xs, ys, rs);
  }

  static HOST_DEVICE_INLINE void multiply_raw(const ff_storage& as, const ff_storage& bs, ff_wide_storage& rs)
  {
    return base_math::template multiply_raw<TLC>(as, bs, rs);
  }

public:
  ff_storage limbs_storage;

  HOST_DEVICE_INLINE uint32_t* export_limbs() { return (uint32_t*)limbs_storage.limbs; }

  HOST_DEVICE_INLINE unsigned get_scalar_digit(unsigned digit_num, unsigned digit_width) const
  {
    const uint32_t limb_lsb_idx = (digit_num * digit_width) / 32;
    const uint32_t shift_bits = (digit_num * digit_width) % 32;
    unsigned rv = limbs_storage.limbs[limb_lsb_idx] >> shift_bits;
    if ((shift_bits + digit_width > 32) && (limb_lsb_idx + 1 < TLC)) {
      rv += limbs_storage.limbs[limb_lsb_idx + 1] << (32 - shift_bits);
    }
    rv &= ((1 << digit_width) - 1);
    return rv;
  }

  // NOTE this function is used for test and examples - it assumed it is executed on a single-thread (no two threads
  // accessing rand_generator at the same time)
  static HOST_INLINE Field rand_host()
  {
    std::uniform_int_distribution<unsigned> distribution;
    Field value{};
    for (unsigned i = 0; i < TLC; i++)
      value.limbs_storage.limbs[i] = distribution(rand_generator);
    while (lt(Field{get_modulus()}, value))
      value = value - Field{get_modulus()};
    return value;
  }

  static void rand_host_many(Field* out, int size)
  {
    for (int i = 0; i < size; i++)
      out[i] = rand_host();
  }

  template <unsigned REDUCTION_SIZE = 1>
  static constexpr HOST_DEVICE_INLINE Field sub_modulus(const Field& xs)
  {
    if (REDUCTION_SIZE == 0) return xs;
    const ff_storage modulus = get_modulus<REDUCTION_SIZE>();
    Field rs = {};
    return sub_limbs<TLC, true>(xs.limbs_storage, modulus, rs.limbs_storage) ? xs : rs;
  }

  friend std::ostream& operator<<(std::ostream& os, const Field& xs)
  {
    std::stringstream hex_string;
    hex_string << std::hex << std::setfill('0');

    for (int i = 0; i < TLC; i++) {
      hex_string << std::setw(8) << xs.limbs_storage.limbs[TLC - i - 1];
    }

    os << "0x" << hex_string.str();
    return os;
  }

  friend HOST_DEVICE Field operator+(Field xs, const Field& ys)
  {
    Field rs = {};
    add_limbs<TLC, false>(xs.limbs_storage, ys.limbs_storage, rs.limbs_storage);
    return sub_modulus<1>(rs);
  }

  friend HOST_DEVICE Field operator-(Field xs, const Field& ys)
  {
    Field rs = {};
    uint32_t carry = sub_limbs<TLC, true>(xs.limbs_storage, ys.limbs_storage, rs.limbs_storage);
    if (carry == 0) return rs;
    const ff_storage modulus = get_modulus<1>();
    add_limbs<TLC, false>(rs.limbs_storage, modulus, rs.limbs_storage);
    return rs;
  }

  template <unsigned MODULUS_MULTIPLE = 1>
  static constexpr HOST_DEVICE_INLINE Wide mul_wide(const Field& xs, const Field& ys)
  {
    Wide rs = {};
    multiply_raw(xs.limbs_storage, ys.limbs_storage, rs.limbs_storage);
    return rs;
  }

  /**
   * This method reduces a Wide number `xs` modulo `p` and returns the result as a Field element.
   *
   * It is assumed that the high `2 * slack_bits` bits of `xs` are unset which is always the case for the product of 2
   * numbers with their high `slack_bits` unset. Larger Wide numbers should be reduced by subtracting an appropriate
   * factor of `modulus_squared` first.
   *
   * This function implements ["multi-precision Barrett"](https://github.com/ingonyama-zk/modular_multiplication). As
   * opposed to Montgomery reduction, it doesn't require numbers to have a special representation but lets us work with
   * them as-is. The general idea of Barrett reduction is to estimate the quotient \f$ l \approx \floor{\frac{xs}{p}}
   * \f$ and return \f$ xs - l \cdot p \f$. But since \f$ l \f$ is inevitably computed with an error (it's always less
   * or equal than the real quotient). So the modulus `p` might need to be subtracted several times before the result is
   * in the desired range \f$ [0;p-1] \f$. The estimate of the error is as follows: \f[ \frac{xs}{p} - l = \frac{xs}{p}
   * - \frac{xs \cdot m}{2^{2n}} + \frac{xs \cdot m}{2^{2n}} - \floor{\frac{xs}{2^k}}\frac{m}{2^{2n-k}}
   *  + \floor{\frac{xs}{2^k}}\frac{m}{2^{2n-k}} - l \leq p^2(\frac{1}{p}-\frac{m}{2^{2n}}) + \frac{m}{2^{2n-k}} + 2(TLC
   * - 1) \cdot 2^{-32} \f] Here \f$ l \f$ is the result of [multiply_msb_raw](@ref multiply_msb_raw) function and the
   * last term in the error is due to its approximation. \f$ n \f$ is the number of bits in \f$ p \f$ and \f$ k = 2n -
   * 32\cdot TLC \f$. Overall, the error is always less than 2 so at most 2 reductions are needed. However, in most
   * cases it's less than 1, so setting the [num_of_reductions](@ref num_of_reductions) variable for a field equal to 1
   * will cause only 1 reduction to be performed.
   */
  template <unsigned MODULUS_MULTIPLE = 1>
  static constexpr HOST_DEVICE_INLINE Field reduce(const Wide& xs)
  {
    return Field{base_math::template barrett_reduce<TLC, slack_bits, num_of_reductions()>(
      xs.limbs_storage, get_m(), get_modulus(), get_modulus<2>(), get_neg_modulus())};
  }

  template <unsigned NLIMBS>
  static constexpr HOST_DEVICE_INLINE Field from(const storage<NLIMBS>& xs)
  {
    if constexpr (NLIMBS <= 2*TLC){
      return reduce(Wide{xs});
    }
    else { 
      Wide rs = {};
      // storage<2*TLC + 1> temp2 = {};
      int constexpr size = (NLIMBS + TLC - 1) / TLC;
      for (int i = 0; i < size; i++)
      {
        Field xi = {};
        // reinterpret_cast<storage<NLIMBS>>(xs.limbs + i*TLC);
        for (int j = 0; j < std::min(TLC, NLIMBS - i*TLC); j++) //TODO - don't copy
        {
          xi.limbs_storage.limbs[j] = xs.limbs[i*TLC + j];
        }
        Field pi = get_reduced_digit(i);
        // ICICLE_LOG_INFO << "xi: "<< xi.limbs_storage.limbs[0];
        // ICICLE_LOG_INFO << "pi: "<< pi.limbs_storage.limbs[0];
        Wide temp = mul_wide(xi, pi); //TODO - support 64
        rs = rs + temp;
      }
      return reduce(rs);
    }
  }

  template <unsigned NLIMBS>
  static constexpr HOST_DEVICE_INLINE Field from2(const storage<NLIMBS>& xs)
  {
    if constexpr (NLIMBS <= 2*TLC){
      return reduce(Wide{xs});
    }
    else { 
      Wide rs = {};
      // storage<2*TLC + 1> temp2 = {};
      int constexpr size = NLIMBS / TLC;
      for (int i = 0; i < size; i++) // because we assume a maximum value for size anyway, this loop can be unrolled with potential performance benefits
      {
        const Field& xi = *reinterpret_cast<const Field*>(xs.limbs + i*TLC);
        // for (int j = 0; j < std::min(TLC, NLIMBS - i*TLC); j++) //TODO - don't copy
        // {
          // xi.limbs_storage.limbs[j] = xs.limbs[i*TLC + j];
        // }
        Field pi = get_reduced_digit(i);
        // ICICLE_LOG_INFO << "xi: "<< xi.limbs_storage.limbs[0];
        // ICICLE_LOG_INFO << "pi: "<< pi.limbs_storage.limbs[0];
        Wide temp = mul_wide(xi, pi); //TODO - support 64
      //               std::cout << "from2 mul: ";
      // for (int i = 0; i < 2*TLC+2; i++)
      // {
      //   std::cout << temp.limbs_storage.limbs[i] << ",";
      // }
      // std::cout << std::endl;
        rs = rs + temp; //TODO - reduce together
      //               std::cout << "from2 add: ";
      // for (int i = 0; i < 2*TLC+2; i++)
      // {
      //   std::cout << rs.limbs_storage.limbs[i] << ",";
      // }
      // std::cout << std::endl;
      }
      int constexpr extra_limbs = NLIMBS - TLC * size;
      if constexpr (extra_limbs > 0) {
        const storage<extra_limbs>& xi = *reinterpret_cast<const storage<extra_limbs>*>(xs.limbs + size*TLC);
        Field pi = get_reduced_digit(size);
        Wide temp = {}; //need to initialize top limbs so can't use same temp.
        storage<extra_limbs+TLC>& temp_storage = *reinterpret_cast<storage<extra_limbs+TLC>*>(temp.limbs_storage.limbs);
        base_math::template multiply_raw<extra_limbs, TLC>(xi, pi.limbs_storage, temp_storage);
        // ICICLE_LOG_INFO << "xi: "<< xi;
        // ICICLE_LOG_INFO << "pi: "<< pi;
        // ICICLE_LOG_INFO << "temp2_storage: "<< temp2_storage;
        rs = rs + temp;
      }
      //       std::cout << "from2: ";
      // for (int i = 0; i < 2*TLC+2; i++)
      // {
      //   std::cout << rs.limbs_storage.limbs[i] << ",";
      // }
      // std::cout << std::endl;
      return reduce(rs);
    }
  }

  template <unsigned NLIMBS>
  static constexpr HOST_DEVICE_INLINE Field from3(const storage<NLIMBS>& xs)
  {
    if constexpr (NLIMBS <= 2*TLC){
      return reduce(Wide{xs});
    }
    else { 
      storage<2*TLC+2> rs = {};
      // storage<2*TLC + 1> temp2 = {};
      int constexpr size = NLIMBS / TLC;
      for (int i = 0; i < size; i++) // because we assume a maximum value for size anyway, this loop can be unrolled with potential performance benefits
      {
        const Field& xi = *reinterpret_cast<const Field*>(xs.limbs + i*TLC);
        // for (int j = 0; j < std::min(TLC, NLIMBS - i*TLC); j++) //TODO - don't copy
        // {
          // xi.limbs_storage.limbs[j] = xs.limbs[i*TLC + j];
        // }
        Field pi = get_reduced_digit(i);
        // ICICLE_LOG_INFO << "xi: "<< xi.limbs_storage.limbs[0];
        // ICICLE_LOG_INFO << "pi: "<< pi.limbs_storage.limbs[0];
        storage<2*TLC+2> temp = {};
        storage<2*TLC>& temp_storage = *reinterpret_cast<storage<2*TLC>*>(temp.limbs);
        base_math::template multiply_raw<TLC>(xi.limbs_storage, pi.limbs_storage, temp_storage);
      //         std::cout << "from3 mul: ";
      // for (int i = 0; i < 2*TLC+2; i++)
      // {
      //   std::cout << temp.limbs[i] << ",";
      // }
      // std::cout << std::endl;
        base_math::template add_sub_limbs<2*TLC+2,false, false>(rs, temp, rs);
      //         std::cout << "from3 add: ";
      // for (int i = 0; i < 2*TLC+2; i++)
      // {
      //   std::cout << rs.limbs[i] << ",";
      // }
      // std::cout << std::endl;
      }
      int constexpr extra_limbs = NLIMBS - TLC * size;
      if constexpr (extra_limbs > 0) {
        const storage<extra_limbs>& xi = *reinterpret_cast<const storage<extra_limbs>*>(xs.limbs + size*TLC);
        Field pi = get_reduced_digit(size);
        storage<2*TLC+2> temp = {}; //need to initialize top limbs so can't use same temp.
        storage<extra_limbs+TLC>& temp_storage = *reinterpret_cast<storage<extra_limbs+TLC>*>(temp.limbs);
        base_math::template multiply_raw<extra_limbs, TLC>(xi, pi.limbs_storage, temp_storage);
        base_math::template add_sub_limbs<2*TLC+2,false, false>(rs, temp, rs);
      }
      // std::cout << "from3 res: ";
      // for (int i = 0; i < 2*TLC+2; i++)
      // {
      //   std::cout << rs.limbs[i] << ",";
      // }
      // std::cout << std::endl;
      //3 options - barrett with larger m, sub to wide, use from2
      return from2(rs);
      // return {};
    }
  }

  HOST_DEVICE Field& operator=(Field const& other)
  {
#pragma unroll
    for (int i = 0; i < TLC; i++) {
      this->limbs_storage.limbs[i] = other.limbs_storage.limbs[i];
    }
    return *this;
  }

  friend HOST_DEVICE Field operator*(const Field& xs, const Field& ys)
  {
    Wide xy = mul_wide(xs, ys); // full mult
    return reduce(xy);          // reduce mod p
  }

  friend HOST_DEVICE bool operator==(const Field& xs, const Field& ys)
  {
    return base_math::template is_equal<TLC>(xs.limbs_storage, ys.limbs_storage);
  }

  friend HOST_DEVICE bool operator!=(const Field& xs, const Field& ys) { return !(xs == ys); }

  template <typename Gen, bool IS_3B = false>
  static HOST_DEVICE_INLINE Field mul_weierstrass_b(const Field& xs)
  {
    Field r = {};
    constexpr Field b_mult = []() {
      Field b_mult = Field{Gen::weierstrass_b};
      if constexpr (!IS_3B) return b_mult;
      ff_storage temp = {};
      ff_storage modulus = get_modulus<>();
      host_math::template add_sub_limbs<TLC, false, false, true>(
        b_mult.limbs_storage, b_mult.limbs_storage, b_mult.limbs_storage);
      b_mult.limbs_storage =
        host_math::template add_sub_limbs<TLC, true, true, true>(b_mult.limbs_storage, modulus, temp)
          ? b_mult.limbs_storage
          : temp;
      host_math::template add_sub_limbs<TLC, false, false, true>(
        b_mult.limbs_storage, Field{Gen::weierstrass_b}.limbs_storage, b_mult.limbs_storage);
      b_mult.limbs_storage =
        host_math::template add_sub_limbs<TLC, true, true, true>(b_mult.limbs_storage, modulus, temp)
          ? b_mult.limbs_storage
          : temp;
      return b_mult;
    }();

    if constexpr (Gen::is_b_u32) { // assumes that 3b is also u32
      r = mul_unsigned<b_mult.limbs_storage.limbs[0], Field>(xs);
      if constexpr (Gen::is_b_neg)
        return neg(r);
      else {
        return r;
      }
    } else {
      return b_mult * xs;
    }
  }

  template <const Field& multiplier>
  static HOST_DEVICE_INLINE Field mul_const(const Field& xs)
  {
    constexpr bool is_u32 = []() {
      bool is_u32 = true;
      for (unsigned i = 1; i < TLC; i++)
        is_u32 &= (multiplier.limbs_storage.limbs[i] == 0);
      return is_u32;
    }();

    if constexpr (is_u32) return mul_unsigned<multiplier.limbs_storage.limbs[0], Field>(xs);

    // This is not really a copy but required for CUDA compilation since the template param is not in the device memory
    Field mult = multiplier;
    return mult * xs;
  }

  template <uint32_t multiplier, class T, unsigned REDUCTION_SIZE = 1>
  static constexpr HOST_DEVICE_INLINE T mul_unsigned(const T& xs)
  {
    T rs = {};
    T temp = xs;
    bool is_zero = true;
#ifdef __CUDA_ARCH__
    UNROLL
#else
  #pragma unroll
#endif
    for (unsigned i = 0; i < 32; i++) {
      if (multiplier & (1 << i)) {
        rs = is_zero ? temp : (rs + temp);
        is_zero = false;
      }
      if (multiplier & ((1 << (31 - i - 1)) << (i + 1))) break;
      temp = temp + temp;
    }
    return rs;
  }

  template <unsigned MODULUS_MULTIPLE = 1>
  static constexpr HOST_DEVICE_INLINE Wide sqr_wide(const Field& xs)
  {
    // TODO: change to a more efficient squaring
    return mul_wide<MODULUS_MULTIPLE>(xs, xs);
  }

  template <unsigned MODULUS_MULTIPLE = 1>
  static constexpr HOST_DEVICE_INLINE Field sqr(const Field& xs)
  {
    // TODO: change to a more efficient squaring
    return xs * xs;
  }

  static constexpr HOST_DEVICE_INLINE Field to_montgomery(const Field& xs) { return xs * Field{CONFIG::montgomery_r}; }

  static constexpr HOST_DEVICE_INLINE Field from_montgomery(const Field& xs)
  {
    return xs * Field{CONFIG::montgomery_r_inv};
  }

  template <unsigned MODULUS_MULTIPLE = 1>
  static constexpr HOST_DEVICE Field neg(const Field& xs)
  {
    const ff_storage modulus = get_modulus<MODULUS_MULTIPLE>();
    Field rs = {};
    sub_limbs<TLC, false>(modulus, xs.limbs_storage, rs.limbs_storage);
    return rs;
  }

  // Assumes the number is even!
  template <unsigned MODULUS_MULTIPLE = 1>
  static constexpr HOST_DEVICE_INLINE Field div2(const Field& xs)
  {
    Field rs = {};
    base_math::template div2<TLC>(xs.limbs_storage, rs.limbs_storage);
    return sub_modulus<MODULUS_MULTIPLE>(rs);
  }

  static constexpr HOST_DEVICE_INLINE bool lt(const Field& xs, const Field& ys)
  {
    ff_storage dummy = {};
    uint32_t carry = sub_limbs<TLC, true>(xs.limbs_storage, ys.limbs_storage, dummy);
    return carry;
  }

  static constexpr HOST_DEVICE_INLINE bool is_odd(const Field& xs) { return xs.limbs_storage.limbs[0] & 1; }

  static constexpr HOST_DEVICE_INLINE bool is_even(const Field& xs) { return ~xs.limbs_storage.limbs[0] & 1; }

  static constexpr HOST_DEVICE Field inverse(const Field& xs)
  {
    if (xs == zero()) return zero();
    constexpr Field one = Field{CONFIG::one};
    constexpr ff_storage modulus = CONFIG::modulus;
    Field u = xs;
    Field v = Field{modulus};
    Field b = one;
    Field c = {};
    while (!(u == one) && !(v == one)) {
      while (is_even(u)) {
        u = div2(u);
        if (is_odd(b)) add_limbs<TLC, false>(b.limbs_storage, modulus, b.limbs_storage);
        b = div2(b);
      }
      while (is_even(v)) {
        v = div2(v);
        if (is_odd(c)) add_limbs<TLC, false>(c.limbs_storage, modulus, c.limbs_storage);
        c = div2(c);
      }
      if (lt(v, u)) {
        u = u - v;
        b = b - c;
      } else {
        v = v - u;
        c = c - b;
      }
    }
    return (u == one) ? b : c;
  }

  static constexpr HOST_DEVICE Field pow(Field base, int exp)
  {
    Field res = one();
    while (exp > 0) {
      if (exp & 1) res = res * base;
      base = base * base;
      exp >>= 1;
    }
    return res;
  }
};

template <class CONFIG>
struct std::hash<Field<CONFIG>> {
  std::size_t operator()(const Field<CONFIG>& key) const
  {
    std::size_t hash = 0;
    // boost hashing, see
    // https://stackoverflow.com/questions/35985960/c-why-is-boosthash-combine-the-best-way-to-combine-hash-values/35991300#35991300
    for (int i = 0; i < CONFIG::limbs_count; i++)
      hash ^= std::hash<uint32_t>()(key.limbs_storage.limbs[i]) + 0x9e3779b9 + (hash << 6) + (hash >> 2);
    return hash;
  }
};

#ifdef __CUDACC__
template <class CONFIG>
struct SharedMemory<Field<CONFIG>> {
  __device__ Field<CONFIG>* getPointer()
  {
    extern __shared__ Field<CONFIG> s_scalar_[];
    return s_scalar_;
  }
};

#endif // __CUDACC__
