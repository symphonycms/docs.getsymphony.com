---
title: "Extensions"
weight: 1
description: "Extensions add specialized functionality to the lean, mean Symphony core."
---

#### Overview

Extensions are add-ons that can provide additional functionality for your Symphony project. Some more common uses for extensions include providing additional <a rel="concept">field types</a> and <a rel="concept">text formatters</a>, enhancing the <a rel="concept">admin interface</a>, and even bundling entirely new features. Symphony’s open **Extension API** (forthcoming) makes it easy for developers to contribute new extensions.

#### Usage

Extensions must be placed in the `extensions/` folder of a Symphony installation in order to be made available to the system.

They can be managed in the admin interface, under `System > Extensions`. Individual or bulk management is possible by selecting extensions and using the "With Selected" dropdown to Enable, Disable, or Uninstall.

#### Details

There are seven default extensions:

Extension Name | Description
-------------- | -----------
<a rel="concept" href="devkits#debug-devkit">Debug Devkit</a> | Provides front-end debugging interface via the ?debug param.
Export Ensemble | Enables the creation of <a rel="concept">ensembles</a> in the admin interface.
<a rel="concept" href="field-types#select-box-link">Select Box Link</a> field | Field type that enables the creation of persistent relationships between section entries.
<a rel="concept">JIT Image Manipulation</a> | Enables on-the-fly manipulation of images via specially formed src URLs.
<a rel="concept">Maintenance Mode</a> | Enables maintenance mode.
Markdown Text Formatter | Provides Markdown text formatter which can be applied to text area fields.
<a rel="concept" href="devkits#profile-devkit">Profile Devkit</a> | Provides front-end profiling interface via the ?profile param.

#### The Big Picture

Extensions can provide all kinds of features for a Symphony project. The Symphony website hosts a <a href="/download/extensions">library of extensions</a> with far-ranging capabilities. Among other things, extensions can provide custom <a rel="concept">data sources</a>, <a rel="concept">events</a>, field types, text formatters, localization dictionaries, and more.
