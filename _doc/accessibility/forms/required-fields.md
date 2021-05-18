---
title: Required fields
navigation: forms
nav: menu-criteria
---

<header>
# Required fields
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Blind, severely visually impaired, visually impaired, mentally handicapped.

**RGAA criteria:** [Criterion 11.10 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-11-10)
{: .criteria }

## Explanation

When a field is required, it is necessary to make a good restitution to all users. This restitution must be visual and indicated in the code.

There is no requirement that a required field be systematically indicated to the user, it is useless to do on a single field of a search engine.
However, **if you indicate the required fields, this must be done in an accessible way**.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
Required fields must be positioned in the code before the submit button.
</div>

<div class="tip">
<svg role="img" aria-label="Tip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="28" height="40"><title>Tip</title><path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"/></svg>
It is not always necessary to make fields required. When a form has only one field (search form, newsletter subscription), there is no need to make it required.
</div>

### Text indication in the label

The most robust solution. Indicate by an explicit term the required nature of the field directly in the label (`label`, `title`, `aria-label`...).

```html
<label for="name">Name<em aria-hidden="true"> (required)</em></name>
<input type="text" name="name" id="name" required>
```

<div class="tip">
<svg role="img" aria-label="Tip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="28" height="40"><title>Tip</title><path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"/></svg>
You will notice the addition of the attribute `aria-hidden="true"` which allows you not to vocalize the information in order not to create redundancy of information in case the field has an attribute `required` or `aria-required`.
</div>

### Indication by a symbol

It is very common to find the required field indication by means of an asterisk. This practice is completely consistent if you give a caption to this symbol before the form concerned.

```html
<p aria-hidden="true">Fields preceded by an asterisk (*) are required</p>
<form>
    <label for="name">Name<em aria-hidden="true"> *</em></label>
    <input type="text" name="name" id="name" required>
</form>
```

### Indication by colour

In case the color is used to indicate the required character of the field, it is necessary to add a symbol or an explicit text.
