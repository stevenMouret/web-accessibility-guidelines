---
title: Main contents identified
navigation: navigation
nav: menu-criteria
description: Management of the main content areas
---

<header>
# Main contents identified
{: .article-header__title}
</header>

**Users mainly impacted:** Blind, visually impaire.

**RGAA criteria:** [Criterion 12.10 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-12-10)
{: .criteria }

## Explanation

Users of technical assistance such as screen reader have the ability to navigate from one area to another when the content areas are well defined.

* The header area of the page has an ARIA `banner` role.
* The main navigation menu has an ARIA `navigation` role.
* The main content area has an ARIA `main` role.
* The footer area has an ARIA `contentinfo` role.
* The search engine on the site has an ARIA `search` role.
* The ARIA `banner`, `main`, `contentinfo` and `search` roles are unique in the page.
* The ARIA `navigation` role is reserved for the main and secondary navigation areas.

### About the footer area

This is information about the website or legal information. It includes, for example, legal notices, credits, terms of use, site map and possibly the accessibility page.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
Be careful not to confuse this footer area, unique in the site, with any content that can be tagged in HTML5 with the footer element.
</div>
