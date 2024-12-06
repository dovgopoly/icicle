"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8827],{552:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"icicle/golang-bindings/ntt","title":"NTT","description":"NTT Example","source":"@site/versioned_docs/version-3.0.0/icicle/golang-bindings/ntt.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/ntt","permalink":"/3.0.0/icicle/golang-bindings/ntt","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/golang-bindings/ntt.md","tags":[],"version":"3.0.0","lastUpdatedBy":"yshekel","lastUpdatedAt":1733471854000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"MSM pre computation","permalink":"/3.0.0/icicle/golang-bindings/msm-pre-computation"},"next":{"title":"EC-NTT","permalink":"/3.0.0/icicle/golang-bindings/ecntt"}}');var r=i(4848),o=i(8453);const c={},s="NTT",l={},a=[{value:"NTT Example",id:"ntt-example",level:2},{value:"NTT Method",id:"ntt-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"NTT Configuration (NTTConfig)",id:"ntt-configuration-nttconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Initializing the NTT Domain",id:"initializing-the-ntt-domain",level:3},{value:"Releasing the domain",id:"releasing-the-domain",level:3},{value:"Return Value",id:"return-value-1",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ntt",children:"NTT"})}),"\n",(0,r.jsx)(n.h2,{id:"ntt-example",children:"NTT Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/ntt"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n\n\t"github.com/consensys/gnark-crypto/ecc/bn254/fr/fft"\n)\n\nfunc init() {\n  // Load backend using env path\n\truntime.LoadBackendFromEnvOrDefault()\n\t// Set Cuda device to perform\n\tdevice := runtime.CreateDevice("CUDA", 0)\n\truntime.SetDevice(&device)\n\n\tcfg := core.GetDefaultNTTInitDomainConfig()\n\tinitDomain(18, cfg)\n}\n\nfunc initDomain(largestTestSize int, cfg core.NTTInitDomainConfig) runtime.EIcicleError {\n\trouMont, _ := fft.Generator(uint64(1 << largestTestSize))\n\trou := rouMont.Bits()\n\trouIcicle := bn254.ScalarField{}\n\tlimbs := core.ConvertUint64ArrToUint32Arr(rou[:])\n\n\trouIcicle.FromLimbs(limbs)\n\te := ntt.InitDomain(rouIcicle, cfg)\n\treturn e\n}\n\nfunc main() {\n\t// Obtain the default NTT configuration with a predefined coset generator.\n\tcfg := ntt.GetDefaultNttConfig()\n\n\t// Define the size of the input scalars.\n\tsize := 1 << 18\n\n\t// Generate scalars for the NTT operation.\n\tscalars := bn254.GenerateScalars(size)\n\n\t// Set the direction of the NTT (forward or inverse).\n\tdir := core.KForward\n\n\t// Allocate memory for the results of the NTT operation.\n\tresults := make(core.HostSlice[bn254.ScalarField], size)\n\n\t// Perform the NTT operation.\n\terr := ntt.Ntt(scalars, dir, &cfg, results)\n\tif err != runtime.Success {\n\t\tpanic("NTT operation failed")\n\t}\n\n\tntt.ReleaseDomain()\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ntt-method",children:"NTT Method"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func Ntt[T any](scalars core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) runtime.EIcicleError\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"scalars"})}),": A slice containing the input scalars for the transform. It can reside either in host memory or device memory."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"dir"})}),": The direction of the NTT operation (",(0,r.jsx)(n.code,{children:"KForward"})," or ",(0,r.jsx)(n.code,{children:"KInverse"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cfg"})}),": A pointer to an ",(0,r.jsx)(n.code,{children:"NTTConfig"})," object, containing configuration options for the NTT operation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"results"})}),": A slice where the results of the NTT operation will be stored. This slice can be in host or device memory."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"EIcicleError"})}),": A ",(0,r.jsx)(n.code,{children:"runtime.EIcicleError"})," value, which will be ",(0,r.jsx)(n.code,{children:"runtime.Success"})," if the operation was successful, or an error if something went wrong."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ntt-configuration-nttconfig",children:"NTT Configuration (NTTConfig)"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NTTConfig"})," structure holds configuration parameters for the NTT operation, allowing customization of its behavior to optimize performance based on the specifics of your protocol."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type NTTConfig[T any] struct {\n\tStreamHandle       runtime.Stream\n\tCosetGen           T\n\tBatchSize          int32\n\tColumnsBatch       bool\n\tOrdering           Ordering\n\tareInputsOnDevice  bool\n\tareOutputsOnDevice bool\n\tIsAsync            bool\n\tExt                config_extension.ConfigExtensionHandler\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"StreamHandle"})}),": Specifies the stream (queue) to use for async execution."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"CosetGen"})}),": Coset generator. Used to perform coset (i)NTTs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"BatchSize"})}),": The number of NTTs to compute in one operation, defaulting to 1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ColumnsBatch"})}),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Ordering"})}),": Ordering of inputs and outputs (",(0,r.jsx)(n.code,{children:"KNN"}),", ",(0,r.jsx)(n.code,{children:"KNR"}),", ",(0,r.jsx)(n.code,{children:"KRN"}),", ",(0,r.jsx)(n.code,{children:"KRR"}),"), affecting how data is arranged."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"areInputsOnDevice"})}),": Indicates if input scalars are located on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"areOutputsOnDevice"})}),": Indicates if results are stored on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"IsAsync"})}),": Controls whether the NTT operation runs asynchronously."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Ext"})}),": Extended configuration for backend."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"GetDefaultNTTConfig"})," to obtain a default configuration, customizable as needed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func GetDefaultNTTConfig[T any](cosetGen T) NTTConfig[T]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"initializing-the-ntt-domain",children:"Initializing the NTT Domain"}),"\n",(0,r.jsx)(n.p,{children:"Before performing NTT operations, it's necessary to initialize the NTT domain; it only needs to be called once per GPU since the twiddles are cached."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func InitDomain(primitiveRoot bn254.ScalarField, cfg core.NTTInitDomainConfig) runtime.EIcicleError\n"})}),"\n",(0,r.jsx)(n.p,{children:"This function initializes the domain with a given primitive root, optionally using fast twiddle factors to optimize the computation."}),"\n",(0,r.jsx)(n.h3,{id:"releasing-the-domain",children:"Releasing the domain"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ReleaseDomain"})," function is responsible for releasing the resources associated with a specific domain in the CUDA device context."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func ReleaseDomain() runtime.EIcicleError\n"})}),"\n",(0,r.jsx)(n.h3,{id:"return-value-1",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"EIcicleError"})}),": A ",(0,r.jsx)(n.code,{children:"runtime.EIcicleError"})," value, which will be ",(0,r.jsx)(n.code,{children:"runtime.Success"})," if the operation was successful, or an error if something went wrong."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var t=i(6540);const r={},o=t.createContext(r);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);