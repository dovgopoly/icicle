"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[470],{737:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"icicle/migrate_from_v2","title":"Migration from ICICLE v2 to v3","description":"ICICLE v3 introduces a unified interface for high-performance computing across various devices, extending the functionality that was previously limited to GPUs in Icicle V2. This guide will assist you in transitioning from ICICLE v2 to v3 by highlighting the key changes and providing examples for both C++ and Rust.","source":"@site/versioned_docs/version-3.1.0/icicle/migrate_from_v2.md","sourceDirName":"icicle","slug":"/icicle/migrate_from_v2","permalink":"/icicle/migrate_from_v2","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/migrate_from_v2.md","tags":[],"version":"3.1.0","lastUpdatedBy":"yshekel","lastUpdatedAt":1733471854000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Merkle-Tree","permalink":"/icicle/rust-bindings/merkle"},"next":{"title":"Google Colab Instructions","permalink":"/icicle/colab-instructions"}}');var c=n(4848),t=n(8453);const s={},a="Migration from ICICLE v2 to v3",l={},d=[{value:"Key Conceptual Changes",id:"key-conceptual-changes",level:2},{value:"Migration Guide for C++",id:"migration-guide-for-c",level:2},{value:"Replacing CUDA APIs with Icicle APIs",id:"replacing-cuda-apis-with-icicle-apis",level:3},{value:"Example Migration",id:"example-migration",level:3},{value:"Migration Guide for Rust",id:"migration-guide-for-rust",level:2},{value:"Replacing <code>icicle_cuda_runtime</code> with <code>icicle_runtime</code>",id:"replacing-icicle_cuda_runtime-with-icicle_runtime",level:3},{value:"Example Migration",id:"example-migration-1",level:3},{value:"Other Considerations",id:"other-considerations",level:3}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"migration-from-icicle-v2-to-v3",children:"Migration from ICICLE v2 to v3"})}),"\n",(0,c.jsx)(i.p,{children:"ICICLE v3 introduces a unified interface for high-performance computing across various devices, extending the functionality that was previously limited to GPUs in Icicle V2. This guide will assist you in transitioning from ICICLE v2 to v3 by highlighting the key changes and providing examples for both C++ and Rust."}),"\n",(0,c.jsx)(i.h2,{id:"key-conceptual-changes",children:"Key Conceptual Changes"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"Device Independence"}),": n V2, Icicle was primarily designed for GPU computation, directly utilizing CUDA APIs. In V3, Icicle has evolved to support a broader range of computational devices, including CPUs, GPUs, and other accelerators. As a result, CUDA APIs have been replaced with device-agnostic Icicle APIs."]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"Unified API"}),": The APIs are now standardized across all devices, ensuring consistent usage and reducing the complexity of managing different hardware backends."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(i.admonition,{type:"warning",children:(0,c.jsxs)(i.p,{children:["When migrating from v2 to v3, it is important to note that, by default, your code now executes on the CPU. This contrasts with V2, which was exclusively a CUDA library. For details on installing and using CUDA GPUs, refer to the ",(0,c.jsx)(i.a,{href:"/icicle/install_cuda_backend",children:"CUDA backend guide"}),"."]})}),"\n",(0,c.jsx)(i.h2,{id:"migration-guide-for-c",children:"Migration Guide for C++"}),"\n",(0,c.jsx)(i.h3,{id:"replacing-cuda-apis-with-icicle-apis",children:"Replacing CUDA APIs with Icicle APIs"}),"\n",(0,c.jsx)(i.p,{children:"In ICICLE v3, CUDA-specific APIs have been replaced with Icicle APIs that are designed to be backend-agnostic. This allows your code to run on different devices without requiring modifications."}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"Device Management"}),": Use ICICLE's device management APIs instead of CUDA-specific functions. For example, instead of ",(0,c.jsx)(i.code,{children:"cudaSetDevice()"}),", you would use ",(0,c.jsx)(i.code,{children:"icicle_set_device()"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"Memory Management"}),": Replace CUDA memory management functions such as ",(0,c.jsx)(i.code,{children:"cudaMalloc()"})," and ",(0,c.jsx)(i.code,{children:"cudaFree()"})," with ICICLE's ",(0,c.jsx)(i.code,{children:"icicle_malloc()"})," and ",(0,c.jsx)(i.code,{children:"icicle_free()"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"Stream Management"}),": Replace ",(0,c.jsx)(i.code,{children:"cudaStream_t"})," with ",(0,c.jsx)(i.code,{children:"icicleStreamHandle"})," and use ICICLE's stream management functions."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["For a detailed overview and examples, please refer to the ",(0,c.jsx)(i.a,{href:"/icicle/programmers_guide/cpp",children:"Icicle C++ Programmer's Guide"})," for full API details."]}),"\n",(0,c.jsx)(i.h3,{id:"example-migration",children:"Example Migration"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.strong,{children:"V2 (CUDA-specific):"})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"cudaStream_t stream;\ncudaStreamCreate(&stream);\nvoid* device_ptr;\ncudaMalloc(&device_ptr, 1024);\n// Perform operations using CUDA APIs\ncudaStreamDestroy(stream);\ncudaFree(device_ptr);\n"})}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.strong,{children:"V3 (Device-agnostic):"})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"icicleStreamHandle stream;\nicicle_create_stream(&stream);\nvoid* device_ptr;\nicicle_malloc(&device_ptr, 1024);\n// Perform operations using Icicle APIs\nicicle_destroy_stream(stream);\nicicle_free(device_ptr);\n"})}),"\n",(0,c.jsx)(i.h2,{id:"migration-guide-for-rust",children:"Migration Guide for Rust"}),"\n",(0,c.jsxs)(i.h3,{id:"replacing-icicle_cuda_runtime-with-icicle_runtime",children:["Replacing ",(0,c.jsx)(i.code,{children:"icicle_cuda_runtime"})," with ",(0,c.jsx)(i.code,{children:"icicle_runtime"})]}),"\n",(0,c.jsxs)(i.p,{children:["In ICICLE v3, the ",(0,c.jsx)(i.code,{children:"icicle_cuda_runtime"})," crate is replaced with the ",(0,c.jsx)(i.code,{children:"icicle_runtime"})," crate. This change reflects the broader support for different devices beyond just CUDA-enabled GPUs."]}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"Device Management"}),": Use ",(0,c.jsx)(i.code,{children:"icicle_runtime"}),"'s device management functions instead of those in ",(0,c.jsx)(i.code,{children:"icicle_cuda_runtime"}),". The ",(0,c.jsx)(i.code,{children:"Device"})," struct remains central, but it's now part of a more generalized runtime."]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"Memory Abstraction"}),": The ",(0,c.jsx)(i.code,{children:"DeviceOrHostSlice"})," trait remains for memory abstraction, allowing seamless data handling between host and device."]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"Stream Management"}),": Replace ",(0,c.jsx)(i.code,{children:"CudaStream"})," with ",(0,c.jsx)(i.code,{children:"IcicleStream"}),", which now supports broader device types."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"example-migration-1",children:"Example Migration"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsxs)(i.strong,{children:["V2 (",(0,c.jsx)(i.code,{children:"icicle_cuda_runtime"}),"):"]})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-rust",children:"use icicle_cuda_runtime::{CudaStream, DeviceVec, HostSlice};\n\nlet mut stream = CudaStream::create().unwrap();\nlet mut device_memory = DeviceVec::cuda_malloc(1024).unwrap();\n// Perform operations using CudaStream and related APIs\nstream.synchronize().unwrap();\n"})}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsxs)(i.strong,{children:["V3 (",(0,c.jsx)(i.code,{children:"icicle_runtime"}),"):"]})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-rust",children:"use icicle_runtime::{IcicleStream, DeviceVec, HostSlice};\n\nlet mut stream = IcicleStream::create().unwrap();\nlet mut device_memory = DeviceVec::device_malloc(1024).unwrap();\n// Perform operations using IcicleStream and related APIs\nstream.synchronize().unwrap();\n"})}),"\n",(0,c.jsx)(i.h3,{id:"other-considerations",children:"Other Considerations"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"API Names"}),": While most API names remain consistent, they are now part of a more generalized runtime that can support multiple devices. Ensure that you update the crate imports and function calls accordingly."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"Backend Loading"}),": Ensure that you are loading the appropriate backend using the ",(0,c.jsx)(i.code,{children:"load_backend_from_env_or_default()"})," function, which is essential for setting up the runtime environment."]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["For further details and examples, refer to the ",(0,c.jsx)(i.a,{href:"/icicle/programmers_guide/general",children:"Programmer's Guide"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var r=n(6540);const c={},t=r.createContext(c);function s(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);