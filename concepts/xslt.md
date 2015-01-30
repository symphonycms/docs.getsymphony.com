---
title: "XSLT"
weight: 0
description: "XSLT powers Symphony's page templates and utilities, which together comprise the templating layer."
---

#### Overview

XSLT is a rule-based language used to transform <a rel="concept">XML</a>. XSLT powers Symphony’s templating layer, enabling users to write modular, dynamic templates while maintaining complete control over the resulting output. A Symphony project’s <a rel="concept">page templates</a> and <a rel="concept">utilities</a> are XSLT stylesheets.

#### Usage

XSLT is used in Symphony's page templates and utilities.

#### Details

For more information on XSLT, see: <http://www.w3schools.com/xsl/xsl_w3celementref.asp>

#### The Big Picture

XSLT relies on <a rel="concept">XPath</a> to select nodes in an XML source and to perform complex matching and calculations.

XSLT is a widely-adopted open standard recommended by the W3C.

#### Advanced Info

Symphony uses PHP's libxslt extension for XSLT processing. At this time, libxslt only supports XSLT 1.0.
