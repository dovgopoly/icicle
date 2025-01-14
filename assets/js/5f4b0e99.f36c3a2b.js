"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[6131],{528:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"icicle/golang-bindings/ntt","title":"NTT","description":"Supported curves","source":"@site/versioned_docs/version-1.10.1/icicle/golang-bindings/ntt.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/ntt","permalink":"/1.10.1/icicle/golang-bindings/ntt","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/golang-bindings/ntt.md","tags":[],"version":"1.10.1","lastUpdatedBy":"ShaniBabayoff","lastUpdatedAt":1736868439000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"MSM pre computation","permalink":"/1.10.1/icicle/golang-bindings/msm-pre-computation"},"next":{"title":"Vector operations","permalink":"/1.10.1/icicle/golang-bindings/vec-ops"}}');var r=i(4848),o=i(8453);const s={},c="NTT",l={},a=[{value:"Supported curves",id:"supported-curves",level:3},{value:"NTT Example",id:"ntt-example",level:2},{value:"NTT Method",id:"ntt-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"NTT Configuration (NTTConfig)",id:"ntt-configuration-nttconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Initializing the NTT Domain",id:"initializing-the-ntt-domain",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ntt",children:"NTT"})}),"\n",(0,r.jsx)(n.h3,{id:"supported-curves",children:"Supported curves"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"bls12-377"}),", ",(0,r.jsx)(n.code,{children:"bls12-381"}),", ",(0,r.jsx)(n.code,{children:"bn254"}),", ",(0,r.jsx)(n.code,{children:"bw6-761"})]}),"\n",(0,r.jsx)(n.h2,{id:"ntt-example",children:"NTT Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n\nfunc Main() {\n    // Obtain the default NTT configuration with a predefined coset generator.\n    cfg := GetDefaultNttConfig()\n    \n    // Define the size of the input scalars.\n    size := 1 << 18\n\n    // Generate scalars for the NTT operation.\n    scalars := GenerateScalars(size)\n\n    // Set the direction of the NTT (forward or inverse).\n    dir := core.KForward\n\n    // Allocate memory for the results of the NTT operation.\n    results := make(core.HostSlice[ScalarField], size)\n\n    // Perform the NTT operation.\n    err := Ntt(scalars, dir, &cfg, results)\n    if err != cr.CudaSuccess {\n        panic("NTT operation failed")\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ntt-method",children:"NTT Method"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func Ntt[T any](scalars core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) core.IcicleError\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"scalars"}),": A slice containing the input scalars for the transform. It can reside either in host memory or device memory."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"dir"}),": The direction of the NTT operation (",(0,r.jsx)(n.code,{children:"KForward"})," or ",(0,r.jsx)(n.code,{children:"KInverse"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"cfg"}),": A pointer to an ",(0,r.jsx)(n.code,{children:"NTTConfig"})," object, containing configuration options for the NTT operation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"results"}),": A slice where the results of the NTT operation will be stored. This slice can be in host or device memory."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CudaError"}),": Returns a CUDA error code indicating the success or failure of the NTT operation."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ntt-configuration-nttconfig",children:"NTT Configuration (NTTConfig)"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NTTConfig"})," structure holds configuration parameters for the NTT operation, allowing customization of its behavior to optimize performance based on the specifics of your protocol."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type NTTConfig[T any] struct {\n    Ctx cr.DeviceContext\n    CosetGen T\n    BatchSize int32\n    ColumnsBatch bool\n    Ordering Ordering\n    areInputsOnDevice  bool\n    areOutputsOnDevice bool\n    IsAsync bool\n    NttAlgorithm NttAlgorithm\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ctx"}),": Device context containing details like device ID and stream ID."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CosetGen"}),": Coset generator used for coset (i)NTTs, defaulting to no coset being used."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"BatchSize"}),": The number of NTTs to compute in one operation, defaulting to 1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ColumnsBatch"}),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows. Defaults to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ordering"}),": Ordering of inputs and outputs (",(0,r.jsx)(n.code,{children:"KNN"}),", ",(0,r.jsx)(n.code,{children:"KNR"}),", ",(0,r.jsx)(n.code,{children:"KRN"}),", ",(0,r.jsx)(n.code,{children:"KRR"}),", ",(0,r.jsx)(n.code,{children:"KMN"}),", ",(0,r.jsx)(n.code,{children:"KNM"}),"), affecting how data is arranged."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"areInputsOnDevice"}),": Indicates if input scalars are located on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"areOutputsOnDevice"}),": Indicates if results are stored on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IsAsync"}),": Controls whether the NTT operation runs asynchronously."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NttAlgorithm"}),": Explicitly select the NTT algorithm. Default value: Auto (the implementation selects radix-2 or mixed-radix algorithm based on heuristics)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"GetDefaultNTTConfig"})," to obtain a default configuration, customizable as needed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func GetDefaultNTTConfig[T any](cosetGen T) NTTConfig[T]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"initializing-the-ntt-domain",children:"Initializing the NTT Domain"}),"\n",(0,r.jsx)(n.p,{children:"Before performing NTT operations, it's necessary to initialize the NTT domain; it only needs to be called once per GPU since the twiddles are cached."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func InitDomain(primitiveRoot ScalarField, ctx cr.DeviceContext, fastTwiddles bool) core.IcicleError\n"})}),"\n",(0,r.jsx)(n.p,{children:"This function initializes the domain with a given primitive root, optionally using fast twiddle factors to optimize the computation."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(6540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);