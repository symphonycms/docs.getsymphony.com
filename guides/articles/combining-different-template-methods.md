---
title: "Combining Different Template Methods"
weight: 3
description: "The art of combining different templates methods In XSLT."
---

> Seven years in Tibet taught Allen the true act of selflessness. He teaches the template unification technique with grace and humility. During Allen's 7 year training as a civilian monk at the Commercial Celestial Academy: Tibet Branch (CCATB), he learned the indispensible XSLT technique of unifying matching templates with named templates.

In XSLT, there are two styles of templates: *matched* and *named*. Matched templates are rule-based methods similar to CSS. These templates apply a set of instructions based on a specified criteria. In `CSS`, the rule `body #content > p` is akin to the XPath `body/content/p` in `XSLT`.

Matched templates have two advantages: they have knowledge of the context node so you can draw some assumptions with `XPath`, and they are automatically invoked when a criterion is met.

Named templates are function call methods. The benefit of such methods is that the template can be explicitly called wherever your code dictates it, rather than to rely on the structure of the XML.

Now, I will show you how to combine them.

### The Monktastic Problem ###

Here is an example of the two methods put to good use.

**Problem:** Produce a list of successive pages based on the `current-page` attribute.

  <?xml version='1.0' encoding='utf-8'?>
  <data>
    <pagination-info total-entries="45" total-pages="9" entries-per-page="5" current-page="1" />
  </data>

For example, if the current page is "1", XSLT will produce "2, 3, 4, 5, 6, 7, 8, 9" as links. If the current page is "6", XSLT will produce "7, 8, 9".

### Monktastic Exercise Level 1 ###

The solution will require recursion. If you are unfamiliar with the concept, I urge you to watch the **Understanding Recursion** screencast below.

<iframe src="//player.vimeo.com/video/15242945?title=0&amp;byline=0&amp;portrait=0" width="500" height="444" frameborder="0" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen"></iframe>

  <xsl:template match="/">
    <xsl:apply-templates select="data/pagination-info"/>
  </xsl:template>
  
  <xsl:template match="pagination-info">
    <xsl:call-template name="pages">
      <xsl:with-param name="context-page" select="@current-page + 1"/>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="pages">
    <xsl:param name="context-page"/>
    <xsl:value-of select="$context-page"/>
    <xsl:if test="$context-page &lt; @total-pages">
      <xsl:text>, </xsl:text>
      <xsl:call-template name="pages">
        <xsl:with-param name="context-page" select="$context-page + 1"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

The result looks like this:

  2, 3, 4, 5, 6, 7, 8, 9

This is a fairly straight-foward recursive template. Upon matching the `pagination-info` element, the matched template calls the "pages" template where it recursively generate the pages based on the `$context-page`. Some of you might think the matched template is redundant as it's possible to simply call the `pages` template directly. The only catch is that you wouldn't be able to assume the location of the `@current-page` attribute which is a benefit of using matched templates.

### Monktastic Exercise Level 2 ###

So far, I have been touting this unification of template methods but have yet to really explain what it is. Simply put, the XSLT specification states that it is possible to have both a `match` and a `name` attribute in a `template` instruction. Because of this, we can simplify the code to this:

  <xsl:template match="pagination-info" name="pages">
    <xsl:param name="context-page" select="@current-page"/>
    <a href="/entries/page/{$context-page}/">
      <xsl:value-of select="$context-page"/>
    </a>
    <xsl:if test="$context-page &lt; @total-pages">
      <xsl:text>, </xsl:text>
      <xsl:call-template name="pages">
        <xsl:with-param name="context-page" select="$context-page + 1"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

This new template has the perks of both matched and named methods - it has inherent knowledge of the context node and also the ability to be recursive.

### A road to self discovery and enlightenment ###

Another really good use of this unification technique is the date utility found in the default theme in Symphony. The date template can be invoked in 2 ways, either when the `date` element is matched in the XML or when explicitly called. The effect of this is that all dates are automatically formatted, but in the event that there is an ISO date elsewhere that isn't a date element, the template can still be explicitly called to format the date.

Now that you know you can combine template methods, have a go and see what all the fuss is about.

*This is a public service announcement:* Any person looking to be a certified monk, please call the CCATB hotline.
*Disclaimer:* This certification does not certify the certificate holder is a certified monk.
