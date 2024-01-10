use crate::curve::{ScalarCfg, ScalarField, BaseCfg, BaseField};

use icicle_core::error::IcicleResult;
use icicle_core::impl_ntt;
use icicle_core::ntt::{NTTConfig, NTTDir, NTT};
use icicle_core::traits::IcicleResultWrap;
use icicle_cuda_runtime::device_context::DeviceContext;
use icicle_cuda_runtime::error::CudaError;
use icicle_cuda_runtime::memory::HostOrDeviceSlice;

impl_ntt!("bls12_377", bls12_377, ScalarField, ScalarCfg);
#[cfg(feature = "base-field-ntt")]
impl_ntt!("bw6_761", bw6_761, BaseField, BaseCfg);

#[cfg(test)]
pub(crate) mod tests {
    use crate::curve::ScalarField;
    use icicle_core::impl_ntt_tests;
    use icicle_core::ntt::tests::*;
    use std::sync::OnceLock;

    impl_ntt_tests!(ScalarField);
}
