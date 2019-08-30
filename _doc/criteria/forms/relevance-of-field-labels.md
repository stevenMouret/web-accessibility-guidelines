---
title: Relevance of field labels
navigation: forms
nav: menu-criteria
---

<header>
## Relevance of field labels
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Blind, visually impaired, physically impaired, mentally handicapped.

### Explanation

A field label is a text that explains what data is expected by the field (surname, first name, date of birth, etc.).

To be compliant, a label must:

* be relevant;
* be correctly connected to the corresponding field.

#### Properly bound labels

Several HTML methods recognized by the RGAA are at your disposal to label a form field.

##### For / id

The most common method is the HTML relationship between the field and its label:

```html
<label for="name">Name</label>
<input type="text" id="name" />
```

The advantage of this implementation over all the others is that it extends the click area. Indeed, when the user clicks on the label, the focus is given directly to the corresponding field. In the case of a checkbox, clicking on the label allows you to check the checkbox.

##### Title attribute

A field can also be labeled via the `title` attribute.

```html
<input type="text" id="recherche" title="Saisir un mot clé à rechercher"/>
```

This implementation is compliant, but we invite you to use this implementation only in limited cases. Indeed, the title attribute is only visible when the mouse hovers over it. A user who sees and navigates exclusively on the keyboard will not access this information. In the case of a complex form, this type of labelling can be a barrier to understanding for some users. In addition, for some motor disabilities, the click area is smaller when the label is not visible.

The title attribute should preferably be used in cases where the context of the form field allows to understand its function, for example, the search field of the site. It is then accompanied by a "Search" validation button or an image button in the shape of a magnifying glass, which allows the function of the field to be deduced.

##### Placeholder, be careful

`placeholder` is not considered as a valid labelling method under the RGAA, if it is implemented alone. The first reason is its insufficient contrast.

Then, if we take into account the order of restitution of the elements defined by the HTML5 specification, the `placeholder` attribute is restored before the title attribute. In fact, if important information is placed in the title attribute that is not found in the `placeholder` attribute, then the field is mislabelled because the user is losing information.

If you still want to use `placeholder`, make sure either that there is no `title` attribute on the corresponding field, or that the content of the `title` attribute is the same as that of the `placeholder`.
