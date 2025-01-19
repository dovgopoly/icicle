"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[9621],{5444:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"icicle/overview","title":"ICICLE Overview","description":"What is ICICLE?","source":"@site/versioned_docs/version-3.0.0/icicle/overview.md","sourceDirName":"icicle","slug":"/icicle/overview","permalink":"/3.0.0/icicle/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/overview.md","tags":[],"version":"3.0.0","lastUpdatedBy":"Koren-Brand","lastUpdatedAt":1737296485000,"frontMatter":{"slug":"/icicle/overview","title":"ICICLE Overview"},"sidebar":"GettingStartedSidebar","previous":{"title":"Introduction","permalink":"/3.0.0/"},"next":{"title":"Getting started Guide","permalink":"/3.0.0/icicle/getting_started"}}');var n=t(4848),o=t(8453);const s={slug:"/icicle/overview",title:"ICICLE Overview"},a="ICICLE Overview",l={},c=[{value:"What is ICICLE?",id:"what-is-icicle",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Evolution from v2 to v3",id:"evolution-from-v2-to-v3",level:2},{value:"Who Uses ICICLE?",id:"who-uses-icicle",level:2},{value:"Don&#39;t Have Access to a GPU?",id:"dont-have-access-to-a-gpu",level:2},{value:"Grants",id:"grants",level:3},{value:"Google Colab",id:"google-colab",level:3},{value:"Vast.ai",id:"vastai",level:3},{value:"What Can You Do with ICICLE?",id:"what-can-you-do-with-icicle",level:2},{value:"Circuit Developers",id:"circuit-developers",level:3},{value:"Integrating into Existing ZK Provers",id:"integrating-into-existing-zk-provers",level:3},{value:"Developing Your Own ZK Provers",id:"developing-your-own-zk-provers",level:3},{value:"Developing Proof of Concepts",id:"developing-proof-of-concepts",level:3},{value:"Get Started with ICICLE",id:"get-started-with-icicle",level:2}];function d(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"icicle-overview",children:"ICICLE Overview"})}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"https://github.com/user-attachments/assets/794c306a-b5fc-425c-8b1b-60b87aa12200",alt:"Untitled design (29)",width:"500"})}),"\n",(0,n.jsx)(i.h2,{id:"what-is-icicle",children:"What is ICICLE?"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle",children:"ICICLE"})," is a cryptography library designed to accelerate zero-knowledge proofs (ZKPs) using multiple compute backends, including GPUs, CPUs, and potentially other platforms. ICICLE's key strength lies in its ability to implement blazing-fast cryptographic primitives, enabling developers to significantly reduce proving times with minimal effort."]}),"\n",(0,n.jsx)(i.h2,{id:"key-features",children:"Key Features"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Acceleration of \u201czk\u201d Math:"})," ICICLE provides optimized implementations for cryptographic primitives crucial to zero-knowledge proofs, such as elliptic curve operations, MSM, NTT, Poseidon hash, and more."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Set of Libraries:"})," ICICLE includes a comprehensive set of libraries supporting various fields, curves, and other cryptographic needs."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Cross-Language Support:"})," Available bindings for C++, Rust, Go, and potentially Python make ICICLE accessible across different development environments."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Backend Agnosticism:"})," Develop on CPU and deploy on various backends, including GPUs, specialized hardware, and other emerging platforms, depending on your project's needs."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Extensibility:"})," Designed for easy integration and extension, allowing you to build and deploy custom backends and cryptographic primitives."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"evolution-from-v2-to-v3",children:"Evolution from v2 to v3"}),"\n",(0,n.jsx)(i.p,{children:"Originally, ICICLE was focused solely on GPU acceleration. With the release of v3, ICICLE now supports multiple backends, making it more versatile and adaptable to different hardware environments. Whether you're leveraging the power of GPUs or exploring other compute platforms, ICICLE v3 is designed to fit your needs."}),"\n",(0,n.jsx)(i.h2,{id:"who-uses-icicle",children:"Who Uses ICICLE?"}),"\n",(0,n.jsxs)(i.p,{children:["ICICLE has been successfully integrated and used by leading ZK companies such as ",(0,n.jsx)(i.a,{href:"https://github.com/celer-network",children:"Celer Network"}),", ",(0,n.jsx)(i.a,{href:"https://github.com/Consensys/gnark",children:"Gnark"}),", and others to enhance their ZK proving pipelines."]}),"\n",(0,n.jsx)(i.h2,{id:"dont-have-access-to-a-gpu",children:"Don't Have Access to a GPU?"}),"\n",(0,n.jsx)(i.p,{children:"We understand that not all developers have access to GPUs, but this shouldn't limit your ability to develop with ICICLE. Here are some ways to gain access to GPUs."}),"\n",(0,n.jsx)(i.h3,{id:"grants",children:"Grants"}),"\n",(0,n.jsxs)(i.p,{children:["At Ingonyama, we are committed to accelerating progress in ZK and cryptography. If you're an engineer, developer, or academic researcher, we invite you to check out ",(0,n.jsx)(i.a,{href:"https://www.ingonyama.com/blog/icicle-for-researchers-grants-challenges",children:"our grant program"}),". We can provide access to GPUs and even fund your research."]}),"\n",(0,n.jsx)(i.h3,{id:"google-colab",children:"Google Colab"}),"\n",(0,n.jsx)(i.p,{children:"Google Colab is a great platform to start experimenting with ICICLE instantly. It offers free access to NVIDIA T4 GPUs, which are more than sufficient for experimenting and prototyping with ICICLE."}),"\n",(0,n.jsxs)(i.p,{children:["For a detailed guide on setting up Google Colab with ICICLE, refer to ",(0,n.jsx)(i.a,{href:"/3.0.0/icicle/colab-instructions",children:"this article"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"vastai",children:"Vast.ai"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://vast.ai/",children:"Vast.ai"})," offers a global GPU marketplace where you can rent different types of GPUs by the hour at competitive prices. Whether you need on-demand or interruptible rentals, Vast.ai provides flexibility for various use cases. Learn more about their rental options ",(0,n.jsx)(i.a,{href:"https://vast.ai/faq#rental-types",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"what-can-you-do-with-icicle",children:"What Can You Do with ICICLE?"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle",children:"ICICLE"})," can be used similarly to any other cryptography library. Through various integrations, ICICLE has proven effective in multiple use cases:"]}),"\n",(0,n.jsx)(i.h3,{id:"circuit-developers",children:"Circuit Developers"}),"\n",(0,n.jsxs)(i.p,{children:["If you're a circuit developer facing bottlenecks, integrating ICICLE into your prover may solve performance issues. ICICLE is integrated into popular ZK provers like ",(0,n.jsx)(i.a,{href:"https://github.com/Consensys/gnark",children:"Gnark"})," and ",(0,n.jsx)(i.a,{href:"https://github.com/zkonduit/halo2",children:"Halo2"}),", enabling immediate GPU acceleration without additional code changes."]}),"\n",(0,n.jsx)(i.h3,{id:"integrating-into-existing-zk-provers",children:"Integrating into Existing ZK Provers"}),"\n",(0,n.jsx)(i.p,{children:"ICICLE allows for selective acceleration of specific parts of your ZK prover, helping to address specific bottlenecks without requiring a complete rewrite of your prover."}),"\n",(0,n.jsx)(i.h3,{id:"developing-your-own-zk-provers",children:"Developing Your Own ZK Provers"}),"\n",(0,n.jsx)(i.p,{children:"For those building ZK provers from the ground up, ICICLE is an ideal tool for creating optimized and scalable provers. The ability to scale across multiple machines within a data center is a key advantage when using ICICLE with GPUs."}),"\n",(0,n.jsx)(i.h3,{id:"developing-proof-of-concepts",children:"Developing Proof of Concepts"}),"\n",(0,n.jsx)(i.p,{children:"ICICLE is also well-suited for prototyping and developing small-scale projects. With bindings for Golang and Rust, you can easily create a library implementing specific cryptographic primitives, such as a KZG commitment library, using ICICLE."}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"get-started-with-icicle",children:"Get Started with ICICLE"}),"\n",(0,n.jsxs)(i.p,{children:["Explore the full capabilities of ICICLE by diving into the ",(0,n.jsx)(i.a,{href:"/3.0.0/icicle/arch_overview",children:"Architecture"}),", ",(0,n.jsx)(i.a,{href:"/3.0.0/icicle/getting_started",children:"Getting Started Guide"})," and the ",(0,n.jsx)(i.a,{href:"/3.0.0/icicle/programmers_guide/general",children:"Programmer's Guide"})," to learn how to integrate, deploy, and extend ICICLE across different backends."]}),"\n",(0,n.jsxs)(i.p,{children:["If you have any questions or need support, feel free to reach out on ",(0,n.jsx)(i.a,{href:"https://discord.gg/6vYrE7waPj",children:"Discord"}),", ",(0,n.jsx)(i.a,{href:"https://github.com/ingonyama-zk",children:"GitHub"})," or ",(0,n.jsx)(i.a,{href:"mailto:support@ingonyama.com",children:"via support email"}),". We're here to help you accelerate your ZK development with ICICLE."]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var r=t(6540);const n={},o=r.createContext(n);function s(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);