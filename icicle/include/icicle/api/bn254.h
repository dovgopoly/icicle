
// *****************************************************************************
// * DEPRECATED HEADER FILE                                                    *
// *****************************************************************************
// * This header file is deprecated and should not be used in new code.        *
// * It is maintained only for backward compatibility and may be removed in    *
// * a future release.                                                         *
// *                                                                           *
// * Deprecation Date: January 15, 2025                                        *
// *                                                                           *
// * Please migrate to using template headers with the corresponding types.    *
// * For example:                                                              *
// *                                                                           *
// *   #include "icicle/curves/params/bn254.h"                                 *
// *   #include "icicle/msm.h"                                                 *
// *   #include "icicle/ntt.h"                                                 *
// *   #include "icicle/vec_ops.h"                                             *
// *                                                                           *
// *   Option 1: Bring the namespace into scope (simplifies usage):            *
// *     using namespace bn254;                                                *
// *     scalar_t a;                                                           *
// *     projective_t p;                                                       *
// *     affine_t q;                                                           *
// *                                                                           *
// *   Option 2: Use fully qualified names (avoids namespace conflicts):       *
// *     bn254::scalar_t a;                                                    *
// *     bn254::projective_t p;                                                *
// *     bn254::affine_t q;                                                    *
// *                                                                           *
// * Note: The bn254 namespace also includes other types such as G2 types,     *
// *       which are not explicitly mentioned here but are accessible through  *
// *       the same pattern of usage.                                          *
// *                                                                           *
// *****************************************************************************

// WARNING: This file is auto-generated by a script.
// Any changes made to this file may be overwritten.
// Please modify the code generation script instead.
// Path to the code generation script: scripts/gen_c_api.py

#pragma once

#include "icicle/curves/params/bn254.h"
#include "icicle/ntt.h"
#include "icicle/msm.h"
#include "icicle/vec_ops.h"

extern "C" bool bn254_eq(bn254::projective_t* point1, bn254::projective_t* point2);

extern "C" void bn254_to_affine(bn254::projective_t* point, bn254::affine_t* point_out);

extern "C" void bn254_generate_projective_points(bn254::projective_t* points, int size);

extern "C" void bn254_generate_affine_points(bn254::affine_t* points, int size);

extern "C" eIcicleError bn254_affine_convert_montgomery(
  const bn254::affine_t* input, size_t n, bool is_into, const VecOpsConfig* config, bn254::affine_t* output);

extern "C" eIcicleError bn254_projective_convert_montgomery(
  const bn254::projective_t* input, size_t n, bool is_into, const VecOpsConfig* config, bn254::projective_t* output);

extern "C" eIcicleError bn254_ecntt(
  const bn254::projective_t* input,
  int size,
  NTTDir dir,
  const NTTConfig<bn254::scalar_t>* config,
  bn254::projective_t* output);

extern "C" eIcicleError bn254_precompute_msm_bases(
  const bn254::affine_t* bases, int nof_bases, const MSMConfig* config, bn254::affine_t* output_bases);

extern "C" eIcicleError bn254_msm(
  const bn254::scalar_t* scalars,
  const bn254::affine_t* points,
  int msm_size,
  const MSMConfig* config,
  bn254::projective_t* out);

extern "C" bool bn254_g2_eq(bn254::g2_projective_t* point1, bn254::g2_projective_t* point2);

extern "C" void bn254_g2_to_affine(bn254::g2_projective_t* point, bn254::g2_affine_t* point_out);

extern "C" void bn254_g2_generate_projective_points(bn254::g2_projective_t* points, int size);

extern "C" void bn254_g2_generate_affine_points(bn254::g2_affine_t* points, int size);

extern "C" eIcicleError bn254_g2_affine_convert_montgomery(
  const bn254::g2_affine_t* input, size_t n, bool is_into, const VecOpsConfig* config, bn254::g2_affine_t* output);

extern "C" eIcicleError bn254_g2_projective_convert_montgomery(
  const bn254::g2_projective_t* input,
  size_t n,
  bool is_into,
  const VecOpsConfig* config,
  bn254::g2_projective_t* output);

extern "C" eIcicleError bn254_g2_precompute_msm_bases(
  const bn254::g2_affine_t* bases, int nof_bases, const MSMConfig* config, bn254::g2_affine_t* output_bases);

extern "C" eIcicleError bn254_g2_msm(
  const bn254::scalar_t* scalars,
  const bn254::g2_affine_t* points,
  int msm_size,
  const MSMConfig* config,
  bn254::g2_projective_t* out);

extern "C" eIcicleError bn254_ntt_init_domain(bn254::scalar_t* primitive_root, const NTTInitDomainConfig* config);

extern "C" eIcicleError bn254_ntt(
  const bn254::scalar_t* input,
  int size,
  NTTDir dir,
  const NTTConfig<bn254::scalar_t>* config,
  bn254::scalar_t* output);

extern "C" eIcicleError bn254_ntt_release_domain();

extern "C" eIcicleError bn254_vector_mul(
  const bn254::scalar_t* vec_a,
  const bn254::scalar_t* vec_b,
  uint64_t n,
  const VecOpsConfig* config,
  bn254::scalar_t* result);

extern "C" eIcicleError bn254_vector_add(
  const bn254::scalar_t* vec_a,
  const bn254::scalar_t* vec_b,
  uint64_t n,
  const VecOpsConfig* config,
  bn254::scalar_t* result);

extern "C" eIcicleError bn254_vector_sub(
  const bn254::scalar_t* vec_a,
  const bn254::scalar_t* vec_b,
  uint64_t n,
  const VecOpsConfig* config,
  bn254::scalar_t* result);

extern "C" eIcicleError bn254_matrix_transpose(
  const bn254::scalar_t* input,
  uint32_t nof_rows,
  uint32_t nof_cols,
  const VecOpsConfig* config,
  bn254::scalar_t* output);

extern "C" eIcicleError
bn254_bit_reverse(const bn254::scalar_t* input, uint64_t n, const VecOpsConfig* config, bn254::scalar_t* output);

extern "C" void bn254_generate_scalars(bn254::scalar_t* scalars, int size);

extern "C" void bn254_scalar_convert_montgomery(
  const bn254::scalar_t* input, uint64_t size, bool is_into, const VecOpsConfig* config, bn254::scalar_t* output);
