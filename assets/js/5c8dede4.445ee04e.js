"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[2695],{13223:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"icicle/rust-bindings/sumcheck","title":"Sumcheck","description":"Sumcheck API Overview","source":"@site/versioned_docs/version-3.5.0/icicle/rust-bindings/sumcheck.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/sumcheck","permalink":"/icicle/rust-bindings/sumcheck","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.5.0/icicle/rust-bindings/sumcheck.md","tags":[],"version":"3.5.0","lastUpdatedBy":"idanfr-ingo","lastUpdatedAt":1740474299000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Merkle-Tree","permalink":"/icicle/rust-bindings/merkle"},"next":{"title":"Migrate from ICICLE v2","permalink":"/icicle/migrate_from_v2"}}');var c=i(74848),r=i(28453);const l={},o="Sumcheck",t={},d=[{value:"Sumcheck API Overview",id:"sumcheck-api-overview",level:2},{value:"<strong>Structs</strong>",id:"structs",level:3},{value:"<code>SumcheckTranscriptConfig</code>",id:"sumchecktranscriptconfig",level:4},{value:"<strong>Fields:</strong>",id:"fields",level:5},{value:"<strong>Methods:</strong>",id:"methods",level:5},{value:"<code>SumcheckConfig</code>",id:"sumcheckconfig",level:4},{value:"<strong>Fields:</strong>",id:"fields-1",level:5},{value:"<strong>Methods:</strong>",id:"methods-1",level:5},{value:"<strong>Traits</strong>",id:"traits",level:3},{value:"<code>Sumcheck</code>",id:"sumcheck-1",level:4},{value:"<strong>Associated Types:</strong>",id:"associated-types",level:5},{value:"<strong>Methods:</strong>",id:"methods-2",level:5},{value:"<code>SumcheckProofOps</code>",id:"sumcheckproofops",level:4},{value:"<strong>Methods:</strong>",id:"methods-3",level:5},{value:"<strong>Usage Example</strong>",id:"usage-example",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"sumcheck",children:"Sumcheck"})}),"\n",(0,c.jsx)(n.h2,{id:"sumcheck-api-overview",children:"Sumcheck API Overview"}),"\n",(0,c.jsx)(n.h3,{id:"structs",children:(0,c.jsx)(n.strong,{children:"Structs"})}),"\n",(0,c.jsx)(n.h4,{id:"sumchecktranscriptconfig",children:(0,c.jsx)(n.code,{children:"SumcheckTranscriptConfig"})}),"\n",(0,c.jsx)(n.p,{children:"Configuration structure for the SumCheck protocol\u2019s transcript."}),"\n",(0,c.jsx)(n.h5,{id:"fields",children:(0,c.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"hash: &Hasher"})," - Reference to the hashing function used."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"domain_separator_label: Vec<u8>"})," - Domain separator label for transcript uniqueness."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"round_poly_label: Vec<u8>"})," - Label for the polynomial at each round."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"round_challenge_label: Vec<u8>"})," - Label for the challenge at each round."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"little_endian: bool"})," - Whether to use little-endian encoding."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"seed_rng: F"})," - Random number generator seed."]}),"\n"]}),"\n",(0,c.jsx)(n.h5,{id:"methods",children:(0,c.jsx)(n.strong,{children:"Methods:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"new(hash, domain_separator_label, round_poly_label, round_challenge_label, little_endian, seed_rng) -> Self"})}),":\nConstructs a new ",(0,c.jsx)(n.code,{children:"SumcheckTranscriptConfig"})," with explicit parameters."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"from_string_labels(hash, domain_separator_label, round_poly_label, round_challenge_label, little_endian, seed_rng) -> Self"})}),":\nConvenience constructor using string labels."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"sumcheckconfig",children:(0,c.jsx)(n.code,{children:"SumcheckConfig"})}),"\n",(0,c.jsx)(n.p,{children:"General configuration for the SumCheck execution."}),"\n",(0,c.jsx)(n.h5,{id:"fields-1",children:(0,c.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"stream: IcicleStreamHandle"})," - Stream for asynchronous execution (default: ",(0,c.jsx)(n.code,{children:"nullptr"}),")."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"use_extension_field: bool"})," - Whether to use an extension field for Fiat-Shamir transformation. Sumcheck currently does not support extension fields, always set to ",(0,c.jsx)(n.code,{children:"false"})," otherwise return an error."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"batch: u64"})," - Number of input chunks to hash in batch (default: 1)."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"are_inputs_on_device: bool"})," - Whether inputs reside on the device (e.g., GPU)."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"is_async: bool"})," - Whether hashing is run asynchronously."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ext: ConfigExtension"})," - Pointer to backend-specific configuration extensions."]}),"\n"]}),"\n",(0,c.jsx)(n.h5,{id:"methods-1",children:(0,c.jsx)(n.strong,{children:"Methods:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"default() -> Self"})}),":\nReturns a default ",(0,c.jsx)(n.code,{children:"SumcheckConfig"})," instance."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"traits",children:(0,c.jsx)(n.strong,{children:"Traits"})}),"\n",(0,c.jsx)(n.h4,{id:"sumcheck-1",children:(0,c.jsx)(n.code,{children:"Sumcheck"})}),"\n",(0,c.jsx)(n.p,{children:"Defines the main API for SumCheck operations."}),"\n",(0,c.jsx)(n.h5,{id:"associated-types",children:(0,c.jsx)(n.strong,{children:"Associated Types:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Field: FieldImpl + Arithmetic"})," - The field implementation used."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"FieldConfig: FieldConfig + GenerateRandom<Self::Field> + FieldArithmetic<Self::Field>"})," - Field configuration."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Proof: SumcheckProofOps<Self::Field>"})," - Type representing the proof."]}),"\n"]}),"\n",(0,c.jsx)(n.h5,{id:"methods-2",children:(0,c.jsx)(n.strong,{children:"Methods:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"new() -> Result<Self, eIcicleError>"})}),":\nInitializes a new instance."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"prove(mle_polys, mle_poly_size, claimed_sum, combine_function, transcript_config, sumcheck_config) -> Self::Proof"})}),":\nGenerates a proof for the polynomial sum over the Boolean hypercube."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"verify(proof, claimed_sum, transcript_config) -> Result<bool, eIcicleError>"})}),":\nVerifies the provided proof."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"sumcheckproofops",children:(0,c.jsx)(n.code,{children:"SumcheckProofOps"})}),"\n",(0,c.jsx)(n.p,{children:"Operations for handling SumCheck proofs."}),"\n",(0,c.jsx)(n.h5,{id:"methods-3",children:(0,c.jsx)(n.strong,{children:"Methods:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"get_round_polys(&self) -> Result<Vec<Vec<F>>, eIcicleError>"})}),":\nRetrieves the polynomials for each round."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"print(&self) -> eIcicleError"})}),"::\nPrints the proof."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"usage-example",children:(0,c.jsx)(n.strong,{children:"Usage Example"})}),"\n",(0,c.jsxs)(n.p,{children:["Below is an example demonstrating how to use the ",(0,c.jsx)(n.code,{children:"sumcheck"})," module, adapted from the ",(0,c.jsx)(n.code,{children:"check_sumcheck_simple"})," test."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:'use icicle_core::sumcheck::{Sumcheck, SumcheckConfig, SumcheckTranscriptConfig};\nuse icicle_core::field::FieldElement;\nuse icicle_core::polynomial::Polynomial;\nuse icicle_hash::keccak::Keccak256;\n\nfn main() {\n    // Initialize hashing function\n    let hash = Keccak256::new(0).unwrap();\n\n    // Define a polynomial, e.g., f(x, y) = x + y\n    let coefficients = vec![\n        FieldElement::from(0), // Constant term\n        FieldElement::from(1), // Coefficient for x\n        FieldElement::from(1), // Coefficient for y\n    ];\n    let poly = Polynomial::new(coefficients);\n\n    // Generate mle polynomial\n    let mut mle_poly = Vec::with_capacity(2);\n    for _ in 0..4 {\n        mle_poly.push(poly);\n    }\n\n    // Calculate the expected sum over the Boolean hypercube {0,1}^2\n    let expected_sum = FieldElement::from(4);\n\n    // Configure transcript and execution settings\n    let transcript_config = SumcheckTranscriptConfig::from_string_labels(\n        &hash,\n        "domain_separator",\n        "round_poly",\n        "round_challenge",\n        false, // big endian\n        FieldElement::from(0),\n    );\n    let sumcheck_config = SumcheckConfig::default();\n   \n    // define sumcheck lambda\n    let combine_func = P::new_predefined(PreDefinedProgram::EQtimesABminusC).unwrap();\n    \n    // Initialize prover\n    let prover = Sumcheck::new().expect("Failed to create Sumcheck instance");\n\n    // Generate proof\n    let proof = prover.prove(\n        mle_poly.as_slice(),\n        2, // Number of variables in the polynomial\n        expected_sum,\n        combine_func, // Use pre-defined combine function eq * (a * b - c)\n        &transcript_config,\n        &sumcheck_config,\n    );\n\n    // Verify the proof\n    let result = prover.verify(&proof, expected_sum, &transcript_config);\n    assert!(result.is_ok() && result.unwrap(), "SumCheck proof verification failed!");\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(96540);const c={},r=s.createContext(c);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);