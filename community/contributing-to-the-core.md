---
title: "Contributing to Symphony: Core"
short_title: Core Development
weight: 0
description: "Symphony is an open source product under the MIT license, meaning that we are very much open to contributions from our users and the wider community. Before you start, there's a couple of things you might like to know."
---

## Our Issue Tracker

All Symphony's issues are tracked on our [issue tracker](https://github.com/symphonycms/symphony-2/issues). For a better understanding of the tags used on the tracker, [check out our handy reference guide](https://github.com/symphonycms/symphony-2/wiki/Issue-Tracker-Tag-Reference). All issues are open for contribution, but if there is already a user assigned it's probably best to check in with them first to see if they'd like a hand.

## Roadmap

Watch this space, Symphony does not currently have a publicly available roadmap. While there are ideas scattered throughout the issue tracker and others that are discussed offline, we have yet to formalise this into a roadmap. At the moment, we make use of Github milestones to add _short_ notes about releases but this is something we will rectify in future!

## Test cases

Symphony does not have a unit testing suite. This is something that we would really love to implement. Think you can help? Let us know! For the moment, the [Symphony Tests](https://github.com/symphonists/symphony_tests) extension has some basic test cases. Feel free to expand on these!

## What server specifications should I be aiming for?

At the time of writing, the latest version of Symphony should work on PHP5.2. Symphony 2.4 will [drop support for PHP 5.2](http://getsymphony.com/discuss/blog/entry/a-short-note-about-php52-support/) and focus on PHP5.3+. Symphony is built and tested on Apache and due to our limited resources, we don't wish to expand into Windows territory anytime soon.

### Pull Requests

Great, you've made a fix or added something new? To make things easier for everyone ensure that your are submitting your pull request against the `integration` branch, which contains the bleeding edge code for Symphony. The `master` branch is the last full official release (not Betas or RCs).

1.  Create a new branch for each separate issue you want to work on, remembering to use a descriptive name
  
    git branch your-branch-name integration

2.  When you are ready to be famous, rebase the `integration` branch back into the branch you have worked on. This will ensure your work sits on top of the current `integration` branch and is not intertwined between multiple commits. For a bonus you might like to squash your work into fewer commits!

    git rebase -i integration

3.  Publish your branch to your fork on Github and open up a Pull Request (remember `integration` ;))

    git push your-fork your-branch-name

## Code formatting

### Commenting

We use PHPDoc and JSDoc to comment the Symphony core, so please comment all new functions and classes accordingly. We use a fork of PHPDoctor to [generate](https://github.com/symphonycms/symphony-2/wiki/Creating-API-Documentation) the [API Docs](http://getsymphony.com/learn/api/2.3.1/). This is an example PHPDoc comment:

  /**
   * Given a string (expected to be a URL parameter) this function will
   * ensure it is safe to embed in an XML document.
   *
   * @since Symphony 2.3.1
   * @param string $parameter
   *  The string to sanitize for XML
   * @return string
   *  The sanitized string
   */
  public static function sanitizeParameter($parameter) {
    return XMLElement::stripInvalidXMLCharacters(utf8_encode(urldecode($parameter)));
  } 

If you are adding a new class or function, please add a `@since` attribute, (`@since Symphony 2.3.2`) so that we can accurately document the Symphony API per version.

When documenting `@param` or `@return` use the full variable type for consistency, `integer` vs `int`, `boolean` vs `bool` etc.

### Deprecation policy

We aim to maintain extension compatibility between all minor versions (2.3.1, 2.3.2, 2.3.x, etc.) except in rare circumstances. Any deprecations should be marked in the appropriate comment block, eg. `@deprecated This function will be removed in Symphony 2.4. Use PageManager::resolvePageFileLocation`. Depending on the complexity of the code that has been refactored, deprecations usually occur for the next scheduled major release.

### Code style

In [the works](https://github.com/symphonycms/symphony-2/issues/859) to be officialised, but generally speaking:

- hard tabs
- braces on the same line as the condition/method
- `else if` blocks on a new line
- single return between function methods
- `camelCase` method names

Do you know [PHP Codesniffer](http://pear.php.net/package/PHP_CodeSniffer/)? We'd love to setup a coding style (probably PSR based) and use Codesniffer to help enforce it. [View forum discussion](http://getsymphony.com/discuss/thread/88539/1/)



If anything is missing from here, please add it, or create an issue to elevate it to someone who can!
