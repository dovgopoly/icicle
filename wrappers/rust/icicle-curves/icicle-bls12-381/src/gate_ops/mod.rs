use crate::curve::{ScalarCfg, ScalarField};
use icicle_core::{
    impl_gate_ops_field,
    gate_ops::{GateOps, GateOpsConfig, HornerData, CalculationData, GateData},
};
use icicle_runtime::{errors::eIcicleError, memory::HostOrDeviceSlice};

impl_gate_ops_field!("bls12_381", bls12_381, ScalarField, ScalarCfg);
#[cfg(test)]
pub(crate) mod tests {
    use crate::curve::ScalarField;
    use icicle_core::impl_gate_ops_tests;
    use icicle_core::gate_ops::tests::*;

    impl_gate_ops_tests!(ScalarField);
}
