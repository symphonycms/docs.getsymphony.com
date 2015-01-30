---
title: "Managing Extensions"
weight: 5
description: "Downloading, installing, and managing extensions to make Symphony more powerful."
---

Add-ons, plugins—call them what you will, [extensions][concept:extensions] are PHP scripts that interact with Symphony through its robust system of [delegates][concept:delegates]. 

The core of Symphony CMS itself is lean. This makes the codebase easier to maintain and develop, and it gives you more flexibility. You don't often have to worry about an extension having to override core behaviour, because most extensions quite literally *extend*. However, this brings the disadvantage of *needing* any number of extensions to accomplish tasks that you might be used to a CMS doing "out of the box."

Installing extensions requires no special knowledge of PHP. Some extensions will have additional requirements beyond Symphony's own—e.g., an extension that manipulates images will need an image library; some extensions hook into external APIs and may require API keys. **Always consult an extension's README for special information and instructions.**

[concept:extensions]: {{ site.baseurl }}/concepts/extensions/index.html
[concept:delegates]: {{ site.baseurl }}/concepts/extensions/delegates.html

## Obtaining Extensions

There are currently two major repositories for extensions: [SymphonyExtensions.com](http://symphonyextensions.com/) and the [Extensions download section](http://getsymphony.com/download/extensions/) on the main Symphony website. Many developers release simultaneously to both sites. Generally, SymphonyExtensions.com has more recently updated extensions—but there are a few exceptions. Double-check both sites to ensure you have the most current version of an extension that is compatible with your version of Symphony.

Most extensions (and all from SymphonyExtensions.com) are available on GitHub, so if you are comfortable with the process, you can clone the extension into the appropriate subdirectory of `extensions` and follow the rest of the installation instructions. If you are more-than-comfortable using Git to manage your workflow, you could even add extensions as submodules. (You may have already done this if you installed Symphony via Git and added the optional extension submodules via the `bundle` branch.)

If you would rather not use Git, though, don't worry: you can download extensions normally and extract them. Links to gzipped or zipped files are directly available on SymphonyExtensions.com; if you find your extension on the Symphony website, you will need to follow the link to its repository and download the zip file from there.

All extensions must be subdirectories of the `extensions` directory, and **the name of an extension's folder *must* match its ID**. The Symphony autoloader relies on this information to properly load your extension. If the two do not match, the backend will display an error message. You can find an extension's ID as part of its `extension.meta.xml` file. In general, the directory name should already contain the extensions ID, but GitHub will add commit information onto the end that you need to remove. For example, if the directory you extract is named `markdown_supreme-d5b78`, you should rename it to `markdown_supreme`.

## Installing

You can download multiple extensions at once and install them all in one action. Follow the steps above for all of the extensions you want to download.

Log into the Symphony backend, and go to the **System > Extensions** page. This page lists all of the extensions present in your `extensions` directory, installed or otherwise. You will receive an error if there are any directories present that do not contain a valid extension, or if the name of the directory does not match the extension.

<a href="{{ site.baseurl }}/assets/img/screenshots/2.6/extensions_backend.png">
  <img src="{{ site.baseurl }}/assets/img/screenshots/2.6/extensions_backend.png" alt="A screenshot of a section of the Extensions backend page, showing on installed extension and another that is not installed."/>
</a>

Extensions that are disabled or not yet installed will be greyed out. You can see version information—which will also warn you if the extension is not compatible with your version—and links to the extension's GitHub repos and authors as well.

Select the extensions you want to install (the entire row will be highlighted in blue). Then, from the **With selected…** dropdown menu at the bottom of the page, choose **Install**, then click **Apply**. At minimum, this registers the extension in Symphony's database. Some extensions have their own database tables, so those will be installed during this step.

## Removing Extensions

Uninstalling or disabling an extension is as easy as installing it. Go to the Extensions page in the backend and select the extensions you want to remove. Then, from the **With selected…** dropdown menu, choose **Disable** or **Uninstall** as appropriate, and click **Apply**.

After the page reloads, the extensions will still be visible. However, they should be greyed out and marked as "Disabled" or "Not installed" based on your choice above.

<aside class="note">
  <h3>Disable or Uninstall?</h3>
  <p>Disabling an extension stops it from triggering on any of its delegates—it is as if the extension no longer exists. However, it won't remove the extension's database tables. This is useful if you're trying to troubleshoot and want to temporarily remove an extension.</p>
  <p>Uninstalling an extension removes any information about it from the database. All of its tables will be deleted, and its entry in Symphony's extension database table is removed.</p>
</aside>

## Updating Extensions

If you downloaded your extensions manually:

1. Download the latest version.
1. Extract the extension directory into `extensions`, overwriting all files.
1. Go to the Extensions page in the backend.
1. Select the extension, then from the dropdown menu, select **Update** and then click **Apply**. At minimum, this bumps up the version number in Symphony's database. Some extensions will run upgrade scripts of their own to change their database tables.

If you installed your extensions as git submodules, then from your Symphony installation:

1. Checkout the `master` or equivalent branch for the repo, and merge changes from the remote:

        $ cd extensions/extension_name
        $ git checkout master
        $ git pull origin master

    (You will likely need to checkout the `master` or equivalent branch because submodules, by default, point to a detached HEAD.)
1. Go to the Extensions page in the backend, and follow the same step as above to update the extension in your database.
1. If you are satisfied everything is well, then commit the submodule changes to your parent repo.

## Getting Help with Extensions

Before you ask for help with an extension, make sure you do two things:

1. Consult any documentation available with the extension.
1. Search on the extension's name and your issue.

It's possible the issue you're having has come up before, and hopefully, there is a simple way to fix it.

If you are having trouble installing, configuring, or using an extension, you can ask on the [Symphony forums](http://getsymphony.com/discuss/). Most extensions have a dedicated topic there for support. Though the extension developer often knows the most about the extension, they might not be the most extensive *user* of it—and they might be busy or no longer maintaining the extension. Posting on the forum ensures your question has the widest audience, so anyone who might be able to help can offer advice. Plus, anyone who has the same issue in the future will hopefully find your question when they search.

If you think you have found a bug, the best place to report it is as an issue on the extension's GitHub repo (if it has one). Developers love pull requests with fixes even more. This could be a great opportunity to learn about [developing extensions]() for Symphony.
