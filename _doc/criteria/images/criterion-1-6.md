---
title: Criterion 1.6 [A]
navigation: images
nav: menu-sidebar
---

<header>
## Criterion 1.6 [A] <span>Does each [image conveying information](../glossary.html#mImgInfo) have a [detailed description](../glossary.html#mDescDetaillee) if necessary?</span>
{: .article-header__title}
</header>

**Impact:** Major

**Users mainly impacted:** Blind, severely visually impaired.

### Explanation

The alternative text is only to be used for images that are easily described in one sentence. In the case of a complex image, which requires the writing of a whole paragraph (e.g. a neighbourhood map, graph, histogram), you must provide a detailed description.

When an image requires a detailed description, you will write a paragraph under that image. This is the case for complex images such as a data graph or computer graphics.

There are several ways to add a detailed description, here are the most common ones:

* Add a paragraph directly below the image.
* Add an adjacent link, before or after to the detailed description.
* The least robust, add a `longdesc` attribute with a URL to the detailed description.

To allow a screen reader user to link your image to its detailed description, you will proceed as follows:

* In the field that allows you to define an alternative text, you title your image without describing it, indicating that there is a description. For example: access map (see description below);
* At the beginning of your detailed description, you will take up this title again. For example: "Access map (detailed description): To access...".

### Mapping with WCAG 2.0  

WCAG 2.0 success criterion: [1.1.1](http://www.w3.org/TR/WCAG20/#text-equiv-all)

WCAG 2.0 sufficient technique(s) and/or failure(s): [G92](http://www.w3.org/TR/WCAG-TECHS/G92.html) - [G74](http://www.w3.org/TR/WCAG-TECHS/G74.html) - [G73](http://www.w3.org/TR/WCAG-TECHS/G73.html) - [H45](http://www.w3.org/TR/WCAG-TECHS/H45.html) - [ARIA6](http://www.w3.org/TR/WCAG-TECHS/ARIA6.html)

### Tests

*   **Test 1.6.1:** Does each [image conveying information](../glossary.html#mImgInfo) (`img` tag) needing a [detailed description](../glossary.html#mDescDetaillee), meet one of the following conditions?
    *   A `longdesc` attribute providing the [URL](../glossary.html#mUrl) of a page that contains the detailed description is available
    *   An `alt` attribute that contains the reference to a detailed description, adjacent to the image, is available
    *   There is an [adjacent link](../glossary.html#mLienAdj) ([URL](../glossary.html#mUrl) or [anchor](../glossary.html#mAncreNom)) giving access to the detailed description.
*   **Test 1.6.2:** Does each [image object](../glossary.html#mImgObj) (`object` tag with an attribute `type="image/…"`) [conveying information](../glossary.html#mImgInfo) needing a [detailed description](../glossary.html#mDescDetaillee), meet one of the following conditions?
    *   There is an [adjacent link](../glossary.html#mLienAdj) ([URL](../glossary.html#mUrl) or [anchor](../glossary.html#mAncreNom)) giving access to the detailed description
    *   There is a clearly identifiable detailed description adjacent to the image object.
*   **Test 1.6.3:** Does each embedded image (`embed` tag with an attribute `type="image/…"`) [conveying information](../glossary.html#mImgInfo) needing a [detailed description](../glossary.html#mDescDetaillee), meet one of the following conditions?
    *   There is an [adjacent link](../glossary.html#mLienAdj) ([URL](../glossary.html#mUrl) or [anchor](../glossary.html#mAncreNom)) giving access to the detailed description
    *   There is a clearly identifiable detailed description adjacent to the embedded image.
*   **Test 1.6.4:** Does each image [button](../glossary.html#mBtnForm) (`input` tag with the attribute `type="image"`) [conveying information](../glossary.html#mImgInfo), needing a [detailed description](../glossary.html#mDescDetaillee), meet one of the following conditions?
    *   An `alt` attribute containing the reference to a detailed description adjacent  to the image is available
    *   There is an [adjacent link](../glossary.html#mLienAdj) ([URL](../glossary.html#mUrl) or [anchor](../glossary.html#mAncreNom)) giving access to the detailed description.
    *   An `aria-describedby` property references a chunk of text serving as a detailed description.
*   **Test 1.6.5:** Does each image [button](../glossary.html#mBtnForm) (`input` tag with the attribute `type="image"`) [conveying information](../glossary.html#mImgInfo), that references a [detailed description](../glossary.html#mDescDetaillee) via an `aria-describedby` property, meet the following conditions?
    *   The chunk of text is identified via an `id` attribute
    *   The value of the `id` attribute is unique in the page
    *   The value of the `aria-describedby` property matches the value of the `id` attribute.
*   **Test 1.6.6:** Does each vector image (`svg` tag) [conveying information](../glossary.html#mImgInfo), needing a [detailed description](../glossary.html#mDescDetaillee), meet one of the following conditions?
    *   There is an `aria-label` property referencing a detailed description adjacent to the vector image
    *   There is a `desc` tag containing a reference to a detailed description adjacent to the vector image
    *   There is a `desc` tag containing a detailed description
    *   There is an [adjacent link](../glossary.html#mLienAdj) ([URL](../glossary.html#mUrl) or [anchor](../glossary.html#mAncreNom)) giving access to the detailed description.
*   **Test 1.6.7:** For each vector image (`svg` tag) [conveying information](../glossary.html#mImgInfo), with a reference to a detailed description provided via an `aria-label` property or a `desc` tag, is this reference [correctly rendered](../glossary.html#mCorrectlyRendered) by assistive technologies?
*   **Test 1.6.8:** Does each bitmap image (`canvas` tag) [conveying information](../glossary.html#mImgInfo) needing a [detailed description](../glossary.html#mDescDetaillee), meet one of the following conditions?
    *   There is a chunk of text between `<canvas>` and `</canvas>` referencing a detailed description adjacent to the bitmap image
    *   There is a text content between `<canvas>` and `</canvas>` serving as a detailed description
    *   There is an [adjacent link](../glossary.html#mLienAdj) ([URL](../glossary.html#mUrl) or [anchor](../glossary.html#mAncreNom)) giving access to the detailed description.
*   **Test 1.6.9:** For each bitmap image (`canvas` tag) [conveying information](../glossary.html#mImgInfo), with a reference to an adjacent [detailed description](../glossary.html#mDescDetaillee), is this reference [correctly rendered](../glossary.html#mCorrectlyRendered) by assistive technologies?
*   **Test 1.6.10:** For each image (`img`, `area`, `object`, `embed`, `svg`, or `canvas` tag) [conveying information](../glossary.html#mImgInfo), with a reference to a [detailed description](../glossary.html#mDescDetaillee), and having an `aria-describedby` property, does the `aria-describedby` property reference the detailed description?

### How to test

#### Tests 1.6.1, 1.6.2, 1.6.3, 1.6.4, 1.6.5, 1.6.6, 1.6.8

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1.  In the "CSS" menu, choose "Disable All Styles".
2.  Spot the images that need a detailed description.
3.  Right-click on the element and choose "Inspect":
    *   If the image is inserted with an `img` tag, check:
        *   The presence of a `longdesc` attribute containing the address (URL) of a page containing the detailed description;
        *   Or that the `alt` attribute contains a reference to a detailed description next to the image;
        *   Or that there is an [adjacent link](../glossary.html#mLienAdj) (via a URL or an anchor) giving access to the content of the detailed description.
    *   If the image is a button associated to an image (`input type="image"`), check:
        *   That the `alt` attribute contains a reference to a detailed description next to the image;
        *   Or the presence of an `aria-describedby` property referencing a chunk of text serving as a detailed description (select the field and the chunk of text, in the "Doc Info." menu, choose "View partial source" and check that the `id` attribute of the chunk of text is unique, and matches the `aria-describedby` property of the image);
        *   Or that there is an [adjacent link](../glossary.html#mLienAdj) (via a URL or an anchor) giving access to the content of the detailed description.
    *   If the image is an `object` or `embed` tag, having the `type="image"` attribute, check:
        *   That there is an [adjacent link](../glossary.html#mLienAdj) (via a URL or an anchor) giving access to the content of the detailed description.
        *   Or that there is a detailed description clearly identifiable next to the image object.
    *   If the image is a vector image (`svg` tag), check:
        *   The presence of an `aria-label` property containing a reference to a detailed description next to the vector image;
        *   Or the presence of a `desc` tag containing a reference to a detailed description next to the vector image;
        *   Or the presence of a `desc` tag containing a detailed description;
        *   Or that there is an [adjacent link](../glossary.html#mLienAdj) (via a URL or an anchor) giving access to the content of the detailed description.
    *   If the image is a bitmap image (`canvas` tag), check:
        *   The presence of a chunk of text, in the body of the `canvas` tag containing a reference to a detailed description next to the bitmap image;
        *   Or that there is text content, in the body of the `canvas` tag, serving as a detailed description;
        *   Or that there is an [adjacent link](../glossary.html#mLienAdj) (via a URL or an anchor) giving access to the content of the detailed description.
4.  If true, the test is passed.

#### Test 1.6.7

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1.  In the "CSS" menu, choose "Edit CSS", and in the field at the bottom of the window, type `svg{border:2px solid red}`.
2.  Spot the `svg` tags that provide a reference to an adjacent detailed description via an `aria-label` property or a `desc` tag.
3.  With each screen reader of the chosen [reference baseline](../baseline.html), navigate to the image and check that the reference to an adjacent detailed description is [correctly rendered](../glossary.html#mCorrectlyRendered).
4.  If true, the test is passed.

#### Test 1.6.9

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1.  In the "CSS" menu, choose "Disable All Styles".
2.  In the "CSS" menu, choose "Edit CSS", and in the field at the bottom of the window, type `canvas{border:2px solid red}`.
3.  Spot the `canvas` tags that provide a reference to an adjacent detailed description.
4.  With each screen reader of the chosen [reference baseline](../baseline.html), navigate to the image and check that the reference to an adjacent detailed description is [correctly rendered](../glossary.html#mCorrectlyRendered).
5.  If true, the test is passed.
