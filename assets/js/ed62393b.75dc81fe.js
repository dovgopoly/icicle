"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[3087],{7984:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"icicle/primitives/merkle","title":"Merkle Tree API Documentation","description":"What is a Merkle Tree?","source":"@site/versioned_docs/version-3.2.0/icicle/primitives/merkle.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/merkle","permalink":"/icicle/primitives/merkle","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.2.0/icicle/primitives/merkle.md","tags":[],"version":"3.2.0","lastUpdatedBy":"ShaniBabayoff","lastUpdatedAt":1735128141000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Poseidon2","permalink":"/icicle/primitives/poseidon2"},"next":{"title":"Golang bindings","permalink":"/icicle/golang-bindings"}}');var i=n(4848),r=n(8453);const l={},t="Merkle Tree API Documentation",m={},c=[{value:"What is a Merkle Tree?",id:"what-is-a-merkle-tree",level:2},{value:"Tree Structure and Configuration",id:"tree-structure-and-configuration",level:2},{value:"Structure Definition",id:"structure-definition",level:3},{value:"Defining a Merkle Tree",id:"defining-a-merkle-tree",level:3},{value:"Building the Tree",id:"building-the-tree",level:3},{value:"Tree Examples",id:"tree-examples",level:2},{value:"Example A: Binary Tree",id:"example-a-binary-tree",level:3},{value:"Example B: Tree with Arity 4",id:"example-b-tree-with-arity-4",level:3},{value:"Padding",id:"padding",level:2},{value:"Root as Commitment",id:"root-as-commitment",level:2},{value:"Generating Merkle Proofs",id:"generating-merkle-proofs",level:2},{value:"Example: Generating a Proof",id:"example-generating-a-proof",level:3},{value:"Verifying Merkle Proofs",id:"verifying-merkle-proofs",level:2},{value:"Example: Verifying a Proof",id:"example-verifying-a-proof",level:3},{value:"Pruned vs. Full Merkle-paths",id:"pruned-vs-full-merkle-paths",level:2},{value:"Handling Partial Tree Storage",id:"handling-partial-tree-storage",level:2}];function h(e){const s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"merkle-tree-api-documentation",children:"Merkle Tree API Documentation"})}),"\n",(0,i.jsx)(s.h2,{id:"what-is-a-merkle-tree",children:"What is a Merkle Tree?"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"Merkle tree"})," is a cryptographic data structure that allows for ",(0,i.jsx)(s.strong,{children:"efficient verification of data integrity"}),". It consists of:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Leaf nodes"}),", each containing a piece of data."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Internal nodes"}),", which store the ",(0,i.jsx)(s.strong,{children:"hashes of their child nodes"}),", make up the layers leading to the ",(0,i.jsx)(s.strong,{children:"root node"})," which is the cryptographic commitment."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"tree-structure-and-configuration",children:"Tree Structure and Configuration"}),"\n",(0,i.jsx)(s.h3,{id:"structure-definition",children:"Structure Definition"}),"\n",(0,i.jsxs)(s.p,{children:["With ICICLE, you have the ",(0,i.jsx)(s.strong,{children:"flexibility"})," to build various tree topologies based on your needs. A tree is defined by:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Hasher per layer"})," (",(0,i.jsx)(s.a,{href:"/icicle/primitives/hash",children:"Link to Hasher API"}),") with a ",(0,i.jsx)(s.strong,{children:"default input size"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Size of a leaf element"})," (in bytes): This defines the ",(0,i.jsx)(s.strong,{children:"granularity"})," of the data used for opening proofs."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"root node"})," is assumed to be a single node. The ",(0,i.jsx)(s.strong,{children:"height of the tree"})," is determined by the ",(0,i.jsx)(s.strong,{children:"number of layers"}),".\nEach layer's ",(0,i.jsx)(s.strong,{children:"arity"})," is calculated as:"]}),"\n",(0,i.jsx)(s.span,{className:"katex-display",children:(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsxs)(s.msub,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"y"})]}),(0,i.jsx)(s.mi,{children:"i"})]}),(0,i.jsx)(s.mo,{children:"="}),(0,i.jsxs)(s.mfrac,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"y"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"s"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"["}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"p"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"z"}),(0,i.jsx)(s.mi,{children:"e"})]}),(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"y"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"s"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"["}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mo,{children:"\u2212"}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"p"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"z"}),(0,i.jsx)(s.mi,{children:"e"})]})]})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"{arity}_i = \\frac{layers[i].inputSize}{layers[i-1].outputSize}"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.9037em",verticalAlign:"-0.2441em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(s.span,{className:"vlist-r",children:[(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.2175em"},children:(0,i.jsxs)(s.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,i.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.2441em"},children:(0,i.jsx)(s.span,{})})})]})})]}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"="}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"2.363em",verticalAlign:"-0.936em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(s.span,{className:"mfrac",children:(0,i.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(s.span,{className:"vlist-r",children:[(0,i.jsxs)(s.span,{className:"vlist",style:{height:"1.427em"},children:[(0,i.jsxs)(s.span,{style:{top:"-2.314em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"yers"}),(0,i.jsx)(s.span,{className:"mopen",children:"["}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:"]"}),(0,i.jsx)(s.span,{className:"mord",children:"."}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"tp"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"tS"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ze"})]})]}),(0,i.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(s.span,{style:{top:"-3.677em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"yers"}),(0,i.jsx)(s.span,{className:"mopen",children:"["}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mclose",children:"]"}),(0,i.jsx)(s.span,{className:"mord",children:"."}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"in"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"tS"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ze"})]})]})]}),(0,i.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.936em"},children:(0,i.jsx)(s.span,{})})})]})}),(0,i.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,i.jsxs)(s.p,{children:["For ",(0,i.jsx)(s.strong,{children:"layer 0"}),":"]}),"\n",(0,i.jsx)(s.span,{className:"katex-display",children:(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsxs)(s.msub,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"y"})]}),(0,i.jsx)(s.mn,{children:"0"})]}),(0,i.jsx)(s.mo,{children:"="}),(0,i.jsxs)(s.mfrac,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"y"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"s"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"["}),(0,i.jsx)(s.mn,{children:"0"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"p"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"z"}),(0,i.jsx)(s.mi,{children:"e"})]}),(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"f"}),(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"z"}),(0,i.jsx)(s.mi,{children:"e"})]})]})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"{arity}_0 = \\frac{layers[0].inputSize}{leafSize}"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.9037em",verticalAlign:"-0.2441em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(s.span,{className:"vlist-r",children:[(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.207em"},children:(0,i.jsxs)(s.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"0"})})]})}),(0,i.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.2441em"},children:(0,i.jsx)(s.span,{})})})]})})]}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"="}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"2.3074em",verticalAlign:"-0.8804em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(s.span,{className:"mfrac",children:(0,i.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(s.span,{className:"vlist-r",children:[(0,i.jsxs)(s.span,{className:"vlist",style:{height:"1.427em"},children:[(0,i.jsxs)(s.span,{style:{top:"-2.314em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ze"})]})]}),(0,i.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(s.span,{style:{top:"-3.677em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"yers"}),(0,i.jsx)(s.span,{className:"mopen",children:"["}),(0,i.jsx)(s.span,{className:"mord",children:"0"}),(0,i.jsx)(s.span,{className:"mclose",children:"]"}),(0,i.jsx)(s.span,{className:"mord",children:"."}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"in"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"tS"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ze"})]})]})]}),(0,i.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8804em"},children:(0,i.jsx)(s.span,{})})})]})}),(0,i.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Each layer has a shrinking-factor defined by ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsxs)(s.mfrac,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"y"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"p"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"z"}),(0,i.jsx)(s.mi,{children:"e"})]}),(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"y"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"p"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"z"}),(0,i.jsx)(s.mi,{children:"e"})]})]})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\frac{layer.outputSize}{layer.inputSize}"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1.4133em",verticalAlign:"-0.4811em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(s.span,{className:"mfrac",children:(0,i.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(s.span,{className:"vlist-r",children:[(0,i.jsxs)(s.span,{className:"vlist",style:{height:"0.9322em"},children:[(0,i.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(s.span,{className:"mord mtight",children:[(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"yer"}),(0,i.jsx)(s.span,{className:"mord mtight",children:"."}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"in"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"p"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05764em"},children:"tS"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"ze"})]})})]}),(0,i.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(s.span,{style:{top:"-3.4461em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(s.span,{className:"mord mtight",children:[(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"yer"}),(0,i.jsx)(s.span,{className:"mord mtight",children:"."}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"o"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"tp"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05764em"},children:"tS"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"ze"})]})})]})]}),(0,i.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.4811em"},children:(0,i.jsx)(s.span,{})})})]})}),(0,i.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]}),".\nThis factor is used to compute the input size, assuming a single root node."]})}),"\n",(0,i.jsx)(s.p,{children:"When dealing with very large Merkle trees, storing the entire tree can be memory-intensive. To manage this, ICICLE allows users to store only the upper layers of the tree while omitting the lower layers, which can be recomputed later as needed. This approach conserves memory but requires recomputing the omitted layers when generating Merkle proofs."}),"\n",(0,i.jsx)(s.h3,{id:"defining-a-merkle-tree",children:"Defining a Merkle Tree"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"// icicle/merkle/merkle_tree.h\nstatic MerkleTree create(\n    const std::vector<Hash>& layer_hashers,\n    uint64_t leaf_element_size,\n    uint64_t output_store_min_layer = 0);\n"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"output_store_min_layer"})," parameter defines the lowest layer that will be stored in memory. Layers below this value will not be stored, saving memory at the cost of additional computation when proofs are generated."]}),"\n",(0,i.jsx)(s.h3,{id:"building-the-tree",children:"Building the Tree"}),"\n",(0,i.jsx)(s.p,{children:"The Merkle tree can be constructed from input data of any type, allowing flexibility in its usage. The size of the input must align with the tree structure defined by the hash layers and leaf size. If the input size does not match the expected size, padding may be applied."}),"\n",(0,i.jsxs)(s.p,{children:["Refer to the ",(0,i.jsx)(s.a,{href:"#padding",children:"Padding Section"})," for more details on how mismatched input sizes are handled."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"// icicle/merkle/merkle_tree.h\ninline eIcicleError build(\n    const std::byte* leaves,\n    uint64_t leaves_size,\n    const MerkleTreeConfig& config);\n\ntemplate <typename T>\ninline eIcicleError build(\n    const T* leaves,\n    uint64_t nof_leaves,\n    const MerkleTreeConfig& config);\n"})}),"\n",(0,i.jsx)(s.h2,{id:"tree-examples",children:"Tree Examples"}),"\n",(0,i.jsx)(s.h3,{id:"example-a-binary-tree",children:"Example A: Binary Tree"}),"\n",(0,i.jsxs)(s.p,{children:["A binary tree with ",(0,i.jsx)(s.strong,{children:"5 layers"}),", using ",(0,i.jsx)(s.strong,{children:"Keccak-256"}),":"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Merkle Tree Diagram",src:n(7309).A+"",width:"1539",height:"968"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"const uint64_t leaf_size = 1024;\n// Allocate a dummy input. It can be any type as long as the total size matches.\nconst uint32_t max_input_size = leaf_size * 16;\nauto input = std::make_unique<uint64_t[]>(max_input_size / sizeof(uint64_t));\n\n// Define hashers\nauto hash = Keccak256::create(leaf_size); // hash 1KB -> 32B\nauto compress = Keccak256::create(2 * hasher.output_size()); // hash every 64B to 32B\n\n// Construct the tree using the layer hashers and leaf-size\nstd::vector<Hash> hashers = {hasher, compress, compress, compress, compress};\nauto merkle_tree = MerkleTree::create(hashers, leaf_size);\n\n// compute the tree\nmerkle_tree.build(input.get(), max_input_size / sizeof(uint64_t), default_merkle_tree_config());\n"})}),"\n",(0,i.jsx)(s.h3,{id:"example-b-tree-with-arity-4",children:"Example B: Tree with Arity 4"}),"\n",(0,i.jsxs)(s.p,{children:["This example uses ",(0,i.jsx)(s.strong,{children:"Blake2s"})," in the upper layer:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Merkle Tree Diagram",src:n(6630).A+"",width:"1532",height:"621"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:'#include "icicle/merkle/merkle_tree.h"\n\nconst uint64_t leaf_size = 1024;\nconst uint32_t max_input_size = leaf_size * 16;\nauto input = std::make_unique<uint64_t[]>(max_input_size / sizeof(uint64_t));\n\n// note here we use Blake2S for the upper layer\nauto hash = Keccak256::create(leaf_size);\nauto compress = Blake2s::create(4 * hash.output_size());\n\nstd::vector<Hash> hashers = {hash, compress, compress};\nauto merkle_tree = MerkleTree::create(hashers, leaf_size);\n\nmerkle_tree.build(input.get(), max_input_size / sizeof(uint64_t), default_merkle_tree_config());\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Any combination of hashers is valid including ",(0,i.jsx)(s.strong,{children:"Poseidon"})," that computes on field elements."]})}),"\n",(0,i.jsx)(s.h2,{id:"padding",children:"Padding"}),"\n",(0,i.jsxs)(s.p,{children:["When the input for ",(0,i.jsx)(s.strong,{children:"layer 0"})," is smaller than expected, ICICLE can apply ",(0,i.jsx)(s.strong,{children:"padding"})," to align the data."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Padding Schemes:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Zero padding:"})," Adds zeroes to the remaining space."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Repeat last leaf:"})," The final leaf element is repeated to fill the remaining space."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"auto config = default_merkle_tree_config();\nconfig.padding_policy = PaddingPolicy::ZeroPadding;\nmerkle_tree.build(input.get(), max_input_size / sizeof(uint64_t), config);\n"})}),"\n",(0,i.jsx)(s.h2,{id:"root-as-commitment",children:"Root as Commitment"}),"\n",(0,i.jsx)(s.p,{children:"Retrieve the Merkle-root and serialize."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"/**\n * @brief Returns a pair containing the pointer to the root (ON HOST) data and its size.\n * @return A pair of (root data pointer, root size).\n */\ninline std::pair<const std::byte*, size_t> get_merkle_root() const;\n\nauto [commitment, size] = merkle_tree.get_merkle_root();\nserialize_commitment_application_code(...);\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"The commitment can be serialized to the proof. This is not handled by ICICLE."})}),"\n",(0,i.jsx)(s.h2,{id:"generating-merkle-proofs",children:"Generating Merkle Proofs"}),"\n",(0,i.jsxs)(s.p,{children:["Merkle proofs are used to ",(0,i.jsx)(s.strong,{children:"prove the integrity of opened leaves"})," in a Merkle tree. A proof ensures that a specific leaf belongs to the committed data by enabling the verifier to reconstruct the ",(0,i.jsx)(s.strong,{children:"root hash (commitment)"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"A Merkle proof contains:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Leaf"}),": The data being verified."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Index"})," (leaf_idx): The position of the leaf in the original dataset."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Path"}),": A sequence of sibling hashes (tree nodes) needed to recompute the path from the leaf to the root."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Merkle Pruned Phat Diagram",src:n(7003).A+"",width:"1523",height:"723"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"// icicle/merkle/merkle_proof.h\nclass MerkleProof {\n    // Represents the Merkle proof with leaf, root, and path data.\n};\n"})}),"\n",(0,i.jsx)(s.h3,{id:"example-generating-a-proof",children:"Example: Generating a Proof"}),"\n",(0,i.jsx)(s.p,{children:"Generating a proof for leaf idx 3:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"MerkleProof proof{};\nauto err = merkle_tree.get_merkle_proof(\n    input.get(),\n    max_input_size / sizeof(uint64_t),\n    3 /*leaf-idx*/, true,\n    default_merkle_tree_config(), proof);\n\nauto [_leaf, _leaf_size, _leaf_idx] = proof.get_leaf();\nauto [_path, _path_size] = proof.get_path();\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"The Merkle-path can be serialized to the proof along with the leaf. This is not handled by ICICLE."})}),"\n",(0,i.jsx)(s.h2,{id:"verifying-merkle-proofs",children:"Verifying Merkle Proofs"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"/**\n * @brief Verify an element against the Merkle path using layer hashers.\n * @param merkle_proof The MerkleProof object includes the leaf, path, and the root.\n * @param valid output valid bit. True if the proof is valid, false otherwise.\n */\neIcicleError verify(const MerkleProof& merkle_proof, bool& valid) const\n"})}),"\n",(0,i.jsx)(s.h3,{id:"example-verifying-a-proof",children:"Example: Verifying a Proof"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"bool valid = false;\nauto err = merkle_tree.verify(proof, valid);\n"})}),"\n",(0,i.jsx)(s.h2,{id:"pruned-vs-full-merkle-paths",children:"Pruned vs. Full Merkle-paths"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"Merkle path"})," is a collection of ",(0,i.jsx)(s.strong,{children:"sibling hashes"})," that allows the verifier to ",(0,i.jsx)(s.strong,{children:"reconstruct the root hash"})," from a specific leaf.\nThis enables anyone with the ",(0,i.jsx)(s.strong,{children:"path and root"})," to verify that the ",(0,i.jsx)(s.strong,{children:"leaf"})," belongs to the committed dataset.\nThere are two types of paths that can be computed:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#generating-merkle-proofs",children:(0,i.jsx)(s.strong,{children:"Pruned Path:"})})," Contains only necessary sibling hashes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Full Path:"})," Contains all sibling nodes and intermediate hashes."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Merkle Full Path Diagram",src:n(7887).A+"",width:"1523",height:"723"})}),"\n",(0,i.jsxs)(s.p,{children:["To compute a full path, specify ",(0,i.jsx)(s.code,{children:"pruned=false"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"MerkleProof proof{};\nauto err = merkle_tree.get_merkle_proof(\n    input.get(),\n    max_input_size / sizeof(uint64_t),\n    3 /*leaf-idx*/, false /*=pruned*/,  // --\x3e note the pruned flag here\n    default_merkle_tree_config(), proof);\n"})}),"\n",(0,i.jsx)(s.h2,{id:"handling-partial-tree-storage",children:"Handling Partial Tree Storage"}),"\n",(0,i.jsxs)(s.p,{children:["In cases where the ",(0,i.jsx)(s.strong,{children:"Merkle tree is large"}),", only the ",(0,i.jsx)(s.strong,{children:"top layers"})," may be stored to conserve memory.\nWhen opening leaves, the ",(0,i.jsx)(s.strong,{children:"first layers"})," (closest to the leaves) are ",(0,i.jsx)(s.strong,{children:"recomputed dynamically"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"For example to avoid storing first layer we can define a tree as follows:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"const int min_layer_to_store = 1;\nauto merkle_tree = MerkleTree::create(hashers, leaf_size, min_layer_to_store);\n"})})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7309:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/diagram1-c14b789ecbb50149820704c41d936c61.png"},7003:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/diagram1_path-0865d68074ab3dc62654c62d92c00450.png"},7887:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/diagram1_path_full-f27fb5d5f5ff39d38926712860b1da40.png"},6630:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/diagram2-9ea2e302cb54350811182ac3d38527cb.png"},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>t});var a=n(6540);const i={},r=a.createContext(i);function l(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);