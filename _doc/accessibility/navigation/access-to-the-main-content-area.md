---
title: Access to the main content area
navigation: navigation
nav: menu-criteria
description: Skip menu to facilitate the navigation
---

<header>
# Access to the main content area
{: .article-header__title}
</header>

**Users mainly impacted:** Blind, visually impaire.

**RGAA criteria:** [Criterion 12.7](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-12-7)
{: .criteria }

## Explanation

In order to facilitate the navigation for users who are blind or partially sighted, it is necessary to provide a mechanism to bypass blocks that are repeated on multiple Web pages by skipping directly to the main content of the Web page.

This quick access link must be placed **at the top of the page**.

This link should ideally always be visible. Obviously they are useful for users who are blind, but also for users with visually impairment who use a screen magnifier and also a mouse.

If it is not visible, it must be displayed when the focus is taken. Do not use CSS properties that make them inactive such as :

* `display: none;`.
* `visibility: hidden;`.
* `width` and * `height` with the value to `0`.
* `font-size: 0;`.
* `hidden` HTML 5 attribute.
* `aria-hidden="true"`.
