"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[3422],{434:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"icicle/rust-bindings/msm","title":"MSM","description":"Supported curves","source":"@site/versioned_docs/version-1.10.1/icicle/rust-bindings/msm.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/msm","permalink":"/1.10.1/icicle/rust-bindings/msm","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/rust-bindings/msm.md","tags":[],"version":"1.10.1","lastUpdatedBy":"idanfr-ingo","lastUpdatedAt":1736855738000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Rust bindings","permalink":"/1.10.1/icicle/rust-bindings"},"next":{"title":"MSM pre computation","permalink":"/1.10.1/icicle/rust-bindings/msm-pre-computation"}}');var r=s(4848),t=s(8453);const o={},c="MSM",l={},a=[{value:"Supported curves",id:"supported-curves",level:3},{value:"Example",id:"example",level:2},{value:"MSM API Overview",id:"msm-api-overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"MSM Config",id:"msm-config",level:3},{value:"Usage",id:"usage",level:3},{value:"How do I toggle between the supported algorithms?",id:"how-do-i-toggle-between-the-supported-algorithms",level:2},{value:"How do I toggle between MSM modes?",id:"how-do-i-toggle-between-msm-modes",level:2},{value:"Support for G2 group",id:"support-for-g2-group",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"msm",children:"MSM"})}),"\n",(0,r.jsx)(n.h3,{id:"supported-curves",children:"Supported curves"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"bls12-377"}),", ",(0,r.jsx)(n.code,{children:"bls12-381"}),", ",(0,r.jsx)(n.code,{children:"bn-254"}),", ",(0,r.jsx)(n.code,{children:"bw6-761"}),", ",(0,r.jsx)(n.code,{children:"grumpkin"})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use icicle_bn254::curve::{CurveCfg, G1Projective, ScalarCfg};\nuse icicle_core::{curve::Curve, msm, traits::GenerateRandom};\nuse icicle_cuda_runtime::{memory::HostOrDeviceSlice, stream::CudaStream};\n\nfn main() {\n    let size: usize = 1 << 10; // Define the number of points and scalars\n\n    // Generate random points and scalars\n    println!("Generating random G1 points and scalars for BN254...");\n    let points = CurveCfg::generate_random_affine_points(size);\n    let scalars = ScalarCfg::generate_random(size);\n\n    // Wrap points and scalars in HostOrDeviceSlice for MSM\n    let points_host = HostOrDeviceSlice::Host(points);\n    let scalars_host = HostOrDeviceSlice::Host(scalars);\n\n    // Allocate memory on the CUDA device for MSM results\n    let mut msm_results: HostOrDeviceSlice<\'_, G1Projective> = HostOrDeviceSlice::cuda_malloc(1).expect("Failed to allocate CUDA memory for MSM results");\n\n    // Create a CUDA stream for asynchronous execution\n    let stream = CudaStream::create().expect("Failed to create CUDA stream");\n    let mut cfg = msm::MSMConfig::default();\n    cfg.ctx.stream = &stream;\n    cfg.is_async = true; // Enable asynchronous execution\n\n    // Execute MSM on the device\n    println!("Executing MSM on device...");\n    msm::msm(&scalars_host, &points_host, &cfg, &mut msm_results).expect("Failed to execute MSM");\n\n    // Synchronize CUDA stream to ensure MSM execution is complete\n    stream.synchronize().expect("Failed to synchronize CUDA stream");\n\n    // Optionally, move results to host for further processing or printing\n    println!("MSM execution complete.");\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"msm-api-overview",children:"MSM API Overview"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub fn msm<C: Curve>(\n    scalars: &HostOrDeviceSlice<C::ScalarField>,\n    points: &HostOrDeviceSlice<Affine<C>>,\n    cfg: &MSMConfig,\n    results: &mut HostOrDeviceSlice<Projective<C>>,\n) -> IcicleResult<()>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"scalars"})}),": A buffer containing the scalar values to be multiplied with corresponding points."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"points"})}),": A buffer containing the points to be multiplied by the scalars."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cfg"})}),": MSM configuration specifying additional parameters for the operation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"results"})}),": A buffer where the results of the MSM operations will be stored."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"msm-config",children:"MSM Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub struct MSMConfig<'a> {\n    pub ctx: DeviceContext<'a>,\n    points_size: i32,\n    pub precompute_factor: i32,\n    pub c: i32,\n    pub bitsize: i32,\n    pub large_bucket_factor: i32,\n    batch_size: i32,\n    are_scalars_on_device: bool,\n    pub are_scalars_montgomery_form: bool,\n    are_points_on_device: bool,\n    pub are_points_montgomery_form: bool,\n    are_results_on_device: bool,\n    pub is_big_triangle: bool,\n    pub is_async: bool,\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ctx: DeviceContext"})}),": Specifies the device context, device id and the CUDA stream for asynchronous execution."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"point_size: i32"})}),":"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"precompute_factor: i32"})}),": Determines the number of extra points to pre-compute for each point, affecting memory footprint and performance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"c: i32"})}),': The "window bitsize," a parameter controlling the computational complexity and memory footprint of the MSM operation.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"bitsize: i32"})}),": The number of bits of the largest scalar, typically equal to the bit size of the scalar field."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"large_bucket_factor: i32"})}),": Adjusts the algorithm's sensitivity to frequently occurring buckets, useful for non-uniform scalar distributions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"batch_size: i32"})}),": The number of MSMs to compute in a single batch, for leveraging parallelism."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_scalars_montgomery_form"})}),": Set to ",(0,r.jsx)(n.code,{children:"true"})," if scalars are in montgomery form."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_points_montgomery_form"})}),": Set to ",(0,r.jsx)(n.code,{children:"true"})," if points are in montgomery form."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_scalars_on_device: bool"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_points_on_device: bool"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_results_on_device: bool"})}),": Indicate whether the corresponding buffers are on the device memory."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"is_big_triangle"})}),": If ",(0,r.jsx)(n.code,{children:"true"})," MSM will run in Large triangle accumulation if ",(0,r.jsx)(n.code,{children:"false"})," Bucket accumulation will be chosen. Default value: false."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"is_async: bool"})}),": Whether to perform the MSM operation asynchronously."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"msm"})," function is designed to compute the sum of multiple scalar-point multiplications efficiently. It supports both single MSM operations and batched operations for increased performance. The configuration allows for detailed control over the execution environment and performance characteristics of the MSM operation."]}),"\n",(0,r.jsxs)(n.p,{children:["When performing MSM operations, it's crucial to match the size of the ",(0,r.jsx)(n.code,{children:"scalars"})," and ",(0,r.jsx)(n.code,{children:"points"})," arrays correctly and ensure that the ",(0,r.jsx)(n.code,{children:"results"})," buffer is appropriately sized to hold the output. The ",(0,r.jsx)(n.code,{children:"MSMConfig"})," should be set up to reflect the specifics of the operation, including whether the operation should be asynchronous and any device-specific settings."]}),"\n",(0,r.jsx)(n.h2,{id:"how-do-i-toggle-between-the-supported-algorithms",children:"How do I toggle between the supported algorithms?"}),"\n",(0,r.jsxs)(n.p,{children:["When creating your MSM Config you may state which algorithm you wish to use. ",(0,r.jsx)(n.code,{children:"is_big_triangle=true"})," will activate Large triangle accumulation and ",(0,r.jsx)(n.code,{children:"is_big_triangle=false"})," will activate Bucket accumulation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"...\n\nlet mut cfg_bls12377 = msm::get_default_msm_config::<BLS12377CurveCfg>();\n\n// is_big_triangle will determine which algorithm to use \ncfg_bls12377.is_big_triangle = true;\n\nmsm::msm(&scalars, &points, &cfg, &mut msm_results).unwrap();\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You may reference the rust code ",(0,r.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/blob/77a7613aa21961030e4e12bf1c9a78a2dadb2518/wrappers/rust/icicle-core/src/msm/mod.rs#L54",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"how-do-i-toggle-between-msm-modes",children:"How do I toggle between MSM modes?"}),"\n",(0,r.jsxs)(n.p,{children:["Toggling between MSM modes occurs automatically based on the number of results you are expecting from the ",(0,r.jsx)(n.code,{children:"msm::msm"})," function. If you are expecting an array of ",(0,r.jsx)(n.code,{children:"msm_results"}),", ICICLE will automatically split ",(0,r.jsx)(n.code,{children:"scalars"})," and ",(0,r.jsx)(n.code,{children:"points"})," into equal parts and run them as multiple MSMs in parallel."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"...\n\nlet mut msm_result: HostOrDeviceSlice<'_, G1Projective> = HostOrDeviceSlice::cuda_malloc(1).unwrap();\nmsm::msm(&scalars, &points, &cfg, &mut msm_result).unwrap();\n\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above we allocate a single expected result which the MSM method will interpret as ",(0,r.jsx)(n.code,{children:"batch_size=1"})," and run a single MSM."]}),"\n",(0,r.jsxs)(n.p,{children:["In the next example, we are expecting 10 results which sets ",(0,r.jsx)(n.code,{children:"batch_size=10"})," and runs 10 MSMs in batch mode."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"...\n\nlet mut msm_results: HostOrDeviceSlice<'_, G1Projective> = HostOrDeviceSlice::cuda_malloc(10).unwrap();\nmsm::msm(&scalars, &points, &cfg, &mut msm_results).unwrap();\n\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here is a ",(0,r.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/blob/77a7613aa21961030e4e12bf1c9a78a2dadb2518/wrappers/rust/icicle-core/src/msm/mod.rs#L108",children:"reference"})," to the code which automatically sets the batch size. For more MSM examples have a look ",(0,r.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/blob/77a7613aa21961030e4e12bf1c9a78a2dadb2518/examples/rust/msm/src/main.rs#L1",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"support-for-g2-group",children:"Support for G2 group"}),"\n",(0,r.jsx)(n.p,{children:"MSM also supports G2 group."}),"\n",(0,r.jsx)(n.p,{children:"Using MSM in G2 requires a G2 config, and of course your Points should also be G2 Points."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"... \n\nlet scalars = HostOrDeviceSlice::Host(upper_scalars[..size].to_vec());\nlet g2_points = HostOrDeviceSlice::Host(g2_upper_points[..size].to_vec());\nlet mut g2_msm_results: HostOrDeviceSlice<'_, G2Projective> = HostOrDeviceSlice::cuda_malloc(1).unwrap();\nlet mut g2_cfg = msm::get_default_msm_config::<G2CurveCfg>();\n\nmsm::msm(&scalars, &g2_points, &g2_cfg, &mut g2_msm_results).unwrap();\n\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here you can ",(0,r.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/blob/5a96f9937d0a7176d88c766bd3ef2062b0c26c37/examples/rust/msm/src/main.rs#L114",children:"find an example"})," of MSM on G2 Points."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);