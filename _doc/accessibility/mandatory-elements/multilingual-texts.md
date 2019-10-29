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

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
There are exceptions, proper names, an imaginary language, a common name for a foreign language in the dictionary.
</div>
