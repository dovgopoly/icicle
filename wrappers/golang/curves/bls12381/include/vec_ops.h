#include <cuda_runtime.h>
#include "../../include/types.h"

#ifndef _BLS12_381_VEC_OPS_H
#define _BLS12_381_VEC_OPS_H

#ifdef __cplusplus
extern "C" {
#endif

cudaError_t bls12_381MulCuda(
  scalar_t* vec_a,
  scalar_t* vec_b,
  int n,
  VecOpsConfig* config,
  scalar_t* result
);

cudaError_t bls12_381AddCuda(
  scalar_t* vec_a,
  scalar_t* vec_b,
  int n,
  VecOpsConfig* config,
  scalar_t* result
);

cudaError_t bls12_381SubCuda(
  scalar_t* vec_a,
  scalar_t* vec_b,
  int n,
  VecOpsConfig* config,
  scalar_t* result
);

#ifdef __cplusplus
}
#endif

#endif
