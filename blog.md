<head>
  <link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/MrBeeBenson/rrr-site/main/favicon.png" />
</head>

<div id="navigation">

<a href="https://rollingrhinoremix.github.io">Home</a> | <a href="https://rollingrhinoremix.github.io/download">Download</a> | <a href="https://rollingrhinoremix.github.io/docs">Documentation</a> | <a href="https://rollingrhinoremix.github.io/blog">Blog</a> | <a href="https://rollingrhinoremix.github.io/bugs">Bug Tracker</a> | <a href="https://rollingrhinoremix.github.io#contact">Contact</a>

</div>

# Rolling Rhino Remix - Blog

<hr />

<div id="rhino-update-v130" markdown="1">

# rhino-update v1.3 - Quality of life

Our upgrade utility, rhino-update has recieved its first major update in almost 12 days. These changes include
- A brand-new feature that ensures that the mainline Linux kernel is not installed twice. This was created to help save bandwidth if required. If users have a slower internet connection, running an upgrade can take a long while, especially if the same kernel is being reinstalled.
- An important bug fix that allows for Pacstall to be installed, rather than giving an error. Now users are able to install Pacstall onto their system once again.

To recieve the latest updates, please run `rhino-update` to upgrade your system.

<hr />

<div id="2022-05-03" markdown="1">

# Release 2022.05.03

After two weeks of development we are now ready to release the latest packaged version of Rolling Rhino Remix!

**What's new?**
- All packages are updated to their latest version in the repository
- The rhino-config v2.0.1 binary is now included in the distribution
- A seperate ~/.bash_aliases file has been included in the distribution that will be updated whenever one of our aliases requires an update.
- Bug fixes.

If you are using an already existing installation of Rolling Rhino Remix then you will be able to upgrade to the latest version with `rhino-update`.

If you wish to download Rolling Rhino Remix with a fresh disk image then you can download it [here](https://rollingrhino.org/download).

</div>

<hr />

<div id="joining-oin" markdown="1">

# Ensuring software remains free - Rolling Rhino Remix has joined the Open Inventions Network

Free software is crucial for software development. The goal of Rolling Rhino Remix is to provide a free, open-source operating system based on Ubuntu. That is why Rolling Rhino Remix has joined the [Open Inventions Network](https://openinventionnetwork.com/). The Open Invention Network is a patent non-agression community that supports the freedom of Linux and Open Source software, and helps reduce the risks of patent risks. All members of the Open Invention Network sign the same agreement to cross license their Linux System patents royalty free. The Open Invention Network owns over 2.7 million patents & applications and all members also gain access to the Open Invention Network's portfolio of 350 intellectual property assets. 

Many companies and projects have joined the Open Invention Network, including: Canonical, Red Hat, IBM, Suse, Phillips and Microsoft. By joining the Open Invention Network we will have access to the patents they have agreed to provide to the Network, as well as giving any project and company the ability to utilise our patents. 

- [Statistics and information from the Open Invention Network website](https://openinventionnetwork.com/)

</div>

<hr />

<div id="development-update-2" markdown="1">

# Development is underway for 2022.05.03!

Development has begun for the next disk image release. A lot of small changes are going into this release to create the best possible user experience. The newly packaged rhino-config v2.0 binaries will be provided by default, along with a set of brand-new wallpapers. At the moment we are unsure whether the default wallpaper will change, but some alternatives will be provided in `/usr/share/backgrounds/rolling-backgrounds`. Other small changes such as the rest of the `config-v2` update that was pushed to rhino-update will also be provided by default, and all packages will be updated to their latest versions.

This is the first disk image that will be built ontop of the released Jammy disk image, and so when you switch to the devel series with `rhino-init`, it will prompt an error similar to `E: expected Jammy but got Kinetic.`, This can be rectified by hitting "y" (for yes) to switch the devel series to track Kinetic. Your system will still be Rolling, it justs means that the development branch is now tracking the upcoming Ubuntu release. 

</div>

<hr />

<div id="config-v2" markdown="1">

# rhino-config v2.0 & rhino-update v1.2.1

After a couple of weeks of development, rhino-config v2.0 has been completed. We have completely turned rhino-config into a command-line utility, written in Rust, with the help of our new maintainer, Wizard28. This means that support for the legacy python script will be dropping.

From now on, in order to be able to use rhino-config you must first update your system to pull the latest Rust binary from our repository. To do this, type `rhino-update` in your terminal. The full documentation for rhino-config has been updated and can be found [here](https://rollingrhinoremix.github.io/docs-rhino-config).

- If you would still like an interactive script, similar to the way that rhino-config was in version v1.2, you can run `rhino-config enable --interactive` to have it walk you through the options.

rhino-update has recieved a minor update, which will now download and install the latest rust binary for rhino-config. Along with this it now will install kernel 5.17.4 as opposed to 5.17.3. In order to ensure that updates are ran smoother, the .bashrc file will be replaced and all of our Rhino aliases will be moved to `~/.bash_aliases`, so that we can update the bash aliases without any disruptive change to the system.

## Legacy rhino-config script

The legacy rhino-config python script will still be available until the next disk image release, so that users who have not yet ran `rhino-update` will not recieve any major breaking changes. The script will officially be deprecated as of 2022.05.03, and will automatically upgrade the user if they have not done so already. it is recommended that you run `rhino-update` to recieve the latest change as soon as possible.

</div>

<hr />

<div id="rhino-v120" markdown="1">

# Pacstall integration - rhino-update & rhino-config v1.2

The Rolling Rhino Remix development team has worked closely with the development team of [Pacstall](https://pacstall.dev) to bring their software onto our distribution. Pacstall is an AUR-inspired package manager for Ubuntu. It brings the experience of the Arch User Repository directly to Ubuntu and Ubuntu-based systems with an ever-growing number of user-maintained packages. 

We have integrated, along with the help of the Pacstall development team, Pacstall directly into our Rhino utilities. Pacstall can now be enabled via `rhino-config` and all Pacstall applications can be updated via `rhino-update`.

`rhino-config` has also recieved some new features, such as the user not being prompted multiple times for configurations that they have already enabled. 

In order to enable Pacstall onto your system please read our [Pacstall documentation](https://rollingrhinoremix.github.io/docs-pacstall).

</div>

<hr />

<div id="2022-04-19" markdown="1">

# Release 2022.04.19 & What's to come for the future.

After almost 3 weeks of hard work we have released the latest packaged version of Rolling Rhino Remix.

**What's new?**
- All packages have been updated to their latest versions in the Ubuntu repositories. 
- The [rhino-config](https://github.com/rollingrhinoremix/rhino-config) utility has been created to extend the capabilities of rhino-update.
- The [rhino-config](https://github.com/rollingrhinoremix/rhino-config) utility has the ability to purge and hold snapd from apt updates and install the mainline kernel.
- [rhino-update](https://github.com/rollingrhinoremix/rhino-update) has been updated to allow for different configurations.
- Bug fixes.
- Code refactoring.

If you are using an already existing installation of Rolling Rhino Remix then you will be able to upgrade to the latest version with `rhino-update`.

- Before you update it is important to note that a bug in 2022.03.26 requires manual intervention to fix otherwise the upgrade to the latest release will not work. In order to fix this bug click [here](https://rollingrhinoremix.github.io/blog#2022-03-26bug).

If you wish to download Rolling Rhino Remix with a fresh disk image then you can download it [here](https://rollingrhinoremix.github.io/download).

## The future of Rolling Rhino Remix

This has been known for a while but all discussion and development for Rolling Rhino Remix now happens on our Discord, which you can join [here](https://discord.gg/JMu4SYRs2n).

From this release onwards all of our utilities, such as rhino-config and rhino-update, will be updated irrsepective of disk image releases. Large-scale changes to the utilities will still recieve updates on our blog page. This will allow for users to get the latest and greatest changes to Rhino without any wait.

We have updated our website, it now uses server-side Jekyll to generate the pages rather than Eleventy being ran client-side then the generated pages being uploaded to GitHub. This will allow for people to make web-pages and fix our mistakes easier as they will be in pure Markdown as opposed to HTML. 

The biggest change for the future of Rolling Rhino Remix is the integration of [Pacstall](https://pacstall.dev). We have worked along-side the developers of Pacstall to integrate their software into our Distribution. Pacstall provides a similar experience to the [AUR](https://aur.archlinux.org) on Ubuntu, and working along-side these developers to integrate it into our Distribution will mean that you will have a new way to install bleeding-edge software onto your system.

As always, thanks to everyone who has shown an interest in the project, and a special thank you to our [developers & contributors](https://rollingrhinoremix.github.io) who have helped improve the project.

</div>

<hr />

<div id="2022-03-26bug" markdown="1">

# Bug in 2022.03.26 - Requires manual intervention

During the development cycle of 2022.04.14 I have noticed a bug that will affect currently existing versions of Rolling Rhino Remix (2022.03.26 is the only version released.), the bash alias that called `rhino-update` runs the update.sh script as sudo, which has presented problems when we look for files in the user's home directories. Luckily you are able to easily manually patch the system yourself. 

The fix is fairly straightforward, all you will need is `git` and `mv`, both of which are provided in Rolling Rhino Remix

The first step is to go into your home directory:

- cd ~

Next you will need to clone the repository with the fix

- git clone https://github.com/rollingrhinoremix/distro

Next you will need to move the file into your home directory

- mv ~/distro/.bashrc ~

and there you go, the fix has been applied and you will continue getting updates from us. The next update, which releases with 2022.04.14, will work as intended if you have applied this patch.

</div>

<hr />

<div id="development-update-1" markdown="1">

# Development is underway for 2022.04.14

Development has gone underway for the next packaged .iso of Rolling Rhino Remix! This release won't just be a newly compiled disk image with the latest updates. We are aiming to release a new update to the Rhino utility by the time we have released 2022.04.14. The new feature, rhino-config will at first only support the option to configure whether you would prefer to use the mainline Linux kernel or stick with the current Ubuntu kernel with all of their optimisations however support will be extended in the future to allow for the installation of proprietary drivers and other features too. 

This release has been delayed by an extra couple of days for two various reasons:
- Due to conflicting schedules in personal lives we have had to delay the release, as preparing for a release takes a lot of work.
- We are aiming to release rhino-config in this release and we are determined to do it.

If the new rhino-config utility is not available by this release we will keep you updated, however we hope that we have allowed ourselves enough time to create this feature and test it extensively before release. Every release will subsequently be released bi-weekly on a Thursday unless stated otherwise.

Other changes in this future release include:
- Us trialing a more automated process for .iso creation using a bash script, which will allow us more time to work on other features of the distribution, such as Rhino
- Having the new disk images have the latest updates so users are not required to update a lot of packages upon installation.

</div>

<hr />

<div id="2022-03-26" markdown="1">

# Release 2022.03.26

Rolling Rhino Remix has had its first official public release! Ubuntu is now (unofficially) provided as a rolling release distribution! You are able to download the .iso file for the distribution [here](https://rollingrhinoremix.github.io/download). 

**What's new?**
- All packages have been updated to their latest versions in the Ubuntu repository
- The [rhino](https://rollingrhinoremix.github.io/docs-rhino) utility tool has been created and packaged in the distribution. Rhino is used as a drop-in replacement for `apt update` and `apt upgrade` and allows for the initialisation of the distribution upon first installation. To learn more please read the [rhino documentation](https://rollingrhinoremix.github.io/docs-rhino) and our [Quick Start guide](https://rollingrhinoremix.github.io/docs-quickstart).
- We have replaced the default background with our own background image featuring our mascot, a rhino! You are able to download the background image [here](https://rollingrhinoremix.github.io/assets/images/background.png).

Furthermore Rolling Rhino is now fully open source upon its first release, if you for any reason decide to create your own disk image rather than use the ones we have created, you can. Just read our documentation and follow the steps provided [here](rollingrhinoremix.github.io/docs-create).

Thank you to all of our contributors who have made our first release possible! You are able to view the full list of contributors [here](https://rollingrhinoremix.github.io/contributors.txt).

</div>

<hr />

Made with love from all of our [developers & contributors](https://rollingrhinoremix.github.io/contributors.txt), and a large thank you to Martin Wimpress who's [Rolling Rhino](https://github.com/wimpysworld/rolling-rhino) script has inspired the development of this distribution. We would also like to thank Martin for his permission to use the name "Rolling Rhino Remix".

- Ubuntu and Canonical are registered trademarks of Canonical Ltd. Rolling Rhino Remix is not affiliated with the Ubuntu Project. 
- Linux is the registered trademark of Linus Torvalds.
