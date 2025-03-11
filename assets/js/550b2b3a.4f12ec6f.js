"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[2803],{98722:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"icicle/integrations","title":"ICICLE Integrated Provers","description":"ICICLE has been used by companies and projects such as Celer Network, Consensys Gnark, EZKL, ZKWASM, Tachyon by Kroma Network, and others to accelerate their ZK proving pipeline.","source":"@site/versioned_docs/version-3.5.0/icicle/integrations.md","sourceDirName":"icicle","slug":"/icicle/integrations","permalink":"/icicle/integrations","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.5.0/icicle/integrations.md","tags":[],"version":"3.5.0","lastUpdatedBy":"Elan","lastUpdatedAt":1741705395000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Google Colab Instructions","permalink":"/icicle/colab-instructions"},"next":{"title":"Ingonyama Grant program","permalink":"/grants"}}');var t=i(74848),o=i(28453);const s={},a="ICICLE Integrated Provers",c={},l=[{value:"A Primer to Building Your Own Integrations",id:"a-primer-to-building-your-own-integrations",level:2},{value:"Using ICICLE Integrated Provers",id:"using-icicle-integrated-provers",level:2},{value:"Gnark",id:"gnark",level:3},{value:"Halo2",id:"halo2",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"icicle-integrated-provers",children:"ICICLE Integrated Provers"})}),"\n",(0,t.jsxs)(n.p,{children:["ICICLE has been used by companies and projects such as ",(0,t.jsx)(n.a,{href:"https://github.com/celer-network",children:"Celer Network"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark",children:"Consensys Gnark"}),", ",(0,t.jsx)(n.a,{href:"https://blog.ezkl.xyz/post/acceleration/",children:"EZKL"}),", ",(0,t.jsx)(n.a,{href:"https://twitter.com/DelphinusLab/status/1762604988797513915",children:"ZKWASM"}),", ",(0,t.jsx)(n.a,{href:"https://blog.kroma.network/icicle-integration-into-tachyon-162b8425f14f",children:"Tachyon by Kroma Network"}),", and others to accelerate their ZK proving pipeline."]}),"\n",(0,t.jsx)(n.p,{children:"Many of these integrations have been collaborative efforts between Ingonyama and our partners, providing valuable insights into designing GPU-based ZK provers."}),"\n",(0,t.jsx)(n.p,{children:"If you want to dive deeper into these integrations or explore how ICICLE can accelerate your ZK proving pipeline, you\u2019re in the right place."}),"\n",(0,t.jsx)(n.h2,{id:"a-primer-to-building-your-own-integrations",children:"A Primer to Building Your Own Integrations"}),"\n",(0,t.jsx)(n.p,{children:"Lets illustrate an ICICLE integration, so you can understand the core API and design overview of ICICLE."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ICICLE architecture",src:i(47861).A+"",width:"906",height:"878"})}),"\n",(0,t.jsx)(n.p,{children:"Engineers typically rely on cryptographic libraries to implement ZK protocols, using efficient primitives as building blocks. ICICLE is one such library, uniquely designed from the ground up to run on GPUs. Its Rust and Golang APIs abstract away the complexities of CUDA, enabling developers with no GPU experience to get started quickly and efficiently."}),"\n",(0,t.jsx)(n.p,{children:"A developer may use ICICLE with two main approaches in mind:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Drop-in replacement approach."}),"\n",(0,t.jsx)(n.li,{children:"End-to-End GPU replacement approach."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The first approach to GPU-accelerating your Prover with ICICLE is quick to implement but comes with limitations, such as reduced memory optimization and limited protocol tuning for GPUs. While it\u2019s a strong starting point, those looking to fully harness GPU acceleration should explore more advanced solutions."}),"\n",(0,t.jsx)(n.p,{children:"An end-to-end GPU replacement involves performing the entire ZK proof on the GPU. This approach minimizes latency, fully leverages GPU acceleration, and requires adapting the protocol to be more GPU-friendly. While redesigning your prover this way demands additional engineering effort, the results are well worth it!"}),"\n",(0,t.jsx)(n.h2,{id:"using-icicle-integrated-provers",children:"Using ICICLE Integrated Provers"}),"\n",(0,t.jsx)(n.p,{children:"This section explains how developers can run existing circuits on ICICLE-integrated provers."}),"\n",(0,t.jsx)(n.h3,{id:"gnark",children:"Gnark"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark",children:"Gnark"})," officially supports GPU proving with ICICLE. Currently only Groth16 on curve ",(0,t.jsx)(n.code,{children:"BN254"})," is supported. This means that if you are currently using Gnark to write your circuits you can enjoy GPU acceleration without making many changes."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Currently ICICLE has been merged to Gnark ",(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark",children:"master branch"}),", however the ",(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark/releases/tag/v0.9.1",children:"latest release"})," is from October 2023."]})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure your golang circuit project has ",(0,t.jsx)(n.code,{children:"gnark"})," as a dependency and that you are using the master branch for now."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"go get \tgithub.com/consensys/gnark@master\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see two indirect dependencies added."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"...\n\tgithub.com/ingonyama-zk/icicle v0.1.0 // indirect\n\tgithub.com/ingonyama-zk/iciclegnark v0.1.1 // indirect\n...\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"As you may notice we are using ICICLE v0.1 here since golang bindings are only support in ICICLE v0.1 for the time being."})}),"\n",(0,t.jsx)(n.p,{children:"To switch over to ICICLE proving, make sure to change the backend you are using, below is an example of how this should be done."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// toggle on\nproofIci, err := groth16.Prove(ccs, pk, secretWitness, backend.WithIcicleAcceleration())\n\n// toggle off\nproof, err := groth16.Prove(ccs, pk, secretWitness)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now that you have enabled ",(0,t.jsx)(n.code,{children:"WithIcicleAcceleration"})," backend simple change the way your run your circuits to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"go run -tags=icicle main.go\n"})}),"\n",(0,t.jsx)(n.p,{children:"Your logs should look something like this if everything went as expected."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"13:12:05 INF compiling circuit\n13:12:05 INF parsed circuit inputs nbPublic=1 nbSecret=1\n13:12:05 INF building constraint builder nbConstraints=3\n13:12:05 DBG precomputing proving key in GPU acceleration=icicle backend=groth16 curve=bn254 nbConstraints=3\n13:12:05 DBG constraint system solver done nbConstraints=3 took=0.070259\n13:12:05 DBG prover done acceleration=icicle backend=groth16 curve=bn254 nbConstraints=3 took=80.356684\n13:12:05 DBG verifier done backend=groth16 curve=bn254 took=1.843888\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"acceleration=icicle"})," indicates that the prover is running in acceleration mode with ICICLE."]}),"\n",(0,t.jsxs)(n.p,{children:["You can reference the ",(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark?tab=readme-ov-file#gpu-support",children:"Gnark docs"})," for further information."]}),"\n",(0,t.jsx)(n.h3,{id:"halo2",children:"Halo2"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/zkonduit/halo2",children:"Halo2"})," fork integrated with ICICLE for GPU acceleration. This means that you can run your existing Halo2 circuits with GPU acceleration just by activating a feature flag."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable GPU acceleration just enable ",(0,t.jsx)(n.code,{children:"icicle_gpu"})," ",(0,t.jsx)(n.a,{href:"https://github.com/zkonduit/halo2/blob/3d7b5e61b3052680ccb279e05bdcc21dd8a8fedf/halo2_proofs/Cargo.toml#L102",children:"feature flag"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This feature flag will seamlessly toggle on GPU acceleration for you."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},47861:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/architecture-high-level-3c1ae0f257c7921b77378aa3daaab41c.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var r=i(96540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);