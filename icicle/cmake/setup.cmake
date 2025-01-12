
# Option to cross-compile for Android
option(BUILD_FOR_ANDROID "Cross-compile for Android" OFF)

if (BUILD_FOR_ANDROID)
    message(STATUS "Configuring for Android ARM64...")

    set(ANDROID_MIN_API 29)
    set(CMAKE_SYSTEM_NAME Android CACHE STRING "Target system name for cross-compilation")
    set(ANDROID_ABI arm64-v8a CACHE STRING "Default Android ABI")
    set(CMAKE_ANDROID_ARCH_ABI "${ANDROID_ABI}" CACHE STRING "Target ABI for Android") # deprecated??
    set(ANDROID_PLATFORM "android-${ANDROID_MIN_API}" CACHE STRING "Android API level")
    set(CMAKE_ANDROID_NDK /home/administrator/users/yuvals/icicle/icicle/backend/vulkan/android/cmdline-tools/ndk CACHE PATH "Path to Android NDK")
    set(CMAKE_ANDROID_STL_TYPE c++_shared CACHE STRING "Android STL type")
    set(CMAKE_TOOLCHAIN_FILE "${CMAKE_ANDROID_NDK}/build/cmake/android.toolchain.cmake" CACHE FILEPATH "Path to the Android toolchain file")

    list(APPEND CMAKE_SYSTEM_LIBRARY_PATH "${CMAKE_ANDROID_NDK}/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/lib/aarch64-linux-android/${ANDROID_MIN_API}")    

    # Debug messages to confirm settings
    message(STATUS "CMAKE_SYSTEM_NAME: ${CMAKE_SYSTEM_NAME}")
    message(STATUS "CMAKE_SYSTEM_VERSION: ${CMAKE_SYSTEM_VERSION}")
    message(STATUS "CMAKE_ANDROID_ARCH_ABI: ${CMAKE_ANDROID_ARCH_ABI}")
    message(STATUS "CMAKE_ANDROID_NDK: ${CMAKE_ANDROID_NDK}")
    message(STATUS "CMAKE_TOOLCHAIN_FILE: ${CMAKE_TOOLCHAIN_FILE}")
    message(STATUS "CMAKE_SYSTEM_LIBRARY_PATH: ${CMAKE_SYSTEM_LIBRARY_PATH}")

    # Android-specific libraries
    find_library(LOG_LIB log REQUIRED)  # Android log library
    set(PLATFORM_LIBS ${LOG_LIB})
else()
  # Native platform configuration
  message(STATUS "Configuring for native platform...")
  # Select the C++ compiler
  find_program(CLANG_COMPILER clang++)
  find_program(CLANG_C_COMPILER clang)

  if(CLANG_COMPILER AND CLANG_C_COMPILER)
      set(CMAKE_CXX_COMPILER ${CLANG_COMPILER} CACHE STRING "Clang++ compiler" FORCE)
      set(CMAKE_C_COMPILER ${CLANG_C_COMPILER} CACHE STRING "Clang compiler" FORCE)
  else()
      message(WARNING "ICICLE CPU works best with clang++ and clang. Defaulting to ${CLANG_COMPILER}")
  endif()

  set(PLATFORM_LIBS pthread dl)
endif()

link_libraries(${PLATFORM_LIBS})

# Find the ccache program
find_program(CCACHE_PROGRAM ccache)
# If ccache is found, use it as the compiler launcher
if(CCACHE_PROGRAM)
    message(STATUS "ccache found: ${CCACHE_PROGRAM}")

    # Use ccache for C and C++ compilers
    set(CMAKE_C_COMPILER_LAUNCHER ${CCACHE_PROGRAM})
    set(CMAKE_CXX_COMPILER_LAUNCHER ${CCACHE_PROGRAM})
    set(CMAKE_CUDA_COMPILER_LAUNCHER ${CCACHE_PROGRAM})
else()
    message(STATUS "ccache not found")
endif()

set(CMAKE_POSITION_INDEPENDENT_CODE ON)

# Set the default build type to Release if not specified
if(NOT CMAKE_BUILD_TYPE)
  set(CMAKE_BUILD_TYPE "Release" CACHE STRING "Choose the type of build: Debug, Release, RelWithDebInfo, MinSizeRel." FORCE)
endif()

# Print the selected build type
message(STATUS "Build type: ${CMAKE_BUILD_TYPE}")