---
title: Focus
navigation: presentation-of-information
nav: menu-criteria
---

<header>
## Focus
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Motor disabilities.

### Explanation

The motor handicapped who navigate on the keyboard can encounter considerable difficulties in using the content if they are not able to locate where the visual indication of focus and its movements lie.

The RGAA requires that the `outline` property be retained. In style sheets, it is forbidden to find properties to remove this outline at focus (`:focus`), such as :

* `outline: 0`
* `outline: none`
* `outline: transparent`

Similarly, the following properties must not be degraded, i.e. the defined values must not lead to a loss of visibility:

* `outline-color`: for example `outline-color: transparent` is considered as non-compliant;
* `outline-width`: `outline-width: 0` is considered non-compliant;
* `outline-style`: `outline-style: hidden` is considered non-compliant.

Even if you use a `border` to indicate focus taking, this alternative is not considered relevant.

Indeed, `outline` is a property managed by the browser. Some browsers offer mechanisms to increase the visibility of this outline. Thus, if you specify `outline: 0` in your style sheets, the browser settings to increase the outline will be invisible.

