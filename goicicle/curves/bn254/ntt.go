// Copyright 2023 Ingonyama
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by Ingonyama DO NOT EDIT

package bn254

// #cgo CFLAGS: -I../../../icicle/curves//bn254/
// #cgo LDFLAGS: -L${SRCDIR}/../../ -lbn254
// #include "ntt.h"
import "C"
import (
	"unsafe"
)

const (
	NONE = 0
	DIF  = 1
	DIT  = 2
)

func NttBN254(scalars *[]ScalarField, isInverse bool, decimation int, deviceId int) uint64 {
	scalarsC := (*C.BN254_scalar_t)(unsafe.Pointer(&(*scalars)[0]))

	ret := C.ntt_cuda_bn254(scalarsC, C.uint32_t(len(*scalars)), C.bool(isInverse), C.size_t(decimation), C.size_t(deviceId))

	return uint64(ret)
}

func NttBatchBN254(scalars *[]ScalarField, isInverse bool, batchSize, deviceId int) uint64 {
	scalarsC := (*C.BN254_scalar_t)(unsafe.Pointer(&(*scalars)[0]))
	isInverseC := C.bool(isInverse)
	batchSizeC := C.uint32_t(batchSize)
	deviceIdC := C.size_t(deviceId)

	ret := C.ntt_batch_cuda_bn254(scalarsC, C.uint32_t(len(*scalars)), batchSizeC, isInverseC, deviceIdC)

	return uint64(ret)
}

func EcNttBN254(values *[]PointBN254, isInverse bool, deviceId int) uint64 {
	valuesC := (*C.BN254_projective_t)(unsafe.Pointer(&(*values)[0]))
	deviceIdC := C.size_t(deviceId)
	isInverseC := C.bool(isInverse)
	n := C.uint32_t(len(*values))

	ret := C.ecntt_cuda_bn254(valuesC, n, isInverseC, deviceIdC)

	return uint64(ret)
}

func EcNttBatchBN254(values *[]PointBN254, isInverse bool, batchSize, deviceId int) uint64 {
	valuesC := (*C.BN254_projective_t)(unsafe.Pointer(&(*values)[0]))
	deviceIdC := C.size_t(deviceId)
	isInverseC := C.bool(isInverse)
	n := C.uint32_t(len(*values))
	batchSizeC := C.uint32_t(batchSize)

	ret := C.ecntt_batch_cuda_bn254(valuesC, n, batchSizeC, isInverseC, deviceIdC)

	return uint64(ret)
}
