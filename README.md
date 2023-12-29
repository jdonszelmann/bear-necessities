# The 🐻 necessities

See <https://es.0x76.dev>.

## Contributing
Any contributions are more than welcome, please make a pull request if you notice any mistakes or have a post to add for yourself.
When adding your own post make sure to set the `authors` taxonomy key in the [Zola frontmatter](https://www.getzola.org/documentation/content/page/#front-matter).
In any case update the `updated` key.

e.g.
```toml
+++
...
updated = 2023-12-29

[taxonomies]
authors = ["Jonathan", "Vivian"]
+++
...
```

## How to Develop
We use [Zola](https://www.getzola.org) as our static site generator, so check its documentation for a general overview.

Specifically for this repo you need to have the [Nix Package Manager](https://nixos.org/download) installed.
Furthermore, you need to configure to use flakes and nix commands, by adding `experimental-features = nix-command flakes` to `~/.config/nix/nix.conf` or `/etc/nix/nix.conf`.

Afterwards you should be able to run a live-reload server locally as follows:
```bash
nix develop --command zola serve
```
