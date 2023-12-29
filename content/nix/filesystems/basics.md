+++
title = "Basics"
date = 2023-12-28
insert_anchor_links = "left"
+++


## Testing new disks
When getting new disks it is good practice to make sure they are not _dead on arrival_, for this using `badblocks` is a great tool. It will write a certain pattern to all sectors and read it again to make sure it is there. Usually it will do multiple passes with different patterns to verify.

> The following command is **destructive**
```zsh
sudo badblocks -b 4096 -wsv <disk>
```
The arguments mean the following:
* `-b 4096` set the badblocks blocksize to 4096, this is needed if your disks are larger than 4TB as badblocks stores the amount of blocks in a 32-bit integer
* `-w` do a **destructive** write test
* `-s` show progress
* `-v` be verbose and print found badblocks to stdout

See also the [Arch Wiki on badblocks](https://wiki.archlinux.org/title/Badblocks).