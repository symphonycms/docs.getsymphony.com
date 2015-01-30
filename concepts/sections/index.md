---
title: "Sections"
weight: 1
description: "Sections model and define the types of content to be managed in a Symphony project."
---

#### Overview

Sections are a Symphony project’s most fundamental building blocks, because they define the types of content that it will manage. Each section provides a model for the content <a rel="concept">entries</a> it will contain, determining their structure by defining the <a rel="concept">fields</a> that will comprise them. 

Unlike many content management systems, Symphony doesn’t make any assumptions about what kinds of content it will be managing or what their structure will be, so creating and defining sections is a completely open-ended process.

#### Usage

Sections are managed in the <a rel="concept">admin interface</a>, under `Blueprints > Sections`. Once a section is created and its sructure defined, content entries can be created in that section.

#### Details

Sections are comprised of a name along with one or more fields of data. A section’s fields give structure to its entries and capture their content. A “Book Reviews” section, for instance, might have fields for “Title,” “Reviewer,” and “Date.”

##### Section Index

<img src="section-index"/>

The section index, located at `Blueprints > Sections`, consists of three columns:

Column | Description
----------- | ----------------------------
Name | The section's name. Clicking the link opens the section editor.
Entries | The number of entries in the section. Clicking the link takes you to the section's entry index.
Navigation Group | The name of the navigation group to which the section belongs.

Bulk operations available: delete, delete entries.

##### Section Editor

<img src="section-editor"/>

The section editor, located at `Blueprints > Sections > Create New` or `Blueprints > Sections > {Section Name}`, consists of two parts: Essentials and Fields.

Essentials define how the section is identified and organized within the system.

Setting | Description | Example
--------- | ---------------- | -------------
Name | The section's name | Projects
Navigation Group | Back-end menu item within which the section will appear | Portfolio
Hide this section... | Checkbox allowing a section to be hidden from the back-end menu | -

Fields allows fields to be added to the section. See <a rel="concept">Fields</a> and <a rel="concept">Field Types</a> for more details.

#### The Big Picture

Sections are a major organizing axis in Symphony, most notably for <a rel="concept">data sources</a> (which fetch, <a rel="concept" href="data-source-filters">filter</a>, and sort data by section) and for <a rel="concept">events</a> (which enable the creation and editing of a section’s entries from the frontend).
