"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8411],{3091:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"icicle/rust-bindings/ecntt","title":"ECNTT","description":"ECNTT Method","source":"@site/versioned_docs/version-2.8.0/icicle/rust-bindings/ecntt.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/ecntt","permalink":"/2.8.0/icicle/rust-bindings/ecntt","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/rust-bindings/ecntt.md","tags":[],"version":"2.8.0","lastUpdatedBy":"idanfr-ingo","lastUpdatedAt":1739365935000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"NTT","permalink":"/2.8.0/icicle/rust-bindings/ntt"},"next":{"title":"Vector operations","permalink":"/2.8.0/icicle/rust-bindings/vec-ops"}}');var c=i(4848),r=i(8453);const s={},o="ECNTT",l={},d=[{value:"ECNTT Method",id:"ecntt-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"ecntt",children:"ECNTT"})}),"\n",(0,c.jsx)(n.h2,{id:"ecntt-method",children:"ECNTT Method"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"ecntt"})," function computes the Elliptic Curve Number Theoretic Transform (EC-NTT) or its inverse on a batch of points of a curve."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:"pub fn ecntt<C: Curve>(\n    input: &(impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n    dir: NTTDir,\n    cfg: &NTTConfig<C::ScalarField>,\n    output: &mut (impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n) -> IcicleResult<()>\nwhere\n    C::ScalarField: FieldImpl,\n    <C::ScalarField as FieldImpl>::Config: ECNTT<C>,\n{\n    // ... function implementation ...\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"input"})}),": The input data as a slice of ",(0,c.jsx)(n.code,{children:"Projective<C>"}),". This represents points on a specific elliptic curve ",(0,c.jsx)(n.code,{children:"C"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"dir"})}),": The direction of the NTT. It can be ",(0,c.jsx)(n.code,{children:"NTTDir::kForward"})," for forward NTT or ",(0,c.jsx)(n.code,{children:"NTTDir::kInverse"})," for inverse NTT."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"cfg"})}),": The NTT configuration object of type ",(0,c.jsx)(n.code,{children:"NTTConfig<C::ScalarField>"}),". This object specifies parameters for the NTT computation, such as the batch size and algorithm to use."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"output"})}),": The output buffer to write the results into. This should be a slice of ",(0,c.jsx)(n.code,{children:"Projective<C>"})," with the same size as the input."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"IcicleResult<()>"})}),": This function returns an ",(0,c.jsx)(n.code,{children:"IcicleResult"})," which is a wrapper type that indicates success or failure of the NTT computation. On success, it contains ",(0,c.jsx)(n.code,{children:"Ok(())"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(6540);const c={},r=t.createContext(c);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);