+++
title = "Copying Files"
weight = 1
insert_anchor_links = "left"

[taxonomies]
authors = ["Jonathan"]
+++

## Using SCP

Using `scp` you can copy files from and to any machine you have ssh access to. The basic command looks very similar to `cp`:

```bash
scp src dst
```

However, usually one of these two arguments contains a `:` to specify a remote location. 
For example:
```bash
scp example.com:~/Downloads/test.pdf .
```
Copies from a location on example.com to the current directory
The other way around is also allowed:
```bash
scp test.pdf example.com:~/Downloads
```

Just like with `ssh`, the part that specifies the remote location can be altered in various ways:

```bash
# to a specific user
scp test.pdf quinn@example.com:~/Downloads

# With a specific port (note, capital P)
scp test.pdf quinn@example.com:~/Downloads -P 1234

# `myserver` will be looked up in ~/.ssh/config
# assuming there is an appropriate entry there
scp test.pdf myserver:~/Downloads -P 1234
```

### Copying directories

To copy a directory with scp you need to explicitly pass the `-r`

## Using rsync

Using `rsync` is pretty much exactly like using `scp`. 
Most command line flags work the same. 
However, rsync has some features which can be very useful such being able to resume after after partially copying a file, 
and giving better progress indication. 

We always recommend using `rsync` over `scp` when possible. 
However, both the client and the server need to have `rsync` installed, which could be an issue.

The basic usage is:
```bash
rsync -P source destination
```
`-P` enables both the features discussed above: partial copying and progress indication.

> Just like with `scp`, pass `-r` to copy directories.