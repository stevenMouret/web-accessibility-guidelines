---
title: Color contrast
navigation: colors
nav: menu-criteria
---

<header>
## Color contrast
{: .article-header__title}
</header>

**Impact:** High to major

**Users mainly impacted:** Visually impaired

**RGAA criteria:** [Criterion 3.3 [AA]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-3-3)
{: .criteria }

### Explanation

For a user who has difficulty perceiving contrasts, some writings may be impossible to read if the writing colour is not sufficiently contrasted with the background colour.

These contrasts concern:

* the texts you enter in the editor;
* the texts present in the images;
* the texts embedded in the videos.

There are values that provide sufficient minimum contrast for a large proportion of users with color perception difficulties.

To evaluate the contrasts of the elements you insert, you can use tools:

* [**Color Contrast Analyzer**](https://developer.paciellogroup.com/resources/contrastanalyser/) thanks to a pipette, you can go and pick colours from all document formats (web, office, video, etc.) for analysis;
* Lighthouse in Google **Chrome** browser allows you to quickly check your web page for text content.
* Contrast tools is available in Mozilla **Firefox** developer tools in accessibility tab.
* [**Accessible colors**](https://accessible-colors.com/) is a tools to know the right contrast between two colors. It has the advantage of offering contrasts that are as close as possible to the original colours.

#### Testing Color Contrast & Simulating Color Blindness with the Firefox Accessibility Inspector

<div class="video"><iframe title="Testing Color Contrast & Simulating Color Blindness with the Firefox Accessibility Inspector" width="560" height="315" src="https://www.youtube.com/embed/eBefjaWud-M" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

If you don't see these tools, go to `about:config` and search the property "gfx.webrender.all". This property must be to `true`.
