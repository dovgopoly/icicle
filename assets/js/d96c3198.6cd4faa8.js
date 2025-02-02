"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[5167],{2934:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"icicle/rust-bindings/msm","title":"MSM","description":"MSM API Overview","source":"@site/versioned_docs/version-3.2.0/icicle/rust-bindings/msm.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/msm","permalink":"/3.2.0/icicle/rust-bindings/msm","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.2.0/icicle/rust-bindings/msm.md","tags":[],"version":"3.2.0","lastUpdatedBy":"danny-shterman","lastUpdatedAt":1738493793000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Rust bindings","permalink":"/3.2.0/icicle/rust-bindings"},"next":{"title":"NTT","permalink":"/3.2.0/icicle/rust-bindings/ntt"}}');var r=i(4848),t=i(8453);const o={},c="MSM",l={},a=[{value:"MSM API Overview",id:"msm-api-overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"MSM Config",id:"msm-config",level:3},{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2},{value:"Batched msm",id:"batched-msm",level:2},{value:"Precomputationg",id:"precomputationg",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns",level:4},{value:"Parameters for optimal performance",id:"parameters-for-optimal-performance",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"msm",children:"MSM"})}),"\n",(0,r.jsx)(n.h2,{id:"msm-api-overview",children:"MSM API Overview"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub fn msm<C: Curve + MSM<C>>(\n    scalars: &(impl HostOrDeviceSlice<C::ScalarField> + ?Sized),\n    bases: &(impl HostOrDeviceSlice<Affine<C>> + ?Sized),\n    cfg: &MSMConfig,\n    results: &mut (impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n) -> Result<(), eIcicleError>;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"scalars"})}),": A buffer containing the scalar values to be multiplied with corresponding points."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"points"})}),": A buffer containing the points to be multiplied by the scalars."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cfg"})}),": MSM configuration specifying additional parameters for the operation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"results"})}),": A buffer where the results of the MSM operations will be stored."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"msm-config",children:"MSM Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub struct MSMConfig {\n    pub stream_handle: IcicleStreamHandle,    \n    pub precompute_factor: i32,\n    pub c: i32,\n    pub bitsize: i32,    \n    batch_size: i32,\n    are_points_shared_in_batch: bool,\n    are_scalars_on_device: bool,\n    pub are_scalars_montgomery_form: bool,\n    are_points_on_device: bool,\n    pub are_points_montgomery_form: bool,\n    are_results_on_device: bool,    \n    pub is_async: bool,\n    pub ext: ConfigExtension,\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"stream_handle: IcicleStreamHandle"})}),": Specifies a stream for asynchronous execution."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"precompute_factor: i32"})}),": Determines the number of extra points to pre-compute for each point, affecting memory footprint and performance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"c: i32"})}),': The "window bitsize," a parameter controlling the computational complexity and memory footprint of the MSM operation.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"bitsize: i32"})}),": The number of bits of the largest scalar, typically equal to the bit size of the scalar field."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"batch_size: i32"})}),": The number of MSMs to compute in a single batch, for leveraging parallelism."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_scalars_montgomery_form"})}),": Set to ",(0,r.jsx)(n.code,{children:"true"})," if scalars are in montgomery form."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_points_montgomery_form"})}),": Set to ",(0,r.jsx)(n.code,{children:"true"})," if points are in montgomery form."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_scalars_on_device: bool"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_points_on_device: bool"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"are_results_on_device: bool"})}),": Indicate whether the corresponding buffers are on the device memory."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"is_async: bool"})}),": Whether to perform the MSM operation asynchronously."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ext: ConfigExtension"})}),": extended configuration for backend."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"msm"})," function is designed to compute the sum of multiple scalar-point multiplications efficiently. It supports both single MSM operations and batched operations for increased performance. The configuration allows for detailed control over the execution environment and performance characteristics of the MSM operation."]}),"\n",(0,r.jsxs)(n.p,{children:["When performing MSM operations, it's crucial to match the size of the ",(0,r.jsx)(n.code,{children:"scalars"})," and ",(0,r.jsx)(n.code,{children:"points"})," arrays correctly and ensure that the ",(0,r.jsx)(n.code,{children:"results"})," buffer is appropriately sized to hold the output. The ",(0,r.jsx)(n.code,{children:"MSMConfig"})," should be set up to reflect the specifics of the operation, including whether the operation should be asynchronous and any device-specific settings."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'// Using bls12-377 curve\nuse icicle_bls12_377::curve::{CurveCfg, G1Projective, ScalarCfg};\nuse icicle_core::{curve::Curve, msm, msm::MSMConfig, traits::GenerateRandom};\nuse icicle_runtime::{device::Device, memory::HostSlice};\n\nfn main() {\n    // Load backend and set device ...\n\n    // Randomize inputs\n    let size = 1024;\n    let points = CurveCfg::generate_random_affine_points(size);\n    let scalars = ScalarCfg::generate_random(size);\n\n    let mut msm_results = vec![G1Projective::zero(); 1];\n    msm::msm(\n        HostSlice::from_slice(&scalars),\n        HostSlice::from_slice(&points),\n        &MSMConfig::default(),\n        HostSlice::from_mut_slice(&mut msm_results[..]),\n    )\n    .unwrap();\n    println!("MSM result = {:?}", msm_results);\n}\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"batched-msm",children:"Batched msm"}),"\n",(0,r.jsxs)(n.p,{children:["For batch msm, simply allocate the results array with size corresponding to batch size and set the ",(0,r.jsx)(n.code,{children:"are_points_shared_in_batch"})," flag in config struct."]}),"\n",(0,r.jsx)(n.h2,{id:"precomputationg",children:"Precomputationg"}),"\n",(0,r.jsx)(n.p,{children:"Precomputes bases for the multi-scalar multiplication (MSM) by extending each base point with its multiples, facilitating more efficient MSM calculations."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"/// Returns `Ok(())` if no errors occurred or a `eIcicleError` otherwise.\npub fn precompute_bases<C: Curve + MSM<C>>(\n    points: &(impl HostOrDeviceSlice<Affine<C>> + ?Sized),\n    config: &MSMConfig,\n    output_bases: &mut DeviceSlice<Affine<C>>,\n) -> Result<(), eIcicleError>;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"points"})}),": The original set of affine points ((P_1, P_2, ..., P_n)) to be used in the MSM. For batch MSM operations, this should include all unique points concatenated together."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"msm_size"})}),": The size of a single msm in order to determine optimal parameters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cfg"})}),": The MSM configuration parameters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"output_bases"})}),": The output buffer for the extended bases. Its size must be ",(0,r.jsx)(n.code,{children:"points.len() * precompute_factor"}),". This buffer should be allocated on the device for GPU computations."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Ok(())"})," if the operation is successful, or an ",(0,r.jsx)(n.code,{children:"eIcicleError"})," error otherwise."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters-for-optimal-performance",children:"Parameters for optimal performance"}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to the ",(0,r.jsx)(n.a,{href:"../primitives/msm#choosing-optimal-parameters",children:"primitive description"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);