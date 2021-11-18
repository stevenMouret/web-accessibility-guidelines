---
title: Group related fields
navigation: forms
nav: menu-criteria
description: Accessibility of group of fields
---

<header>
# Group related fields
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Blind, visually impaired, mentally impaired.

**RGAA criteria:** [Criterion 11.5](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-11-5) - [Criterion 11.6](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-11-6) - [Criterion 11.7](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-11-7)
{: .criteria }

## Explanation

In some forms, it is necessary to create groups of fields. These field groupings are useful to avoid misleading some users, especially blind users. For example, an online purchase form offers a form with the entry of a delivery address and a billing address. Since both will have fields with similar labels, it is imperative to create a grouping so that the user understands which address he is filling in. Field groupings must also have a relevant label in the `legend` tag.

Other typical cases of application are groups of checkboxes or radio buttons.

### Do not always group together
<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
 * A search form with only one text field does not need to be grouped.
 * A single checkbox to validate the agreement on personal data (GDPR).
</div>

### Group with ARIA

In some situations, it is not possible to group with the pair `fieldset` `legend`, in which case it is possible to use the grouping through `ARIA`.

```html
<div role="group" aria-labelledby="useful-content">
    <p id="useful-content">Was this content useful to you?</p>
    <div>
        <input type="radio" id="yes" checked>
        <label for="yes">Yes</label>
        <input type="radio" id="no">
        <label for="no">No</label>
    </div>
</div>
```

*[GDPR]: General Data Protection Regulation
