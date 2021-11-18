---
title: Tab order and keyboard traps
navigation: navigation
nav: menu-criteria
description: Avoid keyboard traps and maintain a logical order of the tabulation
---

<header>
# Tab order and keyboard traps
{: .article-header__title}
</header>

**Users mainly impacted:** Blind, visually impaired, mobility impaired, mentally and cognitively impaired.

**RGAA criteria:** [Criterion 12.8](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-12-8)
{: .criteria }

## Explanation

The order of tabulation is a determining factor both in the exploration of content, but above all in the manipulation of complex elements or in the sequence of successive actions. All users will encounter significant difficulties if this is not correct.

In the case of a keyboard trap, people with motor disabilities will be unable to leave the element being consulted and will be forced to leave the browser to regain control of the cursor.

### Tab order

The tab order is the order in which the focus moves to the next or previous element.
The natural order is the order of succession of elements in the source code. The tab will move successively between all the interactive elements.

The tab order can be redefined by the `tabindex` attribute or by javascript.

#### `tabindex` attribute

the `tabindex` attribute can receive numeric values. If these values are greater than 0, the order is no longer the natural order but the order redefined by `tabindex'.

```html
<a href="#" tabindex="3">Link 1</a>
<a href="#" tabindex="1">Link 2</a>
```

In this example, the tab will go to link 2 first, then link 1.

The elements that naturally receive the focus are links, buttons, form fields...<br>
It is possible to give focus to other elements that do not naturally receive focus with the `tabindex` attribute.

A negative value (usually `tabindex="-1"`) means that the element is not reachable via sequential keyboard navigation, but could be focused with Javascript or visually. It's mostly useful to create accessible widgets with JavaScript.

`tabindex="0"` means that the element should be focusable in sequential keyboard navigation, but its order is defined by the document's source order.

#### Focus and focus back with Javascript

Rich interfaces sometimes require focus management with the help of Javascript.

[ARIA design patterns](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex) have been created in order to standardize interactions in web components.
In these design pattern, focus management is specified.

Let's take [the modal dialog (window)](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) as an example.

You can see in "Keyboard Interaction" section how the focus management is specified.

But all rich interfaces have not design pattern. In this case, the situation becomes more complex and it will be necessary to imagine a behavior consistent with the logic of the functionality. The goal is to accompany the user and position the focus back where it is logical that it is.

### Keyboard traps

When it is impossible to navigate through all the interactive elements of the page, using only the tab key, then you are in front of a keyboard trap.

Sometimes it is interesting to create keyboard traps but this must be done in a controlled environment.<br>
For example when a modal window is open, the design pattern tells us that the user should not be able to focus on elements outside the modal window.
If focus is on the last tabbable element inside the dialog, it si necessary to moves focus to the first tabbable element inside the dialog.
The user will loop through the modal until he closes it.
