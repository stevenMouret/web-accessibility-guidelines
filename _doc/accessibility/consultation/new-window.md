---
title: New window
navigation: consultation
nav: menu-criteria
---

<header>
## New window
{: .article-header__title}
</header>

**Impact:** Moderate to strong

**Users mainly impacted:** Blind, visually impaired, physically impaired, mentally handicapped.

**RGAA criteria:** [Criterion 13.2 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-13-2) - [Criterion 13.3 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-13-3)

### Explanation

Opening new windows can require a lot of effort from some users to return to the page they were viewing. Thus, a user browsing only with the tab key will have to perform additional manipulations to close and return to the original window. Users with attention deficit disorders may also be confused by the opening of new windows, especially if they are not doing so (opening without user action).

For each interactive element that opens a new window (or tab), you must notify the user.

To warn the user, you can:

* Add the mention "new window" directly in the text of the element concerned.
* Add, if the element allows it, a title on the template: element text - new window.

```html
<a href="https://www.london.gov.uk" target="_blank" title="Discover London, new window">Discover London</a>
```

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
be careful to respect the rules for [creating titles](../links/link-title.html).
</div>

### No new windows without user action

Opening a new window when the user has not requested it can be very disturbing.

If this use is strongly discouraged, there is one case where the discomfort caused is too great to be accepted. This concerns the opening of new windows when the page is loaded.

Indeed, in this case blind people, screen reader users, and people with mental disabilities may no longer know which is the main content page.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
Opening new windows when the page is loaded is strictly prohibited.
</div>
