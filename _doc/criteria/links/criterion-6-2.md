---
title: Criterion 6.2 [A]
navigation: links
nav: menu-criteria
---

<header>
## Criterion 6.2 [A] <span>For each [link](../glossary.html#mLien) with a [link title](../glossary.html#mTitreLien), is this title relevant?</span>
{: .article-header__title}
</header>

**Impact:** Major

**Users mainly impacted:** Blind, severely visually impaired, visually impaired, motor impaired.

### Explanation

The content of the link title should only be present if it is necessary to identify the link destination explicitly. A link title must include the link text with additional information. A link title will be considered irrelevant in the following cases:

* The link title is empty ;
* The link title is identical to the link text (see note 1);
* The link title does not include the link text.

<div class="important">
<span class="visually-hidden">Important</span>
* Note 1: By exception, a link title identical to the title is accepted only in the case of an image link (link containing only images), an icon for example, or a link whose only visible content is an image (composite link whose text is visually hidden).
* Note 2: It is recalled that the title attribute can cause real restitution problems, for example on the keyboard, on tactile surfaces, when assistive technology is set up not to restore them and should only be used as a last resort.
</div>

### Mapping with WCAG 2.0

WCAG 2.0 success criterion: [2.4.4](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs)

WCAG 2.0 sufficient technique(s) and/or failure(s): [H33](http://www.w3.org/TR/WCAG-TECHS/H33.html)

### Tests

*   **Test 6.2.1:** For each [text link](../glossary.html#mLienTexte) with a [link title](../glossary.html#mTitreLien) (`title` attribute), is the content of this attribute relevant?
*   **Test 6.2.2:** For each [image link](../glossary.html#mLienImage) with a [link title](../glossary.html#mTitreLien) (`title` attribute), is the content of this attribute relevant?
*   **Test 6.2.3:** For each [combined link](../glossary.html#mLienComposite) with a [link title](../glossary.html#mTitreLien) (`title` attribute), is the content of this attribute relevant?

### How to test

#### Tests 6.2.1, 6.2.2, 6.2.3

Tool(s): [[web developer bar](../tools.html#web-developer-bar), [Validator](../tools.html#w3c-markup-validation-service)]

1.  In the "CSS" menu, choose "Disable All Styles".
2.  In the "CSS" menu, choose "Edit CSS", and in the field at the bottom of the window, type `a{border:2px solid red} svg{border:2px dotted green}`.
3.  In the "Images" menu, choose "Display Alt Attributes".
4.  In the "Information" menu, choose "Display Title Attributes".
5.  In the page, for each text link, [image link](../glossary.html#mLienImage) and [combined link](../glossary.html#mLienComposite), check that the `title` attribute:
    1.  Is not empty;
    2.  Repeats the information contained in the link text;
    3.  Provides additional information, except for image links where it is allowed to keep a `title` attribute strictly identical to the link text.
6.  If true, the test is passed.
