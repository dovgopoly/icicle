// WARNING: This file is auto-generated by a script.
// Any changes made to this file may be overwritten.
// Please modify the code generation script instead.
// Path to the code generation script: scripts/gen_c_api.py

#pragma once

#include "icicle/fields/stark_fields/stark252.h"
#include "icicle/ntt.h"
#include "icicle/vec_ops.h"

extern "C" eIcicleError stark252_ntt_init_domain(
  stark252::scalar_t* primitive_root, const NTTInitDomainConfig* config);

extern "C" eIcicleError stark252_ntt(
  const stark252::scalar_t* input, int size, NTTDir dir, const NTTConfig<stark252::scalar_t>* config, stark252::scalar_t* output);

extern "C" eIcicleError stark252_ntt_release_domain();

extern "C" eIcicleError stark252_vector_mul(
  const stark252::scalar_t* vec_a, const stark252::scalar_t* vec_b, uint64_t n, const VecOpsConfig* config, stark252::scalar_t* result);

extern "C" eIcicleError stark252_vector_add(
  const stark252::scalar_t* vec_a, const stark252::scalar_t* vec_b, uint64_t n, const VecOpsConfig* config, stark252::scalar_t* result);

extern "C" eIcicleError stark252_vector_sub(
  const stark252::scalar_t* vec_a, const stark252::scalar_t* vec_b, uint64_t n, const VecOpsConfig* config, stark252::scalar_t* result);

extern "C" eIcicleError stark252_matrix_transpose(
  const stark252::scalar_t* input,
  uint32_t nof_rows,
  uint32_t nof_cols,
  const VecOpsConfig* config,
  stark252::scalar_t* output);

extern "C" eIcicleError stark252_bit_reverse(
  const stark252::scalar_t* input, uint64_t n, const VecOpsConfig* config, stark252::scalar_t* output);


extern "C" void stark252_generate_scalars(stark252::scalar_t* scalars, int size);

extern "C" void stark252_scalar_convert_montgomery(
  const stark252::scalar_t* input, uint64_t size, bool is_into, const VecOpsConfig* config, stark252::scalar_t* output);

