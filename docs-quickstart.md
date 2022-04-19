<head>
  <link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/MrBeeBenson/rrr-site/main/favicon.png" />
</head>

<div id="navigation">

<a href="https://rollingrhinoremix.github.io">Home</a> | <a href="https://rollingrhinoremix.github.io/download">Download</a> | <a href="https://rollingrhinoremix.github.io/docs">Documentation</a> | <a href="https://rollingrhinoremix.github.io/blog">Blog</a> | <a href="https://rollingrhinoremix.github.io/bugs">Bug Tracker</a> | <a href="https://rollingrhinoremix.github.io#contact">Contact</a>

</div>

# Rolling Rhino Remix - Quick Start Guide

Welcome to the Quick Start Guide for Rolling Rhino Remix! Thank you for installing our Linux distribution. This distribution is the collective work of a few contributors. 

- This guide assumes that you have already installed Rolling Rhino Remix, if you have not then please follow our [Installation guide](../docs-install).

So firstly, congratulations on installing Rolling Rhino Remix! Each .iso image is created utilising an Ubuntu Daily Build, so you may already notice a few features that have not yet released in Ubuntu. 

The first step you will have to take once you have booted into your desktop is to open a terminal. Rolling Rhino Remix currently does not have any graphical means for updating and initalising the system. Once you have opened a terminal you will need to run the following command:

- rhino-init

This will initialise Rolling Rhino Remix. It will replace `/etc/apt/sources.list` with the Ubuntu devel repositories (as opposed to the next Ubuntu release). Once it has completed this, it will automatically begin to update your system with the latest from the devel repositories. Once your system has updated please reboot to begin the next step. **You will not be required to run rhino-init again once you have completed this step.**

**Before the next step it will be important to read our [bug tracker](https://rollingrhinoremix.github.io) to see if there will be any issues upgrading your system for your hardware.**

Once your system has been rebooted you will need to open a second terminal and run:

- rhino-update

This command will be the command that you will use to update your system. It will update your system via apt as well as provide the latest tools that we develop and the latest Linux kernel direct from the Ubuntu mainline repository. This tool was developed so that we are able to easily provide updates to the Rolling Rhino Remix desktop, as well as provide the latest Linux kernel binaries. Once this has completed please reboot to begin utilising your system.

Once you have done this you are able to utilise your system! It is recommended that you run `rhino-update` at least once per week so that you will not miss any crucial updates. Rolling Rhino Remix is able to be used just like any other Ubuntu system, the only difference is that you will need to use `rhino-update` to update. The installation and removal of applications **does not change** and is not supported by rhino, you will need to use APT or Snaps instead.

*This next step is completely optional. Please read the [documentation on rhino-config](docs-rhino-config) before you continue.*

If you want to extend the capabilities of rhino-update you are able to use our latest feature, rhino-config. All you need to do to configure rhino is open a terminal and run:

- rhino-config

Once you have done this you will be prompted by the rhino-config splash screen, which will look similar to apt. It will ask you questions on whether or not you want to enable certain features, once these are enabled rhino-update will begin to install them the next time you run rhino-update.

<hr />

Made with love from all of our [developers & contributors](https://rollingrhinoremix.github.io/contributors.txt), and a large thank you to Martin Wimpress who's [Rolling Rhino](https://github.com/wimpysworld/rolling-rhino) script has inspired the development of this distribution. We would also like to thank Martin for his permission to use the name "Rolling Rhino Remix".

- Ubuntu and Canonical are registered trademarks of Canonical Ltd. Rolling Rhino Remix is not affiliated with the Ubuntu Project. 
- Linux is the registered trademark of Linus Torvalds.
