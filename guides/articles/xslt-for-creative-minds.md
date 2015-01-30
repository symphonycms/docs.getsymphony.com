---
title: "XSLT for Creative Minds"
weight: 7
description: "Problem solving requires creativity. For example, what do you do when milk in your fridge runs out? You chase after it. Now that's thinking creatively."
author: allen
published: 2007-06-01
modified: 2007-06-01
---

Chaotic Pattern for me is a great place to pour all my pent-up creativity that doesn't get released. It is a haven where I can freely roam in the limitless wonders of the digital web. You might think that I'm talking about graphic and layout design but you would only be partially correct. The most satisfying creative form for me is coming up with unique features.

### What is The Wordfest? ###

Wordfest is a word game that I came up with back in 2003. The concept is quite simple. A visitor must simply write their message following all the rules set for a wordfest entry. The rules are all based on word constriction. An example rule would be, "Comment must use the word 'peacock' somewhere, or "Must be 13 words or fewer". Generally each wordfest will have 3 different rules that a participant must abide.

Before the Symphony Age and just after the Stone Age, each wordfest entry was assessed manually by a pack of wild chimps. However with today's modern technology intermingled with some creative XSLT, *Wordfest 2.0 EZ Pro Platinum Edition* is back, with a vengeance.

Wordfest is now built into every article published as an optional exercise for commenters. To keep the logic simple, wordfests now follow 3 types of rule:

* Word inclusion
* Starting phrase
* Character number limit

Based on whether a commenter has chosen to participate, XSLT will assess the comment against the 3 rules. For each rule passed, an award icon is presented against their name. With the premise set out, let's cross over from dream world to reality.

### Inside the XSLT hole ###

The first task is to determine if a commenter is participating in wordfest. My solution is to ask participants to prefix their comments with `[wordfest]`. The alternate solution is to create a checkbox on the comment form and create a campfire service to save the checkbox value against the comment. Since Chaotic Pattern readers are all beautiful, young and smart individuals with `|33t haxxor` skills, I've opted for the pure XSLT way.

To test if a comment is participating, something like this will work:

  <xsl:variable name="participant" select="starts-with(message/p, '[wordfest]')"/>

The Xpath, `message/p` selects the first `p` element that is a child of `message`. There are actually 3 ways you can write the Xpath and all of them are valid:

1. message/p[position() = 1]
2. message/p[1]
3. message/p

The first method is the most verbose and it is also the most versatile since it allows for more complex logic such as *less than* and *greater and equal to*. The second method is a shortcut of the first and allows for only a single node selection. The third method, the one we've used here capitalises on the rule in Xpath that *if multiple instances of a node is found, return the first occurrence*. Be aware that this is not always the case and it is dependant on context. For example, `<xsl:apply-templates select="message/p"/>` will select all `p` elements inside `message` iterating a template rule for each occurrence.

The result of the variable `$participant` will be a `Boolean` (either *true* or *false*) and with this code, you can now easily test if a comment is participating in wordfest:

  <xsl:if test="$participant">...</xsl:if>

Simply put, the above states, *if true, then execute the instructions inside*.

### Jack in to the wordfest ###

Before we take a look at how we assess the rules, we'll need to make sure the message is formatted in a way that is easy for the XSLT to read. Firstly, we need to make sure `[wordfest]` is removed from the message and all the html elements are stripped out so it doesn't confuse the XSLT when assessing legitimate English words:

  <xsl:variable name="message" select="normalize-space(message)"/>

When you select a `node-set` (a node that contains other nodes), XSLT 1.0 will grab all the text nodes and throw away the element nodes then turn the lot into a string. `normalize-space()` is used to get rid of any tab or duplicate space characters. Now that we've turned the message node-set into a flat string, it's time to yank out the `[wordfest]` prefix:

  <xsl:variable name="message" select="substring-after(normalize-space(message), '[wordfest] ')"/>

We've made some additions to our variable. We first string-ify the message, then cut out the prefix.

Our new message variable is looking great. Now, it's time to learn to wield the rules.

### There is no spoon ###

The first consistent rule in Wordfest is to check if a designated word is used in the comment. Checking it is easy:

  <xsl:variable name="word-included" select="contains($message, $word)"/>

The first argument in the `contains()` function asks for the source string and the second argument asks for the string to check against. The result of the variable is again a Boolean.

There are still two other rules yet to be discussed. However, I will leave the others as a personal exercise. A word of warning, the rule for checking character limits require recursion which can be quite challenging if you haven't done them before.

To wrap up, we'll put what we've made into some context.

### Returning to Zion ###

For our HTML output, we'll display an image if the rule is deemed `true`.

  <xsl:if test="$word-included"><img src="/images/grats.gif" alt="You win!"/></xsl:if>

The condition says, if `$word-included` is `true`, output the `img` element.
