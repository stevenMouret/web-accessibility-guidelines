---
title: Text in image
navigation: images
nav: menu-criteria
description: Accessibility of text in image
---

<header>
# Text in image
{: .article-header__title}
</header>

**Impact:** Moderate to high

**Users mainly impacted:** Visually impaired.

**RGAA criteria:** [Criterion 1.8](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-1-8)
{: .criteria }

## Explanation

When text images can be reproduced in HTML and CSS, you should not use an image. This is quite possible:

* when the fonts used are not complex fonts,
* when the image does not play on a distortion of the font,
* or when the font is not difficult to reproduce.

In all other cases, the texts must be made in HTML and CSS, to allow users who need to adapt their readability (enlargement of characters, modification of colours, fonts...).

It is also possible to keep the text images and provide the user a replacement mechanism that allows him, with a button for example, to replace all the text images with styled texts.
