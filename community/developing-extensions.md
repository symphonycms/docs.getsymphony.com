---
title: "Contributing to Symphony: Extensions"
short_title: Extension Development
weight: 5
description: "Give back to the community by making Symphony more awesome."
---

The [core philosophy][tao] of Symphony's development is to keep the core simple and to keep the systems it uses discrete. This is why all but the basic functionality—the design pattern that makes Symphony distinct from another CMS—resides in extensions, and why so few extensions are bundled with the core. Installing and maintaining extensions is an easy way to make your Symphony build powerful while keeping it flexible.

Developing new extensions, or maintaining and improving existing ones, is a great way to begin contributing to the Symphony community if you're not ready, or interested, in [working on the core][core]. You'll get a better idea of how Symphony is structured, how it works, and you'll make connections with other Symphony users.

## Look Around

Someone else might have built an extension that already serves your needs. Check [SymphonyExtensions.com][] or the [download section][download] of the website, or ask around in the [forums][]. Even if you can't find an extension that matches your exact use case, you might find one you can fork and use as a template for your extension. Or, if you find an unmaintained or abandoned extension, you could take it over and improve it rather than starting from scratch.

## Plan It

Once you've determined that you want to build a new extension, start by determining *how* your extension is going to accomplish its goal. That is:

- Do you need to provide custom [data sources][]? Custom [events][]?
- Will you need to make custom backend pages?
- Is your extension going to bundle an external library or rely on an API?

## Build It

We have a [tutorial on developing extensions][tutorial] that walks you through how to create a simple extension from scratch. You should also look at the source code of other extensions out there, particularly those that are similar to what yours will do.

### Other Useful References

- [Coding Style Guide]({{site.baseurl/community/coding-style-guide.html}})
- [Symphony API](http://getsymphony.com/learn/api/)
- [GitHub organization](https://github.com/symphonycms/)

## Describe It

Make sure your extension has a valid `extension.meta.xml` file, as per the [Symphony Extension Metadata Schema][schema]. This will let Symphony and other APIs automatically load information about your extension. You need this even if you don't plan on publishing your extension. Make sure you note:

- the version(s) compatible with your extension;
- any special installation or download instructions; and
- whether the extension is considered stable ("released"), experimental, or unmaintained.

For humans, you'll want to make sure there is a `README` file with equivalent information.

You should also choose a license for your extension. Symphony uses the [MIT License][mit], so we recommend that—plus, it's short and easy to add. You can even just copy it from Symphony and change the copyright information at the top. However, you are not required to use this license—but you should make it clear what license your code is under, so others are aware of how they can make changes.

## Push It
So you built an extension! Congratulations. Sometimes you'll only need an extension for a very narrow case, so maybe others won't find much use in it. However, if you think you're ready to make your extension public, here's the best way you can share:

1. Publish the extension as a repo on GitHub.
1. Go to [SymphonyExtensions.com][], sign in with your GitHub account, and add a new extension using the repo you just published.
1. (Optional) Announce your new extension on the [forums][] (and ask for feedback!).
1. Respond to issues and pull requests through GitHub. Your `master` branch should always represent a "stable" build of the extension. You may or may not want to maintain a public `integration` branch for ongoing development, though it's recommended.

While you certainly don't have to use Git and GitHub, this is where ongoing Symphony development discussions happen, so it is the best way to integrate with the community and stay in the loop.

[core]: {{site.baseurl}}/community/contributing-to-symphony.html
[data sources]: {{site.baseurl}}/concepts/data-sources/
[events]: {{site.baseurl}}/concepts/events/
[forums]: http://getsymphony.com/discuss/
[mit]: https://github.com/symphonycms/symphony-2/blob/master/LICENCE
[schema]: http://symphonyextensions.com/schemas/extension/1.0/
[SymphonyExtensions.com]: http://symphonyextensions.com/
[tao]: {{site.baseurl}}/guides/articles/the-tao-of-symphony.html
[tutorial]: {{site.baseurl}}/guides/tutorials/developing-an-extension.html
