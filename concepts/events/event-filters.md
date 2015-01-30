---
title: "Event Filters"
weight: 2
description: "Event Filters add additional conditions or actions to an event."
---

#### Overview

Event Filters are scripts that, when attached to an <a rel="concept" href="events">event</a>, can define additional conditions for its execution or additional actions to be performed when it is triggered. Event filters are used, for example, to send email notifications and to perform spam-filtering operations. There are three core event filters provided by Symphony; others can be bundled with extensions.

#### Usage

Filters can be added to an event in the event editor. Some filters require additional setup—for example, adding additional form fields to the front-end page.

#### Details

There are three core event filters provided by Symphony:

Filter | Function
------ | --------
Admin Only | Only allows the event be triggered by an authenticated system author.
Send Email | Sends an email to a defined system author when the event is triggered.
Allow Multiple | Allow submission of multiple entries.
