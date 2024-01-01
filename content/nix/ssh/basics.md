+++
title = "Basics"
weight = 0
insert_anchor_links = "left"

[taxonomies]
authors = ["Jonathan"]
+++

This is a very short summary of SSH basics to use as a reference. 
For anything but that, look at our other pages or the [Arch wiki](https://wiki.archlinux.org/title/OpenSSH)

## Basic Usage

The simplest possible SSH command looks as follows:

```bash
ssh 192.168.0.42
```

Assuming that `192.168.0.42` has an ssh server running, this logs you in to that machine. 

> To check whether an ssh server is running somewhere, you can try various methods:
> 1. Check if `sshd`, the ssh deamon is installed.
> 2. Check if the `sshd` daemon actually runs. `systemctl status sshd` might help you here
> 3. Check whether `sshd` is actually publically available. You might try `sudo netstat -tulpn | grep ssh` and check whether it's using port `22` and serving on `0.0.0.0`.
> 4. Check port forwarding rules on your router if you want to access a server from outside a local network. 

Some variations of the command are:
```bash
# use a URL instead
ssh example.com
# selects a specific port. 22 is the default
ssh example.com -p 22 
# log in as a specific user
ssh user@example.com
```

> To select a port with ssh, you generally don't use the regular URL
> syntax for specifying ports of `domain:port`. 
> There is the `-p` flag instead. 

For more, see [advanced ssh](./advanced/index.md).

## Logging in

When you connect to an ssh server, you may be asked for a username and password. Note that this is a setting the server may have disabled outright for security reasons. 
Even if a server does provide password login as an option, 
we highly recommend you use [ssh keys](./keys.md) instead as they are more secure, and after initial setup easier to use.

## SSH Config

Remembering SSH commands is hard. 
To help you, you can use an ssh configuration file.
All ssh configuration is stored the `.ssh` directory which is in your home directory. (`~/.ssh`) You will find your [keys](./keys.md)

In a text file called config (`~/.ssh/config`) you can write your ssh configuration in the following format:

```ini
host example
    User sarah
    Hostname example.com
    IdentityFile ~/.ssh/specific_key
    Port 1234

host ...
    ...
```
> Most fields can be omitted, in which case the default value is used.

With this config in place, you can type `ssh example` without further parameters and the corresponding configuration is applied

## Windows

TODO: windows has some quirks, but generally things work the same. 
TODO: where does windows store ssh keys and config by default?
