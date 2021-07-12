---
title: Page title
navigation: mandatory-elements
nav: menu-criteria
description: Accessibility of the page title
---

<header>
# Page title
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Blind, visually impaired, motor, mental and cognitive disabilities.

**RGAA criteria:** [Criterion 8.5 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-8-5) - [Criterion 8.6 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-8-6)
{: .criteria }

## Explanation

Page titles are the first information available to users and serve as the basis for browsers to produce a navigation history or list of open tabs.

In their absence or irrelevance, the blind, the severely visually impaired and the mentally or cognitively handicapped will have great difficulty finding a page in the navigation history or in the list of open tabs.

When pages are part of a process, blind and severely visually impaired people who use a screen reader may not understand the process.

Finally, when the page is bookmarked, the absence of a title or lack of relevance will force these users to systematically modify the proposed title, which can make the use of a site complex, especially for people with motor disabilities.

The page title is in most cases only updated after a page reload and not when there are client-side changes. Client side errors are handled directly in JS.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
Consider making the page title relevant in the case of a process.
</div>

### When there is a pagination

Imagine that we have 28 results in total with 10 results displayed per page and we are on the second page.

```html
<title>News, Page 2 to 3, Name of my website</title>
```

### When filtering in a search or list view

When it has a search or a filtering by keyword and categories. In this case, indicate the number of results, the keywords searched and why not a filtering category. In case there is more than one category, indicate the number of categories activated only.

```html
<title>Results of the news for the terms city, 2 filters activated, 7 results, Page 1 to 2, Name of my website</title>
```

### When there is a server side error in a form
```html
<title>5 Error(s), Contact, Name of my website</title>
```

### When there is a process in a procedure or a form
```html
<title>Verify your information, Contact, Name of the website</title>
<title>Successful sending, Contact, Name of the website</title>
```

### When there are no results to a search or when filtering a list view.

```html
<title>Search results for the term(s) city, No results, Name of the website</title>
```
