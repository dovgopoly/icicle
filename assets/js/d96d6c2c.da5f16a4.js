"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[2724],{8229:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"icicle/multi-device","title":"Multi-Device with ICICLE","description":"If you are looking for the Multi-Device API documentation refer here for Rust and here for Golang.","source":"@site/versioned_docs/version-3.0.0/icicle/multi-device.md","sourceDirName":"icicle","slug":"/icicle/multi-device","permalink":"/3.0.0/icicle/multi-device","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/multi-device.md","tags":[],"version":"3.0.0","lastUpdatedBy":"yshekel","lastUpdatedAt":1736956357000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"CUDA Backend","permalink":"/3.0.0/icicle/install_cuda_backend"},"next":{"title":"Build Your Own Backend","permalink":"/3.0.0/icicle/build_your_own_backend"}}');var c=t(4848),r=t(8453);const a={},o="Multi-Device with ICICLE",s={},l=[{value:"Approaches to Multi-Device Programming",id:"approaches-to-multi-device-programming",level:2},{value:"Device Server Approach",id:"device-server-approach",level:3},{value:"Inter-Device Approach",id:"inter-device-approach",level:3},{value:"Writing ICICLE Code for Multi-Device Setups",id:"writing-icicle-code-for-multi-device-setups",level:2},{value:"C++",id:"c",level:3},{value:"Rust",id:"rust",level:3},{value:"Go (TODO)",id:"go-todo",level:3},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"multi-device-with-icicle",children:"Multi-Device with ICICLE"})}),"\n",(0,c.jsx)(i.admonition,{type:"info",children:(0,c.jsxs)(i.p,{children:["If you are looking for the Multi-Device API documentation refer ",(0,c.jsx)(i.a,{href:"/3.0.0/icicle/rust-bindings/multi-gpu",children:"here"})," for Rust and ",(0,c.jsx)(i.a,{href:"/3.0.0/icicle/golang-bindings/multi-gpu",children:"here"})," for Golang."]})}),"\n",(0,c.jsx)(i.p,{children:"One common challenge with Zero-Knowledge (ZK) computation is managing large input sizes. It's not uncommon to encounter circuits surpassing 2^25 constraints, which can push even the most advanced compute devices to their limits. To effectively scale and process such large circuits, leveraging multiple devices becomes a necessity."}),"\n",(0,c.jsx)(i.p,{children:"Multi-Device programming involves developing software to operate across multiple GPUs, CPUs, or other specialized hardware devices. Let's first explore different approaches to Multi-Device programming, then we will cover how ICICLE allows you to easily develop your ZK computations to run across many devices."}),"\n",(0,c.jsx)(i.h2,{id:"approaches-to-multi-device-programming",children:"Approaches to Multi-Device Programming"}),"\n",(0,c.jsxs)(i.p,{children:["There are many ",(0,c.jsx)(i.a,{href:"https://github.com/NVIDIA/multi-gpu-programming-models",children:"different strategies"})," available for implementing multi-device systems, but they can generally be split into two categories:"]}),"\n",(0,c.jsx)(i.h3,{id:"device-server-approach",children:"Device Server Approach"}),"\n",(0,c.jsx)(i.p,{children:"This approach typically involves a single or multiple CPUs managing threads that read from and write to multiple devices, such as GPUs, CPUs, or accelerators. You can think of it as a scaled-up HOST-Device model."}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.img,{alt:"Multi-Device Server Approach",src:t(3441).A+"",width:"600",height:"552"})}),"\n",(0,c.jsx)(i.p,{children:"This approach doesn't necessarily allow for tackling larger computation sizes, but it does enable the simultaneous computation of tasks that wouldn't fit on a single device."}),"\n",(0,c.jsx)(i.p,{children:"For example, if you needed to compute two MSMs of size 2^26 on a GPU with 16GB of VRAM, you would normally have to perform these tasks asynchronously. However, by doubling the number of GPUs or other devices in your system, you can now run these computations in parallel."}),"\n",(0,c.jsx)(i.h3,{id:"inter-device-approach",children:"Inter-Device Approach"}),"\n",(0,c.jsxs)(i.p,{children:["This more sophisticated approach involves leveraging technologies such as ",(0,c.jsx)(i.a,{href:"https://www.nvidia.com/en-us/on-demand/session/gtcspring21-cwes1084/",children:"GPUDirect, NCCL, NVSHMEM"}),", NVLink, or other interconnect technologies to combine multiple devices and split a computation across different hardware."]}),"\n",(0,c.jsx)(i.p,{children:"This approach requires redesigning the algorithm at the software level to be compatible with splitting tasks among devices. In some cases, to minimize latency, special inter-device connections can be installed on a server to allow direct communication between multiple devices."}),"\n",(0,c.jsx)(i.h2,{id:"writing-icicle-code-for-multi-device-setups",children:"Writing ICICLE Code for Multi-Device Setups"}),"\n",(0,c.jsx)(i.p,{children:"Currently, ICICLE adopts a Device Server approach, where we assume you have a machine with multiple devices (GPUs, CPUs, etc.) and wish to run computations on each device."}),"\n",(0,c.jsx)(i.p,{children:"Each thread needs to set a device. Following API calls (including memory management and compute APIs) will execute on that device, for this thread."}),"\n",(0,c.jsx)(i.h3,{id:"c",children:"C++"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:'// Set the device to CPU\nDevice device = "CPU"; \nicicle_set_device(device);\n'})}),"\n",(0,c.jsx)(i.h3,{id:"rust",children:"Rust"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-rust",children:'// Set the device to the first CUDA GPU (GPU-0)\nlet device = icicle_runtime::Device::new("CUDA", 0 /* =device_id*/);\nicicle_runtime::set_device(&device).unwrap();\n'})}),"\n",(0,c.jsx)(i.h3,{id:"go-todo",children:"Go (TODO)"}),"\n",(0,c.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"Avoid Hardcoding Device IDs:"})," If you want your software to take full advantage of all available devices on a machine, use methods such as ",(0,c.jsx)(i.code,{children:"icicle_get_device_count()"})," to support an arbitrary number of devices."]}),"\n"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:'/**\n * @brief Checks if the specified device is available.\n *\n * @param dev The device to check for availability.\n * @return eIcicleError Status of the device availability check.\n *         - `SUCCESS` if the device is available.\n *         - `INVALID_DEVICE` if the device is not available.\n */\nextern "C" eIcicleError icicle_is_device_available(const Device& dev);\n\n  /**\n * @brief Get number of available devices active device for thread\n *\n\n * @return eIcicleError Status of the device set\n */\nextern "C" eIcicleError icicle_get_device_count(int& device_count /*OUT*/);\n'})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"Launch One CPU Thread per Device:"})," To avoid ",(0,c.jsx)(i.a,{href:"https://developer.nvidia.com/blog/cuda-pro-tip-always-set-current-device-avoid-multithreading-bugs/",children:"common errors"})," and ensure code readability, we recommend creating a dedicated thread for each device. Within each CPU thread, you can launch as many tasks as you like for a device, as long as they all run on the same device ID. This will make your code more manageable, easier to read, and performant."]}),"\n"]}),"\n",(0,c.jsx)(i.hr,{})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},3441:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/image-18256543a80eeb7c54cd4680b5ee5ddb.png"},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var n=t(6540);const c={},r=n.createContext(c);function a(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);