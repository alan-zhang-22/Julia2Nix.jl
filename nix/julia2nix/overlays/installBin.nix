{
  stdenv,
  lib,
  autoPatchelfHook,
  julia-sources,
  system,
  ...
}: {version}: let
  majorVersion = let
    v = builtins.head (lib.splitString "-" version);
    major = builtins.substring 0 1 v;
    minor = builtins.substring 1 2 v;
  in (major + "." + minor);
in
  stdenv.mkDerivation {
    inherit (julia-sources."julia-${version}-${system}") src pname version;

    nativeBuildInputs = lib.optionals stdenv.hostPlatform.isLinux [
      autoPatchelfHook
    ];

    postPatch = lib.optionalString (version != "nightly") ''
      # Julia fails to pick up our Certification Authority root certificates, but
      # it provides its own so we can simply disable the test. Patching in the
      # dynamic path to ours require us to rebuild the Julia system image.
      substituteInPlace share/julia/stdlib/v${majorVersion}/NetworkOptions/test/runtests.jl \
        --replace '@test ca_roots_path() != bundled_ca_roots()' \
          '@test_skip ca_roots_path() != bundled_ca_roots()'
    '';

    dontStrip = true;
    dontConfigure = true;
    dontBuild = true;

    installPhase = ''
      runHook preInstall
      mkdir -p $out

      mv {bin,etc,include,lib,libexec,share} $out

      runHook postInstall
    '';

    doInstallCheck = false;
    preInstallCheck = ''
      export JULIA_TEST_USE_MULTIPLE_WORKERS=true
      # Some tests require read/write access to $HOME.
      export HOME="$TMPDIR"
    '';

    installCheckPhase = ''
      runHook preInstallCheck
      # Command lifted from `test/Makefile`.
      $out/bin/julia \
        --check-bounds=yes \
        --startup-file=no \
        --depwarn=error \
        $out/share/julia/test/runtests.jl
      runHook postInstallCheck
    '';

    meta = {
      mainProgram = "julia";
      description = "${version}: High-level, high-performance, dynamic language for technical computing";
    };
  }
