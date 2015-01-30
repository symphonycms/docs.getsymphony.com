---
title: "Workspace"
weight: 0
description: "The Workspace directory stores project-specific files like data sources, pages, utilities, and uploads."
---

#### Overview

A Symphony project’s Workspace is a directory that contains all project-specific files. By default, the workspace will store <a rel="concept">data sources</a>, <a rel="concept">events</a>, <a rel="concept">pages</a>, <a rel="concept">utilities</a>, and any files that are uploaded via <a rel="concept">fields</a> in an entry. Often, developers will use the workspace directory to store other assets as well, such as CSS and JavaScript files or template images.

#### Usage

As long as the default subdirectories are left intact, users are free to create any desired directory structure within the workspace folder.

A workspace's URL is included as a system <a rel="concept" href="parameters">parameter</a> by Symphony.

#### Details

By default, the system will create and use four subdirectories within the workspace:

<pre><code>
/data-sources
/events
/pages
/utilities</code></pre>

Physical files representing each of the above elements are stored here and can be edited directly in lieu of using the <a rel="concept">admin interface</a>'s editors.

Additional subdirectories can be created as needed. Common practices include creating directories for assets (like `/styles`, `/images`, and `/scripts`) and an `/uploads` folder to serve as a target for <a rel="concept" href="field-types#file-upload">file upload fields</a>.

#### The Big Picture

A Symphony project's workspace contains all of the files that make it unique from other Symphony builds. A "clean" Symphony install contains no workspace—an empty one is generated during installation. The workspace folder is included when creating <a rel="concept">ensembles</a>.

File upload fields must choose folders in `workspace/` as their target.
