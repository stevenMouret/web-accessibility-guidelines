---
layout: topic
navigation: images
---

<header>
## Criterion 1.4 [A] <span>For each image used as a [CAPTCHA](../glossary.html#mcaptcha) or as a [test image](../glossary.html#mImgTest), with a [text alternative](../glossary.html#mAltTexteImg), does this alternative describe the nature and the purpose of the image?</span>
{: .article-header__title}
</header>

### Explanation

In the case of test images (Captcha), the alternative must be filled in so that the user can understand the nature and role of the image.

For example, `alt="enter the code in the image"`.

### Mapping with WCAG 2.0

WCAG 2.0 success criterion: [1.1.1](http://www.w3.org/TR/WCAG20/#text-equiv-all)

WCAG 2.0 sufficient technique(s) and/or failure(s): [G143](http://www.w3.org/TR/WCAG-TECHS/G143.html) - [G100](http://www.w3.org/TR/WCAG-TECHS/G100.html)

### Tests

*   **Test 1.4.1:** Does each image (`img` tag) used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with an `alt` attribute, meet the following conditions?
    *   The content of the `alt` attribute describes the nature and purpose of the image
    *   If present, the value of the `title` attribute matches the value of the `alt` attribute
    *   If present, the value of the `aria-label` property matches the value of the `alt` attribute
    *   If present, the content of the chunk of text linked via the `aria-labelledby` property matches the value of the `alt` attribute.
*   **Test 1.4.2:** Does each [area](../glossary.html#mZone) (`area` tag) of an [image map](../glossary.html#mImgReactive) used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with an `alt` attribute, meet the following conditions?
    *   The content of the `alt` attribute describes the nature and purpose of the image
    *   If present, the value of the `title` attribute matches the value of the `alt` attribute
    *   If present, the value of the `aria-label` property matches the value of the `alt` attribute
    *   If present, the content of the chunk of text linked via the `aria-labelledby` property matches the value of the `alt` attribute.
*   **Test 1.4.3:** For each [button](../glossary.html#mBtnForm) associated with an image (`input` tag with the attribute `type="image"`), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with an `alt` attribute, meet the following conditions?
    *   The content of the `alt` attribute describes the nature and purpose of the image
    *   If present, the value of the `title` attribute matches the value of the `alt` attribute
    *   If present, the value of the `aria-label` property matches the value of the `alt` attribute
    *   If present, the content of the chunk of text linked via the `aria-labelledby` property matches the value of the `alt` attribute.
*   **Test 1.4.4:** Does each [image object](../glossary.html#mImgObj) (`object` tag with the attribute `type="image/…"`), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), meet one of the following conditions?
    *   The image object is immediately followed by an [adjacent link](../glossary.html#mLienAdj) giving access to a page or a chunk of text describing the nature and purpose of the image
    *   The user can replace the image object by a text describing the nature and purpose of the image, via a provided mechanism
    *   The user can replace the image object by an image with an alternative describing the nature and purpose of the image, via a provided mechanism.
*   **Test 1.4.5:** Does each [image object](../glossary.html#mImgObj) (`object` tag with the attribute `type="image/…"`), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with a text alternative provided via the `aria-label` or the `aria-labelledby` property or the `title` attribute, meet the following conditions?
    *   If present, the value of the `title` attribute matches the value of the `aria-label` property
    *   If present, the value of the `title` attribute matches the content of the chunk of text linked via the `aria-labelledby` property.
*   **Test 1.4.6:** Does each embedded image (`embed` tag with the attribute `type="image/…"`), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with a text alternative, meet one of these conditions?
    *   The embedded image is immediately followed by an [adjacent link](../glossary.html#mLienAdj) giving access to a page or a chunk of text describing the nature and purpose of the image
    *   The user can replace the embedded image by a text describing the nature and purpose of the image, via a provided mechanism
    *   The user can replace the embedded image by an image with an alternative describing the nature and purpose of the image, via a provided mechanism.
*   **Test 1.4.7:** Does each embedded image (`object` tag with the attribute `type="image/…"`), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with a text alternative provided via the `aria-label` or the `aria-labelledby` property or the `title` attribute, meet the following conditions?
    *   If present, the value of the `title` attribute matches the value of the `aria-label` property
    *   If present, the value of the `title` attribute matches the content of the chunk of text linked via the `aria-labelledby` property.
*   **Test 1.4.8:** Does each vector image (`svg` tag), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with no [text alternative](../glossary.html#alternative-svg), meet the following conditions?
    *   The `svg` tag has a `role="img"`
    *   The `svg` tag has an `aria-label` property that describes the nature and purpose of the image, and matches the value of the `title` attribute, if present
    *   The `svg` tag has a `desc` tag that describes the nature and purpose of the image, and matches the value of the `aria-label` property and of the `title` attribute of the `svg` tag, if present
    *   An [adjacent link](../glossary.html#mLienAdj) gives access to an alternative that describes the nature and purpose of the image, and matches the value of the `aria-label` property and of the `title` attribute of the `svg` tag, if present
*   **Test 1.4.9:** For each vector image (`svg` tag), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with a [text alternative](../glossary.html#alternative-svg), is this alternative [correctly rendered](../glossary.html#mCorrectlyRendered) by assistive technologies?
*   **Test 1.4.10:** Does each bitmap image (`canvas` tag), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), meet one of the following conditions?
    *   The alternative content (between <canvas> and </canvas>) describes the nature and purpose of the image
    *   The bitmap image is immediately followed by an [adjacent link](../glossary.html#mLienAdj) giving access to a page or a chunk of text containing an alternative describing the nature and purpose of the image
    *   The user can replace the bitmap image by an alternative describing the nature and purpose of the image, via a provided mechanism
    *   The user can replace the bitmap image by an image with an alternative describing the nature and purpose of the image, via a provided mechanism.
*   **Test 1.4.11:** Does each bitmap image (`canvas` tag), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with a text alternative provided via the `aria-label` or the `aria-labelledby` property or the `title` attribute, meet the following conditions?
    *   If present, the value of the `title` attribute matches the value of the `aria-label` property
    *   If present, the value of the `title` attribute matches the content of the chunk of text linked via the `aria-labelledby` property.
*   **Test 1.4.12:** For each bitmap image (`canvas` tag), used as a [CAPTCHA](../glossary.html#mcaptcha) or [test image](../glossary.html#mImgTest), with a text alternative, is this alternative [correctly rendered](../glossary.html#mCorrectlyRendered) by assistive technologies?

### How to test

#### Tests 1.4.1, 1.4.2, 1.4.3, 1.4.4, 1.4.5, 1.4.6, 1.4.7, 1.4.8

Tool(s): [[web developer bar](../tools.html#web-developer-bar), Chrome inspector]

1.  In the "CSS" menu, choose "Disable All Styles".
2.  Spot the images used as a [captcha](../glossary.html#captcha).
3.  Right-click on the element and choose "Inspect".
    *   If the element is an image (`img` tag) or a button associated to an image (`input type="image"`) with an `alt` attribute, check:
        1.  That the `alt` attribute allows to understand the nature and purpose of the image;
        2.  That the `title` attribute, if present, is identical to the `alt` attribute;
        3.  That the `aria-label` attribute, if present, is identical to the `alt` attribute;
        4.  That the chunk of text linked via the `aria-labelledby` property, if present, is identical to the `alt` attribute.
    *   If the element is an image map (`map` tag), for each clickable area used as a [captcha](../glossary.html#captcha), `area` tag with an `href` attribute, check:
        1.  That the `alt` attribute allows to understand the nature and purpose of the image;
        2.  That the `title` attribute, if present, is identical to the `alt` attribute;
        3.  That the `aria-label` attribute, if present, is identical to the `alt` attribute;
        4.  That the chunk of text linked via the `aria-labelledby` property, if present, is identical to the `alt` attribute.
    *   If the element is an `object` tag or an `embed` tag, with a `type="image"` attribute, check:
        1.  That the tag is immediately followed by an adjacent link giving access to a page or a chunk of text where an alternative allows to understand the nature and purpose of the image;
        2.  Or that a mechanismallows the user to replace the image object or the embedded image by an alternative text, or by an image with an alternative text that allows to understand the nature and purpose of the image.
        3.  If the element has a `title` attribute, check:
            *   That the `aria-label` attribute, if present, is identical to the `title` attribute;
            *   That the chunk of text linked via the `aria-labelledby` property, if present, is identical to the `title` attribute.
    *   If the element is an `svg` tag, check:
        1.  The presence of the `role="img"` property on the `svg` tag;
        2.  The presence of an `aria-label` property, whose content allows to understand the nature and purpose of the image, that is identical to the `title` attribute if present;
        3.  The presence of a `desc` tag, whose content allows to understand the nature and purpose of the image, that is identical to the `title` attribute if present.
4.  If true, the test is passed.

#### Test 1.4.9

*Todo*

#### Test 1.4.10

*Todo*

#### Test 1.4.11

*Todo*

#### Test 1.4.12

*Todo*
