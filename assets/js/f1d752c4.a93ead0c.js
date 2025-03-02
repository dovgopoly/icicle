"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8207],{28295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"icicle/colab-instructions","title":"Run ICICLE on Google Colab","description":"Google Colab lets you use a GPU free of charge, it\'s an Nvidia T4 GPU with 16 GB of memory, capable of running latest CUDA (tested on Cuda 12.2)","source":"@site/versioned_docs/version-3.5.0/icicle/colab-instructions.md","sourceDirName":"icicle","slug":"/icicle/colab-instructions","permalink":"/icicle/colab-instructions","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.5.0/icicle/colab-instructions.md","tags":[],"version":"3.5.0","lastUpdatedBy":"youyyytrok","lastUpdatedAt":1740918389000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Migrate from ICICLE v2","permalink":"/icicle/migrate_from_v2"},"next":{"title":"ICICLE Provers","permalink":"/icicle/integrations"}}');var s=t(74848),c=t(28453);const a={},o="Run ICICLE on Google Colab",r={},l=[{value:"Prepare Colab environment",id:"prepare-colab-environment",level:2},{value:"Cloning ICICLE and running test",id:"cloning-icicle-and-running-test",level:2},{value:"Download CUDA backend",id:"download-cuda-backend",level:2},{value:"Setting CUDA backend installation directory",id:"setting-cuda-backend-installation-directory",level:2},{value:"Fun with ICICLE",id:"fun-with-icicle",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"run-icicle-on-google-colab",children:"Run ICICLE on Google Colab"})}),"\n",(0,s.jsx)(n.p,{children:"Google Colab lets you use a GPU free of charge, it's an Nvidia T4 GPU with 16 GB of memory, capable of running latest CUDA (tested on Cuda 12.2)\nAs Colab is able to interact with shell commands, a user can also install a framework and load git repositories into Colab space."}),"\n",(0,s.jsx)(n.h2,{id:"prepare-colab-environment",children:"Prepare Colab environment"}),"\n",(0,s.jsx)(n.p,{children:"First thing to do in a notebook is to set the runtime type to a T4 GPU."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'in the upper corner click on the dropdown menu and select "change runtime type"'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Change runtime",src:t(53747).A+"",width:"423",height:"388"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'In the window select "T4 GPU" and press Save'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"T4 GPU",src:t(81547).A+"",width:"582",height:"424"})}),"\n",(0,s.jsx)(n.p,{children:"Installing Rust is rather simple, just execute the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"!apt install rustc cargo\n"})}),"\n",(0,s.jsx)(n.p,{children:"To test the installation of Rust:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"!rustc --version\n!cargo --version\n"})}),"\n",(0,s.jsx)(n.p,{children:"A successful installation will result in a rustc and cargo version print, a faulty installation will look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"/bin/bash: line 1: rustc: command not found\n/bin/bash: line 1: cargo: command not found\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now we will check the environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"!nvcc --version\n!gcc --version\n!cmake --version\n!nvidia-smi\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A correct environment should print the result with no bash errors for ",(0,s.jsx)(n.code,{children:"nvidia-smi"})," command and result in a ",(0,s.jsx)(n.strong,{children:"Teslt T4 GPU"})," type:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nvcc: NVIDIA (R) Cuda compiler driver\nCopyright (c) 2005-2023 NVIDIA Corporation\nBuilt on Tue_Aug_15_22:02:13_PDT_2023\nCuda compilation tools, release 12.2, V12.2.140\nBuild cuda_12.2.r12.2/compiler.33191640_0\ngcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0\nCopyright (C) 2021 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\ncmake version 3.27.9\n\nCMake suite maintained and supported by Kitware (kitware.com/cmake).\nWed Jan 17 13:10:18 2024\n+---------------------------------------------------------------------------------------+\n| NVIDIA-SMI 535.104.05             Driver Version: 535.104.05   CUDA Version: 12.2     |\n|-----------------------------------------+----------------------+----------------------+\n| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |\n|                                         |                      |               MIG M. |\n|=========================================+======================+======================|\n|   0  Tesla T4                       Off | 00000000:00:04.0 Off |                    0 |\n| N/A   39C    P8               9W /  70W |      0MiB / 15360MiB |      0%      Default |\n|                                         |                      |                  N/A |\n+-----------------------------------------+----------------------+----------------------+\n\n+---------------------------------------------------------------------------------------+\n| Processes:                                                                            |\n|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |\n|        ID   ID                                                             Usage      |\n|=======================================================================================|\n|  No running processes found                                                           |\n+---------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cloning-icicle-and-running-test",children:"Cloning ICICLE and running test"}),"\n",(0,s.jsx)(n.p,{children:"Now we are ready to clone ICICE repository,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"!git clone https://github.com/ingonyama-zk/icicle.git\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can browse the repository and run tests to check the runtime environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"!ls -la\n%cd /content/icicle\n"})}),"\n",(0,s.jsx)(n.h2,{id:"download-cuda-backend",children:"Download CUDA backend"}),"\n",(0,s.jsx)(n.p,{children:"First let's create a backend directory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"%cd /content\n!rm -rf cuda_backend/\n!mkdir cuda_backend\n%cd cuda_backend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Download and extract a backend from ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/releases",children:"ICICLE released"})," backends\nIn this example we are using ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/releases/download/v3.1.0/icicle_3_1_0-ubuntu22-cuda122.tar.gz",children:"ICICLE Cuda backend v3.1.0"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"!curl -O -L https://github.com/ingonyama-zk/icicle/releases/download/v3.1.0/icicle_3_1_0-ubuntu22-cuda122.tar.gz\n!tar -xvf icicle_3_1_0-ubuntu22-cuda122.tar.gz\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setting-cuda-backend-installation-directory",children:"Setting CUDA backend installation directory"}),"\n",(0,s.jsxs)(n.p,{children:["Point colab to the extracted cuda backend using an ",(0,s.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/blob/f638e9d3056d2a5d6271a67ba4f63973a2ba2c1a/docs/docs/icicle/getting_started.md#backend-loading",children:"environment variable"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'import os\nos.envvar["ICICLE_BACKEND_INSTALL_DIR"] = "/content/cuda_backend/icicle"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"fun-with-icicle",children:"Fun with ICICLE"}),"\n",(0,s.jsx)(n.p,{children:"Let's run a test!\nNavigate to icicle/wrappers/rust/icicle-curves/icicle-bn254 and run cargo test:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"%cd /content/icicle/wrappers/rust/icicle-curves/icicle-bn254/\n!cargo test --release -- ntt\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Compiling the first time may take a while"})}),"\n",(0,s.jsx)(n.p,{children:"Test run should end like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"running 9 tests\n[WARNING] Defaulting to Ingonyama icicle-cuda-license-server at `5053@license.icicle.ingonyama.com`. For more information about icicle-cuda-license, please contact support@ingonyama.com.\n[INFO] ICICLE backend loaded from $ICICLE_BACKEND_INSTALL_DIR=/content/cuda_backend/icicle\ntest ecntt::tests::test_ecntt::test_ecntt_batch ... ok\ntest ntt::tests::test_ntt ... ok\ntest ntt::tests::test_ntt_arbitrary_coset ... ok\ntest ntt::tests::test_ntt_batch ... ok\ntest ntt::tests::test_ntt_coset_from_subgroup ... ok\ntest ntt::tests::test_ntt_coset_interpolation_nm ... ok\ntest ecntt::tests::test_ecntt::test_ecntt ... ok\ntest ntt::tests::test_ntt_device_async ... ok\ntest ntt::tests::test_ntt_release_domain ... ok\n\ntest result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 36 filtered out; finished in 42.71s\n"})}),"\n",(0,s.jsx)(n.p,{children:"Viola, ICICLE in Colab!"})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},53747:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/colab_change_runtime-eda3091877f78ec971a41338d6b33c2c.png"},81547:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/t4_gpu-798c30098fd3b77784113e9a13659489.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},c=i.createContext(s);function a(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);