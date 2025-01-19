"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[6952],{5403:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"icicle/programmers_guide/rust","title":"Icicle Rust Usage Guide","description":"Overview","source":"@site/versioned_docs/version-3.4.0/icicle/programmers_guide/rust.md","sourceDirName":"icicle/programmers_guide","slug":"/icicle/programmers_guide/rust","permalink":"/icicle/programmers_guide/rust","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.4.0/icicle/programmers_guide/rust.md","tags":[],"version":"3.4.0","lastUpdatedBy":"Koren-Brand","lastUpdatedAt":1737296485000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"C++","permalink":"/icicle/programmers_guide/cpp"},"next":{"title":"Go","permalink":"/icicle/programmers_guide/go"}}');var a=n(4848),c=n(8453);const r={},s="Icicle Rust Usage Guide",l={},o=[{value:"Overview",id:"overview",level:2},{value:"Build the Rust Application and Execute",id:"build-the-rust-application-and-execute",level:2},{value:"Device Management",id:"device-management",level:2},{value:"Loading a Backend",id:"loading-a-backend",level:3},{value:"Setting and Getting Active Device",id:"setting-and-getting-active-device",level:3},{value:"Setting and Getting the Default Device",id:"setting-and-getting-the-default-device",level:3},{value:"Querying Device Information",id:"querying-device-information",level:3},{value:"Memory Management",id:"memory-management",level:2},{value:"Allocating and Freeing Memory",id:"allocating-and-freeing-memory",level:3},{value:"Asynchronous Memory Operations",id:"asynchronous-memory-operations",level:3},{value:"Querying Available Memory",id:"querying-available-memory",level:3},{value:"Data Transfer",id:"data-transfer",level:2},{value:"Copying Data",id:"copying-data",level:3},{value:"Stream Management",id:"stream-management",level:2},{value:"Creating and Destroying Streams",id:"creating-and-destroying-streams",level:3},{value:"Synchronization",id:"synchronization",level:2},{value:"Synchronizing Streams and Devices",id:"synchronizing-streams-and-devices",level:3},{value:"Device Properties",id:"device-properties",level:2},{value:"Checking Device Availability",id:"checking-device-availability",level:3},{value:"Querying Device Properties",id:"querying-device-properties",level:3},{value:"Compute APIs",id:"compute-apis",level:2},{value:"Multi-Scalar Multiplication (MSM) Example",id:"multi-scalar-multiplication-msm-example",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"icicle-rust-usage-guide",children:"Icicle Rust Usage Guide"})}),"\n",(0,a.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(i.p,{children:"This guide covers the usage of ICICLE\u2019s Rust API, including device management, memory operations, data transfer, synchronization, and compute APIs."}),"\n",(0,a.jsx)(i.h2,{id:"build-the-rust-application-and-execute",children:"Build the Rust Application and Execute"}),"\n",(0,a.jsx)(i.p,{children:"To successfully build and execute the Rust application using ICICLE, you need to define the ICICLE dependencies in your Cargo.toml file:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'[dependencies]\nicicle-runtime = { git = "https://github.com/ingonyama-zk/icicle.git", branch="main" }\nicicle-core = { git = "https://github.com/ingonyama-zk/icicle.git", branch="main" }\nicicle-babybear = { git = "https://github.com/ingonyama-zk/icicle.git", branch="main" }\n# add other ICICLE crates here as needed\n'})}),"\n",(0,a.jsx)(i.p,{children:"Once the dependencies are defined, you can build and run your application using the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"cargo run --release\n"})}),"\n",(0,a.jsx)(i.p,{children:"This will compile your Rust application with optimizations and execute it."}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"The icicle-runtime crate is used to load backends, select a device, and interact with the device in an abstract way when managing memory, streams, and other resources, as explained in this guide."})}),"\n",(0,a.jsx)(i.h2,{id:"device-management",children:"Device Management"}),"\n",(0,a.jsx)(i.h3,{id:"loading-a-backend",children:"Loading a Backend"}),"\n",(0,a.jsx)(i.p,{children:"The backend can be loaded from a specific path or from an environment variable. This is essential for setting up the computing environment."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:'use icicle_runtime::runtime;\n\nruntime::load_backend_from_env_or_default().unwrap();\n// or load from custom install dir\nruntime::load_backend("/path/to/backend/installdir").unwrap();\n'})}),"\n",(0,a.jsx)(i.h3,{id:"setting-and-getting-active-device",children:"Setting and Getting Active Device"}),"\n",(0,a.jsx)(i.p,{children:"You can set the active device for the current thread and retrieve it when needed:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:'use icicle_runtime::Device;\n\nlet device = Device::new("CUDA", 0); // or other\nicicle_runtime::set_device(&device).unwrap();\n\nlet active_device = icicle_runtime::get_active_device().unwrap();\n'})}),"\n",(0,a.jsx)(i.h3,{id:"setting-and-getting-the-default-device",children:"Setting and Getting the Default Device"}),"\n",(0,a.jsx)(i.p,{children:"You can set the default device for all threads:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-caution",children:'let device = Device::new("CUDA", 0); // or other\nlet default_device = icicle_runtime::set_default_device(device);\n'})}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["Setting a default device should be done ",(0,a.jsx)(i.strong,{children:"once"})," from the main thread of the application. If another device or backend is needed for a specific thread ",(0,a.jsx)(i.a,{href:"#setting-and-getting-active-device",children:"icicle_runtime::set_device"})," should be used instead."]})}),"\n",(0,a.jsx)(i.h3,{id:"querying-device-information",children:"Querying Device Information"}),"\n",(0,a.jsx)(i.p,{children:"Retrieve the number of available devices and check if a pointer is allocated on the host or on the active device:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"let device_count = icicle_runtime::get_device_count().unwrap();\n"})}),"\n",(0,a.jsx)(i.h2,{id:"memory-management",children:"Memory Management"}),"\n",(0,a.jsx)(i.h3,{id:"allocating-and-freeing-memory",children:"Allocating and Freeing Memory"}),"\n",(0,a.jsxs)(i.p,{children:["Memory can be allocated on the active device using the ",(0,a.jsx)(i.code,{children:"DeviceVec"})," API. This memory allocation is flexible, as it supports allocation on any device, including the CPU if the CPU backend is used."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"use icicle_runtime::memory::DeviceVec;\n\n// Allocate 1024 elements on the device\nlet mut device_memory: DeviceVec<u8> = DeviceVec::<u8>::device_malloc(1024).unwrap();\n"})}),"\n",(0,a.jsxs)(i.p,{children:["The memory is released when the ",(0,a.jsx)(i.code,{children:"DeviceVec"})," object is dropped."]}),"\n",(0,a.jsx)(i.h3,{id:"asynchronous-memory-operations",children:"Asynchronous Memory Operations"}),"\n",(0,a.jsx)(i.p,{children:"Asynchronous memory operations can be performed using streams. This allows for non-blocking execution, with memory allocation and deallocation occurring asynchronously."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"use icicle_runtime::stream::IcicleStream;\nuse icicle_runtime::memory::DeviceVec;\n\nlet mut stream = IcicleStream::create().unwrap(); // mutability is for the destroy() method\n\n// Allocate 1024 elements asynchronously on the device\nlet mut device_memory: DeviceVec<u8> = DeviceVec::<u8>::device_malloc_async(1024, &stream).unwrap();\n\n// dispatch additional copy, compute etc. ops to the stream\n\n// Synchronize the stream to ensure all operations are complete\nstream.synchronize().unwrap();\nstream.destroy().unwrap(); //\n"})}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"Streams need be explicitly destroyed before being dropped."})}),"\n",(0,a.jsx)(i.h3,{id:"querying-available-memory",children:"Querying Available Memory"}),"\n",(0,a.jsxs)(i.p,{children:["You can retrieve the total and available memory on the active device using the ",(0,a.jsx)(i.code,{children:"get_available_memory"})," function."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:'use icicle_runtime::memory::get_available_memory;\n\n// Retrieve total and available memory on the active device\nlet (total_memory, available_memory) = get_available_memory().unwrap();\n\nprintln!("Total memory: {}", total_memory);\nprintln!("Available memory: {}", available_memory);\n'})}),"\n",(0,a.jsx)(i.p,{children:"This function returns a tuple containing the total memory and the currently available memory on the device. It is essential for managing and optimizing resource usage in your applications."}),"\n",(0,a.jsx)(i.h2,{id:"data-transfer",children:"Data Transfer"}),"\n",(0,a.jsx)(i.h3,{id:"copying-data",children:"Copying Data"}),"\n",(0,a.jsxs)(i.p,{children:["Data can be copied between the host and device, or between devices. The location of the memory is handled by the ",(0,a.jsx)(i.code,{children:"HostOrDeviceSlice"})," and ",(0,a.jsx)(i.code,{children:"DeviceSlice"})," traits:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"use icicle_runtime::memory::{DeviceVec, HostSlice};\n\n// Copy data from host to device\nlet input = vec![1, 2, 3, 4];\nlet mut d_mem = DeviceVec::<u32>::device_malloc(input.len()).unwrap();\nd_mem.copy_from_host(HostSlice::from_slice(&input)).unwrap();\n// OR\nd_mem.copy_from_host_async(HostSlice::from_slice(&input, &stream)).unwrap();\n\n// Copy data back from device to host\nlet mut output = vec![0; input.len()];\nd_mem.copy_to_host(HostSlice::from_mut_slice(&mut output)).unwrap();\n// OR\nd_mem.copy_to_host_async(HostSlice::from_mut_slice(&mut output, &stream)).unwrap();\n"})}),"\n",(0,a.jsx)(i.h2,{id:"stream-management",children:"Stream Management"}),"\n",(0,a.jsx)(i.h3,{id:"creating-and-destroying-streams",children:"Creating and Destroying Streams"}),"\n",(0,a.jsx)(i.p,{children:"Streams in Icicle are used to manage asynchronous operations, ensuring that computations can run in parallel without blocking the CPU thread:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"use icicle_runtime::stream::IcicleStream;\n\n// Create a stream\nlet mut stream = IcicleStream::create().unwrap();\n\n// Destroy the stream\nstream.destroy().unwrap();\n"})}),"\n",(0,a.jsx)(i.h2,{id:"synchronization",children:"Synchronization"}),"\n",(0,a.jsx)(i.h3,{id:"synchronizing-streams-and-devices",children:"Synchronizing Streams and Devices"}),"\n",(0,a.jsx)(i.p,{children:"Synchronization ensures that all previous operations on a stream or device are completed before moving on to the next task. This is crucial when coordinating between multiple dependent operations:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:"use icicle_runtime::stream::IcicleStream;\n\n// Synchronize the stream\nstream.synchronize().unwrap();\n\n// Synchronize the device\nicicle_runtime::device_synchronize().unwrap();\n"})}),"\n",(0,a.jsx)(i.p,{children:"These functions ensure that your operations are properly ordered and completed before the program proceeds, which is critical in parallel computing environments."}),"\n",(0,a.jsx)(i.h2,{id:"device-properties",children:"Device Properties"}),"\n",(0,a.jsx)(i.h3,{id:"checking-device-availability",children:"Checking Device Availability"}),"\n",(0,a.jsx)(i.p,{children:"Check if a specific device is available and retrieve a list of registered devices:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:'use icicle_runtime::Device;\n\nlet cuda_device = Device::new("CUDA", 0);\nif icicle_runtime::is_device_available(&cuda_device) {\n    println!("CUDA device is available.");\n} else {\n    println!("CUDA device is not available.");\n}\n\nlet registered_devices = icicle_runtime::get_registered_devices().unwrap();\nprintln!("Registered devices: {:?}", registered_devices);\n'})}),"\n",(0,a.jsx)(i.h3,{id:"querying-device-properties",children:"Querying Device Properties"}),"\n",(0,a.jsx)(i.p,{children:"Retrieve properties of the active device to understand its capabilities and configurations:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:'use icicle_runtime::Device;\n\nlet cuda_device = Device::new("CUDA", 0);\nif icicle_runtime::is_device_available(&cuda_device) {\n    icicle_runtime::set_device(&cuda_device);\n    let device_props = icicle_runtime::get_device_properties().unwrap();\n    println!("Device using host memory: {}", device_props.using_host_memory);\n}\n'})}),"\n",(0,a.jsx)(i.p,{children:"These functions allow you to query device capabilities and ensure that your application is running on the appropriate hardware."}),"\n",(0,a.jsx)(i.h2,{id:"compute-apis",children:"Compute APIs"}),"\n",(0,a.jsx)(i.h3,{id:"multi-scalar-multiplication-msm-example",children:"Multi-Scalar Multiplication (MSM) Example"}),"\n",(0,a.jsx)(i.p,{children:"Icicle provides high-performance compute APIs such as Multi-Scalar Multiplication (MSM) for cryptographic operations. Here's a simple example of how to use the MSM API in Rust."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-rust",children:'// Using bls12-377 curve\nuse icicle_bls12_377::curve::{CurveCfg, G1Projective, ScalarCfg};\nuse icicle_core::{curve::Curve, msm, msm::MSMConfig, traits::GenerateRandom};\nuse icicle_runtime::{device::Device, memory::HostSlice};\n\nfn main() {\n    // Load backend and set device\n    let _ = icicle_runtime::runtime::load_backend_from_env_or_default();\n    let cuda_device = Device::new("CUDA", 0);\n    if icicle_runtime::is_device_available(&cuda_device) {\n        icicle_runtime::set_device(&cuda_device).unwrap();\n    }\n\n    let size = 1024;\n\n    // Randomize inputs\n    let points = CurveCfg::generate_random_affine_points(size);\n    let scalars = ScalarCfg::generate_random(size);\n\n    let mut msm_results = vec![G1Projective::zero(); 1];\n    msm::msm(\n        HostSlice::from_slice(&scalars),\n        HostSlice::from_slice(&points),\n        &MSMConfig::default(),\n        HostSlice::from_mut_slice(&mut msm_results[..]),\n    )\n    .unwrap();\n    println!("MSM result = {:?}", msm_results);\n}\n'})})]})}function u(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>s});var t=n(6540);const a={},c=t.createContext(a);function r(e){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);