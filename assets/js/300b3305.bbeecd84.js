"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[3255],{5542:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"icicle/overview","title":"What is ICICLE?","description":"ICICLE is a cryptography library for ZK using GPUs. ICICLE implements blazing fast cryptographic primitives such as EC operations, MSM, NTT, Poseidon hash and more on GPU.","source":"@site/versioned_docs/version-2.8.0/icicle/overview.md","sourceDirName":"icicle","slug":"/icicle/overview","permalink":"/2.8.0/icicle/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/overview.md","tags":[],"version":"2.8.0","lastUpdatedBy":"danny-shterman","lastUpdatedAt":1733429726000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Introduction","permalink":"/2.8.0/"},"next":{"title":"Getting started","permalink":"/2.8.0/icicle/introduction"}}');var t=n(4848),r=n(8453);const a={},s="What is ICICLE?",c={},l=[{value:"Dont have access to a GPU?",id:"dont-have-access-to-a-gpu",level:2},{value:"Grants",id:"grants",level:3},{value:"Google Colab",id:"google-colab",level:3},{value:"Vast.ai",id:"vastai",level:3},{value:"What can you do with ICICLE?",id:"what-can-you-do-with-icicle",level:2},{value:"Circuit developers",id:"circuit-developers",level:3},{value:"Integrating into existing ZK provers",id:"integrating-into-existing-zk-provers",level:3},{value:"Developing your own ZK provers",id:"developing-your-own-zk-provers",level:3},{value:"Developing proof of concepts",id:"developing-proof-of-concepts",level:3}];function h(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"what-is-icicle",children:"What is ICICLE?"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle",children:"ICICLE"})," is a cryptography library for ZK using GPUs. ICICLE implements blazing fast cryptographic primitives such as EC operations, MSM, NTT, Poseidon hash and more on GPU."]}),"\n",(0,t.jsx)(i.p,{children:"ICICLE allows developers with minimal GPU experience to effortlessly accelerate their ZK application; from our experiments, even the most naive implementation may yield 10X improvement in proving times."}),"\n",(0,t.jsxs)(i.p,{children:["ICICLE has been used by many leading ZK companies such as ",(0,t.jsx)(i.a,{href:"https://github.com/celer-network",children:"Celer Network"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/Consensys/gnark",children:"Gnark"})," and others to accelerate their ZK proving pipeline."]}),"\n",(0,t.jsx)(i.h2,{id:"dont-have-access-to-a-gpu",children:"Dont have access to a GPU?"}),"\n",(0,t.jsx)(i.p,{children:"We understand that not all developers have access to a GPU and we don't want this to limit anyone from developing with ICICLE.\nHere are some ways we can help you gain access to GPUs:"}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["If none of the following options suit your needs, contact us on ",(0,t.jsx)(i.a,{href:"https://t.me/RealElan",children:"telegram"})," for assistance. We're committed to ensuring that a lack of a GPU doesn't become a bottleneck for you. If you need help with setup or any other issues, we're here to help you."]})}),"\n",(0,t.jsx)(i.h3,{id:"grants",children:"Grants"}),"\n",(0,t.jsxs)(i.p,{children:["At Ingonyama we are interested in accelerating the progress of ZK and cryptography. If you are an engineer, developer or an academic researcher we invite you to checkout ",(0,t.jsx)(i.a,{href:"https://www.ingonyama.com/blog/icicle-for-researchers-grants-challenges",children:"our grant program"}),". We will give you access to GPUs and even pay you to do your dream research!"]}),"\n",(0,t.jsx)(i.h3,{id:"google-colab",children:"Google Colab"}),"\n",(0,t.jsx)(i.p,{children:"This is a great way to get started with ICICLE instantly. Google Colab offers free GPU access to a NVIDIA T4 instance with 16 GB of memory which should be enough for experimenting and even prototyping with ICICLE."}),"\n",(0,t.jsxs)(i.p,{children:["For an extensive guide on how to setup Google Colab with ICICLE refer to ",(0,t.jsx)(i.a,{href:"/2.8.0/icicle/colab-instructions",children:"this article"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"vastai",children:"Vast.ai"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://vast.ai/",children:"Vast.ai"})," is a global GPU marketplace where you can rent many different types of GPUs by the hour for ",(0,t.jsx)(i.a,{href:"https://vast.ai/pricing",children:"competitive pricing"}),". They provide on-demand and interruptible rentals depending on your need or use case; you can learn more about their rental types ",(0,t.jsx)(i.a,{href:"https://vast.ai/faq#rental-types",children:"here"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"what-can-you-do-with-icicle",children:"What can you do with ICICLE?"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle",children:"ICICLE"})," can be used in the same way you would use any other cryptography library. While developing and integrating ICICLE into many proof systems, we found some use case categories:"]}),"\n",(0,t.jsx)(i.h3,{id:"circuit-developers",children:"Circuit developers"}),"\n",(0,t.jsx)(i.p,{children:"If you are a circuit developer and are experiencing bottlenecks while running your circuits, an ICICLE integrated prover may be the solution."}),"\n",(0,t.jsxs)(i.p,{children:["ICICLE has been integrated into a number of popular ZK provers including ",(0,t.jsx)(i.a,{href:"https://github.com/Consensys/gnark",children:"Gnark prover"})," and ",(0,t.jsx)(i.a,{href:"https://github.com/zkonduit/halo2",children:"Halo2"}),". This means that you can enjoy GPU acceleration for your existing circuits immediately without writing a single line of code by simply switching on the GPU prover flag!"]}),"\n",(0,t.jsx)(i.h3,{id:"integrating-into-existing-zk-provers",children:"Integrating into existing ZK provers"}),"\n",(0,t.jsx)(i.p,{children:"From our collaborations we have learned that its possible to accelerate a specific part of your prover to solve for a specific bottleneck."}),"\n",(0,t.jsx)(i.p,{children:"ICICLE can be used to accelerate specific parts of your prover without completely rewriting your ZK prover."}),"\n",(0,t.jsx)(i.h3,{id:"developing-your-own-zk-provers",children:"Developing your own ZK provers"}),"\n",(0,t.jsx)(i.p,{children:"If your goal is to build a ZK prover from the ground up, ICICLE is an ideal tool for creating a highly optimized and scalable ZK prover. A key benefit of using GPUs with ICICLE is the ability to scale your ZK prover efficiently across multiple machines within a data center."}),"\n",(0,t.jsx)(i.h3,{id:"developing-proof-of-concepts",children:"Developing proof of concepts"}),"\n",(0,t.jsx)(i.p,{children:"ICICLE is also ideal for developing small prototypes. ICICLE has Golang and Rust bindings so you can easily develop a library implementing a specific primitive using ICICLE. An example would be develop a KZG commitment library using ICICLE."})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>s});var o=n(6540);const t={},r=o.createContext(t);function a(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);