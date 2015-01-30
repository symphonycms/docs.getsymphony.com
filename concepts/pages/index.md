---
title: "Pages"
weight: 1
description: "Pages constitute a Symphony project's front-end interface and determine its URL structure."
---

#### Overview

Pages are points of interface for the front end of a Symphony project. They template and serve the content being delivered by the system’s data sources, define the URL schemas by which that content can be accessed, and accept user input that can be channeled back into the system via events. Pages, in other words, provide dynamic environments for users to interact with a Symphony project and its components.

Symphony pages are unlike “pages” in many other systems: they are not simply containers for static content and there is not a one-to-one relationship between a page and the content accessible via that page. In fact, a single Symphony page can power an entire browsing interface.

#### Usage

Pages can be managed at `Blueprints > Pages`. Until pages are created, a Symphony project has no front end interface.

Pages are coupled with <a rel="concept">page templates</a>, so creating or deleting a page creates or deletes its page template.

#### Details

##### Page Index

<img src="page-index"/>

The page index, located at `Blueprints > Pages`, consists of five columns: 

Column | Description
---------- | ----------------
Title | The page's title. Clicking the link opens the page editor.
Template | The corresponding page template. Clicking opens the page template editor.
URL | The page's front-end URL. Clicking opens the page on the front-end.
URL Parameters | The <a rel="concept">URL parameters</a> the page accepts.
Page Type | The <a rel="concept" href="page-types">page type(s)</a> assigned to the page.

Bulk operations available: delete.

##### Page Editor

<img src="page-editor"/>

The page editor, located at `Blueprints > Pages > Create New` or `Blueprints > Pages > {Page Title}`, consists of two sections: Page Settings and Page Resources.

Page Settings define the page's URL schema and attributes.

Setting | Description | Example
--------- | ----------------- | ---------------
Title | The human-readable title of the page | Our Products
URL Handle | The handle at which the page will be accessible on the front end | products
URL Parameters | _optional_ Parameters that can be dynamically set in the page's URL | department/category
Parent Page | _optional_ Page beneath which this page should appear | Store (making this example page available at http://yoursite.com/store/products)
Page Type | _optional_ Page types assigned to the page | xml (if our page served an RSS feed, for instance)

Page Resources allow the attachment of events and data sources to the page. 

- Events
- Data Sources

#### The Big Picture

Without pages, <a rel="concept">data sources</a>, <a rel="concept">devkits</a>, <a rel="concept">events</a>, <a rel="concept">page templates</a>, <a rel="concept">parameters</a>, and <a rel="concept">utilities</a> would essentially be rendered useless. Pages provide the environments within which all of these other elements can function and interoperate. Also, without pages, a Symphony project would have no front-end interface and would be entirely inaccessible to the public.
