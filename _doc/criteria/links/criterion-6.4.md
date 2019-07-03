---
title: Criterion 6.4 [A]
navigation: links
nav: menu-sidebar
---

<header>
## Criterion 6.4 [A] <span>For each web page, does each [identical link](../glossary.html#mLienIdentique) have the same purpose and target?</span>
{: .article-header__title}
</header>

**Impact:** Major

**Users mainly impacted:** Blind, severely visually impaired, visually impaired, motor impaired.

### Explanation

Le but de ce critère est de facilité la navigation et la compréhension des liens dans un contexte identique.
Si deux liens identiques (ayant le même "nom accessible") ayant une destination différente et ayant le même contexte, l'intitulé du lien seul ne permet pas de rendre le lien explicite.

Attention : des liens avec des intitulés identiques mais des titres de liens différents ou des contextes de liens différents ne sont pas identiques
Exemple : des liens "En savoir plus" si ils ont un contexte différent ne sont pas identiques.

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
