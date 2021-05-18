---
title: Image caption
navigation: images
nav: menu-criteria
---

<header>
# Image caption
{: .article-header__title}
</header>

**Impact:** High to major

**Users mainly impacted:** Blind.

**RGAA criteria:** [Criterion 1.10 [A]](http://disic.github.io/rgaa_referentiel_en/criteria.html#crit-1-10)
{: .criteria }

## Explanation

HTML5 introduces the `figure` and `figcaption` tags that associate a caption with an image.

It is important to do this when the caption contains information about the image, such as copyright, that a blind user might misinterpret by thinking that the caption information is about the associated text.

The use of `figure` and `figcaption` requires certain adaptations to fill the possible lack of support by assistive technologies.

* The `<figure>` tag has a `role="figure"` or `role="group"` attribute;
* The `<figure>` tag has a `aria-label` attribute with the same content of the caption;
* The caption is included in a `<figcaption>` tag.

```html
<figure role="group" aria-label="copyright 2016 author name">
    <img alt="alternative of the image - See caption below" src="img.png"/>
    <figcaption>
        copyright 2016 author name
    </figcaption>
</figure>
```

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
Not mandatory but highly recommended, the "See caption below" text in the image alternative creates a semantic relationship between the image and its caption, in case the element `figure` is not returned by the screen readers. The text "See caption below" is used in the caption to establish the semantic relationship.
</div>

### Difference between the alternative of an image and the caption

* The image alternative makes it possible to describe what the image conveys that is not in the context;
* The caption of an image conveys additional information that the image does not convey.
