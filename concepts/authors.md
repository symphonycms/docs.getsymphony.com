---
title: "Authors"
weight: 0
description: "Authors can login to the admin interface and manage a project and its content."
---

#### Overview

Authors are your Symphony project’s registered users. They are able to access the <a rel="concept">admin interface</a> and manage content and system settings.

There are two types of authors, each representing a distinct level of system permissions. The first type, "author," is only able to access content sections (though all authors can edit their own author entry). The second type, "developer," has access to all elements of the system.

#### Usage

Authors can be created and edited in the admin interface under `System > Authors`.

Authors lacking developer level permissions are not able to edit their advanced login settings (see below) .

#### Details

<img src="author-editor"/>

Author accounts consist of the following settings:

Setting | Description
------- | -----------
First Name | Author's first name, or given name.
Last Name | Author's last name, or surname.
Email Address | Author's email address (used for password reminders and by the send email <a rel="concept" href="event-filters">event filter</a>).
Username | Username used to log in to the <a rel="concept">admin interface</a>.
User Type | Either `Author` or `Developer`. Used to determine permissions.
Password | Password used to log in to the admin interface.
Allow Remote Login | Checkbox specifying whether to allow direct login without password via a special URL.
Default Section | Entry index where author is directed upon successful login.

#### The Big Picture

The options for an author field are populated using system authors.
