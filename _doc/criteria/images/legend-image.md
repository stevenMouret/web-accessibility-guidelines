---
title: Legend image
navigation: images
nav: menu-criteria
---

<header>
## Legend image
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
