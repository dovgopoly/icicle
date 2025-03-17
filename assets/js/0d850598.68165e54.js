"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[1392],{97127:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"icicle/rust-bindings/program","title":"Rust FFI Bindings for Program","description":"Please refer to the Program overview page for additional detail. This section is a brief description of the Rust FFI bindings.","source":"@site/versioned_docs/version-3.6.0/icicle/rust-bindings/program.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/program","permalink":"/icicle/rust-bindings/program","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.6.0/icicle/rust-bindings/program.md","tags":[],"version":"3.6.0","lastUpdatedBy":"Jeremy Felder","lastUpdatedAt":1742224043000,"frontMatter":{}}');var t=i(74848),o=i(28453);const s={},a="Rust FFI Bindings for Program",l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"<code>Symbol</code> Trait Definition",id:"symbol-trait-definition",level:2},{value:"<code>Symbol</code> Struct",id:"symbol-struct",level:2},{value:"Traits implemented and key methods",id:"traits-implemented-and-key-methods",level:3},{value:"Arithmetic operations",id:"arithmetic-operations",level:4},{value:"<code>Program</code> Trait Definition",id:"program-trait-definition",level:2},{value:"<code>Program</code> Struct",id:"program-struct",level:2},{value:"Defining a Function for Program",id:"defining-a-function-for-program",level:2},{value:"Creating a Program",id:"creating-a-program",level:2},{value:"Executing the Program",id:"executing-the-program",level:2},{value:"Examples",id:"examples",level:3},{value:"Program functionality with a custom functions",id:"program-functionality-with-a-custom-functions",level:4},{value:"Program functionality with predefined programs",id:"program-functionality-with-predefined-programs",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"rust-ffi-bindings-for-program",children:"Rust FFI Bindings for Program"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"/icicle/primitives/program",children:"Program overview"})," page for additional detail. This section is a brief description of the Rust FFI bindings."]})}),"\n",(0,t.jsx)(n.p,{children:"This documentation is designed to bring developers up to speed about the Rust API wrapping the cpp implementation of program."}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["Program is a class that let users define expressions on vector elements, and have ICICLE compile it for the backends for a fused implementation. This solves memory bottlenecks and also let users customize algorithms such as sumcheck. Program can create only element-wise lambda functions. Program itself works for definition while actual execution is handled through other functionalities like ",(0,t.jsx)(n.a,{href:"/icicle/rust-bindings/vec-ops",children:"Vector Operations"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The following would list the implemented Rust functionality with some examples paralleling those given in the ",(0,t.jsx)(n.a,{href:"/icicle/primitives/program",children:"original program overview"}),"."]}),"\n",(0,t.jsx)(n.h1,{id:"symbol",children:"Symbol"}),"\n",(0,t.jsxs)(n.p,{children:["Symbol is the basic (template) class that allow users to define their own program, representing an arithmetic operation. The ",(0,t.jsx)(n.a,{href:"#defining-a-function-for-program",children:"function"})," the user define will operate on symbols."]}),"\n",(0,t.jsxs)(n.h2,{id:"symbol-trait-definition",children:[(0,t.jsx)(n.code,{children:"Symbol"})," Trait Definition"]}),"\n",(0,t.jsx)(n.p,{children:"The trait defines the functionality required by the user. The expected use-case of symbol is solely to be operated on to create the final arithmetic operation, which is reflected implemented functions and traits."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub trait Symbol<F: FieldImpl>:\n  Add<Output = Self> + Sub<Output = Self> + Mul<Output = Self> +\n  Add<F, Output = Self> + Sub<F, Output = Self> + Mul<F, Output = Self> +\n  AddAssign + SubAssign + MulAssign + AddAssign<F> + SubAssign<F> + MulAssign<F> +\n  for<'a> Add<&'a Self, Output = Self> +\n  for<'a> Sub<&'a Self, Output = Self> +\n  for<'a> Mul<&'a Self, Output = Self> +\n  for<'a> AddAssign<&'a Self> +\n  for<'a> SubAssign<&'a Self> +\n  for<'a> MulAssign<&'a Self> +\n  Clone + Copy + Sized + Handle\n{\n  fn new_input(in_idx: u32) -> Result<Self, eIcicleError>;      // New input symbol for the execution function\n  fn from_constant(constant: F) -> Result<Self, eIcicleError>;  // New symbol from a field element\n\n  fn inverse(&self) -> Self; // Field inverse of the symbol\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"symbol-struct",children:[(0,t.jsx)(n.code,{children:"Symbol"})," Struct"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Symbol"})," struct is implemented for each of the supported icicle fields, implementing the above trait for the specific field (field distinction is relevant for the input symbols and stored constants in the program). In its core it's just a handle to the cpp implementation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub struct Symbol {\n  handle: SymbolHandle,\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"traits-implemented-and-key-methods",children:"Traits implemented and key methods"}),"\n",(0,t.jsxs)(n.p,{children:["Additional traits the struct implements to fulfil ",(0,t.jsx)(n.code,{children:"Symbol<F>"})," trait that should be noted."]}),"\n",(0,t.jsx)(n.h4,{id:"arithmetic-operations",children:"Arithmetic operations"}),"\n",(0,t.jsxs)(n.p,{children:["Symbol implements addition, subtraction and multiplication (as well as the assign variants of them) with other symbols / references as well as field elements. Applying the operations will generate a new symbol (or overwrite the existing in the case of the assign operation) representing the arithmetic operations of the two operand symbols. The ",(0,t.jsx)(n.code,{children:"inverse"})," function joins these operations to allow an additional arithmetic operation (division)."]}),"\n",(0,t.jsx)(n.h1,{id:"program",children:"Program"}),"\n",(0,t.jsxs)(n.p,{children:["A program to be ran on the various Icicle backends. It can be either a user-defined program, or one of the members of ",(0,t.jsx)(n.code,{children:"PredefinedProgram"})," enum. The program adheres to one of the following traits:"]}),"\n",(0,t.jsxs)(n.h2,{id:"program-trait-definition",children:[(0,t.jsx)(n.code,{children:"Program"})," Trait Definition"]}),"\n",(0,t.jsx)(n.p,{children:"The trait defines the base functionality required for the user, which in this case is only creation (The execution functionality is exposed through Vector Operations). It is used as a program for running a function that takes a vector of field elements (both inputs and outputs) and has no return value (output is written to the given vector). It is executed through Vector Operations."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub trait ReturningValueProgram<F>:\n  Sized + Handle\nwhere\n  F:FieldImpl,\n{\n  type ProgSymbol: Symbol<F>;\n\n  fn new(program_func: impl FnOnce(&mut Vec<Self::ProgSymbol>) -> Self::ProgSymbol, nof_parameters: u32) -> Result<Self, eIcicleError>;\n\n  fn new_predefined(pre_def: PreDefinedProgram) -> Result<Self, eIcicleError>;\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"program-struct",children:[(0,t.jsx)(n.code,{children:"Program"})," Struct"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Program"})," struct is implemented for each of the supported icicle fields, implementing the above trait for the specific field (field distinction is relevant for the input symbols and stored constants in the program). In its core it's just a handle to the cpp implementation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub struct Program {\n  handle: ProgramHandle,\n}\n"})}),"\n",(0,t.jsx)(n.h1,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["This section will outline how to use Program and Symbol, mirroring the examples from the ",(0,t.jsx)(n.a,{href:"/icicle/primitives/program",children:"cpp overview"}),". The program use-case splits to three steps:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Defining a function/lambda that describes the program to be ran (or choosing one of the predefined list)."}),"\n",(0,t.jsx)(n.li,{children:"Creating a new program given the above function."}),"\n",(0,t.jsx)(n.li,{children:"Executing the program using the Vector Operations API."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"defining-a-function-for-program",children:"Defining a Function for Program"}),"\n",(0,t.jsx)(n.p,{children:"A function operating on a vector of symbols, with outputs being written to said input vector. The input symbols in the vector represent inputs and outputs of field elements, and will be replaced by vectors of field elements when executed."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The defined function defines arithmetic operations to be done in series, and could be represented as set of equations (for each output). Practically, control flow (e.g., loops, conditions) is not parsed, instead the computation follows the exact execution path taken during tracing, which determines the final computation that will be performed."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"example_function<F, S>(vars: &mut Vec<S>)\nwhere\n  F: FieldImpl,\n  S: Symbol<F>,\n{\n  let a = vars[0];\n  let b = vars[1];\n  let c = vars[2];\n  let eq = vars[3];\n\n  vars[4] = eq * (a * b - c) + F::from_u32(9);\n  vars[5] = a * b - c.inverse();\n  vars[6] = vars[5];\n  vars[3] = (vars[0] + vars[1]) * F::from_u32(2); // all variables can be both inputs and outputs\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-program",children:"Creating a Program"}),"\n",(0,t.jsx)(n.p,{children:"Applying the constructor with the lambda:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"let program = Program::new(example_lambda, 7 /*nof parameters for lambda = vars.size()*/);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"executing-the-program",children:"Executing the Program"}),"\n",(0,t.jsx)(n.p,{children:"Execution is done through the appropriate vecops function."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub fn execute_program<F, Prog, Parameter>(\n    data: &mut Vec<&Parameter>,\n    program: &Prog,\n    cfg: &VecOpsConfig\n) -> Result<(), eIcicleError>\nwhere\n    F: FieldImpl,\n    <F as FieldImpl>::Config: VecOps<F>,\n    Parameter: HostOrDeviceSlice<F> + ?Sized,\n    Prog: Program<F> + Handle,\n"})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example taken from check_program in vec_ops tests."}),"\n",(0,t.jsx)(n.h4,{id:"program-functionality-with-a-custom-functions",children:"Program functionality with a custom functions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'pub fn check_program<F, Prog>()\nwhere\n    F: FieldImpl,\n    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F> + FieldArithmetic<F>,\n    Prog: Program<F>,\n{\n    let example_lambda = |vars: &mut Vec<Prog::ProgSymbol>| {\n        let a = vars[0]; // Shallow copies pointing to the same memory in the backend\n        let b = vars[1];\n        let c = vars[2];\n        let d = vars[3];\n    \n        vars[4] = d * (a * b - c) + F::from_u32(9);\n        vars[5] = a * b - c.inverse();\n        vars[6] = vars[5];\n        vars[3] = (vars[0] + vars[1]) * F::from_u32(2); // all variables can be both inputs and outputs\n    };\n\n    // Additional lines for initiating the slices of field elements for the parameters\n\n    let mut parameters = vec![a_slice, b_slice, c_slice, eq_slice, var4_slice, var5_slice, var6_slice];\n    \n    let program = Prog::new(example_lambda, 7).unwrap();\n    \n    let cfg = VecOpsConfig::default();\n    execute_program(&mut parameters, &program, &cfg).expect("Program Failed");\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"program-functionality-with-predefined-programs",children:"Program functionality with predefined programs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'pub fn check_predefined_program<F, Prog>()\nwhere\n    F: FieldImpl,\n    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F> + FieldArithmetic<F>,\n    Prog: Program<F>,\n{\n    // Additional lines for initiating the slices of field elements for the parameters\n    let mut parameters = vec![a_slice, b_slice, c_slice, eq_slice, var4_slice];\n\n    let program = Prog::new_predefined(PreDefinedProgram::EQtimesABminusC).unwrap();\n    \n    let cfg = VecOpsConfig::default();\n    execute_program(&mut parameters, &program, &cfg).expect("Program Failed");\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var r=i(96540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);