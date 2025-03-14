pub mod fri_proof;
pub mod fri_transcript_config;
pub mod tests;
use crate::{hash::Hasher, traits::FieldImpl};
use fri_proof::FriProofTrait;
use fri_transcript_config::{FriTranscriptConfig, FriTranscriptConfigTrait};
use icicle_runtime::{config::ConfigExtension, eIcicleError, memory::HostOrDeviceSlice, IcicleStreamHandle};

pub type FriProof<'a, F> = <<F as FieldImpl>::Config as FriImpl<'a, F>>::FriProof;

type FriTryFromError<'a, F> = <<<F as FieldImpl>::Config as FriImpl<'a, F>>::FriTranscriptConfigFFI as TryFrom<
    &'a FriTranscriptConfig<'a, F>,
>>::Error;

pub fn fri<'a, F: FieldImpl + 'a>(
    config: &FriConfig,
    fri_transcript_config: &'a FriTranscriptConfig<F>,
    input_data: &(impl HostOrDeviceSlice<F> + ?Sized),
    merkle_tree_leaves_hash: &Hasher,
    merkle_tree_compress_hash: &Hasher,
    output_store_min_layer: u64,
    fri_proof: &mut FriProof<'a, F>,
) -> Result<(), eIcicleError>
where
    <F as FieldImpl>::Config: FriImpl<'a, F>,
    eIcicleError: From<FriTryFromError<'a, F>>,
{
    let ffi_transcript_config = <F::Config as FriImpl<'a, F>>::FriTranscriptConfigFFI::try_from(fri_transcript_config)?;
    <F::Config as FriImpl<F>>::get_fri_proof_mt(
        config,
        &ffi_transcript_config,
        input_data,
        merkle_tree_leaves_hash,
        merkle_tree_compress_hash,
        output_store_min_layer,
        fri_proof,
    )
}

pub fn verify_fri<'a, F: FieldImpl + 'a>(
    config: &FriConfig,
    fri_transcript_config: &'a FriTranscriptConfig<F>,
    fri_proof: &FriProof<'a, F>,
    merkle_tree_leaves_hash: &Hasher,
    merkle_tree_compress_hash: &Hasher,
    output_store_min_layer: u64,
) -> Result<bool, eIcicleError>
where
    <F as FieldImpl>::Config: FriImpl<'a, F>,
    eIcicleError: From<FriTryFromError<'a, F>>,
{
    let ffi_transcript_config = <F::Config as FriImpl<'a, F>>::FriTranscriptConfigFFI::try_from(fri_transcript_config)?;
    <F::Config as FriImpl<F>>::verify_fri_mt(
        config,
        &ffi_transcript_config,
        fri_proof,
        merkle_tree_leaves_hash,
        merkle_tree_compress_hash,
        output_store_min_layer,
    )
}

#[repr(C)]
#[derive(Clone)]
pub struct FriConfig {
    pub stream_handle: IcicleStreamHandle, // Stream for asynchronous execution. Default is nullptr.
    pub folding_factor: u64,               // The factor by which the codeword is folded in each round.
    pub stopping_degree: u64,              // The minimal polynomial degree at which folding stops.
    pub pow_bits: u64,                     // Number of leading zeros required for proof-of-work. Default is 0.
    pub nof_queries: u64,                  // Number of queries, computed for each folded layer of FRI. Default is 1.
    are_inputs_on_device: bool, // True if inputs reside on the device (e.g., GPU), false if on the host (CPU). Default is false.
    pub is_async: bool,         // True to run operations asynchronously, false to run synchronously. Default is false.
    pub ext: ConfigExtension,   // Pointer to backend-specific configuration extensions. Default is nullptr.
}

impl Default for FriConfig {
    /// Create a default configuration (same as the C++ struct's defaults)
    fn default() -> Self {
        Self {
            stream_handle: std::ptr::null_mut(),
            folding_factor: 2,
            stopping_degree: 0,
            pow_bits: 16,
            nof_queries: 100,
            are_inputs_on_device: false,
            is_async: false,
            ext: ConfigExtension::new(),
        }
    }
}

pub trait FriImpl<'a, F: FieldImpl + 'a> {
    type FriTranscriptConfigFFI: FriTranscriptConfigTrait<'a, F>;
    type FriProof: FriProofTrait<F>;
    fn get_fri_proof_mt(
        config: &FriConfig,
        fri_transcript_config: &Self::FriTranscriptConfigFFI,
        input_data: &(impl HostOrDeviceSlice<F> + ?Sized),
        merkle_tree_leaves_hash: &Hasher,
        merkle_tree_compress_hash: &Hasher,
        output_store_min_layer: u64,
        fri_proof: &mut Self::FriProof,
    ) -> Result<(), eIcicleError>;

    fn verify_fri_mt(
        config: &FriConfig,
        fri_transcript_config: &Self::FriTranscriptConfigFFI,
        fri_proof: &Self::FriProof,
        merkle_tree_leaves_hash: &Hasher,
        merkle_tree_compress_hash: &Hasher,
        output_store_min_layer: u64,
    ) -> Result<bool, eIcicleError>;
}

#[macro_export]
macro_rules! impl_fri {
    (
        $field_prefix:literal,
        $field_prefix_ident:ident,
        $field:ident,
        $field_config:ident
    ) => {
        mod $field_prefix_ident {
            use super::{$field, $field_config};
            use icicle_core::{
                fri::{fri_transcript_config::FriTranscriptConfigTrait, FriConfig, FriImpl},
                hash::{Hasher, HasherHandle},
                traits::FieldImpl,
                {impl_fri_proof, impl_fri_transcript_config},
            };
            use icicle_runtime::{eIcicleError, memory::HostOrDeviceSlice};

            impl_fri_transcript_config!($field_prefix, $field, $field_config);
            impl_fri_proof!($field_prefix, $field, $field_config);

            extern "C" {
                #[link_name = concat!($field_prefix, "_get_fri_proof_mt")]
                fn icicle_get_fri_proof_mt(
                    fri_config: *const FriConfig,
                    fri_transcript_config: FriTranscriptConfigHandle,
                    input_data: *const $field,
                    input_size: u64,
                    merkle_tree_leaves_hash: HasherHandle,
                    merkle_tree_compress_hash: HasherHandle,
                    output_store_min_layer: u64,
                    fri_proof: FriProofHandle,
                ) -> eIcicleError;
                #[link_name = concat!($field_prefix, "_verify_fri_mt")]
                fn verify_fri_mt(
                    fri_config: *const FriConfig,
                    fri_transcript_config: FriTranscriptConfigHandle,
                    fri_proof: FriProofHandle,
                    merkle_tree_leaves_hash: HasherHandle,
                    merkle_tree_compress_hash: HasherHandle,
                    valid: *mut bool,
                ) -> eIcicleError;
            }
            impl FriImpl<'_, $field> for $field_config {
                type FriTranscriptConfigFFI = FriTranscriptConfigFFI;
                type FriProof = FriProof;
                fn get_fri_proof_mt(
                    config: &FriConfig,
                    fri_transcript_config: &FriTranscriptConfigFFI,
                    input_data: &(impl HostOrDeviceSlice<$field> + ?Sized),
                    merkle_tree_leaves_hash: &Hasher,
                    merkle_tree_compress_hash: &Hasher,
                    output_store_min_layer: u64,
                    fri_proof: &mut FriProof,
                ) -> Result<(), eIcicleError> {
                    unsafe {
                        icicle_get_fri_proof_mt(
                            config as *const FriConfig,
                            fri_transcript_config.handle,
                            input_data.as_ptr() as *const $field,
                            input_data.len() as u64,
                            merkle_tree_leaves_hash.handle,
                            merkle_tree_compress_hash.handle,
                            output_store_min_layer,
                            fri_proof.handle,
                        )
                        .wrap()
                    }
                }
                fn verify_fri_mt(
                    config: &FriConfig,
                    fri_transcript_config: &FriTranscriptConfigFFI,
                    fri_proof: &FriProof,
                    merkle_tree_leaves_hash: &Hasher,
                    merkle_tree_compress_hash: &Hasher,
                    output_store_min_layer: u64,
                ) -> Result<bool, eIcicleError> {
                    let mut valid: bool = false;
                    unsafe {
                        let err = verify_fri_mt(
                            config as *const FriConfig,
                            fri_transcript_config.handle,
                            fri_proof.handle,
                            merkle_tree_leaves_hash.handle,
                            merkle_tree_compress_hash.handle,
                            &mut valid as *mut bool,
                        );
                        err.wrap_value(valid)
                    }
                }
            }
        }
    };
}

#[macro_export]
macro_rules! impl_fri_tests {
    (
      $field_prefix_ident:ident,
      $ntt_field:ident,
      $field:ident,
      $hasher_new:expr
    ) => {
        mod $field_prefix_ident {
            use super::*;
            use icicle_core::fri::tests::check_fri;
            use icicle_runtime::test_utilities;
            use icicle_runtime::{device::Device, runtime};
            use icicle_core::ntt::tests::init_domain;
            use serial_test::parallel;
            use std::sync::Once;
            use icicle_core::fri::fri_transcript_config::FriTranscriptConfig;
            use icicle_core::hash::Hasher;
            

            const MAX_SIZE: u64 = 1 << 10;
            static INIT: Once = Once::new();
            const FAST_TWIDDLES_MODE: bool = false;

            pub fn initialize() {
                INIT.call_once(move || {
                    // test_utilities::test_load_and_init_devices();
                    // init domain for both devices
                    // test_utilities::test_set_ref_device();
                    init_domain::<$ntt_field>(MAX_SIZE, FAST_TWIDDLES_MODE);

                    // test_utilities::test_set_main_device();
                    // init_domain::<$ntt_field>(MAX_SIZE, FAST_TWIDDLES_MODE);
                });
                // test_utilities::test_set_main_device();
            }

            #[test]
            pub fn test_fri() {
                initialize();
                let merkle_tree_leaves_hash = $hasher_new(std::mem::size_of::<$field>() as u64).unwrap();
                let merkle_tree_compress_hash = $hasher_new(2 * merkle_tree_leaves_hash.output_size()).unwrap();
                let transcript_hash = $hasher_new(0).unwrap();
                let transcript_config = FriTranscriptConfig::new_default_labels(&transcript_hash, $field::one());

                check_fri::<$field>(
                    &merkle_tree_leaves_hash,
                    &merkle_tree_compress_hash,
                    &transcript_config,
                );
            }
        }
    };
}
