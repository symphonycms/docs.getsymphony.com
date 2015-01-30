---
title: "HTML Ninja Technique"
weight: 6
description: "When you get HTML in your XML, how do you modify the HTML markup before throwing it to the output? This article answers this problem by showing you the *HTML Ninja Technique*"
---

It has been known in the Symphony universe that when you want to output your content in XSLT, you do so with the `<xsl:copy-of>` instruction. For the most part, it serves the public well, but for those who crave power, fame and fortune would do well to learn the ninja technique I'm about to show you.

### The limitations of xsl:copy ###

The problem with `<xsl:copy>` and `<xsl:copy-of>` is that it's useful only if you don't need to modify its content. Let's take a look at a sample XML that will be used throughout this article:

  <body>
    <h3 id="tips">Ninja 101</h3>
    <p>Ninjas are <em>not</em> about killing, it's about devotion.</p>
    <p>You will do well to heed to the following. Learn to:</p>
    <ul class="skills">
      <li>Conceal</li>
      <li>Strafe</li>
      <li><a href="#tango">Tango</a></li>
    </ul>
    <p>Only a true ninja can summon the courage to sing karaoke in public.</p>
  </body>

Using `<xsl:copy-of select="body/*"/>` will display the above verbatim to your output and this leaves no room to modify the source. So, we need a fresh approach to this problem.

### Something more "applicable" ###

Here are a few things we know:

* XSLT is naturally good at matching nodes. Thankfully valid XHTML elements are just that; nodes.
* Nodes may include either text and/or other elements.
* Nodes may have one or more attributes.

With that in mind, let's set out to produce code *alpha*.

Firstly we need to change from using `<xsl:copy-of/>` to the new and improved way: `<xsl:apply-templates select="body"/>`. This will begin the apply process starting from `<body>`. The corresponding matching code for this would be:

  <xsl:template match="body/*">
    <xsl:element name="{name()}"/>
  </xsl:template>

This rule says, match all children elements of `<body>`. The `element` instruction is used to reproduce the element in context. This is what the output looks like:

  <h3/>
  <p/>
  <p/>
  <ul/>
  <p/>

Well, it's a good start. So far we've managed to output all the top level elements. Next step is to grab the text elements in each of the nodes in code *beta*:

  <xsl:template match="body/*">
    <xsl:element name="{name()}">
      <xsl:apply-templates/>
    </xsl:element>
  </xsl:template>

The instruction, `<xsl:apply-templates/>` serves a purpose and this will be evident soon. But before that, let's take a look at the result:

  <h3>Ninja 101</h3>
  <p>Ninjas are not about killing, it's about devotion.</p>
  <p>You will do well to heed to the following. Learn to:</p>
  <ul>
    Conceal
    Strafe
    Tango
  </ul>
  <p>Only a true ninja can summon the courage to sing karaoke in public.</p>

It's now looking pretty good. Next up, we will tackle elements embedded inside another element. We will need to figure out a way so the template will be perpetually applied. Luckily, it was good foresight that we used `<xsl:apply-templates/>`. Let's take a look at code *charlie*.

  <xsl:template match="body//*">
    <xsl:element name="{name()}">
      <xsl:apply-templates/>
    </xsl:element>
  </xsl:template>

The changed line here is `body//*`. The `<xsl:apply-templates/>` instruction is already doing the hard work for us, all we needed to do was to change the template's pattern to encompass *all* children nodes of `<body>`. Check out the sizzling result:

  <h3>Ninja 101</h3>
  <p>Ninjas are <em>not</em> about killing, it's about devotion.</p>
  <p>You will do well to heed to the following. Learn to:</p>
  <ul>
    <li>Conceal</li>
    <li>Strafe</li>
    <li><a>Tango</a></li>
  </ul>
  <p>Only a true ninja can summon the courage to sing karaoke in public.</p>

Now, if you're not excited by now, then you must be a robot--a cold, evil robot--and robots can't be ninjas.

The only things missing are attributes. Let's add those now to code *delta*:

  <xsl:template match="body//*">
    <xsl:element name="{name()}">
      <xsl:apply-templates select="@*"/>
      <xsl:apply-templates/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="body//@*">
    <xsl:attribute name="{name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

We've added a new line in the first template: `<apply-templates select="@*"/>`. The same logic for multiple nested elements also applies to attributes so it's important to use `apply-templates` in this case to match all the attribute nodes.

Here's the final result:

  <body>
    <h3 id="tips">Ninja 101</h3>
    <p>Ninjas are <em>not</em> about killing, it's about devotion.</p>
    <p>You will do well to heed to the following. Learn to:</p>
    <ul class="skills">
      <li>Conceal</li>
      <li>Strafe</li>
      <li><a href="#tango">Tango</a></li>
    </ul>
    <p>Only a true ninja can summon the courage to sing karaoke in public.</p>
  </body>

### More elegant XSLT ####

The code now works great but the apply template rule can be abbreviated:

  <xsl:template match="body//*">
    <xsl:element name="{name()}">
      <xsl:apply-templates select="* | @* | text()"/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="body//@*">
    <xsl:attribute name="{name(.)}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>

Through the power of the union (`|`) operator, we can combine the instructions into a single one.

So...great, we've managed to achieve exactly what `<xsl:copy-of/>` could've done in one line. Yawn-fest I hear people say. Fear not, the good bit is coming.

### Exercise for the body and mind ###

Now that we have the basics. It's really now just a matter of doing some template rule overriding to manipulate the content. Templates have an attribute called "priority" which you can set so a template matching the same element can take precedence over another. It's kind of like using the `!important` rule in CSS.

  <xsl:template match="h3" priority="1">
    <xsl:element name="h4">
      <xsl:apply-templates select="* | @* | text()"/>
    </xsl:element>
  </xsl:template>

As you can see this is conceptually the same as the rule we used to match all elements inside `<body>`, except the match is more specific and a priority value of 1 is given (the default is 0). And that's it! This additional template was the only thing needed to change the source `<h3>` into `<h4>`! In fact, it's not actually necessary to explicitly set the priority in our case. Similar to CSS, the more specific the matching rule is, the higher a priority of a template will be.

Now that you know how to display your body content the *ninja* way, I encourage everyone who's read this article to assassinate `<xsl:copy-of/>` and embrace the shuriken that is `<apply-templates/>`.
