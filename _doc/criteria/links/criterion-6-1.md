---
title: Criterion 6.1 [A]
navigation: links
nav: menu-sidebar
---

<header>
## Criterion 6.1 [A] <span>Is each [link](../glossary.html#mLien) explicit (except in [particular cases](../particular-cases.html#cpCrit6- "Particular cases for criterion 6.1"))?</span>
{: .article-header__title}
</header>

**Impact:** Major

**Users mainly impacted:** Blind, severely visually impaired, visually impaired, motor impaired.

### Explanation

A link allows you to navigate between the pages of a site or to link to another site. A link is defined by two important elements:

* its link text, the text visible and clickable by users;
* its context

A link must be explicit by itself (its link text alone) or through its [context](../glossary.html#mContexteLien) :

*   The content of the sentence enclosing the link;
*   The content of the paragraph (`p` tag) containing the link;
*   The content of the list item (`li` tag), or the content of a parent list item (`li` tag) of the list item, containing the link;
*   The content of the heading (`h1` to `h6` tags) that is the closest ascendant of the link;
*   The content of the table header cell(s) (`th` tags) associated with the table data cell (`td` tag) containing the link;
*   The content of the table data cell (`td` tag) containing the link;
*   The content of the link title (`title` attribute);
*   The content of the `aria-label` property;
*   The content of the chunk(s) of text associated with the link via the `aria-labelledby` property.

<span class="visually-hidden">Important</span>
When none of these contexts makes the link explicit, the use of the [title](../glossary.html#mTitreLien) is the last possible solution.
{: .important}

<div class="tip">
<span class="visually-hidden">Tip</span>
* If I look at the text of my links, do I understand where I'm going by clicking on them?
* Avoid generic headings such as: click here, here, read more, visit this page, download...
</div>

### Mapping with WCAG 2.0

WCAG 2.0 success criteria: [1.1.1](http://www.w3.org/TR/WCAG20/#text-equiv-all) - [2.4.4](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs) - [2.4.9](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-link)

WCAG 2.0 sufficient technique(s) and/or failure(s): [H78](http://www.w3.org/TR/WCAG-TECHS/H78.html) - [H79](http://www.w3.org/TR/WCAG-TECHS/H79.html) - [H80](http://www.w3.org/TR/WCAG-TECHS/H80.html) - [H81](http://www.w3.org/TR/WCAG-TECHS/H81.html) - [H30](http://www.w3.org/TR/WCAG-TECHS/H30.html) - [F89](http://www.w3.org/TR/WCAG-TECHS/F89.html) - [G91](http://www.w3.org/TR/WCAG-TECHS/G91.html) - [G53](http://www.w3.org/TR/WCAG-TECHS/G53.html) - [ARIA7](http://www.w3.org/TR/WCAG-TECHS/ARIA7.html) - [ARIA8](http://www.w3.org/TR/WCAG-TECHS/ARIA8.html) - [F63](http://www.w3.org/TR/WCAG-TECHS/F63.html)

### Tests

*   **Test 6.1.1:** Does each [text link](../glossary.html#mLienTexte) meet one of the following conditions (except in [particular cases](../particular-cases.html#cpCrit6- "Particular cases for criterion 6.1"))?
    *   The [link text](../glossary.html#mIntituleLien) alone is sufficient to understand the [link](../glossary.html#mLien) purpose and target
    *   The [link context](../glossary.html#mContexteLien) is sufficient to understand the link purpose and target.
*   **Test 6.1.2:** Does each [image link](../glossary.html#mLienImage) meet one of the following conditions (except in [particular cases](../particular-cases.html#cpCrit6- "Particular cases for criterion 6.1"))?
    *   The [link text](../glossary.html#mIntituleLien) alone is sufficient to understand the [link](../glossary.html#mLien) purpose and target
    *   The [link context](../glossary.html#mContexteLien) is sufficient to understand the link purpose and target.
*   **Test 6.1.3:** Does each [combined link](../glossary.html#mLienComposite) meet one of the following conditions (except in [particular cases](../particular-cases.html#cpCrit6- "Particular cases for criterion 6.1"))?
    *   The [link text](../glossary.html#mIntituleLien) alone is sufficient to understand the [link](../glossary.html#mLien) purpose and target
    *   The [link context](../glossary.html#mContexteLien) is sufficient to understand the link purpose and target.

### How to test

#### Tests 6.1.1, 6.1.2, 6.1.3

Tool(s): [[web developer bar](../tools.html#web-developer-bar), [Validator](../tools.html#w3c-markup-validation-service)]

1.  In the "CSS" menu, choose "Disable All Styles".
2.  In the "CSS" menu, choose "Edit CSS", and in the field at the bottom of the window, type `a{border:2px solid red} svg{border:2px dotted green}`.
3.  In the "Images" menu, choose "Display Alt Attributes".
4.  In the "Information" menu, choose "Display Title Attributes".
5.  For each text link, [image link]((../glossary.html#mLienImage) (`img` or `area` tag) and [combined link]((../glossary.html#mLienComposite), check:
    *   That the link text alone (text, `alt` attribute, or their combinations in the case of combined links) allows to understand the link purpose and target;
    *   Or that the [link context]((../glossary.html#mContextLien) allows to understand the link purpose and target.
6.  For each link containing a vector image (`svg` tag), right-click and choose "Inspect Element". Check:
    *   That the `aria-label` property allows to understand the link purpose and target;
    *   Or that the [link context]((../glossary.html#mContextLien) allows to understand the link purpose and target.
7.  If true, the test is passed.
