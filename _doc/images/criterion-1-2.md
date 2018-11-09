---
layout: topic
title: Criterion 1.2 [A]
teaser: For each decorative image with a text alternative, is this alternative empty?
navigation: images
---

In order to be able to test this criterion you need to know what a [decorative image](../glossary.html#image-decorative) is.

If the image does not contain any information, the image is not intended to be restituted. Its alternative must then be empty. In addition, it must not have a `title` attribute.

<span class="visually-hidden">Astuce</span>
In order to know if an image is decorative or informative, hide it, take into account the context and ask yourself the question:<br>
**Do you have lost information?**<br>
If so, then this image conveys information.
{: .tip}

### Tests

*   **Test 1.2.1:** Does each [decorative image](../glossary.html#image-decorative) (`img` tag), without [caption](../glossary.html#image-caption) and with an `alt` attribute, meet the following conditions:
    *   The `alt` attribute has an empty value (`alt=""`)
    *   The decorative image does not have a `title` attribute
    *   The `img` tag does not have any ARIA role, property or state meant to label the image (`aria-label`, `aria-describedby`, `aria-labelledby`, for example).
*   **Test 1.2.2:** Does each [non clickable area](../glossary.html#area-non-clickable) (`area` tag with no `href` attribute), not conveying any information, and with an `alt` attribute, meet the following conditions:
    *   The `alt` attribute has an empty value (`alt=""`)
    *   The non clickable area does not have a `title` attribute
    *   The `area` tag does not have any ARIA role, property or state meant to label the image (`aria-label`, `aria-describedby`, `aria-labelledby`, for example).
*   **Test 1.2.3:** Does each [decorative](../glossary.html#image-decorative) [image object](../glossary.html#image-object) (`object` tag with the attribute `type="image/…"`), without [caption](../glossary.html#image-caption), not conveying any information, meet these conditions:
    *   The `object` tag has an `aria-hidden="true"` attribute
    *   The alternative text between `<object>` and `</object>` is empty
    *   The `object` tag or one of its descendants does not have any ARIA role, property or state meant to label the image (`aria-label`, `aria-describedby`, `aria-labelledby`, for example).
*   **Test 1.2.4:** Does each [decorative](../glossary.html#image-decorative) vector image (`svg` tag), without [caption](../glossary.html#image-caption), meet the following conditions:
    *   The `svg` tag as an `aria-hidden="true"` attribute
    *   The `title` and `desc` tags are missing, or empty
    *   The `svg` tag, or one of its descendants, has no `title` attribute
    *   The `svg` tag, or one of its descendants, has no ARIA role, property or state, that aims at labelling the vector image (`aria-label`, `aria-describedby`, or `aria-labelledby`, for example)
*   **Test 1.2.5:** Does each [decorative](../glossary.html#image-decorative) bitmap image (`canvas` tag), without [caption](../glossary.html#image-caption), meet the follwing conditions?
    *   The `canvas` tag as an `aria-hidden="true"` attribute
    *   There is no text content between `<canvas>` and `</canvas>`
    *   The `canvas` tag, or one of its descendants, has no ARIA role, property or state, that aims at labelling the vector image (`aria-label`, `aria-describedby`, or `aria-labelledby`, for example)
*   **Test 1.2.6:** Does each [decorative](../glossary.html#image-decorative) embedded image (`embed` tag with the attribute `type="image/…"`), without [caption](../glossary.html#image-caption), meet these conditions:
    *   The `embed` tag has an `aria-hidden="true"` attribute
    *   The `embed` tag or one of its descendants does not have any ARIA role, property or state meant to label the image (`aria-label`, `aria-describedby`, `aria-labelledby`, for example).

### How to test

#### Test 1.2.1

Tool(s): [[web developer bar](../tools.html#web-developer-bar)]

1. In the "CSS" menu, choose "Disable All Styles".
    ![](../img/wdb-css.png)
2. In the "Images" menu, choose "Display Alt Attributes".
    ![](../img/wdb-images-alt.png)
3. In the "Information" menu, choose "Display Title Attributes".
    ![](../img/wdb-info-title.png)
4. For each image with an alt attribute, with no caption, check:
    1. That decorative images have an empty alternative (alt="");
    2. That images have no title attributes;
    3. That images have no ARIA role, property or state meant to label them (aria-label, aria-describedby, aria-labelledby for example).

#### Test 1.2.2

*Todo*

#### Test 1.2.3

*Todo*

#### Test 1.2.4

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1. In the "CSS" menu, choose "Disable All Styles".
    ![](../img/wdb-css.png)
2. Right-click on the element and choose "Inspect".
3. In the search field, type "svg".
4. Spot the svg tags used to insert a decorative image and check:
    1. The presence of the ARIA property aria-hidden="true" on the svg tag;
    2. The absence of any ARIA property (aria-label, aria-describedby, aria-labelledby…) meant to label the image on the svg tag or one of its descendants;
    3. That there is no title or desc tags in the body of the svg tags; or that they are empty, if present;
    4. The absence of a title attribute on the svg tag or one of its descendants.

#### Test 1.2.5

*Todo*

#### Test 1.2.6

*Todo*
