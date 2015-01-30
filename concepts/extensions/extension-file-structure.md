---
title: "Extension File Structure"
weight: 3
description: "The Extension File Structure enables Symphony to detect and load extension files automatically."
---

#### Overview

The Extension File Structure is a set of layout and naming conventions for <a rel="concept" href="extensions">extension</a> files that enables them to be automatically detected and loaded by Symphony.

#### Usage

When creating an extension, simply follow the conventions outlined below.

#### Details

##### Overview

Extensions should be structured as follows. Note that the only required file is extension.driver.php. The remaining directories and files can be included as needed.

<pre><code>
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
    license
    README</code></pre>

##### assets/

Though not actually used for auto-inclusion, placing CSS, JavaScript, and image files in an assets directory is a Symphony convention

##### content/

The files in the content directory are autoincluded and used to render back-end pages. The file content.sample.php would render a page at `/symphony/extension/yourextension/sample`. content.index.php is viewable at `/symphony/extension/yourextension`.

##### data-sources/

Any <a rel="concept">data sources</a> to be provided by an extension must be placed here for auto-inclusion.

##### events/

Any <a rel="concept">events</a> to be provided by an extension must be placed here for auto-inclusion.

##### fields/

Any <a rel="concept">field types</a> to be provided by an extension must be placed here for auto-inclusion.

##### lang/

Any localization dictionaries to be provided by an extension must be placed here for auto-inclusion.

##### lib/

Like the assets folder, the lib folder is not actually used for auto-inclusion but is conventionally used to store custom library files used by the extension.

##### text-formatters/
Any text formatters to be provided by an extension must be placed here for auto-inclusion.

##### extension.driver.php
The extension driver, used to initiate, enable, uninstall, and upgrade an extension and to subscribe to <a rel="concept">delegates</a>. This file is required.

##### license or licence
A text file detailing the license(s) used by the extension.

##### README or README.markdown
The extension's README file. Conventionally contains basic information (extension name, version, and release date), developer information (name, email, and website) and installation and usage notes.

#### The Big Picture
The extension file structure is an important part of Symphony's **Extension API** (forthcoming).
