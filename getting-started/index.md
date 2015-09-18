---
title:  "Getting Started"
weight: 1
description: "Outlines the server requirements, how to dowload Symphony, and how to install it."
---

This tutorial will walk you through how to install Symphony, either by downloading it from the Symphony website or cloning the latest stable release on Git.

## Server requirements

- PHP 5.3 or above
- PHP’s LibXML module, with the XSLT extension enabled (`--with-xsl`)
- MySQL 5.5 or above
- A webserver (known to be used with Apache, Litespeed, Nginx and Hiawatha)
- Apache’s `mod_rewrite` module or equivalent
- PHP’s built in `json` functions, which are enabled by default in PHP 5.2 and above; if they are missing, ensure PHP wasn’t compiled with `--disable-json`

## Download from the Website

Download [the ZIP archive for the current release][website] from the Symphony website. Extract the folders into your target directory on your server.
<aside class="note">
### Optional: Install the Example Workspace

The `workspace/` directory included in the release is optional. It contains an example workspace and a database installation file that, if included, runs as part of the installation and sets up some default sections, data sources, and pages to demonstrate how a blog-like website in Symphony might work. If you are just learning, then this could be very useful. However, if you want to start from scratch, **omit this folder** when you upload to your server. Symphony will create it for you later.</p>
</aside>

Now go to the section <a href="#run-the-installer">Running the Installer</a>.

[website]: http://getsymphony.com/download/

## Cloning with Git

1. Clone the [Symphony Git repository](https://github.com/symphonycms/symphony-2/) to the desired location:

        git clone git://github.com/symphonycms/symphony-2.git target-directory
        cd target-directory

    (Replace `target-directory` with your chosen new directory name.)

1.  _(Optional)_ If you would like to add the bundled optional extensions, run the following commands to checkout the `bundle` branch which contains the Git submodules references and update the submodules:

        git checkout --track origin/bundle
        git submodule update --init --recursive

    The extensions included in the optional bundle:

  - [Markdown](https://github.com/symphonycms/markdown)
  - [Maintenance Mode](https://github.com/symphonycms/maintenance_mode)
  - [Select Box Link Field](https://github.com/symphonycms/selectbox_link_field)
  - [JIT Image Manipulation](https://github.com/symphonycms/jit_image_manipulation)
  - [Export Ensemble](https://github.com/symphonycms/export_ensemble)
  - [Debug DevKit](https://github.com/symphonycms/debugdevkit)
  - [Profile DevKit](https://github.com/symphonycms/profiledevkit)
  - [XSS Filter](https://github.com/symphonycms/xssfilter)

1. _(Optional)_ If you would like to install the [example workspace](https://github.com/symphonycms/workspace), run:

        git clone git://github.com/symphonycms/workspace.git

    If you skip this step, Symphony will create a blank workspace environment for you during the installation.

<aside class="note">
### Love Git? So Do We

If you install Symphony via Git, it might be prudent to create a new branch for your website and keep the `master` branch tracking the Symphony repository. We have documentation on different workflows that use Git with Symphony to version-control your site.
</aside>

<h2 id="run-the-installer">Running the Installer</h2>

Regardless of which method you choose to obtain Symphony, the installation process is the same.

1. Point your web browser at the `install` subdirectory (e.g., `http://example.com/install/`).
1. Provide details on connecting to your database and your server environment.
1. Select some configuration items and provide details for your administrative account.
1. Chuckle villainously and tap your fingertips together (or pet a cat) as your installation completes
1. Remove installer files:  `rm -rf install/ workspace/install.sql`

After the installation is finished, Symphony will redirect you to log into the backend (by default, located at `/symphony/`). If you did not follow the instructions above to remove the installer files, a notification will prompt you to do that after you have logged in. You should really get on that.

## Clean Up File Permissions

1. Symphony’s installer will inform you if it needs write access to directories that it doesn’t already have, but you can ensure it has the access it needs by temporarily setting the root to world-writeable.

        chmod 777 /your/site/root/

1. Once Symphony is successfully installed, you should change file/directory permissions to something tighter for security reasons. Symphony recommends `755` for directories and `644` for files as a good default, but this may need to be changed depending on your server’s users and groups configuration. For example, you may need to change directories and files that Symphony needs to subsequently write to to `777` and `666` respectively.

### Useful commands

You may find these commands useful when adjusting file and directory permissions.

To recursively chmod directories only:

    find /your/site/root -type d -exec chmod 755 {} \;

To recursively chmod files only:

    find /your/site/root -type f -exec chmod 644 {} \;

## Success! What Now?

Congratulations, you have a working Symphony installation. If you downloaded the example workspace, then you can [tour the workspace][tour]. Alternatively, you can try our [Hello World! with Symphony tutorial][hello-world] to learn how to create a basic site from a blank workspace.

You might also want to learn about [installing extensions][extend] to add more features to Symphony.

[tour]: {{ site.baseurl }}/getting-started/example-workspace.html
[hello-world]: {{ site.baseurl }}/guides/tutorials/hello-world/
[extend]: {{ site.baseurl }}/getting-started/managing-extensions.html

## Aaaah, It All Ended in Tears!

Don't panic.

Check our [Community]() section to discover the best ways to seek help from other Symphony users.
