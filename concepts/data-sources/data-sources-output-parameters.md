---
title: "Output Parameters"
weight: 3
description: "Data Source Output Parameters are set using the results from a data source and enable data source chaining."
---

#### Overview

Data Source Output Parameters are <a rel="concept">parameters</a> whose values are set dynamically by a <a rel="concept" href="data-sources">data source</a> using values from a specified <a rel="concept" href="fields">field</a> in its result entries. Most often, these parameters are then used to <a rel="concept" href="data-source-filters">filter</a> subsequent data sources, a technique known as <a rel="concept">data source chaining</a>.

#### Usage

Data source output parameters can be created in the <a rel="concept" href="data-sources#data-source-editor">data source editor</a>. After a Source has been chosen, select a field in the &#8220;Parameter Output&#8221; dropdown. Once the data source is saved, it will add the output parameter to the <a rel="concept" href="parameters#parameter-pool">parameter pool</a> whenever it is executed.

For details on how to use a data source output parameter to filter another data source, see <a rel="concept">Data Source Chaining</a>.

#### Details

It's important to understand how Symphony's various <a rel="concept">field types</a> work in order to use data source ouput parameters effectively. Some fields will use their <a rel="concept">handles</a> to populate output parameters, while others, like <a rel="concept" href="field-types#select-box-link">Select Box Link</a>, will use the <a rel="concept" href="system-ids">IDs</a> of the <a rel="concept">entries</a> to which they're linked.
