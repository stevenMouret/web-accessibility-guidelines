---
layout: topic
navigation: images
---

<header>
## Criterion 1.7 [A] <span>For each [image conveying information](../glossary.html#mImgInfo) with a [detailed description](../glossary.html#mDescDetaillee), is this description relevant?</span>
{: .article-header__title}
</header>

### Explanation

This criterion will ensure that the detailed description is relevant.

When facing an image with a detailed description, one must ask oneself the question:

**What information does this image want to convey?**

For example for a map it is useless to describe all the streets, parking, buildings... It is necessary to understand the meaning and interest of this card.

#### Example of complex image with detailed description

Below is an example of a complex image. This is a location plan. An alternative text is not sufficient to transcribe all the information on this plan.

![Access map to the British Museum (see description below)](../../img/british-museum.png)

**Detailed description of the access map to the British Museum**

The entrance to the museum is accessible from the Great Russell street.

From the Bloomsbury street go down to the Great Russell street and take on your left.

From the Montague street go down to the Great Russell street and take on your right.

### Mapping with WCAG 2.0

WCAG 2.0 success criterion: [1.1.1](http://www.w3.org/TR/WCAG20/#text-equiv-all)

WCAG 2.0 sufficient technique(s) and/or failure(s): [G92](http://www.w3.org/TR/WCAG-TECHS/G92.html) - [F67](http://www.w3.org/TR/WCAG-TECHS/F67.html)

### Tests

*   **Test 1.7.1:** Does each [image conveying information](../glossary.html#mImgInfo) (`img` tag, or `input` tag with the attribute `type="image"`) with a [detailed description](../glossary.html#mDescDetaillee) meet one of the following conditions?
    *   The detailed description referenced via the [URL](../glossary.html#mUrl) in the `longdesc` attribute is relevant
    *   The detailed description available in the page and identified in the `alt` attribute is relevant
    *   The detailed description available via an [adjacent link](../glossary.html#mLienAdj) is relevant.
*   **Test 1.7.2:** Does each image [button](../glossary.html#mBtnForm) (`input` tag with the attribute `type="image"`) [conveying information](../glossary.html#mImgInfo), with a [detailed description](../glossary.html#mDescDetaillee), meet one of the following conditions?
    *   The detailed description available in the page and identified in the `alt` attribute is relevant
    *   The detailed description available via an [adjacent link](../glossary.html#mLienAdj) is relevant.
    *   The detailed description available via an `aria-describedby` property is relevant.
*   **Test 1.7.3:** Does each [image object](../glossary.html#mImgObj) (`object` tag with the attribute  `type="image/…"`) [conveying information](../glossary.html#mImgInfo), with a [detailed description](../glossary.html#mDescDetaillee), meet one of the following conditions?
    *   The detailed description adjacent to the object image is relevant
    *   The detailed description available via an [adjacent link](../glossary.html#mLienAdj) is relevant.
*   **Test 1.7.4:** Does each embedded image (`embed` tag with the attribute  `type="image/…"`) [conveying information](../glossary.html#mImgInfo), with a [detailed description](../glossary.html#mDescDetaillee), meet one of the following conditions?
    *   The detailed description adjacent to the embedded image is relevant
    *   The detailed description available via an [adjacent link](../glossary.html#mLienAdj) is relevant.
*   **Test 1.7.5:** Does each vector image (`svg` tag) [conveying information](../glossary.html#mImgInfo), with a [detailed description](../glossary.html#mDescDetaillee) meet one of the following conditions?
    *   The detailed description adjacent to the vector image is relevant
    *   The detailed description contained in the `desc` tag is relevant
    *   The detailed description available via an [adjacent link](../glossary.html#mLienAdj) is relevant.
*   **Test 1.7.6:** For each vector image (`svg` tag) [conveying information](../glossary.html#mImgInfo), with a [detailed description](../glossary.html#mDescDetaillee) implemented with the `desc` tag, is this detailed description [correctly rendered](../glossary.html#mCorrectlyRendered) by assistive technologies?
*   **Test 1.7.7:** Does each bitmap image (`canvas` tag) [conveying information](../glossary.html#mImgInfo), with a [detailed description](../glossary.html#mDescDetaillee) meet one of the following conditions?    
    *   The detailed description adjacent to the bitmap image is relevant
    *   The detailed description available between `<canvas>` and `</canvas>` is relevant
    *   The detailed description available via an [adjacent link](../glossary.html#mLienAdj) is relevant.
*   **Test 1.7.8:** For each bitmap image (`canvas` tag) [conveying information](../glossary.html#mImgInfo), with a [detailed description](../glossary.html#mDescDetaillee) between `<canvas>` and `</canvas>`, is this detailed description [correctly rendered](../glossary.html#mCorrectlyRendered) by assistive technologies?

### How to test

#### Tests 1.7.1, 1.7.2, 1.7.3, 1.7.4, 1.7.5, 1.7.7

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1.  In the "CSS" menu, choose "Disable All Styles".
2.  Spot the images that need a detailed description.
3.  Right-click on the element and choose "Inspect":
    *   If the image is inserted with an `img` tag, check:
        *   That the detailed description provided via the address referenced in the `longdesc` attribute is relevant;
        *   Or that the detailed description in the page and mentioned in the `alt` attribute is relevant;
        *   Or that the detailed description accessed via an [adjacent link](../glossary.html#mLienAdj) is relevant.
    *   If the image is a button associated to an image (`input type="image"`), check:
        *   That the detailed description provided via the address referenced in the `longdesc` attribute is relevant;
        *   Or that the detailed description in the page and mentioned in the `alt` attribute is relevant;
        *   Or that the detailed description accessed via an [adjacent link](../glossary.html#mLienAdj) is relevant.
    *   If the image is an `object` tag or `embed`, having the `type="image"` attribute, check:
        *   That the detailed description next to the image object is relevant;
        *   Or that the detailed description accessed via an [adjacent link](../glossary.html#mLienAdj) is relevant;
        *   Or that the detailed description referenced by the `aria-describedby` attribute is relevant.
    *   If the image is an `object` tag or `embed`, having the `type="image"` attribute, check:
        *   That the detailed description next to the image object is relevant;
        *   Or that the detailed description accessed via an [adjacent link](../glossary.html#mLienAdj) is relevant.
    *   If the image is a vector image (`svg` tag), check:
        *   That the detailed description next to the vector image is relevant;
        *   Or that the detailed description contained in the `desc` tag is relevant;
        *   Or that the detailed description accessed via an [adjacent link](../glossary.html#mLienAdj) is relevant.
    *   If the image is a bitmap image (`canvas` tag), check:
        *   That the detailed description next to the image is relevant;
        *   Or that the detailed description contained in the body of the `canvas` tag is relevant;
        *   Or that the detailed description accessed via an [adjacent link](../glossary.html#mLienAdj) is relevant.
4.  If true, the test is passed.

#### Tests 1.7.6, 1.7.8

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1.  In the "CSS" menu, choose "Disable All Styles".
2.  Spot the images that have a detailed description (see the method described above on the presence of the detailed descriptions).
3.  Right-click on the element and choose "Inspect".
4.  If the image is a vector image (`svg` tag) or a bitmap image (`canvas` tag), With each screen reader of the chosen [reference baseline](../baseline.html), navigate to the image and check that the alternative is [correctly rendered](../glossary.html#mCorrectlyRendered).
5.  If true, the test is passed.
