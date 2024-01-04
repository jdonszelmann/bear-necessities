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
        nerdfonts =
          pkgs.nerdfonts.override { fonts = [ "NerdFontsSymbolsOnly" ]; };

      in rec {
        packages = rec {
          website = pkgs.stdenv.mkDerivation {
            pname = "essentials-website";
            version = "2024-01-04";
            src = self;
            inherit nativeBuildInputs buildInputs;
            configurePhase = ''
              # Pre-processing here
              mkdir -p ./static/fonts
              echo "${self.rev or "dirty"}" > static/rev
              ln -sf ${nerdfonts}/share/fonts/truetype/NerdFonts/* static/fonts/
              ln -sf ${pkgs.fira}/share/fonts/opentype/* static/fonts/
              ln -sf ${pkgs.fira-mono}/share/fonts/opentype/* static/fonts/
            '';
            buildPhase = "zola build";
            installPhase = "cp -r public $out";
          };
          staging = website.overrideAttrs {
            buildPhase = "zola --config config.staging.toml build";
          };
          default = website;
        };
        devShells.default = pkgs.mkShell {
          inherit buildInputs nativeBuildInputs;
          packages = with pkgs; [ lychee ];
          shellHook = packages.website.configurePhase;
        };
      });
}
