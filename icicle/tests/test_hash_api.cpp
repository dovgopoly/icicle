#include <gtest/gtest.h>
#include <iostream>
#include <random>

#include "icicle/runtime.h"
#include "icicle/utils/log.h"
#include "icicle/hash/hash.h"
#include "icicle/hash/keccak.h"
#include "icicle/merkle/merkle_tree.h"

using namespace icicle;

using FpMicroseconds = std::chrono::duration<float, std::chrono::microseconds::period>;
#define START_TIMER(timer) auto timer##_start = std::chrono::high_resolution_clock::now();
#define END_TIMER(timer, msg, enable)                                                                                  \
  if (enable)                                                                                                          \
    printf(                                                                                                            \
      "%s: %.3f ms\n", msg, FpMicroseconds(std::chrono::high_resolution_clock::now() - timer##_start).count() / 1000);

static bool VERBOSE = true;
static inline std::string s_main_target;
static inline std::string s_reference_target;

class HashApiTest : public ::testing::Test
{
public:
  // SetUpTestSuite/TearDownTestSuite are called once for the entire test suite
  static void SetUpTestSuite()
  {
#ifdef BACKEND_BUILD_DIR
    setenv("ICICLE_BACKEND_INSTALL_DIR", BACKEND_BUILD_DIR, 0 /*=replace*/);
#endif
    icicle_load_backend_from_env_or_default();

    const bool is_cuda_registered = is_device_registered("CUDA");
    if (!is_cuda_registered) { ICICLE_LOG_ERROR << "CUDA device not found. Testing CPU vs CPU"; }
    s_main_target = is_cuda_registered ? "CUDA" : "CPU";
    s_reference_target = "CPU";
  }
  static void TearDownTestSuite()
  {
    // make sure to fail in CI if only have one device
    // ICICLE_ASSERT(is_device_registered("CUDA")) << "missing CUDA backend";
  }

  // SetUp/TearDown are called before and after each test
  void SetUp() override {}
  void TearDown() override {}

  template <typename T>
  void randomize(T* arr, uint64_t size)
  {
    // Create a random number generator
    std::random_device rd;                                       // Non-deterministic random number generator
    std::mt19937 gen(rd());                                      // Mersenne Twister engine seeded with rd()
    std::uniform_int_distribution<uint32_t> dist(0, UINT32_MAX); // Range of random numbers

    // Fill the array with random values
    uint32_t* u32_arr = (uint32_t*)arr;
    for (int i = 0; i < (size * sizeof(T) / sizeof(uint32_t)); ++i) {
      u32_arr[i] = dist(gen);
    }
  }
};

TEST_F(HashApiTest, Keccak256)
{
  const uint64_t input_size = 64; // Number of input elements
  const uint64_t output_size = 256;

  // Create unique pointers for input and output arrays
  auto input = std::make_unique<uint32_t[]>(input_size);
  auto output = std::make_unique<std::byte[]>(output_size);

  // Randomize the input array
  randomize(input.get(), input_size);

  auto config = default_hash_config();
  // Create Keccak-256 hash object
  auto keccak256 = Keccak256::create();
  // Run single hash operation
  ICICLE_CHECK(keccak256.hash(input.get(), input_size, config, output.get()));

  // Batch hash (hashing each half separately)
  auto output_batch = std::make_unique<std::byte[]>(output_size * 2);
  config.batch = 2;
  ICICLE_CHECK(keccak256.hash(input.get(), input_size / 2, config, output_batch.get()));
  // TODO: Verify output (e.g., check CPU against CUDA)
}

// TODO: add tests for all hashes

/****************************** Merkle **********************************/
class HashSumBackend : public HashBackend
{
public:
  HashSumBackend(uint64_t input_chunk_size, uint64_t output_size)
      : HashBackend("HashSumTest", output_size, input_chunk_size)
  {
  }

  eIcicleError hash(const std::byte* input, uint64_t size, const HashConfig& config, std::byte* output) const override
  {
    const auto chunk_size = get_single_chunk_size(size);
    const auto otput_digest_size = output_size();
    for (int i = 0; i < config.batch; ++i) {
      hash_single(input, size, config, output);
      input += chunk_size;
      output += otput_digest_size;
    }
    return eIcicleError::SUCCESS;
  }

  void hash_single(const std::byte* input, uint64_t size, const HashConfig& config, std::byte* output) const
  {
    const uint32_t* input_u32 = (const uint32_t*)input;
    uint32_t* output_u32 = (uint32_t*)output;

    output_u32[0] = 0;
    for (int i = 0; i < (size >> 2); ++i) {
      output_u32[0] += input_u32[i];
    }
    for (int i = 1; i < (output_size() >> 2); ++i) {
      output_u32[i] += output_u32[0];
    }
  }

  static Hash create(uint64_t input_chunk_size, uint64_t output_size)
  {
    auto backend = std::make_shared<HashSumBackend>(input_chunk_size, output_size);
    return Hash(backend);
  }
};

TEST_F(HashApiTest, MerkleTree)
{
  // define input
  constexpr int nof_leaves = 100;
  uint32_t leaves[nof_leaves];
  const size_t input_size = sizeof(leaves);
  for (int i = 0; i < nof_leaves; ++i) {
    leaves[i] = i;
  }

  // define the merkle tree
  auto config = default_merkle_tree_config();
  auto layer0_hash = HashSumBackend::create(20, 8); // input 20 bytes, output 8 bytes input   400B ->  160B
  auto layer1_hash = HashSumBackend::create(16, 2); // input 16 bytes, output 2 bytes         160B ->  20B
  auto layer2_hash = HashSumBackend::create(20, 8); // input 20 bytes, output 8 bytes         20B  ->  8B    output
  auto leaf_element_size = 4;
  auto merkle_tree =
    MerkleTree::create({layer0_hash, layer1_hash, layer2_hash}, leaf_element_size, 2 /*min level to store*/);

  // build tree
  ICICLE_CHECK(merkle_tree.build(leaves, input_size, config));

  // get root and merkle-path to an element
  uint64_t leaf_idx = 5;
  auto [root, root_size] = merkle_tree.get_merkle_root();
  MerkleProof merkle_proof{};
  ICICLE_CHECK(merkle_tree.get_merkle_proof(leaves, leaf_idx, config, merkle_proof));

  bool verification_valid = false;
  ICICLE_CHECK(merkle_tree.verify(merkle_proof, verification_valid));
  ASSERT_TRUE(verification_valid);
}

#ifdef POSEIDON
// p = 0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001 

#include "icicle/fields/field_config.h"
#include "..//tests/poseidon_constants/poseidon_input_and_ref_value.h"

using namespace field_config;
using namespace poseidon_constants_bn254;

#include "icicle/hash/poseidon.h"

// TEST_F(HashApiTest, poseidon12)
// {
//   const uint64_t arity = 12; // Number of input elements
//   std::cout << "Running HashApiTest.poseidon3 test" << std::endl;

//   // Create unique pointers for input and output arrays
//   auto input = pre_round_input_state;
//   scalar_t output = scalar_t::from(0);

//   // init poseidon constants on current device
//   ICICLE_CHECK(Poseidon::init_default_constants<scalar_t>());

//   // Create Poseidon hash object
//   auto poseidon = Poseidon::create<scalar_t>(arity);

//   // Run single hash operation
//   auto config = default_hash_config();
//   ICICLE_CHECK(poseidon.hash(input, arity * sizeof(scalar_t), config, &output));
//   std::cout << "HashApiTest.poseidon3 test: output = " << output << std::endl;
//   // TODO: Verify output (e.g., check CPU against CUDA)
// }
TEST_F(HashApiTest, poseidon3)
{
  const unsigned  arity               = 3; // Number of input elements
  const unsigned  default_input_size  = 3;
  const bool      is_domain_tag       = false;

  // Create unique pointers for input and output arrays
  scalar_t* input = (scalar_t*)malloc(arity * sizeof(scalar_t));
  input[0] = scalar_t::from(1);
  input[1] = scalar_t::from(1);
  input[2] = scalar_t::from(1);
  // auto input = std::make_unique<scalar_t[]>(arity);
  scalar_t output = scalar_t::from(0);
  // Randomize the input array
  // scalar_t::rand_host_many(input.get(), arity);

  // init poseidon constants on current device
  ICICLE_CHECK(Poseidon::init_default_constants<scalar_t>());

  // Create Poseidon hash object
  auto poseidon = Poseidon::create<scalar_t>(arity, default_input_size, is_domain_tag);

  // Run single hash operation
  auto config = default_hash_config();
  // ICICLE_CHECK(poseidon.hash(input.get(), arity * sizeof(scalar_t), config, &output));
  ICICLE_CHECK(poseidon.hash((char*)input, arity * sizeof(scalar_t), config, &output));
  // TODO: Verify output (e.g., check CPU against CUDA)
}
#endif // POSEIDON