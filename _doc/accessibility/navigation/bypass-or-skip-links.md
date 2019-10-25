---
title: Bypass or skip links
navigation: navigation
nav: menu-criteria
---

<header>
## Bypass or skip links
{: .article-header__title}
</header>

**Users mainly impacted:** Blind, visually impaire.

**RGAA criteria:** [Criterion 12.11 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-12-11)
{: .criteria }

### Explanation

In order to facilitate the navigation of blind and partially sighted people, it is necessary to place skip links **at the beginning of the page**.

It is therefore necessary to implement:

* A link to the main content area.
* A link that allows you to avoid or access each group of important links (such as navigation).
* A link to the search area.
* A link to the help page.

These links should ideally always be visible. Indeed they are useful for blind users but also for visually impaired users who use a screen magnifier but also a mouse.

If they are not visible, they must be displayed when the focus is taken. Do not use CSS properties that make them inactive such as :

* `display: none;`.
* `visibility: hidden;`.
* `width` and * `height` with the value to `0`.
* `font-size: 0;`.
* `hidden` HTML 5 attribute.
* `aria-hidden="true"`.
