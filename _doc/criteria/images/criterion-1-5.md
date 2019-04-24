---
title: Criterion 1.5 [A]
navigation: images
nav: menu-sidebar
---

<header>
## Criterion 1.5 [A] <span>For each image used as [CAPTCHA](../glossary.html#mcaptcha), is a solution for alternative access to the content or to the purpose of the CAPTCHA available?</span>
{: .article-header__title}
</header>

**Impact:** Major

**Users mainly impacted:** Blind, visually impaired, mentally and cognitively impaired.

### Explanation

This mechanism will have to be completed by an alternative method allowing the user to retrieve the code in order to continue. Example, an image CAPTCHA can be associated with an audio player.

### Mapping with WCAG 2.0  

WCAG 2.0 success criterion: [1.1.1](http://www.w3.org/TR/WCAG20/#text-equiv-all)

WCAG 2.0 sufficient technique(s) and/or failure(s): [G144](http://www.w3.org/TR/WCAG-TECHS/G144.html)

### Tests

*   **Test 1.5.1:** Does each image (`img`, area, `object`, `embed`, `svg`, `canvas` tags) used as [CAPTCHA](../glossary.html#mcaptcha) meet one of the following conditions?
    *   Another non graphic form of CAPTCHA is available, at least
    *   Another solution to access the functionality protected by the CAPTCHA is available
*   **Test 1.5.2:** Does each [button](../glossary.html#mBtnForm) associated with an image (`input` tag with the attribute `type="image"`) used as [CAPTCHA](../glossary.html#mcaptcha) meet one of the following conditions?
    *   Another non graphic form of CAPTCHA is available, at least
    *   Another solution to access the functionality protected by the CAPTCHA is available

### How to test

#### Tests 1.5.1, 1.5.2

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1.  For each image (`img`, `area`, `object`, `embed`, `svg`, `canvas` tags) or button associated to an image (`type="image"`) used as a [captcha](../glossary.html#mcaptcha), check:
    *   The presence of a non-graphic alternative to the captcha;
    *   Or the presence of an alternative means of access to the functionality secured by the captcha.
2.  If true, the test is passed.
