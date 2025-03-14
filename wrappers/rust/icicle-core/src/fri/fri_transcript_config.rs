use crate::hash::Hasher;
use crate::traits::FieldConfig;
use crate::traits::FieldImpl;
use crate::traits::Handle;
use icicle_runtime::eIcicleError;

const DEFAULT_DOMAIN_SEPARATOR_LABEL: &str = "domain_separator_label";
const DEFAULT_ROUND_CHALLENGE_LABEL: &str = "round_challenge_label";
const DEFAULT_COMMIT_PHASE_LABEL: &str = "commit_phase_label";
const DEFAULT_NONCE_LABEL: &str = "nonce_label";
const DEFAULT_PUBLIC_STATE: &[u8] = b"";

pub struct FriTranscriptConfig<'a, F: FieldImpl + 'a> {
    pub hash: &'a Hasher,
    pub domain_separator_label: String,
    pub round_challenge_label: String,
    pub commit_phase_label: String,
    pub nonce_label: String,
    pub public_state: Vec<u8>,
    pub seed_rng: F,
}

impl<'a, F: FieldImpl + 'a> FriTranscriptConfig<'a, F> {
    pub fn new(
        hash: &'a Hasher,
        domain_separator_label: &str,
        round_challenge_label: &str,
        commit_phase_label: &str,
        nonce_label: &str,
        public_state: &[u8],
        seed_rng: F,
    ) -> Self {
        Self {
            hash,
            domain_separator_label: domain_separator_label.to_string(),
            round_challenge_label: round_challenge_label.to_string(),
            commit_phase_label: commit_phase_label.to_string(),
            nonce_label: nonce_label.to_string(),
            public_state: public_state.to_vec(),
            seed_rng,
        }
    }

    pub fn new_default_labels(hash: &'a Hasher, seed_rng: F) -> Self {
        Self::new(
            hash,
            DEFAULT_DOMAIN_SEPARATOR_LABEL,
            DEFAULT_ROUND_CHALLENGE_LABEL,
            DEFAULT_COMMIT_PHASE_LABEL,
            DEFAULT_NONCE_LABEL,
            DEFAULT_PUBLIC_STATE,
            seed_rng,
        )
    }
}

pub trait FriTranscriptConfigTrait<'a, F: FieldImpl + 'a>:
    Sized + Default + Handle + TryFrom<&'a FriTranscriptConfig<'a, F>>
where
    Self::FieldConfig: FieldConfig,
{
    type FieldConfig;

    fn new(
        hasher: &'a Hasher,
        domain_separator_label: &str,
        round_challenge_label: &str,
        commit_phase_label: &str,
        nonce_label: &str,
        public_state: &[u8],
        seed_rng: &F,
    ) -> Result<Self, eIcicleError>; // TODO: add labels here

    fn default_wrapped() -> Result<Self, eIcicleError>;
}

#[macro_export]
macro_rules! impl_fri_transcript_config {
    (
        $field_prefix:literal,
        $field:ident,
        $field_config:ident
    ) => {
        use icicle_core::fri::fri_transcript_config::FriTranscriptConfig;
        use icicle_core::traits::Handle;
        use std::ffi::c_void;

        pub type FriTranscriptConfigHandle = *const c_void;

        extern "C" {
            #[link_name = concat!($field_prefix, "_create_default_fri_transcript_config")]
            fn icicle_create_default_fri_transcript_config() -> FriTranscriptConfigHandle;
            #[link_name = concat!($field_prefix, "_create_fri_transcript_config")]
            fn icicle_create_fri_transcript_config(
                hasher_handle: HasherHandle,
                domain_separator_label: *const u8,
                domain_separator_label_len: usize,
                round_challenge_label: *const u8,
                round_challenge_label_len: usize,
                commit_phase_label: *const u8,
                commit_phase_label_len: usize,
                nonce_label: *const u8,
                nonce_label_label: usize,
                public_state: *const u8,
                public_state_len: usize,
                seed_rng: *const $field,
            ) -> FriTranscriptConfigHandle;
            fn icicle_delete_fri_transcript_config(config_handle: FriTranscriptConfigHandle) -> eIcicleError;
        }

        pub struct FriTranscriptConfigFFI {
            handle: FriTranscriptConfigHandle,
        }

        impl FriTranscriptConfigTrait<'_, $field> for FriTranscriptConfigFFI {
            type FieldConfig = $field_config;

            fn new<'a>(
                hasher: &'a Hasher,
                domain_separator_label: &str,
                round_challenge_label: &str,
                commit_phase_label: &str,
                nonce_label: &str,
                public_state: &[u8],
                seed_rng: &$field,
            ) -> Result<Self, eIcicleError> {
                // TODO: add labels here
                let handle: FriTranscriptConfigHandle = unsafe {
                    icicle_create_fri_transcript_config(
                        hasher.handle,
                        domain_separator_label.as_ptr(),
                        domain_separator_label.len(),
                        round_challenge_label.as_ptr(),
                        round_challenge_label.len(),
                        commit_phase_label.as_ptr(),
                        commit_phase_label.len(),
                        nonce_label.as_ptr(),
                        nonce_label.len(),
                        public_state.as_ptr(),
                        public_state.len(),
                        seed_rng as *const $field,
                    )
                };
                if handle.is_null() {
                    return Err(eIcicleError::UnknownError);
                }
                Ok(Self { handle })
            }

            fn default_wrapped() -> Result<Self, eIcicleError> {
                let handle: FriTranscriptConfigHandle = unsafe { icicle_create_default_fri_transcript_config() };
                if handle.is_null() {
                    return Err(eIcicleError::UnknownError);
                }
                Ok(Self { handle })
            }
        }

        impl<'a> TryFrom<&'a FriTranscriptConfig<'_, $field>> for FriTranscriptConfigFFI {
            type Error = eIcicleError;
            fn try_from(config: &'a FriTranscriptConfig<$field>) -> Result<Self, Self::Error> {
                Self::new(
                    config.hash,
                    &config.domain_separator_label,
                    &config.round_challenge_label,
                    &config.commit_phase_label,
                    &config.nonce_label,
                    &config.public_state,
                    &config.seed_rng,
                )
            }
        }

        impl Handle for FriTranscriptConfigFFI {
            fn handle(&self) -> *const c_void {
                self.handle
            }
        }

        impl Default for FriTranscriptConfigFFI {
            fn default() -> Self {
                Self::default_wrapped().unwrap()
            }
        }

        impl Drop for FriTranscriptConfigFFI {
            fn drop(&mut self) {
                unsafe {
                    if !self
                        .handle
                        .is_null()
                    {
                        icicle_delete_fri_transcript_config(self.handle);
                    }
                }
            }
        }
    };
}
