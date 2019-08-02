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

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
A menu with a large tree structure should use the nested lists to better prioritize the elements by levels and allow the user to navigate more easily.
</div>
