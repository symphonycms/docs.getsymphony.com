---
title: "Overriding Templates"
weight: 4
description: "A technique to keep your XSLT modular for more complex websites."
---

For simple websites, master templates are usually quite a simple affair but when working on more complex websites, things can get messy quickly.

### The basic ###

Let's start by looking at a basic master template.

  <?xml version="1.0" encoding="UTF-8"?>
  <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="xml" 
    doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
    doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
    omit-xml-declaration="yes"
    encoding="UTF-8" 
    indent="yes"/>

    <xsl:template match="/">
      <html>
        <head>
          <title>
            <xsl:value-of select="$website-name"/>
            <xsl:text>: </xsl:text>
            <xsl:value-of select="$page-title"/>
          </title>
        </head>
        <body>
          <xsl:apply-templates/>
        </body>
      </html>
    </xsl:template>

  </xsl:stylesheet>

For conciseness, I usually like to write multiple `<xsl:value-of>` lines out like this:

  <title>
    <xsl:value-of select="concat($website-name, ': ', $page-title)"/>
  </title>

### Extending the basic ###

On some pages, the title needs to be more specific, so the common practise is to do the following:

  <title>
    <xsl:value-of select="concat($website-name, ': ', $page-title)"/>
    <xsl:if test="$current-page = 'blog' and not($handle = '')">
      <xsl:value-of select="path/to/blog/title"/>
    </xsl:if>
  </title>

The logic says, if the current page is called 'blog' and the `$handle` URL parameter is not empty, then display the blog title. This of course has the ramifications of growing in size when more pages require their own specific titling requirements.

The natural approach is to abstract the page title logic to a named template:

  <xsl:template name="page-title">
    <xsl:value-of select="concat($website-name, ': ', $page-title)"/>
    <xsl:if test="$current-page = 'blog' and not($handle = '')">
      <xsl:value-of select="path/to/blog/title"/>
    </xsl:if>
  </xsl:template>

### Extending the extended basic ###

However all the above code has done is to move the mess to a separate area. Something more needs to be done to make this more elegant. There are two approaches to this:

1. Named template override
2. Matching template override

Both methods are identical in approach but the syntax and logic is slightly different. Before we get to the good part, we need to first establish the environment. In Symphony, *master* templates are a standalone XSLT document that is either imported or included to the *page* template. This is not an XSLT mandate but simply a good development practise in Symphony. You'll need to understand the importance of template hierarchy before reading on.

### Named template override ###

We'll start with named template override technique first:

On master.xsl we have:

  <?xml version="1.0" encoding="UTF-8"?>
  <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="xml" 
    doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
    doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
    omit-xml-declaration="yes"
    encoding="UTF-8" 
    indent="yes"/>

    <xsl:template match="/">
      <html>
        <head>
          <title>
            <xsl:call-template name="page-title"/>
          </title>
        </head>
        <body>
          <xsl:apply-templates/>
        </body>
      </html>
    </xsl:template>

    <xsl:template name="page-title">
      <xsl:value-of select="concat($website-name, ': ', $page-title)"/>
    </xsl:template>

  </xsl:stylesheet>

On the blog page (`blog.xsl`), we have:

  <?xml version="1.0" encoding="UTF-8"?>
  <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:import href="../utilities/master.xsl"/>

    <xsl:template match="data">
      ...
    </xsl:template>

    <xsl:template name="page-title">
      <xsl:if test="not($handle = '')">
        <xsl:value-of select="path/to/blog/title"/>
      </xsl:if>
    </xsl:template>

  </xsl:stylesheet>

Because we are using the `<xsl:import>` instruction, we are allowed to override the named template on master. Remember, `blog.xsl` imports `master.xsl`, so `blog.xsl` takes precedence.

Another very useful technique involving template override is the ability to override with an empty template:

  <xsl:template name="page-title"/>

This isn't very useful in our case, but useful when you want the default behaviour to output something but in rare situations to output nothing.

### Matching template override ###

Matching template override is quite similar to named template override:

On master.xsl we have:

  <?xml version="1.0" encoding="UTF-8"?>
  <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="xml" 
    doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
    doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
    omit-xml-declaration="yes"
    encoding="UTF-8" 
    indent="yes"/>

    <xsl:template match="/">
      <html>
        <head>
          <title>
            <xsl:apply-templates select="data" mode="page-title"/>
          </title>
        </head>
        <body>
          <xsl:apply-templates/>
        </body>
      </html>
    </xsl:template>

    <xsl:template match="data" mode="page-title">
      <xsl:value-of select="concat($website-name, ': ', $page-title)"/>
    </xsl:template>

  </xsl:stylesheet>

On the blog page (`blog.xsl`), we have:

  <?xml version="1.0" encoding="UTF-8"?>
  <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:include href="../utilities/master.xsl"/>

    <xsl:template match="data">
      ...
    </xsl:template>

    <xsl:template match="data" mode="page-title">
      <xsl:if test="not($handle = '')">
        <xsl:value-of select="path/to/blog/title"/>
      </xsl:if>
    </xsl:template>

  </xsl:stylesheet>
  
The way this works is by applying the same context node multiple times but using different modes to target code execution. Logically, matching template override is not much different to named template override with one exception. Notice that this time, I've used `<xsl:include>` rather than `<xsl:import>`. Matching templates are inherently capable of overriding without causing XSLT "redefinition" conflicts. In fact, you can give matching templates a `@priority` to denote its level of importance:

  <xsl:template match="blog/entry" priority="10">
    ...
  </xsl:template>

Similar to CSS, priority resolution is in order of specificity. The more specific the matching pattern the higher its inherent priority. Matching template overrides are useful when you still need to execute lower priority templates on your page and not completely replace a template.
