"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8359],{8534:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"icicle/rust-bindings/vec-ops","title":"Vector Operations API","description":"Our vector operations API includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory, as well as batched operations.","source":"@site/versioned_docs/version-3.1.0/icicle/rust-bindings/vec-ops.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/vec-ops","permalink":"/3.1.0/icicle/rust-bindings/vec-ops","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/rust-bindings/vec-ops.md","tags":[],"version":"3.1.0","lastUpdatedBy":"release-bot","lastUpdatedAt":1739462520000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"ECNTT","permalink":"/3.1.0/icicle/rust-bindings/ecntt"},"next":{"title":"Polynomials","permalink":"/3.1.0/icicle/rust-bindings/polynomials"}}');var o=i(74848),t=i(28453);const r={},c="Vector Operations API",l={},d=[{value:"Vector Operations Configuration",id:"vector-operations-configuration",level:2},{value:"<code>VecOpsConfig</code>",id:"vecopsconfig",level:3},{value:"Fields",id:"fields",level:4},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Vector Operations",id:"vector-operations",level:2},{value:"Methods",id:"methods",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"vector-operations-api",children:"Vector Operations API"})}),"\n",(0,o.jsx)(n.p,{children:"Our vector operations API includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory, as well as batched operations."}),"\n",(0,o.jsx)(n.h2,{id:"vector-operations-configuration",children:"Vector Operations Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VecOpsConfig"})," struct encapsulates the settings for vector operations, including device context, operation modes, and batching parameters."]}),"\n",(0,o.jsx)(n.h3,{id:"vecopsconfig",children:(0,o.jsx)(n.code,{children:"VecOpsConfig"})}),"\n",(0,o.jsx)(n.p,{children:"Defines configuration parameters for vector operations."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"pub struct VecOpsConfig {\n    pub stream_handle: IcicleStreamHandle,\n    pub is_a_on_device: bool,\n    pub is_b_on_device: bool,\n    pub is_result_on_device: bool,\n    pub is_async: bool,\n    pub batch_size: usize,\n    pub columns_batch: bool,\n    pub ext: ConfigExtension,\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"stream_handle: IcicleStreamHandle"})}),": Specifies the stream (queue) to use for async execution"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"is_a_on_device: bool"})}),": Indicates whether the input data a has been preloaded on the device memory. If ",(0,o.jsx)(n.code,{children:"false"})," inputs will be copied from host to device."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"is_b_on_device: bool"})}),": Indicates whether the input b data has been preloaded on the device memory. If ",(0,o.jsx)(n.code,{children:"false"})," inputs will be copied from host to device."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"is_result_on_device: bool"})}),": Indicates whether the output data is preloaded in device memory. If ",(0,o.jsx)(n.code,{children:"false"})," outputs will be copied from host to device."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"is_async: bool"})}),": Specifies whether the NTT operation should be performed asynchronously."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"batch_size: usize"})}),": Number of vector operations to process in a single batch. Each operation will be performed independently on each batch element."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"columns_batch: bool"})}),": true if the batched vectors are stored as columns in a 2D array (i.e., the vectors are strided in memory as columns of a matrix). If false, the batched vectors are stored contiguously in memory (e.g., as rows or in a flat array)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"ext: ConfigExtension"})}),": extended configuration for backend."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"VecOpsConfig"})," can be initialized with default settings tailored for a specific device:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"let cfg = VecOpsConfig::default();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"vector-operations",children:"Vector Operations"}),"\n",(0,o.jsxs)(n.p,{children:["Vector operations are implemented through the ",(0,o.jsx)(n.code,{children:"VecOps"})," trait, providing methods for addition, subtraction, and multiplication of vectors. These methods support both single and batched operations based on the batch_size and columns_batch configurations."]}),"\n",(0,o.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,o.jsxs)(n.p,{children:["All operations are element-wise operations, and the results placed into the ",(0,o.jsx)(n.code,{children:"result"})," param. These operations are not in place, except for accumulate."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"add"})}),": Computes the element-wise sum of two vectors."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"accumulate"})}),": Sum input b to a inplace."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"sub"})}),": Computes the element-wise difference between two vectors."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"mul"})}),": Performs element-wise multiplication of two vectors."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"transpose"})}),": Performs matrix transpose."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"bit_reverse/bit_reverse_inplace"})}),": Reverse order of elements based on bit-reverse."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"pub fn add_scalars<F>(\n    a: &(impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    result: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn accumulate_scalars<F>(\n    a: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn sub_scalars<F>(\n    a: &(impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    result: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn mul_scalars<F>(\n    a: &(impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    result: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn transpose_matrix<F>(\n    input: &(impl HostOrDeviceSlice<F> + ?Sized),\n    nof_rows: u32,\n    nof_cols: u32,\n    output: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn bit_reverse<F>(\n    input: &(impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n    output: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n) -> Result<(), eIcicleError>;\n\npub fn bit_reverse_inplace<F>(\n    input: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(96540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);