package bn254

// #cgo CFLAGS: -I./include/
// #include "ntt.h"
import "C"

import (
	"unsafe"

	"github.com/ingonyama-zk/icicle/wrappers/golang/core"
	cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"
)

func GetDefaultNttConfig() core.NTTConfig[[SCALAR_LIMBS]uint64] {
	cosetGenField := ScalarField{}
	cosetGenField.One()
	var cosetGen [SCALAR_LIMBS]uint64
	for i, v := range cosetGenField.GetLimbs() {
		cosetGen[i] = v
	}

	return core.GetDefaultNTTConfig(cosetGen)
}

func Ntt[S any, T any](scalars core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) core.IcicleError {
	core.NttCheck[T](scalars, cfg, results)

	var scalarsPointer unsafe.Pointer
	if scalars.IsOnDevice() {
		scalarsDevice := scalars.(core.DeviceSlice)
		scalarsDevice.CheckDevice()
		scalarsPointer = scalarsDevice.AsPointer()
	} else {
		scalarsPointer = unsafe.Pointer(&scalars.(core.HostSlice[S])[0])
	}
	cScalars := (*C.scalar_t)(scalarsPointer)
	cSize := (C.int)(scalars.Len() / int(cfg.BatchSize))
	cDir := (C.int)(dir)
	cCfg := (*C.NTTConfig)(unsafe.Pointer(cfg))

	var resultsPointer unsafe.Pointer
	if results.IsOnDevice() {
		resultsDevice := results.(core.DeviceSlice)
		resultsDevice.CheckDevice()
		resultsPointer = resultsDevice.AsPointer()
	} else {
		resultsPointer = unsafe.Pointer(&results.(core.HostSlice[S])[0])
	}
	cResults := (*C.scalar_t)(resultsPointer)

	__ret := C.bn254NTTCuda(cScalars, cSize, cDir, cCfg, cResults)
	err := (cr.CudaError)(__ret)
	return core.FromCudaError(err)
}

func InitDomain(primitiveRoot ScalarField, ctx cr.DeviceContext, fastTwiddles bool) core.IcicleError {
	cPrimitiveRoot := (*C.scalar_t)(unsafe.Pointer(primitiveRoot.AsPointer()))
	cCtx := (*C.DeviceContext)(unsafe.Pointer(&ctx))
	cFastTwiddles := (C._Bool)(fastTwiddles)
	__ret := C.bn254InitializeDomain(cPrimitiveRoot, cCtx, cFastTwiddles)
	err := (cr.CudaError)(__ret)
	return core.FromCudaError(err)
}

func ReleaseDomain(ctx cr.DeviceContext) core.IcicleError {
	cCtx := (*C.DeviceContext)(unsafe.Pointer(&ctx))
	__ret := C.bn254ReleaseDomain(cCtx)
	err := (cr.CudaError)(__ret)
	return core.FromCudaError(err)
}
