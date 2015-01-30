---
title: "Data Source Chaining"
weight: 0
description: "Data Source Chaining enables a data source to be filtered using the results provided by another data source."
---

#### Overview

Data Source Chaining is a technique allowing you to filter the results of a <a rel="concept" href="data-sources">data source</a> using the output of a previously executed data source on the same page. Using this technique, multiple data sources can be “chained” together, each depending on the results of the one before, adding quite a bit of dynamism to your Symphony project’s <a rel="concept">pages</a>. Data source chaining is often used to return a principal entry and then fetch other entries that are related to it in some way.

#### Usage

Data sources can be chained in two simple steps: a primary data source is set up to have one of its fields populate a <a rel="concept" href="data-source-output-parameters">data source output parameter</a>, then a secondary data source uses that parameter in one of its <a rel="concept" href="data-source-filters">filters</a>.

Data source chains can be one-to-many in either direction. Several dependent data sources can be chained to the same primary data source, and a single dependent data source can filter on results from multiple primary data sources.

#### The Big Picture

Data source chaining is a crucial technique even for fairly basic projects, but it is often overlooked by beginners because there are workarounds that can approximate the same functionality. It's possible, for example, to return two full sets of entries in the <a rel="concept">XML</a> and then use <a rel="concept">XSLT</a> to perform matching and filtering. But often the most expensive aspect of front-end page generation in Symphony is the XML build time, so it's far more efficient to return the first result set and then use data source chaining to filter the second, keeping unwanted entries out of the XML altogether.

#### Advanced Info

Symphony autogenerates a dependency list for data sources created using the admin interface's data source editor. For custom data sources, however, this list may need to be manually created or edited. A custom data source called "Secondary," for example, that was chained to a data source called "Primary," would need to define the following In its `__construct()` function:

<pre><code> $this->_dependencies = array('$ds-primary');</code></pre>
