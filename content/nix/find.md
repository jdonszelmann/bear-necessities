+++
title = "find"
date = 2023-12-28
insert_anchor_links = "left"
[taxonomies]
authors = ["Jonathan"]
+++

Find and [ripgrep](./ripgrep.md) can do similar things. If you find can't do what you're looking for, ripgrep might.

## Find commands

`find .`:
Recursively list all files and folders

`find . -name '*.rs'`:
Recursively list all files with the given extension

## Find and xargs

To make the output of find actually useful, one technique I like to use is to [pipe](./shell/pipes.md) output into `xargs`. `xargs` takes all lines in [stdin](./shell/pipes.md) and gives a command many parameters, one for every line.

The following snippet counts all the lines in all the rust files recursively
found in the current directory.
```bash
find . -name '*.rs' | xargs wc -l 
```

> One cool way to use `xargs` is essentially as a cheap for loop.
> You can use `-I` to designate a sequence that will be substituted.
> For example:
> ```bash
> find . -name '*.pdf' \ # all pdf files
> | grep word_in_filename \ # find certain matching file names
> | xargs -I{} cp {} ./somewhere/"{}.pdf" # copy them all to another directory
> ```
> Here, `-I{}` defines the sequence `{}` to be substituted. Now, `cp` is ran
> for each line that is found.