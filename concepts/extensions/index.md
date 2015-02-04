---
title: "Extensions"
weight: 1
description: "Extensions add specialized functionality to the lean, mean Symphony core."
---

Extensions are add-ons that can provide additional functionality for your Symphony project. Some more common uses for extensions include providing additional [field types][fields] and [text formatters][text], enhancing the [admin interface][admin], and even bundling entirely new features.

## Using Extensions

Extensions must be placed in the `extensions/` folder of a Symphony installation in order to be made available to the system.

They can be managed in the admin interface, under **System > Extensions**. Individual or bulk management is possible by selecting extensions and using the "With Selected" dropdown to Enable, Disable, or Uninstall.

For more information, see [Managing Extensions][manage].

## Default Extensions

There are eight default extensions. These are bundled with the Symphony CMS download archive. If you clone Symphony from its Git repo, you will need to checkout the `bundle` branch and initialize the extension submodules therein.

- [Markdown](https://github.com/symphonycms/markdown)
- [Maintenance Mode](https://github.com/symphonycms/maintenance_mode)
- [Select Box Link Field](https://github.com/symphonycms/selectbox_link_field)
- [JIT Image Manipulation](https://github.com/symphonycms/jit_image_manipulation)
- [Export Ensemble](https://github.com/symphonycms/export_ensemble)
- [Debug DevKit](https://github.com/symphonycms/debugdevkit)
- [Profile DevKit](https://github.com/symphonycms/profiledevkit)
- [XSS Filter](https://github.com/symphonycms/xssfilter)

## Finding Extensions

The best places to find extensions, and to check for updates, are [SymphonyExtensions.com][] and the [extension download section][download] of the Symphony website.

## Developing Extensions

- [Contributing to Symphony: Extensions]({{site.baseurl}}/community/developing-extensions.html)
- [How to Develop an Extension]({{site.baseurl}}/guides/tutorials/developing-an-extension.html)

[admin]: {{site.baseurl}}/concepts/admin-interface/
[download]: http://getsymphony.com/download/extensions/
[field]: {{site.baseurl}}/concepts/sections/fields.html
[manage]: {{site.baseurl}}/getting-started/managing-extensions.html
[SymphonyExtensions.com]: http://symphonyextensions.com/
[text]: {{site.baseurl}}/concepts/sections/text-formatters.html
