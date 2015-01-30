---
title: "The Tao of Symphony"
weight: 1
description: "The simple philosophy that guides Symphony's development."
author: "allen, czheng"
published: 2009-11-23
modified: 2009-11-23
---

It's the little things that matter. This is as true of software as it is of life. The experience of it, how it flows and where it takes you, comes not from some grand design but from little things&#8212;from a symphony of tiny, everyday decisions.

<blockquote>
<p>&#8220;Plan the difficult while it is still easy, do the great while it is still small.&#8221;<br />
<cite>Laozi, <em>Dao De Jing</em>, Chapter 63</cite></p>
</blockquote>

When you develop software, especially open source software, you juggle lots of competing demands. There are always improvements to be made, problems to be solved, features to be built. As a project and its community grow, these mounting pressures can quickly send development spiraling toward inconsistency and bloat, and toward a future hampered by conflicting goals and unweidly code.

For us, every bugfix, every line of code, involves decisions. And we believe that every one of those decisions is an important one. Following a coherent development philosophy has made most of our decisions easy, and has kept the small problems from ever becoming big ones.

This is philosophy with a small _p_, by the way. Not a set of grand proclamations, just a way of thinking about everyday problems. And for us, it comes down to five straightforward principles:

#### Granularity

_Don't make large and unweildy what can be kept small and agile._ Just supply the instruments, and let the user decide how their solution should be composed.

In Symphony, this means that when users design a data structure, for example, they begin with the most basic unit of data&#8212;the <a rel="concept" href="fields">field</a>. This approach also applies to the system as a whole. All of Symphony's building blocks are discrete, configurable components, from the data layer to the templating layer and everything in between.

#### Transparency

_For users, clarity is more helpful than magic._ There's a fine line between convenience and obstruction, and often the "coolest" features turn out to be the most troublesome. Users should be able to see, understand, and control the workings of their system.

Sometimes this means exposing a bit more complexity than users are used to. But it also means giving them more power and more flexibility. In the templating layer, for instance, knowledge of <a rel="concept">XSLT</a> is required, but with that knowledge comes all of the capabilities of the language, and in the end not one bit of markup is rendered that isn't user-defined.

#### Simplicity

_The simplest answer is almost always right_, because it has the greatest number of other answers behind it. Opting for simplicity makes it just as easy to turn back or change direction as it is to keep going.

This is most obvious in the commitment to keep Symphony's core as lean as possible, with most non-essential features split out as <a rel="concept">extensions</a>. This makes it easier for core functions to improve and evolve over time, and for development focus to be more fluid and responsive.

#### Standards

_Embrace the best solution, even when it's not yours._ The reward for users will be twofold: a better, more open system and a more valuable skillset.

Symphony is passionate about standards&#8212;technologies that are open, widely used, and future-proof. For us and for our users, the benefits are countless. Adopting <a rel="concept">XML</a> and <a rel="concept">XSLT</a> as core languages, for example, means that the knowledge our users gain when using the system is widely transferable. It also means that Symphony is inherently interoperable with tons of XML-based technologies, like RSS, Atom, SOAP, and so on.

#### Evolution

_Look ahead, not back._ Though maintaining compatibility is important, legacy support should not hinder technological progress. Users benefit more from improvement than they do from stability.

Symphony 2, for example, broke backward compatibility with Symphony 1, but resulted in a more elegant, more intelligent system. Symphony 3 will likely someday follow suit. Though such transformations are never easy, they undoubtedly improve the software and grow the community&#8212;both things that users can be happy about.

#### Conclusion

Symphony is certainly not a perfect reflection of these principles, but in the end, it doesn't have to be. Our attempt to follow this simple development philosophy has given the system an identity, kept it elegant and true to its purpose, and inspired loyalty and commitment from a community full of talented developers. Sometimes it's nice how the little things add up. 
