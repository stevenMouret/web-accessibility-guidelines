---
title: Criterion 1.10 [A]
navigation: images
nav: menu-criteria
---

<header>
## Criterion 1.10 [A] <span>Is each [image caption](../glossary.html#mImageCaption) correctly associated with the corresponding image, if necessary?</span>
{: .article-header__title}
</header>

**Impact:** High to major

**Users mainly impacted:** Blind.

### Explanation

HTML5 introduces the `figure` and `figcaption` tags in order to associate a [caption](../glossary.html#mImageCaption) with an image.

It is important to do this when the [caption](../glossary.html#mImageCaption) contains information about the image, such as copyright, that a blind user might misinterpret by thinking that the caption information is about the associated text.

The use of `figure` and `figcaption` requires certain adaptations to fill the possible lack of support by assistive technologies.

```html
<figure role="group">
    <img alt="alternative of the image - See caption below" src="img.png"/>
    <figcaption>
        copyright 2016 author name
    </figcaption>
</figure>
```

The "See caption below" text in the image alternative creates a semantic link between the image and its caption, in case the element `figure` is not returned by the screen readers. The text "See caption below" is used in the caption to establish the semantic link.

### Mapping with WCAG 2.0

WCAG 2.0 success criterion: [1.1.1](http://www.w3.org/TR/WCAG20/#text-equiv-all) - [4.1.2](http://www.w3.org/TR/WCAG20/#ensure-compat-rsv)

WCAG 2.0 sufficient technique(s) and/or failure(s): [G140](http://www.w3.org/TR/WCAG-TECHS/G140.html) - [ARIA4](http://www.w3.org/TR/WCAG-TECHS/ARIA4.html)- [ARIA6](http://www.w3.org/TR/WCAG-TECHS/ARIA6.html)

### Tests

*   **Test 1.10.1:** Does each image with a [caption](../glossary.html#mImageCaption) (`img` tag or `input` tag with the attribute `type="image"`, associated with an adjacent caption) meet, if necessary, the following conditions?
    *   The image (`img` tag) and its caption are contained in a `figure` tag
    *   The `figure` tag has an attribute `role="group"`
    *   The content of the `alt` attribute contains a reference to the adjacent caption.
*   **Test 1.10.2:** Does each [image object](../glossary.html#mImgObj) with a [caption](../glossary.html#mImageCaption) (`object` tag with the attribute `type="image/…"`, associated with an adjacent caption) meet, if necessary, the following conditions?
    *   The image (`object` tag) and its caption are contained in a `figure` tag
    *   The `figure` tag has an attribute `role="group".`
*   **Test 1.10.3:** Does each embedded image with a [caption](../glossary.html#mImageCaption) (`embed` tag with the attribute `type="image/…"`, associated with an adjacent caption) meet, if necessary, the following conditions?
    *   The embedded image (`embed` tag) and its caption are contained in a `figure` tag
    *   The `figure` tag has an attribute `role="group"`
    *   The content of the text alternative contains a reference to the adjacent caption.
*   **Test 1.10.4:** Does each vector image with a [caption](../glossary.html#mImageCaption) (`svg` tag associated with an adjacent caption) meet, if necessary, the following conditions?
    *   The vector image (`svg` tag) and its caption are contained in a `figure` tag
    *   The `figure` tag has an attribute `role="group"`
    *   The content of the `aria-label` property or the `desc` tag of the vector image contains a reference to the adjacent caption
*   **Test 1.10.5:** Does each bitmap image with a [caption](../glossary.html#mImageCaption) (`canvas` tag associated with an adjacent caption) meet, if necessary, the following conditions?
    *   The bitmap image (`canvas` tag) and its caption are contained in a `figure` tag
    *   The `figure` tag has an attribute `role="group"`
    *   The content between `<canvas>` and `</canvas>` contains a reference to the adjacent caption

### How to test

#### Tests 1.10.1, 1.10.2, 1.10.3, 1.10.4, 1.10.5

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1.  For each image associated with an adjacent text serving as a caption.
2.  If the associated text:
    *   Contains information about the image (for example a copyright, a date, an author…);
    *   Or aims at completing the information conveyed by the image (for example a text associated with an image in an image gallery).
3.  Right-click on the element and choose "Inspect Element":
    *   If the element containing the image is an `img` tag, a `input type="image"` field, or an `embed type="image"` element, check:
        1.  That the image and its caption are contained in a `figure` tag;
        2.  That the `figure` tag has a `role="group"` ARIA property;
        3.  That the content of the `alt` attribute contains a reference to the adjacent caption (i.e. text that can also be found in the caption, and that can be a generic term like photo, schema, figure, example…);
    *   If the element containing the image is an `object` tag, check:
        1.  That the image and its caption are contained in a `figure` tag;
        2.  That the `figure` tag has a `role="group"` ARIA property;
    *   If the element is a vector image (`svg` tag) check:
        1.  That the image and its caption are contained in a `figure` tag;
        2.  That the `figure` tag has a `role="group"` ARIA property;
        3.  That the content of the `alt` attribute contains a reference to the adjacent caption (i.e. text that can also be found in the caption, and that can be a generic term like photo, schema, figure, example…);
    *   If the element is an embedded image (`embed` tag), check:
        1.  That the image and its caption are contained in a `figure` tag;
        2.  That the `figure` tag has a `role="group"` ARIA property;
        3.  That the alternative contains a reference to the adjacent caption.
    *   If the element is a bitmap image, `canvas` tag, check:
        1.  That the image and its caption are contained in a `figure` tag;
        2.  That the `figure` tag has a `role="group"` ARIA property;
        3.  That the content of the `canvas` tag contains a reference to the adjacent caption.
4.  If true, the test is passed.
