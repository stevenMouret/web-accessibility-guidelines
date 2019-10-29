---
title: Multilingual texts
navigation: mandatory-elements
nav: menu-criteria
---

<header>
## Multilingual texts
{: .article-header__title}
</header>

**Impact:** Strong

**Users mainly impacted:** Blind, severely visually impaired, mentally and cognitively handicapped.

**RGAA criteria:** [Criterion 8.3 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-8-3) - [Criterion 8.4 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-8-4) - [Criterion 8.7 [AA]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-8-7) - [Criterion 8.8 [AA]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-8-8)
{: .criteria }

### Explanation

A blind user, who is visually impaired or has difficulty reading, browses a website using a screen reader. Screen reader makes a sound restitution of words, so it is important that the vocal synthesis pronounces in the language defines the words it encounters in order to be understood.

A web page has a main language, this is defined on the `html` tag
When a word or group of words are in a language different from the language of the document, it is necessary to specify it with the attribute `lang`.

Defining the language of a document:
```html
<html lang="en">
```

Changing the language on a text:
```html
<p>The <abbr lang="fr" title="Référentiel Général d'Accessibilité pour les Administrations">RGAA</abbr> is the French government's General Accessibility Reference for Administrations.</p>
```
