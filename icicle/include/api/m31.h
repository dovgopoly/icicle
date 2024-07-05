// WARNING: This file is auto-generated by a script.
// Any changes made to this file may be overwritten.
// Please modify the code generation script instead.
// Path to the code generation script: scripts/gen_c_api.py

#pragma once
#ifndef M31_API_H
#define M31_API_H

#include <cuda_runtime.h>
#include "gpu-utils/device_context.cuh"
#include "fields/stark_fields/m31.cuh"
#include "vec_ops/vec_ops.cuh"

extern "C" void m31_generate_scalars(m31::scalar_t* scalars, int size);

extern "C" cudaError_t m31_scalar_convert_montgomery(
  m31::scalar_t* d_inout, size_t n, bool is_into, device_context::DeviceContext& ctx);

extern "C" cudaError_t m31_extension_mul_cuda(
  m31::extension_t* vec_a, m31::extension_t* vec_b, int n, vec_ops::VecOpsConfig& config, m31::extension_t* result);

extern "C" cudaError_t m31_extension_add_cuda(
  m31::extension_t* vec_a, m31::extension_t* vec_b, int n, vec_ops::VecOpsConfig& config, m31::extension_t* result);

extern "C" cudaError_t m31_extension_accumulate_cuda(
  m31::extension_t* vec_a, m31::extension_t* vec_b, int n, vec_ops::VecOpsConfig& config);

extern "C" cudaError_t m31_extension_sub_cuda(
  m31::extension_t* vec_a, m31::extension_t* vec_b, int n, vec_ops::VecOpsConfig& config, m31::extension_t* result);

extern "C" cudaError_t m31_extension_transpose_matrix_cuda(
  const m31::extension_t* input,
  uint32_t row_size,
  uint32_t column_size,
  m31::extension_t* output,
  device_context::DeviceContext& ctx,
  bool on_device,
  bool is_async);

extern "C" cudaError_t m31_extension_bit_reverse_cuda(
  const m31::extension_t* input, uint64_t n, vec_ops::BitReverseConfig& config, m31::extension_t* output);


extern "C" void m31_extension_generate_scalars(m31::extension_t* scalars, int size);

extern "C" cudaError_t m31_extension_scalar_convert_montgomery(
  m31::extension_t* d_inout, size_t n, bool is_into, device_context::DeviceContext& ctx);

extern "C" cudaError_t m31_mul_cuda(
  m31::scalar_t* vec_a, m31::scalar_t* vec_b, int n, vec_ops::VecOpsConfig& config, m31::scalar_t* result);

extern "C" cudaError_t m31_add_cuda(
  m31::scalar_t* vec_a, m31::scalar_t* vec_b, int n, vec_ops::VecOpsConfig& config, m31::scalar_t* result);

extern "C" cudaError_t m31_accumulate_cuda(
  m31::scalar_t* vec_a, m31::scalar_t* vec_b, int n, vec_ops::VecOpsConfig& config);

extern "C" cudaError_t m31_sub_cuda(
  m31::scalar_t* vec_a, m31::scalar_t* vec_b, int n, vec_ops::VecOpsConfig& config, m31::scalar_t* result);

extern "C" cudaError_t m31_transpose_matrix_cuda(
  const m31::scalar_t* input,
  uint32_t row_size,
  uint32_t column_size,
  m31::scalar_t* output,
  device_context::DeviceContext& ctx,
  bool on_device,
  bool is_async);

extern "C" cudaError_t m31_bit_reverse_cuda(
  const m31::scalar_t* input, uint64_t n, vec_ops::BitReverseConfig& config, m31::scalar_t* output);


#endif