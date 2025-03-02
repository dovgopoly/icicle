"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[7959],{30425:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});const r=JSON.parse('{"id":"icicle/programmers_guide/go","title":"ICICLE Golang Usage Guide","description":"Overview","source":"@site/versioned_docs/version-3.5.0/icicle/programmers_guide/go.md","sourceDirName":"icicle/programmers_guide","slug":"/icicle/programmers_guide/go","permalink":"/icicle/programmers_guide/go","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.5.0/icicle/programmers_guide/go.md","tags":[],"version":"3.5.0","lastUpdatedBy":"youyyytrok","lastUpdatedAt":1740918389000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Rust","permalink":"/icicle/programmers_guide/rust"},"next":{"title":"Architecture Overview","permalink":"/icicle/arch_overview"}}');var a=i(74848),t=i(28453);const o={},c="ICICLE Golang Usage Guide",l={},s=[{value:"Overview",id:"overview",level:2},{value:"Device Management",id:"device-management",level:2},{value:"Loading a Backend",id:"loading-a-backend",level:3},{value:"Setting and Getting Active Device",id:"setting-and-getting-active-device",level:3},{value:"Setting and Getting the Default Device",id:"setting-and-getting-the-default-device",level:3},{value:"Querying Device Information",id:"querying-device-information",level:3},{value:"Memory Management",id:"memory-management",level:2},{value:"Allocating and Freeing Memory",id:"allocating-and-freeing-memory",level:3},{value:"Asynchronous Memory Operations",id:"asynchronous-memory-operations",level:3},{value:"Querying Available Memory",id:"querying-available-memory",level:3},{value:"Setting Memory Values",id:"setting-memory-values",level:3},{value:"Data Transfer",id:"data-transfer",level:2},{value:"Explicit Data Transfers",id:"explicit-data-transfers",level:3},{value:"Stream Management",id:"stream-management",level:2},{value:"Creating and Destroying Streams",id:"creating-and-destroying-streams",level:3},{value:"Synchronization",id:"synchronization",level:2},{value:"Synchronizing Streams and Devices",id:"synchronizing-streams-and-devices",level:3},{value:"Device Properties",id:"device-properties",level:2},{value:"Checking Device Availability",id:"checking-device-availability",level:3},{value:"Querying Device Properties",id:"querying-device-properties",level:3},{value:"Compute APIs",id:"compute-apis",level:2},{value:"Multi-Scalar Multiplication (MSM) Example",id:"multi-scalar-multiplication-msm-example",level:3},{value:"Polynomial Operations Example",id:"polynomial-operations-example",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Checking for Errors",id:"checking-for-errors",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"icicle-golang-usage-guide",children:"ICICLE Golang Usage Guide"})}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"This guide covers the usage of ICICLE's Golang API, including device management, memory operations, data transfer, synchronization, and compute APIs."}),"\n",(0,a.jsx)(n.h2,{id:"device-management",children:"Device Management"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["See all ICICLE runtime APIs in ",(0,a.jsx)(n.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/golang/runtime/runtime.go",children:"runtime.go"})]})}),"\n",(0,a.jsx)(n.h3,{id:"loading-a-backend",children:"Loading a Backend"}),"\n",(0,a.jsx)(n.p,{children:"The backend can be loaded from a specific path or from an environment variable. This is essential for setting up the computing environment."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'import "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n\nresult := runtime.LoadBackendFromEnvOrDefault()\n// or load from custom install dir\nresult := runtime.LoadBackend("/path/to/backend/installdir", true)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"setting-and-getting-active-device",children:"Setting and Getting Active Device"}),"\n",(0,a.jsx)(n.p,{children:"You can set the active device for the current thread and retrieve it when needed:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'device := runtime.CreateDevice("CUDA", 0) // or other\nresult := runtime.SetDevice(device)\n// or query current (thread) device \nactiveDevice := runtime.GetActiveDevice()\n'})}),"\n",(0,a.jsx)(n.h3,{id:"setting-and-getting-the-default-device",children:"Setting and Getting the Default Device"}),"\n",(0,a.jsx)(n.p,{children:"You can set the default device for all threads:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'device := runtime.CreateDevice("CUDA", 0) // or other\ndefaultDevice := runtime.SetDefaultDevice(device);\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Setting a default device should be done ",(0,a.jsx)(n.strong,{children:"once"})," from the main thread of the application. If another device or backend is needed for a specific thread ",(0,a.jsx)(n.a,{href:"#setting-and-getting-active-device",children:"runtime.SetDevice"})," should be used instead."]})}),"\n",(0,a.jsx)(n.h3,{id:"querying-device-information",children:"Querying Device Information"}),"\n",(0,a.jsx)(n.p,{children:"Retrieve the number of available devices and check if a pointer is allocated on the host or on the active device:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"numDevices := runtime.GetDeviceCount()\n\nvar ptr unsafe.Pointer\nisHostMemory = runtime.IsHostMemory(ptr)\nisDeviceMemory = runtime.IsActiveDeviceMemory(ptr)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"memory-management",children:"Memory Management"}),"\n",(0,a.jsx)(n.h3,{id:"allocating-and-freeing-memory",children:"Allocating and Freeing Memory"}),"\n",(0,a.jsx)(n.p,{children:"Memory can be allocated and freed on the active device:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"ptr, err := runtime.Malloc(1024) // Allocate 1024 bytes\nerr := runtime.Free(ptr) // Free the allocated memory\n"})}),"\n",(0,a.jsx)(n.h3,{id:"asynchronous-memory-operations",children:"Asynchronous Memory Operations"}),"\n",(0,a.jsx)(n.p,{children:"You can perform memory allocation and deallocation asynchronously using streams:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"stream, err := runtime.CreateStream()\n\nptr, err := runtime.MallocAsync(1024, stream)\nerr = runtime.FreeAsync(ptr, stream)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"querying-available-memory",children:"Querying Available Memory"}),"\n",(0,a.jsx)(n.p,{children:"Retrieve the total and available memory on the active device:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"size_t total_memory, available_memory;\navailableMemory, err := runtime.GetAvailableMemory()\nfreeMemory := availableMemory.Free\ntotalMemory := availableMemory.Total\n"})}),"\n",(0,a.jsx)(n.h3,{id:"setting-memory-values",children:"Setting Memory Values"}),"\n",(0,a.jsx)(n.p,{children:"Set memory to a specific value on the active device, synchronously or asynchronously:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"err := runtime.Memset(ptr, 0, 1024) // Set 1024 bytes to 0\nerr := runtime.MemsetAsync(ptr, 0, 1024, stream)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"data-transfer",children:"Data Transfer"}),"\n",(0,a.jsx)(n.h3,{id:"explicit-data-transfers",children:"Explicit Data Transfers"}),"\n",(0,a.jsx)(n.p,{children:"To avoid device-inference overhead, use explicit copy functions:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"result := runtime.CopyToHost(host_dst, device_src, size)\nresult := runtime.CopyToHostAsync(host_dst, device_src, size, stream)\nresult := runtime.CopyToDevice(device_dst, host_src, size)\nresult := runtime.CopyToDeviceAsync(device_dst, host_src, size, stream)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"stream-management",children:"Stream Management"}),"\n",(0,a.jsx)(n.h3,{id:"creating-and-destroying-streams",children:"Creating and Destroying Streams"}),"\n",(0,a.jsx)(n.p,{children:"Streams are used to manage asynchronous operations:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"stream, err := runtime.CreateStream()\nerr = runtime.DestroyStream(stream)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"synchronization",children:"Synchronization"}),"\n",(0,a.jsx)(n.h3,{id:"synchronizing-streams-and-devices",children:"Synchronizing Streams and Devices"}),"\n",(0,a.jsx)(n.p,{children:"Ensure all previous operations on a stream or device are completed before proceeding:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"err := runtime.StreamSynchronize(stream)\nerr := runtime.DeviceSynchronize()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"device-properties",children:"Device Properties"}),"\n",(0,a.jsx)(n.h3,{id:"checking-device-availability",children:"Checking Device Availability"}),"\n",(0,a.jsx)(n.p,{children:"Check if a device is available and retrieve a list of registered devices:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'dev := runtime.CreateDevice("CPU", 0)\nisCPUAvail := runtime.IsDeviceAvailable(dev)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"querying-device-properties",children:"Querying Device Properties"}),"\n",(0,a.jsx)(n.p,{children:"Retrieve properties of the active device:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"properties, err := runtime.GetDeviceProperties(properties);\n\n/******************/\n// where DeviceProperties is\ntype DeviceProperties struct {\n  UsingHostMemory      bool   // Indicates if the device uses host memory\n  NumMemoryRegions     int32  // Number of memory regions available on the device\n  SupportsPinnedMemory bool   // Indicates if the device supports pinned memory\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"compute-apis",children:"Compute APIs"}),"\n",(0,a.jsx)(n.h3,{id:"multi-scalar-multiplication-msm-example",children:"Multi-Scalar Multiplication (MSM) Example"}),"\n",(0,a.jsx)(n.p,{children:"Icicle provides high-performance compute APIs such as the Multi-Scalar Multiplication (MSM) for cryptographic operations. Here's a simple example of how to use the MSM API."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n\tbn254Msm "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/msm"\n)\n\nfunc main() {\n\n\t// Load installed backends\n\truntime.LoadBackendFromEnvOrDefault()\n\n\t// trying to choose CUDA if available, or fallback to CPU otherwise (default device)\n\tdeviceCuda := runtime.CreateDevice("CUDA", 0) // GPU-0\n\tif runtime.IsDeviceAvailable(&deviceCuda) {\n\t\truntime.SetDevice(&deviceCuda)\n\t} // else we stay on CPU backend\n\n\t// Setup inputs\n\tconst size = 1 << 18\n\n\t// Generate random inputs\n\tscalars := bn254.GenerateScalars(size)\n\tpoints := bn254.GenerateAffinePoints(size)\n\n\t// (optional) copy scalars to device memory explicitly\n\tvar scalarsDevice core.DeviceSlice\n\tscalars.CopyToDevice(&scalarsDevice, true)\n\n\t// MSM configuration\n\tcfgBn254 := core.GetDefaultMSMConfig()\n\n\t// allocate memory for the result\n\tresult := make(core.HostSlice[bn254.Projective], 1)\n\n\t// execute bn254 MSM on device\n\terr := bn254Msm.Msm(scalarsDevice, points, &cfgBn254, result)\n\n\t// Check for errors\n\tif err != runtime.Success {\n\t\terrorString := fmt.Sprint(\n\t\t\t"bn254 Msm failed: ", err)\n\t\tpanic(errorString)\n\t}\n\n\t// free explicitly allocated device memory\n\tscalarsDevice.Free()\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"polynomial-operations-example",children:"Polynomial Operations Example"}),"\n",(0,a.jsx)(n.p,{children:"Here's another example demonstrating polynomial operations using Icicle:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/fields/babybear"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/fields/babybear/ntt"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/fields/babybear/polynomial"\n)\n\nfunc initBabybearDomain() runtime.EIcicleError {\n\tcfgInitDomain := core.GetDefaultNTTInitDomainConfig()\n\trouIcicle := babybear.ScalarField{}\n\trouIcicle.FromUint32(1461624142)\n\treturn ntt.InitDomain(rouIcicle, cfgInitDomain)\n}\n\nfunc init() {\n\t// Load installed backends\n\truntime.LoadBackendFromEnvOrDefault()\n\n\t// trying to choose CUDA if available, or fallback to CPU otherwise (default device)\n\tdeviceCuda := runtime.CreateDevice("CUDA", 0) // GPU-0\n\tif runtime.IsDeviceAvailable(&deviceCuda) {\n\t\truntime.SetDevice(&deviceCuda)\n\t} // else we stay on CPU backend\n\n\t// build domain for ntt is required for some polynomial ops that rely on ntt\n\terr := initBabybearDomain()\n\tif err != runtime.Success {\n\t\terrorString := fmt.Sprint(\n\t\t\t"Babybear Domain initialization failed: ", err)\n\t\tpanic(errorString)\n\t}\n}\n\nfunc main() {\n\n\t// Setup inputs\n\tconst polySize = 1 << 10\n\n\t// randomize two polynomials over babybear field\n\tvar fBabybear polynomial.DensePolynomial\n\tdefer fBabybear.Delete()\n\tvar gBabybear polynomial.DensePolynomial\n\tdefer gBabybear.Delete()\n\tfBabybear.CreateFromCoeffecitients(babybear.GenerateScalars(polySize))\n\tgBabybear.CreateFromCoeffecitients(babybear.GenerateScalars(polySize / 2))\n\n\t// Perform polynomial multiplication\n\trBabybear := fBabybear.Multiply(&gBabybear) // Executes on the current device\n\tdefer rBabybear.Delete()\n\trDegree := rBabybear.Degree()\n\n\tfmt.Println("f Degree: ", fBabybear.Degree())\n\tfmt.Println("g Degree: ", gBabybear.Degree())\n\tfmt.Println("r Degree: ", rDegree)\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"In this example, the polynomial multiplication is used to perform polynomial multiplication on CUDA or CPU, showcasing the flexibility and power of Icicle's compute APIs."}),"\n",(0,a.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,a.jsx)(n.h3,{id:"checking-for-errors",children:"Checking for Errors"}),"\n",(0,a.jsxs)(n.p,{children:["Icicle APIs return an ",(0,a.jsx)(n.code,{children:"EIcicleError"})," enumeration value. Always check the returned value to ensure that operations were successful."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"if result != runtime.SUCCESS {\n    // Handle error\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var r=i(96540);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);