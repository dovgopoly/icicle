"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[6933],{4136:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"icicle/libraries","title":"ICICLE libraries","description":"ICICLE is composed of two main logical parts:","source":"@site/versioned_docs/version-3.2.0/icicle/libraries.md","sourceDirName":"icicle","slug":"/icicle/libraries","permalink":"/3.2.0/icicle/libraries","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.2.0/icicle/libraries.md","tags":[],"version":"3.2.0","lastUpdatedBy":"Jeremy Felder","lastUpdatedAt":1736060652000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Multi-Device Support","permalink":"/3.2.0/icicle/multi-device"},"next":{"title":"ICICLE Compute APIs","permalink":"/3.2.0/icicle/primitives/overview"}}');var n=i(4848),s=i(8453);const l={},c="ICICLE libraries",d={},a=[{value:"ICICLE device",id:"icicle-device",level:2},{value:"ICICLE Core",id:"icicle-core",level:2},{value:"Rust",id:"rust",level:3},{value:"Supported curves, fields and operations",id:"supported-curves-fields-and-operations",level:3},{value:"Supported curves and operations",id:"supported-curves-and-operations",level:4},{value:"Supported fields and operations",id:"supported-fields-and-operations",level:4},{value:"Misc",id:"misc",level:3},{value:"Backend",id:"backend",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"icicle-libraries",children:"ICICLE libraries"})}),"\n",(0,n.jsx)(t.p,{children:"ICICLE is composed of two main logical parts:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#icicle-device",children:(0,n.jsx)(t.strong,{children:"ICICLE device library"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#icicle-core",children:(0,n.jsx)(t.strong,{children:"ICICLE template core library"})})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"icicle-device",children:"ICICLE device"}),"\n",(0,n.jsx)(t.p,{children:"The ICICLE device library serves as an abstraction layer for interacting with various hardware devices. It provides a comprehensive interface for tasks such as setting the active device, querying device-specific information like free and total memory, determining the number of available devices, and managing memory allocation. Additionally, it offers functionality for copying data to and from devices, managing task queues (streams) for efficient device utilization, and abstracting the complexities of device management away from the user."}),"\n",(0,n.jsxs)(t.p,{children:["See programmers guide for more details. ",(0,n.jsx)(t.a,{href:"./programmers_guide/cpp#device-management",children:"C++"}),", ",(0,n.jsx)(t.a,{href:"./programmers_guide/rust#device-management",children:"Rust"}),", ",(0,n.jsx)(t.a,{href:"./programmers_guide/go",children:"Go"})]}),"\n",(0,n.jsx)(t.h2,{id:"icicle-core",children:"ICICLE Core"}),"\n",(0,n.jsx)(t.p,{children:"ICICLE Core is a template library written in C++ that implements fundamental cryptographic operations, including field and curve arithmetic, as well as higher-level APIs such as MSM and NTT."}),"\n",(0,n.jsxs)(t.p,{children:["The Core can be ",(0,n.jsx)(t.a,{href:"./build_from_source",children:"instantiated"})," for different fields, curves, and other cryptographic components, allowing you to tailor it to your specific needs. You can link your application to one or more ICICLE libraries, depending on the requirements of your project. For example, you might only need the babybear library or a combination of babybear and a Merkle tree builder."]}),"\n",(0,n.jsx)(t.h3,{id:"rust",children:"Rust"}),"\n",(0,n.jsxs)(t.p,{children:["Each library has a corresponding crate. See ",(0,n.jsx)(t.a,{href:"/3.2.0/icicle/programmers_guide/general",children:"programmers guide"})," for more details."]}),"\n",(0,n.jsx)(t.h3,{id:"supported-curves-fields-and-operations",children:"Supported curves, fields and operations"}),"\n",(0,n.jsx)(t.h4,{id:"supported-curves-and-operations",children:"Supported curves and operations"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation\\Curve"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://neuromancer.sk/std/bn/bn254",children:"bn254"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://neuromancer.sk/std/bls/BLS12-377",children:"bls12-377"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://neuromancer.sk/std/bls/BLS12-381",children:"bls12-381"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://eprint.iacr.org/2020/351",children:"bw6-761"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"grumpkin"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./primitives/msm",children:"MSM"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"G2 MSM"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./primitives/ntt",children:"NTT"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ECNTT"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./primitives/vec_ops",children:"Vector operations"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./polynomials/overview",children:"Polynomials"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"primitives/hash#poseidon",children:"Poseidon"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"supported-fields-and-operations",children:"Supported fields and operations"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation\\Field"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://eprint.iacr.org/2023/824.pdf",children:"babybear"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://docs.starknet.io/documentation/architecture_and_concepts/Cryptography/p-value/",children:"Stark252"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"m31"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./primitives/vec_ops",children:"Vector operations"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./polynomials/overview",children:"Polynomials"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"primitives/ntt",children:"NTT"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Extension Field"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"primitives/hash#poseidon",children:"Poseidon"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"misc",children:"Misc"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"primitives/hash#keccak-and-sha3",children:"Keccak"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"supporting 256b and 512b digest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"primitives/hash#keccak-and-sha3",children:"SHA3"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"supporting 256b and 512b digest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"primitives/hash#blake2s",children:"Blake2s"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"digest is 256b"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"primitives/merkle",children:"Merkle-Tree"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"works with any combination of hash functions"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"backend",children:"Backend"}),"\n",(0,n.jsx)(t.p,{children:"Each backend must implement the device API interface.\nEach backend may implement"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"One or more ICICLE library. For example implement only bn254 curve."}),"\n",(0,n.jsx)(t.li,{children:"One or more APIs in this library. For example MSM only."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/3.2.0/icicle/install_cuda_backend",children:"CUDA backend"})," and ",(0,n.jsx)(t.a,{href:"/3.2.0/icicle/build_your_own_backend",children:"Build Your Own Backend"})," for more info about implementing a backend."]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>c});var r=i(6540);const n={},s=r.createContext(n);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);