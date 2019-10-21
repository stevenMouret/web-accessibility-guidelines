---
title: Input errors
navigation: forms
nav: menu-criteria
---

<header>
## Input errors
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Blind, severely visually impaired, visually impaired, mentally handicapped.

**RGAA criteria:** [Criterion 11.10 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-11-10)

### Explanation

When the form returns errors, the error must be mentioned either:

* in the field label (`<label>`, `title`, `aria-label`, `aria-labelledby`) ;
* in a text passage before the form, which contains a list of all the incorrect fields;
* in a text passage linked to the input field with the attribute `aria-describedby`.

You can also indicate these errors with the `aria-label` property and the `aria-invalid` property. In these cases, you must always provide a visible alternative for all other users.

```html
<label for="birthday">Birthday - Error - Please fill in this required field</label>
<input type="text" name="birthday" id="birthday" aria-invalid="true" aria-describedby="format-date" required>
<p id="format-date">yyyy/mm/dd</p>
```

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
Input error messages relating to the use of the wrong data format must include an example of actual input.
</div>
