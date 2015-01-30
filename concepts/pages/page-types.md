---
title: "Page Types"
weight: 3
description: "Page Types enable special handling of pages, and are used to specify a project's home page, error pages, etc."
---

#### Overview

Page Types are a category of meta information that can be added to <a rel="concept">pages</a>, usually to flag them for special treatment on the front end. For example, page types are used to designate the index page (or home page) of your Symphony project, its error pages (such as a 404 page), protected admin pages, the page to be displayed when the site is in <a rel="concept">maintenance mode</a>, and so on.

There are six core page types that receive special treatment from the system, but like most things in Symphony, page types are entirely open-ended. You can assign custom page types on the fly and provide special handling instructions in your templates.

#### Usage

Page types are assigned to pages in the <a rel="concept" href="pages#page-editor">page editor</a> (`Blueprints > Pages > New` or `Blueprints > Pages > {Page Title}`). 

Pages can have more than one type.

#### Details

There are six page types that receive special handling from the system:

Page Type | Description
--------- | -----------
`index` | Designates a page to be the index page for your Symphony project.
`xml` | Serves a page with a content type of `text/xml` instead of `text/html`.
`admin` | Restricts access to a page to authenticated Symphony authors.
`404` | Designates a page to be served as your 404 error (not found) page.
`403` | Designates a page to be served as your 403 error (forbidden) page.
`maintenance`| Designates a page to be served whenever your project is in Maintenance Mode.

In the XML output of a system-generated navigation data source, page types appear as separate `<type>` nodes in a parent `<types>` node:

<pre><code>
  &lt;page handle="home" id="01"&gt;
    &lt;name&gt;Home&lt;/name&gt;
    &lt;types&gt;
      &lt;type&gt;hidden&lt;/type&gt;
      &lt;type&gt;index&lt;/type&gt;
    &lt;/types&gt;
  &lt;/page&gt;</code></pre>
