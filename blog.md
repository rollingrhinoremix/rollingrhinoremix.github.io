<head>
  <link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/MrBeeBenson/rrr-site/main/favicon.png" />
</head>

<div id="navigation">

<a href="https://rollingrhinoremix.github.io">Home</a> | <a href="https://rollingrhinoremix.github.io/download">Download</a> | <a href="https://rollingrhinoremix.github.io/docs">Documentation</a> | <a href="https://rollingrhinoremix.github.io/blog">Blog</a> | <a href="https://rollingrhinoremix.github.io/bugs">Bug Tracker</a> | <a href="https://rollingrhinoremix.github.io#contact">Contact</a>

</div>

# Rolling Rhino Remix - Blog

<hr />

<div id="rhino-v120" markdown="1">

# Pacstall integration - rhino-update & rhino-config v1.2

The Rolling Rhino Remix development team has worked closely with the development team of [Pacstall](https://pacstall.dev) to bring their software onto our distribution. Pacstall is an AUR-inspired package manager for Ubuntu. It brings the experience of the Arch User Repository directly to Ubuntu and Ubuntu-based systems with an ever-growing number of user-maintained packages. 

We have integrated, along with the help of the Pacstall development team, Pacstall directly into our Rhino utilities. Pacstall can now be enabled via `rhino-config` and all Pacstall applications can be updated via `rhino-update`.

`rhino-config` has also recieved some new features, such as the user not being prompted multiple times for configurations that they have already enabled. 

In order to enable Pacstall onto your system please read our [Pacstall documentation](https://rollingrhinoremix.github.io/docs-pacstall).

</div>

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

# The future of Rolling Rhino Remix

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
