<head>
  <link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/MrBeeBenson/rrr-site/main/favicon.png" />
</head>

<div id="navigation">

<a href="https://rollingrhinoremix.github.io">Home</a> | <a href="https://rollingrhinoremix.github.io/download">Download</a> | <a href="https://rollingrhinoremix.github.io/docs">Documentation</a> | <a href="https://rollingrhinoremix.github.io/blog">Blog</a> | <a href="https://rollingrhinoremix.github.io/bugs">Bug Tracker</a> | <a href="https://rollingrhinoremix.github.io#contact">Contact</a>

</div>

# Rolling Rhino Remix - rhino-update Documentation

The rhino-update command will be the command that you will use to update your system. It will update your system via apt as well as provide the latest tools that we develop. The update utility is largely configured by [rhino-config](https://rollingrhinoremix.github.io/docs-rhino-config) which allows for you to enable additional settings such as the automatic installation of the mainline Linux kernel and the removal of snapd from the system. Both of these settings can be read about more in the [rhino-config documentation](https://rollingrhinoremix.github.io/docs-rhino-config). This tool was developed so that we are able to easily provide updates to the Rolling Rhino Remix desktop, as well as provide the latest Linux kernel binaries and other configurations. It is recommended that you use this command as opposed to `apt update && apt upgrade` that is more common on standard Ubuntu desktops. 

- Rhino Update will update all applications available in your package repositories. If you have not disabled Snaps via `rhino-config` then all Snaps will be automatically updated as well.

To run rhino-update you will need to open a new terminal and run `rhino-update`, once you have done this please reboot your system. 

- If the script is unable to be completed then you may be unable to run rhino-update again due to the update directory already existing. To fix this just type `rm -rf ~/rhinoupdate` and then retry.

<hr />

Made with love from all of our [developers & contributors](https://rollingrhinoremix.github.io/contributors.txt), and a large thank you to Martin Wimpress who's [Rolling Rhino](https://github.com/wimpysworld/rolling-rhino) script has inspired the development of this distribution. We would also like to thank Martin for his permission to use the name "Rolling Rhino Remix".

- Ubuntu and Canonical are registered trademarks of Canonical Ltd. Rolling Rhino Remix is not affiliated with the Ubuntu Project. 
- Linux is the registered trademark of Linus Torvalds.
