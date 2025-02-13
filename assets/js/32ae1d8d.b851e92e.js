"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[625],{61250:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"icicle/primitives/hash","title":"ICICLE Hashing Logic","description":"Overview","source":"@site/versioned_docs/version-3.3.0/icicle/primitives/hash.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/hash","permalink":"/3.3.0/icicle/primitives/hash","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.3.0/icicle/primitives/hash.md","tags":[],"version":"3.3.0","lastUpdatedBy":"release-bot","lastUpdatedAt":1739462520000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Polynomials","permalink":"/3.3.0/icicle/polynomials/overview"},"next":{"title":"Poseidon2","permalink":"/3.3.0/icicle/primitives/poseidon2"}}');var s=i(74848),a=i(28453);const o={},r="ICICLE Hashing Logic",c={},h=[{value:"Overview",id:"overview",level:2},{value:"Hashing Logic",id:"hashing-logic",level:2},{value:"Batch Hashing",id:"batch-hashing",level:2},{value:"Supported Hash Algorithms",id:"supported-hash-algorithms",level:2},{value:"Keccak and SHA3",id:"keccak-and-sha3",level:3},{value:"Blake2s",id:"blake2s",level:3},{value:"Poseidon",id:"poseidon",level:3},{value:"Poseidon2",id:"poseidon2",level:3},{value:"Using Hash API",id:"using-hash-api",level:2},{value:"1. Creating a Hasher Object",id:"1-creating-a-hasher-object",level:3},{value:"2. Hashing Data",id:"2-hashing-data",level:3},{value:"3. Batch Hashing",id:"3-batch-hashing",level:3},{value:"4. Poseidon sponge function",id:"4-poseidon-sponge-function",level:3},{value:"5. Poseidon2 sponge function",id:"5-poseidon2-sponge-function",level:3},{value:"Supported Bindings",id:"supported-bindings",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"icicle-hashing-logic",children:"ICICLE Hashing Logic"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"ICICLE\u2019s hashing system is designed to be flexible, efficient, and optimized for both general-purpose and cryptographic operations. Hash functions are essential in operations such as generating commitments, constructing Merkle trees, executing the Sumcheck protocol, and more."}),"\n",(0,s.jsx)(n.p,{children:"ICICLE provides an easy-to-use interface for hashing on both CPU and GPU, with transparent backend selection. You can choose between several hash algorithms such as Keccak-256, Keccak-512, SHA3-256, SHA3-512, Blake2s, Poseidon, Poseidon2 and more, which are optimized for processing both general data and cryptographic field elements or elliptic curve points."}),"\n",(0,s.jsx)(n.h2,{id:"hashing-logic",children:"Hashing Logic"}),"\n",(0,s.jsx)(n.p,{children:"Hashing in ICICLE involves creating a hasher instance for the desired algorithm, configuring the hash function if needed, and then processing the data. Data can be provided as strings, arrays, or field elements, and the output is collected in a buffer that automatically adapts to the size of the hashed data."}),"\n",(0,s.jsx)(n.h2,{id:"batch-hashing",children:"Batch Hashing"}),"\n",(0,s.jsx)(n.p,{children:"For scenarios where large datasets need to be hashed efficiently, ICICLE supports batch hashing. The batch size is automatically derived from the output size, making it adaptable and optimized for parallel computation on the GPU (when using the CUDA backend). This is useful for Merkle-trees and more."}),"\n",(0,s.jsx)(n.h2,{id:"supported-hash-algorithms",children:"Supported Hash Algorithms"}),"\n",(0,s.jsx)(n.p,{children:"ICICLE supports the following hash functions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Keccak-256"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Keccak-512"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SHA3-256"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SHA3-512"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Blake2s"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Poseidon"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Poseidon2"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Additional hash functions might be added in the future. Stay tuned!"})}),"\n",(0,s.jsx)(n.h3,{id:"keccak-and-sha3",children:"Keccak and SHA3"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://keccak.team/files/Keccak-implementation-3.2.pdf",children:"Keccak"})," is a cryptographic hash function designed by Guido Bertoni, Joan Daemen, Micha\xebl Peeters, and Gilles Van Assche. It was selected as the winner of the NIST hash function competition, becoming the basis for the ",(0,s.jsx)(n.a,{href:"https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf",children:"SHA-3 standard"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Keccak can take input messages of any length and produce a fixed-size hash. It uses the sponge construction, which absorbs the input data and squeezes out the final hash value. The permutation function, operating on a state array, applies iterative rounds of operations to derive the hash."}),"\n",(0,s.jsx)(n.h3,{id:"blake2s",children:"Blake2s"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7693.txt",children:"Blake2s"})," is an optimized cryptographic hash function that provides high performance while ensuring strong security. Blake2s is ideal for hashing small data (such as field elements), especially when speed is crucial. It produces a 256-bit (32-byte) output and is often used in cryptographic protocols."]}),"\n",(0,s.jsx)(n.h3,{id:"poseidon",children:"Poseidon"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2019/458",children:"Poseidon"})," is a cryptographic hash function designed specifically for field elements. It is highly optimized for zero-knowledge proofs (ZKPs) and is commonly used in ZK-SNARK systems. Poseidon\u2019s main strength lies in its arithmetization-friendly design, meaning it can be efficiently expressed as arithmetic constraints within a ZK-SNARK circuit."]}),"\n",(0,s.jsx)(n.p,{children:"Traditional hash functions, such as SHA-2, are difficult to represent within ZK circuits because they involve complex bitwise operations that don\u2019t translate efficiently into arithmetic operations. Poseidon, however, is specifically designed to minimize the number of constraints required in these circuits, making it significantly more efficient for use in ZK-SNARKs and other cryptographic protocols that require hashing over field elements."}),"\n",(0,s.jsxs)(n.p,{children:["Currently the Poseidon implementation is the ",(0,s.jsx)(n.a,{href:"https://hackmd.io/@jake/poseidon-spec#Optimized-Poseidon",children:"Optimized Poseidon"}),". Optimized Poseidon significantly decreases the calculation time of the hash."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.code,{children:"domain_tag"})," pointer parameter enables domain separation, allowing isolation of hash outputs across different contexts or applications."]}),"\n",(0,s.jsx)(n.h3,{id:"poseidon2",children:"Poseidon2"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2023/323.pdf",children:"Poseidon2"})," is a cryptographic hash function designed specifically for field elements.\nIt is an improved version of the original ",(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2019/458",children:"Poseidon"})," hash, offering better performance on modern hardware. Poseidon2 is optimized for use with elliptic curve cryptography and finite fields, making it ideal for decentralized systems like blockchain. Its main advantage is balancing strong security with efficient computation, which is crucial for applications that require fast, reliable hashing."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.code,{children:"domain_tag"})," pointer parameter enables domain separation, allowing isolation of hash outputs across different contexts or applications."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The supported values of state size ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"t"})})," as defined in ",(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2023/323.pdf",children:"eprint 2023/323"})," are 2, 3, 4, 8, 12, 16, 20 and 24. Note that ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"t"})})," sizes 8, 12, 16, 20 and 24 are supported only for small fields (babybear and m31)."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The S box power alpha, number of full rounds and partial rounds, rounds constants, MDS matrix, and partial matrix for each field and ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"t"})})," can be found in this ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/9b1506cda9eab30fc6a8d0a338e2cfab877402f7/icicle/include/icicle/hash/poseidon2_constants/constants",children:"folder"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"In the current version the padding is not supported and should be performed by the user."}),"\n",(0,s.jsx)(n.h2,{id:"using-hash-api",children:"Using Hash API"}),"\n",(0,s.jsx)(n.h3,{id:"1-creating-a-hasher-object",children:"1. Creating a Hasher Object"}),"\n",(0,s.jsx)(n.p,{children:"First, you need to create a hasher object for the specific hash function you want to use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include "icicle/hash/keccak.h"\n#include "icicle/hash/blake2s.h"\n#include "icicle/hash/poseidon.h"\n#include "icicle/hash/poseidon2.h"\n\n// Create hasher instances for different algorithms\nauto keccak256 = Keccak256::create();\nauto keccak512 = Keccak512::create();\nauto sha3_256 = Sha3_256::create();\nauto sha3_512 = Sha3_512::create();\nauto blake2s = Blake2s::create();\n// Poseidon requires specifying the field-type and t parameter (supported 3,5,9,12) as defined by the Poseidon paper.\nauto poseidon = Poseidon::create<scalar_t>(t); \n// Optionally, Poseidon can accept a domain-tag, which is a field element used to separate applications or contexts.\n// The domain tag acts as the first input to the hash function, with the remaining t-1 inputs following it.\nscalar_t domain_tag = scalar_t::zero(); // Example using zero; this can be set to any valid field element.\nauto poseidon_with_domain_tag = Poseidon::create<scalar_t>(t, &domain_tag);\n// Poseidon2 requires specifying the field-type and t parameter (supported 2, 3, 4, 8, 12, 16, 20, 24) as defined by\n// the Poseidon2 paper. For large fields (field width >= 252) the supported values of t are 2, 3, 4.\nauto poseidon2 = Poseidon2::create<scalar_t>(t); \n// Optionally, Poseidon2 can accept a domain-tag, which is a field element used to separate applications or contexts.\n// The domain tag acts as the first input to the hash function, with the remaining t-1 inputs following it.\nscalar_t domain_tag = scalar_t::zero(); // Example using zero; this can be set to any valid field element.\nauto poseidon2_with_domain_tag = Poseidon2::create<scalar_t>(t, &domain_tag);\n// This version of the hasher with a domain tag expects t-1 inputs per hasher.\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-hashing-data",children:"2. Hashing Data"}),"\n",(0,s.jsx)(n.p,{children:"Once you have a hasher object, you can hash any input data by passing the input, its size, a configuration, and an output buffer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"/**\n * @brief Perform a hash operation.\n *\n * This function delegates the hash operation to the backend.\n *\n * @param input Pointer to the input data as bytes.\n * @param size The number of bytes to hash. If 0, the default chunk size is used.\n * @param config Configuration options for the hash operation.\n * @param output Pointer to the output data as bytes.\n * @return An error code of type eIcicleError indicating success or failure.\n */\neIcicleError hash(const std::byte* input, uint64_t size, const HashConfig& config, std::byte* output) const;\n\n/**\n * @brief Perform a hash operation using typed data.\n *\n * Converts input and output types to `std::byte` pointers and delegates the call to the backend.\n *\n * @tparam PREIMAGE The type of the input data.\n * @tparam IMAGE The type of the output data.\n * @param input Pointer to the input data.\n * @param size The number of elements of type `PREIMAGE` to a single hasher.\n * @param config Configuration options for the hash operation.\n * @param output Pointer to the output data.\n * @return An error code of type eIcicleError indicating success or failure.\n */\ntemplate <typename PREIMAGE, typename IMAGE>\neIcicleError hash(const PREIMAGE* input, uint64_t size, const HashConfig& config, IMAGE* output) const;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example Usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'// Using the Blake2s hasher\nconst std::string input = "Hello, I am Blake2s!";\nconst uint64_t output_size = 32; // Blake2s outputs 32 bytes\nauto output = std::make_unique<std::byte[]>(output_size);\nauto config = default_hash_config();\n\neIcicleErr err = blake2s.hash(input.data(), input.size(), config, output.get());\n\n// Alternatively, use another hasher (e.g., Keccak256, SHA3-512)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-batch-hashing",children:"3. Batch Hashing"}),"\n",(0,s.jsxs)(n.p,{children:["To perform batch hashing, set the ",(0,s.jsx)(n.code,{children:"config.batch"})," field to indicate the number of batches. This allows for multiple inputs to be hashed in parallel:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'auto config = default_hash_config();\nconfig.batch = 2;\n\nconst std::string input = "0123456789abcdef"; // This is a batch of "01234567" and "89abcdef"\nauto output = std::make_unique<std::byte[]>(32 * config.batch); // Allocate output for 2 batches\n\neIcicleErr err = keccak256.hash(input.data(), input.size() / config.batch, config, output.get());\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4-poseidon-sponge-function",children:"4. Poseidon sponge function"}),"\n",(0,s.jsxs)(n.p,{children:["Currently the poseidon sponge mode (sponge function description could be found in Sec 2.1 of ",(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2019/458.pdf",children:"eprint 2019/458"}),") isn't implemented."]}),"\n",(0,s.jsx)(n.h3,{id:"5-poseidon2-sponge-function",children:"5. Poseidon2 sponge function"}),"\n",(0,s.jsxs)(n.p,{children:["Currently the poseidon2 is implemented in compression mode, the sponge mode discussed in ",(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2023/323.pdf",children:"eprint 2023/323"})," is not implemented."]}),"\n",(0,s.jsx)(n.h3,{id:"supported-bindings",children:"Supported Bindings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../rust-bindings/hash",children:"Rust"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../golang-bindings/hash",children:"Go"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);