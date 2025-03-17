"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[3321],{97651:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"icicle/rust-bindings/merkle","title":"Merkle Tree API Documentation (Rust)","description":"This is the Rust version of the Merkle Tree API Documentation (C++ documentation). It mirrors the structure and functionality of the C++ version, providing equivalent APIs in Rust.","source":"@site/versioned_docs/version-3.2.0/icicle/rust-bindings/merkle.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/merkle","permalink":"/3.2.0/icicle/rust-bindings/merkle","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.2.0/icicle/rust-bindings/merkle.md","tags":[],"version":"3.2.0","lastUpdatedBy":"Otsar","lastUpdatedAt":1742209585000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Hash","permalink":"/3.2.0/icicle/rust-bindings/hash"},"next":{"title":"Migrate from ICICLE v2","permalink":"/3.2.0/icicle/migrate_from_v2"}}');var t=r(74848),s=r(28453);const l={},a="Merkle Tree API Documentation (Rust)",o={},c=[{value:"Tree Structure and Configuration in Rust",id:"tree-structure-and-configuration-in-rust",level:2},{value:"Defining a Merkle Tree",id:"defining-a-merkle-tree",level:3},{value:"Building the Tree",id:"building-the-tree",level:3},{value:"Tree Examples in Rust",id:"tree-examples-in-rust",level:2},{value:"Example A: Binary Tree",id:"example-a-binary-tree",level:3},{value:"Example B: Tree with Arity 4",id:"example-b-tree-with-arity-4",level:3},{value:"Padding",id:"padding",level:2},{value:"Root as Commitment",id:"root-as-commitment",level:2},{value:"Generating Merkle Proofs",id:"generating-merkle-proofs",level:2},{value:"Example: Generating a Proof",id:"example-generating-a-proof",level:3},{value:"Verifying Merkle Proofs",id:"verifying-merkle-proofs",level:2},{value:"Example: Verifying a Proof",id:"example-verifying-a-proof",level:3},{value:"Pruned vs. Full Merkle-paths",id:"pruned-vs-full-merkle-paths",level:2},{value:"Handling Partial Tree Storage",id:"handling-partial-tree-storage",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"merkle-tree-api-documentation-rust",children:"Merkle Tree API Documentation (Rust)"})}),"\n",(0,t.jsxs)(n.p,{children:["This is the Rust version of the ",(0,t.jsx)(n.strong,{children:"Merkle Tree API Documentation"})," (",(0,t.jsx)(n.a,{href:"/3.2.0/icicle/primitives/merkle",children:"C++ documentation"}),"). It mirrors the structure and functionality of the C++ version, providing equivalent APIs in Rust.\nFor more detailed explanations, refer to the ",(0,t.jsx)(n.a,{href:"/3.2.0/icicle/primitives/merkle",children:"C++ documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To see a complete implementation, visit the ",(0,t.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/examples/rust/hash-and-merkle",children:"Hash and Merkle example"})," for a full example."]}),"\n",(0,t.jsx)(n.h2,{id:"tree-structure-and-configuration-in-rust",children:"Tree Structure and Configuration in Rust"}),"\n",(0,t.jsx)(n.h3,{id:"defining-a-merkle-tree",children:"Defining a Merkle Tree"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"struct MerkleTree{\n    /// * `layer_hashers` - A vector of hash objects representing the hashers of each layer.\n    /// * `leaf_element_size` - Size of each leaf element.\n    /// * `output_store_min_layer` - Minimum layer at which the output is stored.\n    ///\n    /// # Returns a new `MerkleTree` instance or eIcicleError.\n    pub fn new(\n        layer_hashers: &[&Hasher],\n        leaf_element_size: u64,\n        output_store_min_layer: u64,\n    ) -> Result<Self, eIcicleError>;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"output_store_min_layer"})," parameter defines the lowest layer that will be stored in memory. Layers below this value will not be stored, saving memory at the cost of additional computation when proofs are generated."]}),"\n",(0,t.jsx)(n.h3,{id:"building-the-tree",children:"Building the Tree"}),"\n",(0,t.jsx)(n.p,{children:"The Merkle tree can be constructed from input data of any type, allowing flexibility in its usage. The size of the input must align with the tree structure defined by the hash layers and leaf size. If the input size does not match the expected size, padding may be applied."}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"#padding",children:"Padding Section"})," for more details on how mismatched input sizes are handled."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"struct MerkleTree{\n    /// * `leaves` - A slice of leaves (input data).\n    /// * `config` - Configuration for the Merkle tree.\n    ///\n    /// # Returns a result indicating success or failure.\n    pub fn build<T>(\n        &self,\n        leaves: &(impl HostOrDeviceSlice<T> + ?Sized),\n        cfg: &MerkleTreeConfig,\n    ) -> Result<(), eIcicleError>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tree-examples-in-rust",children:"Tree Examples in Rust"}),"\n",(0,t.jsx)(n.h3,{id:"example-a-binary-tree",children:"Example A: Binary Tree"}),"\n",(0,t.jsxs)(n.p,{children:["A binary tree with ",(0,t.jsx)(n.strong,{children:"5 layers"}),", using ",(0,t.jsx)(n.strong,{children:"Keccak-256"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Merkle Tree Diagram",src:r(47309).A+"",width:"1539",height:"968"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use icicle_core::{\n    hash::{HashConfig, Hasher},\n    merkle::{MerkleTree, MerkleTreeConfig},\n};\nuse icicle_hash::keccak::Keccak256;\nuse icicle_runtime::memory::HostSlice;\n\nlet leaf_size = 1024_u64;\nlet max_input_size = leaf_size as usize * 16;\nlet input: Vec<u8> = vec![0; max_input_size];\n\n// define layer hashers\n// we want one hash layer to hash every 1KB to 32B then compress every 64B so 4 more binary layers\nlet hash = Keccak256::new(leaf_size).unwrap();\nlet compress = Keccak256::new(2 * hash.output_size()).unwrap();\nlet _layer_hashers = vec![&hash, &compress, &compress, &compress, &compress];\n// or like that\nlet layer_hashers: Vec<&Hasher> = std::iter::once(&hash)\n    .chain(std::iter::repeat(&compress).take(4))\n    .collect();\n\nlet merkle_tree = MerkleTree::new(&layer_hashers, leaf_size, 0 /*min layer to store */).unwrap();\n\n// compute the tree\nmerkle_tree\n    .build(HostSlice::from_slice(&input), &MerkleTreeConfig::default())\n    .unwrap();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-b-tree-with-arity-4",children:"Example B: Tree with Arity 4"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Merkle Tree Diagram",src:r(56630).A+"",width:"1532",height:"621"})}),"\n",(0,t.jsxs)(n.p,{children:["This example uses ",(0,t.jsx)(n.strong,{children:"Blake2s"})," in upper layers:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use icicle_hash::blake2s::Blake2s;\n\n// define layer hashers\n// we want one hash layer to hash every 1KB to 32B then compress every 128B so only 2 more layers\nlet hash = Keccak256::new(leaf_size).unwrap();\nlet compress = Blake2s::new(4 * hash.output_size()).unwrap();\nlet layer_hashers = vec![&hash, &compress, &compress];\n\nlet merkle_tree = MerkleTree::new(&layer_hashers, leaf_size, 0 /*min layer to store */).unwrap();\n\nmerkle_tree\n    .build(HostSlice::from_slice(&input), &MerkleTreeConfig::default())\n    .unwrap();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"padding",children:"Padding"}),"\n",(0,t.jsxs)(n.p,{children:["When the input for ",(0,t.jsx)(n.strong,{children:"layer 0"})," is smaller than expected, ICICLE can apply ",(0,t.jsx)(n.strong,{children:"padding"})," to align the data."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Padding Schemes:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Zero padding:"})," Adds zeroes to the remaining space."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Repeat last leaf:"})," The final leaf element is repeated to fill the remaining space."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"// pub enum PaddingPolicy {\n//     None,        // No padding, assume input is correctly sized.\n//     ZeroPadding, // Pad the input with zeroes to fit the expected input size.\n//     LastValue,   // Pad the input by repeating the last value.\n// }\n\nuse icicle_core::merkle::PaddingPolicy;\nlet mut config = MerkleTreeConfig::default();\nconfig.padding_policy = PaddingPolicy::ZeroPadding;\nmerkle_tree\n    .build(HostSlice::from_slice(&input), &config)\n    .unwrap();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"root-as-commitment",children:"Root as Commitment"}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the Merkle-root and serialize."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'struct MerkleTree{\n    /// Retrieve the root of the Merkle tree.\n    ///\n    /// # Returns\n    /// A reference to the root hash.\n    pub fn get_root<T>(&self) -> Result<&[T], eIcicleError>;\n}\n\nlet commitment: &[u8] = merkle_tree\n        .get_root()\n        .unwrap();\nprintln!("Commitment: {:?}", commitment);****\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The commitment can be serialized to the proof. This is not handled by ICICLE."})}),"\n",(0,t.jsx)(n.h2,{id:"generating-merkle-proofs",children:"Generating Merkle Proofs"}),"\n",(0,t.jsxs)(n.p,{children:["Merkle proofs are used to ",(0,t.jsx)(n.strong,{children:"prove the integrity of opened leaves"})," in a Merkle tree. A proof ensures that a specific leaf belongs to the committed data by enabling the verifier to reconstruct the ",(0,t.jsx)(n.strong,{children:"root hash (commitment)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A Merkle proof contains:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Leaf"}),": The data being verified."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Index"})," (leaf_idx): The position of the leaf in the original dataset."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Path"}),": A sequence of sibling hashes (tree nodes) needed to recompute the path from the leaf to the root."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Merkle Pruned Phat Diagram",src:r(7003).A+"",width:"1523",height:"723"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"struct MerkleTree{\n    /// * `leaves` - A slice of leaves (input data).\n    /// * `leaf_idx` - Index of the leaf to generate a proof for.\n    /// * `pruned_path` - Whether the proof should be pruned.\n    /// * `config` - Configuration for the Merkle tree.\n    ///\n    /// # Returns a `MerkleProof` object or eIcicleError\n    pub fn get_proof<T>(\n        &self,\n        leaves: &(impl HostOrDeviceSlice<T> + ?Sized),\n        leaf_idx: u64,\n        pruned_path: bool,\n        config: &MerkleTreeConfig,\n    ) -> Result<MerkleProof, eIcicleError>;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-generating-a-proof",children:"Example: Generating a Proof"}),"\n",(0,t.jsx)(n.p,{children:"Generating a proof for leaf idx 5:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"let merkle_proof = merkle_tree\n    .get_proof(\n        HostSlice::from_slice(&input),\n        5,    /*=leaf-idx*/\n        true, /*pruned*/\n        &MerkleTreeConfig::default(),\n    )\n    .unwrap();\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The Merkle-path can be serialized to the proof along with the leaf. This is not handled by ICICLE."})}),"\n",(0,t.jsx)(n.h2,{id:"verifying-merkle-proofs",children:"Verifying Merkle Proofs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"struct MerkleTree{\n    /// * `proof` - The Merkle proof to verify.\n    ///\n    /// # Returns a result indicating whether the proof is valid.\n    pub fn verify(&self, proof: &MerkleProof) -> Result<bool, eIcicleError>;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-verifying-a-proof",children:"Example: Verifying a Proof"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"let valid = merkle_tree\n    .verify(&merkle_proof)\n    .unwrap();\nassert!(valid);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pruned-vs-full-merkle-paths",children:"Pruned vs. Full Merkle-paths"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"Merkle path"})," is a collection of ",(0,t.jsx)(n.strong,{children:"sibling hashes"})," that allows the verifier to ",(0,t.jsx)(n.strong,{children:"reconstruct the root hash"})," from a specific leaf.\nThis enables anyone with the ",(0,t.jsx)(n.strong,{children:"path and root"})," to verify that the ",(0,t.jsx)(n.strong,{children:"leaf"})," belongs to the committed dataset.\nThere are two types of paths that can be computed:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#generating-merkle-proofs",children:(0,t.jsx)(n.strong,{children:"Pruned Path:"})})," Contains only necessary sibling hashes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full Path:"})," Contains all sibling nodes and intermediate hashes."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Merkle Full Path Diagram",src:r(47887).A+"",width:"1523",height:"723"})}),"\n",(0,t.jsxs)(n.p,{children:["To compute a full path, specify ",(0,t.jsx)(n.code,{children:"pruned=false"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"let merkle_proof = merkle_tree\n    .get_proof(\n        HostSlice::from_slice(&input),\n        5,    /*=leaf-idx*/\n        false, /*non-pruned is a full path --\x3e note the pruned flag here*/\n        &MerkleTreeConfig::default(),\n    )\n    .unwrap();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"handling-partial-tree-storage",children:"Handling Partial Tree Storage"}),"\n",(0,t.jsxs)(n.p,{children:["In cases where the ",(0,t.jsx)(n.strong,{children:"Merkle tree is large"}),", only the ",(0,t.jsx)(n.strong,{children:"top layers"})," may be stored to conserve memory.\nWhen opening leaves, the ",(0,t.jsx)(n.strong,{children:"first layers"})," (closest to the leaves) are ",(0,t.jsx)(n.strong,{children:"recomputed dynamically"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example to avoid storing first layer we can define a tree as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"let mut merkle_tree = MerkleTree::new(&layer_hashers, leaf_size, 1 /*min layer to store*/);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},47309:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/diagram1-c14b789ecbb50149820704c41d936c61.png"},7003:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/diagram1_path-0865d68074ab3dc62654c62d92c00450.png"},47887:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/diagram1_path_full-f27fb5d5f5ff39d38926712860b1da40.png"},56630:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/diagram2-9ea2e302cb54350811182ac3d38527cb.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(96540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);