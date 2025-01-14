"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[9829],{3623:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"icicle/build_from_source","title":"Build ICICLE from source","description":"This guide will help you get started with building, testing, and installing ICICLE, whether you\'re using C++, Rust, or Go. It also covers installation of the CUDA backend and important build options.","source":"@site/versioned_docs/version-3.2.0/icicle/build_from_source.md","sourceDirName":"icicle","slug":"/icicle/build_from_source","permalink":"/3.2.0/icicle/build_from_source","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.2.0/icicle/build_from_source.md","tags":[],"version":"3.2.0","lastUpdatedBy":"ShaniBabayoff","lastUpdatedAt":1736868439000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Getting started Guide","permalink":"/3.2.0/icicle/getting_started"},"next":{"title":"Icicle Programmer\'s Guide","permalink":"/3.2.0/icicle/programmers_guide/general"}}');var s=i(4848),d=i(8453);const c={},t="Build ICICLE from source",a={},r=[{value:"Building and Testing ICICLE frontend",id:"building-and-testing-icicle-frontend",level:2},{value:"C++: Build, Test, and Install (Frontend)",id:"c-build-test-and-install-frontend",level:3},{value:"Build Commands",id:"build-commands",level:4},{value:"Build Flags",id:"build-flags",level:4},{value:"Features",id:"features",level:4},{value:"Rust: Build, Test, and Install",id:"rust-build-test-and-install",level:3},{value:"Use as cargo dependency",id:"use-as-cargo-dependency",level:4},{value:"Go: Build, Test, and Install (TODO)",id:"go-build-test-and-install-todo",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"build-icicle-from-source",children:"Build ICICLE from source"})}),"\n",(0,s.jsx)(n.p,{children:"This guide will help you get started with building, testing, and installing ICICLE, whether you're using C++, Rust, or Go. It also covers installation of the CUDA backend and important build options."}),"\n",(0,s.jsx)(n.h2,{id:"building-and-testing-icicle-frontend",children:"Building and Testing ICICLE frontend"}),"\n",(0,s.jsx)(n.h3,{id:"c-build-test-and-install-frontend",children:"C++: Build, Test, and Install (Frontend)"}),"\n",(0,s.jsx)(n.p,{children:"ICICLE can be built and tested in C++ using CMake. The build process is straightforward, but there are several flags you can use to customize the build for your needs."}),"\n",(0,s.jsx)(n.h4,{id:"build-commands",children:"Build Commands"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Clone the ICICLE repository:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ingonyama-zk/icicle.git\ncd icicle\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Configure the build:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p build && rm -rf build/*\ncmake -S icicle -B build -DFIELD=babybear\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"To specify the field, use the flag -DFIELD=field, where field can be one of the following: babybear, stark252, m31."}),(0,s.jsx)(n.p,{children:"To specify a curve, use the flag -DCURVE=curve, where curve can be one of the following: bn254, bls12_377, bls12_381, bw6_761, grumpkin."})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"If you have access to cuda backend repo, it can be built along ICICLE frontend by adding the following to the cmake command"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DCUDA_BACKEND=local"})," # if you have it locally"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DCUDA_BACKEND=<commit|branch>"})," # to pull CUDA backend, given you have access"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Build the project:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cmake --build build -j\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is building the ",(0,s.jsx)(n.a,{href:"/3.2.0/icicle/libraries#icicle-device",children:"libicicle_device"})," and the ",(0,s.jsx)(n.a,{href:"/3.2.0/icicle/libraries#icicle-core",children:"libicicle_field_babybear"})," frontend lib that correspond to the field or curve."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Link:"}),"\nLink you application (or library) to ICICLE:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"target_link_libraries(yourApp PRIVATE icicle_field_babybear icicle_device)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Installation (optional):"}),"\nTo install the libs, specify the install prefix in the ",(0,s.jsx)(n.a,{href:"/3.2.0/icicle/build_from_source#build-commands",children:"cmake command"}),"\n",(0,s.jsx)(n.code,{children:"-DCMAKE_INSTALL_PREFIX=/install/dir/"}),". Default install path on linux is ",(0,s.jsx)(n.code,{children:"/usr/local"})," if not specified. For other systems it may differ. The cmake command will print it to the log"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"-- CMAKE_INSTALL_PREFIX=/install/dir/for/cmake/install\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then after building, use cmake to install the libraries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cmake -S icicle -B build -DFIELD=babybear -DCMAKE_INSTALL_PREFIX=/path/to/install/dir/\ncmake --build build -j # build\ncmake --install build # install icicle to /path/to/install/dir/\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Run tests (optional):"}),"\nAdd ",(0,s.jsx)(n.code,{children:"-DBUILD_TESTS=ON"})," to the ",(0,s.jsx)(n.a,{href:"/3.2.0/icicle/build_from_source#build-commands",children:"cmake command"})," and build.\nExecute all tests"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cmake -S icicle -B build -DFIELD=babybear -DBUILD_TESTS=ON\ncmake --build build -j\ncd build/tests\nctest\n"})}),"\n",(0,s.jsx)(n.p,{children:"or choose the test-suite"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./build/tests/test_field_api # or another test suite\n# can specify tests using regex. For example for tests with ntt in the name:\n./build/tests/test_field_api --gtest_filter="*ntt*"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Most tests assume a cuda backend exists and will fail otherwise if cannot find a CUDA device."})}),"\n",(0,s.jsx)(n.h4,{id:"build-flags",children:"Build Flags"}),"\n",(0,s.jsx)(n.p,{children:"You can customize your ICICLE build with the following flags:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DCPU_BACKEND=ON/OFF"}),": Enable or disable built-in CPU backend. ",(0,s.jsx)(n.code,{children:"default=ON"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DCMAKE_INSTALL_PREFIX=/install/dir"}),": Specify install directory. ",(0,s.jsx)(n.code,{children:"default=/usr/local"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DBUILD_TESTS=ON/OFF"}),": Enable or disable tests. ",(0,s.jsx)(n.code,{children:"default=OFF"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DBUILD_BENCHMARKS=ON/OFF"}),": Enable or disable benchmarks. ",(0,s.jsx)(n.code,{children:"default=OFF"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.p,{children:["By default, all ",(0,s.jsx)(n.a,{href:"/3.2.0/icicle/libraries#supported-curves-and-operations",children:"features"})," are enabled.\nThis is since installed backends may implement and register all APIs. Missing APIs in the frontend would cause linkage to fail due to missing symbols. Therefore by default we include them in the frontend part too."]}),"\n",(0,s.jsx)(n.p,{children:"To disable features, add the following to the cmake command."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ntt: ",(0,s.jsx)(n.code,{children:"-DNTT=OFF"})]}),"\n",(0,s.jsxs)(n.li,{children:["msm: ",(0,s.jsx)(n.code,{children:"-DMSM=OFF"})]}),"\n",(0,s.jsxs)(n.li,{children:["g2 msm: ",(0,s.jsx)(n.code,{children:"-DG2=OFF"})]}),"\n",(0,s.jsxs)(n.li,{children:["ecntt: ",(0,s.jsx)(n.code,{children:"-DECNTT=OFF"})]}),"\n",(0,s.jsxs)(n.li,{children:["extension field: ",(0,s.jsx)(n.code,{children:"-DEXT_FIELD=OFF"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Disabling features is useful when developing with a backend that is slow to compile (e.g. CUDA backend);"})}),"\n",(0,s.jsx)(n.h3,{id:"rust-build-test-and-install",children:"Rust: Build, Test, and Install"}),"\n",(0,s.jsx)(n.p,{children:"To build and test ICICLE in Rust, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Navigate to the Rust bindings directory:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd wrappers/rust # or go to a specific field/curve 'cd wrappers/rust/icicle-fields/icicle-babybear'\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Build the Rust project:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo build --release\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, all ",(0,s.jsx)(n.a,{href:"#features",children:"supported features are enabled"}),".\nCargo features are used to disable features, rather than enable them, for the reason explained ",(0,s.jsx)(n.a,{href:"#features",children:"here"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"no_g2"})," to disable G2 MSM"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"no_ecntt"})," to disable ECNTT"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"They can be disabled as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo build --release --features=no_ecntt,no_g2\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"If you have access to cuda backend repo, it can be built along ICICLE frontend by using the following cargo features:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cuda_backend"})," : if the cuda backend resides in ",(0,s.jsx)(n.code,{children:"icicle/backend/cuda"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pull_cuda_backend"})," : to pull main branch and build it"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Run tests:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo test # optional: --features=no_ecntt,no_g2,cuda_backend\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Most tests assume a CUDA backend is installed and fail otherwise."})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Install the library:"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the libraries are installed to the ",(0,s.jsx)(n.code,{children:"target/<buildmode>/deps/icicle"})," dir. If you want them installed elsewhere, define the env variable:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export ICICLE_INSTALL_DIR=/path/to/install/dir\n"})}),"\n",(0,s.jsx)(n.h4,{id:"use-as-cargo-dependency",children:"Use as cargo dependency"}),"\n",(0,s.jsx)(n.p,{children:"In cargo.toml, specify the ICICLE libs to use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[dependencies]\nicicle-runtime = { git = "https://github.com/ingonyama-zk/icicle.git", branch="main" }\nicicle-core = { git = "https://github.com/ingonyama-zk/icicle.git", branch="main" }\nicicle-babybear = { git = "https://github.com/ingonyama-zk/icicle.git", branch="main" }\n# add other ICICLE crates here if need additional fields/curves\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Can specify ",(0,s.jsx)(n.code,{children:"branch = <branch-name>"})," or ",(0,s.jsx)(n.code,{children:"tag = <tag-name>"})," or ",(0,s.jsx)(n.code,{children:"rev = <commit-id>"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To disable features:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'icicle-bls12-377 = { git = "https://github.com/ingonyama-zk/icicle.git", features = ["no_g2"] }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As explained above, the libs will be built and installed to ",(0,s.jsx)(n.code,{children:"target/<buildmode>/deps/icicle"})," so you can easily link to them. Alternatively you can set ",(0,s.jsx)(n.code,{children:"ICICLE_INSTALL_DIR"})," env variable for a custom install directory."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Make sure to install icicle libs when installing a library/application that depends on icicle such that it is located at runtime."})}),"\n",(0,s.jsx)(n.h3,{id:"go-build-test-and-install-todo",children:"Go: Build, Test, and Install (TODO)"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["To install CUDA backend and license click ",(0,s.jsx)(n.a,{href:"/3.2.0/icicle/install_cuda_backend#installation",children:"here"})]})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var l=i(6540);const s={},d=l.createContext(s);function c(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);