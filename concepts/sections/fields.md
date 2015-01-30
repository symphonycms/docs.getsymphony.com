---
title: "Fields"
weight: 2
description: "Fields give shape to sections and their entries by defining the data they capture."
---

#### Overview

Fields are containers that capture and store discrete pieces of content. They give structure to <a rel="concept">sections</a> and their <a rel="concept">entries</a>, and are used throughout the system to organize content and to work atomically with data. <a rel="concept">Data sources</a>, for example, use fields to <a rel="concept" href="data-source-filters">filter</a>, sort, and group result entries, and to selectively output and structure their contents.

A field’s <a rel="concept" href="field-types">type</a>—e.g. `textarea` or `date`—determines how it captures data (as a form input in the entry editor), what kinds of data it can store, and how that data is handled.

#### Usage

A section's fields are defined in the <a rel="concept" href="sections#section-editor">section editor</a> (`Blueprints > Sections > Create New` or `Blueprints > Sections > {Section Name}`). A field is represented in the section editor by its <strong>settings pane</strong>.

Once added, fields can be edited, reordered, and deleted in place. It is important to note, however, that once a field has been added it cannot be changed from one field type to another. Sections and their field structures should be planned and tested carefully before entering much content.

#### Details

Each field is an instance of a generic field type which defines its behavior and the structure of its settings pane. There are eight <a rel="concept" href="field-types#core-field-types">core field types</a> in Symphony, with additional field types available as <a rel="concept">extensions</a> (one of which—<a rel="concept" href="field-types#select-box-link">Select Box Link</a>—is included by default).

##### Settings Pane

The structure of a field’s settings pane will vary according to its field type, but nearly all fields share a few common settings:

Setting | Description | Examples
---------- | --------------- | -------------
Label | How the field should be labeled in forms, interface elements, and XML output. | Title, Publish Date
Placement | Where the field input should be displayed in the entry editor. | Main content, Sidebar
Show column | Whether the field should be displayed as a column when viewing entry tables in the admin interface. | -
Make this a required field | Whether the field should require a value in order for entry creation/editing to succeed. | -

#### The Big Picture

Fields and field types determine both the format of a section’s entry editor and its data source output.

Fields of certain types can be used to create relationships among sections (<a rel="concept" href="field-types#select-box-link">Select Box Link</a> is one example).

Fields are used as an axis for <a rel="concept" href="data-source-filters">data source filtering</a> and sorting and to populate <a rel="concept">data source output parameters</a>.
