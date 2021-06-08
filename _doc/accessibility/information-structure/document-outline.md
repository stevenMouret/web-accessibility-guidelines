---
title: Document outline
navigation: information-structure
nav: menu-criteria
---

<header>
# Document outline
{: .article-header__title}
</header>

**Impact:** Moderate to high

**Users mainly impacted:** Blind, severely visually impaired, motor handicapped.

**RGAA criteria:** [Criterion 9.2 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-9-2) - [Criterion 12.10 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-12-10)
{: .criteria }

## Explanation

Screen readers or some browser plug-ins provide quick navigation based on the structural elements of the HTML5 document.

In their absence, blind and severely visually impaired people may have difficulty identifying large areas of the document or moving quickly through the page, for example on navigation elements.

The motor handicapped will see the fast access functionalities to the large areas of the document as inoperative.

### HTML5 elements and ARIA landmarks

The large areas that allow to structure a web page are:

* the main header;
* the main content;
* the footer (legal information, etc.) ;
* the search engine;
* the main navigation and any secondary navigation.

Each of these zones has a specific ARIA property that will allow them to be identified with certainty. These properties are implemented with the `role` attribute:

* the main header: `role="banner"` ;
* the main content: `role="main"`;
* the footer (legal information, etc.): `role="contentinfo"` ;
* the search engine: `role="search"` ;
* the main navigation and any secondary navigation: `role="navigation"`.

In HTML5, each of these zones is identified by a specific HTML5 tag:

* the main header: `<header>` ;
* the main content: `<main>` ;
* the footer (legal information, etc.) : `<footer>` ;
* the main navigation and any secondary navigation: `<nav>`.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
* You can find several header tags, but the `role="banner` must be unique in the page.
* The `<main>` tag and the `role="main"` are unique in the page.
* You can find several footer tags, but the `role="contentinfo"` must be unique in the page.
* We can find several `<nav>` tag and several `role="navigation"`. In the case of several navigation roles, a good practice is to add an `aria-label` or `aria-labelledby` attribute to differentiate them.
* The `role="search"` is unique in the page.
</div>

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
When an area is hidden (in CSS, or with `aria-hidden'), this area will not be rendered in assistive technologies. It is therefore necessary to add the role on a visible element.
</div>

### How to determine what is...

#### The main header?

A banner usually appears at the top of the page and typically spans the full width. It includes things such as the logo or identity of the site sponsor, and a site-specific search tool.

#### The main content?

The main content of a page is the content of interest. It is the content that gives meaning to your page and without which your page is useless.

#### Primary and secondary navigation?

The main navigation, generally called the "menu", is an element that can be found on all the pages of your website.
It is the one found at the beginning of the content to reach the main sections of your site.

Very often, there are also contextual navigations in specific sections. These elements are to be considered as secondary navigations and must be implemented in the same way as the main navigation.

<div class="tip">
<svg role="img" aria-label="Tip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="28" height="40"><title>Tip</title><path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"/></svg>
In order to allow users who navigate with a screen reader to distinguish all the navigations you have defined, you can titrate them using the `aria-label` property.
</div>

```html
<nav role="navigation" aria-label="main menu"></nav>

<nav role="navigation" aria-label="In the same section"></nav>
```

#### The search engine?

The search engine can be an interesting alternative for users who could not use the menu or site map. For it to be considered as an alternative, it must nevertheless allow, based on its results, to reach any content of the site.

Thus, a search engine limited to a catalogue cannot be considered as a navigation system.

#### The footer?

The footer is to be considered as an element that provides information on the site. We will generally place, if present, legal information (copyright, link to legal notices...), contact information (address, phone...).

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
**The footer region is not necessarily equivalent to the footer of the graphic model.**
</div>
