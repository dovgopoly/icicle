#![allow(unused_imports)]
use crate::traits::GenerateRandom;
use crate::vec_ops::{
    accumulate_scalars, add_scalars, bit_reverse, bit_reverse_inplace, div_scalars, inv_scalars, mixed_mul_scalars, mul_scalars,
    product_scalars, scalar_add, scalar_mul, scalar_sub, slice, sub_scalars, sum_scalars, transpose_matrix, FieldImpl,
    MixedVecOps, VecOps, VecOpsConfig,
};
use icicle_runtime::device::Device;
use icicle_runtime::memory::{DeviceVec, HostSlice};
use icicle_runtime::{runtime, stream::IcicleStream, test_utilities};

#[test]
fn test_vec_ops_config() {
    let mut vec_ops_config = VecOpsConfig::default();
    vec_ops_config
        .ext
        .set_int("int_example", 5);

    assert_eq!(
        vec_ops_config
            .ext
            .get_int("int_example"),
        5
    );

    // just to test the stream can be set and used correctly
    let mut stream = IcicleStream::create().unwrap();
    vec_ops_config.stream_handle = *stream;

    stream
        .synchronize()
        .unwrap();
}

pub fn check_vec_ops_scalars<F: FieldImpl>()
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let test_size = 1 << 14;

    check_vec_ops_scalars_add::<F>(test_size);
    check_vec_ops_scalars_sub::<F>(test_size);
    check_vec_ops_scalars_mul::<F>(test_size);
    check_vec_ops_scalars_div::<F>(test_size);
    check_vec_ops_scalars_inv::<F>(test_size);
    check_vec_ops_scalars_sum::<F>(test_size);
    check_vec_ops_scalars_product::<F>(test_size);
    check_vec_ops_scalars_add_scalar::<F>(test_size);
    check_vec_ops_scalars_sub_scalar::<F>(test_size);
    check_vec_ops_scalars_mul_scalar::<F>(test_size);
    check_vec_ops_scalars_accumulate::<F>(test_size);
}

pub fn check_mixed_vec_ops_scalars<F: FieldImpl, T: FieldImpl>()
where
    <F as FieldImpl>::Config: MixedVecOps<F, T>,
    <T as FieldImpl>::Config: GenerateRandom<T>,
    <F as FieldImpl>::Config: GenerateRandom<F>,
{
    let test_size = 1 << 14;

    check_vec_ops_mixed_scalars_mul::<F, T>(test_size);
}

pub fn check_vec_ops_scalars_add<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let a_main = F::Config::generate_random(test_size);
    let b = F::Config::generate_random(test_size);
    let mut result_main = vec![F::zero(); test_size];
    let mut result_ref = vec![F::zero(); test_size];

    let a_main = HostSlice::from_slice(&a_main);
    let b = HostSlice::from_slice(&b);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    let cfg = VecOpsConfig::default();

    test_utilities::test_set_main_device();
    add_scalars(a_main, b, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    add_scalars(a_main, b, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}

pub fn check_vec_ops_scalars_sub<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let a_main = F::Config::generate_random(test_size);
    let b = F::Config::generate_random(test_size);
    let mut result_main = vec![F::zero(); test_size];
    let mut result_ref = vec![F::zero(); test_size];

    let a_main = HostSlice::from_slice(&a_main);
    let b = HostSlice::from_slice(&b);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    let cfg = VecOpsConfig::default();

    test_utilities::test_set_main_device();
    sub_scalars(a_main, b, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    sub_scalars(a_main, b, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}

pub fn check_vec_ops_scalars_mul<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let a_main = F::Config::generate_random(test_size);
    let b = F::Config::generate_random(test_size);
    let mut result_main = vec![F::zero(); test_size];
    let mut result_ref = vec![F::zero(); test_size];

    let a_main = HostSlice::from_slice(&a_main);
    let b = HostSlice::from_slice(&b);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    let cfg = VecOpsConfig::default();

    test_utilities::test_set_main_device();
    mul_scalars(a_main, b, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    mul_scalars(a_main, b, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}

pub fn check_vec_ops_scalars_div<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let a_main = F::Config::generate_random(test_size);
    let b = F::Config::generate_random(test_size);
    let mut result_main = vec![F::zero(); test_size];
    let mut result_ref = vec![F::zero(); test_size];

    let a_main = HostSlice::from_slice(&a_main);
    let b = HostSlice::from_slice(&b);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    let cfg = VecOpsConfig::default();

    test_utilities::test_set_main_device();
    div_scalars(a_main, b, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    div_scalars(a_main, b, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}

pub fn check_vec_ops_scalars_inv<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let cfg = VecOpsConfig::default();

    let a = F::Config::generate_random(test_size);
    let mut inv = vec![F::zero(); test_size];
    let mut result_main = vec![F::zero(); test_size];
    let mut result_ref = vec![F::one(); test_size];
    let mut result = vec![F::one(); test_size];

    let a = HostSlice::from_slice(&a);
    let inv = HostSlice::from_mut_slice(&mut inv);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);
    let result = HostSlice::from_mut_slice(&mut result);

    test_utilities::test_set_main_device();
    inv_scalars(a, inv, &cfg).unwrap();
    mul_scalars(a, inv, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    inv_scalars(a, inv, &cfg).unwrap();
    mul_scalars(a, inv, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result.as_slice());
    assert_eq!(result_ref.as_slice(), result.as_slice());
}

pub fn check_vec_ops_scalars_sum<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let cfg = VecOpsConfig::default();
    let batch_size = 3;

    let a_main = F::Config::generate_random(test_size * batch_size);
    let mut result_main = vec![F::zero(); batch_size];
    let mut result_ref = vec![F::zero(); batch_size];

    let a_main = HostSlice::from_slice(&a_main);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    test_utilities::test_set_main_device();
    sum_scalars(a_main, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    sum_scalars(a_main, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}

pub fn check_vec_ops_scalars_product<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let cfg = VecOpsConfig::default();
    let batch_size = 3;

    let a_main = F::Config::generate_random(test_size * batch_size);
    let mut result_main = vec![F::zero(); batch_size];
    let mut result_ref = vec![F::zero(); batch_size];

    let a_main = HostSlice::from_slice(&a_main);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    test_utilities::test_set_main_device();
    product_scalars(a_main, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    product_scalars(a_main, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}

pub fn check_vec_ops_scalars_add_scalar<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let mut cfg = VecOpsConfig::default();
    cfg.batch_size = 3;

    let a_main = F::Config::generate_random(cfg.batch_size as usize);
    let b = F::Config::generate_random(test_size * cfg.batch_size as usize);
    let mut result_main = vec![F::zero(); test_size * cfg.batch_size as usize];
    let mut result_ref = vec![F::zero(); test_size * cfg.batch_size as usize];

    let a_main = HostSlice::from_slice(&a_main);
    let b = HostSlice::from_slice(&b);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    test_utilities::test_set_main_device();
    scalar_add(a_main, b, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    scalar_add(a_main, b, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}

pub fn check_vec_ops_scalars_sub_scalar<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let cfg = VecOpsConfig::default();
    let batch_size = 3;

    let a_main = F::Config::generate_random(batch_size);
    let b = F::Config::generate_random(test_size * batch_size);
    let mut result_main = vec![F::zero(); test_size * batch_size];
    let mut result_ref = vec![F::zero(); test_size * batch_size];

    let a_main = HostSlice::from_slice(&a_main);
    let b = HostSlice::from_slice(&b);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    test_utilities::test_set_main_device();
    scalar_sub(a_main, b, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    scalar_sub(a_main, b, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}

pub fn check_vec_ops_scalars_mul_scalar<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let cfg = VecOpsConfig::default();
    let batch_size = 3;

    let a_main = F::Config::generate_random(batch_size);
    let b = F::Config::generate_random(test_size * batch_size);
    let mut result_main = vec![F::zero(); test_size * batch_size];
    let mut result_ref = vec![F::zero(); test_size * batch_size];

    let a_main = HostSlice::from_slice(&a_main);
    let b = HostSlice::from_slice(&b);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    test_utilities::test_set_main_device();
    scalar_mul(a_main, b, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    scalar_mul(a_main, b, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}

pub fn check_vec_ops_scalars_accumulate<F: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let mut a_main = F::Config::generate_random(test_size);
    let b = F::Config::generate_random(test_size);

    let mut a_clone = a_main.clone();

    let a_main_slice = HostSlice::from_mut_slice(&mut a_main);
    let b_slice = HostSlice::from_slice(&b);
    let a_clone_slice = HostSlice::from_mut_slice(&mut a_clone);

    let cfg = VecOpsConfig::default();

    test_utilities::test_set_main_device();
    accumulate_scalars(a_main_slice, b_slice, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    accumulate_scalars(a_clone_slice, b_slice, &cfg).unwrap();

    assert_eq!(a_clone_slice.as_slice(), a_main_slice.as_slice());
}

pub fn check_matrix_transpose<F: FieldImpl>()
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let cfg = VecOpsConfig::default();
    let batch_size = 3;

    let (r, c): (u32, u32) = (1u32 << 10, 1u32 << 4);
    let test_size = (r * c * batch_size) as usize;

    let input_matrix = F::Config::generate_random(test_size);
    let mut result_main = vec![F::zero(); test_size];
    let mut result_ref = vec![F::zero(); test_size];

    test_utilities::test_set_main_device();
    transpose_matrix(
        HostSlice::from_slice(&input_matrix),
        r,
        c,
        HostSlice::from_mut_slice(&mut result_main),
        &cfg,
    )
    .unwrap();

    test_utilities::test_set_ref_device();
    transpose_matrix(
        HostSlice::from_slice(&input_matrix),
        r,
        c,
        HostSlice::from_mut_slice(&mut result_ref),
        &cfg,
    )
    .unwrap();

    assert_eq!(result_main, result_ref);
}

pub fn check_slice<F: FieldImpl>()
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    let cfg = VecOpsConfig::default();
    let batch_size = 3;

    let size_in: u64 = 1 << 10;
    let offset: u64 = 10;
    let stride: u64 = 3;
    let size_out: u64 = ((size_in - offset) / stride) - 1;

    let input_matrix = F::Config::generate_random(size_in as usize * batch_size);
    let mut result_main = vec![F::zero(); size_out as usize * batch_size];
    let mut result_ref = vec![F::zero(); size_out as usize * batch_size];

    test_utilities::test_set_main_device();
    slice(
        HostSlice::from_slice(&input_matrix),
        offset,
        stride,
        size_in,
        size_out,
        &cfg,
        HostSlice::from_mut_slice(&mut result_main),
    )
    .unwrap();

    test_utilities::test_set_ref_device();
    slice(
        HostSlice::from_slice(&input_matrix),
        offset,
        stride,
        size_in,
        size_out,
        &cfg,
        HostSlice::from_mut_slice(&mut result_ref),
    )
    .unwrap();

    assert_eq!(result_main, result_ref);
}

pub fn check_bit_reverse<F: FieldImpl>()
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    test_utilities::test_set_main_device();

    const LOG_SIZE: u32 = 20;
    const TEST_SIZE: usize = 1 << LOG_SIZE;
    let input_vec = F::Config::generate_random(TEST_SIZE);
    let input = HostSlice::from_slice(&input_vec);
    let mut intermediate = DeviceVec::<F>::device_malloc(TEST_SIZE).unwrap();
    let cfg = VecOpsConfig::default();
    bit_reverse(input, &cfg, &mut intermediate[..]).unwrap();

    let mut intermediate_host = vec![F::one(); TEST_SIZE];
    intermediate
        .copy_to_host(HostSlice::from_mut_slice(&mut intermediate_host[..]))
        .unwrap();
    let index_reverser = |i: usize| i.reverse_bits() >> (usize::BITS - LOG_SIZE);
    intermediate_host
        .iter()
        .enumerate()
        .for_each(|(i, val)| assert_eq!(val, &input_vec[index_reverser(i)]));

    let mut result = vec![F::one(); TEST_SIZE];
    let result = HostSlice::from_mut_slice(&mut result);
    let cfg = VecOpsConfig::default();
    bit_reverse(&intermediate[..], &cfg, result).unwrap();
    assert_eq!(input.as_slice(), result.as_slice());
}

pub fn check_bit_reverse_inplace<F: FieldImpl>()
where
    <F as FieldImpl>::Config: VecOps<F> + GenerateRandom<F>,
{
    test_utilities::test_set_main_device();

    const LOG_SIZE: u32 = 20;
    const TEST_SIZE: usize = 1 << LOG_SIZE;
    let input_vec = F::Config::generate_random(TEST_SIZE);
    let input = HostSlice::from_slice(&input_vec);
    let mut intermediate = DeviceVec::<F>::device_malloc(TEST_SIZE).unwrap();
    intermediate
        .copy_from_host(&input)
        .unwrap();
    let cfg = VecOpsConfig::default();
    bit_reverse_inplace(&mut intermediate[..], &cfg).unwrap();

    let mut intermediate_host = vec![F::one(); TEST_SIZE];
    intermediate
        .copy_to_host(HostSlice::from_mut_slice(&mut intermediate_host[..]))
        .unwrap();
    let index_reverser = |i: usize| i.reverse_bits() >> (usize::BITS - LOG_SIZE);
    intermediate_host
        .iter()
        .enumerate()
        .for_each(|(i, val)| assert_eq!(val, &input_vec[index_reverser(i)]));

    bit_reverse_inplace(&mut intermediate[..], &cfg).unwrap();
    let mut result_host = vec![F::one(); TEST_SIZE];
    intermediate
        .copy_to_host(HostSlice::from_mut_slice(&mut result_host[..]))
        .unwrap();
    assert_eq!(input.as_slice(), result_host.as_slice());
}

pub fn check_vec_ops_mixed_scalars_mul<F: FieldImpl, T: FieldImpl>(test_size: usize)
where
    <F as FieldImpl>::Config: MixedVecOps<F, T> + GenerateRandom<F>,
    <T as FieldImpl>::Config: GenerateRandom<T>,
{
    let a_main = F::Config::generate_random(test_size);
    let b = T::Config::generate_random(test_size);
    let mut result_main = vec![F::zero(); test_size];
    let mut result_ref = vec![F::zero(); test_size];

    let a_main = HostSlice::from_slice(&a_main);
    let b = HostSlice::from_slice(&b);
    let result_main = HostSlice::from_mut_slice(&mut result_main);
    let result_ref = HostSlice::from_mut_slice(&mut result_ref);

    let cfg = VecOpsConfig::default();

    test_utilities::test_set_main_device();
    mixed_mul_scalars(a_main, b, result_main, &cfg).unwrap();

    test_utilities::test_set_ref_device();
    mixed_mul_scalars(a_main, b, result_ref, &cfg).unwrap();

    assert_eq!(result_main.as_slice(), result_ref.as_slice());
}
