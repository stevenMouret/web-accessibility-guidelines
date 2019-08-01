---
title: Criterion 1.6 [A]
navigation: images
nav: menu-criteria
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
