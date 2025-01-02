"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[6029],{8413:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"icicle/golang-bindings/hash","title":"ICICLE Hashing in Golang","description":"For a general overview of ICICLE\'s hashing logic and supported algorithms, check out the ICICLE Hashing Overview.","source":"@site/versioned_docs/version-3.1.0/icicle/golang-bindings/hash.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/hash","permalink":"/3.1.0/icicle/golang-bindings/hash","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/golang-bindings/hash.md","tags":[],"version":"3.1.0","lastUpdatedBy":"ShaniBabayoff","lastUpdatedAt":1735802624000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Multi GPU Support","permalink":"/3.1.0/icicle/golang-bindings/multi-gpu"},"next":{"title":"Merkle-Tree","permalink":"/3.1.0/icicle/golang-bindings/merkle"}}');var s=i(4848),t=i(8453);const o={},r="ICICLE Hashing in Golang",c={},h=[{value:"Overview",id:"overview",level:2},{value:"Importing Hash Functions",id:"importing-hash-functions",level:2},{value:"API Usage",id:"api-usage",level:2},{value:"1. Creating a Hasher Instance",id:"1-creating-a-hasher-instance",level:3},{value:"2. Hashing a Simple String",id:"2-hashing-a-simple-string",level:3},{value:"3. Poseidon Example (field elements) and batch hashing",id:"3-poseidon-example-field-elements-and-batch-hashing",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"icicle-hashing-in-golang",children:"ICICLE Hashing in Golang"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For a general overview of ICICLE's hashing logic and supported algorithms, check out the ",(0,s.jsx)(n.a,{href:"/3.1.0/icicle/primitives/hash",children:"ICICLE Hashing Overview"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,s.jsxs)(n.p,{children:["Using the Hash package requires ",(0,s.jsx)(n.code,{children:"go"})," version 1.22"]})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The ICICLE library provides Golang bindings for hashing using a variety of cryptographic hash functions. These hash functions are optimized for both general-purpose data and cryptographic operations such as multi-scalar multiplication, commitment generation, and Merkle tree construction."}),"\n",(0,s.jsx)(n.p,{children:"This guide will show you how to use the ICICLE hashing API in Golang with examples for common hash algorithms, such as Keccak-256, Keccak-512, SHA3-256, SHA3-512, Blake2s, and Poseidon."}),"\n",(0,s.jsx)(n.h2,{id:"importing-hash-functions",children:"Importing Hash Functions"}),"\n",(0,s.jsx)(n.p,{children:"To use the hashing functions in Golang, you only need to import the hash package from the ICICLE Golang bindings. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import (\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/hash"\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"api-usage",children:"API Usage"}),"\n",(0,s.jsx)(n.h3,{id:"1-creating-a-hasher-instance",children:"1. Creating a Hasher Instance"}),"\n",(0,s.jsxs)(n.p,{children:["Each hash algorithm can be instantiated by calling its respective constructor. The ",(0,s.jsx)(n.code,{children:"New<Hash>Hasher"})," function takes an optional default input size, which can be set to 0 unless required for a specific use case."]}),"\n",(0,s.jsx)(n.p,{children:"Example for Keccak-256:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"keccakHasher := hash.NewKeccak256Hasher(0 /* default input size */)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-hashing-a-simple-string",children:"2. Hashing a Simple String"}),"\n",(0,s.jsx)(n.p,{children:"Once you have created a hasher instance, you can hash any input data, such as strings or byte arrays, and store the result in an output buffer.\nHere\u2019s how to hash a simple string using Keccak-256:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import (\n  "encoding/hex"\n\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/hash"\n)\n\ninputStrAsBytes := []bytes("I like ICICLE! It\'s so fast and simple")\nkeccakHasher, error := hash.NewKeccak256Hasher(0 /*default chunk size*/)\nif error != runtime.Success {\n  fmt.Println("error:", error)\n  return\n}\n\noutputRef := make([]byte, 32)\nkeccakHasher.Hash(\n  core.HostSliceFromElements(inputStrAsBytes),\n  core.HostSliceFromElements(outputRef),\n  core.GetDefaultHashConfig(),\n)\n\n// convert the output to a hex string for easy readability\noutputAsHexStr = hex.EncodeToString(outputRef)\nfmt.Println!("Hash(`", input_str, "`) =", &outputAsHexStr)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Using other hash algorithms is similar and only requires replacing the Hasher constructor with the relevant hashing algorithm."}),"\n",(0,s.jsx)(n.h3,{id:"3-poseidon-example-field-elements-and-batch-hashing",children:"3. Poseidon Example (field elements) and batch hashing"}),"\n",(0,s.jsx)(n.p,{children:"The Poseidon hash is designed for cryptographic field elements and curves, making it ideal for use cases such as zero-knowledge proofs (ZKPs). Poseidon hash using babybear field:"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Since poseidon is designed for use with field elements and curves, it is located within the field or curve packages and not in the Hash package though it does rely on using the Hash package."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import (\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n  babybear "github.com/ingonyama-zk/icicle/v3/wrappers/golang/fields/babybear"\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/fields/babybear/poseidon"\n)\n\nbatch := 1 << 4\nt := 3 // Currently support arity of 3, 5, 9, 12\n// (t - 1) is due to domainTag being non nil\n// if domainTag is nil, then the input size should be `batch * t`\n// See more in our tests: https://github.com/ingonyama-zk/icicle/blob/docs/v3/golang/poseidon/wrappers/golang/curves/bn254/tests/poseidon_test.go#L23-L27\ninputsSize = batch * (t - 1)\ninputs := babybear.GenerateScalars(inputsSize)\ndomainTag := babybear.GenerateScalars(1)[0]\n\noutputsRef := make([]babybear.ScalarField, batch)\nposeidonHasherRef, _ := poseidon.NewHasher(uint64(t), &domainTag)\nposeidonHasherRef.Hash(\n  core.HostSliceFromElements(inputs),\n  core.HostSliceFromElements(outputsRef),\n  core.GetDefaultHashConfig(),\n)\n\nposeidonHasherRef.Delete()\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var a=i(6540);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);