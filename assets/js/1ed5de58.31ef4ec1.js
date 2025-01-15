"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[154],{3221:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>t,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"icicle/programmers_guide/cpp","title":"Icicle C++ Usage Guide","description":"Overview","source":"@site/versioned_docs/version-3.1.0/icicle/programmers_guide/cpp.md","sourceDirName":"icicle/programmers_guide","slug":"/icicle/programmers_guide/cpp","permalink":"/3.1.0/icicle/programmers_guide/cpp","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/programmers_guide/cpp.md","tags":[],"version":"3.1.0","lastUpdatedBy":"yshekel","lastUpdatedAt":1736956357000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Icicle Programmer\'s Guide","permalink":"/3.1.0/icicle/programmers_guide/general"},"next":{"title":"Rust","permalink":"/3.1.0/icicle/programmers_guide/rust"}}');var c=n(4848),a=n(8453);const l={},t="Icicle C++ Usage Guide",s={},o=[{value:"Overview",id:"overview",level:2},{value:"Device Management",id:"device-management",level:2},{value:"Loading a Backend",id:"loading-a-backend",level:3},{value:"Setting and Getting Active Device",id:"setting-and-getting-active-device",level:3},{value:"Querying Device Information",id:"querying-device-information",level:3},{value:"Memory Management",id:"memory-management",level:2},{value:"Allocating and Freeing Memory",id:"allocating-and-freeing-memory",level:3},{value:"Asynchronous Memory Operations",id:"asynchronous-memory-operations",level:3},{value:"Querying Available Memory",id:"querying-available-memory",level:3},{value:"Setting Memory Values",id:"setting-memory-values",level:3},{value:"Data Transfer",id:"data-transfer",level:2},{value:"Copying Data",id:"copying-data",level:3},{value:"Explicit Data Transfers",id:"explicit-data-transfers",level:3},{value:"Stream Management",id:"stream-management",level:2},{value:"Creating and Destroying Streams",id:"creating-and-destroying-streams",level:3},{value:"Synchronization",id:"synchronization",level:2},{value:"Synchronizing Streams and Devices",id:"synchronizing-streams-and-devices",level:3},{value:"Device Properties",id:"device-properties",level:2},{value:"Checking Device Availability",id:"checking-device-availability",level:3},{value:"Querying Device Properties",id:"querying-device-properties",level:3},{value:"Compute APIs",id:"compute-apis",level:2},{value:"Multi-Scalar Multiplication (MSM) Example",id:"multi-scalar-multiplication-msm-example",level:3},{value:"Polynomial Operations Example",id:"polynomial-operations-example",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Checking for Errors",id:"checking-for-errors",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"icicle-c-usage-guide",children:"Icicle C++ Usage Guide"})}),"\n",(0,c.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,c.jsx)(i.p,{children:"This guide covers the usage of ICICLE's C++ API, including device management, memory operations, data transfer, synchronization, and compute APIs."}),"\n",(0,c.jsx)(i.h2,{id:"device-management",children:"Device Management"}),"\n",(0,c.jsx)(i.admonition,{type:"note",children:(0,c.jsxs)(i.p,{children:["See all ICICLE runtime APIs in ",(0,c.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/include/icicle/runtime.h",children:"runtime.h"})]})}),"\n",(0,c.jsx)(i.h3,{id:"loading-a-backend",children:"Loading a Backend"}),"\n",(0,c.jsx)(i.p,{children:"The backend can be loaded from a specific path or from an environment variable. This is essential for setting up the computing environment."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:'#include "icicle/runtime.h"\neIcicleError result = icicle_load_backend_from_env_or_default();\n// or load from custom install dir\neIcicleError result = icicle_load_backend("/path/to/backend/installdir", true);\n'})}),"\n",(0,c.jsx)(i.h3,{id:"setting-and-getting-active-device",children:"Setting and Getting Active Device"}),"\n",(0,c.jsx)(i.p,{children:"You can set the active device for the current thread and retrieve it when needed:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:'icicle::Device device = {"CUDA", 0}; // or other\neIcicleError result = icicle_set_device(device);\n// or query current (thread) device \neIcicleError result = icicle_get_active_device(device);\n'})}),"\n",(0,c.jsx)(i.h3,{id:"querying-device-information",children:"Querying Device Information"}),"\n",(0,c.jsx)(i.p,{children:"Retrieve the number of available devices and check if a pointer is allocated on the host or on the active device:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"int device_count;\neIcicleError result = icicle_get_device_count(device_count);\n\nbool is_host_memory;\neIcicleError result = icicle_is_host_memory(ptr);\n\nbool is_device_memory;\neIcicleError result = icicle_is_active_device_memory(ptr);\n"})}),"\n",(0,c.jsx)(i.h2,{id:"memory-management",children:"Memory Management"}),"\n",(0,c.jsx)(i.h3,{id:"allocating-and-freeing-memory",children:"Allocating and Freeing Memory"}),"\n",(0,c.jsx)(i.p,{children:"Memory can be allocated and freed on the active device:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"void* ptr;\neIcicleError result = icicle_malloc(&ptr, 1024); // Allocate 1024 bytes\neIcicleError result = icicle_free(ptr); // Free the allocated memory\n"})}),"\n",(0,c.jsx)(i.h3,{id:"asynchronous-memory-operations",children:"Asynchronous Memory Operations"}),"\n",(0,c.jsx)(i.p,{children:"You can perform memory allocation and deallocation asynchronously using streams:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"icicleStreamHandle stream;\neIcicleError err = icicle_create_stream(&stream);\n\nvoid* ptr;\nerr = icicle_malloc_async(&ptr, 1024, stream);\nerr = icicle_free_async(ptr, stream);\n"})}),"\n",(0,c.jsx)(i.h3,{id:"querying-available-memory",children:"Querying Available Memory"}),"\n",(0,c.jsx)(i.p,{children:"Retrieve the total and available memory on the active device:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"size_t total_memory, available_memory;\neIcicleError err = icicle_get_available_memory(total_memory, available_memory);\n"})}),"\n",(0,c.jsx)(i.h3,{id:"setting-memory-values",children:"Setting Memory Values"}),"\n",(0,c.jsx)(i.p,{children:"Set memory to a specific value on the active device, synchronously or asynchronously:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"eIcicleError err = icicle_memset(ptr, 0, 1024); // Set 1024 bytes to 0\neIcicleError err = icicle_memset_async(ptr, 0, 1024, stream);\n"})}),"\n",(0,c.jsx)(i.h2,{id:"data-transfer",children:"Data Transfer"}),"\n",(0,c.jsx)(i.h3,{id:"copying-data",children:"Copying Data"}),"\n",(0,c.jsx)(i.p,{children:"Data can be copied between host and device, or between devices. The location of the memory is inferred from the pointers:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"eIcicleError result = icicle_copy(dst, src, size);\neIcicleError result = icicle_copy_async(dst, src, size, stream);\n"})}),"\n",(0,c.jsx)(i.h3,{id:"explicit-data-transfers",children:"Explicit Data Transfers"}),"\n",(0,c.jsx)(i.p,{children:"To avoid device-inference overhead, use explicit copy functions:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"eIcicleError result = icicle_copy_to_host(host_dst, device_src, size);\neIcicleError result = icicle_copy_to_host_async(host_dst, device_src, size, stream);\n\neIcicleError result = icicle_copy_to_device(device_dst, host_src, size);\neIcicleError result = icicle_copy_to_device_async(device_dst, host_src, size, stream);\n"})}),"\n",(0,c.jsx)(i.h2,{id:"stream-management",children:"Stream Management"}),"\n",(0,c.jsx)(i.h3,{id:"creating-and-destroying-streams",children:"Creating and Destroying Streams"}),"\n",(0,c.jsx)(i.p,{children:"Streams are used to manage asynchronous operations:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"icicleStreamHandle stream;\neIcicleError result = icicle_create_stream(&stream);\neIcicleError result = icicle_destroy_stream(stream);\n"})}),"\n",(0,c.jsx)(i.h2,{id:"synchronization",children:"Synchronization"}),"\n",(0,c.jsx)(i.h3,{id:"synchronizing-streams-and-devices",children:"Synchronizing Streams and Devices"}),"\n",(0,c.jsx)(i.p,{children:"Ensure all previous operations on a stream or device are completed before proceeding:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"eIcicleError result = icicle_stream_synchronize(stream);\neIcicleError result = icicle_device_synchronize();\n"})}),"\n",(0,c.jsx)(i.h2,{id:"device-properties",children:"Device Properties"}),"\n",(0,c.jsx)(i.h3,{id:"checking-device-availability",children:"Checking Device Availability"}),"\n",(0,c.jsx)(i.p,{children:"Check if a device is available and retrieve a list of registered devices:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"icicle::Device dev;\neIcicleError result = icicle_is_device_available(dev);\n"})}),"\n",(0,c.jsx)(i.h3,{id:"querying-device-properties",children:"Querying Device Properties"}),"\n",(0,c.jsx)(i.p,{children:"Retrieve properties of the active device:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"DeviceProperties properties;\neIcicleError result = icicle_get_device_properties(properties);\n\n/******************/\n// where DeviceProperties is\nstruct DeviceProperties {\n  bool using_host_memory;      // Indicates if the device uses host memory\n  int num_memory_regions;      // Number of memory regions available on the device\n  bool supports_pinned_memory; // Indicates if the device supports pinned memory\n  // Add more properties as needed\n};\n"})}),"\n",(0,c.jsx)(i.h2,{id:"compute-apis",children:"Compute APIs"}),"\n",(0,c.jsx)(i.h3,{id:"multi-scalar-multiplication-msm-example",children:"Multi-Scalar Multiplication (MSM) Example"}),"\n",(0,c.jsx)(i.p,{children:"Icicle provides high-performance compute APIs such as the Multi-Scalar Multiplication (MSM) for cryptographic operations. Here's a simple example of how to use the MSM API."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:'#include <iostream>\n#include "icicle/runtime.h"\n#include "icicle/api/bn254.h"\n\nusing namespace bn254;\n\nint main()\n{\n  // Load installed backends\n  icicle_load_backend_from_env_or_default();\n\n  // trying to choose CUDA if available, or fallback to CPU otherwise (default device)\n  const bool is_cuda_device_available = (eIcicleError::SUCCESS == icicle_is_device_available("CUDA"));\n  if (is_cuda_device_available) {\n    Device device = {"CUDA", 0};             // GPU-0\n    ICICLE_CHECK(icicle_set_device(device)); // ICICLE_CHECK asserts that the api call returns eIcicleError::SUCCESS\n  } // else we stay on CPU backend\n\n  // Setup inputs\n  int msm_size = 1024;\n  auto scalars = std::make_unique<scalar_t[]>(msm_size);\n  auto points = std::make_unique<affine_t[]>(msm_size);\n  projective_t result;\n\n  // Generate random inputs\n  scalar_t::rand_host_many(scalars.get(), msm_size);\n  projective_t::rand_host_many(points.get(), msm_size);\n\n  // (optional) copy scalars to device memory explicitly\n  scalar_t* scalars_d = nullptr;\n  auto err = icicle_malloc((void**)&scalars_d, sizeof(scalar_t) * msm_size);\n  // Note: need to test err and make sure no errors occurred\n  err = icicle_copy(scalars_d, scalars.get(), sizeof(scalar_t) * msm_size);\n\n  // MSM configuration\n  MSMConfig config = default_msm_config();\n  // tell icicle that the scalars are on device. Note that EC points and result are on host memory in this example.\n  config.are_scalars_on_device = true;\n\n  // Execute the MSM kernel (on the current device)\n  eIcicleError result_code = msm(scalars_d, points.get(), msm_size, config, &result);\n  // OR call bn254_msm(scalars_d, points.get(), msm_size, config, &result);\n\n  // Free the device memory\n  icicle_free(scalars_d);\n\n  // Check for errors\n  if (result_code == eIcicleError::SUCCESS) {\n    std::cout << "MSM result: " << projective_t::to_affine(result) << std::endl;\n  } else {\n    std::cerr << "MSM computation failed with error: " << get_error_string(result_code) << std::endl;\n  }\n\n  return 0;\n}\n'})}),"\n",(0,c.jsx)(i.h3,{id:"polynomial-operations-example",children:"Polynomial Operations Example"}),"\n",(0,c.jsx)(i.p,{children:"Here's another example demonstrating polynomial operations using Icicle:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:'#include <iostream>\n#include "icicle/runtime.h"\n#include "icicle/polynomials/polynomials.h"\n#include "icicle/api/bn254.h"\n\nusing namespace bn254;\n\n// define bn254Poly to be a polynomial over the scalar field of bn254\nusing bn254Poly = Polynomial<scalar_t>;\n\nstatic bn254Poly randomize_polynomial(uint32_t size)\n{\n  auto coeff = std::make_unique<scalar_t[]>(size);\n  for (int i = 0; i < size; i++)\n    coeff[i] = scalar_t::rand_host();\n  return bn254Poly::from_rou_evaluations(coeff.get(), size);\n}\n\nint main()\n{\n  // Load backend and set device\n  icicle_load_backend_from_env_or_default();\n\n  // trying to choose CUDA if available, or fallback to CPU otherwise (default device)\n  const bool is_cuda_device_available = (eIcicleError::SUCCESS == icicle_is_device_available("CUDA"));\n  if (is_cuda_device_available) {\n    Device device = {"CUDA", 0};             // GPU-0\n    ICICLE_CHECK(icicle_set_device(device)); // ICICLE_CHECK asserts that the API call returns eIcicleError::SUCCESS\n  } // else we stay on CPU backend\n\n  int poly_size = 1024;\n\n  // build domain for ntt is required for some polynomial ops that rely on ntt\n  ntt_init_domain(scalar_t::omega(12), default_ntt_init_domain_config());\n\n  // randomize polynomials f(x),g(x) over the scalar field of bn254\n  bn254Poly f = randomize_polynomial(poly_size);\n  bn254Poly g = randomize_polynomial(poly_size);\n\n  // Perform polynomial multiplication\n  auto result = f * g; // Executes on the current device\n\n  ICICLE_LOG_INFO << "Done";\n\n  return 0;\n}\n'})}),"\n",(0,c.jsx)(i.p,{children:"In this example, the polynomial multiplication is used to perform polynomial multiplication on CUDA or CPU, showcasing the flexibility and power of Icicle's compute APIs."}),"\n",(0,c.jsx)(i.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,c.jsx)(i.h3,{id:"checking-for-errors",children:"Checking for Errors"}),"\n",(0,c.jsxs)(i.p,{children:["Icicle APIs return an ",(0,c.jsx)(i.code,{children:"eIcicleError"})," enumeration value. Always check the returned value to ensure that operations were successful."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-cpp",children:"if (result != eIcicleError::SUCCESS) {\n    // Handle error\n}\n"})}),"\n",(0,c.jsx)(i.p,{children:"This guide provides an overview of the essential APIs available in Icicle for C++. The provided examples should help you get started with integrating Icicle into your high-performance computing projects."})]})}function m(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>t});var r=n(6540);const c={},a=r.createContext(c);function l(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);