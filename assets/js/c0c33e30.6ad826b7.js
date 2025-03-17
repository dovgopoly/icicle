"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[1633],{14058:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"icicle/install_cuda_backend","title":"CUDA Backend","description":"Overview","source":"@site/versioned_docs/version-3.1.0/icicle/install_cuda_backend.md","sourceDirName":"icicle","slug":"/icicle/install_cuda_backend","permalink":"/3.1.0/icicle/install_cuda_backend","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/install_cuda_backend.md","tags":[],"version":"3.1.0","lastUpdatedBy":"Otsar","lastUpdatedAt":1742209585000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Architecture Overview","permalink":"/3.1.0/icicle/arch_overview"},"next":{"title":"Multi-Device Support","permalink":"/3.1.0/icicle/multi-device"}}');var c=i(74848),t=i(28453);const r={},a="CUDA Backend",o={},l=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Licensing",id:"licensing",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"cuda-backend",children:"CUDA Backend"})}),"\n",(0,c.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,c.jsx)(n.p,{children:"The CUDA backend in ICICLE v3 is a high-performance, closed-source component designed to accelerate cryptographic computations using NVIDIA GPUs. This backend includes specialized libraries optimized for various cryptographic fields and curves, providing significant speedups for operations such as MSM, NTT, and elliptic curve operations."}),"\n",(0,c.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,c.jsxs)(n.p,{children:["The CUDA backend is a closed-source component that requires a license. ",(0,c.jsx)(n.a,{href:"./getting_started#installing-and-using-icicle",children:"To install the CUDA backend, see here"}),"."]}),"\n",(0,c.jsx)(n.h3,{id:"licensing",children:"Licensing"}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["Currently, the CUDA backend is free to use via Ingonyama\u2019s backend license server. By default, the CUDA backend will attempt to access this server. For more details, please contact ",(0,c.jsx)(n.a,{href:"mailto:support@ingonyama.com",children:"support@ingonyama.com"}),"."]})}),"\n",(0,c.jsx)(n.p,{children:"The CUDA backend requires a valid license to function. There are two types of CUDA backend licenses:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Floating license"}),": In this mode, you host a license server, provided as a binary. This license supports a limited number of concurrent GPUs (N), which can be distributed across your machines as needed. N is decremented by 1 for each GPU using ICICLE per process. Once the process terminates (or crashes), the licenses are released."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Node locked license"}),":  In this mode, the license is tied to a specific machine. The CUDA backend will accept the license only if it is used on the licensed machine."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"To specify the license server address or file path::"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"export ICICLE_LICENSE=port@ip            # For license server\nexport ICICLE_LICENSE=/path/to/license   # For node-locked license\n"})}),"\n",(0,c.jsxs)(n.p,{children:["For further assist , contact our support team for assistance ",(0,c.jsx)(n.a,{href:"mailto:support@ingonyama.com",children:"support@ingonyama.com"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const c={},t=s.createContext(c);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);