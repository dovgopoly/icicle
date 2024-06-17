"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[700],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var i=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(8168),a=(n(6540),n(5680));n(1873);const r={},o="NTT",l={unversionedId:"icicle/rust-bindings/ntt",id:"icicle/rust-bindings/ntt",title:"NTT",description:"Example",source:"@site/docs/icicle/rust-bindings/ntt.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/ntt",permalink:"/icicle/rust-bindings/ntt",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/ntt.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1718628255,formattedLastUpdatedAt:"6/17/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"MSM Pre computation",permalink:"/icicle/rust-bindings/msm-pre-computation"},next:{title:"ECNTT",permalink:"/icicle/rust-bindings/ecntt"}},s={},p=[{value:"Example",id:"example",level:2},{value:"NTT API overview",id:"ntt-api-overview",level:2},{value:"NTT Config",id:"ntt-config",level:3},{value:"Fields",id:"fields",level:4},{value:"Usage",id:"usage",level:4},{value:"Modes",id:"modes",level:3},{value:"Initializing the NTT Domain",id:"initializing-the-ntt-domain",level:3},{value:"<code>initialize_domain</code>",id:"initialize_domain",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Releasing the domain",id:"releasing-the-domain",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"ntt"},"NTT"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::{ntt::{self, NTT}, traits::GenerateRandom};\nuse icicle_cuda_runtime::{device_context::DeviceContext, memory::HostOrDeviceSlice, stream::CudaStream};\n\nfn main() {\n    let size = 1 << 12; // Define the size of your input, e.g., 2^10\n\n    let icicle_omega = <Bn254Fr as FftField>::get_root_of_unity(\n        size.try_into()\n            .unwrap(),\n    )\n\n    // Generate random inputs\n    println!("Generating random inputs...");\n    let scalars = HostOrDeviceSlice::Host(ScalarCfg::generate_random(size));\n\n    // Allocate memory on CUDA device for NTT results\n    let mut ntt_results: HostOrDeviceSlice<\'_, ScalarField> = HostOrDeviceSlice::cuda_malloc(size).expect("Failed to allocate CUDA memory");\n\n    // Create a CUDA stream\n    let stream = CudaStream::create().expect("Failed to create CUDA stream");\n    let ctx = DeviceContext::default(); // Assuming default device context\n    ScalarCfg::initialize_domain(ScalarField::from_ark(icicle_omega), &ctx, true).unwrap();\n\n    // Configure NTT\n    let mut cfg = ntt::NTTConfig::default();\n    cfg.ctx.stream = &stream;\n    cfg.is_async = true; // Set to true for asynchronous execution\n\n    // Execute NTT on device\n    println!("Executing NTT on device...");\n    ntt::ntt(&scalars, ntt::NTTDir::kForward, &cfg, &mut ntt_results).expect("Failed to execute NTT");\n\n    // Synchronize CUDA stream to ensure completion\n    stream.synchronize().expect("Failed to synchronize CUDA stream");\n\n    // Optionally, move results to host for further processing or verification\n    println!("NTT execution complete.");\n}\n')),(0,a.yg)("h2",{id:"ntt-api-overview"},"NTT API overview"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn ntt<F>(\n    input: &HostOrDeviceSlice<F>,\n    dir: NTTDir,\n    cfg: &NTTConfig<F>,\n    output: &mut HostOrDeviceSlice<F>,\n) -> IcicleResult<()>\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ntt:ntt")," expects:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"input"))," - buffer to read the inputs of the NTT from."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"dir"))," - whether to compute forward or inverse NTT."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"cfg"))," - config used to specify extra arguments of the NTT."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"output"))," - buffer to write the NTT outputs into. Must be of the same  size as input.")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"input")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"output")," buffers can be on device or on host. Being on host means that they will be transferred to device during runtime."),(0,a.yg)("h3",{id:"ntt-config"},"NTT Config"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct NTTConfig<'a, S> {\n    pub ctx: DeviceContext<'a>,\n    pub coset_gen: S,\n    pub batch_size: i32,\n    pub columns_batch: bool,\n    pub ordering: Ordering,\n    are_inputs_on_device: bool,    \n    are_outputs_on_device: bool,\n    pub is_async: bool,\n    pub ntt_algorithm: NttAlgorithm,\n}\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"NTTConfig")," struct is a configuration object used to specify parameters for an NTT instance."),(0,a.yg)("h4",{id:"fields"},"Fields"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"ctx: DeviceContext<'a>")),": Specifies the device context, including the device ID and the stream ID.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"coset_gen: S")),": Defines the coset generator used for coset (i)NTTs. By default, this is set to ",(0,a.yg)("inlineCode",{parentName:"p"},"S::one()"),", indicating that no coset is being used.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"batch_size: i32")),": Determines the number of NTTs to compute in a single batch. The default value is 1, meaning that operations are performed on individual inputs without batching. Batch processing can significantly improve performance by leveraging parallelism in GPU computations.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"columns_batch")),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows. Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"ordering: Ordering")),": Controls the ordering of inputs and outputs for the NTT operation. This field can be used to specify decimation strategies (in time or in frequency) and the type of butterfly algorithm (Cooley-Tukey or Gentleman-Sande). The ordering is crucial for compatibility with various algorithmic approaches and can impact the efficiency of the NTT.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"are_inputs_on_device: bool")),": Indicates whether the input data has been preloaded on the device memory. If ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," inputs will be copied from host to device.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"are_outputs_on_device: bool")),": Indicates whether the output data is preloaded in device memory. If ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," outputs will be copied from host to device. If the inputs and outputs are the same pointer NTT will be computed in place.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"is_async: bool")),": Specifies whether the NTT operation should be performed asynchronously. When set to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", the NTT function will not block the CPU, allowing other operations to proceed concurrently. Asynchronous execution requires careful synchronization to ensure data integrity and correctness.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"ntt_algorithm: NttAlgorithm")),": Can be one of ",(0,a.yg)("inlineCode",{parentName:"p"},"Auto"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Radix2"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"MixedRadix"),".\n",(0,a.yg)("inlineCode",{parentName:"p"},"Auto")," will select ",(0,a.yg)("inlineCode",{parentName:"p"},"Radix 2")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"Mixed Radix")," algorithm based on heuristics.\n",(0,a.yg)("inlineCode",{parentName:"p"},"Radix2")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"MixedRadix")," will force the use of an algorithm regardless of the input size or other considerations. You should use one of these options when you know for sure that you want to"))),(0,a.yg)("h4",{id:"usage"},"Usage"),(0,a.yg)("p",null,"Example initialization with default settings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let default_config = NTTConfig::default();\n")),(0,a.yg)("p",null,"Customizing the configuration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let custom_config = NTTConfig {\n    ctx: custom_device_context,\n    coset_gen: my_coset_generator,\n    batch_size: 10,\n    columns_batch: false,\n    ordering: Ordering::kRN,\n    are_inputs_on_device: true,\n    are_outputs_on_device: true,\n    is_async: false,\n    ntt_algorithm: NttAlgorithm::MixedRadix,\n};\n")),(0,a.yg)("h3",{id:"modes"},"Modes"),(0,a.yg)("p",null,"NTT supports two different modes ",(0,a.yg)("inlineCode",{parentName:"p"},"Batch NTT")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Single NTT")),(0,a.yg)("p",null,"You may toggle between single and batch NTT by simply configure ",(0,a.yg)("inlineCode",{parentName:"p"},"batch_size")," to be larger then 1 in your ",(0,a.yg)("inlineCode",{parentName:"p"},"NTTConfig"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let mut cfg = ntt::get_default_ntt_config::<ScalarField>();\ncfg.batch_size = 10 // your ntt using this config will run in batch mode.\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"batch_size=1")," would keep our NTT in single NTT mode."),(0,a.yg)("p",null,"Deciding weather to use ",(0,a.yg)("inlineCode",{parentName:"p"},"batch NTT")," vs ",(0,a.yg)("inlineCode",{parentName:"p"},"single NTT")," is highly dependent on your application and use case."),(0,a.yg)("h3",{id:"initializing-the-ntt-domain"},"Initializing the NTT Domain"),(0,a.yg)("p",null,"Before performing NTT operations, its necessary to initialize the NTT domain, It only needs to be called once per GPU since the twiddles are cached."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"ScalarCfg::initialize_domain(ScalarField::from_ark(icicle_omega), &ctx, true).unwrap();\n")),(0,a.yg)("h3",{id:"initialize_domain"},(0,a.yg)("inlineCode",{parentName:"h3"},"initialize_domain")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn initialize_domain<F>(primitive_root: F, ctx: &DeviceContext, fast_twiddles: bool) -> IcicleResult<()>\nwhere\n    F: FieldImpl,\n    <F as FieldImpl>::Config: NTT<F>;\n")),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"primitive_root")),": The primitive root of unity, chosen based on the maximum NTT size required for the computations. It must be of an order that is a power of two. This root is used to generate twiddle factors that are essential for the NTT operations.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"ctx")),": A reference to a ",(0,a.yg)("inlineCode",{parentName:"p"},"DeviceContext")," specifying which device and stream the computation should be executed on."))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"IcicleResult<()>")),": Will return an error if the operation fails.")),(0,a.yg)("h4",{id:"parameters-1"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"primitive_root")),": The primitive root of unity, chosen based on the maximum NTT size required for the computations. It must be of an order that is a power of two. This root is used to generate twiddle factors that are essential for the NTT operations.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"ctx")),": A reference to a ",(0,a.yg)("inlineCode",{parentName:"p"},"DeviceContext")," specifying which device and stream the computation should be executed on."))),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"IcicleResult<()>")),": Will return an error if the operation fails.")),(0,a.yg)("h3",{id:"releasing-the-domain"},"Releasing the domain"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"release_domain")," function is responsible for releasing the resources associated with a specific domain in the CUDA device context."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn release_domain<F>(ctx: &DeviceContext) -> IcicleResult<()>\nwhere\n    F: FieldImpl,\n    <F as FieldImpl>::Config: NTT<F>\n")),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"ctx")),": A reference to a ",(0,a.yg)("inlineCode",{parentName:"li"},"DeviceContext")," specifying which device and stream the computation should be executed on.")),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,"The function returns an ",(0,a.yg)("inlineCode",{parentName:"p"},"IcicleResult<()>"),", which represents the result of the operation. If the operation is successful, the function returns ",(0,a.yg)("inlineCode",{parentName:"p"},"Ok(())"),", otherwise it returns an error."))}g.isMDXComponent=!0},1873:(e,t,n)=>{n(6540)}}]);