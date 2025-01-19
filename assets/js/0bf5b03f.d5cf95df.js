"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8583],{1703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"icicle/rust-bindings/ecntt","title":"ECNTT","description":"ECNTT Method","source":"@site/versioned_docs/version-3.2.0/icicle/rust-bindings/ecntt.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/ecntt","permalink":"/3.2.0/icicle/rust-bindings/ecntt","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.2.0/icicle/rust-bindings/ecntt.md","tags":[],"version":"3.2.0","lastUpdatedBy":"Koren-Brand","lastUpdatedAt":1737296485000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"NTT","permalink":"/3.2.0/icicle/rust-bindings/ntt"},"next":{"title":"Vector operations","permalink":"/3.2.0/icicle/rust-bindings/vec-ops"}}');var r=n(4848),c=n(8453);const s={},o="ECNTT",d={},l=[{value:"ECNTT Method",id:"ecntt-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"ecntt",children:"ECNTT"})}),"\n",(0,r.jsx)(t.h2,{id:"ecntt-method",children:"ECNTT Method"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ecntt"})," function computes the Elliptic Curve Number Theoretic Transform (EC-NTT) or its inverse on a batch of points of a curve."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"pub fn ecntt<C: Curve>(\n    input: &(impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n    dir: NTTDir,\n    cfg: &NTTConfig<C::ScalarField>,\n    output: &mut (impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n) -> Result<(), eIcicleError>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"input"})}),": The input data as a slice of ",(0,r.jsx)(t.code,{children:"Projective<C>"}),". This represents points on a specific elliptic curve ",(0,r.jsx)(t.code,{children:"C"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"dir"})}),": The direction of the NTT. It can be ",(0,r.jsx)(t.code,{children:"NTTDir::kForward"})," for forward NTT or ",(0,r.jsx)(t.code,{children:"NTTDir::kInverse"})," for inverse NTT."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"cfg"})}),": The NTT configuration object of type ",(0,r.jsx)(t.code,{children:"NTTConfig<C::ScalarField>"}),". This object specifies parameters for the NTT computation, such as the batch size and algorithm to use."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"output"})}),": The output buffer to write the results into. This should be a slice of ",(0,r.jsx)(t.code,{children:"Projective<C>"})," with the same size as the input."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Result<(), eIcicleError>"})}),": This function returns an ",(0,r.jsx)(t.code,{children:"eIcicleError"})," which is a wrapper type that indicates success or failure of the NTT computation. On success, it contains ",(0,r.jsx)(t.code,{children:"Ok(())"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(6540);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);