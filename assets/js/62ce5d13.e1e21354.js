"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5824],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),p=r,m=d["".concat(l,".").concat(p)]||d[p]||g[p]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=t(8168),r=(t(6540),t(5680));t(1873);const i={},o="Run ICICLE on Google Colab",c={unversionedId:"icicle/colab-instructions",id:"icicle/colab-instructions",title:"Run ICICLE on Google Colab",description:"Google Colab lets you use a GPU free of charge, it's an Nvidia T4 GPU with 16 GB of memory, capable of running latest CUDA (tested on Cuda 12.2)",source:"@site/docs/icicle/colab-instructions.md",sourceDirName:"icicle",slug:"/icicle/colab-instructions",permalink:"/icicle/colab-instructions",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/docs/icicle/colab-instructions.md",tags:[],version:"current",lastUpdatedBy:"Leon Hibnik",lastUpdatedAt:1731399328,formattedLastUpdatedAt:"11/12/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Migration from ICICLE v2 to v3",permalink:"/icicle/migrate_from_v2"},next:{title:"ICICLE integrated provers",permalink:"/icicle/integrations"}},l={},s=[{value:"Prepare Colab environment",id:"prepare-colab-environment",level:2},{value:"Cloning ICICLE and running test",id:"cloning-icicle-and-running-test",level:2},{value:"Download CUDA backend",id:"download-cuda-backend",level:2},{value:"Setting CUDA backend installation directory",id:"setting-cuda-backend-installation-directory",level:2},{value:"Fun with ICICLE",id:"fun-with-icicle",level:2}],u={toc:s},d="wrapper";function g(e){let{components:n,...i}=e;return(0,r.yg)(d,(0,a.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"run-icicle-on-google-colab"},"Run ICICLE on Google Colab"),(0,r.yg)("p",null,"Google Colab lets you use a GPU free of charge, it's an Nvidia T4 GPU with 16 GB of memory, capable of running latest CUDA (tested on Cuda 12.2)\nAs Colab is able to interact with shell commands, a user can also install a framework and load git repositories into Colab space."),(0,r.yg)("h2",{id:"prepare-colab-environment"},"Prepare Colab environment"),(0,r.yg)("p",null,"First thing to do in a notebook is to set the runtime type to a T4 GPU."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'in the upper corner click on the dropdown menu and select "change runtime type"')),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Change runtime",src:t(3747).A,width:"423",height:"388"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'In the window select "T4 GPU" and press Save')),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"T4 GPU",src:t(1547).A,width:"582",height:"424"})),(0,r.yg)("p",null,"Installing Rust is rather simple, just execute the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"!apt install rustc cargo\n")),(0,r.yg)("p",null,"To test the installation of Rust:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"!rustc --version\n!cargo --version\n")),(0,r.yg)("p",null,"A successful installation will result in a rustc and cargo version print, a faulty installation will look like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"/bin/bash: line 1: rustc: command not found\n/bin/bash: line 1: cargo: command not found\n")),(0,r.yg)("p",null,"Now we will check the environment:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"!nvcc --version\n!gcc --version\n!cmake --version\n!nvidia-smi\n")),(0,r.yg)("p",null,"A correct environment should print the result with no bash errors for ",(0,r.yg)("inlineCode",{parentName:"p"},"nvidia-smi")," command and result in a ",(0,r.yg)("strong",{parentName:"p"},"Teslt T4 GPU")," type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"nvcc: NVIDIA (R) Cuda compiler driver\nCopyright (c) 2005-2023 NVIDIA Corporation\nBuilt on Tue_Aug_15_22:02:13_PDT_2023\nCuda compilation tools, release 12.2, V12.2.140\nBuild cuda_12.2.r12.2/compiler.33191640_0\ngcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0\nCopyright (C) 2021 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\ncmake version 3.27.9\n\nCMake suite maintained and supported by Kitware (kitware.com/cmake).\nWed Jan 17 13:10:18 2024\n+---------------------------------------------------------------------------------------+\n| NVIDIA-SMI 535.104.05             Driver Version: 535.104.05   CUDA Version: 12.2     |\n|-----------------------------------------+----------------------+----------------------+\n| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |\n|                                         |                      |               MIG M. |\n|=========================================+======================+======================|\n|   0  Tesla T4                       Off | 00000000:00:04.0 Off |                    0 |\n| N/A   39C    P8               9W /  70W |      0MiB / 15360MiB |      0%      Default |\n|                                         |                      |                  N/A |\n+-----------------------------------------+----------------------+----------------------+\n\n+---------------------------------------------------------------------------------------+\n| Processes:                                                                            |\n|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |\n|        ID   ID                                                             Usage      |\n|=======================================================================================|\n|  No running processes found                                                           |\n+---------------------------------------------------------------------------------------+\n")),(0,r.yg)("h2",{id:"cloning-icicle-and-running-test"},"Cloning ICICLE and running test"),(0,r.yg)("p",null,"Now we are ready to clone ICICE repository,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"!git clone https://github.com/ingonyama-zk/icicle.git\n")),(0,r.yg)("p",null,"We can browse the repository and run tests to check the runtime environment:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"!ls -la\n%cd /content/icicle\n")),(0,r.yg)("h2",{id:"download-cuda-backend"},"Download CUDA backend"),(0,r.yg)("p",null,"First let's create a backend directory"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"%cd /content\n!rm -rf cuda_backend/\n!mkdir cuda_backend\n%cd cuda_backend\n")),(0,r.yg)("p",null,"Download and extract a backend from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/releases"},"ICICLE released")," backends\nIn this example we are using ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/releases/download/v3.1.0/icicle_3_1_0-ubuntu22-cuda122.tar.gz"},"ICICLE Cuda backend v3.1.0")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"!curl -O -L https://github.com/ingonyama-zk/icicle/releases/download/v3.1.0/icicle_3_1_0-ubuntu22-cuda122.tar.gz\n!tar -xvf icicle_3_1_0-ubuntu22-cuda122.tar.gz\n")),(0,r.yg)("h2",{id:"setting-cuda-backend-installation-directory"},"Setting CUDA backend installation directory"),(0,r.yg)("p",null,"Point colab to the extracted cuda backend using an ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/f638e9d3056d2a5d6271a67ba4f63973a2ba2c1a/docs/docs/icicle/getting_started.md#backend-loading"},"environment variable")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'import os\nos.envvar["ICICLE_BACKEND_INSTALL_DIR"] = "/content/cuda_backend/icicle"\n')),(0,r.yg)("h2",{id:"fun-with-icicle"},"Fun with ICICLE"),(0,r.yg)("p",null,"Let's run a test!\nNavigate to icicle/wrappers/rust/icicle-curves/icicle-bn254 and run cargo test:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"%cd /content/icicle/wrappers/rust/icicle-curves/icicle-bn254/\n!cargo test --release -- ntt\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Compiling the first time may take a while"))),(0,r.yg)("p",null,"Test run should end like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"running 9 tests\n[WARNING] Defaulting to Ingonyama icicle-cuda-license-server at `5053@license.icicle.ingonyama.com`. For more information about icicle-cuda-license, please contact support@ingonyama.com.\n[INFO] ICICLE backend loaded from $ICICLE_BACKEND_INSTALL_DIR=/content/cuda_backend/icicle\ntest ecntt::tests::test_ecntt::test_ecntt_batch ... ok\ntest ntt::tests::test_ntt ... ok\ntest ntt::tests::test_ntt_arbitrary_coset ... ok\ntest ntt::tests::test_ntt_batch ... ok\ntest ntt::tests::test_ntt_coset_from_subgroup ... ok\ntest ntt::tests::test_ntt_coset_interpolation_nm ... ok\ntest ecntt::tests::test_ecntt::test_ecntt ... ok\ntest ntt::tests::test_ntt_device_async ... ok\ntest ntt::tests::test_ntt_release_domain ... ok\n\ntest result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 36 filtered out; finished in 42.71s\n")),(0,r.yg)("p",null,"Viola, ICICLE in Colab!"))}g.isMDXComponent=!0},3747:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/colab_change_runtime-eda3091877f78ec971a41338d6b33c2c.png"},1547:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/t4_gpu-798c30098fd3b77784113e9a13659489.png"},1873:(e,n,t)=>{t(6540)}}]);