---
title: "Page Templates"
weight: 2
description: "Page Templates transform the XML provided to a page by its data sources."
---

#### Overview

Page Templates are <a rel="concept">XSLT</a> stylesheets that are coupled with a Symphony project’s <a rel="concept">pages</a> and are used to transform the <a rel="concept">XML</a> provided by the page’s <a rel="concept">data sources</a>. Page templates are most often used to output XHTML, but they can also output other formats such as RSS-, Atom-, or SOAP-flavored XML, or non-XML formats like CSS and JavaScript.

#### Usage

Page templates are automatically generated whenever a page is created. They can be edited either using the page template editor in the <a rel="concept">admin interface</a> or by editing the XSLT stylesheet file directly.

In the admin interface, the page template editor can be accessed by clicking the template's file name in the "Templates" column of the <a rel="concept" href="pages#page-index">Pages index</a> view (`Blueprints > Pages`), or directly from the corresponding page's edit form (by clicking the blue "Edit Template" button).

#### Details

Page templates must be well-formed XSLT stylesheets.

##### Page Template Editor

<img src="page-template-editor"/>

The page template editor is fairly basic. It consists of a single, large text area containing the whole of the XSLT stylesheet. On the right side of the editor is a list of all <a rel="concept">utilities</a> in a project. Any utilities included in the current stylesheet are highlighted (when the xsl:include tag is first added, the text area must lose focus before the highlighting will apply).

#### The Big Picture

Page templates can dynamically include <a rel="concept">utilities</a> by calling them at the beginning of the stylesheet, before any xsl:templates are declared:

<pre><code>
  &lt;xsl:include href="../utilities/utility-name.xsl" /&gt;</code></pre>
