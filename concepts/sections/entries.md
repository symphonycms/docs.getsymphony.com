---
title: "Entries"
weight: 4
description: "Entries represent individual content records in a section."
---

#### Overview

Entries are individual records in a <a rel="concept" href="sections">section</a>, and comprise the bulk of a Symphony project’s data. In a "Blog Posts" section, for example, each individual post would be an entry. Once saved, entries can be retrieved by <a rel="concept">data sources</a> and made available to <a rel="concept">pages</a> for display on the front end.

#### Usage

A section's entries can be created and managed in the <a rel="concept">admin interface</a>. The exact location will depend on the name of the section to which they belong (and that section's <a rel="concept" href="navigation groups">navigation group</a>), but the formula is simple: in the main menu, `{Navigation Group} > {Section}`.

The default view is a table of entries, or an <em>index view</em>. The index view provides a paginated list of the entries in a section, and allows for some bulk editing operations. To select entries in the index view, simply click their table rows. Once entries have been selected, bulk actions are available via the &#8220;With Selected&#8221; dropdown at the bottom right of the table. Available actions include deleting entries and setting the value of checkbox or select box fields.

#### Details

The structure of entries is determined by a section’s fields, but all entries are given a unique numerical <a rel="concept" href="system-ids">system ID</a> and a <a rel="concept" href="system-dates">system date</a> (date of creation). Though hidden, these fields are made available to data sources for sorting, <a rel="concept" href="data-source-filters">filtering</a>, and/or output.
