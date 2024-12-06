"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[528],{4911:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"icicle/rust-bindings/keccak","title":"Keccak","description":"TODO update for V3","source":"@site/versioned_docs/version-3.0.0/icicle/rust-bindings/keccak.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/keccak","permalink":"/3.0.0/icicle/rust-bindings/keccak","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.0.0/icicle/rust-bindings/keccak.md","tags":[],"version":"3.0.0","lastUpdatedBy":"yshekel","lastUpdatedAt":1733471854000,"frontMatter":{}}');var t=i(4848),s=i(8453);const o={},r="Keccak",l={},a=[{value:"Keccak Example",id:"keccak-example",level:2},{value:"Keccak Methods",id:"keccak-methods",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"HashConfig",id:"hashconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Usage",id:"usage",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"keccak",children:"Keccak"})}),"\n",(0,t.jsx)(n.p,{children:"TODO update for V3"}),"\n",(0,t.jsx)(n.h2,{id:"keccak-example",children:"Keccak Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use icicle_cuda_runtime::memory::{DeviceVec, HostSlice};\nuse icicle_hash::keccak::{keccak256, HashConfig};\nuse rand::{self, Rng};\n\nfn main() {\n    let mut rng = rand::thread_rng();\n    let initial_data: Vec<u8> = (0..120).map(|_| rng.gen::<u8>()).collect();\n    println!("initial data: {}", hex::encode(&initial_data));\n    let input = HostSlice::<u8>::from_slice(initial_data.as_slice());\n    let mut output = DeviceVec::<u8>::cuda_malloc(32).unwrap();\n\n    let mut config = HashConfig::default();\n    keccak256(input, initial_data.len() as i32, 1, &mut output[..], &mut config).expect("Failed to execute keccak256 hashing");\n\n    let mut output_host = vec![0_u8; 32];\n    output.copy_to_host(HostSlice::from_mut_slice(&mut output_host[..])).unwrap();\n\n    println!("keccak256 result: {}", hex::encode(&output_host));\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"keccak-methods",children:"Keccak Methods"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub fn keccak256(\n    input: &(impl HostOrDeviceSlice<u8> + ?Sized),\n    input_block_size: i32,\n    number_of_blocks: i32,\n    output: &mut (impl HostOrDeviceSlice<u8> + ?Sized),\n    config: &mut HashConfig,\n) -> IcicleResult<()>\n\npub fn keccak512(\n    input: &(impl HostOrDeviceSlice<u8> + ?Sized),\n    input_block_size: i32,\n    number_of_blocks: i32,\n    output: &mut (impl HostOrDeviceSlice<u8> + ?Sized),\n    config: &mut HashConfig,\n) -> IcicleResult<()> \n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"input"})}),": A slice containing the input data for the Keccak256 hash function. It can reside in either host memory or device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"input_block_size"})}),": An integer specifying the size of the input data for a single hash."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"number_of_blocks"})}),": An integer specifying the number of results in the hash batch."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"output"})}),": A slice where the resulting hash will be stored. This slice can be in host or device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"config"})}),": A pointer to a ",(0,t.jsx)(n.code,{children:"HashConfig"})," object, which contains various configuration options for the Keccak256 operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IcicleResult"})}),": Returns a CUDA error code indicating the success or failure of the Keccak256/Keccak512 operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"hashconfig",children:"HashConfig"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"HashConfig"})," structure holds configuration parameters for the Keccak256/Keccak512 operation, allowing customization of its behavior to optimize performance based on the specifics of the operation or the underlying hardware."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub struct HashConfig<'a> {\n    pub ctx: DeviceContext<'a>,\n    pub are_inputs_on_device: bool,\n    pub are_outputs_on_device: bool,\n    pub is_async: bool,\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ctx"})}),": Device context containing details like device id and stream."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"are_inputs_on_device"})}),": Indicates if input data is located on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"are_outputs_on_device"})}),": Indicates if output hash is stored on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"is_async"})}),": If true, runs the Keccak256/Keccak512 operation asynchronously."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Example initialization with default settings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"let default_config = HashConfig::default();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Customizing the configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"let custom_config = NTTConfig {\n    ctx: custom_device_context,\n    are_inputs_on_device: true,\n    are_outputs_on_device: true,\n    is_async: false,\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var c=i(6540);const t={},s=c.createContext(t);function o(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);