var documenterSearchIndex = {"docs":
[{"location":"nix/#Nix","page":"Nix","title":"Nix","text":"","category":"section"},{"location":"nix/#Nix-flake-struct","page":"Nix","title":"Nix flake struct","text":"","category":"section"},{"location":"nix/","page":"Nix","title":"Nix","text":"Julia2Nix.jl\n├───devShells\n│   ├───aarch64-darwin\n│   │   ├───default: development environment 'Julia2Nix'\n│   │   └───packages: development environment 'devshell'\n│   ├───aarch64-linux\n│   │   ├───default: development environment 'Julia2Nix'\n│   │   └───packages: development environment 'devshell'\n│   ├───x86_64-darwin\n│   │   ├───default: development environment 'Julia2Nix'\n│   │   └───packages: development environment 'devshell'\n│   └───x86_64-linux\n│       ├───default: development environment 'Julia2Nix'\n│       └───packages: development environment 'devshell'\n├───overlays\n│   ├───aarch64-darwin: Nixpkgs overlay\n│   ├───aarch64-linux: Nixpkgs overlay\n│   ├───default: Nixpkgs overlay\n│   ├───x86_64-darwin: Nixpkgs overlay\n│   └───x86_64-linux: Nixpkgs overlay\n├───packages\n│   ├───aarch64-darwin\n│   │   └───julia_18-bin: package 'julia-18-release-aarch64-darwin'\n│   ├───x86_64-darwin\n│   │   ├───build-project: package 'Julia2Nix'\n│   │   ├───julia_17-bin: package 'julia-17-release-x86_64-darwin'\n│   │   └───julia_18-bin: package 'julia-18-release-x86_64-darwin'\n│   └───x86_64-linux\n│       ├───build-conda: package 'build-conda'\n│       ├───build-depot: package 'julia-depot'\n│       ├───build-env: package 'Julia2Nix'\n│       ├───build-project: package 'Julia2Nix'\n│       ├───conda: package 'conda-install'\n│       ├───gr: julia package 'GR'\n│       ├───julia-fhs: package 'julia' with FHS\n│       ├───julia-wrapped: package 'julia'\n│       ├───julia2nix: package 'julia2nix'\n│       ├───julia2nix-all: package 'julia2nix-all'\n│       ├───julia_16-bin: package 'julia-bin-1.6.6'\n│       ├───julia_17-bin: package 'julia-17-release-x86_64-linux-1.7.3-linux-x86_64'\n│       └───julia_18-bin: package 'julia-18-release-x86_64-linux-1.8.1-linux-x86_64'\n└───templates\n    ├───devshell: template: The devshell template which contains several Julia Packages\n    └───jlrs: template: The tempalte which contains jlrs development of Nix","category":"page"},{"location":"nix/","page":"Nix","title":"Nix","text":"You can simply use nix run and nix build to run or build them","category":"page"},{"location":"devshell/#dev-shell","page":"dev shell","title":"dev shell","text":"","category":"section"},{"location":"devshell/#commands","page":"dev shell","title":"commands","text":"","category":"section"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"You can run menu in devshell to see the following  (source)","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"Format all jl files in the current directory","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"jlfmt","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"Run pkgs.instantiate() in project","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"init","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"Run julia inside FHS","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"julia-fhs","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"write julia2nix.toml with buildProject","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"buildProject","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"write julia2nix.toml in current project directory","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"writejulia2nix","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"Check histogram(randn(10000)) in julia, GR is it running normally","category":"page"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"checks-GR","category":"page"},{"location":"devshell/#direnv","page":"dev shell","title":"direnv","text":"","category":"section"},{"location":"devshell/","page":"dev shell","title":"dev shell","text":"Enable direnv so that you can automatically enter devshell when you enter the project directory","category":"page"},{"location":"junix/#JuNix","page":"JuNix","title":"JuNix","text":"","category":"section"},{"location":"junix/","page":"JuNix","title":"JuNix","text":"CurrentModule = Julia2Nix.JuNix","category":"page"},{"location":"junix/#types","page":"JuNix","title":"types","text":"","category":"section"},{"location":"junix/","page":"JuNix","title":"JuNix","text":"collect_registries\nget_tarball_registry_path\nextract_tarball\nregistry_relpath","category":"page"},{"location":"junix/#Julia2Nix.JuNix.collect_registries","page":"JuNix","title":"Julia2Nix.JuNix.collect_registries","text":"collect_registries()\n\nCollect registries from PkgInfo\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.get_tarball_registry_path","page":"JuNix","title":"Julia2Nix.JuNix.get_tarball_registry_path","text":"get_tarball_registry_path(path)\n\nGet tarball path from path.toml\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.extract_tarball","page":"JuNix","title":"Julia2Nix.JuNix.extract_tarball","text":"extract_tarball(tarball_path, dir)\n\nExtract tar file\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.registry_relpath","page":"JuNix","title":"Julia2Nix.JuNix.registry_relpath","text":"registry_relpath(reg::RegistryInfo)\n\nGet registry real path\n\n\n\n\n\n","category":"function"},{"location":"junix/#fetch","page":"JuNix","title":"fetch","text":"","category":"section"},{"location":"junix/","page":"JuNix","title":"JuNix","text":"is_artifact_required\nselect_fetcher","category":"page"},{"location":"junix/#Julia2Nix.JuNix.is_artifact_required","page":"JuNix","title":"Julia2Nix.JuNix.is_artifact_required","text":"is_artifact_required(artifact::ArtifactInfo, opts::Options)\n\nReturn a bool By matching lazy_matches, system_matches in artifact and opts\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.select_fetcher","page":"JuNix","title":"Julia2Nix.JuNix.select_fetcher","text":"select_fetcher(fetchers::Vector{Fetcher}, opts::Options)\n\nReturn the right fetcher by comparing sha256\n\n\n\n\n\n","category":"function"},{"location":"junix/#util","page":"JuNix","title":"util","text":"","category":"section"},{"location":"junix/","page":"JuNix","title":"JuNix","text":"get_archive_url_for_version\nget_pkg_url\nget_source_path\nconvert_sha256\nfetch_sha256\nget_os_from_opts\nis_git_repo\nget_repo_meta","category":"page"},{"location":"junix/#Julia2Nix.JuNix.get_archive_url_for_version","page":"JuNix","title":"Julia2Nix.JuNix.get_archive_url_for_version","text":"get_archive_url_for_version(url::String, ref)\n\nReturn archieve url use git url\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.get_pkg_url","page":"JuNix","title":"Julia2Nix.JuNix.get_pkg_url","text":"get_pkg_url(uuid::UUID, tree_hash::String)\n\nGenerate url by format with uuid and treehash\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.get_source_path","page":"JuNix","title":"Julia2Nix.JuNix.get_source_path","text":"get_source_path(ctx::Context, name::String, uuid::UUID, tree_hash::SHA1)\n\nGet source real path\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.convert_sha256","page":"JuNix","title":"Julia2Nix.JuNix.convert_sha256","text":"convert_sha256(data::String, base::Symbol)\n\nConvert sha256 with nix-hash\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.fetch_sha256","page":"JuNix","title":"Julia2Nix.JuNix.fetch_sha256","text":"fetch_sha256(fetcher::Fetcher, opts::Options)\n\nPrefetch sha256 with nix-prefetch\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.get_os_from_opts","page":"JuNix","title":"Julia2Nix.JuNix.get_os_from_opts","text":"get_os_from_opts(opts::Options)\n\nGet arch and os from opts\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.is_git_repo","page":"JuNix","title":"Julia2Nix.JuNix.is_git_repo","text":"is_git_repo(path::String)\n\nReturn bool, is path a git repo\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.get_repo_meta","page":"JuNix","title":"Julia2Nix.JuNix.get_repo_meta","text":"get_repo_meta(path::String)\n\nGet repo meta by path(git repo)\n\n\n\n\n\n","category":"function"},{"location":"junix/#JuNix-2","page":"JuNix","title":"JuNix","text":"","category":"section"},{"location":"junix/","page":"JuNix","title":"JuNix","text":"load_registries!\nload_artifacts!\nwrite_julia2nix\ngenerate_depot","category":"page"},{"location":"junix/#Julia2Nix.JuNix.load_registries!","page":"JuNix","title":"Julia2Nix.JuNix.load_registries!","text":"load_registries!(pkgs::Vector{PackageInfo})\n\nLoad registries from Registry.toml.\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.load_artifacts!","page":"JuNix","title":"Julia2Nix.JuNix.load_artifacts!","text":"load_artifacts!(pkginfo::PackageInfo)\n\nWrite meta to PackageInfo from toml\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.write_julia2nix","page":"JuNix","title":"Julia2Nix.JuNix.write_julia2nix","text":"write_julia2nix(depot, opts, package_path, name)\n\nWrite julia2nix.toml to out_path\n\n\n\n\n\n","category":"function"},{"location":"junix/#Julia2Nix.JuNix.generate_depot","page":"JuNix","title":"Julia2Nix.JuNix.generate_depot","text":"generate_depot(registry_fetchers, pkg_fetchers ,artifact_fetchers)\n\ngenerate depot by registry pkg and artifact\n\n\n\n\n\n","category":"function"},{"location":"#Julia2Nix.jl-Documentation","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"","category":"section"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"The Nix interface to Julia Pkg.","category":"page"},{"location":"#Getting-started","page":"Julia2Nix.jl Documentation","title":"Getting started","text":"","category":"section"},{"location":"#Shell-environment","page":"Julia2Nix.jl Documentation","title":"Shell environment","text":"","category":"section"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"Initializing your default shellEnv of julia2nix with flake template.","category":"page"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"nix flake init --template github:JuliaCN/Julia2Nix.jl#templates.devshell\nnix develop","category":"page"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"For default devshell","category":"page"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"nix develop github:JuliaCN/Julia2Nix.jl#devShells.x86_64-linux.default","category":"page"},{"location":"#Build","page":"Julia2Nix.jl Documentation","title":"Build","text":"","category":"section"},{"location":"#julia-wrapped","page":"Julia2Nix.jl Documentation","title":"julia-wrapped","text":"","category":"section"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"julia-wrapped wraps the libraries and JULIA_DEPOT_PATH , which can be loaded easily in a sandbox environment.","category":"page"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"nix build .#julia-wrapped","category":"page"},{"location":"#julia-fhs","page":"Julia2Nix.jl Documentation","title":"julia-fhs","text":"","category":"section"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"julia-fhs run julia inside the Filesystem Hierarchy Standard.","category":"page"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"nix build .#julia-fhs","category":"page"},{"location":"#Working-with-a-project","page":"Julia2Nix.jl Documentation","title":"Working with a project","text":"","category":"section"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"To build the Manifest.toml of packages in the project run:","category":"page"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"nix build .#packages.<system>.build-package\n# for example x86_64\nnix build .#packages.x86_64-linux.build-package","category":"page"},{"location":"#Generate-julia2nix.toml","page":"Julia2Nix.jl Documentation","title":"Generate julia2nix.toml","text":"","category":"section"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"nix run github:JuliaCN/Julia2Nix.jl#packages.x86_64-linux.julia2nix \n# Generate with all system\nnix run github:JuliaCN/Julia2Nix.jl#packages.x86_64-linux.julia2nix-all","category":"page"},{"location":"#Contents","page":"Julia2Nix.jl Documentation","title":"Contents","text":"","category":"section"},{"location":"","page":"Julia2Nix.jl Documentation","title":"Julia2Nix.jl Documentation","text":"Pages = [\"types.md\", \"junix.md\", \"devshell.md\", \"index.md\"]\nDepth = 2","category":"page"},{"location":"types/#Types","page":"Types","title":"Types","text":"","category":"section"},{"location":"types/","page":"Types","title":"Types","text":"CurrentModule = Julia2Nix","category":"page"},{"location":"types/#Functions","page":"Types","title":"Functions","text":"","category":"section"},{"location":"types/","page":"Types","title":"Types","text":"read_manifest\nwrite_manifest\nread_package\nwrite_package\nget_sha256\nget_sha256_expr","category":"page"},{"location":"types/#Julia2Nix.read_manifest","page":"Types","title":"Julia2Nix.read_manifest","text":"read_manifest(::AbstractString)\n\nRead manifest from File\n\n\n\n\n\n","category":"function"},{"location":"types/#Julia2Nix.write_manifest","page":"Types","title":"Julia2Nix.write_manifest","text":"write_manifest(manifest::Manifest, manifest_file::AbstractString)\n\nWrite manifest to manifest_file\n\n\n\n\n\n","category":"function"},{"location":"types/#Julia2Nix.read_package","page":"Types","title":"Julia2Nix.read_package","text":"read_package(path::AbstractString)\n\nRead Package from path. (get_file manifest)\n\n\n\n\n\n","category":"function"},{"location":"types/#Julia2Nix.write_package","page":"Types","title":"Julia2Nix.write_package","text":"write_package(package::Package)\n\nWrite package manifest to manifest file.\n\n\n\n\n\n","category":"function"},{"location":"types/#Julia2Nix.get_sha256","page":"Types","title":"Julia2Nix.get_sha256","text":"get_sha256(args::Vector{String} = String[])\n\nReturn a Hash by nix-prefetch args and nix hash to-sri\n\n\n\n\n\n","category":"function"},{"location":"types/#Julia2Nix.get_sha256_expr","page":"Types","title":"Julia2Nix.get_sha256_expr","text":"get_sha256_expr(expr::String, args::Vector{String} = String[])\n\nReturn a Hash\n\nAdd the processed expr to args and call get_sha256\n\n\n\n\n\n","category":"function"},{"location":"types/#Structs","page":"Types","title":"Structs","text":"","category":"section"},{"location":"types/","page":"Types","title":"Types","text":"Source\nManifest\nJuNix.ArtifactInfo\nJuNix.Options","category":"page"},{"location":"types/#Julia2Nix.Source","page":"Types","title":"Julia2Nix.Source","text":"Packages source Include pname version meta and fetcher_args.\n\n\n\n\n\n","category":"type"},{"location":"types/#Julia2Nix.Manifest","page":"Types","title":"Julia2Nix.Manifest","text":"Dictionary for storing source\n\n\n\n\n\n","category":"type"},{"location":"types/#Julia2Nix.JuNix.ArtifactInfo","page":"Types","title":"Julia2Nix.JuNix.ArtifactInfo","text":"struct ArtifactInfo\n\nFields\n\nname: artifact name\ntree_hash: artifact hash\npath: artifact/tree_hash\narch: aarch64, x86_64 ...\nos: darwin, linux ...\nlibc: glibc on linux, nothing on darwin\n\n\n\n\n\n","category":"type"},{"location":"types/#Julia2Nix.JuNix.Options","page":"Types","title":"Julia2Nix.JuNix.Options","text":"struct Options\n\nFields\n\nnworkers: select_fetcher threads\narch: aarch64, x86_64 ...\nos: darwin, linux ...\nlibc: glibc on linux, nothing on darwin\npkg_server: package download url\ncheck_store: whether to add the --check-store parameter\n\n\n\n\n\n","category":"type"}]
}