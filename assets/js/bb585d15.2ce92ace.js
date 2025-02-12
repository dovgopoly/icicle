"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[3669],{7043:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"icicle/golang-bindings/vec-ops","title":"Vector Operations","description":"Overview","source":"@site/versioned_docs/version-1.10.1/icicle/golang-bindings/vec-ops.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/vec-ops","permalink":"/1.10.1/icicle/golang-bindings/vec-ops","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/golang-bindings/vec-ops.md","tags":[],"version":"1.10.1","lastUpdatedBy":"idanfr-ingo","lastUpdatedAt":1739365935000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"NTT","permalink":"/1.10.1/icicle/golang-bindings/ntt"},"next":{"title":"Multi GPU Support","permalink":"/1.10.1/icicle/golang-bindings/multi-gpu"}}');var r=i(4848),o=i(8453);const t={},s="Vector Operations",l={},a=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:2},{value:"Vector addition",id:"vector-addition",level:3},{value:"Vector Subtraction",id:"vector-subtraction",level:3},{value:"Vector Multiplication",id:"vector-multiplication",level:3},{value:"VecOps Method",id:"vecops-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"VecOpsConfig",id:"vecopsconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"vector-operations",children:"Vector Operations"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The VecOps API provides efficient vector operations such as addition, subtraction, and multiplication."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.h3,{id:"vector-addition",children:"Vector addition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n\nfunc main() {\n    testSize := 1 << 12\n    a := GenerateScalars(testSize)\n    b := GenerateScalars(testSize)\n    out := make(core.HostSlice[ScalarField], testSize)\n    cfg := core.DefaultVecOpsConfig()\n\n    // Perform vector addition\n    err := VecOp(a, b, out, cfg, core.Add)\n    if err != cr.CudaSuccess {\n        panic("Vector addition failed")\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"vector-subtraction",children:"Vector Subtraction"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n\nfunc main() {\n    testSize := 1 << 12\n    a := GenerateScalars(testSize)\n    b := GenerateScalars(testSize)\n    out := make(core.HostSlice[ScalarField], testSize)\n    cfg := core.DefaultVecOpsConfig()\n\n    // Perform vector subtraction\n    err := VecOp(a, b, out, cfg, core.Sub)\n    if err != cr.CudaSuccess {\n        panic("Vector subtraction failed")\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"vector-multiplication",children:"Vector Multiplication"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n\nfunc main() {\n    testSize := 1 << 12\n    a := GenerateScalars(testSize)\n    b := GenerateScalars(testSize)\n    out := make(core.HostSlice[ScalarField], testSize)\n    cfg := core.DefaultVecOpsConfig()\n\n    // Perform vector multiplication\n    err := VecOp(a, b, out, cfg, core.Mul)\n    if err != cr.CudaSuccess {\n        panic("Vector multiplication failed")\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"vecops-method",children:"VecOps Method"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func VecOp(a, b, out core.HostOrDeviceSlice, config core.VecOpsConfig, op core.VecOps) (ret cr.CudaError)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"a"}),": The first input vector."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"b"}),": The second input vector."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"out"}),": The output vector where the result of the operation will be stored."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"config"}),": A ",(0,r.jsx)(n.code,{children:"VecOpsConfig"})," object containing various configuration options for the vector operations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"op"}),": The operation to perform, specified as one of the constants (",(0,r.jsx)(n.code,{children:"Sub"}),", ",(0,r.jsx)(n.code,{children:"Add"}),", ",(0,r.jsx)(n.code,{children:"Mul"}),") from the ",(0,r.jsx)(n.code,{children:"VecOps"})," type."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CudaError"}),": Returns a CUDA error code indicating the success or failure of the vector operation."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vecopsconfig",children:"VecOpsConfig"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VecOpsConfig"})," structure holds configuration parameters for the vector operations, allowing customization of its behavior."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type VecOpsConfig struct {\n    Ctx cr.DeviceContext\n    isAOnDevice bool\n    isBOnDevice bool\n    isResultOnDevice bool\n    IsResultMontgomeryForm bool\n    IsAsync bool\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ctx"}),": Device context containing details like device ID and stream ID."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"isAOnDevice"}),": Indicates if vector ",(0,r.jsx)(n.code,{children:"a"})," is located on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"isBOnDevice"}),": Indicates if vector ",(0,r.jsx)(n.code,{children:"b"})," is located on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"isResultOnDevice"}),": Specifies where the result vector should be stored (device or host memory)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IsResultMontgomeryForm"}),": Determines if the result vector should be in Montgomery form."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IsAsync"}),": Controls whether the vector operation runs asynchronously."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"DefaultVecOpsConfig"})," to obtain a default configuration, customizable as needed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func DefaultVecOpsConfig() VecOpsConfig\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>s});var c=i(6540);const r={},o=c.createContext(r);function t(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);