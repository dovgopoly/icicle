"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[9591],{1269:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"icicle/golang-bindings","title":"Golang bindings","description":"Golang bindings allow you to use ICICLE as a golang library.","source":"@site/versioned_docs/version-2.8.0/icicle/golang-bindings.md","sourceDirName":"icicle","slug":"/icicle/golang-bindings","permalink":"/2.8.0/icicle/golang-bindings","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/golang-bindings.md","tags":[],"version":"2.8.0","lastUpdatedBy":"idanfr-ingo","lastUpdatedAt":1739365935000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Multi GPU Support","permalink":"/2.8.0/icicle/multi-gpu"},"next":{"title":"MSM","permalink":"/2.8.0/icicle/golang-bindings/msm"}}');var s=i(4848),l=i(8453);const r={},c="Golang bindings",d={},o=[{value:"Using ICICLE Golang bindings in your project",id:"using-icicle-golang-bindings-in-your-project",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"How do Golang bindings work?",id:"how-do-golang-bindings-work",level:2},{value:"Supported curves, fields and operations",id:"supported-curves-fields-and-operations",level:2},{value:"Supported curves and operations",id:"supported-curves-and-operations",level:3},{value:"Supported fields and operations",id:"supported-fields-and-operations",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"golang-bindings",children:"Golang bindings"})}),"\n",(0,s.jsxs)(n.p,{children:["Golang bindings allow you to use ICICLE as a golang library.\nThe source code for all Golang packages can be found ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The Golang bindings are comprised of multiple packages."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/core",children:(0,s.jsx)(n.code,{children:"core"})})," which defines all shared methods and structures, such as configuration structures, or memory slices."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/cuda_runtime",children:(0,s.jsx)(n.code,{children:"cuda-runtime"})})," which defines abstractions for CUDA methods for allocating memory, initializing and managing streams, and ",(0,s.jsx)(n.code,{children:"DeviceContext"})," which enables users to define and keep track of devices."]}),"\n",(0,s.jsxs)(n.p,{children:["Each supported curve, field, and hash has its own package which you can find in the respective directories ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang",children:"here"}),". If your project uses BN254 you only need to import that single package named ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/curves/bn254",children:(0,s.jsx)(n.code,{children:"bn254"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"using-icicle-golang-bindings-in-your-project",children:"Using ICICLE Golang bindings in your project"}),"\n",(0,s.jsxs)(n.p,{children:["To add ICICLE to your ",(0,s.jsx)(n.code,{children:"go.mod"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/ingonyama-zk/icicle\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you want to specify a specific branch"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/ingonyama-zk/icicle@<branch_name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"For a specific commit"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/ingonyama-zk/icicle@<commit_id>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To build the shared libraries you can run ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/build.sh",children:"this"})," script:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'./build.sh [-curve=<curve>] [-field=<field>] [-hash=<hash>] [-cuda_version=<version>] [-g2] [-ecntt] [-devmode]\n\ncurve - The name of the curve to build or "all" to build all supported curves\nfield - The name of the field to build or "all" to build all supported fields\nhash - The name of the hash to build or "all" to build all supported hashes\n-g2 - Optional - build with G2 enabled \n-ecntt - Optional - build with ECNTT enabled\n-devmode - Optional - build in devmode\n-help - Optional - Displays usage information\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If more than one curve or more than one field or more than one hash is supplied, the last one supplied will be built"})}),"\n",(0,s.jsx)(n.p,{children:"To build ICICLE libraries for all supported curves with G2 and ECNTT enabled."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./build.sh -curve=all -g2 -ecntt\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you wish to build for a specific curve, for example bn254, without G2 or ECNTT enabled."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./build.sh -curve=bn254\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you can import ICICLE into your project"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/stretchr/testify/assert"\n    "testing"\n\n    "github.com/ingonyama-zk/icicle/v2/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/v2/wrappers/golang/cuda_runtime"\n)\n...\n'})}),"\n",(0,s.jsx)(n.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,s.jsx)(n.p,{children:"To run all tests, for all curves:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go test ./... -count=1\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you wish to run test for a specific curve:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go test <path_to_curve> -count=1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"how-do-golang-bindings-work",children:"How do Golang bindings work?"}),"\n",(0,s.jsx)(n.p,{children:"The libraries produced from the CUDA code compilation are used to bind Golang to ICICLE's CUDA code."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["These libraries (named ",(0,s.jsx)(n.code,{children:"libingo_curve_<curve>.a"})," and ",(0,s.jsx)(n.code,{children:"libingo_field_<curve>.a"}),") can be imported in your Go project to leverage the GPU accelerated functionalities provided by ICICLE."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In your Go project, you can use ",(0,s.jsx)(n.code,{children:"cgo"})," to link these libraries. Here's a basic example on how you can use ",(0,s.jsx)(n.code,{children:"cgo"})," to link these libraries:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'/*\n#cgo LDFLAGS: -L/path/to/shared/libs -lingo_curve_bn254 -L$/path/to/shared/libs -lingo_field_bn254 -lstdc++ -lm\n#include "icicle.h" // make sure you use the correct header file(s)\n*/\nimport "C"\n\nfunc main() {\n    // Now you can call the C functions from the ICICLE libraries.\n    // Note that C function calls are prefixed with \'C.\' in Go code.\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"/path/to/shared/libs"})," with the actual path where the shared libraries are located on your system."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-curves-fields-and-operations",children:"Supported curves, fields and operations"}),"\n",(0,s.jsx)(n.h3,{id:"supported-curves-and-operations",children:"Supported curves and operations"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation\\Curve"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"bn254"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"bls12_377"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"bls12_381"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"bw6-761"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"grumpkin"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MSM"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"G2"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NTT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ECNTT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"VecOps"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Polynomials"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"supported-fields-and-operations",children:"Supported fields and operations"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation\\Field"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"babybear"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"VecOps"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Polynomials"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NTT"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Extension Field"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(6540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);