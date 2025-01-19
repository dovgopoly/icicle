"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[9517],{8991:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"icicle/primitives/program","title":"Programs","description":"Overview","source":"@site/versioned_docs/version-3.4.0/icicle/primitives/program.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/program","permalink":"/icicle/primitives/program","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.4.0/icicle/primitives/program.md","tags":[],"version":"3.4.0","lastUpdatedBy":"Koren-Brand","lastUpdatedAt":1737296485000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Vector operations","permalink":"/icicle/primitives/vec_ops"},"next":{"title":"Polynomials","permalink":"/icicle/polynomials/overview"}}');var t=n(4848),s=n(8453);const o={},a="Programs",c={},d=[{value:"Overview",id:"overview",level:2},{value:"C++ API",id:"c-api",level:2},{value:"Symbol",id:"symbol",level:3},{value:"Defining lambda function",id:"defining-lambda-function",level:3},{value:"Creating program",id:"creating-program",level:3},{value:"Pre-defined programs",id:"pre-defined-programs",level:4},{value:"PreDefinedPrograms",id:"predefinedprograms",level:5},{value:"Executing program",id:"executing-program",level:3}];function l(e){const r={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"programs",children:"Programs"})}),"\n",(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"Program is a class that let users define expressions on vector elements, and have ICICLE compile it for the backends for a fused implementation. This solves memory bottlenecks and also let users customize algorithms such as sumcheck. Program can create only element-wise lambda functions."}),"\n",(0,t.jsx)(r.h2,{id:"c-api",children:"C++ API"}),"\n",(0,t.jsx)(r.h3,{id:"symbol",children:"Symbol"}),"\n",(0,t.jsx)(r.p,{children:"Symbol is the basic (template) class that allow users to define their own program. The lambda function the user define will operate on symbols."}),"\n",(0,t.jsx)(r.h3,{id:"defining-lambda-function",children:"Defining lambda function"}),"\n",(0,t.jsx)(r.p,{children:"To define a custom lambda function the user will use Symbol:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"void lambda_multi_result(std::vector<Symbol<scalar_t>>& vars)\n{\n  const Symbol<scalar_t>& A = vars[0];\n  const Symbol<scalar_t>& B = vars[1];\n  const Symbol<scalar_t>& C = vars[2];\n  const Symbol<scalar_t>& EQ = vars[3];\n  vars[4] = EQ * (A * B - C) + scalar_t::from(9);\n  vars[5] = A * B - C.inverse();\n  vars[6] = vars[5];\n  vars[3] = 2 * (var[0] + var[1]) // all variables can be both inputs and outputs\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Each symbol element at the vector argument ",(0,t.jsx)(r.code,{children:"var"})," represent an input or an output. The type of the symbol (",(0,t.jsx)(r.code,{children:"scalar_t"})," in this example) will be the type of the inputs and outputs. In this example we created a lambda function with four inputs and three outputs."]}),"\n",(0,t.jsx)(r.p,{children:"In this example there are four input variables and three three outputs. Inside the function the user can define custom expressions on them."}),"\n",(0,t.jsx)(r.p,{children:"Program support few pre-defined programs. The user can use those pre-defined programs without creating a lambda function, as will be explained in the next section."}),"\n",(0,t.jsx)(r.h3,{id:"creating-program",children:"Creating program"}),"\n",(0,t.jsx)(r.p,{children:"To execute the lambda function we just created we need to create a program from it.\nTo create program from lambda function we can use the following constructor:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"Program(std::function<void(std::vector<Symbol<S>>&)> program_func, const int nof_parameters)\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"program_func"})," is the lambda function (in the example above ",(0,t.jsx)(r.code,{children:"lambda_multi_result"}),") and ",(0,t.jsx)(r.code,{children:"nof_parameters"})," is the total number of parameter (inputs + outputs) for the lambda (seven in the above example)."]}),"\n",(0,t.jsx)(r.h4,{id:"pre-defined-programs",children:"Pre-defined programs"}),"\n",(0,t.jsxs)(r.p,{children:["As mentioned before, there are few pre-defined programs the user can use without the need to create a lambda function first. The enum ",(0,t.jsx)(r.code,{children:"PreDefinedPrograms"})," contains the pre-defined program. Using pre-defined function will lead to better performance compared to creating the equivalent lambda function.\nTo create a pre-defined program a different constructor is bing used:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"Program(PreDefinedPrograms pre_def)\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"pre_def"})," is the pre-defined program (from ",(0,t.jsx)(r.code,{children:"PreDefinedPrograms"}),")."]}),"\n",(0,t.jsx)(r.h5,{id:"predefinedprograms",children:"PreDefinedPrograms"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"enum PreDefinedPrograms {\n  AB_MINUS_C = 0,\n  EQ_X_AB_MINUS_C\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"AB_MINUS_C"})," - the pre-defined program ",(0,t.jsx)(r.code,{children:"AB - C"})," for the input vectors ",(0,t.jsx)(r.code,{children:"A"}),", ",(0,t.jsx)(r.code,{children:"B"})," and ",(0,t.jsx)(r.code,{children:"C"})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"EQ_X_AB_MINUS_C"})," - the pre-defined program ",(0,t.jsx)(r.code,{children:"EQ(AB - C)"})," for the input vectors ",(0,t.jsx)(r.code,{children:"A"}),", ",(0,t.jsx)(r.code,{children:"B"}),", ",(0,t.jsx)(r.code,{children:"C"})," and ",(0,t.jsx)(r.code,{children:"EQ"})]}),"\n",(0,t.jsx)(r.h3,{id:"executing-program",children:"Executing program"}),"\n",(0,t.jsxs)(r.p,{children:["To execute the program the ",(0,t.jsx)(r.code,{children:"execute_program"})," function from the vector operation API should be used. This operation is supported by the CPU and CUDA backends."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"template <typename T>\neIcicleError\nexecute_program(std::vector<T*>& data, const Program<T>& program, uint64_t size, const VecOpsConfig& config);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"data"})," vector is a vector of pointers to the inputs and output vectors, ",(0,t.jsx)(r.code,{children:"program"})," is the program to execute, ",(0,t.jsx)(r.code,{children:"size"})," is the length of the vectors and ",(0,t.jsx)(r.code,{children:"config"})," is the configuration of the operation."]}),"\n",(0,t.jsxs)(r.p,{children:["For the configuration the field ",(0,t.jsx)(r.code,{children:"is_a_on_device"})," determined whethere the data (",(0,t.jsx)(r.em,{children:"inputs and outputs"}),") is on device or not. After the execution ",(0,t.jsx)(r.code,{children:"data"})," will reside in the same place as it did before (i.e. the field ",(0,t.jsx)(r.code,{children:"is_result_on_device"})," is irrelevant.)"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.em,{children:"NOTE:"})}),"  Using program for executing lambdas is recommended only while using the CUDA backend. Program's primary use is to let users to customize algorithms (such as sumcheck)."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var i=n(6540);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);