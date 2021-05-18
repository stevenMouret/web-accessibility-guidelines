---
title: Information conveyed by shape, size or location
navigation: presentation-of-information
nav: menu-criteria
---

<header>
# Information conveyed by shape, size or location
{: .article-header__title}
</header>

**Impact:** Major

**Users mainly impacted:** Blind, severely visually impaired.

**RGAA criteria:** [Criterion 10.14 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-10-14) - [Criterion 10.15 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-10-15)
{: .criteria }

## Explanation

As with colours, the absence of an alternative to information given by shape, size or location can make a process unusable or content incomprehensible to the blind and the severely visually impaired.

There is a wide variety of cases, information provided by an icon or image in CSS, the active element of a content by an effect in CSS, a tag cloud system that indicates the relevance of a word by the size of the characters...

It is therefore necessary to bring the information to the understanding of all users. Depending on the case, it is possible to add the missing information in the code via a `title` attribute, an `aria-label` attribute or an off-screen text.

### Example

<p>
<span class="text">Wind:</span>
<span class="fas fa-wind" aria-hidden="true" title="West"></span>
<span class="sr-only">West</span>
</p>

```html
<p>
    <span class="text">Wind:</span>
    <span class="fas fa-wind" aria-hidden="true" title="West"></span>
    <span class="sr-only">West</span>
</p>
```



