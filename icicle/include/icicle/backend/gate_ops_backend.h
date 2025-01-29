#pragma once

#include "icicle/gate_ops.h"
#include "icicle/fields/field_config.h"
using namespace field_config;

namespace icicle {
  /*************************** Backend registration ***************************/

  using gateEvaluationImpl = std::function<eIcicleError(
    const Device& device,
    const GateData<scalar_t>& gate_data, 
    const CalculationData& calc_data,
    const HornerData& horner_data,
    const GateOpsConfig& config,
    scalar_t* results)>;


  void register_gate_evaluation(const std::string& deviceType, gateEvaluationImpl impl);

#define REGISTER_GATE_EVALUATION_BACKEND(DEVICE_TYPE, FUNC)                                                            \
  namespace {                                                                                                          \
    static bool UNIQUE(_reg_vec_gate_evaluation) = []() -> bool {                                                      \
      register_gate_evaluation(DEVICE_TYPE, FUNC);                                                                     \
      return true;                                                                                                     \
    }();                                                                                                               \
  }


} // namespace icicle