#pragma once

#include "icicle/math/modular_arithmetic.h"

template <class CONFIG>
class Field : public ModArith<Field<CONFIG>, CONFIG>
{
  // By deriving from ModArith<Field> (CRTP) we get operands defined for the type Field
  // Can add here Field specific logic (such as inverse)
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
