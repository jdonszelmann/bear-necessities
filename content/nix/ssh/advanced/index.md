+++
title = "Advanced"
weight = 1
+++



## Proxying through SSH
This is useful if you want to proxy your connection through some SSH server you **can** reach.
This can be used to access the internet as if you were coming from that SSH host, it can function like a makeshift VPN.

Use the following command to start a SOCKS proxy on the specified port
```sh
ssh -ND 9999 <host>
```

Now, in your web browser (Firefox shown below) go to proxy settings
(about:preferences, search "proxy") and configure as follows:

![Setting up a proxy under Firefox: Select Manual Proxy Configuration and leave all fields blank except "SOCKS Host" (fill with localhost) and the corresponding port (9999)](./proxy-firefox.png)