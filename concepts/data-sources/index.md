---
title: "Data Sources"
weight: 1
description: "Data Sources fetch, filter, and sort data and expose it as XML to pages for templating."
---

#### Overview

Data sources are the pipelines that deliver content to your Symphony project’s front-end interface. This can be internal content (e.g. data pulled directly from your <a rel="concept">sections</a>) or external content (e.g. data from an RSS feed or an XML API). Data sources are attached to <a rel="concept">pages</a>, and the <a rel="concept">XML</a> they provide can be transformed by <a rel="concept">page templates</a>.

There are three different types of data sources. <em>Section-based</em> data sources and <em>system-generated</em> data sources—both of which draw on content from <em>within</em> the Symphony system—are highly configurable, and are capable of <a rel="concept" href="data-source-filters">filtering</a>, sorting, limiting, grouping, and <a rel="concept" href="data-source-chaining">chaining</a> data result sets. They also support pagination, and can use dynamic <a rel="concept">parameters</a> from frontend URLs for filtering and paginating.

<em>Custom XML</em> data sources are valid XML documents that are either static (and stored locally) or dynamic (and fetched from a URI). Their content is not managed within Symphony, but the XML is made available to pages for templating alongside your other content. Because dynamic data sources are fetched on the fly when a page is requested, their content can be cached by Symphony at configurable intervals. A common example of a dynamic custom XML data source is a Twitter RSS feed.

#### Usage

Data sources can be managed in the Components view (`Blueprints > Components`) in the <a rel="concept">admin interface</a>.

A data source's execution cannot be made conditional, except by setting a required URL parameter (see below).

#### Details

##### Data Source Editor

<img src="data-source-editor"/>

All data sources contain the same essential settings:

Setting | Description
------- | -----------
Name | A unique name for the data source.
Source | The source from which data will be drawn.

The rest of the settings available in the data source editor will vary depending on the **Source** chosen, which will fall under one of three types listed above: data from your sections, data made available by the system (i.e. its authors or its navigation structure), or data supplied by custom XML (either locally-stored or fetched from an external URI).

##### Section-based Data Sources

Choosing one of your sections as the source will yield a host of configuration options organized into three categories: “Filter Results,” “Sorting and Limiting,” and “Output Options.”

<table>
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2"><strong>Filter Results</strong></td>
    </tr>
    <tr>
      <td><em>Filter Rules</em></td>
      <td>Add any number of filter rules to the data source. See below for more details.</td>
    </tr>
    <tr>
      <td colspan="2"><strong>Sorting and Limiting</strong></td>
    </tr>
    <tr>
      <td>Sort By</td>
      <td>Select field by which to sort results.</td>
    </tr>
    <tr>
      <td>Sort Order</td>
      <td>Choose <code>ascending</code>, <code>descending</code>, or <code>random</code></td>
    </tr>
    <tr>
      <td>Limit</td>
      <td>Maximum number of results to return. Can accept <a rel="concept">parameters</a>.</td>
    </tr>
    <tr>
      <td>Page</td>
      <td>Page number of results to return. Can accept parameters.</td>
    </tr>
    <tr>
      <td>Required URL Parameter</td>
      <td><a rel="concept" href="url-parameters">URL Parameter</a> required in order for data source to execute.</td>
    </tr>
    <tr>
      <td>Redirect</td>
      <td>Checkbox to specify whether or not a page should redirect to 404 (Page Not Found) if no results are returned.</td>
    </tr>
    <tr>
      <td colspan="2"><strong>Output Options</strong></td>
    </tr>
    <tr>
      <td>Parameter Output</td>
      <td>Choose field with which to populate a <a rel="concept" href="data-source-output-parameters">data source output parameter</a>. Useful for <a rel="concept">data source chaining</a>.</td>
    </tr>
    <tr>
      <td>Group Output</td>
      <td>Field by which to group <a rel="concept">XML</a> results.</td>
    </tr>
    <tr>
      <td>Included Elements</td>
      <td>Select fields to be returned by the data source, and whether or not to include a pagination element. Including pagination info can cause a performance decrease.</td>
    </tr>
    <tr>
      <td>Include Associated</td>
      <td>Checkbox specifying whether or not to include a count of entries associated with each returned entry. Including this count can cause a performance decrease.</td>
    </tr>
    <tr>
      <td>HTML-encode</td>
      <td>Checkbox specifying whether to HTML-encode the results.</td>
    </tr>
  </tbody>
</table>

Adding filter rules to a data source causes it to filter entries based on the content of one or more fields. You could, for example, ask your data source to return all entries in a section called Publications where the Publication Year is 2009. Section-based data sources natively support union, intersection, and enumeration operators, regular expressions, dynamic parameters, and much more, so be sure to fully acquaint yourself with <a rel="concept">data source filters</a>.

##### System-generated Data Sources

Choosing `Authors` as the source yields the same options described above under “Section-based Data Sources” (<a rel="figure" href="data-source-editor-authors">Figure 2</a>). Choosing `Navigation` yields the same filtering options, but “Sorting and Limiting” options are restricted to setting required parameters and configuring the handling of empty result sets. There are no output options for a system-generated navigation data source (<a rel="figure" href="data-source-editor-navigation">Figure 3</a>).

##### Custom XML Data Sources

There are two kinds of custom XML data source: Static XML and Dynamic XML. Choosing “Static XML” as the source yields a large text area which accepts valid XML input (<a rel="figure" href="data-source-editor-static-xml">Figure 4</a>). The XML input is then stored locally and will be provided, as-is, to your page. A data source with its source set to “Dynamic XML,” on the other hand, is accessed via URI, so its content is fetched on the fly (an RSS feed is a good example of dynamic XML). Symphony allows you to use XPath to build the nodeset you want returned by dynamic XML data sources, and you can also declare namespaces and set a caching interval. See Figure 5:

<img src="data-source-editor-dynamic-xml"/>
