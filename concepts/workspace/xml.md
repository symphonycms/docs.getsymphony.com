---
title: "XML"
weight: 0
description: "XML powers Symphony's data engine and is used to structure content for templating."
---

#### Overview

XML is the markup language used by Symphony to expose content to the templating layer, where it is transformed by XSLT. Symphony’s native use of XML makes it trivially easy to work with feeds, APIs, and other XML data sets, and encourages clean, well-structured coding.

A Symphony <a rel="concept" href="pages">page</a>'s XML source is the basis for the transformations carried out by its <a rel="concept" href="page-templates">template</a> (and any included <a rel="concept">utilities</a>).

#### Usage

A page's XML source is comprised of fragments provided by attached <a rel="concept">data sources</a> and <a rel="concept">events</a>. Adding data to a page's XML source requires creating a data source to fetch it and attaching that data source to the page.

#### Details

The root element of a page's XML source is always `<data>`. Any fragments provided by data sources or events are nested within this root element.

For more details on XML itself, see: <http://www.w3schools.com/xml/xml_whatis.asp>

#### The Big Picture

XML is a widely-adopted open standard recommended by the W3C.
