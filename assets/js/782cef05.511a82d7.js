"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[1191],{74641:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"icicle/integrations","title":"ICICLE integrated provers","description":"ICICLE has been used by companies and projects such as Celer Network, Consensys Gnark, EZKL, ZKWASM and others to accelerate their ZK proving pipeline.","source":"@site/versioned_docs/version-3.2.0/icicle/integrations.md","sourceDirName":"icicle","slug":"/icicle/integrations","permalink":"/3.2.0/icicle/integrations","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.2.0/icicle/integrations.md","tags":[],"version":"3.2.0","lastUpdatedBy":"release-bot","lastUpdatedAt":1741983600000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Google Colab Instructions","permalink":"/3.2.0/icicle/colab-instructions"},"next":{"title":"Ingonyama Grant program","permalink":"/3.2.0/grants"}}');var t=i(74848),o=i(28453);const s={},a="ICICLE integrated provers",c={},l=[{value:"A primer to building your own integrations",id:"a-primer-to-building-your-own-integrations",level:2},{value:"Using ICICLE integrated provers",id:"using-icicle-integrated-provers",level:2},{value:"Gnark",id:"gnark",level:3},{value:"Halo2",id:"halo2",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"icicle-integrated-provers",children:"ICICLE integrated provers"})}),"\n",(0,t.jsxs)(n.p,{children:["ICICLE has been used by companies and projects such as ",(0,t.jsx)(n.a,{href:"https://github.com/celer-network",children:"Celer Network"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark",children:"Consensys Gnark"}),", ",(0,t.jsx)(n.a,{href:"https://blog.ezkl.xyz/post/acceleration/",children:"EZKL"}),", ",(0,t.jsx)(n.a,{href:"https://twitter.com/DelphinusLab/status/1762604988797513915",children:"ZKWASM"})," and others to accelerate their ZK proving pipeline."]}),"\n",(0,t.jsx)(n.p,{children:"Many of these integrations have been a collaboration between Ingonyama and the integrating company. We have learned a lot about designing GPU based ZK provers."}),"\n",(0,t.jsx)(n.p,{children:"If you're interested in understanding these integrations better or learning how you can use ICICLE to accelerate your existing ZK proving pipeline this is the place for you."}),"\n",(0,t.jsx)(n.h2,{id:"a-primer-to-building-your-own-integrations",children:"A primer to building your own integrations"}),"\n",(0,t.jsx)(n.p,{children:"Lets illustrate an ICICLE integration, so you can understand the core API and design overview of ICICLE."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ICICLE architecture",src:i(47861).A+"",width:"906",height:"878"})}),"\n",(0,t.jsx)(n.p,{children:"Engineers usually use a cryptographic library to implement their ZK protocols. These libraries implement efficient primitives which are used as building blocks for the protocol; ICICLE is such a library. The difference is that ICICLE is designed from the start to run on GPUs; the Rust and Golang APIs abstract away all low level CUDA details. Our goal was to allow developers with no GPU experience to quickly get started with ICICLE."}),"\n",(0,t.jsx)(n.p,{children:"A developer may use ICICLE with two main approaches in mind."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Drop-in replacement approach."}),"\n",(0,t.jsx)(n.li,{children:"End-to-End GPU replacement approach."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The first approach for GPU-accelerating your Prover with ICICLE is quick to implement, but it has limitations, such as reduced memory optimization and limited protocol tuning for GPUs. It's a solid starting point, but those committed to fully leveraging GPU acceleration should consider a more comprehensive approach."}),"\n",(0,t.jsx)(n.p,{children:"A End-to-End GPU replacement means performing the entire ZK proof on the GPU. This approach will reduce latency to a minimum and requires you to change the way you implement the protocol to be more GPU friendly. This approach will take full advantage of GPU acceleration. Redesigning your prover this way may take more engineering effort but we promise you that its worth it!"}),"\n",(0,t.jsx)(n.h2,{id:"using-icicle-integrated-provers",children:"Using ICICLE integrated provers"}),"\n",(0,t.jsx)(n.p,{children:"Here we cover how a developer can run existing circuits on ICICLE integrated provers."}),"\n",(0,t.jsx)(n.h3,{id:"gnark",children:"Gnark"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark",children:"Gnark"})," officially supports GPU proving with ICICLE. Currently only Groth16 on curve ",(0,t.jsx)(n.code,{children:"BN254"})," is supported. This means that if you are currently using Gnark to write your circuits you can enjoy GPU acceleration without making many changes."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Currently ICICLE has been merged to Gnark ",(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark",children:"master branch"}),", however the ",(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark/releases/tag/v0.9.1",children:"latest release"})," is from October 2023."]})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure your golang circuit project has ",(0,t.jsx)(n.code,{children:"gnark"})," as a dependency and that you are using the master branch for now."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"go get \tgithub.com/consensys/gnark@master\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see two indirect dependencies added."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"...\n\tgithub.com/ingonyama-zk/icicle v0.1.0 // indirect\n\tgithub.com/ingonyama-zk/iciclegnark v0.1.1 // indirect\n...\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"As you may notice we are using ICICLE v0.1 here since golang bindings are only support in ICICLE v0.1 for the time being."})}),"\n",(0,t.jsx)(n.p,{children:"To switch over to ICICLE proving, make sure to change the backend you are using, below is an example of how this should be done."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// toggle on\nproofIci, err := groth16.Prove(ccs, pk, secretWitness, backend.WithIcicleAcceleration())\n\n// toggle off\nproof, err := groth16.Prove(ccs, pk, secretWitness)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now that you have enabled ",(0,t.jsx)(n.code,{children:"WithIcicleAcceleration"})," backend simple change the way your run your circuits to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"go run -tags=icicle main.go\n"})}),"\n",(0,t.jsx)(n.p,{children:"Your logs should look something like this if everything went as expected."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"13:12:05 INF compiling circuit\n13:12:05 INF parsed circuit inputs nbPublic=1 nbSecret=1\n13:12:05 INF building constraint builder nbConstraints=3\n13:12:05 DBG precomputing proving key in GPU acceleration=icicle backend=groth16 curve=bn254 nbConstraints=3\n13:12:05 DBG constraint system solver done nbConstraints=3 took=0.070259\n13:12:05 DBG prover done acceleration=icicle backend=groth16 curve=bn254 nbConstraints=3 took=80.356684\n13:12:05 DBG verifier done backend=groth16 curve=bn254 took=1.843888\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"acceleration=icicle"})," indicates that the prover is running in acceleration mode with ICICLE."]}),"\n",(0,t.jsxs)(n.p,{children:["You can reference the ",(0,t.jsx)(n.a,{href:"https://github.com/Consensys/gnark?tab=readme-ov-file#gpu-support",children:"Gnark docs"})," for further information."]}),"\n",(0,t.jsx)(n.h3,{id:"halo2",children:"Halo2"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/zkonduit/halo2",children:"Halo2"})," fork integrated with ICICLE for GPU acceleration. This means that you can run your existing Halo2 circuits with GPU acceleration just by activating a feature flag."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable GPU acceleration just enable ",(0,t.jsx)(n.code,{children:"icicle_gpu"})," ",(0,t.jsx)(n.a,{href:"https://github.com/zkonduit/halo2/blob/3d7b5e61b3052680ccb279e05bdcc21dd8a8fedf/halo2_proofs/Cargo.toml#L102",children:"feature flag"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This feature flag will seamlessly toggle on GPU acceleration for you."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},47861:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/architecture-high-level-3c1ae0f257c7921b77378aa3daaab41c.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var r=i(96540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);