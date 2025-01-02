"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8761],{5727:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"icicle/primitives/keccak","title":"Keccak","description":"TODO update for V3","source":"@site/versioned_docs/version-3.0.0/icicle/primitives/keccak.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/keccak","permalink":"/3.0.0/icicle/primitives/keccak","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/primitives/keccak.md","tags":[],"version":"3.0.0","lastUpdatedBy":"release-bot","lastUpdatedAt":1735798968000,"frontMatter":{}}');var t=i(4848),c=i(8453);const a={},r="Keccak",l={},o=[{value:"Using Keccak",id:"using-keccak",level:2},{value:"Supported Bindings",id:"supported-bindings",level:3},{value:"Example usage",id:"example-usage",level:3},{value:"Merkle Tree",id:"merkle-tree",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"keccak",children:"Keccak"})}),"\n",(0,t.jsx)(n.p,{children:"TODO update for V3"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://keccak.team/files/Keccak-implementation-3.2.pdf",children:"Keccak"})," is a cryptographic hash function designed by Guido Bertoni, Joan Daemen, Micha\xebl Peeters, and Gilles Van Assche. It was selected as the winner of the NIST hash function competition, becoming the basis for the ",(0,t.jsx)(n.a,{href:"https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf",children:"SHA-3 standard"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Keccak operates on a message input of any length and produces a fixed-size hash output. The hash function is built upon the sponge construction, which involves absorbing the input data followed by squeezing out the hash value."}),"\n",(0,t.jsx)(n.p,{children:"At its core, Keccak consists of a permutation function operating on a state array. The permutation function employs a round function that operates iteratively on the state array. Each round consists of five main steps:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Theta:"})," This step introduces diffusion by performing a bitwise XOR operation between the state and a linear combination of its neighboring columns."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Rho:"})," This step performs bit rotation operations on each lane of the state array."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pi:"})," This step rearranges the positions of the lanes in the state array."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Chi:"})," This step applies a nonlinear mixing operation to each lane of the state array."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Iota:"})," This step introduces a round constant to the state array."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-keccak",children:"Using Keccak"}),"\n",(0,t.jsx)(n.p,{children:"ICICLE Keccak supports batch hashing, which can be utilized for constructing a merkle tree or running multiple hashes in parallel."}),"\n",(0,t.jsx)(n.h3,{id:"supported-bindings",children:"Supported Bindings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/hash/keccak",children:"Golang"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust/icicle-hash",children:"Rust"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-usage",children:"Example usage"}),"\n",(0,t.jsx)(n.p,{children:"This is an example of running 1024 Keccak-256 hashes in parallel, where input strings are of size 136 bytes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use icicle_core::hash::HashConfig;\nuse icicle_cuda_runtime::memory::HostSlice;\nuse icicle_hash::keccak::keccak256;\n\nlet config = HashConfig::default();\nlet input_block_len = 136;\nlet number_of_hashes = 1024;\n\nlet preimages = vec![1u8; number_of_hashes * input_block_len];\nlet mut digests = vec![0u8; number_of_hashes * 64];\n\nlet preimages_slice = HostSlice::from_slice(&preimages);\nlet digests_slice = HostSlice::from_mut_slice(&mut digests);\n\nkeccak256(\n    preimages_slice,\n    input_block_len as u32,\n    number_of_hashes as u32,\n    digests_slice,\n    &config,\n)\n.unwrap();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"merkle-tree",children:"Merkle Tree"}),"\n",(0,t.jsx)(n.p,{children:"You can build a keccak merkle tree using the corresponding functions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use icicle_core::tree::{merkle_tree_digests_len, TreeBuilderConfig};\nuse icicle_cuda_runtime::memory::HostSlice;\nuse icicle_hash::keccak::build_keccak256_merkle_tree;\n\nlet mut config = TreeBuilderConfig::default();\nconfig.arity = 2;\nlet height = 22;\nlet input_block_len = 136;\nlet leaves = vec![1u8; (1 << height) * input_block_len];\nlet mut digests = vec![0u64; merkle_tree_digests_len((height + 1) as u32, 2, 1)];\n\nlet leaves_slice = HostSlice::from_slice(&leaves);\nlet digests_slice = HostSlice::from_mut_slice(&mut digests);\n\nbuild_keccak256_merkle_tree(leaves_slice, digests_slice, height, input_block_len, &config).unwrap();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the example above, a binary tree of height 22 is being built. Each leaf is considered to be a 136 byte long array. The leaves and digests are aligned in a flat array. You can also use keccak512 in ",(0,t.jsx)(n.code,{children:"build_keccak512_merkle_tree"})," function."]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},c=s.createContext(t);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);