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
{: .criteria }

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

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
It is not prohibited to have a section marked with h2 before the main section marked with h1.
</div>

##### Examples: Headings in a 3-column layout

In this example, the main content of the page is in the middle column of a 3-column page. The title of the main content matches the title of the page, and is marked as h1, even though it is not the first thing on the page. The content in the first and third columns is less important, and marked with h2.

```html
<head>
    <title>Stock Market Up Today</title>
</head>
<body>
    <!-- left nav -->
    <section class="left-nav">
        <h2>Site Navigation</h2>
        <!-- content here -->
    </section>
    <!-- main contents -->
    <main class="main" role="main">
        <h1>Stock Market up today</h1>
        <!-- article text here -->
    </main>
    <!-- right panel -->
    <aside class="right-panel">
        <h2>Related links</h2>
        <!-- content here -->
    </aside>
</body>
```


