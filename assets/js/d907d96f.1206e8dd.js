"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[7092],{4567:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"icicle/primitives/msm","title":"MSM - Multi scalar multiplication","description":"MSM stands for Multi scalar multiplication, its defined as:","source":"@site/versioned_docs/version-1.10.1/icicle/primitives/msm.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/msm","permalink":"/1.10.1/icicle/primitives/msm","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/primitives/msm.md","tags":[],"version":"1.10.1","lastUpdatedBy":"yshekel","lastUpdatedAt":1736956357000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"ICICLE Primitives","permalink":"/1.10.1/icicle/primitives/overview"},"next":{"title":"NTT","permalink":"/1.10.1/icicle/primitives/ntt"}}');var n=i(4848),l=i(8453);const t={},c="MSM - Multi scalar multiplication",r={},m=[{value:"Supported curves",id:"supported-curves",level:2},{value:"Supported Bindings",id:"supported-bindings",level:2},{value:"Supported algorithms",id:"supported-algorithms",level:2},{value:"Bucket accumulation",id:"bucket-accumulation",level:3},{value:"When should I use Bucket accumulation?",id:"when-should-i-use-bucket-accumulation",level:4},{value:"Large triangle accumulation",id:"large-triangle-accumulation",level:3},{value:"When should I use Large triangle accumulation?",id:"when-should-i-use-large-triangle-accumulation",level:4},{value:"MSM Modes",id:"msm-modes",level:2},{value:"Which mode should I use?",id:"which-mode-should-i-use",level:3}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"msm---multi-scalar-multiplication",children:"MSM - Multi scalar multiplication"})}),"\n",(0,n.jsx)(e.p,{children:"MSM stands for Multi scalar multiplication, its defined as:"}),"\n",(0,n.jsxs)("math",{xmlns:"http://www.w3.org/1998/Math/MathML",children:[(0,n.jsx)("mi",{children:"M"}),(0,n.jsx)("mi",{children:"S"}),(0,n.jsx)("mi",{children:"M"}),(0,n.jsx)("mo",{stretchy:"false",children:"("}),(0,n.jsx)("mi",{children:"a"}),(0,n.jsx)("mo",{children:","}),(0,n.jsx)("mi",{children:"G"}),(0,n.jsx)("mo",{stretchy:"false",children:")"}),(0,n.jsx)("mo",{children:"="}),(0,n.jsxs)("munderover",{children:[(0,n.jsx)("mo",{"data-mjx-texclass":"OP",movablelimits:"false",children:"\u2211"}),(0,n.jsxs)("mrow",{"data-mjx-texclass":"ORD",children:[(0,n.jsx)("mi",{children:"j"}),(0,n.jsx)("mo",{children:"="}),(0,n.jsx)("mn",{children:"0"})]}),(0,n.jsxs)("mrow",{"data-mjx-texclass":"ORD",children:[(0,n.jsx)("mi",{children:"n"}),(0,n.jsx)("mo",{children:"\u2212"}),(0,n.jsx)("mn",{children:"1"})]})]}),(0,n.jsxs)("msub",{children:[(0,n.jsx)("mi",{children:"a"}),(0,n.jsx)("mi",{children:"j"})]}),(0,n.jsxs)("msub",{children:[(0,n.jsx)("mi",{children:"G"}),(0,n.jsx)("mi",{children:"j"})]})]}),"\n",(0,n.jsx)(e.p,{children:"Where"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"G"}),(0,n.jsx)(e.mi,{children:"j"})]}),(0,n.jsx)(e.mo,{children:"\u2208"}),(0,n.jsx)(e.mi,{children:"G"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"G_j \\in G"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"G"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2208"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"G"})]})]})]})," - points from an Elliptic Curve group."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mn,{children:"0"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mo,{children:"\u2026"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"a_0, \\ldots, a_n"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"minner",children:"\u2026"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," - Scalars"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"G"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2208"}),(0,n.jsx)(e.mi,{children:"G"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"MSM(a, G) \\in G"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"MSM"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"G"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2208"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"G"})]})]})]})," - a single EC (elliptic curve) point"]}),"\n",(0,n.jsx)(e.p,{children:"In words, MSM is the sum of scalar and EC point multiplications. We can see from this definition that the core operations occurring are Modular Multiplication and Elliptic curve point addition. Its obvious that multiplication can be computed in parallel and then the products summed, making MSM inherently parallelizable."}),"\n",(0,n.jsxs)(e.p,{children:["Accelerating MSM is crucial to a ZK protocol's performance due to the ",(0,n.jsx)(e.a,{href:"https://hackmd.io/@0xMonia/SkQ6-oRz3#Hardware-acceleration-in-action",children:"large percent of run time"})," they take when generating proofs."]}),"\n",(0,n.jsxs)(e.p,{children:["You can learn more about how MSMs work from this ",(0,n.jsx)(e.a,{href:"https://www.youtube.com/watch?v=Bl5mQA7UL2I",children:"video"})," and from our resource list on ",(0,n.jsx)(e.a,{href:"https://www.ingonyama.com/ingopedia/msm",children:"Ingopedia"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"supported-curves",children:"Supported curves"}),"\n",(0,n.jsx)(e.p,{children:"MSM supports the following curves:"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"bls12-377"}),", ",(0,n.jsx)(e.code,{children:"bls12-381"}),", ",(0,n.jsx)(e.code,{children:"bn254"}),", ",(0,n.jsx)(e.code,{children:"bw6-761"}),", ",(0,n.jsx)(e.code,{children:"grumpkin"})]}),"\n",(0,n.jsx)(e.h2,{id:"supported-bindings",children:"Supported Bindings"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/1.10.1/icicle/golang-bindings/msm",children:"Golang"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/1.10.1/icicle/rust-bindings/msm",children:"Rust"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"supported-algorithms",children:"Supported algorithms"}),"\n",(0,n.jsxs)(e.p,{children:["Our MSM implementation supports two algorithms ",(0,n.jsx)(e.code,{children:"Bucket accumulation"})," and ",(0,n.jsx)(e.code,{children:"Large triangle accumulation"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"bucket-accumulation",children:"Bucket accumulation"}),"\n",(0,n.jsx)(e.p,{children:'The Bucket Accumulation algorithm is a method of dividing the overall MSM task into smaller, more manageable sub-tasks. It involves partitioning scalars and their corresponding points into different "buckets" based on the scalar values.'}),"\n",(0,n.jsx)(e.p,{children:"Bucket Accumulation can be more parallel-friendly because it involves dividing the computation into smaller, independent tasks, distributing scalar-point pairs into buckets and summing points within each bucket. This division makes it well suited for parallel processing on GPUs."}),"\n",(0,n.jsx)(e.h4,{id:"when-should-i-use-bucket-accumulation",children:"When should I use Bucket accumulation?"}),"\n",(0,n.jsx)(e.p,{children:"In scenarios involving large MSM computations with many scalar-point pairs, the ability to parallelize operations makes Bucket Accumulation more efficient. The larger the MSM task, the more significant the potential gains from parallelization."}),"\n",(0,n.jsx)(e.h3,{id:"large-triangle-accumulation",children:"Large triangle accumulation"}),"\n",(0,n.jsx)(e.p,{children:"Large Triangle Accumulation is a method for optimizing MSM which focuses on reducing the number of point doublings in the computation. This algorithm is based on the observation that the number of point doublings can be minimized by structuring the computation in a specific manner."}),"\n",(0,n.jsx)(e.h4,{id:"when-should-i-use-large-triangle-accumulation",children:"When should I use Large triangle accumulation?"}),"\n",(0,n.jsxs)(e.p,{children:["The Large Triangle Accumulation algorithm is more sequential in nature, as it builds upon each step sequentially (accumulating sums and then performing doubling). This structure can make it less suitable for parallelization but potentially more efficient for a ",(0,n.jsx)("b",{children:"large batch of smaller MSM computations"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"msm-modes",children:"MSM Modes"}),"\n",(0,n.jsxs)(e.p,{children:["ICICLE MSM also supports two different modes ",(0,n.jsx)(e.code,{children:"Batch MSM"})," and ",(0,n.jsx)(e.code,{children:"Single MSM"})]}),"\n",(0,n.jsx)(e.p,{children:"Batch MSM allows you to run many MSMs with a single API call, Single MSM will launch a single MSM computation."}),"\n",(0,n.jsx)(e.h3,{id:"which-mode-should-i-use",children:"Which mode should I use?"}),"\n",(0,n.jsx)(e.p,{children:"This decision is highly dependent on your use case and design. However, if your design allows for it, using batch mode can significantly improve efficiency. Batch processing allows you to perform multiple MSMs leveraging the parallel processing capabilities of GPUs."}),"\n",(0,n.jsx)(e.p,{children:"Single MSM mode should be used when batching isn't possible or when you have to run a single MSM."})]})}function o(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},8453:(s,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var a=i(6540);const n={},l=a.createContext(n);function t(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:t(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);