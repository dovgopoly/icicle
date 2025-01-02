"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[7751],{1343:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"icicle/rust-bindings","title":"Rust bindings","description":"Rust bindings allow you to use ICICLE as a rust library.","source":"@site/versioned_docs/version-3.2.0/icicle/rust-bindings.md","sourceDirName":"icicle","slug":"/icicle/rust-bindings","permalink":"/3.2.0/icicle/rust-bindings","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.2.0/icicle/rust-bindings.md","tags":[],"version":"3.2.0","lastUpdatedBy":"ShaniBabayoff","lastUpdatedAt":1735802624000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Merkle-Tree","permalink":"/3.2.0/icicle/golang-bindings/merkle"},"next":{"title":"MSM","permalink":"/3.2.0/icicle/rust-bindings/msm"}}');var c=n(4848),r=n(8453);const s={},o="Rust bindings",a={},d=[{value:"Using ICICLE Rust bindings in your project",id:"using-icicle-rust-bindings-in-your-project",level:2},{value:"How do the rust bindings work?",id:"how-do-the-rust-bindings-work",level:2}];function l(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"rust-bindings",children:"Rust bindings"})}),"\n",(0,c.jsx)(i.p,{children:"Rust bindings allow you to use ICICLE as a rust library."}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"icicle-core"})," defines all interfaces, macros and common methods."]}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"icicle-runtime"})," contains runtime APIs for memory management, stream management and more."]}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"icicle-curves"})," / ",(0,c.jsx)(i.code,{children:"icicle-fields"})," implement all interfaces and macros from icicle-core for each curve. For example icicle-bn254 implements curve bn254. Each curve has its own build script which will build the ICICLE libraries for that curve as part of the rust-toolchain build."]}),"\n",(0,c.jsx)(i.h2,{id:"using-icicle-rust-bindings-in-your-project",children:"Using ICICLE Rust bindings in your project"}),"\n",(0,c.jsxs)(i.p,{children:["Simply add the following to your ",(0,c.jsx)(i.code,{children:"Cargo.toml"}),"."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-toml",children:'# GPU Icicle integration\nicicle-runtime = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-core = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-bn254 = { git = "https://github.com/ingonyama-zk/icicle.git" }\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"icicle-bn254"})," being the curve you wish to use and ",(0,c.jsx)(i.code,{children:"icicle-core"})," and ",(0,c.jsx)(i.code,{children:"icicle-runtime"})," contain ICICLE utilities and CUDA wrappers."]}),"\n",(0,c.jsxs)(i.p,{children:["If you wish to point to a specific ICICLE branch add ",(0,c.jsx)(i.code,{children:'branch = "<name_of_branch>"'})," or ",(0,c.jsx)(i.code,{children:'tag = "<name_of_tag>"'})," to the ICICLE dependency. For a specific commit add ",(0,c.jsx)(i.code,{children:'rev = "<commit_id>"'}),"."]}),"\n",(0,c.jsx)(i.p,{children:"When you build your project ICICLE will be built as part of the build command."}),"\n",(0,c.jsx)(i.h2,{id:"how-do-the-rust-bindings-work",children:"How do the rust bindings work?"}),"\n",(0,c.jsx)(i.p,{children:"The rust bindings are rust crates that wrap the ICICLE Core libraries (C++). Each crate can wrap one or more ICICLE core libraries. They are built too when building the crate."}),"\n",(0,c.jsx)(i.admonition,{type:"note",children:(0,c.jsx)(i.p,{children:"Since ICICLE V3, core libraries are shared-libraries. This means that they must be installed in a directory that can be found by the linker. In addition, installing an application that depends on ICICLE must make sure to install ICICLE or have it installed on the target machine."})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var t=n(6540);const c={},r=t.createContext(c);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);