---
title: "URL Parameters"
weight: 5
description: "URL Parameters enable pages to capture and utilize parameters set dynamically in their URLs."
---

#### Overview

URL Parameters are <a rel="concept">parameters</a> whose values are set dynamically in a page’s URL, and can be accessed by its <a rel="concept" href="page-templates">template</a> and its <a rel="concept">data sources</a>. This makes pages incredibly dynamic, enabling a single page to power an endless number of views. 

This very page, for example, sets a parameter in the last bit of its URL (`url-parameters`), which is then used to <a rel="concept" href="data-source-filters">filter</a> a data source that fetches the appropriate entry from the &#8220;Concepts&#8221; section. Every individual Concept view on this site is thus powered by a single page.

#### Usage

URL Parameters are defined in the <a rel="concept">admin interface</a>, using the <a rel="concept" href="pages#page-editor">page editor</a> (`Blueprints > Pages > New` or `Blueprints > Pages > {Page Title}`). Any number of URL parameters may be entered in the &#8220;URL Parameters&#8221; field, referenced by name and separated by forward slashes:

<pre><code>
  param1/param2/param3</code></pre>

Parameter values are set dynamically when the page is called with additional values in its URL:

<pre><code>
  http://yoursite.com/yourpage/value1/value2/value3</code></pre>

Within the context of that page, the parameters are then available to be used like any other parameter. See <a rel="concept" href="parameters#usage">Parameters, Usage</a> for details.

##### GET Parameters

Symphony will add GET parameters to a page's <a rel="concept" href="parameters#parameter-pool">parameter pool</a> as well, though they are given a prefix. Appending `?greeting=hello` to a page's URL will add a parameter called `$url-greeting` to the parameter pool, with a value of 'hello'.

##### Subpages

Note that subpage <a rel="concept">handles</a> will override URL parameters, so in the example above, if a subpage of `yourpage` were created and given the URL handle `page2`, Symphony would interpret `http://symphony.demo/yourpage/page2` as a request for the subpage, and not as an assignment of the string `page2` to the URL parameter `param1`.

#### Details

URL parameters are sanitized when they're pulled into the system. Spaces, for instance, are replaced with plus signs (and not trimmed, so consecutive spaces will result in multiple plus signs). Also, case is preserved.

#### The Big Picture

URL parameters are an integral part of building dynamic interfaces with Symphony. 
