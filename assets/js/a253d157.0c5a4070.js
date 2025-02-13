"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[4099],{89228:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"icicle/arch_overview","title":"Architecture Overview","description":"ICICLE v3 is designed with flexibility and extensibility in mind, offering a robust framework that supports multiple compute backends and accommodates various cryptographic needs. This section provides an overview of ICICLE\'s architecture, highlighting its open and closed components, multi-device support, and extensibility.","source":"@site/versioned_docs/version-3.5.0/icicle/arch_overview.md","sourceDirName":"icicle","slug":"/icicle/arch_overview","permalink":"/icicle/arch_overview","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.5.0/icicle/arch_overview.md","tags":[],"version":"3.5.0","lastUpdatedBy":"release-bot","lastUpdatedAt":1739462520000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Go","permalink":"/icicle/programmers_guide/go"},"next":{"title":"CUDA Backend","permalink":"/icicle/install_cuda_backend"}}');var r=i(74848),s=i(28453);const o={},a="Architecture Overview",c={},d=[{value:"Frontend and CPU Backend",id:"frontend-and-cpu-backend",level:3},{value:"CUDA Backend",id:"cuda-backend",level:2},{value:"Multi-Device Support",id:"multi-device-support",level:2},{value:"Build Your Own Backend",id:"build-your-own-backend",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"architecture-overview",children:"Architecture Overview"})}),"\n",(0,r.jsx)(n.p,{children:"ICICLE v3 is designed with flexibility and extensibility in mind, offering a robust framework that supports multiple compute backends and accommodates various cryptographic needs. This section provides an overview of ICICLE's architecture, highlighting its open and closed components, multi-device support, and extensibility."}),"\n",(0,r.jsx)(n.h3,{id:"frontend-and-cpu-backend",children:"Frontend and CPU Backend"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Frontend (FE):"})," The ICICLE frontend is open-source and designed to provide a unified API across different programming languages, including C++, Rust, and Go. This frontend abstracts the complexity of working with different backends, allowing developers to write backend-agnostic code that can be deployed across various platforms."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CPU Backend:"})," ICICLE includes an open-source CPU backend that allows for development and testing on standard hardware. This backend is ideal for prototyping and for environments where specialized hardware is not available."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cuda-backend",children:"CUDA Backend"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CUDA Backend:"})," ICICLE also includes a high-performance CUDA backend that is closed-source. This backend is optimized for NVIDIA GPUs and provides significant acceleration for cryptographic operations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Installation and Licensing:"})," The CUDA backend needs to be downloaded and installed. Refer to the ",(0,r.jsx)(n.a,{href:"/icicle/install_cuda_backend",children:"installation guide"})," for detailed instructions."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"multi-device-support",children:"Multi-Device Support"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Scalability:"})," ICICLE supports multi-device configurations, enabling the distribution of workloads across multiple GPUs or other hardware accelerators. This feature allows for scaling ZK proofs and other cryptographic operations across larger data centers or high-performance computing environments."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"build-your-own-backend",children:"Build Your Own Backend"}),"\n",(0,r.jsx)(n.p,{children:"ICICLE is designed to be extensible, allowing developers to integrate new backends or customize existing ones to suit their specific needs. The architecture supports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Custom Backends:"})," Developers can create their own backends to leverage different hardware or optimize for specific use cases. The process of building and integrating a custom backend is documented in the ",(0,r.jsx)(n.a,{href:"/icicle/build_your_own_backend",children:"Build Your Own Backend"})," section."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pluggable Components:"})," ICICLE's architecture allows for easy integration of additional cryptographic primitives or enhancements, ensuring that the framework can evolve with the latest advancements in cryptography and hardware acceleration."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);