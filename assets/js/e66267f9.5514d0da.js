"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[740],{6170:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"icicle/programmers_guide/general","title":"Icicle Programmer\'s Guide","description":"Compute APIs","source":"@site/versioned_docs/version-3.4.0/icicle/programmers_guide/general.md","sourceDirName":"icicle/programmers_guide","slug":"/icicle/programmers_guide/general","permalink":"/icicle/programmers_guide/general","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.4.0/icicle/programmers_guide/general.md","tags":[],"version":"3.4.0","lastUpdatedBy":"idanfr-ingo","lastUpdatedAt":1739365935000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Build ICICLE from source","permalink":"/icicle/build_from_source"},"next":{"title":"C++","permalink":"/icicle/programmers_guide/cpp"}}');var o=i(4848),s=i(8453);const r={},a="Icicle Programmer's Guide",c={},l=[{value:"Compute APIs",id:"compute-apis",level:2},{value:"Common Structure of Compute APIs",id:"common-structure-of-compute-apis",level:3},{value:"Example (C++)",id:"example-c",level:3},{value:"Config struct extension",id:"config-struct-extension",level:3},{value:"Device Abstraction",id:"device-abstraction",level:2},{value:"Device Management",id:"device-management",level:3},{value:"Streams",id:"streams",level:2},{value:"Memory Management",id:"memory-management",level:3},{value:"Data Transfer",id:"data-transfer",level:3},{value:"Synchronization",id:"synchronization",level:3},{value:"Additional Information",id:"additional-information",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"icicle-programmers-guide",children:"Icicle Programmer's Guide"})}),"\n",(0,o.jsx)(n.h2,{id:"compute-apis",children:"Compute APIs"}),"\n",(0,o.jsx)(n.p,{children:"ICICLE offers a variety of compute APIs, including Number Theoretic Transforms (NTT), Multi Scalar Multiplication (MSM), vector operations, Elliptic Curve NTT (ECNTT), polynomials, and more. These APIs follow a consistent structure, making it straightforward to apply the same usage patterns across different operations."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/icicle/primitives/overview",children:"Check out all details about compute APIs here"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"common-structure-of-compute-apis",children:"Common Structure of Compute APIs"}),"\n",(0,o.jsx)(n.p,{children:"Each compute API in Icicle typically involves the following components:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Inputs and Outputs"}),": The data to be processed and the resulting output are passed to the API functions. These can reside either on the host (CPU) or on a device (GPU)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Parameters"}),": Parameters such as the size of data to be processed are provided to control the computation."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Configuration Struct"}),": A configuration struct is used to specify additional options for the computation. This struct has default values but can be customized as needed."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The configuration struct allows users to modify settings such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Specifying whether inputs and outputs are on the host or device."}),"\n",(0,o.jsx)(n.li,{children:"Adjusting the data layout for specific optimizations."}),"\n",(0,o.jsx)(n.li,{children:"Setting batching parameters (batch_size and columns_batch) to perform operations on multiple data sets simultaneously."}),"\n",(0,o.jsx)(n.li,{children:"Passing custom options to the backend implementation through an extension mechanism, such as setting the number of CPU cores to use."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-c",children:"Example (C++)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'#include "icicle/vec_ops.h"\n\n// Create config struct for vector add\nVecOpsConfig config = default_vec_ops_config();\n// optionally modify the config struct here\nconfig.batch_size = 4;          // Process 4 vector operations in a batch\nconfig.columns_batch = true;    // Batched vectors are stored as columns\n\n// Call the API\neIcicleError err = vector_add(vec_a, vec_b, size, config, vec_res);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Where ",(0,o.jsx)(n.code,{children:"VecOpsConfig"})," is defined in ",(0,o.jsx)(n.code,{children:"icicle/vec_ops.h"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"struct VecOpsConfig {\n    icicleStreamHandle stream; /**< Stream for asynchronous execution. */\n    bool is_a_on_device;       /**< True if `a` is on the device, false if it is not. Default value: false. */\n    bool is_b_on_device;       /**< True if `b` is on the device, false if it is not. Default value: false. OPTIONAL. */\n    bool is_result_on_device;  /**< If true, the output is preserved on the device, otherwise on the host. Default value: false. */\n    bool is_async;             /**< Whether to run the vector operations asynchronously. */\n    int batch_size;            /**< Number of vector operations to process in a batch. Default value: 1. */\n    bool columns_batch;        /**< True if batched vectors are stored as columns; false if stored contiguously. Default value: false. */\n    ConfigExtension* ext = nullptr; /**< Backend-specific extension. */\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"This pattern is consistent across most Icicle APIs, in C++/Rust/Go, providing flexibility while maintaining a familiar structure. For NTT, MSM, and other operations, include the corresponding header and call the template APIs."}),"\n",(0,o.jsx)(n.h3,{id:"config-struct-extension",children:"Config struct extension"}),"\n",(0,o.jsx)(n.p,{children:"In special cases, where an application wants to specify backend specific options, this is achieved with a config-extension struct.\nFor example the CPU backend has an option regarding how many threads to use for a vector addition looks as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'#include "icicle/vec_ops.h"\n\n// Create config struct for vector add\nVecOpsConfig config = default_vec_ops_config();\nConfigExtension ext;\nconfig.ext = &ext;\next.set("n_threads", 8); // tell the CPU backend to use 8 threads\n// Call the API\neIcicleError err = vector_add(vec_a, vec_b, size, config, vec_res);\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This is not device-agnostic behavior, meaning such code is aware of the backend.\nHaving said that, it is not an error to pass options to a backend that is not aware of them."})}),"\n",(0,o.jsx)(n.h2,{id:"device-abstraction",children:"Device Abstraction"}),"\n",(0,o.jsx)(n.p,{children:"ICICLE provides a device abstraction layer that allows you to interact with different compute devices such as CPUs and GPUs seamlessly. The device abstraction ensures that your code can work across multiple hardware platforms without modification."}),"\n",(0,o.jsx)(n.h3,{id:"device-management",children:"Device Management"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Loading Backends"}),": Backends are loaded dynamically based on the environment configuration or a specified path."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Setting Active Device"}),": The active device for a thread can be set, allowing for targeted computation on a specific device."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Setting Default Device"}),": The default device for any thread without an active device can be set, removing the need to specify an alternative device on each thread. This is especially useful when running on a backend that is not the built-in CPU backend which is the default device to start."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"streams",children:"Streams"}),"\n",(0,o.jsx)(n.p,{children:"Streams in ICICLE allow for asynchronous execution and memory operations, enabling parallelism and non-blocking execution. Streams are associated with specific devices, and you can create, destroy, and synchronize streams to manage your workflow."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["For compute APIs, streams go into the ",(0,o.jsx)(n.code,{children:"config.stream"})," field along with the ",(0,o.jsx)(n.code,{children:"is_async=true"})," config flag."]})}),"\n",(0,o.jsx)(n.h3,{id:"memory-management",children:"Memory Management"}),"\n",(0,o.jsx)(n.p,{children:"Icicle provides functions for allocating, freeing, and managing memory across devices. Memory operations can be performed synchronously or asynchronously, depending on the use case."}),"\n",(0,o.jsx)(n.h3,{id:"data-transfer",children:"Data Transfer"}),"\n",(0,o.jsx)(n.p,{children:"Data transfer between the host and devices, or between different devices, is handled through a set of APIs that ensure efficient and error-checked operations. Asynchronous operations are supported to maximize performance."}),"\n",(0,o.jsx)(n.h3,{id:"synchronization",children:"Synchronization"}),"\n",(0,o.jsx)(n.p,{children:"Synchronization ensures that all previous operations on a stream or device are completed. This is crucial when coordinating between multiple operations that depend on one another."}),"\n",(0,o.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Error Handling"}),": Icicle uses a specific error enumeration (",(0,o.jsx)(n.code,{children:"eIcicleError"}),") to handle and return error states across its APIs."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Device Properties"}),": You can query various properties of devices to tailor operations according to the hardware capabilities."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);