---
layout: criterion
title: Criterion 1.1
teaser: Does each image have a text alternative?
navigation: images
---

## Criterion 1.1 [A] Does each image have a text alternative?

*   **Test 1.1.1:** Does each image (`img` tag) have an `alt` attribute?
*   **Test 1.1.2:** Does each [area](./glossary.html#area-of-an-image-map) (`area` tag) of an [image map](./glossary.html#image-map) have an `alt` attribute?
*   **Test 1.1.3:** Does each form [button](./glossary.html#button-form) (`input` tag with the `type="image"` attribute) have an `alt` attribute?
*   **Test 1.1.4:** Does each [clickable area](./glossary.html#area-clickable) of a server-side [image map](./glossary.html#image-map) have an equivalent link in the page?

### How to test

Tool(s): [[web developer bar](../tools.html#web-developer-bar)]

![](../img/wdb-css.png)

Remove CSS.

![](../img/wdb-alt.png)

In the tab 'Images' choose the option 'Outline Images Without Alt Attributes'.

Browse the page and look for images without the alt attribute.
