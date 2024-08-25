use std::env;
use std::path::PathBuf;

fn main() {
    // Retrieve environment variables
    let out_dir = env::var("OUT_DIR").expect("OUT_DIR is not set");

    // Construct the path to the build directory
    let build_dir = PathBuf::from(format!("{}/../../../", &out_dir));

    // Construct the path to the deps directory
    let deps_dir = build_dir.join("deps");

    // Add RPATH linker arguments
    println!("cargo:rustc-link-arg=-Wl,-rpath,{}/icicle/lib", deps_dir.display());
}
