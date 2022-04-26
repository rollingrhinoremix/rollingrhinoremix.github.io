<head>
  <link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/MrBeeBenson/rrr-site/main/favicon.png" />
</head>

<div id="navigation">

<a href="https://rollingrhinoremix.github.io">Home</a> | <a href="https://rollingrhinoremix.github.io/download">Download</a> | <a href="https://rollingrhinoremix.github.io/docs">Documentation</a> | <a href="https://rollingrhinoremix.github.io/blog">Blog</a> | <a href="https://rollingrhinoremix.github.io/bugs">Bug Tracker</a> | <a href="https://rollingrhinoremix.github.io#contact">Contact</a>

</div>

# Rolling Rhino Remix - rhino-config Documentation

The rhino-config command has been created to extend the capabilities of
rhino-update. It is not recommended to use rhino-config unless you are aware of
what options you are enabling. When you run rhino-config you will be prompted
to choose Yes/No on certain configurations, if you choose "Yes", then the
changes will be reflected on your system with your next rhino-update. If you
have already enabled a configuration option, then you will not be prompted
again for that option. Once an option has been enabled you will not see it
re-appear in rhino-config.

The rhino-config command line tool created to extend the capabilities of
rhino-update. It is not recommend to use rhino-config unless you are aware of
what options you are toggling.

Here is the usage of the tool.

```console
rhino-config
Utility to edit rolling rhino remix config

The Rhino Configuration script allows for you to customise the rhino-update utility and extend its
capabilities, such as allowing for the installation of unsupported software

Please be cautious when using rhino-config, issues can arise from some of the settings so please
ensure that you know what you are doing and have read the documentation

USAGE:
    rhino-config <SUBCOMMAND>

OPTIONS:
    -h, --help
            Print help information

SUBCOMMANDS:
    disable
            Disable a config option
    enable
            Enable a config option, manually or interactively
    help
            Print this message or the help of the given subcommand(s)
```

To run rhino-config just open a terminal and type `rhino-config`, once you have
completed configuration please make sure to update your system with
`rhino-update`.

## Getting Started

To get started with rhino-config run `rhino-config enable --interactive` (or
`rhino-config enable -i`). This will start `rhino-config` in interactive mode
where you will be asked to enable or disable each option interactively.

This is the recommended way to use `rhino-config` if you've never used it
before.

---

If you're experienced with `rhino-config` and want to skip the interactive
mode, then you can run `rhino-config <command> <option>` to `enable` or
`disable` an option.

For example if you need to disable the mainline kernel for example you can run:

```bash
rhino-config disable --mainline # or rhino-config disable -m
```

Similarly you can enable pacstall:

```bash
rhino-config enable --pacstall # or rhino-config enable -p
```

You can combine these flags too, if you want to enable both pacstall and the mainline kernel:

```bash
rhino-config enable --pacstall --mainline # or rhino-config enable -p -m
```

### Options

These are the options that `rhino-config` lets you toggle.

#### The latest Linux kernel

The latest Linux kernel is installed from the Ubuntu Mainline repositories. The
important thing to note is that this kernel does not apply any of the patches
received from Ubuntu, and so can potentially be more insecure as a result of
this.

#### Purging Snapd

You're able to disable snapd from rhino-config, and it will automatically
replace it with Flatpaks, and install the Flathub repository as a result of
this. By disabling snapd all snapcraft applications will be deleted and snap
will be flagged to not be reinstalled via apt. This is due to the fact that
some `.deb` applications, such as Firefox, are defaulting to
snaps in 22.04 LTS and onwards.

- Since some applications, such as Firefox are installed as snaps by default,
  you may find yourself without a browser. To rectify this, you can install the
  Flatpak version of Firefox with `flatpak install firefox`

On disabling `snapdpurge`, `snapd` will be reinstalled on your
system along with `gnome-software-plugin-snap`. This doesn't
uninstall Flatpak from your system.

## Enabling Pacstall

You are able to enable Pacstall, an AUR-like experience, on your system, to do
this you will first need to run `rhino-config` to enable it to install via our
update utility. Once you have enabled it you are then able to install it with
`rhino-update`. Once it has been enabled we recommend you read our [Pacstall
Documentation](https://rollingrhinoremix.github.io/docs-pacstall) to learn how
to use the software on your system, and how it integrates with Rolling Rhino
Remix.

<hr />

Made with love from all of our [developers &
contributors](https://rollingrhinoremix.github.io/contributors.txt), and a
large thank you to Martin Wimpress who's [Rolling
Rhino](https://github.com/wimpysworld/rolling-rhino) script has inspired the
development of this distribution. We would also like to thank Martin for his
permission to use the name "Rolling Rhino Remix".

- Ubuntu and Canonical are registered trademarks of Canonical Ltd. Rolling
  Rhino Remix is not affiliated with the Ubuntu Project. 
- Linux is the registered trademark of Linus Torvalds.
