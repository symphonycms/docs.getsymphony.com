---
title: "Ensembles"
weight: 0
description: "Ensembles bundle an entire Symphony project, including its database and workspace files, into an installable package."
---

#### Overview

Ensembles are packaged copies of a Symphony project. Created from within the <a rel="concept">admin interface</a>, ensembles bundle the system—along with its database and workspace files—into an installable .Zip archive. Ensembles can be used to back up, migrate, or distribute a project. Community-contributed ensembles can be found <a href="/download/ensembles">here</a>.

#### Usage

Ensembles can be created by logging into the admin interface, navigating to `System > Preferences`, and clicking the &#8220;Create Ensemble&#8221; button. Your server will need to have PHP's Zip module enabled.

Ensembles can be installed by following the general installation instructions for Symphony (see <a href="http://www.getsymphony.com/learn/tutorials/view/install-symphony/">"Install Symphony"</a>).

**Note** that before version 2.0 of the [Export Ensemble extension](http://symphonyextensions.com/extensions/export_ensemble/), ensembles did not copy custom database tables, including those created by third-party extensions. Since version 2.0, the Export Ensemble extension does include most tables, but it still do not copy all tables, since some are excluded to avoid the possibility of sharing sensitive data publicly (see the [README](http://symphonyextensions.com/extensions/export_ensemble/) for excluded data, settings and files). It is always wise to maintain a backup of all database tables, so be sure to backup or migrate your SQL separately. To backup the entire database, consider using the [Dump DB extension](http://symphonyextensions.com/extensions/dump_db/).

#### Details

Ensembles are essentially copies of a Symphony project, and so their structure mirrors that of Symphony itself.

#### The Big Picture

Ensembles are a convenient way to package and share a Symphony project. Because Symphony is so open and flexible, there are many possible use cases. A developer, for example, could build a highly customized CMS or web application and package it for distribution and installation with the click of a button. An agency, on the other hand, could use ensembles to scaffold common project types for rapid deployment and development.
