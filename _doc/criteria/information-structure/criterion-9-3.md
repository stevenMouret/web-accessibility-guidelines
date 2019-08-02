---
title: Criterion 9.3 [A]
navigation: information-structure
nav: menu-criteria
---

<header>
## Criterion 9.3 [A] <span>On each Web page, is each [list](../glossary.html#mListes) structured  appropriately?</span>
{: .article-header__title}
</header>

**Impact:** Moderate to high

**Users mainly impacted:** Blind, severely visually impaired, motor handicapped, cognitive disability.

### Explanation

Structuring content with the right elements provides an enhanced navigation experience for screen reader users.

A blind, visually impaired or reading impaired user who uses a screen reader to browse the content of a page will use keyboard shortcuts to navigate between item types. It can navigate from title to title, go to the next form field, or go to the previous list.

In addition to allowing you to navigate between elements, it also allows you to avoid them.

In the case of a list, the number of items in the list is announced, as well as the level of the item in the list. Thus, if the user finds the list too long, he or she can simply avoid it rather than go through it in its entirety, or go to the beginning of the list, or to the end directly.

#### Three types of lists are identified

* unordered lists
    * The lists use the `ul` and `li` tags
    * The lists use the ARIA roles `list` and `listitem`.
* ordered lists
    * The lists use the `ol` and `li` tags
    * The lists use the ARIA roles `list` and `listitem`.
* definition lists
    * The lists use the `dl` and `dt` / `dd` tags
