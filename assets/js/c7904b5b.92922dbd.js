"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[9313],{2323:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"icicle/rust-bindings/ntt","title":"NTT","description":"NTT API overview","source":"@site/versioned_docs/version-3.4.0/icicle/rust-bindings/ntt.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/ntt","permalink":"/icicle/rust-bindings/ntt","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.4.0/icicle/rust-bindings/ntt.md","tags":[],"version":"3.4.0","lastUpdatedBy":"Koren-Brand","lastUpdatedAt":1737296485000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"MSM","permalink":"/icicle/rust-bindings/msm"},"next":{"title":"ECNTT","permalink":"/icicle/rust-bindings/ecntt"}}');var s=i(4848),r=i(8453);const o={},c="NTT",l={},d=[{value:"NTT API overview",id:"ntt-api-overview",level:2},{value:"NTT Config",id:"ntt-config",level:3},{value:"Fields",id:"fields",level:4},{value:"Example",id:"example",level:4},{value:"NTT Domain",id:"ntt-domain",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ntt",children:"NTT"})}),"\n",(0,s.jsx)(n.h2,{id:"ntt-api-overview",children:"NTT API overview"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub fn ntt<T, F>(\n    input: &(impl HostOrDeviceSlice<T> + ?Sized),\n    dir: NTTDir,\n    cfg: &NTTConfig<F>,\n    output: &mut (impl HostOrDeviceSlice<T> + ?Sized),\n) -> Result<(), eIcicleError>;\n\npub fn ntt_inplace<T, F>(\n    inout: &mut (impl HostOrDeviceSlice<T> + ?Sized),\n    dir: NTTDir,\n    cfg: &NTTConfig<F>,\n) -> Result<(), eIcicleError>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"input"})})," - buffer to read the inputs of the NTT from."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"dir"})})," - whether to compute forward or inverse NTT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cfg"})})," - config used to specify extra arguments of the NTT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"output"})})," - buffer to write the NTT outputs into. Must be of the same  size as input."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"input"})," and ",(0,s.jsx)(n.code,{children:"output"})," buffers can be on device or on host. Being on host means that they will be transferred to device during runtime."]}),"\n",(0,s.jsx)(n.h3,{id:"ntt-config",children:"NTT Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub struct NTTConfig<S> {\n    pub stream_handle: IcicleStreamHandle,\n    pub coset_gen: S,\n    pub batch_size: i32,\n    pub columns_batch: bool,\n    pub ordering: Ordering,\n    pub are_inputs_on_device: bool,\n    pub are_outputs_on_device: bool,\n    pub is_async: bool,\n    pub ext: ConfigExtension,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NTTConfig"})," struct is a configuration object used to specify parameters for an NTT instance."]}),"\n",(0,s.jsx)(n.h4,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"stream_handle: IcicleStreamHandle"})}),": Specifies the stream (queue) to use for async execution"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"coset_gen: S"})}),": Defines the coset generator used for coset (i)NTTs. By default, this is set to ",(0,s.jsx)(n.code,{children:"S::one()"}),", indicating that no coset is being used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"batch_size: i32"})}),": Determines the number of NTTs to compute in a single batch. The default value is 1, meaning that operations are performed on individual inputs without batching. Batch processing can significantly improve performance by leveraging parallelism in GPU computations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"columns_batch"})}),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ordering: Ordering"})}),": Controls the ordering of inputs and outputs for the NTT operation. This field can be used to specify decimation strategies (in time or in frequency) and the type of butterfly algorithm (Cooley-Tukey or Gentleman-Sande). The ordering is crucial for compatibility with various algorithmic approaches and can impact the efficiency of the NTT."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"are_inputs_on_device: bool"})}),": Indicates whether the input data has been preloaded on the device memory. If ",(0,s.jsx)(n.code,{children:"false"})," inputs will be copied from host to device."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"are_outputs_on_device: bool"})}),": Indicates whether the output data is preloaded in device memory. If ",(0,s.jsx)(n.code,{children:"false"})," outputs will be copied from host to device. If the inputs and outputs are the same pointer NTT will be computed in place."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"is_async: bool"})}),": Specifies whether the NTT operation should be performed asynchronously. When set to ",(0,s.jsx)(n.code,{children:"true"}),", the NTT function will not block the CPU, allowing other operations to proceed concurrently. Asynchronous execution requires careful synchronization to ensure data integrity and correctness."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ext: ConfigExtension"})}),": extended configuration for backend."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'// Setting Bn254 points and scalars\nprintln!("Generating random inputs on host for bn254...");\nlet scalars = Bn254ScalarCfg::generate_random(size);\nlet mut ntt_results = DeviceVec::<Bn254ScalarField>::device_malloc(size).unwrap();\n\n// constructing NTT domain\ninitialize_domain(\n    ntt::get_root_of_unity::<Bn254ScalarField>(\n        size.try_into()\n            .unwrap(),\n    ),\n    &ntt::NTTInitDomainConfig::default(),\n)\n.unwrap();\n\n// Using default config\nlet cfg = ntt::NTTConfig::<Bn254ScalarField>::default();\n\n// Computing NTT\nntt::ntt(\n    HostSlice::from_slice(&scalars),\n    ntt::NTTDir::kForward,\n    &cfg,\n    &mut ntt_results[..],\n)\n.unwrap();\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ntt-domain",children:"NTT Domain"}),"\n",(0,s.jsxs)(n.p,{children:["Before performing NTT operations, it is mandatory to construct the domain as ",(0,s.jsx)(n.a,{href:"/icicle/primitives/ntt#ntt-domain",children:"explained here"}),".\nIn rust, we have the following functions to construct, destruct the domain and retrieve a root of unity from it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub trait NTTDomain<F: FieldImpl> {\n    pub fn initialize_domain<F>(primitive_root: F, config: &NTTInitDomainConfig) -> Result<(), eIcicleError>;\n    pub fn release_domain<F>() -> Result<(), eIcicleError>;\n    pub fn get_root_of_unity<F>(max_size: u64) -> F;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);