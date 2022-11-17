# This file was generated by nvfetcher, please do not modify it manually.
{ fetchgit, fetchurl, fetchFromGitHub, dockerTools }:
{
  julia-17-release-x86_64-darwin = {
    pname = "julia-17-release-x86_64-darwin";
    version = "1.7.3-mac64.dmg";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/mac/x64/1.7/julia-1.7.3-mac64.dmg";
      sha256 = "sha256-Z3mewGz1e8qAqKHG5aFwSF07/ARhshdpmwcw2jfQZW8=";
    };
  };
  julia-17-release-x86_64-linux = {
    pname = "julia-17-release-x86_64-linux";
    version = "1.7.3-linux-x86_64.tar.gz";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/linux/x64/1.7/julia-1.7.3-linux-x86_64.tar.gz";
      sha256 = "sha256-my9PoS2StNzF0R3Gb7EYxHaBp209+NoGTMl1c/L1xzk=";
    };
  };
  julia-18-release-aarch64-darwin = {
    pname = "julia-18-release-aarch64-darwin";
    version = "1.8.3-macaarch64.dmg";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/mac/aarch64/1.8/julia-1.8.3-macaarch64.dmg";
      sha256 = "sha256-gp1Xq0w+8CxxTjxz1H6X3dfdQiBD+F4eNKBpBVKklPU=";
    };
  };
  julia-18-release-aarch64-linux = {
    pname = "julia-18-release-aarch64-linux";
    version = "1.8.3-linux-aarch64.tar.gz";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/linux/aarch64/1.8/julia-1.8.3-linux-aarch64.tar.gz";
      sha256 = "sha256-2/+xNKQTtxLUqOHujmZepV7bCGVxmhutmXkSPWQzrMk=";
    };
  };
  julia-18-release-x86_64-darwin = {
    pname = "julia-18-release-x86_64-darwin";
    version = "1.8.3-mac64.dmg";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/mac/x64/1.8/julia-1.8.3-mac64.dmg";
      sha256 = "sha256-FUSQm/Zw5LJ2s2m+qlKZUBc5iWnv2JtxzgesEcljXrE=";
    };
  };
  julia-18-release-x86_64-linux = {
    pname = "julia-18-release-x86_64-linux";
    version = "1.8.3-linux-x86_64.tar.gz";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/linux/x64/1.8/julia-1.8.3-linux-x86_64.tar.gz";
      sha256 = "sha256-M8Owk1b/qiXTMxw2RrHy1LCZROj5P8uZSVeAG4u/WKk=";
    };
  };
  julia-nightly-aarch64-darwin = {
    pname = "julia-nightly-aarch64-darwin";
    version = "julia-latest-macos-aarch64.dmg";
    src = fetchurl {
      url = "https://julialangnightlies-s3.julialang.org/bin/macos/aarch64/julia-latest-macos-aarch64.dmg";
      sha256 = "sha256-4Lt5t8+MRLeElv9tBI2Re6dwekN+Pyt9BqHF+ArmKhc=";
    };
  };
  julia-nightly-aarch64-linux = {
    pname = "julia-nightly-aarch64-linux";
    version = "julia-latest-linux-aarch64.tar.gz";
    src = fetchurl {
      url = "https://julialangnightlies-s3.julialang.org/bin/linux/aarch64/julia-latest-linux-aarch64.tar.gz";
      sha256 = "sha256-FpsHC0B5xmJlJE2oeCjg8Dw3kCIytS+5hPURSQbj6ec=";
    };
  };
  julia-nightly-x86_64-darwin = {
    pname = "julia-nightly-x86_64-darwin";
    version = "julia-latest-macos-x86_64.dmg";
    src = fetchurl {
      url = "https://julialangnightlies-s3.julialang.org/bin/macos/x86_64/julia-latest-macos-x86_64.dmg";
      sha256 = "sha256-D5l3D6VgQcT6LbsOBoR74tePJIbuPpzxS2wtSq77Vu4=";
    };
  };
  julia-nightly-x86_64-linux = {
    pname = "julia-nightly-x86_64-linux";
    version = "julia-latest-linux-x86_64.tar.gz";
    src = fetchurl {
      url = "https://julialangnightlies-s3.julialang.org/bin/linux/x86_64/julia-latest-linux-x86_64.tar.gz";
      sha256 = "sha256-tpG5mdjCkIxojMCN7u4dQNzxej5gtqgai/qNRnVW2mA=";
    };
  };
}
