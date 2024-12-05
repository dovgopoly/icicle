"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[371],{7030:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"icicle/golang-bindings/keccak","title":"Keccak","description":"Keccak Example","source":"@site/versioned_docs/version-2.8.0/icicle/golang-bindings/keccak.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/keccak","permalink":"/2.8.0/icicle/golang-bindings/keccak","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/golang-bindings/keccak.md","tags":[],"version":"2.8.0","lastUpdatedBy":"danny-shterman","lastUpdatedAt":1733429726000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Vector operations","permalink":"/2.8.0/icicle/golang-bindings/vec-ops"},"next":{"title":"Multi GPU Support","permalink":"/2.8.0/icicle/golang-bindings/multi-gpu"}}');var t=c(4848),r=c(8453);const o={},s="Keccak",a={},l=[{value:"Keccak Example",id:"keccak-example",level:2},{value:"Keccak Methods",id:"keccak-methods",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"HashConfig",id:"hashconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"keccak",children:"Keccak"})}),"\n",(0,t.jsx)(n.h2,{id:"keccak-example",children:"Keccak Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"encoding/hex"\n\n\t"github.com/ingonyama-zk/icicle/v2/wrappers/golang/core"\n\tcr "github.com/ingonyama-zk/icicle/v2/wrappers/golang/cuda_runtime"\n\t"github.com/ingonyama-zk/icicle/v2/wrappers/golang/hash/keccak"\n)\n\nfunc createHostSliceFromHexString(hexString string) core.HostSlice[uint8] {\n\tbyteArray, err := hex.DecodeString(hexString)\n\tif err != nil {\n\t\tpanic("Not a hex string")\n\t}\n\treturn core.HostSliceFromElements([]uint8(byteArray))\n}\n\nfunc main() {\n\tinput := createHostSliceFromHexString("1725b6")\n\toutHost256 := make(core.HostSlice[uint8], 32)\n\n\tcfg := keccak.GetDefaultHashConfig()\n\te := keccak.Keccak256(input, int32(input.Len()), 1, outHost256, &cfg)\n\tif e.CudaErrorCode != cr.CudaSuccess {\n\t\tpanic("Keccak256 hashing failed")\n\t}\n\n\toutHost512 := make(core.HostSlice[uint8], 64)\n\te = keccak.Keccak512(input, int32(input.Len()), 1, outHost512, &cfg)\n\tif e.CudaErrorCode != cr.CudaSuccess {\n\t\tpanic("Keccak512 hashing failed")\n\t}\n\n    numberOfBlocks := 3\n\toutHostBatch256 := make(core.HostSlice[uint8], 32*numberOfBlocks)\n\te = keccak.Keccak256(input, int32(input.Len()/numberOfBlocks), int32(numberOfBlocks), outHostBatch256, &cfg)\n\tif e.CudaErrorCode != cr.CudaSuccess {\n\t\tpanic("Keccak256 batch hashing failed")\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"keccak-methods",children:"Keccak Methods"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func Keccak256(input core.HostOrDeviceSlice, inputBlockSize, numberOfBlocks int32, output core.HostOrDeviceSlice, config *HashConfig) core.IcicleError\nfunc Keccak512(input core.HostOrDeviceSlice, inputBlockSize, numberOfBlocks int32, output core.HostOrDeviceSlice, config *HashConfig) core.IcicleError\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"input"})}),": A slice containing the input data for the Keccak256 hash function. It can reside in either host memory or device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"inputBlockSize"})}),": An integer specifying the size of the input data for a single hash."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"numberOfBlocks"})}),": An integer specifying the number of results in the hash batch."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"output"})}),": A slice where the resulting hash will be stored. This slice can be in host or device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"config"})}),": A pointer to a ",(0,t.jsx)(n.code,{children:"HashConfig"})," object, which contains various configuration options for the Keccak256 operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"CudaError"})}),": Returns a CUDA error code indicating the success or failure of the Keccak256/Keccak512 operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"hashconfig",children:"HashConfig"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"HashConfig"})," structure holds configuration parameters for the Keccak256/Keccak512 operation, allowing customization of its behavior to optimize performance based on the specifics of the operation or the underlying hardware."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type HashConfig struct {\n\tCtx                cr.DeviceContext\n\tareInputsOnDevice  bool\n\tareOutputsOnDevice bool\n\tIsAsync            bool\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Ctx"})}),": Device context containing details like device id and stream."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"areInputsOnDevice"})}),": Indicates if input data is located on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"areOutputsOnDevice"})}),": Indicates if output hash is stored on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IsAsync"})}),": If true, runs the Keccak256/Keccak512 operation asynchronously."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"GetDefaultHashConfig"})," to obtain a default configuration, which can then be customized as needed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func GetDefaultHashConfig() HashConfig\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>o,x:()=>s});var i=c(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);