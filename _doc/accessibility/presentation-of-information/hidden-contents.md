---
title: Hidden contents
navigation: presentation-of-information
nav: menu-criteria
---

<header>
## Hidden contents
{: .article-header__title}
</header>

**Impact:** Major

**Users mainly impacted:** Blind and severely visually impaired.

**RGAA criteria:** [Criterion 10.8](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/criteres/#crit-10-8)
{: .criteria }

### Explanation
It is possible to hide content in an interface for different reasons.

#### Hide content for all users
Some content must be hidden from all users. For example, a drop-down menu, when closed, the content is not visible to anyone. Only the user's action will display the content.

* `display` with the value `none`;
* `visibility` with the value `hidden`;
* `font-size` with the value `0`;

#### Hide content only visually
Sometimes content is only intended for assistive technologies. For example, when a `CSS` icon convey information, it is necessary to give the information to assistive technologies.

Content with the `sr-only` class will be read in assistive technologies but visually hidden.
```css
.sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
```

#### Hide only for assistive technology

In some cases it is possible to hide contents only for assistive technology, for example when there is redundancy of information.

* In HTML5  with the `hidden` attribute;
* With the `aria-hidden="true"` attribute.
