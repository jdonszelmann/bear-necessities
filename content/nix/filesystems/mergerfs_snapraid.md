+++
title = "MergerFS & Snapraid"

[taxonomies]
authors = [ "Vivian" ]
+++
This page is all about the specific deployment configuration of using MergerFS and Snapaid in tandem.
Which can also be seen as a free alternative to [Unraid](https://unraid.net/).

## Replacing a parity disk
First format the disk as required (see also [basic](./basics.md)).

Then add the new disk as an **extra** parity disk.
Which might look something like this (`/etc/snapraid.conf`):
```conf
data d1 /mnt/disk1
data d2 /mnt/disk2
data d3 /mnt/disk3
parity /mnt/parity1/snapraid.parity
2-parity /mnt/parity2/snapraid.parity-2 # <-- this being the new disk

```

Afterwards do a full parity sync by providing `-F` to snapraid sync, as follows:
```bash
sudo snapraid -F sync
```

Next up remove the old parity disk from the config, and add it as a data drive, make sure to remove the parity file from it.
Make sure to number the new one correctly.
```conf
data d1 /mnt/disk1
data d2 /mnt/disk2
data d3 /mnt/disk3
data d4 /mnt/parity1 # <-- old parity disk
parity /mnt/parity2/snapraid.parity-2 # <-- new parity disk
```

Of course, it might be smart to update the mountpoints accordingly.
That was not done here for the sake of clarity.
