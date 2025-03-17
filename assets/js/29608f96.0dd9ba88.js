"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[5565],{52284:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"icicle/primitives/Icicle_Release_README","title":"Icicle Release README","description":"Overview","source":"@site/versioned_docs/version-3.1.0/icicle/primitives/Icicle_Release_README.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/Icicle_Release_README","permalink":"/3.1.0/icicle/primitives/Icicle_Release_README","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/primitives/Icicle_Release_README.md","tags":[],"version":"3.1.0","lastUpdatedBy":"Jeremy Felder","lastUpdatedAt":1742224043000,"frontMatter":{}}');var r=n(74848),c=n(28453);const s={},t="Icicle Release README",a={},d=[{value:"Overview",id:"overview",level:2},{value:"Content of a Release",id:"content-of-a-release",level:2},{value:"Considerations",id:"considerations",level:3},{value:"Build Docker Image",id:"build-docker-image",level:2},{value:"Docker Environment Explanation",id:"docker-environment-explanation",level:3},{value:"Build Libraries Inside the Docker",id:"build-libraries-inside-the-docker",level:2},{value:"Installing and Using the Release",id:"installing-and-using-the-release",level:2},{value:"Backend Loading",id:"backend-loading",level:2},{value:"Custom Backend Loading",id:"custom-backend-loading",level:3}];function o(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"icicle-release-readme",children:"Icicle Release README"})}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(i.p,{children:"Icicle is a powerful C++ library designed to provide flexible and efficient computation through its modular backend architecture. This README explains how to build and release Icicle for multiple Linux distributions, including Ubuntu 20.04, Ubuntu 22.04, and CentOS 7. It also describes the content of a release and how to use the generated tar files."}),"\n",(0,r.jsx)(i.h2,{id:"content-of-a-release",children:"Content of a Release"}),"\n",(0,r.jsx)(i.p,{children:"Each Icicle release includes a tar file containing the build artifacts for a specific distribution. The tar file includes the following structure:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"./icicle/include/"})}),": This directory contains all the necessary header files for using the Icicle library from C++."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"./icicle/lib/"})}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Icicle Libraries"}),": All the core Icicle libraries are located in this directory. Applications linking to Icicle will use these libraries."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Backends"}),": The ",(0,r.jsx)(i.code,{children:"./icicle/lib/backend/"})," directory houses backend libraries, including the CUDA backend. While the CUDA backend is included, it will only be used on machines with a GPU. On machines without a GPU, the CUDA backend is not utilized."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"considerations",children:"Considerations"}),"\n",(0,r.jsx)(i.p,{children:"Currently, the CUDA backend is included in every installation tar file, even on machines without a GPU. This ensures consistency across installations but results in additional files being installed that may not be used."}),"\n",(0,r.jsx)(i.h2,{id:"build-docker-image",children:"Build Docker Image"}),"\n",(0,r.jsx)(i.p,{children:"To build the Docker images for each distribution and CUDA version, use the following commands:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"# Ubuntu 22.04, CUDA 12.2\ndocker build -t icicle-release-ubuntu22-cuda122 -f Dockerfile.ubuntu22 .\n\n# Ubuntu 20.04, CUDA 12.2\ndocker build -t icicle-release-ubuntu20-cuda122 -f Dockerfile.ubuntu20 .\n\n# CentOS 7, CUDA 12.2\ndocker build -t icicle-release-centos7-cuda122 -f Dockerfile.centos7 .\n"})}),"\n",(0,r.jsx)(i.h3,{id:"docker-environment-explanation",children:"Docker Environment Explanation"}),"\n",(0,r.jsx)(i.p,{children:"The Docker images you build represent the target environment for the release. Each Docker image is tailored to a specific distribution and CUDA version. You first build the Docker image, which sets up the environment, and then use this Docker image to build the release tar file. This ensures that the build process is consistent and reproducible across different environments."}),"\n",(0,r.jsx)(i.h2,{id:"build-libraries-inside-the-docker",children:"Build Libraries Inside the Docker"}),"\n",(0,r.jsxs)(i.p,{children:["To build the Icicle libraries inside a Docker container and output the tar file to the ",(0,r.jsx)(i.code,{children:"release_output"})," directory:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"mkdir -p release_output\ndocker run --rm --gpus all              -v ./icicle:/icicle                 -v ./release_output:/output         -v ./scripts:/scripts               icicle-release-ubuntu22-cuda122 bash /scripts/release/build_release_and_tar.sh\n"})}),"\n",(0,r.jsxs)(i.p,{children:["This command executes the ",(0,r.jsx)(i.code,{children:"build_release_and_tar.sh"})," script inside the Docker container, which provides the build environment. It maps the source code and output directory to the container, ensuring the generated tar file is available on the host system."]}),"\n",(0,r.jsxs)(i.p,{children:["You can replace ",(0,r.jsx)(i.code,{children:"icicle-release-ubuntu22-cuda122"})," with another Docker image tag to build in the corresponding environment (e.g., Ubuntu 20.04 or CentOS 7)."]}),"\n",(0,r.jsx)(i.h2,{id:"installing-and-using-the-release",children:"Installing and Using the Release"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Extract the Tar File"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Download the appropriate tar file for your distribution (Ubuntu 20.04, Ubuntu 22.04, or CentOS 7)."}),"\n",(0,r.jsxs)(i.li,{children:["Extract it to your desired location:","\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"tar -xzvf icicle-<distribution>-cuda122.tar.gz -C /path/to/install/location\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Linking Your Application"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["When compiling your C++ application, link against the Icicle libraries found in ",(0,r.jsx)(i.code,{children:"./icicle/lib/"}),":","\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"g++ -o myapp myapp.cpp -L/path/to/icicle/lib -licicle_device -licicle_field_or_curve\n"})}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"Note: You only need to link to the Icicle device and field or curve libraries. The backend libraries are dynamically loaded at runtime."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"backend-loading",children:"Backend Loading"}),"\n",(0,r.jsx)(i.p,{children:"The Icicle library dynamically loads backend libraries at runtime. By default, it searches for backends in the following order:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Environment Variable"}),": If the ",(0,r.jsx)(i.code,{children:"ICICLE_BACKEND_INSTALL_DIR"})," environment variable is defined, Icicle will prioritize this location."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Default Directory"}),": If the environment variable is not set, Icicle will search in the default directory ",(0,r.jsx)(i.code,{children:"/opt/icicle/lib/backend"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"custom-backend-loading",children:"Custom Backend Loading"}),"\n",(0,r.jsx)(i.p,{children:"If you need to load a backend from a custom location at any point during runtime, you can call the following function:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:'extern "C" eIcicleError icicle_load_backend(const char* path, bool is_recursive);\n'})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"path"})}),": The directory where the backend libraries are located."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"is_recursive"})}),": If ",(0,r.jsx)(i.code,{children:"true"}),", the function will search for backend libraries recursively within the specified path."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{})]})}function h(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>t});var l=n(96540);const r={},c=l.createContext(r);function s(e){const i=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(c.Provider,{value:i},e.children)}}}]);