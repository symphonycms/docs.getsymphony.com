---
title: "Devkits"
weight: 0
description: "Devkits provide useful developer tools on the front end which facilitate debugging, profiling, and other tasks."
---

#### Overview
Devkits, or Symphony development kits, are <a rel="concept">extensions</a> that provide additional front-end interfaces for authenticated system <a rel="concept">authors</a>. There are two core devkits—the <a rel="concept" href="#debug-devkit">debug devkit</a> and the <a rel="concept" href="#profile-devkit">profile devkit</a>—which expose helpful contextual information for a given front-end <a rel="concept" href="pages">page</a>, including its source <a rel="concept">XML</a>, its <a rel="concept" href="page-templates">page template</a>, any associated <a rel="concept">utilities</a>, the <a rel="concept">parameters</a> available to it, execution and load times, and more.

#### Usage
Devkits can be accessed by appending special GET parameters to the URL of a front-end page. For example, you would visit `http://yoursite.com/?debug` or `http://yoursite.com/?profile` to access your index page's debug and profile devkits, respectively.

Note that the devkit extensions must be installed and enabled in order for the devkit interfaces to be available.

#### Details

The devkit interface contains a link to the page editor for a given page, and additional links for each installed devkit. There are two devkit extensions included with the Symphony core:

##### Debug Devkit

<img src="debug-devkit"/>

The debug devkit, accessed by appending `?debug` to a page's URL, provides access to the following:

- the current parameter pool
- the page's XML source
- each XSLT stylesheet applied (the page template and any utilities included)
- the result output

##### Profile Devkit

<img src="profile-devkit"/>

The profile devkit, accessed by appending `?profile` to a page's URL, provides access to a number of statistics on page execution:

- General Details
    - Engine Initialisation
    - Page creation process started
    - XML Built
    - XML Generation
    - Page Built
    - XSLT Transformation
    - Page creation complete

- Datasource Execution (lists execution time for each data source)

- Full Page Render Statistics
    - Total Database Queries
    - Slow Queries (> 0.09s)
    - Total Time Spent on Queries
    - Time Triggering all Events
    - Time Running All Data Sources
    - XML Generation Function
    - XSLT Generation
    - Output Creation Time
    - Total Memory Usage

- Memory Usage
    - Engine Initialisation
    - Page creation process started
    - memory used to process each datasource
    - XML Built
    - XML Generation
    - Page Built
    - XSLT Transformation
    - Page creation complete
