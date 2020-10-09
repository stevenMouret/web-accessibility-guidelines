---
title: Structure information by headings
navigation: information-structure
nav: menu-criteria
description: Content hierarchized by relevant headings
tags: [heading,relevant,hierarchy]
---

<header>
## Structure information by headings
{: .article-header__title}
</header>

**Impact:** Moderate to high

**Users mainly impacted:** Blind, severely visually impaired, motor handicapped, cognitive disability.

**RGAA criteria:** [Criterion 9.1 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-9-1)
{: .criteria }

### Explanation

Using relevant headings allows you to structure your content in parts and provides the user with a map of the document and allows him to navigate from heading to heading to move more quickly through the page content.

For people with cognitive disabilities, headings make it easier to understand the content of the page and to understand its logical articulation.

For users with a motor disability who only navigate on the keyboard, headings are as many milestones as they can use to navigate more quickly through a page.

For a visually impaired user (blind or visually impaired), web content is a long sequence of text. If he uses a screen reader, he has keyboard shortcuts to navigate between the types of elements (heading, form field, list, etc.). Without structure and without the ability to grasp the formatting (bold, font size), it is difficult for him to find his way around.

All editorial content must have at least one heading that introduces it. Preferably, relatively short heading section should be created.

#### What is non-compliant

##### A non relevant heading
The heading of a section should describe the content of that section. The following example is non-compliant.

```html
<h2>Vegetables</h2>
<p>The Radish is an edible root vegetable of the family...</p>
<h2>Vegetables</h2>
<p>Lettuce is an annual plant of the daisy family...</p>
```

##### A text that is visually displayed as a heading but is not marked as a heading
The following example is non-compliant.

```html
<p style="font-weight: bold; font-size: 2rem;">Vegetables</p>
<ul>
    <li>Radish</li>
    <li>lettuce</li>
</ul>
<p style="font-weight: bold; font-size: 2rem;">Fruits</p>
<ul>
    <li>Strawberry</li>
    <li>Lemon</li>
</ul>
```

<p style="font-weight: bold; font-size: 2rem;">Vegetables</p>
<ul>
    <li>Radish</li>
    <li>lettuce</li>
</ul>
<p style="font-weight: bold; font-size: 2rem;">Fruits</p>
<ul>
    <li>Strawberry</li>
    <li>Lemon</li>
</ul>

##### Inappropriate order
The hierarchy of the content must be respected through the headings. This example is non-compliant. Radish is a child of vegetables, he can't be higher than vegetables.

```html
<h3>Vegetables</h3>
<p>Description of our vegetables</p>
<h2>Radish</h2>
<p>The radish is an edible root vegetable of the family...</p>
```

#### Some received ideas

##### A lack of headings
Even if it is preferable to use headings for content sections, this does not represent non-compliance.

##### Missing h1
Similarly, it is not mandatory to beginning a heading hierarchy with an `<h1>`.

##### A single `<h1>`
Very often the heading `<h1>` is reserved for the main heading of the page, but this is not a requirement. Having several `<h1>` does not represent a non-compliance.

##### Skipped heading levels
A hole in the heading hierarchy (such as having an `<h2>` followed by an `<h4>`) does not help to convey a logical hierarchy of headings, however, it does not represent a non-compliance.

##### Examples: Headings in a 3-column layout
In this example, the main content of the page is in the middle column of a 3-column page. The heading of the main content matches the title of the page, and is marked as h1, even though it is not the first thing on the page. The content in the first and third columns is less important, and marked with h2.

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

#### Be aware of
Sometimes for SEO reasons, it is not advisable to markup heading of some content blocks with heading tag `<hn>`. It is possible in this case to use `ARIA` to minimize the impact on referencing and to keep a heading structure accessible.

```html
<h1>News flash</h1>
```

```html
<p role="heading" aria-level="1">News flash</p>
```




