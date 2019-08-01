---
navigation: images
nav: menu-criteria
---

## Images

Give each [image conveying information](glossary.html#mImgInfo) a relevant [text alternative](glossary.html#mAltTexteImg) and a [detailed description](glossary.html#mDescDetaillee) if necessary. Replace images of text with [styled text](glossary.html#mTexteStyle) when possible.
{: .article-header__teaser}

There are two types of images:

* Images with information (which need alternative text);
* Decorative images (which must not have alternative text).

Images sometimes convey non-text information. This information, which can help to understand the content to which it relates, must be accessible to all.

Providing an alternative is essential for users who do not or do not perceive visual content. This is the case for blind or partially sighted people. A screen reader will be able to access this alternative and return it to the user.

Similarly, for people who have difficulty understanding certain visual representations (iconography, paintings, multi-dimensional representations, graphics, etc.), an alternative can help to understand their meaning or extract important information.

For all these reasons, it is essential to translate the necessary and sufficient information provided by images into text.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
When these images constitute links, it is no longer the information they convey that is essential, but the function of the link they constitute. In this situation, they allow software controlled by voice by a person with a motor disability to locate the link to be activated more easily.
</div>

### Synthesis
* Define an alt on all images `<img />`.
* Define an empty `alt=""` on the `<img />` decoration images.
* Define a compliant and relevant alternative according to the type of image when it is an information carrier.
* Define an alternative to image CAPTCHA.
* Define detailed description if necessary.
* Create a correct relationship between the caption and the image.


