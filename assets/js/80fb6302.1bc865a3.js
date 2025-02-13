"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[2500],{1684:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"icicle/rust-bindings","title":"Rust bindings","description":"Rust bindings allow you to use ICICLE as a rust library.","source":"@site/versioned_docs/version-1.10.1/icicle/rust-bindings.md","sourceDirName":"icicle","slug":"/icicle/rust-bindings","permalink":"/1.10.1/icicle/rust-bindings","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/rust-bindings.md","tags":[],"version":"1.10.1","lastUpdatedBy":"Elan","lastUpdatedAt":1739451718000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Multi GPU Support","permalink":"/1.10.1/icicle/golang-bindings/multi-gpu"},"next":{"title":"MSM","permalink":"/1.10.1/icicle/rust-bindings/msm"}}');var t=n(4848),r=n(8453);const s={},o="Rust bindings",l={},a=[{value:"Using ICICLE Rust bindings in your project",id:"using-icicle-rust-bindings-in-your-project",level:2}];function d(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"rust-bindings",children:"Rust bindings"})}),"\n",(0,t.jsx)(e.p,{children:"Rust bindings allow you to use ICICLE as a rust library."}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"icicle-core"})," defines all interfaces, macros and common methods."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"icicle-cuda-runtime"})," defines DeviceContext which can be used to manage a specific GPU as well as wrapping common CUDA methods."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"icicle-curves"})," implements all interfaces and macros from icicle-core for each curve. For example icicle-bn254 implements curve bn254. Each curve has its own build script which will build the CUDA libraries for that curve as part of the rust-toolchain build."]}),"\n",(0,t.jsx)(e.h2,{id:"using-icicle-rust-bindings-in-your-project",children:"Using ICICLE Rust bindings in your project"}),"\n",(0,t.jsxs)(e.p,{children:["Simply add the following to your ",(0,t.jsx)(e.code,{children:"Cargo.toml"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'# GPU Icicle integration\nicicle-cuda-runtime = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-core = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-bn254 = { git = "https://github.com/ingonyama-zk/icicle.git" }\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"icicle-bn254"})," being the curve you wish to use and ",(0,t.jsx)(e.code,{children:"icicle-core"})," and ",(0,t.jsx)(e.code,{children:"icicle-cuda-runtime"})," contain ICICLE utilities and CUDA wrappers."]}),"\n",(0,t.jsxs)(e.p,{children:["If you wish to point to a specific ICICLE branch add ",(0,t.jsx)(e.code,{children:'branch = "<name_of_branch>"'})," or ",(0,t.jsx)(e.code,{children:'tag = "<name_of_tag>"'})," to the ICICLE dependency. For a specific commit add ",(0,t.jsx)(e.code,{children:'rev = "<commit_id>"'}),"."]}),"\n",(0,t.jsx)(e.p,{children:"When you build your project ICICLE will be built as part of the build command."}),"\n",(0,t.jsx)(e.h1,{id:"how-do-the-rust-bindings-work",children:"How do the rust bindings work?"}),"\n",(0,t.jsxs)(e.p,{children:["The rust bindings are just rust wrappers for ICICLE Core static libraries which can be compiled. We integrate the compilation of the static libraries into rusts toolchain to make usage seamless and easy. This is achieved by ",(0,t.jsx)(e.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs",children:"extending rusts build command"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'use cmake::Config;\nuse std::env::var;\n\nfn main() {\n    println!("cargo:rerun-if-env-changed=CXXFLAGS");\n    println!("cargo:rerun-if-changed=../../../../icicle");\n\n    let cargo_dir = var("CARGO_MANIFEST_DIR").unwrap();\n    let profile = var("PROFILE").unwrap();\n\n    let out_dir = Config::new("../../../../icicle")\n                .define("BUILD_TESTS", "OFF") //TODO: feature\n                .define("CURVE", "bn254")\n                .define("CMAKE_BUILD_TYPE", "Release")\n                .build_target("icicle")\n                .build();\n\n    println!("cargo:rustc-link-search={}/build", out_dir.display());\n\n    println!("cargo:rustc-link-lib=ingo_bn254");\n    println!("cargo:rustc-link-lib=stdc++");\n    // println!("cargo:rustc-link-search=native=/usr/local/cuda/lib64");\n    println!("cargo:rustc-link-lib=cudart");\n}\n'})})]})}function u(i={}){const{wrapper:e}={...(0,r.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(d,{...i})}):d(i)}},8453:(i,e,n)=>{n.d(e,{R:()=>s,x:()=>o});var c=n(6540);const t={},r=c.createContext(t);function s(i){const e=c.useContext(r);return c.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function o(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:s(i.components),c.createElement(r.Provider,{value:e},i.children)}}}]);