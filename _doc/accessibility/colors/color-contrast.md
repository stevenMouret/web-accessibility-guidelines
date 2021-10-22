---
title: Color contrast
navigation: colors
nav: menu-criteria
description: Accessibility of color contrasts on text and interactive elements.
---

<header>
# Color contrast
{: .article-header__title}
</header>

**Impact:** High to major

**Users mainly impacted:** Visually impaired

**RGAA criteria:** [Criterion 3.2](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-3-2) - [Criterion 3.3](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-3-3)
{: .criteria }

## Explanation

For a user who has difficulties perceiving contrasts, a text may be impossible to read if its colour is not sufficiently contrasted with the background colour.

These contrasts concern:

* the text and the text present in the image,
* the interface components or graphical elements that convey information.

There are values that provide sufficient minimum contrast for a large proportion of users with color perception difficulties.

To evaluate the contrasts of an element, you can use the following tools:

* [**Color Contrast Analyzer**](https://developer.paciellogroup.com/resources/contrastanalyser/) thanks to a pipette, you can go and pick any colours displayed on the screen, from any kind of document (web, office, video, etc.) for analysis;
* Lighthouse in Google **Chrome** browser allows you to quickly check your web page for text content.
* Contrast tools is available in Mozilla **Firefox** developer tools in accessibility tab.

### Text without bold

* Less than 24px: the contrast ratio is at least 4.5:1.
* Greater than or equal to 24px: the contrast ratio is at least 3:1.

### Text with bold

* Less than 18.5px: the contrast ratio is at least 4.5:1.
* Greater than or equal to 18.5px: the contrast ratio is at least 3:1.

### The interface components or graphical elements that convey information

An interface component is an element with which the user can interact such as a button, a link, an input field...

The contrast ratio is at least 3:1 of:

* The colors of an interface component in its different states and the background color.
* The different colors composing a graphic element and its background color.
* The different colors composing a graphic element.

### Derogated cases
* The text is part of a logo or brand name of an organization or company.
* The text or graphic element is purely decorative.
* The text or graphical element is part of an interface element on which no action is possible (e.g. a button with the disabled attribute).

### Testing Color Contrast & Simulating Color Blindness with the Firefox Accessibility Inspector

<div class="video"><iframe title="Testing Color Contrast & Simulating Color Blindness with the Firefox Accessibility Inspector" src="https://www.youtube.com/embed/eBefjaWud-M" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

If you don't see these tools, go to `about:config` and search the property "gfx.webrender.all". This property must be to `true`.

### Tools

* [Color review](https://color.review/)
* [Button Contrast Checker](https://www.aditus.io/button-contrast-checker/)
* [A11Y Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/)
* [Contrast finder](https://app.contrast-finder.org/)
* [Sass Colour Function Calculator](https://razorltd.github.io/sasscolourfunctioncalculator/)
