use crate::curve::{ScalarCfg, ScalarField};
use icicle_core::{
    impl_vec_ops_field,
    vec_ops::{/*BitReverseConfig,*/ VecOps, VecOpsConfig},
};
use icicle_runtime::{errors::eIcicleError, memory::HostOrDeviceSlice};

use icicle_core::traits::FieldImpl;
use icicle_core::symbol::SymbolTrait;
use icicle_core::program::ProgramBaseTrait;

impl_vec_ops_field!("bn254", bn254, ScalarField, ScalarCfg);
#[cfg(test)]
pub(crate) mod tests {
    use crate::curve::ScalarField;
    use icicle_core::impl_vec_ops_tests;
    use icicle_core::vec_ops::tests::*;

    impl_vec_ops_tests!(bn254, ScalarField);
}
