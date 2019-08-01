---
title: Criterion 6.1 [A]
navigation: links
nav: menu-criteria
---

<header>
## Criterion 6.1 [A] <span>Is each [link](../glossary.html#mLien) explicit (except in [particular cases](../particular-cases.html#cpCrit6- "Particular cases for criterion 6.1"))?</span>
{: .article-header__title}
</header>

**Impact:** Major

**Users mainly impacted:** Blind, severely visually impaired, visually impaired, motor impaired.

### Explanation

A link allows you to navigate between the pages of a site or to link to another site. A link is defined by two important elements:

* its link text, the text visible and clickable by users;
* its context

A link must be explicit by itself (its link text alone) or through its [context](../glossary.html#mContexteLien) :

*   The content of the sentence enclosing the link;
*   The content of the paragraph (`p` tag) containing the link;
*   The content of the list item (`li` tag), or the content of a parent list item (`li` tag) of the list item, containing the link;
*   The content of the heading (`h1` to `h6` tags) that is the closest ascendant of the link;
*   The content of the table header cell(s) (`th` tags) associated with the table data cell (`td` tag) containing the link;
*   The content of the table data cell (`td` tag) containing the link;
*   The content of the link title (`title` attribute);
*   The content of the `aria-label` property;
*   The content of the chunk(s) of text associated with the link via the `aria-labelledby` property.

<span class="visually-hidden">Important</span>
When none of these contexts makes the link explicit, the use of the [title](../glossary.html#mTitreLien) is the last possible solution.
{: .important}

<div class="tip">
<span class="visually-hidden">Tip</span>
* If I look at the text of my links, do I understand where I'm going by clicking on them?
* Avoid generic headings such as: click here, here, read more, visit this page, download...
</div>
