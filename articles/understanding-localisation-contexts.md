---
title: "Understanding Localisation Contexts"
weight: 8
description: ""
---

A bit of history
Before Symphony 2.3, it was only possible to translate a string in a global fashion. No matter the place the string was shown, the same translation was used everywhere, over and over again. This system worked for quite a long time, but there were some flaws:

Unlike English, there are languages that base more heavily on noun genders. For instance, while it's perfectly acceptable in English to have "Create New" implicitly refer to both "Sections" and "Events", Italian have two versions of "New" -- one for female nouns like "Sezione" ("Section" in English) and one for male ones like "Evento" (or "Event").

It might happen that the same string is used in two different pages to mean different things. For instance, there was a bug in Symphony 2.2.x where "Send Email" was employed to mean both a Filter Option for an event and a button label in the Password Recovery page.

One might argue there are many cheap ways to workaround these issues without changing the codebase. Although true, Symphony developers always stressed a concept that quickly become a selling point for the platform: UX has to meet development. It's unpleasant when a localised version of the backend or an extension contains gender mismatches between pronouns and nouns. Moreover, changing a string in one page because it's being used somewhere else -- especially when the old one worked well and meshed with the UI -- it's symptom of bad design.

At some point in the development of Symphony, it was then clear that the current localisation system had become obsolete and didn't take into account languages and rules foreign to the English user. Under these circumstances, enriching the old system with something new seemed legitimate. We were looking for a way to give translators a more flexbile tool on one hand, while maintaining the old language files compatible with Symphony on the other.

Contexts in short
Contexts are really simple to understand. In short, a context is a string which identifies a group of pages in the backend. We wanted to make the concept damn simple to grasp and we struggled to name values in a way that was both easy to remember and even guess. We couldn't be more happy when we raised our eyes and found the page URL to be the perfect guy for the job.

As of now, a context looks like a relative path in a filesystem, but it's easier to think of it as /group/subgroup or simply /group. In Symphony 2.3 you'll find the following to be valid contexts:

/login means the Login and Password Recovery pages.
/publish means the Entry Index and Editor pages.
/blueprints/pages means the Page Index and Editor pages.
/blueprints/sections means the Section Index and Editor pages.
/blueprints/datasources means the Data Source Index and Editor pages.
/blueprints/events means the Event Index and Editor pages.
/blueprints/utilities means the Utility Index and Editor pages.
/system/authors means the Author Index and Editor pages.
/system/preferences means the Preferences page.
/system/extensions means the Extensions page.
It's pretty easy to guess the context by looking at the page URL right above you. Contexts look like paths just for this reason.

Having contexts designed this way means we are now supporting both gender- and page-aware translations. For instance:

If "Create New" is shown in the /blueprints/sections context, it can be translated so that the implicit gender is female (e.g. "Crea nuova" in Italian), while for /blueprints/events we would supply a different translation that takes care of the implicit male noun (e.g. "Crea nuovo").
If "Send Email" appears in the Password Recovery page then the context is /login, while the Event Editor (and so the Filter Option) is part of the /blueprints/events context. As a result, the same string can be used in both places.
As you can see, having a single context match with a bunch of pages turned out to be a perfectly valid assumption.

Now that we all familiar with this concept, it's time to explain what changes for developers and translators. That was our next big question many moons ago. You'll be surprise to see that the syntax for defining and creating context-aware translations is pretty intuitive... sometimes even invisible.

What changed for developers
Quick answer: nothing. Every time you define a translatable string by wrapping it into the double-underscore function __() you are telling Symphony to automatically detect the right context. Symphony does it just like you -- that is, by looking at the URL.

Technically, __() is just an alias for Lang::translate() which takes care of the real search & replace stuff. For no reasons use the latter in your extensions: it's verbose and since it's being used internally its signature might and will change over time.

It's worth mentioning that you are not allowed to define your own contexts and pass them to the __() function. While this might seem unnecessarily strict, you'll be surprised to see that having a context match a group of pages is already covering many cases, more than you can probably imagine.

Actually, Lang::translate() does accept an optional $context parameter and should be used in place of __() only in one case: every time you want to pass translated strings from PHP to JavaScript, Symphony uses ad-hoc backend pages with their own URLs (e.g. /ajax/translate/). Without a dedicated parameter there would be a new context for each AJAXPage being requested and our efforts to create a logic classification of pages would fade out.

To sum it up, in 99% of cases you won't need to use Lang::translate(). Just stick to __() and Symphony will do all the rest.

What changed for translators
The purpose of contexts is to help translators deploy better localised versions of Symphony and its extensions. For this very reason, while contexts don't have almost any impact on developers, they are very likely to affect a translator's workflow. Let's see how.

As you probably know, a language file is made of two arrays:

$dictionary, which contains pairs following the pattern 'English string' => 'Translation':
$transliterations, which contains special symbols that must be replaced with underscores or dashes wherever a handle is needed (e.g. in the URL).

$dictionary = array(

    'Create New' => 'Crea nuovo',
    'With Selected...' => 'Oggetti selezionati...',
    'Apply' => 'Applica'

);
With the addition of contexts, $dictionary accepts:

Pairs following the pattern 'English string' => 'Translation'
Arrays indexed by a valid context string (e.g. /system/authors), whose pairs follow the pattern 'English string in the context' => 'Translation in the context'.

$dictionary = array(

    'Create New' => 'Crea nuovo',
    'With Selected...' => 'Oggetti selezionati...',
    'Apply' => 'Applica',

    '/blueprints/datasources' => array(

        'Create New' => 'Crea nuova',

    ),

);
If you look very closely at the example, you can see that "Create New" is translated according to the context, that is the backend page being visited by the user. Every time you want to overwrite a translation by using a context, you must define the respective context array. If a pair doesn't belong to any context array (e.g. "Apply"), it's considered part of an implicit global context.

The algorithm that Symphony uses for translating a string in the backend is as follows:

For every page, Symphony detects the context.
Once the context is known, for each string in the page Symphony tries to find a context-aware translation. This is done by looking at the $dictionary array of a given language file.
If no translations are provided for that context, Symphony climbs the array looking for a context-less version -- that is, a translation in the global context.
If no matches are found, Symphony returns the original string.
In the above example, the string "Crea nuova" would be used every time the /blueprints/datasources is visited (step 2 of the algorithm). In all the other cases, Symphony would just pick "Crea nuovo" once it ascertains there are no translations in the context (step 3).

A few important things that are worth mentioning:

If you are not going to make use of contexts then you don't have to change anything in your language file. Every translation would just be considered in a global fashion, which doesn't hurt in most cases.
Make sure you don't have any further array inside a context array: this is not allowed (contexts are not hierarchical) and Symphony would not appreciate that degree of complexity.
If you don't need a context, you don't have to define the respective context array. This is another reason why previous language files are perfectly valid in Symphony 2.3: only use the context arrays that you need!
The Good and the Evil
Now that you are feisty and fond of this great new addition, you should be probably warned about this simple thing: it makes sense to exploit contexts as much as it makes sense to avoid them. It really changes on a per-string basis.

There are cases where the same string requires the same translation everywhere. This is especially true when talking about copy that acts as UI. You don't want a thing to be called "Datasources" in one page and then "Pieces of awesome XML" in another: predictability and coherence play a very important role when it comes down to Usability and User Experience, so bear this in mind every time you are tempted to evoke a context.

On the other hand, we already showed examples where contexts made the difference. As a general rule of thumb, use contexts when a string causes either gender or meaning conflicts across pages. It's likely for any other case to be handled in a simpler way.

If you are a developer, don't even care about choosing strings that are context-friendly. Just pick the one that works best for you and your users and focus on the important things. Extensions development and translation are two different processes that must be kept separate: with this design in mind, translators can always use contexts where necessary without a developer's intervention.

Bonus track: Localisation Manager 2.0
With the arrival of Symphony 2.3 Localisation Manager has been updated to support localisation contexts. If you already use this tool you can probably skip this paragraph, otherwise I encourage you reading the following lines.

Once installed, the extension adds a new item to the System menu called Localisations. On that page you are shown a list of extensions (plus the backend core itself, which is called Symphony Core), along with a list of supported languages and the option to create a new language file.

If you mean to update an existing localisation (Export mode), just click on the desired language in the Export dictionary column. Localisation Manager will generate a language file including a list of working, obsolete and missing translations.

A working translation is a pair 'English string' => 'Translation' that is still valid for the latest version of the extension. You don't have to change it unless you want to deploy a better translation for that string.
An obsolete translation is a pair 'English string' => 'Translation' that is no longer used in the extension. You might want to remove it, but if you mean to support older versions you better keep it as it is.
A missing translation is a pair 'English string' => false, where English string didn't exist in previous versions and has been introduced since your last update to the language file. If you mean to support the latest version of an extension you should provide a translation for it.
Localisation Manager is also able to generate new language files from scratch (Create mode): just click on Add language in the Create dictionary column and you'll be given a virgin dictionary to play on.

It's worth mentioning that every time you start a new localisation, you lose the ability to support previous versions of that extension: in other words, Localisation Manager is not able to detect obsolete strings unless it's fed with a previous version of a language file.

As far as contexts are concerned, Localisation Manager behaves as follows:

In Export mode, the existing context arrays remain untouched: if a string in a context array is obsolete, it's marked as such; if it's not in the global context (and is not obsolete), a global version is created as well.
In Create mode, context arrays are never created because it's a translator's responsibility.
This concludes our journey through localisation contexts. Happy translating!
