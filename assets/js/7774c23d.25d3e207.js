"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[1626],{7383:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"icicle/rust-bindings/hash","title":"ICICLE Hashing in Rust","description":"For a general overview of ICICLE\'s hashing logic and supported algorithms, check out the ICICLE Hashing Overview.","source":"@site/versioned_docs/version-3.4.0/icicle/rust-bindings/hash.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/hash","permalink":"/icicle/rust-bindings/hash","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.4.0/icicle/rust-bindings/hash.md","tags":[],"version":"3.4.0","lastUpdatedBy":"Koren-Brand","lastUpdatedAt":1737296485000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Polynomials","permalink":"/icicle/rust-bindings/polynomials"},"next":{"title":"Merkle-Tree","permalink":"/icicle/rust-bindings/merkle"}}');var a=i(4848),t=i(8453);const o={},c="ICICLE Hashing in Rust",r={},h=[{value:"Overview",id:"overview",level:2},{value:"Importing Hash Functions",id:"importing-hash-functions",level:2},{value:"API Usage",id:"api-usage",level:2},{value:"1. Creating a Hasher Instance",id:"1-creating-a-hasher-instance",level:3},{value:"2. Hashing a Simple String",id:"2-hashing-a-simple-string",level:3},{value:"3. Poseidon Example (field elements) and batch hashing",id:"3-poseidon-example-field-elements-and-batch-hashing",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"icicle-hashing-in-rust",children:"ICICLE Hashing in Rust"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["For a general overview of ICICLE's hashing logic and supported algorithms, check out the ",(0,a.jsx)(n.a,{href:"/icicle/primitives/hash",children:"ICICLE Hashing Overview"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"The ICICLE library provides Rust bindings for hashing using a variety of cryptographic hash functions. These hash functions are optimized for both general-purpose data and cryptographic operations such as multi-scalar multiplication, commitment generation, and Merkle tree construction."}),"\n",(0,a.jsx)(n.p,{children:"This guide will show you how to use the ICICLE hashing API in Rust with examples for common hash algorithms, such as Keccak-256, Keccak-512, SHA3-256, SHA3-512, Blake2s, and Poseidon."}),"\n",(0,a.jsx)(n.h2,{id:"importing-hash-functions",children:"Importing Hash Functions"}),"\n",(0,a.jsx)(n.p,{children:"To use the hashing functions in Rust, you will need to import the specific hash algorithm module from the ICICLE Rust bindings. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"use icicle_hash::keccak::Keccak256;\nuse icicle_hash::keccak::Keccak512;\nuse icicle_hash::sha3::Sha3_256;\nuse icicle_hash::sha3::Sha3_512;\nuse icicle_hash::blake2s::Blake2s;\nuse icicle_core::poseidon::Poseidon;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"api-usage",children:"API Usage"}),"\n",(0,a.jsx)(n.h3,{id:"1-creating-a-hasher-instance",children:"1. Creating a Hasher Instance"}),"\n",(0,a.jsx)(n.p,{children:"Each hash algorithm can be instantiated by calling its respective constructor. The new function takes an optional default input size, which can be set to 0 unless required for a specific use case."}),"\n",(0,a.jsx)(n.p,{children:"Example for Keccak-256:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"let keccak_hasher = Keccak256::new(0 /* default input size */).unwrap();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-hashing-a-simple-string",children:"2. Hashing a Simple String"}),"\n",(0,a.jsx)(n.p,{children:"Once you have created a hasher instance, you can hash any input data, such as strings or byte arrays, and store the result in an output buffer.\nHere\u2019s how to hash a simple string using Keccak-256:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use icicle_hash::keccak::Keccak256;\nuse icicle_runtime::memory::HostSlice;\nuse icicle_core::hash::HashConfig;\nuse hex;\n\nlet input_str = "I like ICICLE! it\'s so fast and easy";\nlet mut output = vec![0u8; 32]; // 32-byte output buffer\n\nlet keccak_hasher = Keccak256::new(0 /* default input size */).unwrap();\nkeccak_hasher\n    .hash(\n        HostSlice::from_slice(input_str.as_bytes()),  // Input data\n        &HashConfig::default(),                       // Default configuration\n        HostSlice::from_mut_slice(&mut output),       // Output buffer\n    )\n    .unwrap();\n\n// convert the output to a hex string for easy readability\nlet output_as_hex_str = hex::encode(output);\nprintln!("Hash(`{}`) = {:?}", input_str, &output_as_hex_str);\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"3-poseidon-example-field-elements-and-batch-hashing",children:"3. Poseidon Example (field elements) and batch hashing"}),"\n",(0,a.jsx)(n.p,{children:"The Poseidon hash is designed for cryptographic field elements and curves, making it ideal for use cases such as zero-knowledge proofs (ZKPs).\nPoseidon hash using babybear field:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"use icicle_babybear::field::{ScalarCfg, ScalarField};\nuse icicle_core::hash::HashConfig;\nuse icicle_core::poseidon::{Poseidon, PoseidonHasher};\nuse icicle_core::traits::FieldImpl;\nuse icicle_runtime::memory::HostSlice;\n\nlet batch = 1 << 10; // Number of hashes to compute in a single batch\nlet t = 3; // Poseidon parameter that specifies the arity (number of inputs) for each hash function\nlet mut outputs = vec![ScalarField::zero(); batch]; // Output array sized for the batch count\n\n// Case (1): Hashing without a domain tag\n// Generates 'batch * t' random input elements as each hash needs 't' inputs\nlet inputs = ScalarCfg::generate_random(batch * t);\nlet poseidon_hasher = Poseidon::new::<ScalarField>(t as u32, None /*=domain-tag*/).unwrap(); // Instantiate Poseidon without domain tag\n\nposeidon_hasher\n    .hash(\n        HostSlice::from_slice(&inputs),           // Input slice for the hash function\n        &HashConfig::default(),                   // Default hashing configuration\n        HostSlice::from_mut_slice(&mut outputs),  // Output slice to store hash results\n    )\n    .unwrap();\n\n// Case (2): Hashing with a domain tag\n// Generates 'batch * (t - 1)' inputs, as domain tag counts as one input in each hash\nlet inputs = ScalarCfg::generate_random(batch * (t - 1));\nlet domain_tag = ScalarField::zero(); // Example domain tag (can be any valid field element)\nlet poseidon_hasher_with_domain_tag = Poseidon::new::<ScalarField>(t as u32, Some(&domain_tag) /*=domain-tag*/).unwrap();\n\nposeidon_hasher_with_domain_tag\n    .hash(\n        HostSlice::from_slice(&inputs),           // Input slice with 't - 1' elements per hash\n        &HashConfig::default(),                   // Default hashing configuration\n        HostSlice::from_mut_slice(&mut outputs),  // Output slice to store hash results\n    )\n    .unwrap();\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(6540);const a={},t=s.createContext(a);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);