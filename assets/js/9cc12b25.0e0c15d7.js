"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[2580],{43484:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"icicle/golang-bindings/ntt","title":"NTT","description":"NTT Example","source":"@site/versioned_docs/version-2.8.0/icicle/golang-bindings/ntt.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/ntt","permalink":"/2.8.0/icicle/golang-bindings/ntt","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/golang-bindings/ntt.md","tags":[],"version":"2.8.0","lastUpdatedBy":"Otsar","lastUpdatedAt":1742209585000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"MSM pre computation","permalink":"/2.8.0/icicle/golang-bindings/msm-pre-computation"},"next":{"title":"EC-NTT","permalink":"/2.8.0/icicle/golang-bindings/ecntt"}}');var t=i(74848),o=i(28453);const c={},s="NTT",l={},a=[{value:"NTT Example",id:"ntt-example",level:2},{value:"NTT Method",id:"ntt-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"NTT Configuration (NTTConfig)",id:"ntt-configuration-nttconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Initializing the NTT Domain",id:"initializing-the-ntt-domain",level:3},{value:"Releasing the domain",id:"releasing-the-domain",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return Value",id:"return-value-1",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ntt",children:"NTT"})}),"\n",(0,t.jsx)(n.h2,{id:"ntt-example",children:"NTT Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n  "github.com/ingonyama-zk/icicle/v2/wrappers/golang/core"\n  cr "github.com/ingonyama-zk/icicle/v2/wrappers/golang/cuda_runtime"\n  bn254 "github.com/ingonyama-zk/icicle/v2/wrappers/golang/curves/bn254"\n\n  "github.com/consensys/gnark-crypto/ecc/bn254/fr/fft"\n)\n\nfunc init() {\n  cfg := bn254.GetDefaultNttConfig()\n  initDomain(18, cfg)\n}\n\nfunc initDomain[T any](largestTestSize int, cfg core.NTTConfig[T]) core.IcicleError {\n  rouMont, _ := fft.Generator(uint64(1 << largestTestSize))\n  rou := rouMont.Bits()\n  rouIcicle := bn254.ScalarField{}\n\n  rouIcicle.FromLimbs(rou[:])\n  e := bn254.InitDomain(rouIcicle, cfg.Ctx, false)\n  return e\n}\n\nfunc main() {\n  // Obtain the default NTT configuration with a predefined coset generator.\n  cfg := bn254.GetDefaultNttConfig()\n\n  // Define the size of the input scalars.\n  size := 1 << 18\n\n  // Generate scalars for the NTT operation.\n  scalars := bn254.GenerateScalars(size)\n\n  // Set the direction of the NTT (forward or inverse).\n  dir := core.KForward\n\n  // Allocate memory for the results of the NTT operation.\n  results := make(core.HostSlice[bn254.ScalarField], size)\n\n  // Perform the NTT operation.\n  err := bn254.Ntt(scalars, dir, &cfg, results)\n  if err.CudaErrorCode != cr.CudaSuccess {\n    panic("NTT operation failed")\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ntt-method",children:"NTT Method"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func Ntt[T any](scalars core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) core.IcicleError\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"scalars"})}),": A slice containing the input scalars for the transform. It can reside either in host memory or device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"dir"})}),": The direction of the NTT operation (",(0,t.jsx)(n.code,{children:"KForward"})," or ",(0,t.jsx)(n.code,{children:"KInverse"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"cfg"})}),": A pointer to an ",(0,t.jsx)(n.code,{children:"NTTConfig"})," object, containing configuration options for the NTT operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"results"})}),": A slice where the results of the NTT operation will be stored. This slice can be in host or device memory."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"CudaError"})}),": Returns a CUDA error code indicating the success or failure of the NTT operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ntt-configuration-nttconfig",children:"NTT Configuration (NTTConfig)"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"NTTConfig"})," structure holds configuration parameters for the NTT operation, allowing customization of its behavior to optimize performance based on the specifics of your protocol."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type NTTConfig[T any] struct {\n    Ctx cr.DeviceContext\n    CosetGen T\n    BatchSize int32\n    ColumnsBatch bool\n    Ordering Ordering\n    areInputsOnDevice  bool\n    areOutputsOnDevice bool\n    IsAsync bool\n    NttAlgorithm NttAlgorithm\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Ctx"})}),": Device context containing details like device ID and stream ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"CosetGen"})}),": Coset generator used for coset (i)NTTs, defaulting to no coset being used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"BatchSize"})}),": The number of NTTs to compute in one operation, defaulting to 1."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ColumnsBatch"})}),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Ordering"})}),": Ordering of inputs and outputs (",(0,t.jsx)(n.code,{children:"KNN"}),", ",(0,t.jsx)(n.code,{children:"KNR"}),", ",(0,t.jsx)(n.code,{children:"KRN"}),", ",(0,t.jsx)(n.code,{children:"KRR"}),", ",(0,t.jsx)(n.code,{children:"KMN"}),", ",(0,t.jsx)(n.code,{children:"KNM"}),"), affecting how data is arranged."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"areInputsOnDevice"})}),": Indicates if input scalars are located on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"areOutputsOnDevice"})}),": Indicates if results are stored on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IsAsync"})}),": Controls whether the NTT operation runs asynchronously."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"NttAlgorithm"})}),": Explicitly select the NTT algorithm. Default value: Auto (the implementation selects radix-2 or mixed-radix algorithm based on heuristics)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"GetDefaultNTTConfig"})," to obtain a default configuration, customizable as needed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func GetDefaultNTTConfig[T any](cosetGen T) NTTConfig[T]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"initializing-the-ntt-domain",children:"Initializing the NTT Domain"}),"\n",(0,t.jsx)(n.p,{children:"Before performing NTT operations, it's necessary to initialize the NTT domain; it only needs to be called once per GPU since the twiddles are cached."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func InitDomain(primitiveRoot ScalarField, ctx cr.DeviceContext, fastTwiddles bool) core.IcicleError\n"})}),"\n",(0,t.jsx)(n.p,{children:"This function initializes the domain with a given primitive root, optionally using fast twiddle factors to optimize the computation."}),"\n",(0,t.jsx)(n.h3,{id:"releasing-the-domain",children:"Releasing the domain"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ReleaseDomain"})," function is responsible for releasing the resources associated with a specific domain in the CUDA device context."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func ReleaseDomain(ctx cr.DeviceContext) core.IcicleError\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ctx"})}),": a reference to the ",(0,t.jsx)(n.code,{children:"DeviceContext"})," object, which represents the CUDA device context."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"return-value-1",children:"Return Value"}),"\n",(0,t.jsxs)(n.p,{children:["The function returns a ",(0,t.jsx)(n.code,{children:"core.IcicleError"}),", which represents the result of the operation. If the operation is successful, the function returns ",(0,t.jsx)(n.code,{children:"core.IcicleErrorCode(0)"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/icicle-crypto/icicle-core/cr"\n    "github.com/icicle-crypto/icicle-core/core"\n)\n\nfunc example() {\n  cfg := GetDefaultNttConfig()\n  err := ReleaseDomain(cfg.Ctx)\n  if err != nil {\n      // Handle the error\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var r=i(96540);const t={},o=r.createContext(t);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);