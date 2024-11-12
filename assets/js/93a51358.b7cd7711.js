"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7966],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?i.createElement(g,o(o({ref:n},u),{},{components:t})):i.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=t(8168),r=(t(6540),t(5680));t(1873);const a={},o="Rust bindings",c={unversionedId:"icicle/rust-bindings",id:"icicle/rust-bindings",title:"Rust bindings",description:"Rust bindings allow you to use ICICLE as a rust library.",source:"@site/docs/icicle/rust-bindings.md",sourceDirName:"icicle",slug:"/icicle/rust-bindings",permalink:"/icicle/rust-bindings",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/docs/icicle/rust-bindings.md",tags:[],version:"current",lastUpdatedBy:"Leon Hibnik",lastUpdatedAt:1731399328,formattedLastUpdatedAt:"11/12/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Merkle Tree API Documentation (Golang)",permalink:"/icicle/golang-bindings/merkle"},next:{title:"MSM",permalink:"/icicle/rust-bindings/msm"}},l={},s=[{value:"Using ICICLE Rust bindings in your project",id:"using-icicle-rust-bindings-in-your-project",level:2},{value:"How do the rust bindings work?",id:"how-do-the-rust-bindings-work",level:2}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,i.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rust-bindings"},"Rust bindings"),(0,r.yg)("p",null,"Rust bindings allow you to use ICICLE as a rust library."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"icicle-core")," defines all interfaces, macros and common methods."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"icicle-runtime")," contains runtime APIs for memory management, stream management and more."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"icicle-curves")," / ",(0,r.yg)("inlineCode",{parentName:"p"},"icicle-fields")," implement all interfaces and macros from icicle-core for each curve. For example icicle-bn254 implements curve bn254. Each curve has its own build script which will build the ICICLE libraries for that curve as part of the rust-toolchain build."),(0,r.yg)("h2",{id:"using-icicle-rust-bindings-in-your-project"},"Using ICICLE Rust bindings in your project"),(0,r.yg)("p",null,"Simply add the following to your ",(0,r.yg)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-toml"},'# GPU Icicle integration\nicicle-runtime = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-core = { git = "https://github.com/ingonyama-zk/icicle.git" }\nicicle-bn254 = { git = "https://github.com/ingonyama-zk/icicle.git" }\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"icicle-bn254")," being the curve you wish to use and ",(0,r.yg)("inlineCode",{parentName:"p"},"icicle-core")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"icicle-runtime")," contain ICICLE utilities and CUDA wrappers."),(0,r.yg)("p",null,"If you wish to point to a specific ICICLE branch add ",(0,r.yg)("inlineCode",{parentName:"p"},'branch = "<name_of_branch>"')," or ",(0,r.yg)("inlineCode",{parentName:"p"},'tag = "<name_of_tag>"')," to the ICICLE dependency. For a specific commit add ",(0,r.yg)("inlineCode",{parentName:"p"},'rev = "<commit_id>"'),"."),(0,r.yg)("p",null,"When you build your project ICICLE will be built as part of the build command."),(0,r.yg)("h2",{id:"how-do-the-rust-bindings-work"},"How do the rust bindings work?"),(0,r.yg)("p",null,"The rust bindings are rust crates that wrap the ICICLE Core libraries (C++). Each crate can wrap one or more ICICLE core libraries. They are built too when building the crate."),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Since ICICLE V3, core libraries are shared-libraries. This means that they must be installed in a directory that can be found by the linker. In addition, installing an application that depends on ICICLE must make sure to install ICICLE or have it installed on the target machine."))))}p.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);