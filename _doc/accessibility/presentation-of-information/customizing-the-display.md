---
title: Customizing the display
navigation: presentation-of-information
nav: menu-criteria
---

<header>
# Customizing the display
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Visually impaired.

**RGAA criteria:** [Criterion 10.4](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/criteres/#crit-10-4) - [Criterion 10.5](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/criteres/#crit-10-5) - [Criterion 10.12](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/criteres/#crit-10-12)
{: .criteria }

## Explanation

### Enlargement of characters

The proper adaptation of the contents of a web page when the font size is increased is essential for visually impaired users.
The formatting must then be adapted appropriately so that all texts remain readable and understandable at certain zoom levels.

**The font size must be increased by at least 200% by enlarging the text or the graphic zoom of the browser**.

#### Enlargement of the browser text
* In Firefox, in "View" go to "Zoom" and select "Zoom text only ". `Ctrl +` increase font-size, `Ctrl -` decrease font-size and `Ctrl 0` in order to reset the default zoom.
* In Safari, `Option Command +` increase font sizes, `Option Command -` decrease font-size.
* In Internet Explorer, in "View" (or "Page" depending on the version) go to "Text size" and select one of the proposed values (for example "Largest").

#### Browser graphic zoom enlargement
* In Firefox, Chrome, Edge, `Ctrl +` increase zoom level, `Ctrl -` decrease zoom level and `Ctrl 0` in order to reset the default zoom.
* In Safari, `Command +` increase zoom level, `Command -` decrease zoom level.

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

The properties `white-space: nowrap` or `flex-wrap: nowrap` prevents text content from being submitted to the automatic line feed. This property should therefore be used with caution. Always perform tests to evaluate the character magnification behaviour.

#### Text spacing properties must be user-definable

The text must be readable when the display is changed according to these conditions:

```css
* {
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
}

p {
  margin-bottom: 2em !important;
}
```

### Readable texts

The visually impaired will have major difficulty reading content whose font size and colour scheme they cannot control and adapt to their perception abilities.

CSS background color declarations of elements that may contain text must be correctly defined.

To illustrate my point, here is a example. Zoom the text to 200%, some of the text will be unreadable because the background color is not indicated.

<p class="backgroundafter --ko">Unreadable<br>text in some<br>conditions</p>

<p class="backgroundafter --ok">Readable<br>text</p>

### Specify foreground and background colors

Users with vision loss or cognitive, language and learning challenges often prefer specific foreground and background color combinations.<br>
It is possible in the user agents to choose in its preferences colors of foreground and background. In this case, it can disturb the styles of the author (the creator of the site).<br>
For example, a user who has customized these colors may encounter problems on content where the foreground color is not defined. In this case, the foreground color will be the one chosen by the user and the background color will be the one defined by the author which can cause color contrast problems.

For this reason it is important to define the foreground and background colors of the elements. It is not necessary to specify the colors of each element, the colors can be inherited from a parent.

In general it is necessary to set on the <body> the CSS properties `color` and `background-color`.

```css
body {
    color: black;
    background: white;
}
```

It is then necessary to ensure that an element inherits or has the foreground and background colors.

#### How to test?

On Firefox browser, customize your foreground and background colors.

Settings, General, Language and Appearance, Colors button.

Check your test page, the colors previously chosen should not be displayed. If it is the case a color is not defined.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
`background-color` may also be specified using `background-image` because users may have images turned off in their browser. In this case, if a text is above a background image in CSS, it may not be visible.
</div>
