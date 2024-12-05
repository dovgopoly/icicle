"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[2377],{7753:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"icicle/getting_started","title":"Getting started Guide","description":"Overview","source":"@site/versioned_docs/version-3.0.0/icicle/getting_started.md","sourceDirName":"icicle","slug":"/icicle/getting_started","permalink":"/3.0.0/icicle/getting_started","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/getting_started.md","tags":[],"version":"3.0.0","lastUpdatedBy":"danny-shterman","lastUpdatedAt":1733429726000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"ICICLE Overview","permalink":"/3.0.0/icicle/overview"},"next":{"title":"Build ICICLE from source","permalink":"/3.0.0/icicle/build_from_source"}}');var r=n(4848),s=n(8453);const t={},c="Getting started Guide",a={},d=[{value:"Overview",id:"overview",level:2},{value:"Content of a Release",id:"content-of-a-release",level:2},{value:"Installing and using ICICLE",id:"installing-and-using-icicle",level:2},{value:"Backend Loading",id:"backend-loading",level:2},{value:"Custom Backend Loading",id:"custom-backend-loading",level:3}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"getting-started-guide",children:"Getting started Guide"})}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(i.p,{children:"This guide will walk you through the entire process of building, testing, and installing ICICLE using your preferred programming language\u2014C++, Rust, or Go. Whether you're deploying on a CPU or leveraging CUDA for accelerated performance, this guide provides comprehensive instructions to get you started. It also outlines the typical workflow for a user, including key installation steps:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Install ICICLE or build it from source"}),": This is explained in this guide. For building from source, refer to the ",(0,r.jsx)(i.a,{href:"/3.0.0/icicle/build_from_source",children:"Build from Source page"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsxs)(i.strong,{children:["Follow the ",(0,r.jsx)(i.a,{href:"/3.0.0/icicle/programmers_guide/general",children:"Programmer\u2019s Guide"})]}),": Learn how to use ICICLE APIs."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Start using ICICLE APIs on your CPU"}),": Your application will now use ICICLE on the CPU."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Accelerate your application on a GPU"}),": ",(0,r.jsx)(i.a,{href:"/3.0.0/icicle/install_cuda_backend",children:"install the CUDA backend"}),",  load it, and select it in your application (",(0,r.jsx)(i.a,{href:"/3.0.0/icicle/programmers_guide/cpp#loading-a-backend",children:"C++"}),",",(0,r.jsx)(i.a,{href:"/3.0.0/icicle/programmers_guide/rust#loading-a-backend",children:"Rust"}),", ",(0,r.jsx)(i.a,{href:"/3.0.0/icicle/programmers_guide/go#loading-a-backend",children:"Go"}),")."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Run on the GPU"}),": Once the GPU backend is selected, all subsequent API calls will execute on the GPU."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Optimize for multi-GPU environments"}),": Refer to the ",(0,r.jsx)(i.a,{href:"/3.0.0/icicle/multi-device",children:"Multi-GPU"})," Guide to fully utilize your system\u2019s capabilities."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Review memory management"}),": Revisit the ",(0,r.jsx)(i.a,{href:"/3.0.0/icicle/programmers_guide/general#device-abstraction",children:"Memory Management section"})," to allocate memory on the device efficiently and try to keep data on the GPU as long as possible."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"The rest of this page details the content of a release, how to install it, and how to use it. ICICLE binaries are released for multiple Linux distributions, including Ubuntu 20.04, Ubuntu 22.04, RHEL 8, and RHEL 9."}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"Future releases will also include support for macOS and other systems."})}),"\n",(0,r.jsx)(i.h2,{id:"content-of-a-release",children:"Content of a Release"}),"\n",(0,r.jsxs)(i.p,{children:["Each ICICLE release includes a tar file named ",(0,r.jsx)(i.code,{children:"icicle30-<distribution>.tar.gz"}),", where ",(0,r.jsx)(i.code,{children:"icicle30"})," indicates version 3.0. This tar file contains ICICLE frontend build artifacts and headers for a specific distribution. The tar file structure includes:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"./icicle/include/"})}),": This directory contains all the necessary header files for using the ICICLE library from C++."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"./icicle/lib/"})}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Icicle Libraries"}),": All the core ICICLE libraries are located in this directory. Applications linking to ICICLE will use these libraries."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Backends"}),": The ",(0,r.jsx)(i.code,{children:"./icicle/lib/backend/"})," directory houses backend libraries, including the CUDA backend (not included in this tar)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"CUDA backend"})," comes as separate tar ",(0,r.jsx)(i.code,{children:"icicle30-<distribution>-cuda122.tar.gz"})]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"per distribution, for ICICLE-frontend v3.0 and CUDA 12.2."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"installing-and-using-icicle",children:"Installing and using ICICLE"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/examples/c++/install-and-use-icicle",children:"Full C++ example"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/examples/rust/install-and-use-icicle",children:"Full Rust example"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/examples/golang/install-and-use-icicle",children:"Full Go example"})}),"\n"]}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Extract and install the Tar Files"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/releases",children:"Download"})," the appropriate tar files for your distribution (Ubuntu 20.04, Ubuntu 22.04, or UBI 8,9 for RHEL compatible binaries)."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Frontend libs and headers"})," should be installed in default search paths (such as ",(0,r.jsx)(i.code,{children:"/usr/lib"})," and ",(0,r.jsx)(i.code,{children:"usr/local/include"}),") for the compiler and linker to find."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Backend libs"})," should be installed in ",(0,r.jsx)(i.code,{children:"/opt"})]}),"\n",(0,r.jsx)(i.li,{children:"Extract it to your desired location:"}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"# install the frontend part (Can skip for Rust)\ntar xzvf icicle30-ubuntu22.tar.gz\ncp -r ./icicle/lib/* /usr/lib/\ncp -r ./icicle/include/icicle/ /usr/local/include/ # copy C++ headers\n# extract CUDA backend (OPTIONAL)\ntar xzvf icicle30-ubuntu22-cuda122.tar.gz -C /opt\n"})}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"Installing the frontend is optional for Rust. Rust does not use it."})}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"You may install to any directory, but you need to ensure it can be found by the linker at compile and runtime.\nYou can install anywhere and use a symlink to ensure it can be easily found as if it were in the default directory."})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Linking Your Application"}),":"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Applications need to link to the ICICLE device library and to every field and/or curve library. The backend libraries are dynamically loaded at runtime, so there is no need to link to them."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"C++"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"When compiling your C++ application, link against the ICICLE libraries:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"g++ -o myapp myapp.cpp -licicle_device -licicle_field_bn254 -licicle_curve_bn254\n# if not installed in standard dirs, for example /custom/path/, need to specify it\ng++ -o myapp myapp.cpp -I/custom/path/icicle/include -L/custom/path/icicle/lib -licicle_device -licicle_field_bn254 -licicle_curve_bn254 -Wl,-rpath,/custom/path/icicle/lib/\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Or via cmake"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"# Add the executable\nadd_executable(example example.cpp)\n# Link the libraries\ntarget_link_libraries(example icicle_device icicle_field_bn254 icicle_curve_bn254)\n\n# OPTIONAL (if not installed in default location)\n\n# The following is setting compile and runtime paths for headers and libs assuming\n#   - headers in /custom/path/icicle/include\n#   - libs in/custom/path/icicle/lib\n\n# Include directories\ntarget_include_directories(example PUBLIC /custom/path/icicle/include)\n# Library directories\ntarget_link_directories(example PUBLIC /custom/path/icicle/lib/)\n# Set the RPATH so linker finds icicle libs at runtime\nset_target_properties(example PROPERTIES\n                      BUILD_RPATH /custom/path/icicle/lib/\n                      INSTALL_RPATH /custom/path/icicle/lib/)\n"})}),"\n",(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.p,{children:["If you face linkage issues, try ",(0,r.jsx)(i.code,{children:"ldd myapp"})," to see the runtime dependencies. If ICICLE libs are not found, you need to add the install directory to the search path of the linker. In a development environment, you can do that using the environment variable export ",(0,r.jsx)(i.code,{children:"LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/custom/path/icicle/lib"})," or similar (for non-Linux). For deployment, make sure it can be found and avoid using LD_LIBRARY_PATH."]}),(0,r.jsxs)(i.p,{children:["Alternatively, you can embed the search path in the app as an rpath by adding ",(0,r.jsx)(i.code,{children:"-Wl,-rpath,/custom/path/icicle/lib/"}),". This is demonstrated above."]})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Rust"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["When building the ICICLE crates, ICICLE frontend libs are built from source, along with the Rust bindings. They are installed to ",(0,r.jsx)(i.code,{children:"target/<buildtype>/deps/icicle"}),", and Cargo will link them correctly. Note that you still need to install the CUDA backend if you have a CUDA GPU."]}),"\n",(0,r.jsxs)(i.li,{children:["Simply use ",(0,r.jsx)(i.code,{children:"cargo build"})," or ",(0,r.jsx)(i.code,{children:"cargo run"})," and it should link to ICICLE libs."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Go"})," - TODO"]}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"When deploying an application (whether in C++, Rust, or Go), you must make sure to either deploy the ICICLE libs (that you download or build from source) along with the application binaries (as tar, Docker image, package manager installer, or otherwise) or make sure to install ICICLE (and the backend) on the target machine. Otherwise, the target machine will have linkage issues."})}),"\n",(0,r.jsx)(i.h2,{id:"backend-loading",children:"Backend Loading"}),"\n",(0,r.jsx)(i.p,{children:"The ICICLE library dynamically loads backend libraries at runtime. By default, it searches for backends in the following order:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Environment Variable"}),": If the ",(0,r.jsx)(i.code,{children:"ICICLE_BACKEND_INSTALL_DIR"})," environment variable is defined, ICICLE will prioritize this location."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Default Directory"}),": If the environment variable is not set, Icicle will search in the default directory ",(0,r.jsx)(i.code,{children:"/opt/icicle/lib/backend"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"If building ICICLE frontend from source, make sure to load a backend that is compatible with the frontend version. CUDA backend libs are forward compatible with newer frontends (e.g., CUDA-backend-3.0 works with ICICLE-3.2). The opposite is not guaranteed."})}),"\n",(0,r.jsxs)(i.p,{children:["If you install in a custom dir, make sure to set ",(0,r.jsx)(i.code,{children:"ICICLE_BACKEND_INSTALL_DIR"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"ICICLE_BACKEND_INSTALL_DIR=path/to/icicle/lib/backend/ myapp # for an executable myapp\nICICLE_BACKEND_INSTALL_DIR=path/to/icicle/lib/backend/ cargo run # when using cargo\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Then to load backend from ICICLE_BACKEND_INSTALL_DIR or ",(0,r.jsx)(i.code,{children:"/opt/icicle/lib/backend"})," in your application:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"C++"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:'extern "C" eIcicleError icicle_load_backend_from_env_or_default();\n'})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Rust"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-rust",children:"pub fn load_backend_from_env_or_default() -> Result<(), eIcicleError>;\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Go"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:"TODO\n"})}),"\n",(0,r.jsx)(i.h3,{id:"custom-backend-loading",children:"Custom Backend Loading"}),"\n",(0,r.jsx)(i.p,{children:"If you need to load a backend from a custom location at any point during runtime, you can call the following function:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"C++"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:'extern "C" eIcicleError icicle_load_backend(const char* path, bool is_recursive);\n'})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"path"})}),": The directory where the backend libraries are located."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"is_recursive"})}),": If ",(0,r.jsx)(i.code,{children:"true"}),", the function will search for backend libraries recursively within the specified path."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Rust"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-rust",children:"  pub fn load_backend(path: &str) -> Result<(), eIcicleError>; // OR\n  pub fn load_backend_non_recursive(path: &str) -> Result<(), eIcicleError>;\n"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"path"})}),": The directory where the backend libraries are located."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Go"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:"TODO\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>c});var l=n(6540);const r={},s=l.createContext(r);function t(e){const i=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:i},e.children)}}}]);