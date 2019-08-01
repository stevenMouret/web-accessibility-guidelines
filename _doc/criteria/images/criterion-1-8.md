---
title: Criterion 1.8 [AA]
navigation: images
nav: menu-criteria
---

<header>
## Criterion 1.8 [AA] <span>When an [alternate mechanism](../glossary.html#mMecaRempl) is missing, each [image of text](../glossary.html#mImgText) [conveying information](../glossary.html#mImgInfo) must be replaced with [styled text](../glossary.html#mTexteStyle), if possible. Has this rule been followed (except in [particular cases](../particular-cases.html#cpCrit1-8 "Particular cases for criterion 1.8"))?</span>
{: .article-header__title}
</header>

**Impact:** Moderate to high

**Users mainly impacted:** Visually impaired.

### Explanation

When text images can be reproduced in HTML and CSS, you should not use an image. This is quite possible:

* when the fonts used are not complex fonts,
* when the image does not play on a distortion of the font,
* or when the font is not a font that would be difficult to reproduce.

In all other cases, the texts must be made in HTML and CSS, in order to allow users who need to adapt their readability (enlargement of characters, modification of colours, fonts...).

It is also possible to keep the text images and provide the user with a replacement mechanism that allows him, with a button for example, to replace all the text images with stylish texts.

**Technical note:** read the [technical note about vector images of type text](../technical-notes.html#TNcrit1-8).
