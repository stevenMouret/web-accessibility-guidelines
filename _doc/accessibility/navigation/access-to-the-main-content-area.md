---
title: Access to the main content area
navigation: navigation
nav: menu-criteria
---

<header>
## Access to the main content area
{: .article-header__title}
</header>

**Users mainly impacted:** Blind, visually impaire.

**RGAA criteria:** [Criterion 12.7](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/criteres/#crit-12-7)
{: .criteria }

### Explanation

In order to facilitate the navigation of blind and partially sighted people, it is necessary to provide a mechanism to bypass blocks that are repeated on multiple Web pages by skipping directly to the main content of the Web page.

This quick access link must be placed **at the top of the page**.

This link should ideally always be visible. Indeed they are useful for blind users but also for visually impaired users who use a screen magnifier but also a mouse.

If it is not visible, it must be displayed when the focus is taken. Do not use CSS properties that make them inactive such as :

* `display: none;`.
* `visibility: hidden;`.
* `width` and * `height` with the value to `0`.
* `font-size: 0;`.
* `hidden` HTML 5 attribute.
* `aria-hidden="true"`.
