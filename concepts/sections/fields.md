---
title: "Field Types"
weight: 2
description: "Field Types define the structure of fields and govern their behavior in capturing and outputting data. "
---

#### Overview

Field Types are definitions governing the structure and behavior of fields in Symphony. They determine how <a rel="concept">fields</a> are rendered in the <a rel="concept">admin interface</a>, what types of data a field can accept, how that data is captured and stored, and how it is formatted and output for use on the front end. Symphony has eight core field types; additional field types are available as extensions.

#### Usage

Field types determine the structure of a field's settings pane when it is added to a <a rel="concept" href="sections">section</a> in the <a rel="concept" href="sections#section-editor">section editor</a>.

#### Details

The are eight core field types in Symphony, and a ninth, Select Box Link, is provided by a default extension.

##### Author

The author field type is represented by a `select` input populated with system authors. Its settings pane provides the following options:

Setting | Description
---------- | --------------
_Global settings_ | See <a rel="concept" href="fields#settings-pane">breakdown</a>.
Allow multiple | Checkbox specifying whether to allow the selection of multiple authors.
Select current | Checkbox specifying whether the author editing the entry should be selected by default.

##### Checkbox

The checkbox field type is represented by a basic `checkbox` input. Its settings pane provides the following options:

Setting | Description
---------- | --------------
_Global settings_ | See <a rel="concept" href="fields#settings-pane">breakdown</a>.
Long Description | Text to be displayed alongside the checkbox in lieu of a label.
Checked by default | Checkbox specifying whether the field should default to checked.

##### Date

The date field type is represented by a basic text input. The format expected by the field is determined by the configuration settings created during installation and found in /manifest.config.php. Its settings pane provides the following options:

Setting | Description
---------- | --------------
_Global settings_ | See <a rel="concept" href="fields#settings-pane">breakdown</a>.
Pre-populate | Checkbox specifying whether the current date should be auto-entered into the field upon entry creation.

##### File Upload

The file upload field type is represented by a `file` input. Its settings pane provides the following options:

Setting | Description
---------- | --------------
_Global settings_ | See <a rel="concept" href="fields#settings-pane">breakdown</a>.
Destination Directory | Where files uploaded with this field will be stored. Select input populated by a list of all the directories under workspace/. Directory must be writeable.
Validation Rule | Regular expressions pattern used to validate the file name.

##### Select Box

The select box field type is represented by a `select` input that can be populated with static values, dynamic values, or both. Its settings pane provides the following options:

Setting | Description
---------- | --------------
_Global settings_ | See <a rel="concept" href="fields#settings-pane">breakdown</a>.
Static Options | A comma-delimited list of values to include in the field's options.
Dynamic Options | List of fields, organized by section, whose content can be used to populate this field's options.
Allow multiple | Checkbox specifying whether or not to allow multiple items to be selected. 

##### Select Box Link
The Select Box Link field type is represented by a `select` input that is populated by entries in a linked section and creates a persistent relationship with the linked entry(ies). Its settings pane provides the following options:

Setting | Description
---------- | --------------
_Global settings_ | See <a rel="concept" href="fields#settings-pane">breakdown</a>.
Options | List of fields, organized by section, whose content can be used to populate this field's options.
Limit | How many of the most recent entries to show as options.
Allow multiple | Checkbox specifying whether or not to allow multiple items to be selected. 

##### Tag List
The tag list field type is represented by a text input that accepts a comma-delimited list of values. It is followed by a dynamically-populated suggestion list. Its settings pane provides the following options:

Setting | Description
---------- | --------------
_Global settings_ | See <a rel="concept" href="fields#settings-pane">breakdown</a>.
Suggestion List | Source of suggested items. Can be content from another field in the system, or values from this field from other entries in the section.
Validation Rule | Regular expressions pattern used to validate the items.

##### Textarea
The textarea field type is represented by a `textarea` input that can apply text formatters to its content. Its settings pane provides the following options:

Setting | Description
---------- | --------------
_Global settings_ | See <a rel="concept" href="fields#settings-pane">breakdown</a>.
Rows | Height of the textarea in rows.
Text Formatter | <a rel="concept" href="text-formatters">Text formatter</a> to be applied to the field's content.

##### Text Input
The text input field type is represented by a basic `text` input. Its settings pane provides the following options:

Setting | Description
---------- | --------------
_Global settings_ | See <a rel="concept" href="fields#settings-pane">breakdown</a>.
Validation Rule | Regular expressions pattern used to validate the input.
