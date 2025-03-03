"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[2717],{6883:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"icicle/golang-bindings/msm","title":"MSM","description":"Supported curves","source":"@site/versioned_docs/version-1.10.1/icicle/golang-bindings/msm.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/msm","permalink":"/1.10.1/icicle/golang-bindings/msm","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/golang-bindings/msm.md","tags":[],"version":"1.10.1","lastUpdatedBy":"Koren-Brand","lastUpdatedAt":1741005588000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Golang bindings","permalink":"/1.10.1/icicle/golang-bindings"},"next":{"title":"MSM pre computation","permalink":"/1.10.1/icicle/golang-bindings/msm-pre-computation"}}');var o=i(74848),s=i(28453);const t={},c="MSM",l={},a=[{value:"Supported curves",id:"supported-curves",level:3},{value:"MSM Example",id:"msm-example",level:2},{value:"MSM Method",id:"msm-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"MSMConfig",id:"msmconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"How do I toggle between the supported algorithms?",id:"how-do-i-toggle-between-the-supported-algorithms",level:2},{value:"How do I toggle between MSM modes?",id:"how-do-i-toggle-between-msm-modes",level:2},{value:"Support for G2 group",id:"support-for-g2-group",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"msm",children:"MSM"})}),"\n",(0,o.jsx)(n.h3,{id:"supported-curves",children:"Supported curves"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"bls12-377"}),", ",(0,o.jsx)(n.code,{children:"bls12-381"}),", ",(0,o.jsx)(n.code,{children:"bn254"}),", ",(0,o.jsx)(n.code,{children:"bw6-761"})]}),"\n",(0,o.jsx)(n.h2,{id:"msm-example",children:"MSM Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n\nfunc Main() {\n    // Obtain the default MSM configuration.\n    cfg := GetDefaultMSMConfig()\n    \n    // Define the size of the problem, here 2^18.\n    size := 1 << 18\n\n    // Generate scalars and points for the MSM operation.\n    scalars := GenerateScalars(size)\n    points := GenerateAffinePoints(size)\n\n    // Create a CUDA stream for asynchronous operations.\n    stream, _ := cr.CreateStream()\n    var p Projective\n    \n    // Allocate memory on the device for the result of the MSM operation.\n    var out core.DeviceSlice\n    _, e := out.MallocAsync(p.Size(), p.Size(), stream)\n\n    if e != cr.CudaSuccess {\n        panic(e)\n    }\n    \n    // Set the CUDA stream in the MSM configuration.\n    cfg.Ctx.Stream = &stream\n    cfg.IsAsync = true\n    \n    // Perform the MSM operation.\n    e = Msm(scalars, points, &cfg, out)\n    \n    if e != cr.CudaSuccess {\n        panic(e)\n    }\n    \n    // Allocate host memory for the results and copy the results from the device.\n    outHost := make(core.HostSlice[Projective], 1)\n    cr.SynchronizeStream(&stream)\n    outHost.CopyFromDevice(&out)\n    \n    // Free the device memory allocated for the results.\n    out.Free()\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"msm-method",children:"MSM Method"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func Msm(scalars core.HostOrDeviceSlice, points core.HostOrDeviceSlice, cfg *core.MSMConfig, results core.HostOrDeviceSlice) cr.CudaError\n"})}),"\n",(0,o.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"scalars"}),": A slice containing the scalars for multiplication. It can reside either in host memory or device memory."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"points"}),": A slice containing the points to be multiplied with scalars. Like scalars, these can also be in host or device memory."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"cfg"}),": A pointer to an ",(0,o.jsx)(n.code,{children:"MSMConfig"})," object, which contains various configuration options for the MSM operation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"results"}),": A slice where the results of the MSM operation will be stored. This slice can be in host or device memory."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CudaError"}),": Returns a CUDA error code indicating the success or failure of the MSM operation."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"msmconfig",children:"MSMConfig"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"MSMConfig"})," structure holds configuration parameters for the MSM operation, allowing customization of its behavior to optimize performance based on the specifics of the operation or the underlying hardware."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"type MSMConfig struct {\n    Ctx cr.DeviceContext\n    PrecomputeFactor int32\n    C int32\n    Bitsize int32\n    LargeBucketFactor int32\n    batchSize int32\n    areScalarsOnDevice bool\n    AreScalarsMontgomeryForm bool\n    arePointsOnDevice bool\n    ArePointsMontgomeryForm bool\n    areResultsOnDevice bool\n    IsBigTriangle bool\n    IsAsync bool\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Ctx"}),": Device context containing details like device id and stream."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"PrecomputeFactor"}),": Controls the number of extra points to pre-compute."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"C"}),': Window bitsize, a key parameter in the "bucket method" for MSM.']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Bitsize"}),": Number of bits of the largest scalar."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"LargeBucketFactor"}),": Sensitivity to frequently occurring buckets."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"batchSize"}),": Number of results to compute in one batch."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"areScalarsOnDevice"}),": Indicates if scalars are located on the device."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"AreScalarsMontgomeryForm"}),": True if scalars are in Montgomery form."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"arePointsOnDevice"}),": Indicates if points are located on the device."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"ArePointsMontgomeryForm"}),": True if point coordinates are in Montgomery form."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"areResultsOnDevice"}),": Indicates if results are stored on the device."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"IsBigTriangle"}),": If ",(0,o.jsx)(n.code,{children:"true"})," MSM will run in Large triangle accumulation if ",(0,o.jsx)(n.code,{children:"false"})," Bucket accumulation will be chosen. Default value: false."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"IsAsync"}),": If true, runs MSM asynchronously."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"GetDefaultMSMConfig"})," to obtain a default configuration, which can then be customized as needed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func GetDefaultMSMConfig() MSMConfig\n"})}),"\n",(0,o.jsx)(n.h2,{id:"how-do-i-toggle-between-the-supported-algorithms",children:"How do I toggle between the supported algorithms?"}),"\n",(0,o.jsxs)(n.p,{children:["When creating your MSM Config you may state which algorithm you wish to use. ",(0,o.jsx)(n.code,{children:"cfg.Ctx.IsBigTriangle = true"})," will activate Large triangle accumulation and ",(0,o.jsx)(n.code,{children:"cfg.Ctx.IsBigTriangle = false"})," will activate Bucket accumulation."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"...\n\n// Obtain the default MSM configuration.\ncfg := GetDefaultMSMConfig()\n\ncfg.Ctx.IsBigTriangle = true\n\n...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"how-do-i-toggle-between-msm-modes",children:"How do I toggle between MSM modes?"}),"\n",(0,o.jsxs)(n.p,{children:["Toggling between MSM modes occurs automatically based on the number of results you are expecting from the ",(0,o.jsx)(n.code,{children:"MSM"})," function."]}),"\n",(0,o.jsxs)(n.p,{children:["The number of results is interpreted from the size of ",(0,o.jsx)(n.code,{children:"var out core.DeviceSlice"}),". Thus its important when allocating memory for ",(0,o.jsx)(n.code,{children:"var out core.DeviceSlice"})," to make sure that you are allocating ",(0,o.jsx)(n.code,{children:"<number of results> X <size of a single point>"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"... \n\nbatchSize := 3\nvar p G2Projective\nvar out core.DeviceSlice\nout.Malloc(batchSize*p.Size(), p.Size())\n\n...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"support-for-g2-group",children:"Support for G2 group"}),"\n",(0,o.jsx)(n.p,{children:"To activate G2 support first you must make sure you are building the static libraries with G2 feature enabled."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./build.sh bls12_381 ON\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now when importing ",(0,o.jsx)(n.code,{children:"icicle"}),", you should have access to G2 features."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["These features include ",(0,o.jsx)(n.code,{children:"G2Projective"})," and ",(0,o.jsx)(n.code,{children:"G2Affine"})," points as well as a ",(0,o.jsx)(n.code,{children:"G2Msm"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"...\n\ncfg := GetDefaultMSMConfig()\nsize := 1 << 12\nbatchSize := 3\ntotalSize := size * batchSize\nscalars := GenerateScalars(totalSize)\npoints := G2GenerateAffinePoints(totalSize)\n\nvar p G2Projective\nvar out core.DeviceSlice\nout.Malloc(batchSize*p.Size(), p.Size())\nG2Msm(scalars, points, &cfg, out)\n\n...\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"G2Msm"})," works the same way as normal MSM, the difference is that it uses G2 Points."]}),"\n",(0,o.jsx)(n.p,{children:"Additionally when you are building your application make sure to use the g2 feature flag"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go build -tags=g2\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var r=i(96540);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);