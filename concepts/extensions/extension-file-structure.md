---
title: "Extension File Structure"
weight: 3
description: "How Symphony detects and loads extensions automatically."
---

The Extension File Structure is a set of layout and naming conventions for [extensions]({{site.baseurl}}/concepts/extensions/) that enables them to be automatically detected and loaded by Symphony. You must follow these conventions when creating an extension.

## Directory Structure

Extensions should be structured as follows. Note that the only required files are `extension.driver.php` and `extension.meta.xml`. The remaining directories and files can be included as needed.

~~~
  yourextension/
    assets/
        sample.js
        sample.css
    content/
        content.index.php
        content.sample.php
    data-sources/
        datasource.sample.php
    events/
        event.sample.php
    fields/
        field.sample.php
    lang/
        lang.de.php
        lang.es.php
    lib/
        yourphplibs.php
    text-formatters/
        formatter.sample.php
    extension.driver.php
    LICENSE
    README
~~~

### assets/

Though not actually used for auto-inclusion, placing CSS, JavaScript, and image files in an assets directory is a Symphony convention.

### content/

The files in the `content` directory are autoincluded and used to render back-end pages. The file content.sample.php would render a page at `/symphony/extension/yourextension/sample`. content.index.php is viewable at `/symphony/extension/yourextension`.

### data-sources/

Any [data sources]({{site.baseurl}}/concepts/data-sources/) to be provided by an extension must be placed here for auto-inclusion.

### events/

Any [events]({{site.baseurl}}/concepts/events/) to be provided by an extension must be placed here for auto-inclusion.

### fields/

Any [fields]({{site.baseurl}}/concepts/sections/fields.html) to be provided by an extension must be placed here for auto-inclusion.

### lang/

Any localization dictionaries to be provided by an extension must be placed here for auto-inclusion.

### lib/

Like the `assets` folder, the `lib` folder is not actually used for auto-inclusion but is conventionally used to store custom library files used by the extension.

### text-formatters/
Any [text formatters]({{site.baseurl}}/concepts/sections/text-formatters.html) to be provided by an extension must be placed here for auto-inclusion.

### extension.driver.php
The extension driver, used to initiate, enable, uninstall, and upgrade an extension and to subscribe to [delegates]({{site.baseurl}}/concepts/extensions/delegates.html}}. This file is required.

### extension.meta.xml
An XML file that follows the [Symphony Extension Metadata Schema](http://symphonyextensions.com/schemas/extension/1.0/) to provide information about the extension, its version history, and its release notes. Both Symphony itself and other APIs, like the one at [SymphonyExtensions.com], use this.

### LICENSE or LICENCE
A text file detailing the license(s) used by the extension. Note that Symphony uses the [MIT License](https://github.com/symphonycms/symphony-2/blob/master/LICENCE), so it is recommended (but not required) that you use the same or a compatible license.

### README (or README.markdown, or README.md)
The extension's README file. Conventionally contains basic information (extension name, version, and release date), developer information (name, email, and website) and installation and usage notes. Because most Symphony extensions live on GitHub, Markdown is the conventional way to format these files but is not a requirement.
