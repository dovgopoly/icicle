"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8397],{441:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"icicle/multi-gpu","title":"Multi GPU with ICICLE","description":"If you are looking for the Multi GPU API documentation refer here for Rust and here for Golang.","source":"@site/versioned_docs/version-2.8.0/icicle/multi-gpu.md","sourceDirName":"icicle","slug":"/icicle/multi-gpu","permalink":"/2.8.0/icicle/multi-gpu","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/multi-gpu.md","tags":[],"version":"2.8.0","lastUpdatedBy":"Jeremy Felder","lastUpdatedAt":1732434916000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Polynomials","permalink":"/2.8.0/icicle/polynomials/overview"},"next":{"title":"Golang bindings","permalink":"/2.8.0/icicle/golang-bindings"}}');var o=t(4848),r=t(8453);const s={},a="Multi GPU with ICICLE",l={},c=[{value:"Approaches to Multi GPU programming",id:"approaches-to-multi-gpu-programming",level:2},{value:"GPU Server approach",id:"gpu-server-approach",level:3},{value:"Inter GPU approach",id:"inter-gpu-approach",level:3},{value:"Writing ICICLE Code for Multi GPUs",id:"writing-icicle-code-for-multi-gpus",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"ZKContainer support for multi GPUs",id:"zkcontainer-support-for-multi-gpus",level:2}];function u(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"multi-gpu-with-icicle",children:"Multi GPU with ICICLE"})}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsxs)(i.p,{children:["If you are looking for the Multi GPU API documentation refer ",(0,o.jsx)(i.a,{href:"/2.8.0/icicle/rust-bindings/multi-gpu",children:"here"})," for Rust and ",(0,o.jsx)(i.a,{href:"/2.8.0/icicle/golang-bindings/multi-gpu",children:"here"})," for Golang."]})}),"\n",(0,o.jsx)(i.p,{children:"One common challenge with Zero-Knowledge computation is managing the large input sizes. It's not uncommon to encounter circuits surpassing 2^25 constraints, pushing the capabilities of even advanced GPUs to their limits. To effectively scale and process such large circuits, leveraging multiple GPUs in tandem becomes a necessity."}),"\n",(0,o.jsx)(i.p,{children:"Multi-GPU programming involves developing software to operate across multiple GPU devices. Lets first explore different approaches to Multi-GPU programming then we will cover how ICICLE allows you to easily develop youR ZK computations to run across many GPUs."}),"\n",(0,o.jsx)(i.h2,{id:"approaches-to-multi-gpu-programming",children:"Approaches to Multi GPU programming"}),"\n",(0,o.jsxs)(i.p,{children:["There are many ",(0,o.jsx)(i.a,{href:"https://github.com/NVIDIA/multi-gpu-programming-models",children:"different strategies"})," available for implementing multi GPU, however, it can be split into two categories."]}),"\n",(0,o.jsx)(i.h3,{id:"gpu-server-approach",children:"GPU Server approach"}),"\n",(0,o.jsx)(i.p,{children:"This approach usually involves a single or multiple CPUs opening threads to read / write from multiple GPUs. You can think about it as a scaled up HOST - Device model."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Multi-GPU Server Approach",src:t(3441).A+"",width:"600",height:"552"})}),"\n",(0,o.jsx)(i.p,{children:"This approach won't let us tackle larger computation sizes but it will allow us to compute multiple computations which we wouldn't be able to load onto a single GPU."}),"\n",(0,o.jsx)(i.p,{children:"For example let's say that you had to compute two MSMs of size 2^26 on a 16GB VRAM GPU you would normally have to perform them asynchronously. However, if you double the number of GPUs in your system you can now run them in parallel."}),"\n",(0,o.jsx)(i.h3,{id:"inter-gpu-approach",children:"Inter GPU approach"}),"\n",(0,o.jsxs)(i.p,{children:["This approach involves a more sophisticated approach to multi GPU computation. Using technologies such as ",(0,o.jsx)(i.a,{href:"https://www.nvidia.com/en-us/on-demand/session/gtcspring21-cwes1084/",children:"GPUDirect, NCCL, NVSHMEM"})," and NVLink it's possible to combine multiple GPUs and split a computation among different devices."]}),"\n",(0,o.jsx)(i.p,{children:"This approach requires redesigning the algorithm at the software level to be compatible with splitting amongst devices. In some cases, to lower latency to a minimum, special inter GPU connections would be installed on a server to allow direct communication between multiple GPUs."}),"\n",(0,o.jsx)(i.h2,{id:"writing-icicle-code-for-multi-gpus",children:"Writing ICICLE Code for Multi GPUs"}),"\n",(0,o.jsx)(i.p,{children:"The approach we have taken for the moment is a GPU Server approach; we assume you have a machine with multiple GPUs and you wish to run some computation on each GPU."}),"\n",(0,o.jsx)(i.p,{children:"To dive deeper and learn about the API check out the docs for our different ICICLE API"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/2.8.0/icicle/rust-bindings/multi-gpu",children:"Rust Multi GPU APIs"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/2.8.0/icicle/golang-bindings/multi-gpu",children:"Golang Multi GPU APIs"})}),"\n",(0,o.jsx)(i.li,{children:"C++ Multi GPU APIs"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Never hardcode device IDs, if you want your software to take advantage of all GPUs on a machine use methods such as ",(0,o.jsx)(i.code,{children:"get_device_count"})," to support arbitrary number of GPUs."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Launch one CPU thread per GPU. To avoid ",(0,o.jsx)(i.a,{href:"https://developer.nvidia.com/blog/cuda-pro-tip-always-set-current-device-avoid-multithreading-bugs/",children:"nasty errors"})," and hard to read code we suggest that for every GPU you create a dedicated thread. Within a CPU thread you should be able to launch as many tasks as you wish for a GPU as long as they all run on the same GPU id. This will make your code way more manageable, easy to read and performant."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"zkcontainer-support-for-multi-gpus",children:"ZKContainer support for multi GPUs"}),"\n",(0,o.jsx)(i.p,{children:"Multi GPU support should work with ZK-Containers by simply defining which devices the docker container should interact with:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sh",children:"docker run -it --gpus '\"device=0,2\"' zk-container-image\n"})}),"\n",(0,o.jsx)(i.p,{children:"If you wish to expose all GPUs"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sh",children:"docker run --gpus all zk-container-image\n"})})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},3441:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/image-18256543a80eeb7c54cd4680b5ee5ddb.png"},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(6540);const o={},r=n.createContext(o);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);