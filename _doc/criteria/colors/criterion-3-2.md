---
title: Criterion 3.2 [A]
navigation: colors
nav: menu-criteria
---

<header>
## Criterion 3.2 [A] <span>On each Web page, [information](../glossary.html#mInfoCouleur) must not be conveyed through color only. Has this rule been implemented in a relevant way?</span>
{: .article-header__title}
</header>

**Impact:** High to major

**Users mainly impacted:** Blind, visually impaired

### Explanation

The point here is to verify that the information that is given by a means other than color is consistent. It is important that the information is transmitting by a color, shape and text.

The means of transmitting information other than by colour can be:

* a textual indication
* a means involving graphics (pictogram, background image, shape, different border style, etc.) and through a code complement (aria-label, title, hidden text, aria-current, etc.)
* another typographic style (bold, italic, text size, other font, etc.) and through a code complement (aria-label, title, hidden text, aria-current, etc.)

### Examples

#### In a form

![Form example](../../img/color-3.2-1.png)

In this example the required fields are indicated a textual indication (red star). In this case red star is not relevant because this does not imply the requirement to fill in the field. It is necessary to add **before the form** the mention about the required fields like in the example.

The best way to be most relevant is to write the required statement directly on the label. First name (required). This information is purely visual because the field have already a required or aria-required attribute. In order to avoid redundancy of information, it is therefore preferable not to read the required information in the label. Add the attribute aria-hidden to true on this text.

```html
<label for="name">Name <span class="required" aria-hidden="true">(required)</span></label>
<input type="text" id="name" name="name" required>
```

<span class="visually-hidden">Important</span>
Added the require attribute on the field is not enough. People who do not use technical assistance do not have the information.
{: .important}

#### In a Apple menu

##### Currently Apple menu
![Bad menu example](../../img/color-3.1-2.png)

##### Fixed Apple menu
![Fixed menu example](../../img/color-3.2-2.png)

In this menu we have added a shape (the triangle under the active item) and a code complement ([link title](../glossary.html#mTitreLien)).
