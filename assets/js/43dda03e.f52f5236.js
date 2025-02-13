"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8427],{5567:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"icicle/introduction","title":"Getting started with ICICLE","description":"This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to this guide please.","source":"@site/versioned_docs/version-2.8.0/icicle/introduction.md","sourceDirName":"icicle","slug":"/icicle/introduction","permalink":"/2.8.0/icicle/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/introduction.md","tags":[],"version":"2.8.0","lastUpdatedBy":"Elan","lastUpdatedAt":1739451718000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"What is ICICLE?","permalink":"/2.8.0/icicle/overview"},"next":{"title":"ICICLE Core","permalink":"/2.8.0/icicle/core"}}');var r=n(4848),t=n(8453);const l={},c="Getting started with ICICLE",o={},a=[{value:"ICICLE repository overview",id:"icicle-repository-overview",level:2},{value:"ICICLE Core",id:"icicle-core",level:3},{value:"ICICLE Rust and Golang bindings",id:"icicle-rust-and-golang-bindings",level:3},{value:"Running ICICLE",id:"running-icicle",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Optional Prerequisites",id:"optional-prerequisites",level:4},{value:"Setting up ICICLE and running tests",id:"setting-up-icicle-and-running-tests",level:3},{value:"Setting up environment with Docker",id:"setting-up-environment-with-docker",level:4},{value:"ICICLE Core",id:"icicle-core-1",level:4},{value:"ICICLE Rust",id:"icicle-rust",level:4},{value:"ICICLE Golang",id:"icicle-golang",level:4},{value:"Running ICICLE examples",id:"running-icicle-examples",level:3},{value:"Running with Docker",id:"running-with-docker",level:4}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"getting-started-with-icicle",children:"Getting started with ICICLE"})}),"\n",(0,r.jsxs)(i.p,{children:["This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to ",(0,r.jsx)(i.a,{href:"/2.8.0/icicle/integrations#using-icicle-integrated-provers",children:"this guide"})," please."]}),"\n",(0,r.jsx)(i.h2,{id:"icicle-repository-overview",children:"ICICLE repository overview"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"ICICLE API overview",src:n(1611).A+"",width:"1932",height:"996"})}),"\n",(0,r.jsx)(i.p,{children:"The diagram above displays the general architecture of ICICLE and the API layers that exist. The CUDA API, which we also call ICICLE Core, is the lowest level and is comprised of CUDA kernels which implement all primitives such as MSM as well as C++ wrappers which expose these methods for different curves."}),"\n",(0,r.jsx)(i.p,{children:"ICICLE Core compiles into a static library. This library can be used with our official Golang and Rust wrappers or linked with your C++ project. You can also implement a wrapper for it in any other language."}),"\n",(0,r.jsx)(i.p,{children:"Based on this dependency architecture, the ICICLE repository has three main sections:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#icicle-core",children:"ICICLE Core"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#icicle-rust-and-golang-bindings",children:"ICICLE Rust bindings"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#icicle-rust-and-golang-bindings",children:"ICICLE Golang bindings"})}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"icicle-core",children:"ICICLE Core"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/2.8.0/icicle/core",children:"ICICLE Core"})," is a library that directly works with GPU by defining CUDA kernels and algorithms that invoke them. It contains code for ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/include/field/field.cuh",children:"fast field arithmetic"}),", cryptographic primitives used in ZK such as ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/src/ntt/",children:"NTT"}),", ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/src/msm/",children:"MSM"}),", ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/src/poseidon/",children:"Poseidon Hash"}),", ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/src/polynomials/",children:"Polynomials"})," and others."]}),"\n",(0,r.jsx)(i.p,{children:"ICICLE Core would typically be compiled into a static library and either used in a third party language such as Rust or Golang, or linked with your own C++ project."}),"\n",(0,r.jsx)(i.h3,{id:"icicle-rust-and-golang-bindings",children:"ICICLE Rust and Golang bindings"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/icicle/rust-bindings",children:"ICICLE Rust bindings"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/icicle/golang-bindings",children:"ICICLE Golang bindings"})}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["These bindings allow you to easily use ICICLE in a Rust or Golang project. Setting up Golang bindings requires a bit of extra steps compared to the Rust bindings which utilize the ",(0,r.jsx)(i.code,{children:"cargo build"})," tool."]}),"\n",(0,r.jsx)(i.h2,{id:"running-icicle",children:"Running ICICLE"}),"\n",(0,r.jsxs)(i.p,{children:["This guide assumes that you have a Linux or Windows machine with an Nvidia GPU installed. If you don't have access to an Nvidia GPU you can access one for free on ",(0,r.jsx)(i.a,{href:"https://colab.google/",children:"Google Colab"}),"."]}),"\n",(0,r.jsx)(i.admonition,{title:"note",type:"info",children:(0,r.jsxs)(i.p,{children:["ICICLE can only run on Linux or Windows. ",(0,r.jsx)(i.strong,{children:"MacOS is not supported"}),"."]})}),"\n",(0,r.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"NVCC (version 12.0 or newer)"}),"\n",(0,r.jsx)(i.li,{children:"cmake 3.18 and above"}),"\n",(0,r.jsx)(i.li,{children:"GCC - version 9 or newer is recommended."}),"\n",(0,r.jsx)(i.li,{children:"Any Nvidia GPU"}),"\n",(0,r.jsx)(i.li,{children:"Linux or Windows operating system."}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"optional-prerequisites",children:"Optional Prerequisites"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Docker, latest version."}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/index.html",children:"NVIDIA Container Toolkit"})}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["If you don't wish to install these prerequisites you can follow this tutorial using a ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile",children:"ZK-Container"})," (docker container). To learn more about using ZK-Containers ",(0,r.jsx)(i.a,{href:"/2.8.0/ZKContainers",children:"read this"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"setting-up-icicle-and-running-tests",children:"Setting up ICICLE and running tests"}),"\n",(0,r.jsxs)(i.p,{children:["The objective of this guide is to make sure you can run the ICICLE Core, Rust and Golang tests. Achieving this will ensure you know how to setup ICICLE and run an ICICLE program. For simplicity, we will be using the ICICLE docker container as our environment, however, you may install the prerequisites on your machine and ",(0,r.jsx)(i.a,{href:"#icicle-core-1",children:"skip"})," the docker section."]}),"\n",(0,r.jsx)(i.h4,{id:"setting-up-environment-with-docker",children:"Setting up environment with Docker"}),"\n",(0,r.jsx)(i.p,{children:"Lets begin by cloning the ICICLE repository:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"git clone https://github.com/ingonyama-zk/icicle\n"})}),"\n",(0,r.jsxs)(i.p,{children:["We will proceed to build the docker image ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile",children:"found here"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"docker build -t icicle-demo .\ndocker run -it --runtime=nvidia --gpus all --name icicle_container icicle-demo\n"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"-it"})," runs the container in interactive mode with a terminal."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"--gpus all"})," Allocate all available GPUs to the container. You can also specify which GPUs to use if you don't want to allocate all."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"--runtime=nvidia"})," Use the NVIDIA runtime, necessary for GPU support."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["To read more about these settings reference this ",(0,r.jsx)(i.a,{href:"https://developer.nvidia.com/nvidia-container-runtime",children:"article"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"If you accidentally close your terminal and want to reconnect just call:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"docker exec -it icicle_container bash\n"})}),"\n",(0,r.jsx)(i.p,{children:"Lets make sure that we have the correct CUDA version before proceeding"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"nvcc --version\n"})}),"\n",(0,r.jsx)(i.p,{children:"You should see something like this"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"nvcc: NVIDIA (R) Cuda compiler driver\nCopyright (c) 2005-2023 NVIDIA Corporation\nBuilt on Tue_Aug_15_22:02:13_PDT_2023\nCuda compilation tools, release 12.2, V12.2.140\nBuild cuda_12.2.r12.2/compiler.33191640_0\n"})}),"\n",(0,r.jsx)(i.p,{children:"Make sure the release version is at least 12.0."}),"\n",(0,r.jsx)(i.h4,{id:"icicle-core-1",children:"ICICLE Core"}),"\n",(0,r.jsxs)(i.p,{children:["ICICLE Core is found under ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle",children:(0,r.jsx)(i.code,{children:"<project_root>/icicle"})}),". To build and run the tests first:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cd icicle\n"})}),"\n",(0,r.jsxs)(i.p,{children:["For this example, we are going to compile ICICLE for a ",(0,r.jsx)(i.code,{children:"bn254"})," curve. However other compilation strategies are supported."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"mkdir -p build\ncmake -S . -B build -DCURVE=bn254 -DBUILD_TESTS=ON\ncmake --build build -j\n"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"-DBUILD_TESTS"})," option compiles the tests, without this flag ",(0,r.jsx)(i.code,{children:"ctest"})," won't work.\n",(0,r.jsx)(i.code,{children:"-DCURVE"})," option tells the compiler which curve to build. You can find a list of supported curves ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/cmake/CurvesCommon.cmake#L2",children:"here"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["The output in ",(0,r.jsx)(i.code,{children:"build"})," folder should include the static libraries for the compiled curve."]}),"\n",(0,r.jsx)(i.p,{children:"To run the test"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cd build/tests\nctest\n"})}),"\n",(0,r.jsx)(i.h4,{id:"icicle-rust",children:"ICICLE Rust"}),"\n",(0,r.jsxs)(i.p,{children:["The rust bindings work by first compiling the CUDA static libraries as seen ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs",children:"here"}),". The compilation of CUDA and the Rust library is all handled by the rust build toolchain."]}),"\n",(0,r.jsx)(i.p,{children:"Similar to ICICLE Core here we also have to compile per curve."}),"\n",(0,r.jsxs)(i.p,{children:["Lets compile curve ",(0,r.jsx)(i.code,{children:"bn254"})]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cd wrappers/rust/icicle-curves/icicle-bn254\n"})}),"\n",(0,r.jsx)(i.p,{children:"Now lets build our library"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cargo build --release\n"})}),"\n",(0,r.jsx)(i.p,{children:"This may take a couple of minutes since we are compiling both the CUDA and Rust code."}),"\n",(0,r.jsx)(i.p,{children:"To run the tests"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cargo test\n"})}),"\n",(0,r.jsx)(i.p,{children:"We also include some benchmarks"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cargo bench\n"})}),"\n",(0,r.jsx)(i.h4,{id:"icicle-golang",children:"ICICLE Golang"}),"\n",(0,r.jsxs)(i.p,{children:["The Golang bindings require compiling ICICLE Core first. We supply a ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/golang/build.sh",children:"build script"})," to help build what you need."]}),"\n",(0,r.jsx)(i.p,{children:"Script usage:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:'./build.sh [-curve=<curve>] [-field=<field>] [-hash=<hash>] [-cuda_version=<version>] [-g2] [-ecntt] [-devmode]\n\ncurve - The name of the curve to build or "all" to build all supported curves\nfield - The name of the field to build or "all" to build all supported fields\nhash - The name of the hash to build or "all" to build all supported hashes\n-g2 - Optional - build with G2 enabled \n-ecntt - Optional - build with ECNTT enabled\n-devmode - Optional - build in devmode\n'})}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"If more than one curve or more than one field or more than one hash is supplied, the last one supplied will be built"})}),"\n",(0,r.jsx)(i.p,{children:"Once the library has been built, you can use and test the Golang bindings."}),"\n",(0,r.jsx)(i.p,{children:"To test a specific curve, field or hash, change to it's directory and then run:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"go test ./tests -count=1 -failfast -timeout 60m -p 2 -v\n"})}),"\n",(0,r.jsx)(i.p,{children:"You will be able to see each test that runs, how long it takes and whether it passed or failed"}),"\n",(0,r.jsx)(i.h3,{id:"running-icicle-examples",children:"Running ICICLE examples"}),"\n",(0,r.jsxs)(i.p,{children:["ICICLE examples can be found ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/examples",children:"here"})," these examples cover some simple use cases using C++, rust and golang."]}),"\n",(0,r.jsxs)(i.p,{children:["Lets run one of our C++ examples, in this case the ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/examples/c%2B%2B/msm/example.cu",children:"MSM example"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"cd examples/c++/msm\n./compile.sh\n./run.sh\n"})}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"Read through the compile.sh and CMakeLists.txt to understand how to link your own C++ project with ICICLE"})}),"\n",(0,r.jsx)(i.h4,{id:"running-with-docker",children:"Running with Docker"}),"\n",(0,r.jsxs)(i.p,{children:["In each example directory, ZK-container files are located in a subdirectory ",(0,r.jsx)(i.code,{children:".devcontainer"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"msm/\n\u251c\u2500\u2500 .devcontainer\n   \u251c\u2500\u2500 devcontainer.json\n   \u2514\u2500\u2500 Dockerfile\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Now lets build our docker file and run the test inside it. Make sure you have installed the ",(0,r.jsx)(i.a,{href:"#optional-prerequisites",children:"optional prerequisites"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"docker build -t icicle-example-msm -f .devcontainer/Dockerfile .\n"})}),"\n",(0,r.jsx)(i.p,{children:"Lets start and enter the container"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"docker run -it --rm --gpus all -v .:/icicle-example icicle-example-msm\n"})}),"\n",(0,r.jsx)(i.p,{children:"Inside the container you can run the same commands:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"./compile.sh\n./run.sh\n"})}),"\n",(0,r.jsx)(i.p,{children:"You can now experiment with our other examples, perhaps try to run a rust or golang example next."})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1611:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/apilevels-1ab85a883df418516e16eb87aa7b0385.png"},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var s=n(6540);const r={},t=s.createContext(r);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);