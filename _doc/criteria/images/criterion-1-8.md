---
layout: topic
navigation: images
---

<header>
## Criterion 1.8 [AA] <span>When an [alternate mechanism](../glossary.html#mMecaRempl) is missing, each [image of text](../glossary.html#mImgText) [conveying information](../glossary.html#mImgInfo) must be replaced with [styled text](../glossary.html#mTexteStyle), if possible. Has this rule been followed (except in [particular cases](../particular-cases.html#cpCrit1-8 "Particular cases for criterion 1.8"))?</span>
{: .article-header__title}
</header>

### Explanation

When text images can be reproduced in HTML and CSS, you should not use an image. This is quite possible:

* when the fonts used are not complex fonts,
* when the image does not play on a distortion of the font,
* or when the font is not a font that would be difficult to reproduce.

In all other cases, the texts must be made in HTML and CSS, in order to allow users who need to adapt their readability (enlargement of characters, modification of colours, fonts...).

It is also possible to keep the text images and provide the user with a replacement mechanism that allows him, with a button for example, to replace all the text images with stylish texts.

**Technical note:** read the [technical note about vector images of type text](../technical-notes.html#TNcrit1-8).

### Mapping with WCAG 2.0

WCAG 2.0 success criterion: [1.4.5](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation)

WCAG 2.0 sufficient technique(s) and/or failure(s): [G136](http://www.w3.org/TR/WCAG-TECHS/G136.html) - [G140](http://www.w3.org/TR/WCAG-TECHS/G140.html) - [C22](http://www.w3.org/TR/WCAG-TECHS/C22.html) - [C30](http://www.w3.org/TR/WCAG-TECHS/C30.html)

### Tests

*   **Test 1.8.1:** When an [alternate mechanism](../glossary.html#mMecaRempl) is missing, each [image of text](../glossary.html#mImgText) (`img` tag) [conveying information](../glossary.html#mImgInfo) must be replaced with [styled text](../glossary.html#mTexteStyle), if possible. Has this rule been followed (except in [particular cases](./particular-cases.html#cpCrit1-8 "Particular cases for criterion 1.8"))?
*   **Test 1.8.2:** When an [alternate mechanism](../glossary.html#mMecaRempl) is missing, each button bearing an image of text (`input` tag with the attribute `type="image"`) [conveying information](../glossary.html#mImgInfo), must be replaced with [styled text](../glossary.html#mTexteStyle), if possible. Has this rule been followed (except in [particular cases](./particular-cases.html#cpCrit1-8 "Particular cases for criterion 1.8"))?
*   **Test 1.8.3:** When an [alternate mechanism](../glossary.html#mMecaRempl) is missing, each [object image of text](../glossary.html#mImgTextObj) (`object` tag with the attribute `type="image/…"`) [conveying information](../glossary.html#mImgInfo) must be replaced with [styled text](../glossary.html#mTexteStyle) if possible. Has this rule been followed (except in [particular cases](./particular-cases.html#cpCrit1-8 "Particular cases for criterion 1.8"))?
*   **Test 1.8.4:** When an [alternate mechanism](../glossary.html#mMecaRempl) is missing, each embedded image of text (`embed` tag with the attribute `type="image/…"`) [conveying information](../glossary.html#mImgInfo) must be replaced with [styled text](../glossary.html#mTexteStyle) if possible. Has this rule been followed (except in [particular cases](./particular-cases.html#cpCrit1-8 "Particular cases for criterion 1.8"))?
*   **Test 1.8.5:** When an [alternate mechanism](../glossary.html#mMecaRempl) is missing, each bitmap image of text (`canvas` tag) [conveying information](../glossary.html#mImgInfo) must be replaced with [styled text](../glossary.html#mTexteStyle) if possible. Has this rule been followed (except in [particular cases](./particular-cases.html#cpCrit1-8 "Particular cases for criterion 1.8"))?

### How to test

#### Tests 1.8.1, 1.8.2, 1.8.3, 1.8.4, 1.8.5

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1.  For all images of text (`img`, `input type="image"`, `img` or `object` with the `usemap` attribute, `object type="image"`, `embed type="image"`, `canvas`) check:
    *   That there is an [alternate mechanism](../glossary.html#mMecaRempl);
    *   Or that the image contains a text with graphic effects that cannot be done with CSS.
2.  If true, the test is passed.
