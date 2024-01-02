+++
title = "Copying Files"
weight = 1
insert_anchor_links = "left"

[taxonomies]
authors = ["Jonathan"]
+++

## Using Rsync

Using `rsync` you can copy files from and to any machine you have ssh access to. The basic command looks very similar to `cp`:

```bash
rsync -P src dst
```

However, usually one of these two arguments contains a `:` to specify a remote location. 
For example:
```bash
rsync -P example.com:~/Downloads/test.pdf .
```
Copies from a location on example.com to the current directory
The other way around is also allowed:
```bash
rsync -P test.pdf example.com:~/Downloads
```

Just like with `ssh`, the part that specifies the remote location can be altered in various ways:

```bash
# to a specific user
rsync -P test.pdf quinn@example.com:~/Downloads

# With a specific port
rsync -P test.pdf quinn@example.com:~/Downloads --port 1234

# `myserver` will be looked up in ~/.ssh/config
# assuming there is an appropriate entry there
rsync -{} test.pdf myserver:~/Downloads --port 1234
```

### Copying directories

To copy a directory with `rsync` you need to explicitly pass the `-r`

## Using scp

Using `scp` is pretty much exactly like using `rsync`. 
Most command line flags work the same. 
However, `scp` is outdated, and much less nice to use.
For example `-P` in rsync gives progress indicators and resumption of large file copies, something
`scp` cannot do.

We always recommend using `rsync` over `scp` when possible. 
However, both the client and the server need to have `rsync` installed, which could be an issue.

If you need to, you can use `scp` like `rsync`, without the `-P` flag
```bash
scp source destination
```

> Just like with `rsync`, pass `-r` to copy directories.