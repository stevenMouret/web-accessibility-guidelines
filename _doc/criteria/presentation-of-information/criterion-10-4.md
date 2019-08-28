---
title: Criterion 10.4 [AA]
navigation: presentation-of-information
nav: menu-criteria
---

<header>
## Criterion 10.4 [AA] <span>On each Web page, is text still readable when [characters size](../glossary.html#mTailleCaractere) is increased until at least 200%?</span>
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Visually impaired.

### Explanation

The proper adaptation of the contents of a web page when the font size is increased is essential for visually impaired users.
These users will only want to enlarge the font size, not the page (graphic zoom).
The formatting must then be adapted appropriately so that all texts remain readable and understandable at certain zoom levels.

* In Firefox, in "View" go to "Zoom" and select "Zoom text only ". From this point on, `Ctrl +` only enlarges font sizes.
* In Safari, under "Presentation" check "Reduce/enlarge text only". From this point on, `Ctrl +` only enlarges font sizes.
* In Internet Explorer, in "View" (or "Page" depending on the version) go to "Text size" and select one of the proposed values (for example "Largest").

#### Font sizes in relative units only

The first thing is to make sure that all your font sizes are reported in relative units.

You can use the following units:

* em, rem,
* %,
* vw, vh (viewport size units),
* xsmall, small, large... (keywords).

On the other hand, fixed units to define font sizes are prohibited. Among the fixed sizes, we find for example:

* px (pixel),
* pt (point),
* cm (centimeters).

This is because in some browsers (such as Internet Explorer), if font sizes are defined in fixed units, the font size magnification settings have no effect.

#### Readability when the font size is enlarged

At the AA level of the RGAA, the text must remain legible and no information should be lost when the default font size is increased by 200%.

200% corresponds to 6 times the `Ctrl +` action on Firefox (with the "Text only" option of the zoom).

#### Beware of fixed box sizes

When you make your layouts, you are often tempted to set heights or widths to get a harmonious look for certain elements.

When the box sizes are set by the CSS properties: height, width, max-height and max-width whose values are defined in pixels, they cannot be enlarged in proportion to the font size. The content that overflows will no longer be completely readable, or even unreadable.

Be careful, however, this only applies to boxes that contain or are likely to contain text.

You can use the pixel for the dimensions and positioning of boxes that do not contain text or are not likely to contain or serve as a background for text.

Preferably, replace in your style sheets:

* `width` by `min-width`
* `height` by `min-height`

Note that width and height do not pose any problem when the values are defined in em or rem.

Also, avoid using the `max-height` and `max-width` properties as much as possible without controlling their content and font magnification behavior.

#### Other CSS properties to be used with caution

`overflow:hidden`

To control overflows and to stick to a defined graphic, you may be tempted to use the overflow:hidden property. If the box in question does not contain any text, you can be pretty sure that this will not be a problem. On the other hand, if this box contains text and you have also defined a fixed height in pixels, the text will disappear.
Positionings.

Be careful with positioning that does not follow the standard flow, especially absolute and fixed positioning. Make sure that the magnification of the characters does not cause any overlap with these boxes positioned outside the flow.
Manage spaces and line breaks.

The property `white-space: nowrap` prevents text content from being submitted to the automatic line feed. This property should therefore be used with caution. Always perform tests to evaluate the character magnification behaviour.

