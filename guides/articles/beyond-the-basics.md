---
title: "Beyond the Basics"
weight: 2
description: "Some tips and tricks for getting the most out of Symphony."
author: czheng
published: 2009-11-29
modified: 2009-11-29
---

#### Introduction

This article is for Symphony users who know just enough to realize that they don't know enough. It's for anyone who's got a handle on the basics, but isn't sure they're using the system to its fullest potential. We'll briefly tour some of the concepts and workflows that are essential to getting the most out of Symphony, and along the way we'll reveal a few advanced capabilities that you might not have discovered yet.

#### What You Should Already Know

In order for this article to be helpful, it's important to make sure you're familiar with all the basics covered in the <a href="/learn/beginners/">Beginner's Guide</a>. You need to have a good grasp on core concepts like <a rel="concept">sections</a>, <a rel="concept">data sources</a>, <a rel="concept">pages</a>, and so on. You have to understand what goes into <strong>planning a Symphony project</strong> (article forthcoming), and be comfortable following common <strong>Symphony workflows</strong> (article forthcoming). And you need to make sure you know the fundamentals of <a rel="concept">XSLT</a>. If you've got all that stuff figured out, read on.

#### Planning and Modeling Sections

When you're working on a Symphony project, it's difficult to overstate the importance of starting with a well-designed content model. After all, it's a <em>content</em> management system—the content is why we're here. Not everyone understands what goes into modeling content, though, especially if they're coming from a less flexible CMS. Here are a few things you'll want to pay close attention to:

##### Understanding Field Types

<a rel="concept">Field types</a> are one of the keys to developing smart content models. Not only can a field's type not be changed after it's been added to a section, but the implications of choosing a particular field type will continue to reverberate throughout your project long after you've made the decision. A field's type determines everything from how the data will be formatted and stored in the database to how <a rel="concept">data sources</a> will treat it during <a rel="concept" href="data-source-filters">filtering</a> and sorting and how its contents will be structured when output as <a rel="concept">XML</a>. Knowing the ins-and-outs of every field type available, both <a rel="concept" href="field-types#core-field-types">core field types</a> and those available as <a href="/download/extensions/field-types">extensions</a>, is absolutely essential.

##### Managing Relationships among Sections

Understanding how field types work is especially important when it comes to creating and managing relationships among sections. Though most relationship-creating field types simply store the <a rel="concept" href="system-ids">IDs</a> of related <a rel="concept">entries</a>, their workflows, interfaces, and outputs can be radically different. Some can include a child entry's content in a parent's <a rel="concept">XML</a> output, for example, while others might require a separate <a rel="concept" href="data-sources">data source</a> for that. Some allow associations to be created via the child entry, others via the parent. If your project requires complex relationships among content entries, spend some time experimenting with <a rel="concept" href="field-types#select-box-link">Select Box Link</a>, <a href="/download/extensions/view/20063/">Bi-Link</a>, <a href="/download/extensions/view/20466/">Mediathek</a>, and other relationship-creating field types until you're confident you know which one best fits your needs.

##### Debugging Your Content Model

Once you've modeled your <a rel="concept">sections</a>, do yourself a favor and test them thoroughly before you start pouring in your content. Symphony's front-end <a rel="concept">devkits</a> are invaluable for this sort of thing. Without doing any templating at all, you can review the structure of a section's output, check the format of any <a rel="concept" href="data-source-output-parameters">output parameters</a> you might need to use, and even test to make sure that <a rel="concept" href="data-source-filters">filtering</a> and sorting are going to work as you intend.

#### Working with Data

Of course, the reason to have content is so that you can <em>do</em> something with it. Symphony's <a rel="concept">data sources</a> and <a rel="concept">events</a> are incredibly powerful in this regard—so much so, in fact, that there's quite a bit of functionality that even seasoned users might miss.

##### Getting the Most from your Filters

Basic use of <a rel="concept">data source filters</a> usually involves simple, direct comparison (title = your-entry-title, for instance). But Symphony supports much more powerful filtering. You can use regular expressions, date/number ranges, and even union, intersection, and enumeration operators. Understanding the full scope of data source <a rel="concept" href="data-source-filters#details">filtering options</a>, along with the various <a rel="concept">parameters</a> available, will help you build smarter, more dynamic interfaces.

##### Chaining Data Sources

Another way to add depth and dynamism to your Symphony project's front end is to take advantage of the system's ability to chain data sources, a technique which involves filtering a data source using output from another data source. This enables you, for instance, to fetch both a single entry and a set of entries that are somehow related to it. Read up on <a rel="concept">data source output parameters</a> and explore <a rel="concept">data source chaining</a> more thoroughly to utilize this technique effectively.

##### Enabling Front-End Interactions

Just as data sources give you a powerful mechanism for querying and delivering content to the front end, events make it possible for front-end users to push content back into the system. The most basic use cases are contact forms or simple commenting systems, but Symphony actually makes it possible to build an entire custom publishing interface on the front end. <a rel="concept">Events</a> and <a rel="concept">event filters</a> are pivotal concepts for projects that require lots of user interaction.

#### Templating

Most of the advanced functionality you'll use when templating your front end will come straight out of XSLT and XPath. But Symphony's got a few clever tricks of its own to help you write elegant, flexible templates.

##### Mastering XSLT

One of the most surefire ways to improve your Symphony skills is to immerse yourself in learning the ins and outs of <a rel="concept">XSLT</a> and <a rel="concept">XPath</a>. Advanced topics like recursion and modes can help you craft wickedly clever templates that maximize impact while minimizing code. And if you're going to be outputting HTML or XHTML, Allen's <a rel="article">"HTML Ninja Technique"</a> is required reading. 

##### Manipulating Images on the Fly

One feature designers absolutely love is the ability to resize and crop images on the fly using the <a href="/download/extensions/view/20046/">JIT Image Manipulation</a> extension. Does one of your templates require 100px square thumbnails? No problem. Just specify the dimensions and the cropping/resizing options using a specially-formatted URL in your image's `src` attribute. Symphony will automatically generate the images and even cache them for you. Need to change the size a few weeks later? Just change the dimensions in the URL in your template. Simple as that. It even works on external images.

##### Keeping your Code DRY

In Symphony, both page templates and utilities are simply XSLT stylesheets—two sides of the same coin, so to speak. But there's a key difference to how they're handled by the system. <a rel="concept">Page templates</a> are coupled with <a rel="concept">pages</a>, and they're automatically used when transforming that page's <a rel="concept">XML</a>. <a rel="concept">Utilities</a>, on the other hand, must be explicitly included, and this creates a lot of potential for intelligent abstraction and reuse.

#### Debugging and Optimizing

Chances are you'll spend at least as much time fine-tuning your Symphony project as you do building it in the first place. By adhering to best practices and using the system's powerful debugging and profiling tools to your advantage, you can keep headaches to a minimum and use your development time proactively instead of reactively.

##### Keeping Data Sources Lean

Executing <a rel="concept">data sources</a> and building XML from their results is a common performance bottleneck for many Symphony projects. Fortunately, avoiding these problems is quite simple. First, be sure your data sources only output the content you need to build a specific page view, and don't include pagination information if you don't intend to use it. Second, plan your front-end carefully so that you don't have pages executing data sources that are only used some of the time. Setting a required URL parameter can be helpful in these scenarios. Finally, use the <a rel="concept" href="devkits#profile-devkit">profile devkit</a> to monitor your pages' performance and identify potential trouble spots.

##### Getting the Most out of Devkits
Symphony's front-end devkits can help you troubleshoot and optimize almost any part of your project, whether by verifying a data source's <a rel="concept">XML</a> output, checking the <a rel="concept" href="parameters#parameter-pool">parameter pool</a>, or reviewing all the XSLT stylesheets being applied to a page's content. <a rel="concept" href="devkits#debug-devkit">Debug Devkit</a>'s 1.0.4 release also introduces the ability to dynamically test <a rel="concept">XPath</a> expressions and see which nodes they match, which can eliminate lots of guesswork from your templating workflow.

#### Conclusion

This article hasn't delved too deeply into any single topic, but hopefully it's given you some helpful pointers, along with a sense of where you might look to deepen your knowledge and continue honing your skills. It may seem like there's a lot to take in, but in reality the path to Symphony mastery is not a very difficult or arduous one. It consists of only two steps: study, and practice.

Off you go...
