"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[7410],{55644:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"icicle/primitives/poseidon","title":"Poseidon","description":"TODO update for V3","source":"@site/versioned_docs/version-3.3.0/icicle/primitives/poseidon.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/poseidon","permalink":"/3.3.0/icicle/primitives/poseidon","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.3.0/icicle/primitives/poseidon.md","tags":[],"version":"3.3.0","lastUpdatedBy":"Elan","lastUpdatedAt":1741705395000,"frontMatter":{}}');var s=i(74848),o=i(28453);const r={},a="Poseidon",l={},d=[{value:"Initialization",id:"initialization",level:2},{value:"Applying full and partial rounds",id:"applying-full-and-partial-rounds",level:2},{value:"Full rounds",id:"full-rounds",level:3},{value:"Partial Rounds",id:"partial-rounds",level:3},{value:"Using Poseidon",id:"using-poseidon",level:2},{value:"Supported Bindings",id:"supported-bindings",level:3},{value:"Constants",id:"constants",level:3},{value:"Rust API",id:"rust-api",level:3},{value:"The Tree Builder",id:"the-tree-builder",level:2},{value:"Benchmarks",id:"benchmarks",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"poseidon",children:"Poseidon"})}),"\n",(0,s.jsx)(n.p,{children:"TODO update for V3"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2019/458.pdf",children:"Poseidon"})," is a popular hash in the ZK ecosystem primarily because its optimized to work over large prime fields, a common setting for ZK proofs, thereby minimizing the number of multiplicative operations required."]}),"\n",(0,s.jsx)(n.p,{children:"Poseidon has also been specifically designed to be efficient when implemented within ZK circuits, Poseidon uses far less constraints compared to other hash functions like Keccak or SHA-256 in the context of ZK circuits."}),"\n",(0,s.jsxs)(n.p,{children:["Poseidon has been used in many popular ZK protocols such as Filecoin and ",(0,s.jsx)(n.a,{href:"https://drive.google.com/file/d/1bZZvKMQHaZGA4L9eZhupQLyGINkkFG_b/view?usp=drive_open",children:"Plonk"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Our implementation of Poseidon is implemented in accordance with the optimized ",(0,s.jsx)(n.a,{href:"https://spec.filecoin.io/algorithms/crypto/poseidon/",children:"Filecoin version"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Lets understand how Poseidon works."}),"\n",(0,s.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsx)(n.p,{children:"Poseidon starts with the initialization of its internal state, which is composed of the input elements and some pre-generated constants. An initial round constant is added to each element of the internal state. Adding the round constants ensures the state is properly mixed from the beginning."}),"\n",(0,s.jsx)(n.p,{children:"This is done to prevent collisions and to prevent certain cryptographic attacks by ensuring that the internal state is sufficiently mixed and unpredictable."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/ingonyama-zk/icicle/assets/122266060/52257f5d-6097-47c4-8f17-7b6449b9d162",alt:"Poseidon initialization of internal state added with pre-generated round constants"})}),"\n",(0,s.jsx)(n.h2,{id:"applying-full-and-partial-rounds",children:"Applying full and partial rounds"}),"\n",(0,s.jsx)(n.p,{children:'To generate a secure hash output, the algorithm goes through a series of "full rounds" and "partial rounds" as well as transformations between these sets of rounds in the following order:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"First full rounds -> apply S-box and Round constants -> partial rounds -> Last full rounds -> Apply S-box"})}),"\n",(0,s.jsx)(n.h3,{id:"full-rounds",children:"Full rounds"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/ingonyama-zk/icicle/assets/122266060/e4ce0e98-b90b-4261-b83e-3cd8cce069cb",alt:"Full round iterations consisting of S box operations, adding round constants, and a Full MDS matrix multiplication"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Uniform Application of S-box:"})," In full rounds, the S-box (a non-linear transformation) is applied uniformly to every element of the hash function's internal state. This ensures a high degree of mixing and diffusion, contributing to the hash function's security. The functions S-box involves raising each element of the state to a certain power denoted by ",(0,s.jsx)(n.code,{children:"\u03b1"})," a member of the finite field defined by the prime ",(0,s.jsx)(n.code,{children:"p"}),"; ",(0,s.jsx)(n.code,{children:"\u03b1"})," can be different depending on the implementation and user configuration."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Linear Transformation:"})," After applying the S-box, a linear transformation is performed on the state. This involves multiplying the state by a MDS (Maximum Distance Separable) Matrix. which further diffuses the transformations applied by the S-box across the entire state."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Addition of Round Constants:"})," Each element of the state is then modified by adding a unique round constant. These constants are different for each round and are precomputed as part of the hash function's initialization. The addition of round constants ensures that even minor changes to the input produce significant differences in the output."]}),"\n",(0,s.jsx)(n.h3,{id:"partial-rounds",children:"Partial Rounds"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/ingonyama-zk/icicle/assets/122266060/e8c198b4-7aa4-4b4d-9ec4-604e39e07692",alt:"Partial round iterations consisting of selective S box operation, adding a round constant and performing an MDS multiplication with a sparse matrix"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Selective Application of S-Box:"})," Partial rounds apply the S-box transformation to only one element of the internal state per round, rather than to all elements. This selective application significantly reduces the computational complexity of the hash function without compromising its security. The choice of which element to apply the S-box to can follow a specific pattern or be fixed, depending on the design of the hash function."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Linear Transformation and Round Constants:"})," A linear transformation is performed and round constants are added. The linear transformation in partial rounds can be designed to be less computationally intensive (this is done by using a sparse matrix) than in full rounds, further optimizing the function's efficiency."]}),"\n",(0,s.jsx)(n.p,{children:"The user of Poseidon can often choose how many partial or full rounds he wishes to apply; more full rounds will increase security but degrade performance. The choice and balance is highly dependent on the use case."}),"\n",(0,s.jsx)(n.h2,{id:"using-poseidon",children:"Using Poseidon"}),"\n",(0,s.jsx)(n.p,{children:"ICICLE Poseidon is implemented for GPU and parallelization is performed for each element of the state rather than for each state.\nWhat that means is we calculate multiple hash-sums over multiple pre-images in parallel, rather than going block by block over the input vector."}),"\n",(0,s.jsx)(n.p,{children:"So for Poseidon of arity 2 and input of size 1024 * 2, we would expect 1024 elements of output. Which means each block would be of size 2 and that would result in 1024 Poseidon hashes being performed."}),"\n",(0,s.jsx)(n.h3,{id:"supported-bindings",children:"Supported Bindings"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/golang/curves/bn254/poseidon/poseidon.go",children:(0,s.jsx)(n.code,{children:"Go"})}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust/icicle-core/src/poseidon",children:(0,s.jsx)(n.code,{children:"Rust"})})]}),"\n",(0,s.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,s.jsx)(n.p,{children:"Poseidon is extremely customizable and using different constants will produce different hashes, security levels and performance results."}),"\n",(0,s.jsxs)(n.p,{children:["We support pre-calculated and optimized constants for each of the ",(0,s.jsx)(n.a,{href:"../libraries#supported-curves-and-operations",children:"supported curves"}),".The constants can be found ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/include/poseidon/constants",children:"here"})," and are labeled clearly per curve ",(0,s.jsx)(n.code,{children:"<curve_name>_poseidon.h"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you wish to generate your own constants you can use our python script which can be found ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/include/poseidon/constants/generate_parameters.py",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install python 3"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pip install poseidon-hash"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pip install galois==0.3.7"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pip install numpy"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You will then need to modify the following values before running the script."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Modify these\narity = 11 # we support arity 2, 4, 8 and 11.\np = 0x73EDA753299D7D483339D80809A1D80553BDA402FFFE5BFEFFFFFFFF00000001 # bls12-381\n# p = 0x12ab655e9a2ca55660b44d1e5c37b00159aa76fed00000010a11800000000001 # bls12-377\n# p = 0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001 # bn254\n# p = 0x1ae3a4617c510eac63b05c06ca1493b1a22d9f300f5138f1ef3622fba094800170b5d44300000008508c00000000001 # bw6-761\nprime_bit_len = 255\nfield_bytes = 32\n\n...\n\n# primitive_element = None\nprimitive_element = 7 # bls12-381\n# primitive_element = 22 # bls12-377\n# primitive_element = 5 # bn254\n# primitive_element = 15 # bw6-761\n"})}),"\n",(0,s.jsx)(n.h3,{id:"rust-api",children:"Rust API"}),"\n",(0,s.jsx)(n.p,{children:"This is the most basic way to use the Poseidon API."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let test_size = 1 << 10;\nlet arity = 2u32;\nlet ctx = get_default_device_context();\nlet poseidon = Poseidon::load(arity, &ctx).unwrap();\nlet config = HashConfig::default();\n\nlet inputs = vec![F::one(); test_size * arity as usize];\nlet outputs = vec![F::zero(); test_size];\nlet mut input_slice = HostOrDeviceSlice::on_host(inputs);\nlet mut output_slice = HostOrDeviceSlice::on_host(outputs);\n\nposeidon.hash_many::<F>(\n    &mut input_slice,\n    &mut output_slice,\n    test_size as u32,\n    arity as u32,\n    1, // Output length\n    &config,\n)\n.unwrap();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"HashConfig"})," can be modified, by default the inputs and outputs are set to be on ",(0,s.jsx)(n.code,{children:"Host"})," for example."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> Default for HashConfig<'a> {\n    fn default() -> Self {\n        let ctx = get_default_device_context();\n        Self {\n            ctx,\n            are_inputs_on_device: false,\n            are_outputs_on_device: false,\n            is_async: false,\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above ",(0,s.jsx)(n.code,{children:"Poseidon::load(arity, &ctx).unwrap();"})," is used which will load the correct constants based on arity and curve. Its possible to ",(0,s.jsx)(n.a,{href:"#constants",children:"generate"})," your own constants and load them."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let ctx = get_default_device_context();\nlet custom_poseidon = Poseidon::new(\n    arity, // The arity of poseidon hash. The width will be equal to arity + 1\n    alpha, // The S-box power\n    full_rounds_half,\n    partial_rounds,\n    round_constants,\n    mds_matrix, \n    non_sparse_matrix,\n    sparse_matrices,\n    domain_tag,\n    ctx,\n)\n.unwrap();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"the-tree-builder",children:"The Tree Builder"}),"\n",(0,s.jsx)(n.p,{children:"The tree builder allows you to build Merkle trees using Poseidon."}),"\n",(0,s.jsxs)(n.p,{children:["You can define both the tree's ",(0,s.jsx)(n.code,{children:"height"})," and its ",(0,s.jsx)(n.code,{children:"arity"}),". The tree ",(0,s.jsx)(n.code,{children:"height"})," determines the number of layers in the tree, including the root and the leaf layer. The ",(0,s.jsx)(n.code,{children:"arity"})," determines how many children each internal node can have."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use icicle_bn254::tree::Bn254TreeBuilder;\nuse icicle_bn254::poseidon::Poseidon;\n\nlet mut config = TreeBuilderConfig::default();\nlet arity = 2;\nconfig.arity = arity as u32;\nlet input_block_len = arity;\nlet leaves = vec![F::one(); (1 << height) * arity];\nlet mut digests = vec![F::zero(); merkle_tree_digests_len((height + 1) as u32, arity as u32, 1)];\n\nlet leaves_slice = HostSlice::from_slice(&leaves);\nlet digests_slice = HostSlice::from_mut_slice(&mut digests);\n\nlet ctx = device_context::DeviceContext::default();\nlet hash = Poseidon::load(2, &ctx).unwrap();\n\nlet mut config = TreeBuilderConfig::default();\nconfig.keep_rows = 5;\nBn254TreeBuilder::build_merkle_tree(\n    leaves_slice,\n    digests_slice,\n    height,\n    input_block_len,\n    &hash,\n    &hash,\n    &config,\n)\n.unwrap();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Similar to Poseidon, you can also configure the Tree Builder ",(0,s.jsx)(n.code,{children:"TreeBuilderConfig::default()"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keep_rows"}),": The number of rows which will be written to output, 0 will write all rows."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"are_inputs_on_device"}),": Have the inputs been loaded to device memory ?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"is_async"}),": Should the TreeBuilder run asynchronously? ",(0,s.jsx)(n.code,{children:"False"})," will block the current CPU thread. ",(0,s.jsx)(n.code,{children:"True"})," will require you call ",(0,s.jsx)(n.code,{children:"cudaStreamSynchronize"})," or ",(0,s.jsx)(n.code,{children:"cudaDeviceSynchronize"})," to retrieve the result."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,s.jsx)(n.p,{children:"We ran the Poseidon tree builder on:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CPU"}),": 12th Gen Intel(R) Core(TM) i9-12900K/"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GPU"}),": RTX 3090 Ti"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tree height"}),": 30 (2^29 elements)"]}),"\n",(0,s.jsx)(n.p,{children:"The benchmarks include copying data from and to the device."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Rows to keep parameter"}),(0,s.jsx)(n.th,{children:"Run time, Icicle"}),(0,s.jsx)(n.th,{children:"Supranational PC2"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"9.4 seconds"}),(0,s.jsx)(n.td,{children:"13.6 seconds"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"20"}),(0,s.jsx)(n.td,{children:"9.5 seconds"}),(0,s.jsx)(n.td,{children:"13.6 seconds"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"29"}),(0,s.jsx)(n.td,{children:"13.7 seconds"}),(0,s.jsx)(n.td,{children:"13.6 seconds"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);