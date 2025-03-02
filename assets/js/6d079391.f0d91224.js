"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8200],{37919:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"icicle/rust-bindings/ntt","title":"NTT","description":"Example","source":"@site/versioned_docs/version-2.8.0/icicle/rust-bindings/ntt.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/ntt","permalink":"/2.8.0/icicle/rust-bindings/ntt","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/rust-bindings/ntt.md","tags":[],"version":"2.8.0","lastUpdatedBy":"youyyytrok","lastUpdatedAt":1740918389000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"MSM pre computation","permalink":"/2.8.0/icicle/rust-bindings/msm-pre-computation"},"next":{"title":"EC-NTT","permalink":"/2.8.0/icicle/rust-bindings/ecntt"}}');var s=i(74848),r=i(28453);const o={},c="NTT",l={},d=[{value:"Example",id:"example",level:2},{value:"NTT API overview",id:"ntt-api-overview",level:2},{value:"NTT Config",id:"ntt-config",level:3},{value:"Fields",id:"fields",level:4},{value:"Usage",id:"usage",level:4},{value:"Modes",id:"modes",level:3},{value:"Initializing the NTT Domain",id:"initializing-the-ntt-domain",level:3},{value:"<code>initialize_domain</code>",id:"initialize_domain",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Releasing the domain",id:"releasing-the-domain",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ntt",children:"NTT"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::{ntt::{self, NTT}, traits::GenerateRandom};\nuse icicle_cuda_runtime::{device_context::DeviceContext, memory::HostOrDeviceSlice, stream::CudaStream};\n\nfn main() {\n    let size = 1 << 12; // Define the size of your input, e.g., 2^10\n\n    let icicle_omega = <Bn254Fr as FftField>::get_root_of_unity(\n        size.try_into()\n            .unwrap(),\n    )\n\n    // Generate random inputs\n    println!("Generating random inputs...");\n    let scalars = HostOrDeviceSlice::Host(ScalarCfg::generate_random(size));\n\n    // Allocate memory on CUDA device for NTT results\n    let mut ntt_results: HostOrDeviceSlice<\'_, ScalarField> = HostOrDeviceSlice::cuda_malloc(size).expect("Failed to allocate CUDA memory");\n\n    // Create a CUDA stream\n    let stream = CudaStream::create().expect("Failed to create CUDA stream");\n    let ctx = DeviceContext::default(); // Assuming default device context\n    ScalarCfg::initialize_domain(ScalarField::from_ark(icicle_omega), &ctx, true).unwrap();\n\n    // Configure NTT\n    let mut cfg = ntt::NTTConfig::default();\n    cfg.ctx.stream = &stream;\n    cfg.is_async = true; // Set to true for asynchronous execution\n\n    // Execute NTT on device\n    println!("Executing NTT on device...");\n    ntt::ntt(&scalars, ntt::NTTDir::kForward, &cfg, &mut ntt_results).expect("Failed to execute NTT");\n\n    // Synchronize CUDA stream to ensure completion\n    stream.synchronize().expect("Failed to synchronize CUDA stream");\n\n    // Optionally, move results to host for further processing or verification\n    println!("NTT execution complete.");\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ntt-api-overview",children:"NTT API overview"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub fn ntt<F>(\n    input: &HostOrDeviceSlice<F>,\n    dir: NTTDir,\n    cfg: &NTTConfig<F>,\n    output: &mut HostOrDeviceSlice<F>,\n) -> IcicleResult<()>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ntt:ntt"})," expects:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"input"})})," - buffer to read the inputs of the NTT from."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"dir"})})," - whether to compute forward or inverse NTT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cfg"})})," - config used to specify extra arguments of the NTT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"output"})})," - buffer to write the NTT outputs into. Must be of the same  size as input."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"input"})," and ",(0,s.jsx)(n.code,{children:"output"})," buffers can be on device or on host. Being on host means that they will be transferred to device during runtime."]}),"\n",(0,s.jsx)(n.h3,{id:"ntt-config",children:"NTT Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub struct NTTConfig<'a, S> {\n    pub ctx: DeviceContext<'a>,\n    pub coset_gen: S,\n    pub batch_size: i32,\n    pub columns_batch: bool,\n    pub ordering: Ordering,\n    are_inputs_on_device: bool,    \n    are_outputs_on_device: bool,\n    pub is_async: bool,\n    pub ntt_algorithm: NttAlgorithm,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NTTConfig"})," struct is a configuration object used to specify parameters for an NTT instance."]}),"\n",(0,s.jsx)(n.h4,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ctx: DeviceContext<'a>"})}),": Specifies the device context, including the device ID and the stream ID."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"coset_gen: S"})}),": Defines the coset generator used for coset (i)NTTs. By default, this is set to ",(0,s.jsx)(n.code,{children:"S::one()"}),", indicating that no coset is being used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"batch_size: i32"})}),": Determines the number of NTTs to compute in a single batch. The default value is 1, meaning that operations are performed on individual inputs without batching. Batch processing can significantly improve performance by leveraging parallelism in GPU computations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"columns_batch"})}),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ordering: Ordering"})}),": Controls the ordering of inputs and outputs for the NTT operation. This field can be used to specify decimation strategies (in time or in frequency) and the type of butterfly algorithm (Cooley-Tukey or Gentleman-Sande). The ordering is crucial for compatibility with various algorithmic approaches and can impact the efficiency of the NTT."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"are_inputs_on_device: bool"})}),": Indicates whether the input data has been preloaded on the device memory. If ",(0,s.jsx)(n.code,{children:"false"})," inputs will be copied from host to device."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"are_outputs_on_device: bool"})}),": Indicates whether the output data is preloaded in device memory. If ",(0,s.jsx)(n.code,{children:"false"})," outputs will be copied from host to device. If the inputs and outputs are the same pointer NTT will be computed in place."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"is_async: bool"})}),": Specifies whether the NTT operation should be performed asynchronously. When set to ",(0,s.jsx)(n.code,{children:"true"}),", the NTT function will not block the CPU, allowing other operations to proceed concurrently. Asynchronous execution requires careful synchronization to ensure data integrity and correctness."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ntt_algorithm: NttAlgorithm"})}),": Can be one of ",(0,s.jsx)(n.code,{children:"Auto"}),", ",(0,s.jsx)(n.code,{children:"Radix2"}),", ",(0,s.jsx)(n.code,{children:"MixedRadix"}),".\n",(0,s.jsx)(n.code,{children:"Auto"})," will select ",(0,s.jsx)(n.code,{children:"Radix 2"})," or ",(0,s.jsx)(n.code,{children:"Mixed Radix"})," algorithm based on heuristics.\n",(0,s.jsx)(n.code,{children:"Radix2"})," and ",(0,s.jsx)(n.code,{children:"MixedRadix"})," will force the use of an algorithm regardless of the input size or other considerations. You should use one of these options when you know for sure that you want to"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Example initialization with default settings:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let default_config = NTTConfig::default();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Customizing the configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let custom_config = NTTConfig {\n    ctx: custom_device_context,\n    coset_gen: my_coset_generator,\n    batch_size: 10,\n    columns_batch: false,\n    ordering: Ordering::kRN,\n    are_inputs_on_device: true,\n    are_outputs_on_device: true,\n    is_async: false,\n    ntt_algorithm: NttAlgorithm::MixedRadix,\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"modes",children:"Modes"}),"\n",(0,s.jsxs)(n.p,{children:["NTT supports two different modes ",(0,s.jsx)(n.code,{children:"Batch NTT"})," and ",(0,s.jsx)(n.code,{children:"Single NTT"})]}),"\n",(0,s.jsxs)(n.p,{children:["You may toggle between single and batch NTT by simply configure ",(0,s.jsx)(n.code,{children:"batch_size"})," to be larger then 1 in your ",(0,s.jsx)(n.code,{children:"NTTConfig"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let mut cfg = ntt::get_default_ntt_config::<ScalarField>();\ncfg.batch_size = 10 // your ntt using this config will run in batch mode.\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"batch_size=1"})," would keep our NTT in single NTT mode."]}),"\n",(0,s.jsxs)(n.p,{children:["Deciding weather to use ",(0,s.jsx)(n.code,{children:"batch NTT"})," vs ",(0,s.jsx)(n.code,{children:"single NTT"})," is highly dependent on your application and use case."]}),"\n",(0,s.jsx)(n.h3,{id:"initializing-the-ntt-domain",children:"Initializing the NTT Domain"}),"\n",(0,s.jsx)(n.p,{children:"Before performing NTT operations, its necessary to initialize the NTT domain, It only needs to be called once per GPU since the twiddles are cached."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"ScalarCfg::initialize_domain(ScalarField::from_ark(icicle_omega), &ctx, true).unwrap();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"initialize_domain",children:(0,s.jsx)(n.code,{children:"initialize_domain"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub fn initialize_domain<F>(primitive_root: F, ctx: &DeviceContext, fast_twiddles: bool) -> IcicleResult<()>\nwhere\n    F: FieldImpl,\n    <F as FieldImpl>::Config: NTT<F>;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"primitive_root"})}),": The primitive root of unity, chosen based on the maximum NTT size required for the computations. It must be of an order that is a power of two. This root is used to generate twiddle factors that are essential for the NTT operations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ctx"})}),": A reference to a ",(0,s.jsx)(n.code,{children:"DeviceContext"})," specifying which device and stream the computation should be executed on."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"IcicleResult<()>"})}),": Will return an error if the operation fails."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"primitive_root"})}),": The primitive root of unity, chosen based on the maximum NTT size required for the computations. It must be of an order that is a power of two. This root is used to generate twiddle factors that are essential for the NTT operations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ctx"})}),": A reference to a ",(0,s.jsx)(n.code,{children:"DeviceContext"})," specifying which device and stream the computation should be executed on."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"IcicleResult<()>"})}),": Will return an error if the operation fails."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"releasing-the-domain",children:"Releasing the domain"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"release_domain"})," function is responsible for releasing the resources associated with a specific domain in the CUDA device context."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub fn release_domain<F>(ctx: &DeviceContext) -> IcicleResult<()>\nwhere\n    F: FieldImpl,\n    <F as FieldImpl>::Config: NTT<F>\n"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ctx"})}),": A reference to a ",(0,s.jsx)(n.code,{children:"DeviceContext"})," specifying which device and stream the computation should be executed on."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["The function returns an ",(0,s.jsx)(n.code,{children:"IcicleResult<()>"}),", which represents the result of the operation. If the operation is successful, the function returns ",(0,s.jsx)(n.code,{children:"Ok(())"}),", otherwise it returns an error."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);