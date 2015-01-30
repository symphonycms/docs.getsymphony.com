---
title: "Utilities"
weight: 0
description: "Utilities enable the abstraction and reuse of common template functions and markup."
---

#### Overview

Utilities are self-contained, reusable <a rel="concept">XSLT</a> stylesheets that can be included or imported by <a rel="concept">page templates</a> and by other utilities. They are often used to perform common formatting tasks (working with dates and times, for instance) or to render widely-used interface elements (such as a navigation or a footer). 

As a concept, utilities are not unique to Symphony, but are a well established XSLT technique adopted to enable users to create modular, robust templating layers for their Symphony projects.

#### Usage

Utilities can be managed in the <a rel="concept">Components</a> view (`Blueprints > Components`), or by editing the XSLT stylesheet file directly (`workspace/utilities/utility-name.xsl`).

Utilities must be explicitly included by page templates in order to be applied. 

<pre><code>
  &lt;xsl:include href="../utilities/utility-name.xsl"/&gt;</code></pre>

The `../utilities` is necessary when including a utility from a page template because the `pages/` directory is adjacent to the `utilities/` directory in the <a rel="concept">workspace</a>.

Utilities can also be included by other utilities, like this:

<pre><code>
  &lt;xsl:include href="utility-name.xsl"/&gt;</code></pre>

#### Details

##### Utility Editor

<img src="utility-editor"/>

The utility editor is fairly basic. It consists of a single, large text area containing the whole of the XSLT stylesheet. On the right side of the editor is a list of all utilities in a project. Any utilities included in the current stylesheet are highlighted (when the `xsl:include` tag is first added, the text area must lose focus before the highlighting will apply).

#### The Big Picture

Utilities are essential to keeping front-end markup lean and efficient. Any bit of XSLT that is applied across multiple pages is a candidate for being abstracted for reuse as a utility. Symphony's website has a growing <a href="/download/xslt-utilities">library of utilities</a> available for download.
