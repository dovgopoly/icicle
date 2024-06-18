
#include <memory>
#include <unordered_map>
#include <string>
#include <stdexcept>
#include <iostream>

#include "icicle/runtime.h"
#include "icicle/device_api.h"
#include "icicle/utils/log.h"

namespace icicle {

  thread_local Device DeviceAPI::sCurDevice = {nullptr, -1}; // device that is currently active for this thread
  thread_local const DeviceAPI* DeviceAPI::sCurDeviceAPI =
    nullptr; // API for the currently active device of this thread

  eIcicleError DeviceAPI::set_thread_local_device(const Device& device)
  {
    DeviceAPI* device_api = get_deviceAPI(device);
    if (nullptr == device_api) return eIcicleError::INVALID_DEVICE;

    auto err = device_api->set_device(device); // notifying the device backend about the device set
    if (err == eIcicleError::SUCCESS) {
      sCurDevice = device;
      sCurDeviceAPI = device_api;
    }
    return err;
  }

  const Device& DeviceAPI::get_thread_local_device()
  {
    const bool is_valid_device = sCurDevice.id >= 0 && sCurDevice.type != nullptr;
    if (!is_valid_device) {
      throw std::runtime_error("icicle Device is not set. Make sure to initialize the device via call to "
                               "icicle_set_device(const icicle::Device& device)");
    }
    return sCurDevice;
  }
  const DeviceAPI* DeviceAPI::get_thread_local_deviceAPI() { return sCurDeviceAPI; }

  class DeviceAPIRegistry
  {
    std::unordered_map<std::string, std::shared_ptr<DeviceAPI>> apiMap;

  public:
    static DeviceAPIRegistry& Global()
    {
      static DeviceAPIRegistry instance;
      return instance;
    }

    void register_deviceAPI(const std::string& deviceType, std::shared_ptr<DeviceAPI> api)
    {
      if (apiMap.find(deviceType) != apiMap.end()) {
        throw std::runtime_error("Attempting to register a duplicate API for device type: " + deviceType);
      }
      apiMap[deviceType] = api;
    }

    std::shared_ptr<DeviceAPI> get_deviceAPI(const Device& device)
    {
      auto it = apiMap.find(device.type);
      if (it != apiMap.end()) {
        return it->second;
      } else {
        throw std::runtime_error("Device API not found for type: " + std::string(device.type));
      }
    }

    std::list<std::string> get_registered_devices()
    {
      std::list<std::string> registered_devices;
      for (const auto& device : apiMap) {
        registered_devices.push_back(device.first);
      }
      return registered_devices;
    }

    bool is_device_registered(const char* device_type) { return apiMap.find(device_type) != apiMap.end(); }
  };

  DeviceAPI* get_deviceAPI(const Device& device) { return DeviceAPIRegistry::Global().get_deviceAPI(device).get(); }

  extern "C" void register_deviceAPI(const std::string& deviceType, std::shared_ptr<DeviceAPI> api)
  {
    ICICLE_LOG_DEBUG << "deviceAPI registered for " << deviceType;
    DeviceAPIRegistry::Global().register_deviceAPI(deviceType, api);
  }

  std::list<std::string> get_registered_devices() { return DeviceAPIRegistry::Global().get_registered_devices(); }

  bool is_device_registered(const char* device_type)
  {
    return DeviceAPIRegistry::Global().is_device_registered(device_type);
  }

} // namespace icicle