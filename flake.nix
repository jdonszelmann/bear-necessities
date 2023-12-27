{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        nativeBuildInputs = with pkgs; [ zola ];
        buildInputs = with pkgs; [ ];
      in
      with pkgs; {
        packages = rec {
          website = pkgs.stdenv.mkDerivation {
            pname = "essentials-website";
            version = "2023-12-27";
            src = self;
            inherit nativeBuildInputs buildInputs;
            configurePhase = ''
              # Pre-processing here
            '';
            buildPhase = "zola build";
            installPhase = "cp -r public $out";
          };
          default = website;
        };
        devShells.default = mkShell {
          inherit buildInputs nativeBuildInputs;
        };
      });
}
