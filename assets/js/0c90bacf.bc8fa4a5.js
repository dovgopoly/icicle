"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[9507],{6619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"icicle/rust-bindings","title":"Rust bindings","description":"Rust bindings allow you to use ICICLE as a rust library.","source":"@site/versioned_docs/version-3.0.0/icicle/rust-bindings.md","sourceDirName":"icicle","slug":"/icicle/rust-bindings","permalink":"/3.0.0/icicle/rust-bindings","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/rust-bindings.md","tags":[],"version":"3.0.0","lastUpdatedBy":"idanfr-ingo","lastUpdatedAt":1739365935000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Multi GPU Support","permalink":"/3.0.0/icicle/golang-bindings/multi-gpu"},"next":{"title":"MSM","permalink":"/3.0.0/icicle/rust-bindings/msm"}}');var s=n(4848),r=n(8453);const l={},d="Rust bindings",c={},h=[{value:"Using ICICLE Rust bindings in your project",id:"using-icicle-rust-bindings-in-your-project",level:2},{value:"How do the rust bindings work?",id:"how-do-the-rust-bindings-work",level:2},{value:"Supported curves, fields and operations",id:"supported-curves-fields-and-operations",level:2},{value:"Supported curves and operations",id:"supported-curves-and-operations",level:3},{value:"Supported fields and operations",id:"supported-fields-and-operations",level:3},{value:"Supported hashes",id:"supported-hashes",level:3}];function o(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"rust-bindings",children:"Rust bindings"})}),"\n",(0,s.jsx)(t.p,{children:"Rust bindings allow you to use ICICLE as a rust library."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"icicle-core"})," defines all interfaces, macros and common methods."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"icicle-runtime"})," contains runtime APIs for memory management, stream management and more."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"icicle-curves"})," / ",(0,s.jsx)(t.code,{children:"icicle-fields"})," implement all interfaces and macros from icicle-core for each curve. For example icicle-bn254 implements curve bn254. Each curve has its own build script which will build the ICICLE libraries for that curve as part of the rust-toolchain build."]}),"\n",(0,s.jsx)(t.h2,{id:"using-icicle-rust-bindings-in-your-project",children:"Using ICICLE Rust bindings in your project"}),"\n",(0,s.jsxs)(t.p,{children:["Simply add the following to your ",(0,s.jsx)(t.code,{children:"Cargo.toml"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'# GPU Icicle integration\nicicle-runtime = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-core = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-bn254 = { git = "https://github.com/ingonyama-zk/icicle.git" }\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"icicle-bn254"})," being the curve you wish to use and ",(0,s.jsx)(t.code,{children:"icicle-core"})," and ",(0,s.jsx)(t.code,{children:"icicle-runtime"})," contain ICICLE utilities and CUDA wrappers."]}),"\n",(0,s.jsxs)(t.p,{children:["If you wish to point to a specific ICICLE branch add ",(0,s.jsx)(t.code,{children:'branch = "<name_of_branch>"'})," or ",(0,s.jsx)(t.code,{children:'tag = "<name_of_tag>"'})," to the ICICLE dependency. For a specific commit add ",(0,s.jsx)(t.code,{children:'rev = "<commit_id>"'}),"."]}),"\n",(0,s.jsx)(t.p,{children:"When you build your project ICICLE will be built as part of the build command."}),"\n",(0,s.jsx)(t.h2,{id:"how-do-the-rust-bindings-work",children:"How do the rust bindings work?"}),"\n",(0,s.jsx)(t.p,{children:"The rust bindings are rust crates that wrap the ICICLE Core libraries (C++). Each crate can wrap one or more ICICLE core libraries. They are built too when building the crate."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Since ICICLE V3, core libraries are shared-libraries. This means that they must be installed in a directory that can be found by the linker. In addition, installing an application that depends on ICICLE must make sure to install ICICLE or have it installed on the target machine."})}),"\n",(0,s.jsx)(t.h2,{id:"supported-curves-fields-and-operations",children:"Supported curves, fields and operations"}),"\n",(0,s.jsx)(t.h3,{id:"supported-curves-and-operations",children:"Supported curves and operations"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Operation\\Curve"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"bn254"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"bls12_377"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"bls12_381"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"bw6-761"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"grumpkin"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MSM"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"G2"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NTT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ECNTT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"VecOps"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Polynomials"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Poseidon"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Merkle Tree"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"supported-fields-and-operations",children:"Supported fields and operations"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Operation\\Field"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"babybear"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"stark252"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"VecOps"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Polynomials"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NTT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Extension Field"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"supported-hashes",children:"Supported hashes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Hash"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Sizes"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Keccak"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"256, 512"})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);