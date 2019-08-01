---
title: Criterion 1.1 [A]
navigation: images
nav: menu-criteria
---

<header>
## Criterion 1.2 [A] <span>For each [decorative image](../glossary.html#mImgDeco) with a [text alternative](../glossary.html#mAltTexteImg), is this alternative empty?</span>
{: .article-header__title}
</header>

**Impact:** Low to high

**Users mainly impacted:** Blind, severely visually impaired.

### Explanation

In order to be able to test this criterion you need to know what a [decorative image](../glossary.html#image-decorative) is.

If the image does not contain any information, the image is not intended to be restituted. Its alternative must then be empty. In addition, it must not have a `title` attribute.

<span class="visually-hidden">Tip</span>
In order to know if an image is decorative or informative, hide it, take into account the context and ask yourself the question:<br>
**Did you lose any information?**<br>
If so, then this image conveys information.
{: .tip}

<span class="visually-hidden">Important</span>
Be careful, an image with content text is not always an image that gives information. Look at the example below.
{: .important}

![101 things to do in London with kids](../../img/images-1.2-1.png)

In this case, when analyzing the context, the image is only a graphical redundancy of the text below. The image is therefore decorative and the alternative should be empty.

### Received ideas

#### Stop abuses for SEO

It is a barrier to accessibility to use the function to fill in an alternative text to the image, or a tooltip, to insert keywords or sentences to improve SEO.

Indeed, a screen reader user will be given all this information. The reading experience will then be overloaded with parasitic elements and will make the site content incomprehensible.

#### An image can have an empty alternative

Not all images require alternative text. If the image is a decoration (it does not provide any essential information to the content), it should not have alternative text. For the same reason as mentioned above, this makes it more difficult for a screen reader user to reproduce content, for no information gain.
