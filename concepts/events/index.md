---
title: "Events"
weight: 1
description: "Events facilitate advanced front-end interactions such as data submission."
---

#### Overview

Events are scripts that, when attached to <a rel="concept">pages</a>, will trigger and carry out an action if certain conditions are met. Symphony’s built-in event editor facilitates the creation of front-end saving events, which transmit data to a <a rel="concept" href="sections">section</a> from the front end when a form is submitted (a commenting system is a good example). It is possible, however, to write other kinds of custom events using Symphony's <strong>events API</strong> (forthcoming).

Filters can be attached to events to add additional conditions (e.g. only authors may trigger the event) or secondary actions (e.g. send an email when the event is triggered).

#### Usage

Events can be accessed in the <a rel="concept">Components</a> view (`Blueprints > Components`).

Once an event has been created, the event editor will display instructions and sample code for enabling front-end submissions.

Events must be attached to pages in order to be enabled.

#### Details

##### Event Editor

<img src="event-editor"/>

Events are created and edited using Symphony's event editor, a simple form with only three settings: 

Setting | Description | Examples
------- | ----------- | --------
Name | A custom name for the event | `Save Comment`
Source | The section to which the event will submit data | `Comments`
Filter Rules | <a rel="concept">Event filters</a> to be attached to the event | `Send Email`

#### The Big Picture

Basic events are instrumental in enabling user interaction on the front end. Custom events have a broader scope, however, because anything scriptable in PHP can be triggered during page execution. Events can be provided by <a rel="concept">extensions</a>. 
