---
title: Complex selection list
navigation: forms
nav: menu-criteria
---

<header>
## Complex selection list
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** blind, severely visually impaired, visually impaired, mentally handicapped.

**RGAA criteria:** [Criterion 11.8](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/criteres/#crit-11-8)
{: .criteria }

### Explanation

Blind and severely visually impaired, visually impaired and mentally handicapped persons may encounter difficulties if selection lists that are complex or contain many items are not structured by groupings.

If the list offers a limited choice, the options should be presented in a logical order.

On the other hand, if the choice list offers a number of options that can be grouped, then you should use the `<optgroup>` grouping tag with a `label` attribute that titles that grouping.

```html
<label for="food">What is your favorite food?</label>
<select id="food">
    <optgroup label="Fruits">
        <option value="1">Apples</option>
        <option value="2">Bananas</option>
        <option value="3">Peaches</option>
    </optgroup>
    <optgroup label="Vegetables">
        <option value="4">Carrots</option>
        <option value="5">Cucumbers</option>
    </optgroup>
<select>
```
