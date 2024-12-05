"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[3637],{1138:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"icicle/introduction","title":"Getting started with ICICLE","description":"This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to this guide please.","source":"@site/versioned_docs/version-1.10.1/icicle/introduction.md","sourceDirName":"icicle","slug":"/icicle/introduction","permalink":"/1.10.1/icicle/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/introduction.md","tags":[],"version":"1.10.1","lastUpdatedBy":"danny-shterman","lastUpdatedAt":1733429726000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"What is ICICLE?","permalink":"/1.10.1/icicle/overview"},"next":{"title":"ICICLE Provers","permalink":"/1.10.1/icicle/integrations"}}');var r=n(4848),l=n(8453);const t={},c="Getting started with ICICLE",a={},o=[{value:"ICICLE repository overview",id:"icicle-repository-overview",level:2},{value:"ICICLE Core",id:"icicle-core",level:3},{value:"ICICLE Rust and Golang bindings",id:"icicle-rust-and-golang-bindings",level:3},{value:"Running ICICLE",id:"running-icicle",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Optional Prerequisites",id:"optional-prerequisites",level:4},{value:"Setting up ICICLE and running tests",id:"setting-up-icicle-and-running-tests",level:3},{value:"Setting up our environment",id:"setting-up-our-environment",level:4},{value:"ICICLE Core",id:"icicle-core-1",level:4},{value:"ICICLE Rust",id:"icicle-rust",level:4},{value:"ICICLE Golang",id:"icicle-golang",level:4},{value:"Running ICICLE examples",id:"running-icicle-examples",level:3},{value:"Writing new bindings for ICICLE",id:"writing-new-bindings-for-icicle",level:2},{value:"ICICLE Adapters",id:"icicle-adapters",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"getting-started-with-icicle",children:"Getting started with ICICLE"})}),"\n",(0,r.jsxs)(i.p,{children:["This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to ",(0,r.jsx)(i.a,{href:"/1.10.1/icicle/integrations#using-icicle-integrated-provers",children:"this guide"})," please."]}),"\n",(0,r.jsx)(i.h2,{id:"icicle-repository-overview",children:"ICICLE repository overview"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"ICICLE API overview",src:n(1611).A+"",width:"1932",height:"996"})}),"\n",(0,r.jsx)(i.p,{children:"The diagram above displays the general architecture of ICICLE and the API layers that exist. The CUDA API, which we also call ICICLE Core, is the lowest level and is comprised of CUDA kernels which implement all primitives such as MSM as well as C++ wrappers which expose these methods for different curves."}),"\n",(0,r.jsx)(i.p,{children:"ICICLE Core compiles into a static library. This library can be used with our official Golang and Rust wrappers or you can implement a wrapper for it in any language."}),"\n",(0,r.jsx)(i.p,{children:"Based on this dependency architecture, the ICICLE repository has three main sections, each of which is independent from the other."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"ICICLE core"}),"\n",(0,r.jsx)(i.li,{children:"ICICLE Rust bindings"}),"\n",(0,r.jsx)(i.li,{children:"ICICLE Golang bindings"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"icicle-core",children:"ICICLE Core"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle",children:"ICICLE core"})," contains all the low level CUDA code implementing primitives such as ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/primitives",children:"points"})," and ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/appUtils/msm",children:"MSM"}),". There also exists higher level C++ wrappers to expose the low level CUDA primitives (",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/c1a32a9879a7612916e05aa3098f76144de4109e/icicle/appUtils/msm/msm.cu#L1",children:"example"}),")."]}),"\n",(0,r.jsx)(i.p,{children:"ICICLE Core would typically be compiled into a static library and used in a third party language such as Rust or Golang."}),"\n",(0,r.jsx)(i.h3,{id:"icicle-rust-and-golang-bindings",children:"ICICLE Rust and Golang bindings"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust",children:"ICICLE Rust bindings"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/goicicle",children:"ICICLE Golang bindings"})}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["These bindings allow you to easily use ICICLE in a Rust or Golang project. Setting up Golang bindings requires a bit of extra steps compared to the Rust bindings which utilize the ",(0,r.jsx)(i.code,{children:"cargo build"})," tool."]}),"\n",(0,r.jsx)(i.h2,{id:"running-icicle",children:"Running ICICLE"}),"\n",(0,r.jsxs)(i.p,{children:["This guide assumes that you have a Linux or Windows machine with an Nvidia GPU installed. If you don't have access to an Nvidia GPU you can access one for free on ",(0,r.jsx)(i.a,{href:"https://colab.google/",children:"Google Colab"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"NVCC (version 12.0 or newer)"}),"\n",(0,r.jsx)(i.li,{children:"cmake 3.18 and above"}),"\n",(0,r.jsx)(i.li,{children:"GCC - version 9 or newer is recommended."}),"\n",(0,r.jsx)(i.li,{children:"Any Nvidia GPU"}),"\n",(0,r.jsx)(i.li,{children:"Linux or Windows operating system."}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"optional-prerequisites",children:"Optional Prerequisites"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Docker, latest version."}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/index.html",children:"NVIDIA Container Toolkit"})}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["If you don't wish to install these prerequisites you can follow this tutorial using a ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile",children:"ZK-Container"})," (docker container). To learn more about using ZK-Containers ",(0,r.jsx)(i.a,{href:"/1.10.1/ZKContainers",children:"read this"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"setting-up-icicle-and-running-tests",children:"Setting up ICICLE and running tests"}),"\n",(0,r.jsx)(i.p,{children:"The objective of this guide is to make sure you can run the ICICLE Core, Rust and Golang tests. Achieving this will ensure you know how to setup ICICLE and run a ICICLE program. For simplicity, we will be using the ICICLE docker container as our environment, however, you may install the prerequisites on your machine and follow the same commands in your terminal."}),"\n",(0,r.jsx)(i.h4,{id:"setting-up-our-environment",children:"Setting up our environment"}),"\n",(0,r.jsx)(i.p,{children:"Lets begin by cloning the ICICLE repository:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"git clone https://github.com/ingonyama-zk/icicle\n"})}),"\n",(0,r.jsxs)(i.p,{children:["We will proceed to build the docker image ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile",children:"found here"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"docker build -t icicle-demo .\ndocker run -it --runtime=nvidia --gpus all --name icicle_container icicle-demo\n"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"-it"})," runs the container in interactive mode with a terminal."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"--gpus all"})," Allocate all available GPUs to the container. You can also specify which GPUs to use if you don't want to allocate all."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"--runtime=nvidia"})," Use the NVIDIA runtime, necessary for GPU support."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["To read more about these settings reference this ",(0,r.jsx)(i.a,{href:"https://developer.nvidia.com/nvidia-container-runtime",children:"article"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"If you accidentally close your terminal and want to reconnect just call:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"docker exec -it icicle_container bash\n"})}),"\n",(0,r.jsx)(i.p,{children:"Lets make sure that we have the correct CUDA version before proceeding"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"nvcc --version\n"})}),"\n",(0,r.jsx)(i.p,{children:"You should see something like this"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"nvcc: NVIDIA (R) Cuda compiler driver\nCopyright (c) 2005-2023 NVIDIA Corporation\nBuilt on Tue_Aug_15_22:02:13_PDT_2023\nCuda compilation tools, release 12.2, V12.2.140\nBuild cuda_12.2.r12.2/compiler.33191640_0\n"})}),"\n",(0,r.jsx)(i.p,{children:"Make sure the release version is at least 12.0."}),"\n",(0,r.jsx)(i.h4,{id:"icicle-core-1",children:"ICICLE Core"}),"\n",(0,r.jsxs)(i.p,{children:["ICICLE Core is found under ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle",children:(0,r.jsx)(i.code,{children:"<project_root>/icicle"})}),". To build and run the tests first:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cd icicle\n"})}),"\n",(0,r.jsx)(i.p,{children:"We are going to compile ICICLE for a specific curve"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"mkdir -p build\ncmake -S . -B build -DCURVE=bn254 -DBUILD_TESTS=ON\ncmake --build build\n"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"-DBUILD_TESTS=ON"})," compiles the tests, without this flag ",(0,r.jsx)(i.code,{children:"ctest"})," won't work.\n",(0,r.jsx)(i.code,{children:"-DCURVE=bn254"})," tells the compiler which curve to build. You can find a list of supported curves ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/curves",children:"here"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["The output in ",(0,r.jsx)(i.code,{children:"build"})," folder should include the static libraries for the compiled curve."]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["Make sure to only use ",(0,r.jsx)(i.code,{children:"-DBUILD_TESTS=ON"})," for running tests as the archive output will only be available when ",(0,r.jsx)(i.code,{children:"-DBUILD_TESTS=ON"})," is not supplied."]})}),"\n",(0,r.jsx)(i.p,{children:"To run the test"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cd build\nctest\n"})}),"\n",(0,r.jsx)(i.h4,{id:"icicle-rust",children:"ICICLE Rust"}),"\n",(0,r.jsxs)(i.p,{children:["The rust bindings work by first compiling the CUDA static libraries as seen ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs",children:"here"}),". The compilation of CUDA and the Rust library is all handled by the rust build toolchain."]}),"\n",(0,r.jsx)(i.p,{children:"Similar to ICICLE Core here we also have to compile per curve."}),"\n",(0,r.jsxs)(i.p,{children:["Lets compile curve ",(0,r.jsx)(i.code,{children:"bn254"})]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cd wrappers/rust/icicle-curves/icicle-bn254\n"})}),"\n",(0,r.jsx)(i.p,{children:"Now lets build our library"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cargo build --release\n"})}),"\n",(0,r.jsx)(i.p,{children:"This may take a couple of minutes since we are compiling both the CUDA and Rust code."}),"\n",(0,r.jsx)(i.p,{children:"To run the tests"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cargo test\n"})}),"\n",(0,r.jsx)(i.p,{children:"We also include some benchmarks"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cargo bench\n"})}),"\n",(0,r.jsx)(i.h4,{id:"icicle-golang",children:"ICICLE Golang"}),"\n",(0,r.jsxs)(i.p,{children:["Golang is WIP in v1, coming soon. Please checkout a previous ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/releases/tag/v0.1.0",children:"release v0.1.0"})," for golang bindings."]}),"\n",(0,r.jsx)(i.h3,{id:"running-icicle-examples",children:"Running ICICLE examples"}),"\n",(0,r.jsxs)(i.p,{children:["ICICLE examples can be found ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle-examples",children:"here"})," these examples cover some simple use cases using C++, rust and golang."]}),"\n",(0,r.jsxs)(i.p,{children:["In each example directory, ZK-container files are located in a subdirectory ",(0,r.jsx)(i.code,{children:".devcontainer"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"msm/\n\u251c\u2500\u2500 .devcontainer\n   \u251c\u2500\u2500 devcontainer.json\n   \u2514\u2500\u2500 Dockerfile\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Lets run one of our C++ examples, in this case the ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle-examples/blob/main/c%2B%2B/msm/example.cu",children:"MSM example"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"Clone the repository"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"git clone https://github.com/ingonyama-zk/icicle-examples.git\ncd icicle-examples\n"})}),"\n",(0,r.jsx)(i.p,{children:"Enter the test directory"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cd c++/msm\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Now lets build our docker file and run the test inside it. Make sure you have installed the ",(0,r.jsx)(i.a,{href:"#optional-prerequisites",children:"optional prerequisites"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"docker build -t icicle-example-msm -f .devcontainer/Dockerfile .\n"})}),"\n",(0,r.jsx)(i.p,{children:"Lets start and enter the container"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"docker run -it --rm --gpus all -v .:/icicle-example icicle-example-msm\n"})}),"\n",(0,r.jsx)(i.p,{children:"to run the example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"rm -rf build\nmkdir -p build\ncmake -S . -B build\ncmake --build build\n./build/example\n"})}),"\n",(0,r.jsx)(i.p,{children:"You can now experiment with our other examples, perhaps try to run a rust or golang example next."}),"\n",(0,r.jsx)(i.h2,{id:"writing-new-bindings-for-icicle",children:"Writing new bindings for ICICLE"}),"\n",(0,r.jsx)(i.p,{children:"Since ICICLE Core is written in CUDA / C++ its really simple to generate static libraries. These static libraries can be installed on any system and called by higher level languages such as Golang."}),"\n",(0,r.jsx)(i.p,{children:"static libraries can be loaded into memory once and used by multiple programs, reducing memory usage and potentially improving performance. They also allow you to separate functionality into distinct modules so your static library may need to compile only specific features that you want to use."}),"\n",(0,r.jsxs)(i.p,{children:["Lets review the Golang bindings since its a pretty verbose example (compared to rust which hides it pretty well) of using static libraries. Golang has a library named ",(0,r.jsx)(i.code,{children:"CGO"})," which can be used to link static libraries. Here's a basic example on how you can use cgo to link these libraries:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'/*\n#cgo LDFLAGS: -L/path/to/shared/libs -lbn254 -lbls12_381 -lbls12_377 -lbw6_671\n#include "icicle.h" // make sure you use the correct header file(s)\n*/\nimport "C"\n\nfunc main() {\n  // Now you can call the C functions from the ICICLE libraries.\n  // Note that C function calls are prefixed with \'C.\' in Go code.\n\n  out := (*C.BN254_projective_t)(unsafe.Pointer(p))\n  in := (*C.BN254_affine_t)(unsafe.Pointer(affine))\n\n  C.projective_from_affine_bn254(out, in)\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:["The comments on the first line tell ",(0,r.jsx)(i.code,{children:"CGO"})," which libraries to import as well as which header files to include. You can then call methods which are part of the static library and defined in the header file, ",(0,r.jsx)(i.code,{children:"C.projective_from_affine_bn254"})," is an example."]}),"\n",(0,r.jsx)(i.p,{children:"If you wish to create your own bindings for a language of your choice we suggest you start by investigating how you can call static libraries."}),"\n",(0,r.jsx)(i.h3,{id:"icicle-adapters",children:"ICICLE Adapters"}),"\n",(0,r.jsx)(i.p,{children:"One of the core ideas behind ICICLE is that developers can gradually accelerate their provers. Many protocols are written using other cryptographic libraries and completely replacing them may be complex and time consuming."}),"\n",(0,r.jsx)(i.p,{children:"Therefore we offer adapters for various popular libraries, these adapters allow us to convert points and scalars between different formats defined by various libraries. Here is a list:"}),"\n",(0,r.jsx)(i.p,{children:"Golang adapters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/iciclegnark",children:"Gnark crypto adapter"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1611:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/apilevels-1ab85a883df418516e16eb87aa7b0385.png"},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>c});var s=n(6540);const r={},l=s.createContext(r);function t(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);