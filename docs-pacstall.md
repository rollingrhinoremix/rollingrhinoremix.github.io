<head>
  <link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/MrBeeBenson/rrr-site/main/favicon.png" />
</head>

<div id="navigation">

<a href="https://rollingrhinoremix.github.io">Home</a> | <a href="https://rollingrhinoremix.github.io/download">Download</a> | <a href="https://rollingrhinoremix.github.io/docs">Documentation</a> | <a href="https://rollingrhinoremix.github.io/blog">Blog</a> | <a href="https://rollingrhinoremix.github.io/bugs">Bug Tracker</a> | <a href="https://rollingrhinoremix.github.io#contact">Contact</a>

</div>

# Rolling Rhino Remix - Pacstall Documentation

We have recently integrated [Pacstall](https://pacstall.dev) into Rolling Rhino Remix. Pacstall is a piece of software intended to bring the experience of the "Arch User Repository" to Ubuntu. We have worked closely with the developers with Pacstall to best integrate it into our system. Pacstall has to be manually enabled with [rhino-config](https://rollingrhinoremix.github.io/docs-rhino-config). To enable it please read the [rhino-config documentation](https://rollingrhinoremix.github.io/docs-rhino-config), which will provide the steps necessary to enable Pacstall onto your system. 

You are able to browse the [Pacstall package list](https://pacstall.dev/packages?page=0) to see a list of available packages installable via Pacstall.

**Pacstall Commands:**
- Pacstall -I [Package Name] - This will install a selected package from Pacstall.
- Pacstall -R [Package Name] - This will remove an installed package from your system.
- Pacstall -S [Package Name] - This will search to see if a package exists with that name
- Pacstall -V - This will tell you which version of the package you have installed
- Pacstall -H - This will provide you with other help commands for Pacstall.

To upgrade your Pacstall packages, please use `rhino-update`, this will update Pacstall as well as all of the applications you have installed from it. 

<hr />

Made with love from all of our [developers & contributors](https://rollingrhinoremix.github.io/contributors.txt), and a large thank you to Martin Wimpress who's [Rolling Rhino](https://github.com/wimpysworld/rolling-rhino) script has inspired the development of this distribution. We would also like to thank Martin for his permission to use the name "Rolling Rhino Remix".

- Ubuntu and Canonical are registered trademarks of Canonical Ltd. Rolling Rhino Remix is not affiliated with the Ubuntu Project. 
- Linux is the registered trademark of Linus Torvalds.
