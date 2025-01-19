"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[3413],{3472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"icicle/rust-bindings","title":"Rust bindings","description":"Rust bindings allow you to use ICICLE as a rust library.","source":"@site/versioned_docs/version-2.8.0/icicle/rust-bindings.md","sourceDirName":"icicle","slug":"/icicle/rust-bindings","permalink":"/2.8.0/icicle/rust-bindings","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/rust-bindings.md","tags":[],"version":"2.8.0","lastUpdatedBy":"Koren-Brand","lastUpdatedAt":1737296485000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Multi GPU Support","permalink":"/2.8.0/icicle/golang-bindings/multi-gpu"},"next":{"title":"MSM","permalink":"/2.8.0/icicle/rust-bindings/msm"}}');var s=n(4848),r=n(8453);const l={},c="Rust bindings",d={},o=[{value:"Using ICICLE Rust bindings in your project",id:"using-icicle-rust-bindings-in-your-project",level:2},{value:"How do the rust bindings work?",id:"how-do-the-rust-bindings-work",level:2},{value:"Supported curves, fields and operations",id:"supported-curves-fields-and-operations",level:2},{value:"Supported curves and operations",id:"supported-curves-and-operations",level:3},{value:"Supported fields and operations",id:"supported-fields-and-operations",level:3},{value:"Supported hashes",id:"supported-hashes",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"rust-bindings",children:"Rust bindings"})}),"\n",(0,s.jsx)(t.p,{children:"Rust bindings allow you to use ICICLE as a rust library."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"icicle-core"})," defines all interfaces, macros and common methods."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"icicle-cuda-runtime"})," defines DeviceContext which can be used to manage a specific GPU as well as wrapping common CUDA methods."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"icicle-curves"})," implements all interfaces and macros from icicle-core for each curve. For example icicle-bn254 implements curve bn254. Each curve has its own build script which will build the CUDA libraries for that curve as part of the rust-toolchain build."]}),"\n",(0,s.jsx)(t.h2,{id:"using-icicle-rust-bindings-in-your-project",children:"Using ICICLE Rust bindings in your project"}),"\n",(0,s.jsxs)(t.p,{children:["Simply add the following to your ",(0,s.jsx)(t.code,{children:"Cargo.toml"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'# GPU Icicle integration\nicicle-cuda-runtime = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-core = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-bn254 = { git = "https://github.com/ingonyama-zk/icicle.git" }\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"icicle-bn254"})," being the curve you wish to use and ",(0,s.jsx)(t.code,{children:"icicle-core"})," and ",(0,s.jsx)(t.code,{children:"icicle-cuda-runtime"})," contain ICICLE utilities and CUDA wrappers."]}),"\n",(0,s.jsxs)(t.p,{children:["If you wish to point to a specific ICICLE branch add ",(0,s.jsx)(t.code,{children:'branch = "<name_of_branch>"'})," or ",(0,s.jsx)(t.code,{children:'tag = "<name_of_tag>"'})," to the ICICLE dependency. For a specific commit add ",(0,s.jsx)(t.code,{children:'rev = "<commit_id>"'}),"."]}),"\n",(0,s.jsx)(t.p,{children:"When you build your project ICICLE will be built as part of the build command."}),"\n",(0,s.jsx)(t.h2,{id:"how-do-the-rust-bindings-work",children:"How do the rust bindings work?"}),"\n",(0,s.jsxs)(t.p,{children:["The rust bindings are just rust wrappers for ICICLE Core static libraries which can be compiled. We integrate the compilation of the static libraries into rusts toolchain to make usage seamless and easy. This is achieved by ",(0,s.jsx)(t.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs",children:"extending rusts build command"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use cmake::Config;\nuse std::env::var;\n\nfn main() {\n    println!("cargo:rerun-if-env-changed=CXXFLAGS");\n    println!("cargo:rerun-if-changed=../../../../icicle");\n\n    let cargo_dir = var("CARGO_MANIFEST_DIR").unwrap();\n    let profile = var("PROFILE").unwrap();\n\n    let out_dir = Config::new("../../../../icicle")\n                .define("BUILD_TESTS", "OFF") //TODO: feature\n                .define("CURVE", "bn254")\n                .define("CMAKE_BUILD_TYPE", "Release")\n                .build_target("icicle")\n                .build();\n\n    println!("cargo:rustc-link-search={}/build", out_dir.display());\n\n    println!("cargo:rustc-link-lib=ingo_bn254");\n    println!("cargo:rustc-link-lib=stdc++");\n    // println!("cargo:rustc-link-search=native=/usr/local/cuda/lib64");\n    println!("cargo:rustc-link-lib=cudart");\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"supported-curves-fields-and-operations",children:"Supported curves, fields and operations"}),"\n",(0,s.jsx)(t.h3,{id:"supported-curves-and-operations",children:"Supported curves and operations"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Operation\\Curve"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"bn254"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"bls12_377"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"bls12_381"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"bw6-761"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"grumpkin"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MSM"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"G2"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NTT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ECNTT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"VecOps"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Polynomials"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Poseidon"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Merkle Tree"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"supported-fields-and-operations",children:"Supported fields and operations"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Operation\\Field"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"babybear"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"stark252"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"VecOps"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Polynomials"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NTT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Extension Field"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"supported-hashes",children:"Supported hashes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Hash"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Sizes"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Keccak"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"256, 512"})]})})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);