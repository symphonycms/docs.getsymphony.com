---
title: "Navigation Groups"
weight: 6
description: "Navigation Groups allow Sections to be grouped together in the Symphony admin interface."
---

#### Overview

Navigation Groups are an attribute of <a rel="concept">sections</a> that define the menu item under which a section will appear in the <a rel="concept">admin interface</a>. 

For example, a Symphony project with sections like “Customers,” “Vendors,” “Invoices,” and “Expense Reports” might place the first two sections in a navigation group called “Contacts” and the following two in one called “Finances.” The resulting menu hierarchy would look like <a rel="figure" href="navigation-groups-example">Figure 1</a>.

#### Usage

When creating or editing a section, enter the name of the desired navigation group into the Navigation Group field.

Sections with the same navigation group will be listed together in a submenu. If the navigation group entered does not yet exist, a menu item will be created for it.

Note that if all of the sections in a navigation group are hidden, that navigation group will not appear in the menu.

#### The Big Picture

Navigation groups are only used to group sections in the admin interface. They do not affect the structure of sections or <a rel="concept">entries</a>, and are not reflected in any front-end output.
