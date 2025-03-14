"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8106],{62938:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"icicle/golang-bindings/msm-pre-computation","title":"MSM Pre computation","description":"To understand the theory behind MSM pre computation technique refer to Niall Emmart\'s talk.","source":"@site/versioned_docs/version-3.6.0/icicle/golang-bindings/msm-pre-computation.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/msm-pre-computation","permalink":"/icicle/golang-bindings/msm-pre-computation","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.6.0/icicle/golang-bindings/msm-pre-computation.md","tags":[],"version":"3.6.0","lastUpdatedBy":"release-bot","lastUpdatedAt":1741983600000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"MSM","permalink":"/icicle/golang-bindings/msm"},"next":{"title":"NTT","permalink":"/icicle/golang-bindings/ntt"}}');var i=n(74848),t=n(28453);const r={},c="MSM Pre computation",l={},m=[{value:"Core package",id:"core-package",level:2},{value:"MSM PrecomputeBases",id:"msm-precomputebases",level:3},{value:"Description",id:"description",level:4},{value:"<code>PrecomputeBases</code>",id:"precomputebases",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Example",id:"example",level:5},{value:"<code>G2PrecomputeBases</code>",id:"g2precomputebases",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Example",id:"example-1",level:5}];function o(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"msm-pre-computation",children:"MSM Pre computation"})}),"\n",(0,i.jsxs)(s.p,{children:["To understand the theory behind MSM pre computation technique refer to Niall Emmart's ",(0,i.jsx)(s.a,{href:"https://youtu.be/KAWlySN7Hm8?feature=shared&t=1734",children:"talk"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"core-package",children:"Core package"}),"\n",(0,i.jsx)(s.h3,{id:"msm-precomputebases",children:"MSM PrecomputeBases"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"PrecomputeBases"})," and ",(0,i.jsx)(s.code,{children:"G2PrecomputeBases"})," exists for all supported curves."]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["This function extends each provided base point ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"P"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"(P)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})," with its multiples ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsx)(s.mi,{children:"l"})]}),(0,i.jsx)(s.mi,{children:"P"}),(0,i.jsx)(s.mo,{separator:"true",children:","}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsx)(s.mi,{children:"l"})]})]}),(0,i.jsx)(s.mi,{children:"P"}),(0,i.jsx)(s.mo,{separator:"true",children:","}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(s.mo,{separator:"true",children:","}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mn,{children:"2"}),(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"p"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"m"}),(0,i.jsx)(s.mi,{children:"p"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsxs)(s.msub,{children:[(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"f"})]}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mo,{children:"\u2212"}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"}),(0,i.jsx)(s.mo,{children:"\u22c5"}),(0,i.jsx)(s.mi,{children:"l"})]})]}),(0,i.jsx)(s.mi,{children:"P"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"(2^lP, 2^{2l}P, ..., 2^{(precompute_factor - 1) \\cdot l}P)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1.138em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord",children:"2"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8491em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})})]})})})})})]}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(s.span,{className:"mpunct",children:","}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord",children:"2"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8491em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(s.span,{className:"mord mtight",children:[(0,i.jsx)(s.span,{className:"mord mtight",children:"2"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})})})})})]}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(s.span,{className:"mpunct",children:","}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(s.span,{className:"mord",children:"..."}),(0,i.jsx)(s.span,{className:"mpunct",children:","}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord",children:"2"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.888em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(s.span,{className:"mord mtight",children:[(0,i.jsx)(s.span,{className:"mopen mtight",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"p"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"reco"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"m"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"p"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"t"}),(0,i.jsxs)(s.span,{className:"mord mtight",children:[(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"e"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(s.span,{className:"vlist-r",children:[(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.3448em"},children:(0,i.jsxs)(s.span,{style:{top:"-2.3488em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.5em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size3 size1 mtight",children:(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"f"})})]})}),(0,i.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.2901em"},children:(0,i.jsx)(s.span,{})})})]})})]}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"c"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"or"}),(0,i.jsx)(s.span,{className:"mbin mtight",children:"\u2212"}),(0,i.jsx)(s.span,{className:"mord mtight",children:"1"}),(0,i.jsx)(s.span,{className:"mclose mtight",children:")"}),(0,i.jsx)(s.span,{className:"mbin mtight",children:"\u22c5"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})})})})})]}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", where ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"(l)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})," is a level of precomputation determined by the ",(0,i.jsx)(s.code,{children:"precompute_factor"}),". The extended set of points facilitates faster MSM computations by allowing the MSM algorithm to leverage precomputed multiples of base points, reducing the number of point additions required during the computation."]}),"\n",(0,i.jsx)(s.p,{children:"The precomputation process is crucial for optimizing MSM operations, especially when dealing with large sets of points and scalars. By precomputing and storing multiples of the base points, the MSM function can more efficiently compute the scalar-point multiplications."}),"\n",(0,i.jsx)(s.h4,{id:"precomputebases",children:(0,i.jsx)(s.code,{children:"PrecomputeBases"})}),"\n",(0,i.jsx)(s.p,{children:"Precomputes points for MSM by extending each base point with its multiples."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"func PrecomputeBases(bases core.HostOrDeviceSlice, cfg *core.MSMConfig, outputBases core.DeviceSlice) runtime.EIcicleError\n"})}),"\n",(0,i.jsx)(s.h5,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"bases"})}),": A slice of the original affine points to be extended with their multiples."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"cfg"})}),": The MSM configuration parameters."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"outputBases"})}),": The device slice allocated for storing the extended points."]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/msm"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n\t// Load backend using env path\n\truntime.LoadBackendFromEnvOrDefault()\n\t// Set Cuda device to perform\n\tdevice := runtime.CreateDevice("CUDA", 0)\n\truntime.SetDevice(&device)\n\n\tcfg := core.GetDefaultMSMConfig()\n\tpoints := bn254.GenerateAffinePoints(1024)\n\tcfg.PrecomputeFactor = 8\n\tvar precomputeOut core.DeviceSlice\n\tprecomputeOut.Malloc(points[0].Size(), points.Len()*int(cfg.PrecomputeFactor))\n\n\terr := msm.PrecomputeBases(points, &cfg, precomputeOut)\n\tif err != runtime.Success {\n\t\tlog.Fatalf("PrecomputeBases failed: %v", err)\n\t}\n}\n'})}),"\n",(0,i.jsx)(s.h4,{id:"g2precomputebases",children:(0,i.jsx)(s.code,{children:"G2PrecomputeBases"})}),"\n",(0,i.jsxs)(s.p,{children:["This method is the same as ",(0,i.jsx)(s.code,{children:"PrecomputePoints"})," but for G2 points. Extends each G2 curve base point with its multiples for optimized MSM computations."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"func G2PrecomputeBases(bases core.HostOrDeviceSlice, cfg *core.MSMConfig, outputBases core.DeviceSlice) runtime.EIcicleError\n"})}),"\n",(0,i.jsx)(s.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"bases"})}),": A slice of the original affine points to be extended with their multiples."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"cfg"})}),": The MSM configuration parameters."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"outputBases"})}),": The device slice allocated for storing the extended points."]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/g2"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n\t// Load backend using env path\n\truntime.LoadBackendFromEnvOrDefault()\n\t// Set Cuda device to perform\n\tdevice := runtime.CreateDevice("CUDA", 0)\n\truntime.SetDevice(&device)\n\n\tcfg := core.GetDefaultMSMConfig()\n\tpoints := g2.G2GenerateAffinePoints(1024)\n\tcfg.PrecomputeFactor = 8\n\tvar precomputeOut core.DeviceSlice\n\tprecomputeOut.Malloc(points[0].Size(), points.Len()*int(cfg.PrecomputeFactor))\n\n\terr := g2.G2PrecomputeBases(points, &cfg, precomputeOut)\n\tif err != runtime.Success {\n\t\tlog.Fatalf("PrecomputeBases failed: %v", err)\n\t}\n}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var a=n(96540);const i={},t=a.createContext(i);function r(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);