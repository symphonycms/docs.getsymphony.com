---
title: "Admin Interface"
weight: 0
description: "Symphony's Admin Interface, or back end, enables authors to manage content and system settings."
---

#### Overview

The admin interface, often referred to as the "back end," is a Symphony project's primary control panel. Once logged in, <a rel="concept">authors</a> can use the admin interface to set up and configure a project, manage its structure and content, install <a rel="concept">extensions</a>, and perform other tasks.

#### Usage

Registered authors can log into the admin interface at `http://yoursite.com/symphony`.

#### Details

<img src="admin-interface"/>

Symphony's UI is designed to be clean and functional. A title bar (1) identifies the project. A simple, horizontal menu (2) allows you to navigate through the back end. The main content area (3) is used to display edit forms, entry tables, and the like. Finally, the footer (4) includes links to some basic account utilities.

Functionally speaking, the admin interface provides access to three basic areas:

The first items in a Symphony project's menu enable management of content <a rel="concept">entries</a>. The names of these menu items are determined by a project's visible <a rel="concept">sections</a>, and by the <a rel="concept">navigation groups</a> to which those sections belong.

These are followed in the menu by a **Blueprints** item (<a rel="figure" href="blueprints-menu">Figure 2</a>), where a project's architecture—namely, its <a rel="concept">pages</a>, <a rel="concept">events</a>, <a rel="concept">data sources</a>, <a rel="concept">utilities</a>, and <a rel="concept">sections</a>—can be defined and configured.

Finally, a **System** menu item (<a rel="figure" href="system-menu">Figure 3</a>) enables administration of <a rel="concept">authors</a>, system preferences, and <a rel="concept">extensions</a>.

Note that <a rel="concept">extensions</a> can add to or alter this default navigation schema. Only authors with a user type of "developer" will have access to the Blueprints and System areas.
