---
title: Criterion 3.3 [AA]
navigation: colors
nav: menu-sidebar
---

<header>
## Criterion 3.3 [AA] <span>On each Web page, is the [contrast](../glossary.html#mContraste) between the text and background colors sufficient (except in [particular cases](../particular-cases.html#cpCrit3- "Particular cases for criterion 3.3"))?</span>
{: .article-header__title}
</header>

**Impact:** High to major

**Users mainly impacted:** Visually impaired

### Explanation

Color contrasts refer to the contrast ratio between the writing color of a text and its background color.

These contrasts concern:

* the texts you enter in the editor;
* the texts present in the images;
* the texts embedded in the videos.

There are values that provide sufficient minimum contrast for a large proportion of users with color perception difficulties.

To evaluate the contrasts of the elements you insert, you can use tools:

* [Color Contrast Analyzer](https://developer.paciellogroup.com/resources/contrastanalyser/) thanks to a pipette, you can go and pick colours from all document formats (web, office, video, etc.) for analysis;
* Lighthouse in Google Chrome browser allows you to quickly check your web page for text content.

### Mapping with WCAG 2.0

WCAG 2.0 success criterion: [1.4.3](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast)

WCAG 2.0 sufficient technique(s) and/or failure(s): [G18](http://www.w3.org/TR/WCAG-TECHS/G18.html) - [G136](http://www.w3.org/TR/WCAG-TECHS/G136.html) - [G148](http://www.w3.org/TR/WCAG-TECHS/G148.html) - [G174](http://www.w3.org/TR/WCAG-TECHS/G174.html) - [G145](http://www.w3.org/TR/WCAG-TECHS/G145.html) - [C29](http://www.w3.org/TR/WCAG-TECHS/C29.html)

### Tests

*   **Test 3.3.1:** On each Web page, do non-bold texts and images of non-bold text with font sizes smaller than or equal to [150% of the default font size](../glossary.html#mFontSize) (or 1.5em) meet one of the following conditions (except in [particular cases](../particular-cases.html#cpCrit3- "Particular cases for criterion 3.3"))?
    *   The contrast ratio between text and its background is at least 4.5:1
    *   The user can display the text with a contrast ratio of at least 4.5:1, via a provided mechanism
*   **Test 3.3.2:** On each Web page, do bold texts and images of bold text with font sizes smaller than or equal to [120% of the default font size](../glossary.html#mFontSize) (or 1.2em) meet one of the following conditions (except in [particular cases](../particular-cases.html#cpCrit3- "Particular cases for criterion 3.3"))?
    *   The contrast ratio between text and its background is at least 4.5:1
    *   The user can display the text with a contrast ratio of at least 4.5:1, via a provided mechanism
*   **Test 3.3.3:** On each Web page, do non-bold texts and images of non-bold text with font sizes larger than [150% of the default font size](../glossary.html#mFontSize) (or 1.5em), meet one of the following conditions (except in [particular cases](../particular-cases.html#cpCrit3- "Particular cases for criterion 3.3"))?
    *   The contrast ratio between text and its background is at least 3:1
    *   The user can display the text with a contrast ratio of at least 3:1, via a provided mechanism
*   **Test 3.3.4:** On each Web page, do bold texts and images of bold text with font sizes larger than [120% of the default font size](../glossary.html#mFontSize) (or 1.2em), meet one of the following conditions (except in [particular cases](../particular-cases.html#cpCrit3- "Particular cases for criterion 3.3"))?
    *   The contrast ratio between text and its background is at least 3:1
    *   The user can display the text with a contrast ratio of at least 3:1, via a provided mechanism

### How to test

#### Tests 3.3.1, 3.3.2

Tool(s): [Web browser]

1. Start the "Colour Contrast Analyser" application.
2. In the page, spot the texts and embedded texts (images of texts and texts in CSS background images) of normal size that may cause contrast issues.
3. With the tool, pick the foreground and background colors.
4. Check that the contrast ratio is 4.5, at least.
5. Or else, check that there is a mechanism in the page that allows the user to display the text with a contrast ratio of 4.5, at least.
6. If true, the test is passed.

#### Tests 3.3.3, 3.3.4

Tool(s): [Web browser]

1. Start the "Colour Contrast Analyser" application.
2. In the page, spot the texts and embedded texts (images of texts and texts in CSS background images) of larger size that may cause contrast issues.
3. With the tool, pick the foreground and background colors.
4. Check that the contrast ratio is 3, at least.
5. Or else, check that there is a mechanism in the page that allows the user to display the text with a contrast ratio of 3, at least.
6. If true, the test is passed.
