#include <cuda_runtime.h>
#include <iostream>
#include <chrono>
#include <vector>

constexpr uint32_t P = 2147483647; // 2 ** 31 - 1

// CUDA Kernel for hierarchical folding
__global__ void foldKernel(uint64_t* values, const uint64_t* factors, int n, int numFactors, int level)
{
  int idx = threadIdx.x + blockIdx.x * blockDim.x;
  if (idx < n) {
    // Step size doubles at each level
    int step = 1 << (level + 1);
    int invlevel = numFactors - level - 1;

    if (idx < n / step) {
      // Compute indices for the pair to be reduced
      int leftIdx = idx * step;
      int rightIdx = leftIdx + step / 2;

      // Perform the folding operation
      values[leftIdx] = (values[leftIdx] + (factors[invlevel] * values[rightIdx])) % P;
    }
  }
}

template <typename E, typename S>
__global__ void
fold_kernel_2(S* values, const E* folding_factors, const int level, const int nlog2, const int n, E* result)
{
  int idx = (blockIdx.x * blockDim.x + threadIdx.x) * 2;
  int step = 1 << (nlog2 - level - 1);
  int offset = idx + step;
  if (offset + (step - 1) < n) {
    result[idx] = (values[idx] + (folding_factors[level] * values[offset])) % P;
  }
  __syncthreads();
}

// Wrapper function to handle CUDA kernel invocation
void hierarchicalFold(std::vector<uint64_t>& values, const std::vector<uint64_t>& factors)
{
  int n = values.size();
  int numFactors = factors.size();

  // Validate input
  if ((1 << numFactors) != n) {
    throw std::invalid_argument("Number of elements must be a power of 2 matching the number of factors.");
  }

  // Allocate device memory
  uint64_t* d_values;
  uint64_t* d_factors;
  cudaMalloc(&d_values, n * sizeof(uint64_t));
  cudaMalloc(&d_factors, numFactors * sizeof(uint64_t));

  // Copy data to device
  cudaMemcpy(d_values, values.data(), n * sizeof(uint64_t), cudaMemcpyHostToDevice);
  cudaMemcpy(d_factors, factors.data(), numFactors * sizeof(uint64_t), cudaMemcpyHostToDevice);

  int blockSize = 1024;

  int nlog2 = log2(n);

  // Launch kernel
  int gridSize = (n + blockSize - 1) / blockSize;

  auto start = std::chrono::high_resolution_clock::now();
  for (int level = 0; level < numFactors; ++level) {
    foldKernel<<<gridSize, blockSize>>>(d_values, d_factors, n, numFactors, level);
  }
  auto end = std::chrono::high_resolution_clock::now();

  std::chrono::duration<double, std::milli> elapsed = end - start;
  std::cout << "time for 2^" << numFactors << " is: " << elapsed.count() << " ms" << std::endl;
  // Copy result back to host
  cudaMemcpy(values.data(), d_values, n * sizeof(uint64_t), cudaMemcpyDeviceToHost);

  // Free device memory
  cudaFree(d_values);
  cudaFree(d_factors);
}

int main()
{
  // Example input
  // std::vector<uint64_t> values = {1, 2, 3, 4, 5, 6, 7, 8};
  // std::vector<uint64_t> factors = {2, 3, 4}; // Folding factors

  // Set the length of factors
  const size_t factors_length = 20;                 // Example length
  const size_t values_length = 1 << factors_length; // 2^factors_length

  // Initialize the `values` vector
  std::vector<uint64_t> values(values_length);
  for (size_t i = 0; i < values_length; ++i) {
    values[i] = static_cast<uint64_t>(i + 1); // Populate with 1, 2, ..., values_length
  }

  // Initialize the `factors` vector
  std::vector<uint64_t> factors(factors_length);
  for (size_t i = 0; i < factors_length; ++i) {
    factors[i] = static_cast<uint64_t>(i + 2); // Populate with 2, 3, ..., factors_length + 1
  }

  try {
    for (size_t i = 0; i < 1; ++i) {
      for (size_t j = 0; j < values_length; ++j) {
        values[j] = static_cast<uint64_t>(j + 1); // Populate with 1, 2, ..., values_length
      }
      hierarchicalFold(values, factors);
      // if (values[0] != 65782334) {
      //   std::cout << "Error: " << values[0] << " " << i << std::endl;

      //   return;
      // }
    }
    std::cout << "Folded result: ";
    for (uint64_t v : values) {
      std::cout << v << " ";
      if (values_length > 128) break;
    }
    std::cout << std::endl;
  } catch (const std::exception& e) {
    std::cerr << "Error: " << e.what() << std::endl;
  }

  return 0;
}
