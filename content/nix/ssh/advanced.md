+++
title = "Advanced"
weight = 1
insert_anchor_links = "left"
+++



# Proxying through SSH

For if you want to access the internet from a web browser as if you're somewhere else where you **can** ssh to. Use
```bash
ssh -ND 9999 <host>
```

Now, in your web browser (firefox shown here) go to proxy settings
(about:preferences, search proxy.) and configure like this:

![Setting up a proxy under Firefox: Select Manual Proxy Configuration and leave all fields blank except "SOCKS Host" (fill with localhost) and the corresponding port (9999)](/nix/ssh/proxy-firefox.png)