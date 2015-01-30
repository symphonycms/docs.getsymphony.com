---
title: "Data Source Filters"
weight: 2
description: "Data Source Filters can use parameters, advanced operators, regular expressions, and normal values to filter results."
---

#### Overview

Data Source Filters are rules used by a <a rel="concept" href="data-sources">data source</a> to filter the <a rel="concept">entries</a> it fetches from a <a rel="concept" href="sections">section</a>. The rules are field-based, meaning each rule checks against the content of a single <a rel="concept" href="fields">field</a>. Data Source filters are analogous to SQL’s WHERE clauses, defining the conditions you want matched in order for an entry to be returned. If all of a data source's filters evaluate to `true` for a given entry, it will be included in the result set.

#### Usage

Filters are added to a data source in the <a rel="concept" href="data-sources#data-source-editor">data source editor</a>.

When adding multiple filter rules to a data source, note that _all_ filters will have to return `true` in order for an entry to be included in the results. In other words, the filter rules are joined with `AND` rather than `OR`. 

If a filter pattern contains only a <a rel="concept" href="parameters">parameter</a>, and that parameter isn't set when the data source is executed, the filter rule will be ignored and the data source will execute as if the filter didn't exist.

#### Details

A data source filter rule consists of a field and a filter pattern against which the field's content is matched. The field is selected from a dropdown of all fields in the current section. The pattern is entered into a text input, and can accept any combination of the following kinds of input:

Input | Description | Examples
----- | ----------- | --------
Literal values | Words, phrases, or numbers to be matched. | `my-entry-title`, `2009-11-30`
Parameters | <a rel="concept">Parameters</a>, which must appear inside curly braces to signal that they need to be evaluated. | `{$param}`
Parameter Enumerators | Default value if a parameter is not set | `{$color:red}`
Union Operator | Comma to delimit items in a set of possible matching values joined by OR. | `red, blue, green`
Intersection Operator | Plus signs to delimit items in a set of required matching values joined by AND. | `red+blue+green`
Range Operators | The keyword _to_, or the key phrases _earlier than_ and _later than_, used to match numbers and dates. | `later than {$today}`, `10 to 100`
Regular Expressions | The _regexp:_ keyword followed by a MySQL regexp pattern. | `^b`

The above can be mixed and matched, meaning patterns like the following are possible:

- `{$color:black}-mens-fleece`
- `earlier than {$today}`
- `regexp: {$param}s?`

#### The Big Picture

Data source filters and parameters are each at their most powerful when used together. The combination of the two is essential for building a dynamic Symphony project.
