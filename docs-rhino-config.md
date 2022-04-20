<head>
  <link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/MrBeeBenson/rrr-site/main/favicon.png" />
</head>

<div id="navigation">

<a href="https://rollingrhinoremix.github.io">Home</a> | <a href="https://rollingrhinoremix.github.io/download">Download</a> | <a href="https://rollingrhinoremix.github.io/docs">Documentation</a> | <a href="https://rollingrhinoremix.github.io/blog">Blog</a> | <a href="https://rollingrhinoremix.github.io/bugs">Bug Tracker</a> | <a href="https://rollingrhinoremix.github.io#contact">Contact</a>

</div>

# Rolling Rhino Remix - rhino-config Documentation

The rhino-config command has been created to extend the capabilities of rhino-update. It is not recommended to use rhino-config unless you are aware of what options you are enabling. When you run rhino-config you will be prompted to choose Yes/No on certain configurations, if you choose "Yes", then the changes will be reflected on your system with your next rhino-update. If you have already enabled a configuration option, then you will not be prompted again for that option. Once an option has been enabled you will not see it re-appear in rhino-config.

To run rhino-config just open a terminal and type `rhino-config`, once you have completed configuration please make sure to update your system with `rhino-update`. 

## Installing the latest Linux kernel

You are able to install the latest Linux kernel with rhino-update, to do this you will first need to run rhino-config. The latest Linux kernel is installed from the Ubuntu Mainline repositories. The important thing to note is that this kernel does not apply any of the patches recieved from Ubuntu, and so can potentially be more insecure as a result of this. 

## Purging Snapd

You will be able to disable snapd from rhino-config, and it will automatically replace it with Flatpaks, and install the Flathub repository as a result of this. By disabling snapd all snapcraft applications will be deleted and snap will be flagged to not be reinstalled via apt. This is due to the fact that some .deb applications, such as Firefox, are defaulting to snaps in 22.04 LTS and onwards.

- Since some applications, such as Firefox are installed as snaps by default, you may find yourself without a browser. To rectify this, you can install the Flatpak version of Firefox with `flatpak install firefox`

## Enabling Pacstall

You are able to enable Pacstall, an AUR-like experience, on your system, to do this you will first need to run `rhino-config` to enable it to install via our update utility. Once you have enabled it you are then able to install it with `rhino-update`. Once it has been enabled we recommend you read our [Pacstall Documentation](https://rollingrhinoremix.github.io/docs-pacstall) to learn how to use the software on your system, and how it integrates with Rolling Rhino Remix.

<hr />

Made with love from all of our [developers & contributors](https://rollingrhinoremix.github.io/contributors.txt), and a large thank you to Martin Wimpress who's [Rolling Rhino](https://github.com/wimpysworld/rolling-rhino) script has inspired the development of this distribution. We would also like to thank Martin for his permission to use the name "Rolling Rhino Remix".

- Ubuntu and Canonical are registered trademarks of Canonical Ltd. Rolling Rhino Remix is not affiliated with the Ubuntu Project. 
- Linux is the registered trademark of Linus Torvalds.
