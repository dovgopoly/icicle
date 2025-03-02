"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[2829],{23948:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"icicle/primitives/poseidon2","title":"Poseidon2","description":"TODO update for V3","source":"@site/versioned_docs/version-3.0.0/icicle/primitives/poseidon2.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/poseidon2","permalink":"/3.0.0/icicle/primitives/poseidon2","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/primitives/poseidon2.md","tags":[],"version":"3.0.0","lastUpdatedBy":"youyyytrok","lastUpdatedAt":1740918389000,"frontMatter":{}}');var s=i(74848),o=i(28453);const r={},c="Poseidon2",l={},a=[{value:"Using Poseidon2",id:"using-poseidon2",level:2},{value:"Supported Bindings",id:"supported-bindings",level:3},{value:"Constants",id:"constants",level:3},{value:"Rust API",id:"rust-api",level:3},{value:"The Tree Builder",id:"the-tree-builder",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"poseidon2",children:"Poseidon2"})}),"\n",(0,s.jsx)(n.p,{children:"TODO update for V3"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2023/323",children:"Poseidon2"})," is a recently released optimized version of Poseidon1. The two versions differ in two crucial points. First, Poseidon is a sponge hash function, while Poseidon2 can be either a sponge or a compression function depending on the use case. Secondly, Poseidon2 is instantiated by new and more efficient linear layers with respect to Poseidon. These changes decrease the number of multiplications in the linear layer by up to 90% and the number of constraints in Plonk circuits by up to 70%. This makes Poseidon2 currently the fastest arithmetization-oriented hash function without lookups."]}),"\n",(0,s.jsx)(n.h2,{id:"using-poseidon2",children:"Using Poseidon2"}),"\n",(0,s.jsx)(n.p,{children:"ICICLE Poseidon2 is implemented for GPU and parallelization is performed for each state.\nWe calculate multiple hash-sums over multiple pre-images in parallel, rather than going block by block over the input vector."}),"\n",(0,s.jsx)(n.p,{children:"For example, for Poseidon2 of width 16, input rate 8, output elements 8 and input of size 1024 * 8, we would expect 1024 * 8 elements of output. Which means each input block would be of size 8, resulting in 1024 Poseidon2 hashes being performed."}),"\n",(0,s.jsx)(n.h3,{id:"supported-bindings",children:"Supported Bindings"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust/icicle-core/src/poseidon2",children:(0,s.jsx)(n.code,{children:"Rust"})})}),"\n",(0,s.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,s.jsx)(n.p,{children:"Poseidon2 is also extremely customizable and using different constants will produce different hashes, security levels and performance results."}),"\n",(0,s.jsxs)(n.p,{children:["We support pre-calculated constants for each of the ",(0,s.jsx)(n.a,{href:"../libraries#supported-curves-and-operations",children:"supported curves"}),". The constants can be found ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/include/poseidon2/constants",children:"here"})," and are labeled clearly per curve ",(0,s.jsx)(n.code,{children:"<curve_name>_poseidon2.h"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also use your own set of constants as shown ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-fields/icicle-babybear/src/poseidon2/mod.rs#L290",children:"here"})]}),"\n",(0,s.jsx)(n.h3,{id:"rust-api",children:"Rust API"}),"\n",(0,s.jsx)(n.p,{children:"This is the most basic way to use the Poseidon2 API."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let test_size = 1 << 10;\nlet width = 16;\nlet rate = 8;\nlet ctx = get_default_device_context();\nlet poseidon = Poseidon2::load(width, rate, MdsType::Default, DiffusionStrategy::Default, &ctx).unwrap();\nlet config = HashConfig::default();\n\nlet inputs = vec![F::one(); test_size * rate as usize];\nlet outputs = vec![F::zero(); test_size];\nlet mut input_slice = HostOrDeviceSlice::on_host(inputs);\nlet mut output_slice = HostOrDeviceSlice::on_host(outputs);\n\nposeidon.hash_many::<F>(\n    &mut input_slice,\n    &mut output_slice,\n    test_size as u32,\n    rate as u32,\n    8, // Output length\n    &config,\n)\n.unwrap();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above ",(0,s.jsx)(n.code,{children:"Poseidon2::load(width, rate, MdsType::Default, DiffusionStrategy::Default, &ctx).unwrap();"})," is used to load the correct constants based on width and curve. Here, the default MDS matrices and diffusion are used. If you want to get a Plonky3 compliant version, set them to ",(0,s.jsx)(n.code,{children:"MdsType::Plonky"})," and ",(0,s.jsx)(n.code,{children:"DiffusionStrategy::Montgomery"})," respectively."]}),"\n",(0,s.jsx)(n.h2,{id:"the-tree-builder",children:"The Tree Builder"}),"\n",(0,s.jsx)(n.p,{children:"Similar to Poseidon1, you can use Poseidon2 in a tree builder."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use icicle_bn254::tree::Bn254TreeBuilder;\nuse icicle_bn254::poseidon2::Poseidon2;\n\nlet mut config = TreeBuilderConfig::default();\nlet arity = 2;\nconfig.arity = arity as u32;\nlet input_block_len = arity;\nlet leaves = vec![F::one(); (1 << height) * arity];\nlet mut digests = vec![F::zero(); merkle_tree_digests_len((height + 1) as u32, arity as u32, 1)];\n\nlet leaves_slice = HostSlice::from_slice(&leaves);\nlet digests_slice = HostSlice::from_mut_slice(&mut digests);\n\nlet ctx = device_context::DeviceContext::default();\nlet hash = Poseidon2::load(arity, arity, MdsType::Default, DiffusionStrategy::Default, &ctx).unwrap();\n\nlet mut config = TreeBuilderConfig::default();\nconfig.keep_rows = 5;\nBn254TreeBuilder::build_merkle_tree(\n    leaves_slice,\n    digests_slice,\n    height,\n    input_block_len,\n    &hash,\n    &hash,\n    &config,\n)\n.unwrap();\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);