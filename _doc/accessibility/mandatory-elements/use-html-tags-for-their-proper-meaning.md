---
title: Use HTML tags for their proper meaning
navigation: mandatory-elements
nav: menu-criteria
---

<header>
## Use HTML tags for their proper meaning
{: .article-header__title}
</header>

**Impact:** Low to major

**Users mainly impacted:** Blind, severely visually impaired.

**RGAA criteria:** [Criterion 8.9 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-8-9)
{: .criteria }

### Explanation





Blind and visually impaired people use screen readers that rely on the semantics of tags, as provided by the browser, to render content and provide navigation features in the content.

If the use of tags is misused, the rendering may become incomprehensible and the navigation features in the content inoperative or give particularly unexpected results.

For example:
* used a title h2 to link to an h3 because the style is bigger. Preferred form in this case will make the structure of the site anarchic.
* Use spaces to format text in tabular form, or create the pagination of a summary.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
The use of `div` or `span` elements to create paragraphs is considered non-compliant and invalidates the criterion.
</div>
