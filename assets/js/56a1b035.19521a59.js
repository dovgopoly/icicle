"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[62],{6641:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"icicle/rust-bindings/msm-pre-computation","title":"MSM Pre computation","description":"To understand the theory behind MSM pre computation technique refer to Niall Emmart\'s talk.","source":"@site/versioned_docs/version-1.10.1/icicle/rust-bindings/msm-pre-computation.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/msm-pre-computation","permalink":"/1.10.1/icicle/rust-bindings/msm-pre-computation","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/rust-bindings/msm-pre-computation.md","tags":[],"version":"1.10.1","lastUpdatedBy":"Otsar","lastUpdatedAt":1737035872000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"MSM","permalink":"/1.10.1/icicle/rust-bindings/msm"},"next":{"title":"NTT","permalink":"/1.10.1/icicle/rust-bindings/ntt"}}');var t=n(4848),a=n(8453);const r={},c="MSM Pre computation",l={},m=[{value:"Supported curves",id:"supported-curves",level:3},{value:"<code>precompute_bases</code>",id:"precompute_bases",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Description",id:"description",level:4},{value:"Example Usage",id:"example-usage",level:4},{value:"Benchmarks",id:"benchmarks",level:3}];function h(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"msm-pre-computation",children:"MSM Pre computation"})}),"\n",(0,t.jsxs)(s.p,{children:["To understand the theory behind MSM pre computation technique refer to Niall Emmart's ",(0,t.jsx)(s.a,{href:"https://youtu.be/KAWlySN7Hm8?feature=shared&t=1734",children:"talk"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"supported-curves",children:"Supported curves"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"bls12-377"}),", ",(0,t.jsx)(s.code,{children:"bls12-381"}),", ",(0,t.jsx)(s.code,{children:"bn254"}),", ",(0,t.jsx)(s.code,{children:"bw6-761"}),", ",(0,t.jsx)(s.code,{children:"Grumpkin"})]}),"\n",(0,t.jsx)(s.h3,{id:"precompute_bases",children:(0,t.jsx)(s.code,{children:"precompute_bases"})}),"\n",(0,t.jsx)(s.p,{children:"Precomputes bases for the multi-scalar multiplication (MSM) by extending each base point with its multiples, facilitating more efficient MSM calculations."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:"pub fn precompute_bases<C: Curve + MSM<C>>(\n    points: &HostOrDeviceSlice<Affine<C>>,\n    precompute_factor: i32,\n    _c: i32,\n    ctx: &DeviceContext,\n    output_bases: &mut HostOrDeviceSlice<Affine<C>>,\n) -> IcicleResult<()>\n"})}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"points"})}),": The original set of affine points ((P_1, P_2, ..., P_n)) to be used in the MSM. For batch MSM operations, this should include all unique points concatenated together."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"precompute_factor"})}),": Specifies the total number of points to precompute for each base, including the base point itself. This parameter directly influences the memory requirements and the potential speedup of the MSM operation."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"_c"})}),": Currently unused. Intended for future use to align with the ",(0,t.jsx)(s.code,{children:"c"})," parameter in ",(0,t.jsx)(s.code,{children:"MSMConfig"}),", ensuring the precomputation is compatible with the bucket method's window size used in MSM."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"ctx"})}),": The device context specifying the device ID and stream for execution. This context determines where the precomputation is performed (e.g., on a specific GPU)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"output_bases"})}),": The output buffer for the extended bases. Its size must be ",(0,t.jsx)(s.code,{children:"points.len() * precompute_factor"}),". This buffer should be allocated on the device for GPU computations."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Ok(())"})," if the operation is successful, or an ",(0,t.jsx)(s.code,{children:"IcicleResult"})," error otherwise."]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["This function extends each provided base point ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"P"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"(P)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," with its multiples ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mn,{children:"2"}),(0,t.jsx)(s.mi,{children:"l"})]}),(0,t.jsx)(s.mi,{children:"P"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mn,{children:"2"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mn,{children:"2"}),(0,t.jsx)(s.mi,{children:"l"})]})]}),(0,t.jsx)(s.mi,{children:"P"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mn,{children:"2"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"p"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"m"}),(0,t.jsx)(s.mi,{children:"p"}),(0,t.jsx)(s.mi,{children:"u"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsxs)(s.msub,{children:[(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"f"})]}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mo,{children:"\u2212"}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mo,{children:"\u22c5"}),(0,t.jsx)(s.mi,{children:"l"})]})]}),(0,t.jsx)(s.mi,{children:"P"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"(2^lP, 2^{2l}P, ..., 2^{(precompute_factor - 1) \\cdot l}P)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.138em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord",children:"2"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.8491em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord",children:"2"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.8491em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mtight",children:"2"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord",children:"..."}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord",children:"2"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.888em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mopen mtight",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"p"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"reco"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"m"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"p"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"u"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"t"}),(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"e"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.3448em"},children:(0,t.jsxs)(s.span,{style:{top:"-2.3488em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.5em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size3 size1 mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"f"})})]})}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.2901em"},children:(0,t.jsx)(s.span,{})})})]})})]}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"c"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"or"}),(0,t.jsx)(s.span,{className:"mbin mtight",children:"\u2212"}),(0,t.jsx)(s.span,{className:"mord mtight",children:"1"}),(0,t.jsx)(s.span,{className:"mclose mtight",children:")"}),(0,t.jsx)(s.span,{className:"mbin mtight",children:"\u22c5"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", where ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"(l)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," is a level of precomputation determined by the ",(0,t.jsx)(s.code,{children:"precompute_factor"}),". The extended set of points facilitates faster MSM computations by allowing the MSM algorithm to leverage precomputed multiples of base points, reducing the number of point additions required during the computation."]}),"\n",(0,t.jsx)(s.p,{children:"The precomputation process is crucial for optimizing MSM operations, especially when dealing with large sets of points and scalars. By precomputing and storing multiples of the base points, the MSM function can more efficiently compute the scalar-point multiplications."}),"\n",(0,t.jsx)(s.h4,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'let device_context = DeviceContext::default_for_device(0); // Use the default device\nlet precompute_factor = 4; // Number of points to precompute\nlet mut extended_bases = HostOrDeviceSlice::cuda_malloc(expected_size).expect("Failed to allocate memory for extended bases");\n\n// Precompute the bases using the specified factor\nprecompute_bases(&points, precompute_factor, 0, &device_context, &mut extended_bases)\n    .expect("Failed to precompute bases");\n'})}),"\n",(0,t.jsx)(s.h3,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,t.jsx)(s.p,{children:"Benchmarks where performed on a Nvidia RTX 3090Ti."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Pre-computation factor"}),(0,t.jsxs)(s.th,{children:["bn254 size ",(0,t.jsx)(s.code,{children:"2^20"})," MSM, ms."]}),(0,t.jsxs)(s.th,{children:["bn254 size ",(0,t.jsx)(s.code,{children:"2^12"})," MSM, size ",(0,t.jsx)(s.code,{children:"2^10"})," batch, ms."]}),(0,t.jsxs)(s.th,{children:["bls12-381 size ",(0,t.jsx)(s.code,{children:"2^20"})," MSM, ms."]}),(0,t.jsxs)(s.th,{children:["bls12-381 size ",(0,t.jsx)(s.code,{children:"2^12"})," MSM, size ",(0,t.jsx)(s.code,{children:"2^10"})," batch, ms."]})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"14.1"}),(0,t.jsx)(s.td,{children:"82.8"}),(0,t.jsx)(s.td,{children:"25.5"}),(0,t.jsx)(s.td,{children:"136.7"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"11.8"}),(0,t.jsx)(s.td,{children:"76.6"}),(0,t.jsx)(s.td,{children:"20.3"}),(0,t.jsx)(s.td,{children:"123.8"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"10.9"}),(0,t.jsx)(s.td,{children:"73.8"}),(0,t.jsx)(s.td,{children:"18.1"}),(0,t.jsx)(s.td,{children:"117.8"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"8"}),(0,t.jsx)(s.td,{children:"10.6"}),(0,t.jsx)(s.td,{children:"73.7"}),(0,t.jsx)(s.td,{children:"17.2"}),(0,t.jsx)(s.td,{children:"116.0"})]})]})]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(6540);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);