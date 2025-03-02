"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[7303],{68505:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"icicle/golang-bindings/merkle","title":"Merkle Tree API Documentation (Golang)","description":"This is the Golang version of the Merkle Tree API Documentation (C++ documentation). It mirrors the structure and functionality of the C++ version, providing equivalent APIs in Golang.","source":"@site/versioned_docs/version-3.1.0/icicle/golang-bindings/merkle.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/merkle","permalink":"/3.1.0/icicle/golang-bindings/merkle","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/golang-bindings/merkle.md","tags":[],"version":"3.1.0","lastUpdatedBy":"youyyytrok","lastUpdatedAt":1740918389000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Hash","permalink":"/3.1.0/icicle/golang-bindings/hash"},"next":{"title":"Rust bindings","permalink":"/3.1.0/icicle/rust-bindings"}}');var t=r(74848),a=r(28453);const l={},s="Merkle Tree API Documentation (Golang)",o={},c=[{value:"Tree Structure and Configuration in Golang",id:"tree-structure-and-configuration-in-golang",level:2},{value:"Defining a Merkle Tree",id:"defining-a-merkle-tree",level:3},{value:"Building the Tree",id:"building-the-tree",level:3},{value:"Tree Examples in Golang",id:"tree-examples-in-golang",level:2},{value:"Example A: Binary Tree",id:"example-a-binary-tree",level:3},{value:"Example B: Tree with Arity 4",id:"example-b-tree-with-arity-4",level:3},{value:"Padding",id:"padding",level:2},{value:"Root as Commitment",id:"root-as-commitment",level:2},{value:"Generating Merkle Proofs",id:"generating-merkle-proofs",level:2},{value:"Example: Generating a Proof",id:"example-generating-a-proof",level:3},{value:"Verifying Merkle Proofs",id:"verifying-merkle-proofs",level:2},{value:"Example: Verifying a Proof",id:"example-verifying-a-proof",level:3},{value:"Pruned vs. Full Merkle-paths",id:"pruned-vs-full-merkle-paths",level:2},{value:"Handling Partial Tree Storage",id:"handling-partial-tree-storage",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"merkle-tree-api-documentation-golang",children:"Merkle Tree API Documentation (Golang)"})}),"\n",(0,t.jsxs)(n.p,{children:["This is the Golang version of the ",(0,t.jsx)(n.strong,{children:"Merkle Tree API Documentation"})," (",(0,t.jsx)(n.a,{href:"/3.1.0/icicle/primitives/merkle",children:"C++ documentation"}),"). It mirrors the structure and functionality of the C++ version, providing equivalent APIs in Golang.\nFor more detailed explanations, refer to the ",(0,t.jsx)(n.a,{href:"/3.1.0/icicle/primitives/merkle",children:"C++ documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To see a complete implementation, visit the ",(0,t.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/examples/rust/hash-and-merkle",children:"Hash and Merkle example"})," for a full example."]}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,t.jsxs)(n.p,{children:["Using the Hash package requires ",(0,t.jsx)(n.code,{children:"go"})," version 1.22"]})}),"\n",(0,t.jsx)(n.h2,{id:"tree-structure-and-configuration-in-golang",children:"Tree Structure and Configuration in Golang"}),"\n",(0,t.jsx)(n.h3,{id:"defining-a-merkle-tree",children:"Defining a Merkle Tree"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"/// * `layerHashers` - A vector of hash objects representing the hashers of each layer.\n/// * `leafElementSize` - Size of each leaf element.\n/// * `outputStoreMinLayer` - Minimum layer at which the output is stored.\n///\n/// # Returns a new `MerkleTree` instance or EIcicleError.\nfunc CreateMerkleTree(\n  layerHashers []hash.Hasher,\n  leafElementSize,\n  outputStoreMinLayer uint64,\n) (MerkleTree, runtime.EIcicleError)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"outputStoreMinLayer"})," parameter defines the lowest layer that will be stored in memory. Layers below this value will not be stored, saving memory at the cost of additional computation when proofs are generated."]}),"\n",(0,t.jsx)(n.h3,{id:"building-the-tree",children:"Building the Tree"}),"\n",(0,t.jsx)(n.p,{children:"The Merkle tree can be constructed from input data of any type, allowing flexibility in its usage. The size of the input must align with the tree structure defined by the hash layers and leaf size. If the input size does not match the expected size, padding may be applied."}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"#padding",children:"Padding Section"})," for more details on how mismatched input sizes are handled."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"/// * `mt` - The merkle tree object to build\n/// * `leaves` - A slice of leaves (input data).\n/// * `config` - Configuration for the Merkle tree.\n///\n/// # Returns a result indicating success or failure.\nfunc BuildMerkleTree[T any](\n  mt *MerkleTree,\n  leaves core.HostOrDeviceSlice,\n  cfg core.MerkleTreeConfig,\n) runtime.EIcicleError\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tree-examples-in-golang",children:"Tree Examples in Golang"}),"\n",(0,t.jsx)(n.h3,{id:"example-a-binary-tree",children:"Example A: Binary Tree"}),"\n",(0,t.jsxs)(n.p,{children:["A binary tree with ",(0,t.jsx)(n.strong,{children:"5 layers"}),", using ",(0,t.jsx)(n.strong,{children:"Keccak-256"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Merkle Tree Diagram",src:r(212).A+"",width:"1539",height:"968"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import (\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/hash"\n  merkletree "github.com/ingonyama-zk/icicle/v3/wrappers/golang/merkle-tree"\n)\n\nleafSize := 1024\nmaxInputSize := leafSize * 16\ninput := make([]byte, maxInputSize)\n\nhasher, _ := hash.NewKeccak256Hasher(uint64(leafSize))\ncompress, _ := hash.NewKeccak256Hasher(2 * hasher.OutputSize())\nlayerHashers := []hash.Hasher{hasher, compress, compress, compress, compress}\n\nmt, _ := merkletree.CreateMerkleTree(layerHashers, uint64(leafSize), 0 /* min layer to store */)\n\nmerkletree.BuildMerkleTree[byte](&mt, core.HostSliceFromElements(input), core.GetDefaultMerkleTreeConfig())\n'})}),"\n",(0,t.jsx)(n.h3,{id:"example-b-tree-with-arity-4",children:"Example B: Tree with Arity 4"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Merkle Tree Diagram",src:r(74703).A+"",width:"1532",height:"621"})}),"\n",(0,t.jsxs)(n.p,{children:["This example uses ",(0,t.jsx)(n.strong,{children:"Blake2s"})," in upper layers:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// define layer hashers\n// we want one hash layer to hash every 1KB to 32B then compress every 128B so only 2 more layers\nhasher, _ := hash.NewKeccak256Hasher(uint64(leafSize))\ncompress, _ := hash.NewBlake2sHasher(2 * hasher.OutputSize())\nlayerHashers := []hash.Hasher{hasher, compress, compress,}\n\nmt, _ := merkletree.CreateMerkleTree(layerHashers, uint64(leafSize), 0 /* min layer to store */)\n\nmerkletree.BuildMerkleTree[byte](&mt, core.HostSliceFromElements(input), core.GetDefaultMerkleTreeConfig())\n"})}),"\n",(0,t.jsx)(n.h2,{id:"padding",children:"Padding"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Padding feature is not yet supported in ",(0,t.jsx)(n.strong,{children:"v3.1"})," and is planned for ",(0,t.jsx)(n.strong,{children:"v3.2"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["When the input for ",(0,t.jsx)(n.strong,{children:"layer 0"})," is smaller than expected, ICICLE can apply ",(0,t.jsx)(n.strong,{children:"padding"})," to align the data."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Padding Schemes:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Zero padding:"})," Adds zeroes to the remaining space."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Repeat last leaf:"})," The final leaf element is repeated to fill the remaining space."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// type PaddingPolicy = int\n\n// const (\n//  NoPadding        PaddingPolicy = iota // No padding, assume input is correctly sized.\n//  ZeroPadding                           // Pad the input with zeroes to fit the expected input size.\n//  LastValuePadding                      // Pad the input by repeating the last value.\n// )\n\nimport (\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n)\n\nconfig := core.GetDefaultMerkleTreeConfig();\nconfig.PaddingPolicy = core.ZeroPadding;\nmerkletree.BuildMerkleTree[byte](&mt, core.HostSliceFromElements(input), core.GetDefaultMerkleTreeConfig())\n'})}),"\n",(0,t.jsx)(n.h2,{id:"root-as-commitment",children:"Root as Commitment"}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the Merkle-root and serialize."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'/// Retrieve the root of the Merkle tree.\n///\n/// # Returns\n/// A reference to the root hash.\nfunc GetMerkleTreeRoot[T any](mt *MerkleTree) ([]T, runtime.EIcicleError)\n\ncommitment := merkletree.GetMerkleTreeRoot[byte](&mt)\nfmt.Println!("Commitment:", commitment)\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The commitment can be serialized to the proof. This is not handled by ICICLE."})}),"\n",(0,t.jsx)(n.h2,{id:"generating-merkle-proofs",children:"Generating Merkle Proofs"}),"\n",(0,t.jsxs)(n.p,{children:["Merkle proofs are used to ",(0,t.jsx)(n.strong,{children:"prove the integrity of opened leaves"})," in a Merkle tree. A proof ensures that a specific leaf belongs to the committed data by enabling the verifier to reconstruct the ",(0,t.jsx)(n.strong,{children:"root hash (commitment)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A Merkle proof contains:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Leaf"}),": The data being verified."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Index"})," (leaf_idx): The position of the leaf in the original dataset."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Path"}),": A sequence of sibling hashes (tree nodes) needed to recompute the path from the leaf to the root."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Merkle Pruned Phat Diagram",src:r(20604).A+"",width:"1523",height:"723"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"/// * `leaves` - A slice of leaves (input data).\n/// * `leaf_idx` - Index of the leaf to generate a proof for.\n/// * `pruned_path` - Whether the proof should be pruned.\n/// * `config` - Configuration for the Merkle tree.\n///\n/// # Returns a `MerkleProof` object or eIcicleError\nfunc GetMerkleTreeProof[T any](\n  mt *MerkleTree,\n  leaves core.HostOrDeviceSlice,\n  leafIndex uint64,\n  prunedPath bool,\n  cfg core.MerkleTreeConfig,\n) (MerkleProof, runtime.EIcicleError)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-generating-a-proof",children:"Example: Generating a Proof"}),"\n",(0,t.jsx)(n.p,{children:"Generating a proof for leaf idx 5:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"mp, _ := merkletree.GetMerkleTreeProof[byte](\n  &mt,\n  core.HostSliceFromElements(input),\n  5,     /* leafIndex */\n  true, /* prunedPath */\n  core.GetDefaultMerkleTreeConfig(),\n)\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The Merkle-path can be serialized to the proof along with the leaf. This is not handled by ICICLE."})}),"\n",(0,t.jsx)(n.h2,{id:"verifying-merkle-proofs",children:"Verifying Merkle Proofs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"/// * `proof` - The Merkle proof to verify.\n///\n/// # Returns a result indicating whether the proof is valid.\nfunc (mt *MerkleTree) Verify(mp *MerkleProof) (bool, runtime.EIcicleError)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-verifying-a-proof",children:"Example: Verifying a Proof"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"isVerified, err := mt.Verify(&mp)\nassert.True(isVerified)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pruned-vs-full-merkle-paths",children:"Pruned vs. Full Merkle-paths"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"Merkle path"})," is a collection of ",(0,t.jsx)(n.strong,{children:"sibling hashes"})," that allows the verifier to ",(0,t.jsx)(n.strong,{children:"reconstruct the root hash"})," from a specific leaf.\nThis enables anyone with the ",(0,t.jsx)(n.strong,{children:"path and root"})," to verify that the ",(0,t.jsx)(n.strong,{children:"leaf"})," belongs to the committed dataset.\nThere are two types of paths that can be computed:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#generating-merkle-proofs",children:(0,t.jsx)(n.strong,{children:"Pruned Path:"})})," Contains only necessary sibling hashes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full Path:"})," Contains all sibling nodes and intermediate hashes."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Merkle Full Path Diagram",src:r(98518).A+"",width:"1523",height:"723"})}),"\n",(0,t.jsxs)(n.p,{children:["To compute a full path, specify ",(0,t.jsx)(n.code,{children:"pruned=false"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"mp, _ := merkletree.GetMerkleTreeProof[byte](\n  &mt,\n  core.HostSliceFromElements(input),\n  5,     /* leafIndex */\n  false, /*non-pruned is a full path --\x3e note the pruned flag here*/\n  core.GetDefaultMerkleTreeConfig(),\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"handling-partial-tree-storage",children:"Handling Partial Tree Storage"}),"\n",(0,t.jsxs)(n.p,{children:["In cases where the ",(0,t.jsx)(n.strong,{children:"Merkle tree is large"}),", only the ",(0,t.jsx)(n.strong,{children:"top layers"})," may be stored to conserve memory.\nWhen opening leaves, the ",(0,t.jsx)(n.strong,{children:"first layers"})," (closest to the leaves) are ",(0,t.jsx)(n.strong,{children:"recomputed dynamically"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example to avoid storing first layer we can define a tree as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"mt, err := merkletree.CreateMerkleTree(layerHashers, leafSize, 1 /*min layer to store*/);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},212:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/diagram1-c14b789ecbb50149820704c41d936c61.png"},20604:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/diagram1_path-0865d68074ab3dc62654c62d92c00450.png"},98518:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/diagram1_path_full-f27fb5d5f5ff39d38926712860b1da40.png"},74703:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/diagram2-9ea2e302cb54350811182ac3d38527cb.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var i=r(96540);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);