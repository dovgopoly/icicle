"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[5191],{85333:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"icicle/rust-bindings/vec-ops","title":"Vector Operations API","description":"Our vector operations API includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory.","source":"@site/versioned_docs/version-3.0.0/icicle/rust-bindings/vec-ops.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/vec-ops","permalink":"/3.0.0/icicle/rust-bindings/vec-ops","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/rust-bindings/vec-ops.md","tags":[],"version":"3.0.0","lastUpdatedBy":"release-bot","lastUpdatedAt":1741983600000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"ECNTT","permalink":"/3.0.0/icicle/rust-bindings/ecntt"},"next":{"title":"Polynomials","permalink":"/3.0.0/icicle/rust-bindings/polynomials"}}');var o=n(74848),t=n(28453);const c={},r="Vector Operations API",l={},d=[{value:"Vector Operations Configuration",id:"vector-operations-configuration",level:2},{value:"<code>VecOpsConfig</code>",id:"vecopsconfig",level:3},{value:"Fields",id:"fields",level:4},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Vector Operations",id:"vector-operations",level:2},{value:"Methods",id:"methods",level:3}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"vector-operations-api",children:"Vector Operations API"})}),"\n",(0,o.jsx)(i.p,{children:"Our vector operations API includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory."}),"\n",(0,o.jsx)(i.h2,{id:"vector-operations-configuration",children:"Vector Operations Configuration"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"VecOpsConfig"})," struct encapsulates the settings for vector operations, including device context and operation modes."]}),"\n",(0,o.jsx)(i.h3,{id:"vecopsconfig",children:(0,o.jsx)(i.code,{children:"VecOpsConfig"})}),"\n",(0,o.jsx)(i.p,{children:"Defines configuration parameters for vector operations."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-rust",children:"pub struct VecOpsConfig {\n    pub stream_handle: IcicleStreamHandle,\n    pub is_a_on_device: bool,\n    pub is_b_on_device: bool,\n    pub is_result_on_device: bool,\n    pub is_async: bool,\n    pub ext: ConfigExtension,\n}\n"})}),"\n",(0,o.jsx)(i.h4,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"stream_handle: IcicleStreamHandle"})}),": Specifies the stream (queue) to use for async execution"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"is_a_on_device: bool"})}),": Indicates whether the input data a has been preloaded on the device memory. If ",(0,o.jsx)(i.code,{children:"false"})," inputs will be copied from host to device."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"is_b_on_device: bool"})}),": Indicates whether the input b data has been preloaded on the device memory. If ",(0,o.jsx)(i.code,{children:"false"})," inputs will be copied from host to device."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"is_result_on_device: bool"})}),": Indicates whether the output data is preloaded in device memory. If ",(0,o.jsx)(i.code,{children:"false"})," outputs will be copied from host to device."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"is_async: bool"})}),": Specifies whether the NTT operation should be performed asynchronously."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"ext: ConfigExtension"})}),": extended configuration for backend."]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"VecOpsConfig"})," can be initialized with default settings tailored for a specific device:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-rust",children:"let cfg = VecOpsConfig::default();\n"})}),"\n",(0,o.jsx)(i.h2,{id:"vector-operations",children:"Vector Operations"}),"\n",(0,o.jsxs)(i.p,{children:["Vector operations are implemented through the ",(0,o.jsx)(i.code,{children:"VecOps"})," trait, providing methods for addition, subtraction, and multiplication of vectors."]}),"\n",(0,o.jsx)(i.h3,{id:"methods",children:"Methods"}),"\n",(0,o.jsxs)(i.p,{children:["All operations are element-wise operations, and the results placed into the ",(0,o.jsx)(i.code,{children:"result"})," param. These operations are not in place."]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"add"})}),": Computes the element-wise sum of two vectors."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"accumulate"})}),": Sum input b to a inplace."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"sub"})}),": Computes the element-wise difference between two vectors."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"mul"})}),": Performs element-wise multiplication of two vectors."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"transpose"})}),": Performs matrix transpose."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"bit_reverse/bit_reverse_inplace"})}),": Reverse order of elements based on bit-reverse."]}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-rust",children:"pub fn add_scalars<F>(\n    a: &(impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    result: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn accumulate_scalars<F>(\n    a: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn sub_scalars<F>(\n    a: &(impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    result: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn mul_scalars<F>(\n    a: &(impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    result: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn transpose_matrix<F>(\n    input: &(impl HostOrDeviceSlice<F> + ?Sized),\n    nof_rows: u32,\n    nof_cols: u32,\n    output: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn bit_reverse<F>(\n    input: &(impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n    output: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n) -> Result<(), eIcicleError>;\n\npub fn bit_reverse_inplace<F>(\n    input: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n"})})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>r});var s=n(96540);const o={},t=s.createContext(o);function c(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);