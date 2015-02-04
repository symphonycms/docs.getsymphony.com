---
title: "Delegates"
weight: 2
description: "Delegates allow developers to manipulate input and output and perform other tasks during the generation of back-end and front-end pages."
---

Delegates are functions in Symphony's core that allow [extension][ext] developers to intervene at key moments in the generation of a back-end or front-end Symphony page. The delegate will usually provide a contextually relevant PHP object (for instance a page object or an event object) that the developer can then work with and pass back to the system for further processing.

# Subscribing to Delegates

Extensions can subscribe to delegates by declaring a `getSubscribedDelegates()` function in the [`extension.driver.php`][struct] file, like this:

{% highlight php %}
  public function getSubscribedDelegates()
  {
    return array(
      array(
        'page' => '/delegatepage/',
        'delegate' => 'DelegateName',
        'callback' => 'extensionFunction'
      ),
    );
  }
{% endhighlight %}

<aside class="note">
  <p>Delegate subscriptions are kept in the database. Changing which delegates your extension subscribes to requires that you enable/disable the extension for your changes to take effect.</p>
</aside>

`getSubscribedDelegates()` is expected to return an array of subscriptions, each of which is an array consisting of three key/value pairs: **page**, **delegate**, and **callback**. The first two values are defined by the delegate itself. The last value is the name of a callback function provided by the extension.

During normal system processing, delegates fire `notifyMembers()` functions, which allows any subscribed extensions to intervene before processing continues.

# List of Delegates

Please refer to the [API documentation on delegates][api] for a complete list of delegates. Every entry links to the GitHub-hosted copy of the file where the delegate is defined. If you want to know in which version a delegate was first introduced, click through to the file and check the delegate's `@since` parameter.

[api]: http://www.getsymphony.com/learn/api/2.5.2/delegates/
[ext]: {{site.baseurl}}/concepts/extensions/
[struct]: {{site.baseurl}}/concepts/extensions/extension-file-structure.html
