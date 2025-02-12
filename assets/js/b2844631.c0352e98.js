"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[5993],{9869:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"icicle/rust-bindings/vec-ops","title":"Vector Operations API","description":"Our vector operations API which is part of icicle-cuda-runtime package, includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory.","source":"@site/versioned_docs/version-2.8.0/icicle/rust-bindings/vec-ops.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/vec-ops","permalink":"/2.8.0/icicle/rust-bindings/vec-ops","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/rust-bindings/vec-ops.md","tags":[],"version":"2.8.0","lastUpdatedBy":"idanfr-ingo","lastUpdatedAt":1739365935000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"EC-NTT","permalink":"/2.8.0/icicle/rust-bindings/ecntt"},"next":{"title":"Keccak Hash","permalink":"/2.8.0/icicle/rust-bindings/keccak"}}');var t=i(4848),c=i(8453);const r={},o="Vector Operations API",l={},a=[{value:"Examples",id:"examples",level:2},{value:"Addition of Scalars",id:"addition-of-scalars",level:3},{value:"Subtraction of Scalars",id:"subtraction-of-scalars",level:3},{value:"Multiplication of Scalars",id:"multiplication-of-scalars",level:3},{value:"Vector Operations Configuration",id:"vector-operations-configuration",level:2},{value:"<code>VecOpsConfig</code>",id:"vecopsconfig",level:3},{value:"Fields",id:"fields",level:4},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Vector Operations",id:"vector-operations",level:2},{value:"<code>VecOps</code> Trait",id:"vecops-trait",level:3},{value:"Methods",id:"methods",level:4},{value:"MatrixTranspose API Documentation",id:"matrixtranspose-api-documentation",level:2},{value:"Function",id:"function",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"vector-operations-api",children:"Vector Operations API"})}),"\n",(0,t.jsxs)(n.p,{children:["Our vector operations API which is part of ",(0,t.jsx)(n.code,{children:"icicle-cuda-runtime"})," package, includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"addition-of-scalars",children:"Addition of Scalars"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::vec_ops::{add_scalars};\n\nlet test_size = 1 << 18;\n\nlet a: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet b: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet mut result: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::zero(); test_size]);\n\nlet cfg = VecOpsConfig::default();\nadd_scalars(&a, &b, &mut result, &cfg).unwrap();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"subtraction-of-scalars",children:"Subtraction of Scalars"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::vec_ops::{sub_scalars};\n\nlet test_size = 1 << 18;\n\nlet a: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet b: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet mut result: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::zero(); test_size]);\n\nlet cfg = VecOpsConfig::default();\nsub_scalars(&a, &b, &mut result, &cfg).unwrap();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"multiplication-of-scalars",children:"Multiplication of Scalars"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::vec_ops::{mul_scalars};\n\nlet test_size = 1 << 18;\n\nlet a: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet ones: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::one(); test_size]);\nlet mut result: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::zero(); test_size]);\n\nlet cfg = VecOpsConfig::default();\nmul_scalars(&a, &ones, &mut result, &cfg).unwrap();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vector-operations-configuration",children:"Vector Operations Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VecOpsConfig"})," struct encapsulates the settings for vector operations, including device context and operation modes."]}),"\n",(0,t.jsx)(n.h3,{id:"vecopsconfig",children:(0,t.jsx)(n.code,{children:"VecOpsConfig"})}),"\n",(0,t.jsx)(n.p,{children:"Defines configuration parameters for vector operations."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub struct VecOpsConfig<'a> {\n    pub ctx: DeviceContext<'a>,\n    is_a_on_device: bool,\n    is_b_on_device: bool,\n    is_result_on_device: bool,\n    pub is_async: bool,\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ctx: DeviceContext<'a>"})}),": Specifies the device context for the operation, including the device ID and memory pool."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"is_a_on_device"})}),": Indicates if the first operand vector resides in device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"is_b_on_device"})}),": Indicates if the second operand vector resides in device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"is_result_on_device"})}),": Specifies if the result vector should be stored in device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"is_async"})}),": Enables asynchronous operation. If ",(0,t.jsx)(n.code,{children:"true"}),", operations are non-blocking; otherwise, they block the current thread."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"VecOpsConfig"})," can be initialized with default settings tailored for a specific device:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"let cfg = VecOpsConfig::default();\n"})}),"\n",(0,t.jsx)(n.p,{children:"These are the default settings."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"impl<'a> Default for VecOpsConfig<'a> {\n    fn default() -> Self {\n        Self::default_for_device(DEFAULT_DEVICE_ID)\n    }\n}\n\nimpl<'a> VecOpsConfig<'a> {\n    pub fn default_for_device(device_id: usize) -> Self {\n        VecOpsConfig {\n            ctx: DeviceContext::default_for_device(device_id),\n            is_a_on_device: false,\n            is_b_on_device: false,\n            is_result_on_device: false,\n            is_async: false,\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vector-operations",children:"Vector Operations"}),"\n",(0,t.jsxs)(n.p,{children:["Vector operations are implemented through the ",(0,t.jsx)(n.code,{children:"VecOps"})," trait, providing methods for addition, subtraction, and multiplication of vectors."]}),"\n",(0,t.jsxs)(n.h3,{id:"vecops-trait",children:[(0,t.jsx)(n.code,{children:"VecOps"})," Trait"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub trait VecOps<F> {\n    fn add(\n        a: &HostOrDeviceSlice<F>,\n        b: &HostOrDeviceSlice<F>,\n        result: &mut HostOrDeviceSlice<F>,\n        cfg: &VecOpsConfig,\n    ) -> IcicleResult<()>;\n\n    fn sub(\n        a: &HostOrDeviceSlice<F>,\n        b: &HostOrDeviceSlice<F>,\n        result: &mut HostOrDeviceSlice<F>,\n        cfg: &VecOpsConfig,\n    ) -> IcicleResult<()>;\n\n    fn mul(\n        a: &HostOrDeviceSlice<F>,\n        b: &HostOrDeviceSlice<F>,\n        result: &mut HostOrDeviceSlice<F>,\n        cfg: &VecOpsConfig,\n    ) -> IcicleResult<()>;\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.p,{children:["All operations are element-wise operations, and the results placed into the ",(0,t.jsx)(n.code,{children:"result"})," param. These operations are not in place."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"add"})}),": Computes the element-wise sum of two vectors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"sub"})}),": Computes the element-wise difference between two vectors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"mul"})}),": Performs element-wise multiplication of two vectors."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"matrixtranspose-api-documentation",children:"MatrixTranspose API Documentation"}),"\n",(0,t.jsxs)(n.p,{children:["This section describes the functionality of the ",(0,t.jsx)(n.code,{children:"TransposeMatrix"})," function used for matrix transposition."]}),"\n",(0,t.jsx)(n.p,{children:"The function takes a matrix represented as a 1D slice and transposes it, storing the result in another 1D slice."}),"\n",(0,t.jsx)(n.h3,{id:"function",children:"Function"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub fn transpose_matrix<F>(\n    input: &HostOrDeviceSlice<F>,\n    row_size: u32,\n    column_size: u32,\n    output: &mut HostOrDeviceSlice<F>,\n    ctx: &DeviceContext,\n    on_device: bool,\n    is_async: bool,\n) -> IcicleResult<()>\nwhere\n    F: FieldImpl,\n    <F as FieldImpl>::Config: VecOps<F>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"input"})}),": A slice representing the input matrix. The slice can be stored on either the host or the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"row_size"})}),": The number of rows in the input matrix."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"column_size"})}),": The number of columns in the input matrix."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"output"})}),": A mutable slice to store the transposed matrix. The slice can be stored on either the host or the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ctx"})}),": A reference to the ",(0,t.jsx)(n.code,{children:"DeviceContext"}),", which provides information about the device where the operation will be performed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"on_device"})}),": A boolean flag indicating whether the inputs and outputs are on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"is_async"})}),": A boolean flag indicating whether the operation should be performed asynchronously."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Ok(())"})," if the operation is successful, or an ",(0,t.jsx)(n.code,{children:"IcicleResult"})," error otherwise."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use icicle::HostOrDeviceSlice;\nuse icicle::DeviceContext;\nuse icicle::FieldImpl;\nuse icicle::VecOps;\n\nlet input: HostOrDeviceSlice<i32> = // ...;\nlet mut output: HostOrDeviceSlice<i32> = // ...;\nlet ctx: DeviceContext = // ...;\n\ntranspose_matrix(&input, 5, 4, &mut output, &ctx, true, false)\n    .expect("Failed to transpose matrix");\n'})}),"\n",(0,t.jsx)(n.p,{children:"The function takes a matrix represented as a 1D slice, transposes it, and stores the result in another 1D slice. The input and output slices can be stored on either the host or the device, and the operation can be performed synchronously or asynchronously."}),"\n",(0,t.jsxs)(n.p,{children:["The function is generic and can work with any type ",(0,t.jsx)(n.code,{children:"F"})," that implements the ",(0,t.jsx)(n.code,{children:"FieldImpl"})," trait. The ",(0,t.jsx)(n.code,{children:"<F as FieldImpl>::Config"})," type must also implement the ",(0,t.jsx)(n.code,{children:"VecOps<F>"})," trait, which provides the ",(0,t.jsx)(n.code,{children:"transpose"})," method used to perform the actual transposition."]}),"\n",(0,t.jsxs)(n.p,{children:["The function returns an ",(0,t.jsx)(n.code,{children:"IcicleResult<()>"}),", indicating whether the operation was successful or not."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(6540);const t={},c=s.createContext(t);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);