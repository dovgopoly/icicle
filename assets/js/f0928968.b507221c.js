"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[3531],{2149:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"icicle/rust-bindings/polynomials","title":"Rust FFI Bindings for Univariate Polynomial","description":"Please refer to the Polynomials overview page for a deep overview. This section is a brief description of the Rust FFI bindings.","source":"@site/versioned_docs/version-3.3.0/icicle/rust-bindings/polynomials.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/polynomials","permalink":"/3.3.0/icicle/rust-bindings/polynomials","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.3.0/icicle/rust-bindings/polynomials.md","tags":[],"version":"3.3.0","lastUpdatedBy":"Otsar","lastUpdatedAt":1737035872000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Vector operations","permalink":"/3.3.0/icicle/rust-bindings/vec-ops"},"next":{"title":"Hash","permalink":"/3.3.0/icicle/rust-bindings/hash"}}');var a=n(4848),t=n(8453);const l={},s="Rust FFI Bindings for Univariate Polynomial",r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Initialization Requirements",id:"initialization-requirements",level:2},{value:"Core Trait: <code>UnivariatePolynomial</code>",id:"core-trait-univariatepolynomial",level:2},{value:"Trait Definition",id:"trait-definition",level:3},{value:"<code>DensePolynomial</code> Struct",id:"densepolynomial-struct",level:2},{value:"Traits implementation and methods",id:"traits-implementation-and-methods",level:3},{value:"<code>Drop</code>",id:"drop",level:4},{value:"<code>Clone</code>",id:"clone",level:4},{value:"Operator Overloading: <code>Add</code>, <code>Sub</code>, <code>Mul</code>, <code>Rem</code>, <code>Div</code>",id:"operator-overloading-add-sub-mul-rem-div",level:4},{value:"Key Methods",id:"key-methods",level:4},{value:"Flexible Memory Handling With <code>HostOrDeviceSlice</code>",id:"flexible-memory-handling-with-hostordeviceslice",level:2},{value:"Overview of <code>HostOrDeviceSlice</code>",id:"overview-of-hostordeviceslice",level:3},{value:"Usage in API Functions",id:"usage-in-api-functions",level:3},{value:"Usage",id:"usage",level:2},{value:"Initialization and Basic Operations",id:"initialization-and-basic-operations",level:3},{value:"Creation",id:"creation",level:3},{value:"Arithmetic Operations",id:"arithmetic-operations",level:3},{value:"Division and Remainder",id:"division-and-remainder",level:3},{value:"Monomial Operations",id:"monomial-operations",level:3},{value:"Slicing",id:"slicing",level:3},{value:"Evaluate",id:"evaluate",level:3},{value:"Read coefficients",id:"read-coefficients",level:3},{value:"Polynomial Degree",id:"polynomial-degree",level:3},{value:"Memory Management: Views (rust slices)",id:"memory-management-views-rust-slices",level:3}];function d(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"rust-ffi-bindings-for-univariate-polynomial",children:"Rust FFI Bindings for Univariate Polynomial"})}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"Please refer to the Polynomials overview page for a deep overview. This section is a brief description of the Rust FFI bindings."})}),"\n",(0,a.jsx)(i.p,{children:"This documentation is designed to provide developers with a clear understanding of how to utilize the Rust bindings for polynomial operations efficiently and effectively, leveraging the robust capabilities of both Rust and C++ in their applications."}),"\n",(0,a.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(i.p,{children:'The Rust FFI bindings for the Univariate Polynomial serve as a "shallow wrapper" around the underlying C++ implementation. These bindings provide a straightforward Rust interface that directly calls functions from a C++ library, effectively bridging Rust and C++ operations. The Rust layer handles simple interface translations without delving into complex logic or data structures, which are managed on the C++ side. This design ensures efficient data handling, memory management, and execution of polynomial operations directly via C++.\nCurrently, these bindings are tailored specifically for polynomials where the coefficients, domain, and images are represented as scalar fields.'}),"\n",(0,a.jsx)(i.h2,{id:"initialization-requirements",children:"Initialization Requirements"}),"\n",(0,a.jsx)(i.p,{children:"Before utilizing any functions from the polynomial API, it is mandatory to initialize the appropriate polynomial backend (e.g., CUDA). Additionally, the NTT (Number Theoretic Transform) domain must also be initialized, as the CUDA backend relies on this for certain operations. Failing to properly initialize these components can result in errors."}),"\n",(0,a.jsxs)(i.admonition,{type:"note",children:[(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Field-Specific Initialization Requirement"})}),(0,a.jsx)(i.p,{children:"The ICICLE library is structured such that each field or curve has its dedicated library implementation. As a result, initialization must be performed individually for each field or curve to ensure the correct setup and functionality of the library."})]}),"\n",(0,a.jsxs)(i.h2,{id:"core-trait-univariatepolynomial",children:["Core Trait: ",(0,a.jsx)(i.code,{children:"UnivariatePolynomial"})]}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"UnivariatePolynomial"})," trait encapsulates the essential functionalities required for managing univariate polynomials in the Rust ecosystem. This trait standardizes the operations that can be performed on polynomials, regardless of the underlying implementation details. It allows for a unified approach to polynomial manipulation, providing a suite of methods that are fundamental to polynomial arithmetic."]}),"\n",(0,a.jsx)(i.h3,{id:"trait-definition",children:"Trait Definition"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"pub trait UnivariatePolynomial\nwhere\n    Self::Field: FieldImpl,\n    Self::FieldConfig: FieldConfig,\n{\n    type Field: FieldImpl;\n    type FieldConfig: FieldConfig;\n\n    // Methods to create polynomials from coefficients or roots-of-unity evaluations.\n    fn from_coeffs<S: HostOrDeviceSlice<Self::Field> + ?Sized>(coeffs: &S, size: usize) -> Self;\n    fn from_rou_evals<S: HostOrDeviceSlice<Self::Field> + ?Sized>(evals: &S, size: usize) -> Self;\n\n    // Method to divide this polynomial by another, returning quotient and remainder.\n    fn divide(&self, denominator: &Self) -> (Self, Self) where Self: Sized;\n\n    // Method to divide this polynomial by the vanishing polynomial 'X^N-1'.\n    fn div_by_vanishing(&self, degree: u64) -> Self;\n\n    // Methods to add or subtract a monomial in-place.\n    fn add_monomial_inplace(&mut self, monomial_coeff: &Self::Field, monomial: u64);\n    fn sub_monomial_inplace(&mut self, monomial_coeff: &Self::Field, monomial: u64);\n\n    // Method to slice the polynomial, creating a sub-polynomial.\n    fn slice(&self, offset: u64, stride: u64, size: u64) -> Self;\n\n    // Methods to return new polynomials containing only the even or odd terms.\n    fn even(&self) -> Self;\n    fn odd(&self) -> Self;\n\n    // Method to evaluate the polynomial at a given domain point.\n    fn eval(&self, x: &Self::Field) -> Self::Field;\n\n    // Method to evaluate the polynomial over a domain and store the results.\n    fn eval_on_domain<D: HostOrDeviceSlice<Self::Field> + ?Sized, E: HostOrDeviceSlice<Self::Field> + ?Sized>(\n        &self,\n        domain: &D,\n        evals: &mut E,\n    );\n\n    // Method to evaluate the polynomial over the roots-of-unity domain for power-of-two sized domain\n    fn eval_on_rou_domain<E: HostOrDeviceSlice<Self::Field> + ?Sized>(&self, domain_log_size: u64, evals: &mut E);\n\n    // Method to retrieve a coefficient at a specific index.\n    fn get_coeff(&self, idx: u64) -> Self::Field;\n\n    // Method to copy coefficients into a provided slice.\n    fn copy_coeffs<S: HostOrDeviceSlice<Self::Field> + ?Sized>(&self, start_idx: u64, coeffs: &mut S);\n\n    // Method to get the degree of the polynomial.\n    fn degree(&self) -> i64;\n}\n"})}),"\n",(0,a.jsxs)(i.h2,{id:"densepolynomial-struct",children:[(0,a.jsx)(i.code,{children:"DensePolynomial"})," Struct"]}),"\n",(0,a.jsx)(i.p,{children:"The DensePolynomial struct represents a dense univariate polynomial in Rust, leveraging a handle to manage its underlying memory within the CUDA device context. This struct acts as a high-level abstraction over complex C++ memory management practices, facilitating the integration of high-performance polynomial operations through Rust's Foreign Function Interface (FFI) bindings."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"pub struct DensePolynomial {\n    handle: PolynomialHandle,\n}\n"})}),"\n",(0,a.jsx)(i.h3,{id:"traits-implementation-and-methods",children:"Traits implementation and methods"}),"\n",(0,a.jsx)(i.h4,{id:"drop",children:(0,a.jsx)(i.code,{children:"Drop"})}),"\n",(0,a.jsx)(i.p,{children:"Ensures proper resource management by releasing the CUDA memory when a DensePolynomial instance goes out of scope. This prevents memory leaks and ensures that resources are cleaned up correctly, adhering to Rust's RAII (Resource Acquisition Is Initialization) principles."}),"\n",(0,a.jsx)(i.h4,{id:"clone",children:(0,a.jsx)(i.code,{children:"Clone"})}),"\n",(0,a.jsx)(i.p,{children:"Provides a way to create a new instance of a DensePolynomial with its own unique handle, thus duplicating the polynomial data in the CUDA context. Cloning is essential since the DensePolynomial manages external resources, which cannot be safely shared across instances without explicit duplication."}),"\n",(0,a.jsxs)(i.h4,{id:"operator-overloading-add-sub-mul-rem-div",children:["Operator Overloading: ",(0,a.jsx)(i.code,{children:"Add"}),", ",(0,a.jsx)(i.code,{children:"Sub"}),", ",(0,a.jsx)(i.code,{children:"Mul"}),", ",(0,a.jsx)(i.code,{children:"Rem"}),", ",(0,a.jsx)(i.code,{children:"Div"})]}),"\n",(0,a.jsx)(i.p,{children:"These traits are implemented for references to DensePolynomial (i.e., &DensePolynomial), enabling natural mathematical operations such as addition (+), subtraction (-), multiplication (*), division (/), and remainder (%). This syntactic convenience allows users to compose complex polynomial expressions in a way that is both readable and expressive."}),"\n",(0,a.jsx)(i.h4,{id:"key-methods",children:"Key Methods"}),"\n",(0,a.jsx)(i.p,{children:"In addition to the traits, the following methods are implemented:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"impl DensePolynomial {    \n    // Returns a mutable slice of the polynomial coefficients on the device\n    pub fn coeffs_mut_slice(&mut self) -> &mut DeviceSlice<F> {...}\n}      \n"})}),"\n",(0,a.jsxs)(i.h2,{id:"flexible-memory-handling-with-hostordeviceslice",children:["Flexible Memory Handling With ",(0,a.jsx)(i.code,{children:"HostOrDeviceSlice"})]}),"\n",(0,a.jsxs)(i.p,{children:["The DensePolynomial API is designed to accommodate a wide range of computational environments by supporting both host and device memory through the ",(0,a.jsx)(i.code,{children:"HostOrDeviceSlice"})," trait. This approach ensures that polynomial operations can be seamlessly executed regardless of where the data resides, making the API highly adaptable and efficient for various hardware configurations."]}),"\n",(0,a.jsxs)(i.h3,{id:"overview-of-hostordeviceslice",children:["Overview of ",(0,a.jsx)(i.code,{children:"HostOrDeviceSlice"})]}),"\n",(0,a.jsx)(i.p,{children:"The HostOrDeviceSlice is a Rust trait that abstracts over slices of memory that can either be on the host (CPU) or the device (GPU), as managed by CUDA. This abstraction is crucial for high-performance computing scenarios where data might need to be moved between different memory spaces depending on the operations being performed and the specific hardware capabilities available."}),"\n",(0,a.jsx)(i.h3,{id:"usage-in-api-functions",children:"Usage in API Functions"}),"\n",(0,a.jsx)(i.p,{children:"Functions within the DensePolynomial API that deal with polynomial coefficients or evaluations use the HostOrDeviceSlice trait to accept inputs. This design allows the functions to be agnostic of the actual memory location of the data, whether it's in standard system RAM accessible by the CPU or in GPU memory accessible by CUDA cores."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"// Assume `coeffs` could either be in host memory or CUDA device memory\nlet coeffs: DeviceSlice<F> = DeviceVec::<F>::device_malloc(coeffs_len).unwrap();\nlet p_from_coeffs = PolynomialBabyBear::from_coeffs(&coeffs, coeffs.len());\n\n// Similarly for evaluations from roots of unity\nlet evals: HostSlice<F> = HostSlice::from_slice(&host_memory_evals);\nlet p_from_evals = PolynomialBabyBear::from_rou_evals(&evals, evals.len());\n\n// Same applies for any API that accepts HostOrDeviceSlice\n"})}),"\n",(0,a.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(i.p,{children:["This section outlines practical examples demonstrating how to utilize the ",(0,a.jsx)(i.code,{children:"DensePolynomial"})," Rust API. The API is flexible, supporting multiple scalar fields. Below are examples showing how to use polynomials defined over different fields and perform a variety of operations."]}),"\n",(0,a.jsx)(i.h3,{id:"initialization-and-basic-operations",children:"Initialization and Basic Operations"}),"\n",(0,a.jsx)(i.p,{children:"First, choose the appropriate field implementation for your polynomial operations, initializing the CUDA backend if necessary"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"use icicle_babybear::polynomials::DensePolynomial as PolynomialBabyBear;\n\nlet f = PolynomialBabyBear::from_coeffs(...);\n\n// now use f by calling the implemented traits\n\n// For operations over another field, such as BN254\nuse icicle_bn254::polynomials::DensePolynomial as PolynomialBn254;\n// Use PolynomialBn254 similarly\n"})}),"\n",(0,a.jsx)(i.h3,{id:"creation",children:"Creation"}),"\n",(0,a.jsx)(i.p,{children:"Polynomials can be created from coefficients or evaluations:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"let coeffs = ...;\nlet p_from_coeffs = PolynomialBabyBear::from_coeffs(HostSlice::from_slice(&coeffs), size);\n\nlet evals = ...;\nlet p_from_evals = PolynomialBabyBear::from_rou_evals(HostSlice::from_slice(&evals), size);\n\n"})}),"\n",(0,a.jsx)(i.h3,{id:"arithmetic-operations",children:"Arithmetic Operations"}),"\n",(0,a.jsx)(i.p,{children:"Utilize overloaded operators for intuitive mathematical expressions:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"let add = &f + &g;  // Addition\nlet sub = &f - &g;  // Subtraction\nlet mul = &f * &g;  // Multiplication\nlet mul_scalar = &f * &scalar;  // Scalar multiplication\n"})}),"\n",(0,a.jsx)(i.h3,{id:"division-and-remainder",children:"Division and Remainder"}),"\n",(0,a.jsx)(i.p,{children:"Compute quotient and remainder or perform division by a vanishing polynomial:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"let (q, r) = f.divide(&g);  // Compute both quotient and remainder\nlet q = &f / &g;  // Quotient\nlet r = &f % &g;  // Remainder\n\nlet h = f.div_by_vanishing(N);  // Division by V(x) = X^N - 1\n\n"})}),"\n",(0,a.jsx)(i.h3,{id:"monomial-operations",children:"Monomial Operations"}),"\n",(0,a.jsx)(i.p,{children:"Add or subtract monomials in-place for efficient polynomial manipulation:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"f.add_monomial_inplace(&three, 1 /*monmoial*/); // Adds 3*x to f\nf.sub_monomial_inplace(&one, 0 /*monmoial*/);   // Subtracts 1 from f\n"})}),"\n",(0,a.jsx)(i.h3,{id:"slicing",children:"Slicing"}),"\n",(0,a.jsx)(i.p,{children:"Extract specific components:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"let even = f.even();  // Polynomial of even-indexed terms\nlet odd = f.odd();    // Polynomial of odd-indexed terms\nlet arbitrary_slice = f.slice(offset, stride, size);\n"})}),"\n",(0,a.jsx)(i.h3,{id:"evaluate",children:"Evaluate"}),"\n",(0,a.jsx)(i.p,{children:"Evaluate the polynoomial:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"let x = rand();  // Random field element\nlet f_x = f.eval(&x);  // Evaluate f at x\n\n// Evaluate on a predefined domain\nlet domain = [one, two, three];\nlet mut host_evals = vec![ScalarField::zero(); domain.len()];\nf.eval_on_domain(HostSlice::from_slice(&domain), HostSlice::from_mut_slice(&mut host_evals));\n\n// Evaluate on roots-of-unity-domain\nlet domain_log_size = 4;\nlet mut device_evals = DeviceVec::<ScalarField>::device_malloc(1 << domain_log_size).unwrap();\nf.eval_on_rou_domain(domain_log_size, &mut device_evals[..]);\n"})}),"\n",(0,a.jsx)(i.h3,{id:"read-coefficients",children:"Read coefficients"}),"\n",(0,a.jsx)(i.p,{children:"Read or copy polynomial coefficients for further processing:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"let x_squared_coeff = f.get_coeff(2);  // Coefficient of x^2\n\n// Copy coefficients to a device-specific memory space\nlet mut device_mem = DeviceVec::<Field>::device_malloc(coeffs.len()).unwrap();\nf.copy_coeffs(0, &mut device_mem[..]);\n"})}),"\n",(0,a.jsx)(i.h3,{id:"polynomial-degree",children:"Polynomial Degree"}),"\n",(0,a.jsx)(i.p,{children:"Determine the highest power of the variable with a non-zero coefficient:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"let deg = f.degree();  // Degree of the polynomial\n"})}),"\n",(0,a.jsx)(i.h3,{id:"memory-management-views-rust-slices",children:"Memory Management: Views (rust slices)"}),"\n",(0,a.jsx)(i.p,{children:"Rust enforces correct usage of views at compile time, eliminating the need for runtime checks:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"let mut f = Poly::from_coeffs(HostSlice::from_slice(&coeffs), size);\n\n// Obtain a mutable slice of coefficients as a DeviceSlice\nlet coeffs_slice_dev = f.coeffs_mut_slice();\n\n// Operations on f are restricted here due to mutable borrow of coeffs_slice_dev\n\n// Compute evaluations or perform other operations directly using the slice\n// example: evaluate f on a coset of roots-of-unity. Computing from GPU to HOST/GPU\nlet mut config: NTTConfig<'_, F> = NTTConfig::default();\nconfig.coset_gen = /*some coset gen*/;\nlet mut coset_evals = vec![F::zero(); coeffs_slice_dev.len()];\nntt(\n    coeffs_slice_dev,\n    NTTDir::kForward,\n    &config,\n    HostSlice::from_mut_slice(&mut coset_evals),\n)\n.unwrap();\n\n// now can f can be borrowed once again\n"})})]})}function m(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>s});var o=n(6540);const a={},t=o.createContext(a);function l(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);