---
title: Criterion 3.2 [A]
navigation: colors
nav: menu-sidebar
---

<header>
## Criterion 3.2 [A] <span>On each Web page, [information](../glossary.html#mInfoCouleur) must not be conveyed through color only. Has this rule been implemented in a relevant way?</span>
{: .article-header__title}
</header>

### Explanation

The point here is to verify that the information that is given by a means other than color is consistent. It is important that the information is transmitting by a color, shape and text.

The means of transmitting information other than by colour can be:

* a textual indication
* a means involving graphics (pictogram, background image, shape, different border style, etc.) and through a code complement (aria-label, title, hidden text, aria-current, etc.)
* another typographic style (bold, italic, text size, other font, etc.) and through a code complement (aria-label, title, hidden text, aria-current, etc.)

### Examples

#### In a form

![Form example](../../img/color-3.2-1.png)

In this example the required fields are indicated a textual indication (red star). In this case red star is not relevant because this does not imply the requirement to fill in the field. It is necessary to add **before the form** the mention about the required fields like in the example.

The best way to be most relevant is to write the required statement directly on the label. First name (required).

<span class="visually-hidden">Important</span>
Added the require attribute on the field is not enough. People who do not use technical assistance do not have the information.
{: .important}

#### In a Apple menu

##### Currently Apple menu
![Bad menu example](../../img/color-3.1-2.png)

##### Fixed Apple menu
![Fixed menu example](../../img/color-3.2-2.png)

In this menu we have added a shape (the triangle under the active item) and a code complement ([link title](../glossary.html#mTitreLien)).

### Mapping with WCAG 2.0

WCAG 2.0 success criterion: [1.4.1](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color)

WCAG 2.0 sufficient technique(s) and/or failure(s): [G138](http://www.w3.org/TR/WCAG-TECHS/G138.html) - [F13](http://www.w3.org/TR/WCAG-TECHS/F13.html)

### Tests

*   **Test 3.2.1:** For each word or a group of words, whose color conveys [information](../glossary.html#mInfoCouleur), information must not be conveyed through color only. Has this rule been implemented in a [relevant](../glossary.html#mPertinence) way?
*   **Test 3.2.2:** For each [information](../glossary.html#mInfoCouleur) conveyed through color and specified by a word or a group of words, information must not be conveyed through color only. Has this rule been implemented in a [relevant](../glossary.html#mPertinence) way?
*   **Test 3.2.3:** For each image [conveying information](../glossary.html#mInfoDonneeCouleur), [information](../glossary.html#mInfoCouleur) must not be conveyed through color only. Has this rule been implemented in a [relevant](../glossary.html#mPertinence) way?
*   **Test 3.2.4:** For each CSS element background property conveying [information](../glossary.html#mInfoCouleur), information must not be conveyed through color only. Has this rule been implemented in a [relevant](../glossary.html#mPertinence) way?
*   **Test 3.2.5:** For each [time-based media](../glossary.html#mMediaTemp) conveying [information](../glossary.html#mInfoCouleur), information must not be conveyed through color only. Has this rule been implemented in a [relevant](../glossary.html#mPertinence) way?
*   **Test 3.2.6:** For each [non time-based media](../glossary.html#mMediaNoTemp) conveying [information](../glossary.html#mInfoCouleur), information must not be conveyed through color only. Has this rule been implemented in a [relevant](../glossary.html#mPertinence) way?

### How to test

#### Tests 3.2.1, 3.2.2, 3.2.3, 3.2.4, 3.2.5, 3.2.6

1. In the page, spot the pieces of information conveyed by color in a text, an image, a time-based or non-time-based media.
2. For each piece of information conveyed by color in association with another means, check that this other means is relevant, i.e. it conveys information in every browsing context for all users.
3. If true, the test is passed.
