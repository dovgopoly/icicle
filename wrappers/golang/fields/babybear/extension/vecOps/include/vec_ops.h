#include <stdbool.h>

#ifndef _BABYBEAR_EXTENSION_VEC_OPS_H
#define _BABYBEAR_EXTENSION_VEC_OPS_H

#ifdef __cplusplus
extern "C" {
#endif

typedef struct scalar_t scalar_t;
typedef struct VecOpsConfig VecOpsConfig;
typedef struct DeviceContext DeviceContext;

int babybear_extension_vector_mul(
  scalar_t* vec_a,
  scalar_t* vec_b,
  int n,
  VecOpsConfig* config,
  scalar_t* result
);

int babybear_extension_vector_add(
  scalar_t* vec_a,
  scalar_t* vec_b,
  int n,
  VecOpsConfig* config,
  scalar_t* result
);

int babybear_extension_vector_sub(
  scalar_t* vec_a,
  scalar_t* vec_b,
  int n,
  VecOpsConfig* config,
  scalar_t* result
);

int babybear_extension_matrix_transpose(
  scalar_t* mat_in,
  int row_size,
  int column_size,
  VecOpsConfig* config,
  scalar_t* mat_out
);

int babybear_extension_vector_mixed_mul(
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
