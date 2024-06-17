"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[59],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(t),d=r,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return t?a.createElement(m,c(c({ref:n},s),{},{components:t})):a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=t[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(8168),r=(t(6540),t(5680));t(1873);const i={},c="Keccak",o={unversionedId:"icicle/golang-bindings/keccak",id:"icicle/golang-bindings/keccak",title:"Keccak",description:"Keccak Example",source:"@site/docs/icicle/golang-bindings/keccak.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/keccak",permalink:"/icicle/golang-bindings/keccak",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/keccak.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1718628255,formattedLastUpdatedAt:"6/17/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Vector Operations",permalink:"/icicle/golang-bindings/vec-ops"},next:{title:"Multi GPU APIs",permalink:"/icicle/golang-bindings/multi-gpu"}},l={},u=[{value:"Keccak Example",id:"keccak-example",level:2},{value:"Keccak Methods",id:"keccak-methods",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"KeccakConfig",id:"keccakconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3}],s={toc:u},g="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"keccak"},"Keccak"),(0,r.yg)("h2",{id:"keccak-example"},"Keccak Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "encoding/hex"\n\n    "github.com/ingonyama-zk/icicle/v2/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/v2/wrappers/golang/cuda_runtime"\n    "github.com/ingonyama-zk/icicle/v2/wrappers/golang/hash/keccak"\n)\n\nfunc createHostSliceFromHexString(hexString string) core.HostSlice[uint8] {\n    byteArray, err := hex.DecodeString(hexString)\n    if err != nil {\n        panic("Not a hex string")\n    }\n    return core.HostSliceFromElements([]uint8(byteArray))\n}\n\nfunc main() {\n    input := createHostSliceFromHexString("1725b6")\n    outHost256 := make(core.HostSlice[uint8], 32)\n\n    cfg := keccak.GetDefaultKeccakConfig()\n    e := keccak.Keccak256(input, int32(input.Len()), 1, outHost256, &cfg)\n    if e.CudaErrorCode != cr.CudaSuccess {\n        panic("Keccak256 hashing failed")\n    }\n\n    outHost512 := make(core.HostSlice[uint8], 64)\n    e = keccak.Keccak512(input, int32(input.Len()), 1, outHost512, &cfg)\n    if e.CudaErrorCode != cr.CudaSuccess {\n        panic("Keccak512 hashing failed")\n    }\n\n    numberOfBlocks := 3\n    outHostBatch256 := make(core.HostSlice[uint8], 32*numberOfBlocks)\n    e = keccak.Keccak256(input, int32(input.Len()/numberOfBlocks), int32(numberOfBlocks), outHostBatch256, &cfg)\n    if e.CudaErrorCode != cr.CudaSuccess {\n        panic("Keccak256 batch hashing failed")\n    }\n}\n')),(0,r.yg)("h2",{id:"keccak-methods"},"Keccak Methods"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"func Keccak256(input core.HostOrDeviceSlice, inputBlockSize, numberOfBlocks int32, output core.HostOrDeviceSlice, config *KeccakConfig) core.IcicleError\nfunc Keccak512(input core.HostOrDeviceSlice, inputBlockSize, numberOfBlocks int32, output core.HostOrDeviceSlice, config *KeccakConfig) core.IcicleError\n")),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"input")),": A slice containing the input data for the Keccak256 hash function. It can reside in either host memory or device memory."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"inputBlockSize")),": An integer specifying the size of the input data for a single hash."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"numberOfBlocks")),": An integer specifying the number of results in the hash batch."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"output")),": A slice where the resulting hash will be stored. This slice can be in host or device memory."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"config")),": A pointer to a ",(0,r.yg)("inlineCode",{parentName:"li"},"KeccakConfig")," object, which contains various configuration options for the Keccak256 operation.")),(0,r.yg)("h3",{id:"return-value"},"Return Value"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"CudaError")),": Returns a CUDA error code indicating the success or failure of the Keccak256/Keccak512 operation.")),(0,r.yg)("h2",{id:"keccakconfig"},"KeccakConfig"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"KeccakConfig")," structure holds configuration parameters for the Keccak256/Keccak512 operation, allowing customization of its behavior to optimize performance based on the specifics of the operation or the underlying hardware."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type KeccakConfig struct {\n    Ctx                cr.DeviceContext\n    areInputsOnDevice  bool\n    areOutputsOnDevice bool\n    IsAsync            bool\n}\n")),(0,r.yg)("h3",{id:"fields"},"Fields"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"Ctx")),": Device context containing details like device id and stream."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"areInputsOnDevice")),": Indicates if input data is located on the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"areOutputsOnDevice")),": Indicates if output hash is stored on the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"IsAsync")),": If true, runs the Keccak256/Keccak512 operation asynchronously.")),(0,r.yg)("h3",{id:"default-configuration"},"Default Configuration"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"GetDefaultKeccakConfig")," to obtain a default configuration, which can then be customized as needed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"func GetDefaultKeccakConfig() KeccakConfig\n")))}p.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);