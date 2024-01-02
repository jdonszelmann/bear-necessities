+++
title = "SSH"
sort_by = "weight"
insert_anchor_links = "left"

[taxonomies]
authors = ["Jonathan"]
+++

## The Purpose of SSH

With SSH, you can log in to a computer you don't necessarily have physical access to. 
SSH is (generally) terminal only. 
When you 'ssh into a machine' your terminal is essentially transformed into the terminal of that machine. 
Any command you run, runs on that machine, not your own.
This can be useful in myriad ways, but you often see this when logging in to servers or compute clusters.

Using SSH, you can also [copy files](@/nix/ssh/copying.md) from and to machines.

Although these pages might serve like a quick reference for SSH commands,
it is by no means complete or intended to be complete. 
We highly recommend the [Arch wiki](https://wiki.archlinux.org/title/OpenSSH) page on the topic.
