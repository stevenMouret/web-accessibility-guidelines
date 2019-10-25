---
title: Text in image
navigation: images
nav: menu-criteria
---

<header>
## Text in image
{: .article-header__title}
</header>

**Impact:** Moderate to high

**Users mainly impacted:** Visually impaired.

**RGAA criteria:** [Criterion 1.8 [AA]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-1-8)

### Explanation

When text images can be reproduced in HTML and CSS, you should not use an image. This is quite possible:

* when the fonts used are not complex fonts,
* when the image does not play on a distortion of the font,
* or when the font is not a font that would be difficult to reproduce.

In all other cases, the texts must be made in HTML and CSS, in order to allow users who need to adapt their readability (enlargement of characters, modification of colours, fonts...).

It is also possible to keep the text images and provide the user with a replacement mechanism that allows him, with a button for example, to replace all the text images with stylish texts.

**Technical note:** read the [technical note about vector images of type text](../technical-notes.html#TNcrit1-8).
