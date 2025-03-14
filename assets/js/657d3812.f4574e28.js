"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[1853],{25041:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"icicle/primitives/vec_ops","title":"Vector Operations API","description":"Overview","source":"@site/versioned_docs/version-3.0.0/icicle/primitives/vec_ops.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/vec_ops","permalink":"/3.0.0/icicle/primitives/vec_ops","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/primitives/vec_ops.md","tags":[],"version":"3.0.0","lastUpdatedBy":"release-bot","lastUpdatedAt":1741983600000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"NTT / ECNTT","permalink":"/3.0.0/icicle/primitives/ntt"},"next":{"title":"Polynomials","permalink":"/3.0.0/icicle/polynomials/overview"}}');var o=c(74848),s=c(28453);const t={},r="Vector Operations API",l={},a=[{value:"Overview",id:"overview",level:2},{value:"VecOpsConfig",id:"vecopsconfig",level:3},{value:"Fields",id:"fields",level:4},{value:"Default Configuration",id:"default-configuration",level:4},{value:"Element-wise Operations",id:"element-wise-operations",level:3},{value:"<code>vector_add</code>",id:"vector_add",level:4},{value:"<code>vector_sub</code>",id:"vector_sub",level:4},{value:"<code>vector_mul</code>",id:"vector_mul",level:4},{value:"<code>vector_div</code>",id:"vector_div",level:4},{value:"<code>vector_accumulate</code>",id:"vector_accumulate",level:4},{value:"<code>convert_montogomery</code>",id:"convert_montogomery",level:4},{value:"Scalar-Vector Operations",id:"scalar-vector-operations",level:3},{value:"<code>scalar_add_vec / scalar_sub_vec</code>",id:"scalar_add_vec--scalar_sub_vec",level:4},{value:"<code>scalar_sub_vec</code>",id:"scalar_sub_vec",level:4},{value:"<code>scalar_mul_vec</code>",id:"scalar_mul_vec",level:4},{value:"Matrix Operations",id:"matrix-operations",level:3},{value:"<code>matrix_transpose</code>",id:"matrix_transpose",level:4},{value:"Miscellaneous Operations",id:"miscellaneous-operations",level:3},{value:"<code>bit_reverse</code>",id:"bit_reverse",level:4},{value:"<code>slice</code>",id:"slice",level:4},{value:"<code>highest_non_zero_idx</code>",id:"highest_non_zero_idx",level:4},{value:"<code>polynomial_eval</code>",id:"polynomial_eval",level:4},{value:"<code>polynomial_division</code>",id:"polynomial_division",level:4},{value:"Rust and Go bindings",id:"rust-and-go-bindings",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"vector-operations-api",children:"Vector Operations API"})}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"The Vector Operations API in Icicle provides a set of functions for performing element-wise and scalar-vector operations on vectors, matrix operations, and miscellaneous operations like bit-reversal and slicing. These operations can be performed on the host or device, with support for asynchronous execution."}),"\n",(0,o.jsx)(n.h3,{id:"vecopsconfig",children:"VecOpsConfig"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VecOpsConfig"})," struct is a configuration object used to specify parameters for vector operations."]}),"\n",(0,o.jsx)(n.h4,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"stream: icicleStreamHandle"})}),": Specifies the CUDA stream for asynchronous execution. If ",(0,o.jsx)(n.code,{children:"nullptr"}),", the default stream is used."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"is_a_on_device: bool"})}),": Indicates whether the first input vector (",(0,o.jsx)(n.code,{children:"a"}),") is already on the device. If ",(0,o.jsx)(n.code,{children:"false"}),", the vector will be copied from the host to the device."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"is_b_on_device: bool"})}),": Indicates whether the second input vector (",(0,o.jsx)(n.code,{children:"b"}),") is already on the device. If ",(0,o.jsx)(n.code,{children:"false"}),", the vector will be copied from the host to the device. This field is optional."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"is_result_on_device: bool"})}),": Indicates whether the result should be stored on the device. If ",(0,o.jsx)(n.code,{children:"false"}),", the result will be transferred back to the host."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"is_async: bool"})}),": Specifies whether the vector operation should be performed asynchronously. When ",(0,o.jsx)(n.code,{children:"true"}),", the operation will not block the CPU, allowing other operations to proceed concurrently. Asynchronous execution requires careful synchronization to ensure data integrity."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"ext: ConfigExtension*"})}),": Backend-specific extensions."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"static VecOpsConfig default_vec_ops_config() {\n    VecOpsConfig config = {\n      nullptr, // stream\n      false,   // is_a_on_device\n      false,   // is_b_on_device\n      false,   // is_result_on_device\n      false,   // is_async\n    };\n    return config;\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"element-wise-operations",children:"Element-wise Operations"}),"\n",(0,o.jsxs)(n.p,{children:["These functions perform element-wise operations on two input vectors ",(0,o.jsx)(n.code,{children:"a"})," and ",(0,o.jsx)(n.code,{children:"b"}),", producing an output vector."]}),"\n",(0,o.jsx)(n.h4,{id:"vector_add",children:(0,o.jsx)(n.code,{children:"vector_add"})}),"\n",(0,o.jsx)(n.p,{children:"Adds two vectors element-wise."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError vector_add(const T* vec_a, const T* vec_b, uint64_t size, const VecOpsConfig& config, T* output);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"vector_sub",children:(0,o.jsx)(n.code,{children:"vector_sub"})}),"\n",(0,o.jsxs)(n.p,{children:["Subtracts vector ",(0,o.jsx)(n.code,{children:"b"})," from vector ",(0,o.jsx)(n.code,{children:"a"})," element-wise."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError vector_sub(const T* vec_a, const T* vec_b, uint64_t size, const VecOpsConfig& config, T* output);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"vector_mul",children:(0,o.jsx)(n.code,{children:"vector_mul"})}),"\n",(0,o.jsx)(n.p,{children:"Multiplies two vectors element-wise."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError vector_mul(const T* vec_a, const T* vec_b, uint64_t size, const VecOpsConfig& config, T* output);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"vector_div",children:(0,o.jsx)(n.code,{children:"vector_div"})}),"\n",(0,o.jsxs)(n.p,{children:["Divides vector ",(0,o.jsx)(n.code,{children:"a"})," by vector ",(0,o.jsx)(n.code,{children:"b"})," element-wise."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError vector_div(const T* vec_a, const T* vec_b, uint64_t size, const VecOpsConfig& config, T* output);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"vector_accumulate",children:(0,o.jsx)(n.code,{children:"vector_accumulate"})}),"\n",(0,o.jsx)(n.p,{children:"Adds vector b to a, inplace."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError vector_accumulate(T* vec_a, const T* vec_b, uint64_t size, const VecOpsConfig& config);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"convert_montogomery",children:(0,o.jsx)(n.code,{children:"convert_montogomery"})}),"\n",(0,o.jsx)(n.p,{children:"Convert a vector of field elements to/from montgomery form."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError convert_montgomery(const T* input, uint64_t size, bool is_into, const VecOpsConfig& config, T* output);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"scalar-vector-operations",children:"Scalar-Vector Operations"}),"\n",(0,o.jsx)(n.p,{children:"These functions apply a scalar operation to each element of a vector."}),"\n",(0,o.jsx)(n.h4,{id:"scalar_add_vec--scalar_sub_vec",children:(0,o.jsx)(n.code,{children:"scalar_add_vec / scalar_sub_vec"})}),"\n",(0,o.jsx)(n.p,{children:"Adds a scalar to each element of a vector."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError scalar_add_vec(const T* scalar_a, const T* vec_b, uint64_t size, const VecOpsConfig& config, T* output);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"scalar_sub_vec",children:(0,o.jsx)(n.code,{children:"scalar_sub_vec"})}),"\n",(0,o.jsxs)(n.p,{children:["Subtract each element of a vector from a scalar ",(0,o.jsx)(n.code,{children:"scalar-vec"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError scalar_sub_vec(const T* scalar_a, const T* vec_b, uint64_t size, const VecOpsConfig& config, T* output);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"scalar_mul_vec",children:(0,o.jsx)(n.code,{children:"scalar_mul_vec"})}),"\n",(0,o.jsx)(n.p,{children:"Multiplies each element of a vector by a scalar."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError scalar_mul_vec(const T* scalar_a, const T* vec_b, uint64_t size, const VecOpsConfig& config, T* output);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"matrix-operations",children:"Matrix Operations"}),"\n",(0,o.jsx)(n.p,{children:"These functions perform operations on matrices."}),"\n",(0,o.jsx)(n.h4,{id:"matrix_transpose",children:(0,o.jsx)(n.code,{children:"matrix_transpose"})}),"\n",(0,o.jsx)(n.p,{children:"Transposes a matrix."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError matrix_transpose(const T* mat_in, uint32_t nof_rows, uint32_t nof_cols, const VecOpsConfig& config, T* mat_out);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"miscellaneous-operations",children:"Miscellaneous Operations"}),"\n",(0,o.jsx)(n.h4,{id:"bit_reverse",children:(0,o.jsx)(n.code,{children:"bit_reverse"})}),"\n",(0,o.jsx)(n.p,{children:"Reorders the vector elements based on a bit-reversal pattern."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError bit_reverse(const T* vec_in, uint64_t size, const VecOpsConfig& config, T* vec_out);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"slice",children:(0,o.jsx)(n.code,{children:"slice"})}),"\n",(0,o.jsx)(n.p,{children:"Extracts a slice from a vector."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError slice(const T* vec_in, uint64_t offset, uint64_t stride, uint64_t size, const VecOpsConfig& config, T* vec_out);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"highest_non_zero_idx",children:(0,o.jsx)(n.code,{children:"highest_non_zero_idx"})}),"\n",(0,o.jsx)(n.p,{children:"Finds the highest non-zero index in a vector."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError highest_non_zero_idx(const T* vec_in, uint64_t size, const VecOpsConfig& config, int64_t* out_idx);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"polynomial_eval",children:(0,o.jsx)(n.code,{children:"polynomial_eval"})}),"\n",(0,o.jsx)(n.p,{children:"Evaluates a polynomial at given domain points."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError polynomial_eval(const T* coeffs, uint64_t coeffs_size, const T* domain, uint64_t domain_size, const VecOpsConfig& config, T* evals /*OUT*/);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"polynomial_division",children:(0,o.jsx)(n.code,{children:"polynomial_division"})}),"\n",(0,o.jsx)(n.p,{children:"Divides two polynomials."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\neIcicleError polynomial_division(const T* numerator, int64_t numerator_deg, const T* denumerator, int64_t denumerator_deg, const VecOpsConfig& config, T* q_out /*OUT*/, uint64_t q_size, T* r_out /*OUT*/, uint64_t r_size);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"rust-and-go-bindings",children:"Rust and Go bindings"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/3.0.0/icicle/golang-bindings/vec-ops",children:"Golang"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/3.0.0/icicle/rust-bindings/vec-ops",children:"Rust"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>t,x:()=>r});var i=c(96540);const o={},s=i.createContext(o);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);