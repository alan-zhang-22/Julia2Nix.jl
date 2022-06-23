# This file was generated by nvfetcher, please do not modify it manually.
{ fetchgit, fetchurl, fetchFromGitHub }:
{
  julia-17-release-x86_64-darwin = {
    pname = "julia-17-release-x86_64-darwin";
    version = "1.7.3-mac64.dmg";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/mac/x64/1.7/julia-1.7.3-mac64.dmg";
      sha256 = "sha256-Z3mewGz1e8qAqKHG5aFwSF07/ARhshdpmwcw2jfQZW8=";
    };
  };
  julia-18-rc-aarch64-darwin = {
    pname = "julia-18-rc-aarch64-darwin";
    version = "1.8.0-rc1-macaarch64.dmg";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/mac/aarch64/1.8/julia-1.8.0-rc1-macaarch64.dmg";
      sha256 = "sha256-5MS3IMjbc0LWJt+voXWpHaGS6zenaNpnkgHPUCziNhA=";
    };
  };
  julia-18-rc-aarch64-linux = {
    pname = "julia-18-rc-aarch64-linux";
    version = "1.8.0-rc1-linux-aarch64.tar.gz";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/linux/aarch64/1.8/julia-1.8.0-rc1-linux-aarch64.tar.gz";
      sha256 = "sha256-Fd1VN1SqFeUU8o7QDtTP2x+M+IPzOYuAPvXPBednovs=";
    };
  };
  julia-18-rc-x86_64-darwin = {
    pname = "julia-18-rc-x86_64-darwin";
    version = "1.8.0-rc1-mac64.dmg";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/mac/x64/1.8/julia-1.8.0-rc1-mac64.dmg";
      sha256 = "sha256-RpOC/nBd4M8Ouds1LIXbj5ql1Aa6u99Po54YFa6SYPk=";
    };
  };
  julia-18-rc-x86_64-linux = {
    pname = "julia-18-rc-x86_64-linux";
    version = "1.8.0-rc1-linux-x86_64.tar.gz";
    src = fetchurl {
      url = "https://julialang-s3.julialang.org/bin/linux/x64/1.8/julia-1.8.0-rc1-linux-x86_64.tar.gz";
      sha256 = "sha256-pH792qzLQk2tZJn4cKt/eSxQgn0jzGTLmHMoAxgzeWY=";
    };
  };
}
