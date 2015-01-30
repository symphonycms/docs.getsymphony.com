---
title: "Delegates"
weight: 2
description: "Delegates allow developers to manipulate input and output and perform other tasks during the generation of back-end and front-end pages."
---

#### Overview

Delegates are functions in Symphony's core that allow <a href="http://getsymphony.com/learn/concepts/extensions/">extension</a> developers to intervene at key moments in the generation of a back-end or front-end Symphony page. The delegate will usually provide a contextually relevant PHP object (for instance a page object or an event object) that the developer can then work with and pass back to the system for further processing.

#### Usage

Extensions can subscribe to delegates by declaring a `getSubscribedDelegates()` function in the <a href="http://getsymphony.com/learn/concepts/view/extension-file-structure/#extensiondriverphp">extension.driver.php</a> file, like this:

<pre><code>
  public function getSubscribedDelegates(){
    return array(
      array(
        'page' => '/delegatepage/',
        'delegate' => 'DelegateName',
        'callback' => 'extensionFunction'
      ),
    );
  }</code></pre>

`getSubscribedDelegates()` is expected to return an array of subscriptions, each of which is an array consisting of three key/value pairs: **page**, **delegate**, and **callback**. The first two values are defined by the delegate itself (see the list below). The last value is the name of a callback function provided by the extension.

During normal system processing, delegates fire `notifyMembers()` functions, which allows any subscribed extensions to intervene before processing continues.

See the <a href="http://getsymphony.com/learn/api/2.3/delegates/">API Docs</a> for a full list of delegates.
