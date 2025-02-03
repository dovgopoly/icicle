use crate::field::{QuarticExtensionField, ScalarField};
use icicle_core::error::IcicleResult;
use icicle_core::traits::IcicleResultWrap;
use icicle_cuda_runtime::device::check_device;
use icicle_cuda_runtime::device_context::{DeviceContext, DEFAULT_DEVICE_ID};
use icicle_cuda_runtime::error::CudaError;
use icicle_cuda_runtime::memory::HostOrDeviceSlice;

/// Struct that encodes FRI parameters.
#[repr(C)]
#[derive(Debug, Clone)]
pub struct FriConfig<'a> {
    /// Details related to the device such as its id and stream id. See [DeviceContext](@ref device_context::DeviceContext).
    pub ctx: DeviceContext<'a>,
    are_evals_on_device: bool,
    are_domain_elements_on_device: bool,
    are_results_on_device: bool,
    /// Whether to run the vector operations asynchronously. If set to `true`, the functions will be non-blocking and you'd need to synchronize
    /// it explicitly by running `stream.synchronize()`. If set to false, the functions will block the current CPU thread.
    pub is_async: bool,
}

impl<'a> Default for FriConfig<'a> {
    fn default() -> Self {
        Self::default_for_device(DEFAULT_DEVICE_ID)
    }
}

impl<'a> FriConfig<'a> {
    pub fn default_for_device(device_id: usize) -> Self {
        FriConfig {
            ctx: DeviceContext::default_for_device(device_id),
            are_evals_on_device: false,
            are_domain_elements_on_device: false,
            are_results_on_device: false,
            is_async: false,
        }
    }
}

fn check_fri_args<'a, S>(
    eval1: &(impl HostOrDeviceSlice<S> + ?Sized),
    eval2: &(impl HostOrDeviceSlice<S> + ?Sized),
    eval3: &(impl HostOrDeviceSlice<S> + ?Sized),
    eval4: &(impl HostOrDeviceSlice<S> + ?Sized),
    domain_elements: &(impl HostOrDeviceSlice<S> + ?Sized),
    folded_eval1: &(impl HostOrDeviceSlice<S> + ?Sized),
    folded_eval2: &(impl HostOrDeviceSlice<S> + ?Sized),
    folded_eval3: &(impl HostOrDeviceSlice<S> + ?Sized),
    folded_eval4: &(impl HostOrDeviceSlice<S> + ?Sized),
    cfg: &FriConfig<'a>,
) -> FriConfig<'a> {
    if !(eval1.len() == eval2.len() && eval2.len() == eval3.len() && eval3.len() == eval4.len()) {
        panic!(
            "Eval sizes are different; eval1: {}, eval2: {}, eval3: {}, eval4: {}",
            eval1.len(),
            eval2.len(),
            eval3.len(),
            eval4.len()
        );
    }
    if !(folded_eval1.len() == folded_eval2.len()
        && folded_eval2.len() == folded_eval3.len()
        && folded_eval3.len() == folded_eval4.len())
    {
        panic!(
            "Eval sizes are different; eval1: {}, eval2: {}, eval3: {}, eval4: {}",
            folded_eval1.len(),
            folded_eval2.len(),
            folded_eval3.len(),
            folded_eval4.len()
        );
    }
    if eval1.len() / 2 != domain_elements.len() {
        panic!(
            "Number of domain elements is not half of the evaluation's domain size; {} != {} / 2",
            eval1.len(),
            domain_elements.len()
        );
    }

    if eval1.len() / 2 != folded_eval1.len() {
        panic!(
            "Folded poly degree is not half of the evaluation poly's degree; {} != {} / 2",
            eval1.len(),
            folded_eval1.len()
        );
    }

    let ctx_device_id = cfg
        .ctx
        .device_id;

    if let Some(device_id) = eval1.device_id() {
        assert_eq!(device_id, ctx_device_id, "Device ids in eval and context are different");
    }
    if let Some(device_id) = domain_elements.device_id() {
        assert_eq!(
            device_id, ctx_device_id,
            "Device ids in domain_elements and context are different"
        );
    }
    if let Some(device_id) = folded_eval1.device_id() {
        assert_eq!(
            device_id, ctx_device_id,
            "Device ids in folded_eval and context are different"
        );
    }
    check_device(ctx_device_id);

    let mut res_cfg = cfg.clone();
    res_cfg.are_evals_on_device = eval1.is_on_device();
    res_cfg.are_domain_elements_on_device = domain_elements.is_on_device();
    res_cfg.are_results_on_device = folded_eval1.is_on_device();
    res_cfg
}

pub fn fold_line(
    eval1: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval2: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval3: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval4: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    domain_elements: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval1: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval2: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval3: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval4: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    alpha: QuarticExtensionField,
    cfg: &FriConfig,
) -> IcicleResult<()> {
    let cfg = check_fri_args(
        eval1,
        eval2,
        eval3,
        eval4,
        domain_elements,
        folded_eval1,
        folded_eval2,
        folded_eval3,
        folded_eval4,
        cfg,
    );
    unsafe {
        _fri::fold_line(
            eval1.as_ptr(),
            eval2.as_ptr(),
            eval3.as_ptr(),
            eval4.as_ptr(),
            domain_elements.as_ptr(),
            &alpha,
            folded_eval1.as_mut_ptr(),
            folded_eval2.as_mut_ptr(),
            folded_eval3.as_mut_ptr(),
            folded_eval4.as_mut_ptr(),
            eval1.len() as u64,
            &cfg as *const FriConfig,
        )
        .wrap()
    }
}

fn check_fri_args_new<'a, S>(
    eval1: &(impl HostOrDeviceSlice<S> + ?Sized),
    eval2: &(impl HostOrDeviceSlice<S> + ?Sized),
    eval3: &(impl HostOrDeviceSlice<S> + ?Sized),
    eval4: &(impl HostOrDeviceSlice<S> + ?Sized),
    log_size: u32,
    folded_eval1: &(impl HostOrDeviceSlice<S> + ?Sized),
    folded_eval2: &(impl HostOrDeviceSlice<S> + ?Sized),
    folded_eval3: &(impl HostOrDeviceSlice<S> + ?Sized),
    folded_eval4: &(impl HostOrDeviceSlice<S> + ?Sized),
    cfg: &FriConfig<'a>,
) -> FriConfig<'a> {
    if !(eval1.len() == eval2.len() && eval2.len() == eval3.len() && eval3.len() == eval4.len()) {
        panic!(
            "Eval sizes are different; eval1: {}, eval2: {}, eval3: {}, eval4: {}",
            eval1.len(),
            eval2.len(),
            eval3.len(),
            eval4.len()
        );
    }
    if !(folded_eval1.len() == folded_eval2.len()
        && folded_eval2.len() == folded_eval3.len()
        && folded_eval3.len() == folded_eval4.len())
    {
        panic!(
            "Eval sizes are different; eval1: {}, eval2: {}, eval3: {}, eval4: {}",
            folded_eval1.len(),
            folded_eval2.len(),
            folded_eval3.len(),
            folded_eval4.len()
        );
    }
    if eval1.len() != 1 << log_size {
        panic!(
            "Number of domain elements is not half of the evaluation's domain size; {} != {}",
            eval1.len(),
            1 << log_size
        );
    }

    if eval1.len() / 2 != folded_eval1.len() {
        panic!(
            "Folded poly degree is not half of the evaluation poly's degree; {} != {} / 2",
            eval1.len(),
            folded_eval1.len()
        );
    }

    let ctx_device_id = cfg
        .ctx
        .device_id;

    if let Some(device_id) = eval1.device_id() {
        assert_eq!(device_id, ctx_device_id, "Device ids in eval and context are different");
    }
    if let Some(device_id) = folded_eval1.device_id() {
        assert_eq!(
            device_id, ctx_device_id,
            "Device ids in folded_eval and context are different"
        );
    }
    check_device(ctx_device_id);

    let mut res_cfg = cfg.clone();
    res_cfg.are_evals_on_device = eval1.is_on_device();
    res_cfg.are_domain_elements_on_device = false;
    res_cfg.are_results_on_device = folded_eval1.is_on_device();
    res_cfg
}

pub fn fold_line_new(
    eval1: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval2: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval3: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval4: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    initial_index: u64,
    log_size: u32,
    folded_eval1: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval2: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval3: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval4: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    alpha: QuarticExtensionField,
    cfg: &FriConfig,
) -> IcicleResult<()> {
    let cfg = check_fri_args_new(
        eval1,
        eval2,
        eval3,
        eval4,
        log_size,
        folded_eval1,
        folded_eval2,
        folded_eval3,
        folded_eval4,
        cfg,
    );
    unsafe {
        _fri::fold_line_new(
            eval1.as_ptr(),
            eval2.as_ptr(),
            eval3.as_ptr(),
            eval4.as_ptr(),
            initial_index,
            log_size,
            &alpha,
            folded_eval1.as_mut_ptr(),
            folded_eval2.as_mut_ptr(),
            folded_eval3.as_mut_ptr(),
            folded_eval4.as_mut_ptr(),
            eval1.len() as u64,
            &cfg as *const FriConfig,
        )
        .wrap()
    }
}

pub fn fold_circle_into_line(
    eval1: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval2: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval3: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval4: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    domain_elements: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval1: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval2: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval3: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval4: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    alpha: QuarticExtensionField,
    cfg: &FriConfig,
) -> IcicleResult<()> {
    let cfg = check_fri_args(
        eval1,
        eval2,
        eval3,
        eval4,
        domain_elements,
        folded_eval1,
        folded_eval2,
        folded_eval3,
        folded_eval4,
        cfg,
    );
    unsafe {
        _fri::fold_circle_into_line(
            eval1.as_ptr(),
            eval2.as_ptr(),
            eval3.as_ptr(),
            eval4.as_ptr(),
            domain_elements.as_ptr(),
            &alpha,
            folded_eval1.as_mut_ptr(),
            folded_eval2.as_mut_ptr(),
            folded_eval3.as_mut_ptr(),
            folded_eval4.as_mut_ptr(),
            eval1.len() as u64,
            &cfg as *const FriConfig,
        )
        .wrap()
    }
}

pub fn fold_circle_into_line_new(
    eval1: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval2: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval3: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    eval4: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    initial_index: u64,
    half_coset_log_size: u32,
    folded_eval1: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval2: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval3: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    folded_eval4: &mut (impl HostOrDeviceSlice<ScalarField> + ?Sized),
    alpha: QuarticExtensionField,
    cfg: &FriConfig,
) -> IcicleResult<()> {
    let cfg = check_fri_args_new(
        eval1,
        eval2,
        eval3,
        eval4,
        half_coset_log_size + 1,
        folded_eval1,
        folded_eval2,
        folded_eval3,
        folded_eval4,
        cfg,
    );
    unsafe {
        _fri::fold_circle_into_line_new(
            eval1.as_ptr(),
            eval2.as_ptr(),
            eval3.as_ptr(),
            eval4.as_ptr(),
            initial_index,
            half_coset_log_size,
            &alpha,
            folded_eval1.as_mut_ptr(),
            folded_eval2.as_mut_ptr(),
            folded_eval3.as_mut_ptr(),
            folded_eval4.as_mut_ptr(),
            eval1.len() as u64,
            &cfg as *const FriConfig,
        )
        .wrap()
    }
}

pub fn precompute_fri_twiddles(log_size: u32) -> IcicleResult<()> {
    unsafe { _fri::precompute_fri_twiddles(log_size).wrap() }
}

pub fn preload_trace(sub_trace: &(impl HostOrDeviceSlice<ScalarField> + ?Sized)) -> IcicleResult<()> {
    unsafe { _fri::preload_trace(sub_trace.as_ptr(), sub_trace.len() as _).wrap() }
}

// use std::ptr;
// use std::os::raw::c_uint;
// use std::ffi::c_void;

// #[repr(C)]
// pub struct SubTrace {
//     trace: *mut ScalarField,
//     n_cols: c_uint,
//     n_rows: c_uint,
// }

// #[repr(C)]
// pub struct ComponentCtx {
//     domain_log_size: c_uint,
//     eval_log_size: c_uint,
//     preprocessing_trace: SubTrace,
//     execution_trace: SubTrace,
//     interaction_trace: SubTrace,
// }

// #[repr(C)]
// pub struct ProverCtx {
//     total_constraints: c_uint,
//     random_coeff_powers: *mut QuarticExtensionField,
//     composition_poly: *mut QuarticExtensionField,
// }

pub fn compute_polynomial(
    total_constraints: u32,
    eval_log_size: u32,
    domain_log_size: u32,
    trace_rows_dimension: u32,
    trace_cols_dimension: u32,
    denominators: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    random_coeffs: &(impl HostOrDeviceSlice<QuarticExtensionField> + ?Sized),
    execution_trace: &(impl HostOrDeviceSlice<ScalarField> + ?Sized),
    composition_poly_result: &mut (impl HostOrDeviceSlice<QuarticExtensionField> + ?Sized),

) -> IcicleResult<()> {
    unsafe {
        _fri::compute_composition_polynomial(
            total_constraints,
            eval_log_size,
            domain_log_size,
            trace_rows_dimension,
            trace_cols_dimension,
            denominators.as_ptr(),
            random_coeffs.as_ptr(),
            execution_trace.as_ptr(),
            composition_poly_result.as_mut_ptr()
        ).wrap()
    }
}

mod _fri {
    use super::{CudaError, FriConfig, QuarticExtensionField, ScalarField};

    extern "C" {
        #[link_name = "m31_fold_line"]
        pub(crate) fn fold_line(
            line_eval1: *const ScalarField,
            line_eval2: *const ScalarField,
            line_eval3: *const ScalarField,
            line_eval4: *const ScalarField,
            domain_elements: *const ScalarField,
            alpha: &QuarticExtensionField,
            folded_eval1: *mut ScalarField,
            folded_eval2: *mut ScalarField,
            folded_eval3: *mut ScalarField,
            folded_eval4: *mut ScalarField,
            n: u64,
            cfg: *const FriConfig,
        ) -> CudaError;

        #[link_name = "m31_fold_circle_into_line"]
        pub(crate) fn fold_circle_into_line(
            circle_eval1: *const ScalarField,
            circle_eval2: *const ScalarField,
            circle_eval3: *const ScalarField,
            circle_eval4: *const ScalarField,
            domain_elements: *const ScalarField,
            alpha: &QuarticExtensionField,
            folded_line_eval1: *mut ScalarField,
            folded_line_eval2: *mut ScalarField,
            folded_line_eval3: *mut ScalarField,
            folded_line_eval4: *mut ScalarField,
            n: u64,
            cfg: *const FriConfig,
        ) -> CudaError;

        #[link_name = "m31_fold_line_new"]
        pub(crate) fn fold_line_new(
            line_eval1: *const ScalarField,
            line_eval2: *const ScalarField,
            line_eval3: *const ScalarField,
            line_eval4: *const ScalarField,
            initial_index: u64,
            log_size: u32,
            alpha: &QuarticExtensionField,
            folded_eval1: *mut ScalarField,
            folded_eval2: *mut ScalarField,
            folded_eval3: *mut ScalarField,
            folded_eval4: *mut ScalarField,
            n: u64,
            cfg: *const FriConfig,
        ) -> CudaError;

        #[link_name = "m31_fold_circle_into_line_new"]
        pub(crate) fn fold_circle_into_line_new(
            circle_eval1: *const ScalarField,
            circle_eval2: *const ScalarField,
            circle_eval3: *const ScalarField,
            circle_eval4: *const ScalarField,
            initial_index: u64,
            log_size: u32,
            alpha: &QuarticExtensionField,
            folded_line_eval1: *mut ScalarField,
            folded_line_eval2: *mut ScalarField,
            folded_line_eval3: *mut ScalarField,
            folded_line_eval4: *mut ScalarField,
            n: u64,
            cfg: *const FriConfig,
        ) -> CudaError;

        #[link_name = "m31_precompute_fri_twiddles"]
        pub(crate) fn precompute_fri_twiddles(log_size: u32) -> CudaError;

        #[link_name = "m31_preload_trace"]
        pub(crate) fn preload_trace(sub_trace: *const ScalarField, size: u64) -> CudaError;

        #[link_name = "m31_compute_composition_polynomial"]
        pub(crate) fn compute_composition_polynomial(
            total_constraints: u32,
            eval_log_size: u32,
            domain_log_size: u32,
            trace_rows_dimension: u32,
            trace_cols_dimension: u32,
            denominators: *const ScalarField,
            random_coeffs: *const QuarticExtensionField,
            execution_trace: *const ScalarField,
            composition_poly_result: *mut QuarticExtensionField,
        )-> CudaError;
    }
}

#[cfg(test)]
pub(crate) mod tests {
    use super::*;
    use crate::field::{QuarticExtensionField, ScalarField};
    use icicle_core::traits::FieldImpl;
    use icicle_cuda_runtime::memory::{DeviceVec, HostSlice};
    use std::iter::zip;

    #[test]
    #[ignore = "update for domain inverse removed from kernel"]
    fn test_fold_line() {
        // All hardcoded values were generated with https://github.com/starkware-libs/stwo/blob/f976890/crates/prover/src/core/fri.rs#L1005-L1037
        const DEGREE: usize = 8;

        // Set evals
        let evals_raw: [u32; DEGREE] = [
            1358331652, 807347720, 543926930, 1585623140, 1753377641, 616790922, 630401694, 1294134897,
        ];
        let evals_as_ext = evals_raw
            .into_iter()
            .map(|val: u32| QuarticExtensionField::from_u32(val))
            .collect::<Vec<QuarticExtensionField>>();
        let mut evals_as_coords1 = Vec::new();
        let mut evals_as_coords2 = Vec::new();
        let mut evals_as_coords3 = Vec::new();
        let mut evals_as_coords4 = Vec::new();

        for f in evals_as_ext {
            evals_as_coords1.push(ScalarField::from_u32(f.limbs[0]));
            evals_as_coords2.push(ScalarField::from_u32(f.limbs[1]));
            evals_as_coords3.push(ScalarField::from_u32(f.limbs[2]));
            evals_as_coords4.push(ScalarField::from_u32(f.limbs[3]));
        }

        let eval1 = HostSlice::from_slice(evals_as_coords1.as_slice());
        let eval2 = HostSlice::from_slice(evals_as_coords2.as_slice());
        let eval3 = HostSlice::from_slice(evals_as_coords3.as_slice());
        let eval4 = HostSlice::from_slice(evals_as_coords4.as_slice());
        let mut d_eval1 = DeviceVec::<ScalarField>::cuda_malloc(DEGREE).unwrap();
        let mut d_eval2 = DeviceVec::<ScalarField>::cuda_malloc(DEGREE).unwrap();
        let mut d_eval3 = DeviceVec::<ScalarField>::cuda_malloc(DEGREE).unwrap();
        let mut d_eval4 = DeviceVec::<ScalarField>::cuda_malloc(DEGREE).unwrap();
        d_eval1
            .copy_from_host(eval1)
            .unwrap();
        d_eval2
            .copy_from_host(eval2)
            .unwrap();
        d_eval3
            .copy_from_host(eval3)
            .unwrap();
        d_eval4
            .copy_from_host(eval4)
            .unwrap();

        // Set domain
        let domain_raw: [u32; DEGREE / 2] = [1179735656, 1241207368, 1415090252, 2112881577];
        let domain_as_scalar = domain_raw
            .into_iter()
            .map(|val: u32| ScalarField::from_u32(val))
            .collect::<Vec<ScalarField>>();
        let domain_elements = HostSlice::from_slice(domain_as_scalar.as_slice());
        let mut d_domain_elements = DeviceVec::<ScalarField>::cuda_malloc(DEGREE / 2).unwrap();
        d_domain_elements
            .copy_from_host(domain_elements)
            .unwrap();

        // Alloc folded_evals
        let mut folded_eval_raw1 = vec![ScalarField::zero(); DEGREE / 2];
        let mut folded_eval_raw2 = vec![ScalarField::zero(); DEGREE / 2];
        let mut folded_eval_raw3 = vec![ScalarField::zero(); DEGREE / 2];
        let mut folded_eval_raw4 = vec![ScalarField::zero(); DEGREE / 2];
        let folded_eval1 = HostSlice::from_mut_slice(folded_eval_raw1.as_mut_slice());
        let folded_eval2 = HostSlice::from_mut_slice(folded_eval_raw2.as_mut_slice());
        let folded_eval3 = HostSlice::from_mut_slice(folded_eval_raw3.as_mut_slice());
        let folded_eval4 = HostSlice::from_mut_slice(folded_eval_raw4.as_mut_slice());
        // let mut d_folded_eval1 = DeviceVec::<ScalarField>::cuda_malloc(DEGREE / 2).unwrap();
        // let mut d_folded_eval2 = DeviceVec::<ScalarField>::cuda_malloc(DEGREE / 2).unwrap();
        // let mut d_folded_eval3 = DeviceVec::<ScalarField>::cuda_malloc(DEGREE / 2).unwrap();
        // let mut d_folded_eval4 = DeviceVec::<ScalarField>::cuda_malloc(DEGREE / 2).unwrap();

        let alpha = QuarticExtensionField::from_u32(19283);
        let cfg = FriConfig::default();

        let res = fold_line(
            &d_eval1[..],
            &d_eval2[..],
            &d_eval3[..],
            &d_eval4[..],
            &d_domain_elements[..],
            &mut folded_eval1[..],
            &mut folded_eval2[..],
            &mut folded_eval3[..],
            &mut folded_eval4[..],
            alpha,
            &cfg,
        );

        assert!(res.is_ok());

        let expected_folded_evals_raw: [u32; DEGREE / 2] = [547848116, 1352534073, 2053322292, 341725613];
        let expected_folded_evals_extension_coord_real = expected_folded_evals_raw
            .into_iter()
            .map(|val: u32| ScalarField::from_u32(val))
            .collect::<Vec<ScalarField>>();
        let expected_folded_evals = expected_folded_evals_extension_coord_real.as_slice();

        // d_folded_eval1
        //     .copy_to_host(folded_eval1)
        //     .unwrap();
        // d_folded_eval2
        //     .copy_to_host(folded_eval2)
        //     .unwrap();
        // d_folded_eval3
        //     .copy_to_host(folded_eval3)
        //     .unwrap();
        // d_folded_eval4
        //     .copy_to_host(folded_eval4)
        //     .unwrap();

        for (i, (folded_eval_val, expected_folded_eval_val)) in
            zip(folded_eval1.as_slice(), expected_folded_evals).enumerate()
        {
            assert_eq!(
                folded_eval_val, expected_folded_eval_val,
                "Mismatch of folded eval at {i}"
            );
        }
    }

    // #[test]
    // #[ignore = "update for domain inverse removed from kernel"]
    // fn test_fold_circle_to_line() {
    //     // All hardcoded values were generated with https://github.com/starkware-libs/stwo/blob/f976890/crates/prover/src/core/fri.rs#L1040-L1053
    //     const DEGREE: usize = 64;
    //     let circle_eval_raw: [u32; DEGREE] = [
    //         466407290, 127986842, 1870304883, 875137047, 1381744584, 1242514872, 1657247602, 1816542136, 18610701,
    //         183082621, 1291388290, 1665658712, 1768829380, 872721779, 1113994239, 827698214, 57598558, 1809783851,
    //         1582268514, 1018797774, 1927599636, 619773471, 802072749, 2111764399, 714973298, 532899888, 671071637,
    //         536208302, 1268828963, 255940280, 586928868, 535875357, 1650651309, 1473550629, 1387441966, 893930940,
    //         126593346, 1263510627, 18204497, 211871416, 604224095, 465540164, 1007455733, 755529771, 2130798047,
    //         871433949, 1073797249, 1097851807, 369407795, 302384846, 1904956607, 1168797665, 352925744, 10934213,
    //         409562797, 1646664722, 676414749, 35135895, 2606032, 2121020146, 1205801045, 1079025338, 2111544534,
    //         1635203417,
    //     ];
    //     let circle_eval_as_extension = circle_eval_raw
    //         .into_iter()
    //         .map(|val: u32| QuarticExtensionField::from_u32(val))
    //         .collect::<Vec<QuarticExtensionField>>();
    //     let circle_eval = HostSlice::from_slice(circle_eval_as_extension.as_slice());
    //     let mut d_circle_eval = DeviceVec::<QuarticExtensionField>::cuda_malloc(DEGREE).unwrap();
    //     d_circle_eval
    //         .copy_from_host(circle_eval)
    //         .unwrap();

    //     let domain_raw: [u32; DEGREE / 2] = [
    //         1774253895, 373229752, 1309288441, 838195206, 262191051, 1885292596, 408478793, 1739004854, 212443077,
    //         1935040570, 1941424532, 206059115, 883753057, 1263730590, 350742286, 1796741361, 404685994, 1742797653,
    //         7144319, 2140339328, 68458636, 2079025011, 2137679949, 9803698, 228509164, 1918974483, 2132953617,
    //         14530030, 134155457, 2013328190, 1108537731, 1038945916,
    //     ];
    //     let domain_as_scalar = domain_raw
    //         .into_iter()
    //         .map(|val: u32| ScalarField::from_u32(val))
    //         .collect::<Vec<ScalarField>>();
    //     let domain_elements = HostSlice::from_slice(domain_as_scalar.as_slice());
    //     let mut d_domain_elements = DeviceVec::<ScalarField>::cuda_malloc(DEGREE / 2).unwrap();
    //     d_domain_elements
    //         .copy_from_host(domain_elements)
    //         .unwrap();

    //     let mut folded_eval_raw = vec![QuarticExtensionField::zero(); DEGREE / 2];
    //     let folded_eval = HostSlice::from_mut_slice(folded_eval_raw.as_mut_slice());
    //     let mut d_folded_eval = DeviceVec::<QuarticExtensionField>::cuda_malloc(DEGREE / 2).unwrap();

    //     let alpha = QuarticExtensionField::one();
    //     let cfg = FriConfig::default();

    //     let res = fold_circle_into_line(
    //         &d_circle_eval[..],
    //         &d_domain_elements[..],
    //         &mut d_folded_eval[..],
    //         alpha,
    //         &cfg,
    //     );

    //     assert!(res.is_ok());

    //     let expected_folded_evals_raw: [u32; DEGREE / 2] = [
    //         1188788264, 1195916566, 953551618, 505128535, 403386644, 1619126710, 988135024, 1735901259, 1587281171,
    //         907165282, 799778920, 1532707002, 348262725, 267076231, 902054839, 98124803, 1953436582, 267778518,
    //         632724299, 460151826, 2139528518, 1378487361, 1709496698, 48330818, 1343585282, 1852541250, 727719914,
    //         1964971391, 1423101288, 2099768709, 274685472, 1051044961,
    //     ];
    //     let expected_folded_evals_extension = expected_folded_evals_raw
    //         .into_iter()
    //         .map(|val: u32| QuarticExtensionField::from_u32(val))
    //         .collect::<Vec<QuarticExtensionField>>();
    //     let expected_folded_evals = expected_folded_evals_extension.as_slice();

    //     d_folded_eval
    //         .copy_to_host(folded_eval)
    //         .unwrap();

    //     for (i, (folded_eval_val, expected_folded_eval_val)) in
    //         zip(folded_eval.as_slice(), expected_folded_evals).enumerate()
    //     {
    //         assert_eq!(
    //             folded_eval_val, expected_folded_eval_val,
    //             "Mismatch of folded eval at {i}"
    //         );
    //     }
    // }
}
