---
title: "Text Formatters"
weight: 5
description: "Text formatters can be applied to fields to transform or format their content before saving."
---

#### Overview

Text formatters are scripts that can be applied to certain types of <a rel="concept">fields</a> in Symphony to transform or format their content before saving. A set of Markdown text formatters is included in Symphony’s core, and additional text formatters (such as Textile or WYSIWYG editors) are available as extensions.

#### Usage

Text formatters are applied to fields during section creation and editing. If a field's <a rel="concept" href="field-types">type</a> allows for text formatters to be applied, a Text Formatter field will be included in its <a rel="fields#settings-pane">settings pane</a>. <a rel="concept" href="field-types#textarea">Textarea</a> is the only default field type that allows text formatters to be applied to its content.

#### Details

Symphony includes three text formatters by default: Markdown, Markdown Extra, and Markdown Extra plus SmartyPants.
