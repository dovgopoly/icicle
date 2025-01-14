"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[1906],{4019:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"icicle/primitives/msm","title":"MSM - Multi scalar multiplication","description":"MSM stands for Multi scalar multiplication, its defined as:","source":"@site/versioned_docs/version-2.8.0/icicle/primitives/msm.md","sourceDirName":"icicle/primitives","slug":"/icicle/primitives/msm","permalink":"/2.8.0/icicle/primitives/msm","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/primitives/msm.md","tags":[],"version":"2.8.0","lastUpdatedBy":"idanfr-ingo","lastUpdatedAt":1736855738000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"ICICLE Primitives","permalink":"/2.8.0/icicle/primitives/overview"},"next":{"title":"NTT","permalink":"/2.8.0/icicle/primitives/ntt"}}');var i=a(4848),l=a(8453);const t={},r="MSM - Multi scalar multiplication",c={},m=[{value:"Supported Bindings",id:"supported-bindings",level:2},{value:"Algorithm description",id:"algorithm-description",level:2},{value:"Batched MSM",id:"batched-msm",level:2},{value:"MSM configuration",id:"msm-configuration",level:2},{value:"Choosing optimal parameters",id:"choosing-optimal-parameters",level:2},{value:"Memory usage estimation",id:"memory-usage-estimation",level:2},{value:"Example parameters",id:"example-parameters",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"msm---multi-scalar-multiplication",children:"MSM - Multi scalar multiplication"})}),"\n",(0,i.jsx)(e.p,{children:"MSM stands for Multi scalar multiplication, its defined as:"}),"\n",(0,i.jsxs)("math",{xmlns:"http://www.w3.org/1998/Math/MathML",children:[(0,i.jsx)("mi",{children:"M"}),(0,i.jsx)("mi",{children:"S"}),(0,i.jsx)("mi",{children:"M"}),(0,i.jsx)("mo",{stretchy:"false",children:"("}),(0,i.jsx)("mi",{children:"a"}),(0,i.jsx)("mo",{children:","}),(0,i.jsx)("mi",{children:"G"}),(0,i.jsx)("mo",{stretchy:"false",children:")"}),(0,i.jsx)("mo",{children:"="}),(0,i.jsxs)("munderover",{children:[(0,i.jsx)("mo",{"data-mjx-texclass":"OP",movablelimits:"false",children:"\u2211"}),(0,i.jsxs)("mrow",{"data-mjx-texclass":"ORD",children:[(0,i.jsx)("mi",{children:"j"}),(0,i.jsx)("mo",{children:"="}),(0,i.jsx)("mn",{children:"0"})]}),(0,i.jsxs)("mrow",{"data-mjx-texclass":"ORD",children:[(0,i.jsx)("mi",{children:"n"}),(0,i.jsx)("mo",{children:"\u2212"}),(0,i.jsx)("mn",{children:"1"})]})]}),(0,i.jsxs)("msub",{children:[(0,i.jsx)("mi",{children:"a"}),(0,i.jsx)("mi",{children:"j"})]}),(0,i.jsxs)("msub",{children:[(0,i.jsx)("mi",{children:"G"}),(0,i.jsx)("mi",{children:"j"})]})]}),"\n",(0,i.jsx)(e.p,{children:"Where"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"G"}),(0,i.jsx)(e.mi,{children:"j"})]}),(0,i.jsx)(e.mo,{children:"\u2208"}),(0,i.jsx)(e.mi,{children:"G"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"G_j \\in G"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"G"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"\u2208"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"G"})]})]})]})," - points from an Elliptic Curve group."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mn,{children:"0"})]}),(0,i.jsx)(e.mo,{separator:"true",children:","}),(0,i.jsx)(e.mo,{children:"\u2026"}),(0,i.jsx)(e.mo,{separator:"true",children:","}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"n"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"a_0, \\ldots, a_n"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mpunct",children:","}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"minner",children:"\u2026"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"mpunct",children:","}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})})]})," - Scalars"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"M"}),(0,i.jsx)(e.mi,{children:"S"}),(0,i.jsx)(e.mi,{children:"M"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mo,{separator:"true",children:","}),(0,i.jsx)(e.mi,{children:"G"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"\u2208"}),(0,i.jsx)(e.mi,{children:"G"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"MSM(a, G) \\in G"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"MSM"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"mpunct",children:","}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"G"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"\u2208"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"G"})]})]})]})," - a single EC (elliptic curve) point"]}),"\n",(0,i.jsx)(e.p,{children:"In words, MSM is the sum of scalar and EC point multiplications. We can see from this definition that the core operations occurring are Modular Multiplication and Elliptic curve point addition. Its obvious that multiplication can be computed in parallel and then the products summed, making MSM inherently parallelizable."}),"\n",(0,i.jsxs)(e.p,{children:["Accelerating MSM is crucial to a ZK protocol's performance due to the ",(0,i.jsx)(e.a,{href:"https://hackmd.io/@0xMonia/SkQ6-oRz3#Hardware-acceleration-in-action",children:"large percent of run time"})," they take when generating proofs."]}),"\n",(0,i.jsxs)(e.p,{children:["You can learn more about how MSMs work from this ",(0,i.jsx)(e.a,{href:"https://www.youtube.com/watch?v=Bl5mQA7UL2I",children:"video"})," and from our resource list on ",(0,i.jsx)(e.a,{href:"https://www.ingonyama.com/ingopedia/msm",children:"Ingopedia"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"supported-bindings",children:"Supported Bindings"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/2.8.0/icicle/golang-bindings/msm",children:"Golang"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/2.8.0/icicle/rust-bindings/msm",children:"Rust"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"algorithm-description",children:"Algorithm description"}),"\n",(0,i.jsx)(e.p,{children:"We follow the bucket method algorithm. The GPU implementation consists of four phases:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Preparation phase - The scalars are split into smaller scalars of ",(0,i.jsx)(e.code,{children:"c"})," bits each. These are the bucket indices. The points are grouped according to their corresponding bucket index and the buckets are sorted by size."]}),"\n",(0,i.jsxs)(e.li,{children:["Accumulation phase - Each bucket accumulates all of its points using a single thread. More than one thread is assigned to large buckets, in proportion to their size. A bucket is considered large if its size is above the large bucket threshold that is determined by the ",(0,i.jsx)(e.code,{children:"large_bucket_factor"})," parameter. The large bucket threshold is the expected average bucket size times the ",(0,i.jsx)(e.code,{children:"large_bucket_factor"})," parameter."]}),"\n",(0,i.jsxs)(e.li,{children:["Buckets Reduction phase - bucket results are multiplied by their corresponding bucket number and each bucket module is reduced to a small number of final results. By default, this is done by an iterative algorithm which is highly parallel. Setting ",(0,i.jsx)(e.code,{children:"is_big_triangle"})," to ",(0,i.jsx)(e.code,{children:"true"})," will switch this phase to the running sum algorithm described in the above YouTube talk which is much less parallel."]}),"\n",(0,i.jsx)(e.li,{children:"Final accumulation phase - The final results from the last phase are accumulated using the double-and-add algorithm."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"batched-msm",children:"Batched MSM"}),"\n",(0,i.jsx)(e.p,{children:"The MSM supports batch mode - running multiple MSMs in parallel. It's always better to use the batch mode instead of running single msms in serial as long as there is enough memory available. We support running a batch of MSMs that share the same points as well as a batch of MSMs that use different points."}),"\n",(0,i.jsx)(e.h2,{id:"msm-configuration",children:"MSM configuration"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'  /**\n   * @struct MSMConfig\n   * Struct that encodes MSM parameters to be passed into the [MSM](@ref MSM) function. The intended use of this struct\n   * is to create it using [default_msm_config](@ref default_msm_config) function and then you\'ll hopefully only need to\n   * change a small number of default values for each of your MSMs.\n   */\n  struct MSMConfig {\n    device_context::DeviceContext ctx; /**< Details related to the device such as its id and stream id. */\n    int points_size;         /**< Number of points in the MSM. If a batch of MSMs needs to be computed, this should be\n                              *   a number of different points. So, if each MSM re-uses the same set of points, this\n                              *   variable is set equal to the MSM size. And if every MSM uses a distinct set of\n                              *   points, it should be set to the product of MSM size and [batch_size](@ref\n                              *   batch_size). Default value: 0 (meaning it\'s equal to the MSM size). */\n    int precompute_factor;   /**< The number of extra points to pre-compute for each point. See the\n                              *   [precompute_msm_points](@ref precompute_msm_points) function, `precompute_factor` passed\n                              *   there needs to be equal to the one used here. Larger values decrease the\n                              *   number of computations to make, on-line memory footprint, but increase the static\n                              *   memory footprint. Default value: 1 (i.e. don\'t pre-compute). */\n    int c;                   /**< \\f$ c \\f$ value, or "window bitsize" which is the main parameter of the "bucket\n                              *   method" that we use to solve the MSM problem. As a rule of thumb, larger value\n                              *   means more on-line memory footprint but also more parallelism and less computational\n                              *   complexity (up to a certain point). Currently pre-computation is independent of\n                              *   \\f$ c \\f$, however in the future value of \\f$ c \\f$ here and the one passed into the\n                              *   [precompute_msm_points](@ref precompute_msm_points) function will need to be identical.\n                              *    Default value: 0 (the optimal value of \\f$ c \\f$ is chosen automatically).  */\n    int bitsize;             /**< Number of bits of the largest scalar. Typically equals the bitsize of scalar field,\n                              *   but if a different (better) upper bound is known, it should be reflected in this\n                              *   variable. Default value: 0 (set to the bitsize of scalar field). */\n    int large_bucket_factor; /**< Variable that controls how sensitive the algorithm is to the buckets that occur\n                              *   very frequently. Useful for efficient treatment of non-uniform distributions of\n                              *   scalars and "top windows" with few bits. Can be set to 0 to disable separate\n                              *   treatment of large buckets altogether. Default value: 10. */\n    int batch_size;          /**< The number of MSMs to compute. Default value: 1. */\n    bool are_scalars_on_device;       /**< True if scalars are on device and false if they\'re on host. Default value:\n                                       *   false. */\n    bool are_scalars_montgomery_form; /**< True if scalars are in Montgomery form and false otherwise. Default value:\n                                       *   true. */\n    bool are_points_on_device; /**< True if points are on device and false if they\'re on host. Default value: false. */\n    bool are_points_montgomery_form; /**< True if coordinates of points are in Montgomery form and false otherwise.\n                                      *   Default value: true. */\n    bool are_results_on_device; /**< True if the results should be on device and false if they should be on host. If set\n                                 *   to false, `is_async` won\'t take effect because a synchronization is needed to\n                                 *   transfer results to the host. Default value: false. */\n    bool is_big_triangle;       /**< Whether to do "bucket accumulation" serially. Decreases computational complexity\n                                 *   but also greatly decreases parallelism, so only suitable for large batches of MSMs.\n                                 *   Default value: false. */\n    bool is_async;              /**< Whether to run the MSM asynchronously. If set to true, the MSM function will be\n                                 *   non-blocking and you\'d need to synchronize it explicitly by running\n                                 *   `cudaStreamSynchronize` or `cudaDeviceSynchronize`. If set to false, the MSM\n                                 *   function will block the current CPU thread. */\n  };\n'})}),"\n",(0,i.jsx)(e.h2,{id:"choosing-optimal-parameters",children:"Choosing optimal parameters"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"is_big_triangle"})," should be ",(0,i.jsx)(e.code,{children:"false"})," in almost all cases. It might provide better results only for very small MSMs (smaller than 2^8^) with a large batch (larger than 100) but this should be tested per scenario.\nLarge buckets exist in two cases:"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"When the scalar distribution isn't uniform."}),"\n",(0,i.jsxs)(e.li,{children:["When ",(0,i.jsx)(e.code,{children:"c"})," does not divide the scalar bit-size."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"large_bucket_factor"})," that is equal to 10 yields good results for most cases, but it's best to fine tune this parameter per ",(0,i.jsx)(e.code,{children:"c"})," and per scalar distribution.\nThe two most important parameters for performance are ",(0,i.jsx)(e.code,{children:"c"})," and the ",(0,i.jsx)(e.code,{children:"precompute_factor"}),". They affect the number of EC additions as well as the memory size. When the points are not known in advance we cannot use precomputation. In this case the best ",(0,i.jsx)(e.code,{children:"c"})," value is usually around ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mn,{children:"2"})]}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"S"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"z"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"4"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"log_2(msmSize) - 4"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ze"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"4"})]})]})]}),". However, in most protocols the points are known in advanced and precomputation can be used unless limited by memory. Usually it's best to use maximum precomputation (such that we end up with only a single bucket module) combined we a ",(0,i.jsx)(e.code,{children:"c"})," value around ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mn,{children:"2"})]}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"S"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"z"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"log_2(msmSize) - 1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ze"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"memory-usage-estimation",children:"Memory usage estimation"}),"\n",(0,i.jsx)(e.p,{children:"The main memory requirements of the MSM are the following:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Scalars - ",(0,i.jsx)(e.code,{children:"sizeof(scalar_t) * msm_size * batch_size"})]}),"\n",(0,i.jsxs)(e.li,{children:["Scalar indices - ",(0,i.jsx)(e.code,{children:"~6 * sizeof(unsigned) * nof_bucket_modules * msm_size * batch_size"})]}),"\n",(0,i.jsxs)(e.li,{children:["Points - ",(0,i.jsx)(e.code,{children:"sizeof(affine_t) * msm_size * precomp_factor * batch_size"})]}),"\n",(0,i.jsxs)(e.li,{children:["Buckets - ",(0,i.jsx)(e.code,{children:"sizeof(projective_t) * nof_bucket_modules * 2^c * batch_size"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["where ",(0,i.jsx)(e.code,{children:"nof_bucket_modules =  ceil(ceil(bitsize / c) / precompute_factor)"})]}),"\n",(0,i.jsx)(e.p,{children:"During the MSM computation first the memory for scalars and scalar indices is allocated, then the indices are freed and points and buckets are allocated. This is why a good estimation for the required memory is the following formula:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"I"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{separator:"true",children:","}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mi,{children:"b"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"max(scalars + scalarIndices, scalars + points + buckets)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ma"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"sc"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"rs"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"sc"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ces"}),(0,i.jsx)(e.span,{className:"mpunct",children:","}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"sc"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"rs"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,i.jsx)(e.p,{children:"This gives a good approximation within 10% of the actual required memory for most cases."}),"\n",(0,i.jsx)(e.h2,{id:"example-parameters",children:"Example parameters"}),"\n",(0,i.jsx)(e.p,{children:"Here is a useful table showing optimal parameters for different MSMs. They are optimal for BLS12-377 curve when running on NVIDIA GeForce RTX 3090 Ti. This is the configuration used:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"  msm::MSMConfig config = {\n    ctx,            // DeviceContext\n    N,              // points_size\n    precomp_factor, // precompute_factor\n    user_c,         // c\n    0,              // bitsize\n    10,             // large_bucket_factor\n    batch_size,     // batch_size\n    false,          // are_scalars_on_device\n    false,          // are_scalars_montgomery_form\n    true,           // are_points_on_device\n    false,          // are_points_montgomery_form\n    true,           // are_results_on_device\n    false,          // is_big_triangle\n    true            // is_async\n  };\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here are the parameters and the results for the different cases:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"MSM size"}),(0,i.jsx)(e.th,{children:"Batch size"}),(0,i.jsx)(e.th,{children:"Precompute factor"}),(0,i.jsx)(e.th,{children:"c"}),(0,i.jsx)(e.th,{children:"Memory estimation (GB)"}),(0,i.jsx)(e.th,{children:"Actual memory (GB)"}),(0,i.jsx)(e.th,{children:"Single MSM time (ms)"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"10"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"9"}),(0,i.jsx)(e.td,{children:"0.00227"}),(0,i.jsx)(e.td,{children:"0.00277"}),(0,i.jsx)(e.td,{children:"9.2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"10"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"23"}),(0,i.jsx)(e.td,{children:"11"}),(0,i.jsx)(e.td,{children:"0.00259"}),(0,i.jsx)(e.td,{children:"0.00272"}),(0,i.jsx)(e.td,{children:"1.76"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"10"}),(0,i.jsx)(e.td,{children:"1000"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"7"}),(0,i.jsx)(e.td,{children:"0.94"}),(0,i.jsx)(e.td,{children:"1.09"}),(0,i.jsx)(e.td,{children:"0.051"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"10"}),(0,i.jsx)(e.td,{children:"1000"}),(0,i.jsx)(e.td,{children:"23"}),(0,i.jsx)(e.td,{children:"11"}),(0,i.jsx)(e.td,{children:"2.59"}),(0,i.jsx)(e.td,{children:"2.74"}),(0,i.jsx)(e.td,{children:"0.025"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"15"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"11"}),(0,i.jsx)(e.td,{children:"0.011"}),(0,i.jsx)(e.td,{children:"0.019"}),(0,i.jsx)(e.td,{children:"9.9"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"15"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"16"}),(0,i.jsx)(e.td,{children:"16"}),(0,i.jsx)(e.td,{children:"0.061"}),(0,i.jsx)(e.td,{children:"0.065"}),(0,i.jsx)(e.td,{children:"2.4"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"15"}),(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"11"}),(0,i.jsx)(e.td,{children:"1.91"}),(0,i.jsx)(e.td,{children:"1.92"}),(0,i.jsx)(e.td,{children:"0.84"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"15"}),(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"19"}),(0,i.jsx)(e.td,{children:"14"}),(0,i.jsx)(e.td,{children:"6.32"}),(0,i.jsx)(e.td,{children:"6.61"}),(0,i.jsx)(e.td,{children:"0.56"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"18"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"14"}),(0,i.jsx)(e.td,{children:"0.128"}),(0,i.jsx)(e.td,{children:"0.128"}),(0,i.jsx)(e.td,{children:"14.4"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"18"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"15"}),(0,i.jsx)(e.td,{children:"17"}),(0,i.jsx)(e.td,{children:"0.40"}),(0,i.jsx)(e.td,{children:"0.42"}),(0,i.jsx)(e.td,{children:"5.9"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"22"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"17"}),(0,i.jsx)(e.td,{children:"1.64"}),(0,i.jsx)(e.td,{children:"1.65"}),(0,i.jsx)(e.td,{children:"68"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"22"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"13"}),(0,i.jsx)(e.td,{children:"21"}),(0,i.jsx)(e.td,{children:"5.67"}),(0,i.jsx)(e.td,{children:"5.94"}),(0,i.jsx)(e.td,{children:"54"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"24"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"18"}),(0,i.jsx)(e.td,{children:"6.58"}),(0,i.jsx)(e.td,{children:"6.61"}),(0,i.jsx)(e.td,{children:"232"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"24"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"7"}),(0,i.jsx)(e.td,{children:"21"}),(0,i.jsx)(e.td,{children:"12.4"}),(0,i.jsx)(e.td,{children:"13.4"}),(0,i.jsx)(e.td,{children:"199"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"The optimal values can vary per GPU and per curve. It is best to try a few combinations until you get the best results for your specific case."})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>r});var n=a(6540);const i={},l=n.createContext(i);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);