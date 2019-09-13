---
title: Structure information by titles
navigation: information-structure
nav: menu-criteria
---

<header>
## Structure information by titles
{: .article-header__title}
</header>

**Impact:** Moderate to high

**Users mainly impacted:** Blind, severely visually impaired, motor handicapped, cognitive disability.

**RGAA criteria:** [Criterion 9.1 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-9-1)

### Explanation

Using titles and subtitles allows you to structure your text in parts and provides the user with a map of the document and allows him to navigate from title to title to move more quickly through the page content.

For people with cognitive disabilities, titles make it easier to understand the content of the page and to understand its logical articulation.

For users with a motor disability who only navigate on the keyboard, titles are as many milestones as they can use to navigate more quickly through a page.

For a visually impaired user (blind or visually impaired), web content is a long sequence of text. If he uses a screen reader, he has keyboard shortcuts to navigate between the types of elements (title, form field, list, etc.). Without structure and without the ability to grasp the formatting (bold, font size), it is difficult for him to find his way around.

All editorial content must have at least one title that introduces it. Preferably, relatively short and titled sections should be created.

Titling is not enough, it is important to respect the hierarchy of titles. If you start your content with a level 1 title and create a subpart, the title of that subpart should be level 2 and so on until level 6 (last available title level). Note that the number of titles in a page is not limited.

#### Be aware of

Sometimes for SEO reasons, it is not advisable to titrate certain content blocks with high-level titles. It is possible in this case to use `ARIA` to minimize the impact on referencing and to keep a title structure accessible.

```html
<h1>News flash</h1>
```

```html
<div role="heading" aria-level="1">News flash</div>
```
