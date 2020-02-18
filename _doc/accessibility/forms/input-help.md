---
title: Input help
navigation: forms
nav: menu-criteria
---

<header>
## Input help
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Blind, severely visually impaired, visually impaired, mentally handicapped.

**RGAA criteria:** [Criterion 11.10 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-11-10)
{: .criteria }

### Explanation

For all required fields that require a particular format, you must indicate this to the user.

For example, a date field waits for the day, month and year values to be distinguished by a slash to be compliant. You must therefore indicate "yyyy-mm-dd" which corresponds to the input format.

* in the `label` tag;
* in the `title` attribute;
* in the text passage related via the `aria-labelledby` attribute.

You also have the attribute `aria-describedby` which allows you to reference the value of the identifier of a text passage containing the format indication. The use of `aria-describedby` on the form field will restore the text passage in addition to the label regardless of the method used: `<label>`, `title`, etc. unlike `aria-labelledby`.

```html
<label for="birthday">Birthday</label>
<input type="text" name="birthday" id="birthday" aria-describedby="format-date">
<p id="format-date">aaaa/mm/dd</p>
```

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
When the form field type offers an input mask, such as date or time fields, format indication is not required.
</div>

#### Automatic filling of the fields with user data

People with language and memory impairments, motor impairments, or impairments that affect the performance of a function can spend a lot of time validating a form.
In order to help the user to fill in the relevant fields more simply, it is necessary to use the attribute `autocomplete`.

Autocomplete field are described in the [HTML 5.2 - Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute) and in the [WCAG 2.1 - Input Purposes for User Interface Components](https://www.w3.org/TR/WCAG21/#input-purposes).

Example:

```html
<form method="post" action="step2">
 <div>
   <label for="fname">First Name</label>
  <input id="fname" type="text" autocomplete="given-name">
  </div>
  <div>
    <label for="lname">Last Name</label>
    <input id="lname" type="text" autocomplete="family-name">
  </div>
  <div>
    <label for="phone">Phone</label>
    <input id="phone" type="tel" autocomplete="tel">
  </div>
  <div>
    <button type="submit">Sign up</button>
  </div>
</form>
```

