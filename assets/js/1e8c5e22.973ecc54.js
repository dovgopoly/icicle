"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[2376],{2090:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"icicle/golang-bindings","title":"Golang bindings","description":"Golang bindings allow you to use ICICLE as a golang library.","source":"@site/versioned_docs/version-3.1.0/icicle/golang-bindings.md","sourceDirName":"icicle","slug":"/icicle/golang-bindings","permalink":"/icicle/golang-bindings","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/golang-bindings.md","tags":[],"version":"3.1.0","lastUpdatedBy":"yshekel","lastUpdatedAt":1733471854000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Merkle-Tree","permalink":"/icicle/primitives/merkle"},"next":{"title":"MSM","permalink":"/icicle/golang-bindings/msm"}}');var l=n(4848),r=n(8453);const o={},c="Golang bindings",a={},t=[{value:"Using ICICLE Golang bindings in your project",id:"using-icicle-golang-bindings-in-your-project",level:2},{value:"Building from source",id:"building-from-source",level:3},{value:"Building with precompiled libs",id:"building-with-precompiled-libs",level:3},{value:"Running tests",id:"running-tests",level:2},{value:"How do Golang bindings work?",id:"how-do-golang-bindings-work",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"golang-bindings",children:"Golang bindings"})}),"\n",(0,l.jsxs)(i.p,{children:["Golang bindings allow you to use ICICLE as a golang library.\nThe source code for all Golang packages can be found ",(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang",children:"here"}),"."]}),"\n",(0,l.jsx)(i.p,{children:"The Golang bindings are comprised of multiple packages."}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/core",children:(0,l.jsx)(i.code,{children:"core"})})," which defines all shared methods and structures, such as configuration structures, or memory slices."]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/runtime",children:(0,l.jsx)(i.code,{children:"runtime"})})," which defines abstractions for ICICLE methods for allocating memory, initializing and managing streams, and ",(0,l.jsx)(i.code,{children:"Device"})," which enables users to define and keep track of devices."]}),"\n",(0,l.jsxs)(i.p,{children:["Each supported curve and field has its own package which you can find in the respective directories ",(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang",children:"here"}),". If your project uses BN254 you only need to import that single package named ",(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/curves/bn254",children:(0,l.jsx)(i.code,{children:"bn254"})}),"."]}),"\n",(0,l.jsx)(i.h2,{id:"using-icicle-golang-bindings-in-your-project",children:"Using ICICLE Golang bindings in your project"}),"\n",(0,l.jsxs)(i.p,{children:["To add ICICLE to your ",(0,l.jsx)(i.code,{children:"go.mod"})," file."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"go get github.com/ingonyama-zk/icicle/v3\n"})}),"\n",(0,l.jsx)(i.p,{children:"If you want to specify a specific branch"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"go get github.com/ingonyama-zk/icicle/v3@<branch_name>\n"})}),"\n",(0,l.jsx)(i.p,{children:"For a specific commit"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"go get github.com/ingonyama-zk/icicle/v3@<commit_id>\n"})}),"\n",(0,l.jsx)(i.h3,{id:"building-from-source",children:"Building from source"}),"\n",(0,l.jsxs)(i.p,{children:["To build the shared libraries you can run ",(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/build.sh",children:"this"})," script inside the downloaded go dependency:"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sh",children:'./build.sh [-curve=<curve>] [-field=<field>] [-cuda_version=<version>] [-skip_msm] [-skip_ntt] [-skip_g2] [-skip_ecntt] [-skip_fieldext]\n\ncurve - The name of the curve to build or "all" to build all supported curves\nfield - The name of the field to build or "all" to build all supported fields\n-skip_msm - Optional - build with MSM disabled\n-skip_ntt - Optional - build with NTT disabled\n-skip_g2 - Optional - build with G2 disabled \n-skip_ecntt - Optional - build with ECNTT disabled\n-skip_fieldext - Optional - build without field extension\n-help - Optional - Displays usage information\n'})}),"\n",(0,l.jsx)(i.admonition,{type:"note",children:(0,l.jsx)(i.p,{children:"If more than one curve or more than one field is supplied, the last one supplied will be built"})}),"\n",(0,l.jsx)(i.p,{children:"To build ICICLE libraries for all supported curves without certain features, you can use their -skip_<feature> flags. For example, for disabling G2 and ECNTT:"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"./build.sh -curve=all -skip_g2 -skip_ecntt\n"})}),"\n",(0,l.jsxs)(i.p,{children:["By default, all features are enabled. To build for a specific field or curve, you can pass the ",(0,l.jsx)(i.code,{children:"-field=<field_name>"})," or ",(0,l.jsx)(i.code,{children:"-curve=<curve_name>"})," flags:"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"./build.sh -curve=bn254\n"})}),"\n",(0,l.jsx)(i.p,{children:"Now you can import ICICLE into your project"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-go",children:'import (\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n...\n'})}),"\n",(0,l.jsx)(i.h3,{id:"building-with-precompiled-libs",children:"Building with precompiled libs"}),"\n",(0,l.jsxs)(i.p,{children:["Download the frontend release binaries from our ",(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/releases",children:"github release page"}),", for example: icicle30-ubuntu22.tar.gz for ICICLE v3 on ubuntu 22.04"]}),"\n",(0,l.jsx)(i.p,{children:"Extract the libs and move them to the downloaded go dependency in your GOMODCACHE"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sh",children:"# extract frontend part\ntar xzvf icicle30-ubuntu22.tar.gz\ncp -r ./icicle/lib/* $(go env GOMODCACHE)/github.com/ingonyama-zk/icicle/v3@<version>/build/lib/\n"})}),"\n",(0,l.jsx)(i.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,l.jsx)(i.p,{children:"To run all tests, for all curves:"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"go test ./... -count=1\n"})}),"\n",(0,l.jsx)(i.p,{children:"If you wish to run test for a specific curve or field:"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"go test <path_to_curve_or_field> -count=1\n"})}),"\n",(0,l.jsx)(i.h2,{id:"how-do-golang-bindings-work",children:"How do Golang bindings work?"}),"\n",(0,l.jsx)(i.p,{children:"The golang packages are binded to the libraries produced from compiling ICICLE using cgo."}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:["These libraries (named ",(0,l.jsx)(i.code,{children:"libicicle_curve_<curve>.a"})," and ",(0,l.jsx)(i.code,{children:"libicicle_field_<curve>.a"}),") can be imported in your Go project to leverage the accelerated functionalities provided by ICICLE."]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:["In your Go project, you can use ",(0,l.jsx)(i.code,{children:"cgo"})," to link these libraries. Here's a basic example on how you can use ",(0,l.jsx)(i.code,{children:"cgo"})," to link these libraries:"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-go",children:'/*\n#cgo LDFLAGS: -L/path/to/shared/libs -licicle_device -lstdc++ -lm -Wl,-rpath=/path/to/shared/libs\n#include "icicle.h" // make sure you use the correct header file(s)\n*/\nimport "C"\n\nfunc main() {\n    // Now you can call the C functions from the ICICLE libraries.\n    // Note that C function calls are prefixed with \'C.\' in Go code.\n}\n'})}),"\n",(0,l.jsxs)(i.p,{children:["Replace ",(0,l.jsx)(i.code,{children:"/path/to/shared/libs"})," with the actual path where the shared libraries are located on your system."]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>c});var s=n(6540);const l={},r=s.createContext(l);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);