---
title: "A guide to caching extensions"
weight: 9
description: "Have you ever profiled a Symphony page and raised an eyebrow at the number of database queries needed for a particularly meaty data source? Perhaps you have been linked to from a Slashdot (remember that?) and your server is melting. You need caching."
---


There are many types of caching that will improve website performance. Here are just five:

### MySQL query caching

Every read query that Symphony executes is cached by MySQL. It is important to understand that this is not the result of the query, but the SQL statement itself. MySQL retains a pool of these statements so that they are quicker to execute in the future. This is pretty standard, and you  can use it in your own applications too by using `SELECT SQL_CACHE` for your read queries.

### Object caching

Once the database has been queried, the results are used to build objects (pages, data sources, sections, field, entries etc.). These objects are alive only for the lifespan of each page, and are destroyed at the end of each request. Systems such as Wordpress allow these objects to be cached and persisted between each page request (using APC, Memcache, flat files or MySQL), thereby shared between all users. Symphony doesn't do this, but it really should.

### Fragment caching

If you have one piece of a page that seldom changes — page body text; a list of contact details;  latest products this week — then these don't have to be built for every page load. Fragment caching is the method of caching just individual portions or fragments of a page. We can do this with Symphony by using the [Cacheable Data Source](http://symphonyextensions.com/extensions/cacheabledatasource/) extension — the XML of specific data sources can be cached, thereby reducing trips to your database. Fragment caching is useful if you have parts of a page that need to remain dynamic such as a shopping basket, member login status, or blog comments, meaning you cannot use full output caching.

### Output caching

If you don't have content that needs to remain dynamic, then you can cache the entire rendered output of a page. The [CacheLite](http://symphonyextensions.com/extensions/cachelite/) extension serves this purpose, caching Symphony page HTML on first visit and serving it to subsequent visitors. This essentially creates a static, flat version of your site, and bypasses most database queries, and the entire XML/XSLT transformation process.

### Network/proxy caching

Similar to output caching, but performed at a higher level either by running your own proxy caching server such [Squid](http://www.squid-cache.org/)/[Varnish](https://www.varnish-cache.org/), or a distributed network cache such as [Akamai](http://www.akamai.com/). These systems cache the output of your page and server it to users before the request even reaches your web server. Services like Akamai can distribute this geographically so that visitors are served cached content from servers near them, making it faster still.

There are Symphony extensions for fragment and output caching. Here is how they can be used:

## Cacheable Data Source

**Note:** these instructions are accurate for v1.1 which requires Symphony 2.3. If you're running an older version of Symphony you'll need v0.6 and be sure to follow the README instructions.

[Download the extension](https://github.com/nickdunn/cacheabledatasource/zipball/master) and install it. When you edit a data source you will now see a **Caching** section in the editor into which you specify the lifespan of the cache in seconds. This adds a `dsParamCACHE` property to the saved data source class, so you can add this manually to your custom data sources and still take advantage of caching.

When a data source runs the output will include information on whether the result is fresh from the database:

  <my-data-source cache-age="fresh">...

Or the current age of the cache:

  <my-data-source cache-age="30s">...

Each unique combination of data source sorting/filters is cached. So if your data source allows pagination and sorting by various fields, then each combination of these will be cached separately.

The cache is purged either when the lifespan expires, or if the cache files are removed from `/manifest/cache/datasources`.

## CacheLite

The [CacheLite library](https://pear.php.net/package/Cache_Lite) is a generic library used in output caching plugins and extensions for many content management systems. Max Wheeler packaged this up into a Symphony extension, and others have added new functionality.

[Download the extension](https://github.com/symphonists/cachelite/zipball/master) and install it. On the Preferences page you will see options to:

* specify the cache age
* exclude pages from caching (by default all pages are cached)
* an option to append the cache age to output HTML, useful for debugging
* an option to purge the cache when entry content changes in Symphony

This final option is arguably the most important since it allows you very fine control over how to purge the cache. By enabling this, you can set a very long cache lifespan (say, a week, or 518400 seconds), but know that if you create or edit entries in Symphony, the cache of pages showing these entries will be purged and visitors will see your updated content.

The extension also provides event filters for purging content in the same way. If you have a blog and need the blog post page cache to expire when a new comment is submitted (so all users see the new content) then you can enable an event filter option to do this, either by:

* purging the cache for all pages that show the entry (`id`) being sent via the event
* purging the cache for all pages that show content from the same section as the entry (`id`) being sent
* purging the cache for the URL passed as `cachelite[flush-url]`

## Conclusion

Once you have decided which type of caching you need, install one or both of these extensions. They make it _really_ easy for you to add caching to your Symphony projects. I guarantee your client, your visitors, and Google, will thank you for it.
