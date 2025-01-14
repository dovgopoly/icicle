"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[1714],{6063:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"icicle/golang-bindings","title":"Golang bindings","description":"Golang bindings allow you to use ICICLE as a golang library.","source":"@site/versioned_docs/version-1.10.1/icicle/golang-bindings.md","sourceDirName":"icicle","slug":"/icicle/golang-bindings","permalink":"/1.10.1/icicle/golang-bindings","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/golang-bindings.md","tags":[],"version":"1.10.1","lastUpdatedBy":"ShaniBabayoff","lastUpdatedAt":1736868439000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"ICICLE Provers","permalink":"/1.10.1/icicle/integrations"},"next":{"title":"MSM","permalink":"/1.10.1/icicle/golang-bindings/msm"}}');var c=i(4848),o=i(8453);const r={},a="Golang bindings",l={},t=[{value:"Using ICICLE Golang bindings in your project",id:"using-icicle-golang-bindings-in-your-project",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"How do Golang bindings work?",id:"how-do-golang-bindings-work",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"golang-bindings",children:"Golang bindings"})}),"\n",(0,c.jsxs)(n.p,{children:["Golang bindings allow you to use ICICLE as a golang library.\nThe source code for all Golang libraries can be found ",(0,c.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang",children:"here"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"The Golang bindings are comprised of multiple packages."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/core",children:(0,c.jsx)(n.code,{children:"core"})})," which defines all shared methods and structures, such as configuration structures, or memory slices."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/cuda_runtime",children:(0,c.jsx)(n.code,{children:"cuda-runtime"})})," which defines abstractions for CUDA methods for allocating memory, initializing and managing streams, and ",(0,c.jsx)(n.code,{children:"DeviceContext"})," which enables users to define and keep track of devices."]}),"\n",(0,c.jsxs)(n.p,{children:["Each curve has its own package which you can find ",(0,c.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/curves",children:"here"}),". If your project uses BN254 you only need to install that single package named ",(0,c.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/curves/bn254",children:(0,c.jsx)(n.code,{children:"bn254"})}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"using-icicle-golang-bindings-in-your-project",children:"Using ICICLE Golang bindings in your project"}),"\n",(0,c.jsxs)(n.p,{children:["To add ICICLE to your ",(0,c.jsx)(n.code,{children:"go.mod"})," file."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"go get github.com/ingonyama-zk/icicle\n"})}),"\n",(0,c.jsx)(n.p,{children:"If you want to specify a specific branch"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"go get github.com/ingonyama-zk/icicle@<branch_name>\n"})}),"\n",(0,c.jsx)(n.p,{children:"For a specific commit"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"go get github.com/ingonyama-zk/icicle@<commit_id>\n"})}),"\n",(0,c.jsx)(n.p,{children:"To build the shared libraries you can run this script:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'./build <curve> [G2_enabled]\n\ncurve - The name of the curve to build or "all" to build all curves\nG2_enabled - Optional - To build with G2 enabled \n'})}),"\n",(0,c.jsx)(n.p,{children:"For example if you want to build all curves with G2 enabled you would run:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"./build.sh all ON\n"})}),"\n",(0,c.jsx)(n.p,{children:"If you are interested in building a specific curve you would run:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"./build.sh bls12_381 ON\n"})}),"\n",(0,c.jsx)(n.p,{children:"Now you can import ICICLE into your project"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-golang",children:'import (\n    "github.com/stretchr/testify/assert"\n    "testing"\n\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n...\n'})}),"\n",(0,c.jsx)(n.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,c.jsx)(n.p,{children:"To run all tests, for all curves:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"go test --tags=g2 ./... -count=1\n"})}),"\n",(0,c.jsxs)(n.p,{children:["If you dont want to include g2 tests then drop ",(0,c.jsx)(n.code,{children:"--tags=g2"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"If you wish to run test for a specific curve:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"go test <path_to_curve> -count=1\n"})}),"\n",(0,c.jsx)(n.h2,{id:"how-do-golang-bindings-work",children:"How do Golang bindings work?"}),"\n",(0,c.jsx)(n.p,{children:"The libraries produced from the CUDA code compilation are used to bind Golang to ICICLE's CUDA code."}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["These libraries (named ",(0,c.jsx)(n.code,{children:"libingo_<curve>.a"}),") can be imported in your Go project to leverage the GPU accelerated functionalities provided by ICICLE."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["In your Go project, you can use ",(0,c.jsx)(n.code,{children:"cgo"})," to link these libraries. Here's a basic example on how you can use ",(0,c.jsx)(n.code,{children:"cgo"})," to link these libraries:"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'/*\n#cgo LDFLAGS: -L/path/to/shared/libs -lingo_bn254\n#include "icicle.h" // make sure you use the correct header file(s)\n*/\nimport "C"\n\nfunc main() {\n    // Now you can call the C functions from the ICICLE libraries.\n    // Note that C function calls are prefixed with \'C.\' in Go code.\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["Replace ",(0,c.jsx)(n.code,{children:"/path/to/shared/libs"})," with the actual path where the shared libraries are located on your system."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(6540);const c={},o=s.createContext(c);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);