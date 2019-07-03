---
title:  Accessible icons
nav: menu-techniques
---

## Accessible icons

How to integrate icons in an accessible way.
{: .article-header__teaser}

### Font icon

Some assistive technologies (such as VoiceOver) read content in the content property in CSS. When using an icon font, the unicode code of the character is added to the content property.
This character, which should not be returned to the user, is therefore read. In order to correct this we ask to the technical assistance to not read the content of the tag with the icon with the aria-hidden attribute.

#### Decorative icon with visible text

<a href="#">
    <span class="fas fa-bars" aria-hidden="true"></span>
    <span class="text">Menu</span>
</a>

```html
<a href="#">
    <span class="fas fa-bars" aria-hidden="true"></span>
    <span class="text">Menu</span>
</a>
```

#### Icon conveying information with visible text

The fax icon provides information. If you hide this icon, you do not know that it is a fax number and not a phone number. It is therefore important to return this information to the user.
To do this, we use a visually hidden text and the title attribute.
* The class sr-only hide visually the text but this text can be read in the assistive technology.
* The title attribute allows you to give visual information for people who do not understand the icon.

<p>
    <span class="fas fa-fax" aria-hidden="true" title="Fax"></span>
    <span class="sr-only">Fax :</span>
    <span class="text">01 70 8X 45 96</span>
</p>

```html
<p>
    <span class="fas fa-fax" aria-hidden="true" title="Fax"></span>
    <span class="sr-only">Fax :</span>
    <span class="text">01 70 8X 45 96</span>
</p>
```

#### Icon conveying information with visible text in a link

The phone icon provides information. If you hide this icon, you do not know that it is a phone number and not a fax number. It is therefore important to return this information to the user.
In our case we will add the information related to the phone but also to the opening of the call manager because there is in the href the element tel:.
To do this, we use the aria-label attribute and title attribute.
* The aria-label attribute will be read in the assistive technology.
* The title attribute allows you to give visual information for people who do not understand the icon.

<a href="tel:01708X4596" aria-label="Phone : 01 70 8X 45 96 opening of the call manager" class="new-window-off">
    <span class="fas fa-mobile" aria-hidden="true" title="Phone"></span>
    <span class="text">01 70 8X 45 96</span>
</a>

```html
<a href="tel:01708X4596" aria-label="Phone : 01 70 8X 45 96 opening of the call manager">
    <span class="fas fa-mobile" aria-hidden="true" title="Phone"></span>
    <span class="text">01 70 8X 45 96</span>
</a>
```

#### BLANK Example todo

#### Icon conveying information without text

<a href="#">
    <span class="fas fa-home" aria-hidden="true" title="Home"></span>
    <span class="sr-only">Home</span>
</a>

```html
<a href="#">
    <span class="fas fa-home" aria-hidden="true" title="Home"></span>
    <span class="sr-only">Home</span>
</a>
```

### Inline SVG

#### Decorative icon with visible text

<a href="#">
    <svg aria-hidden="true" width="13" height="15" fill="#78458E" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/></svg>
    <span class="text">Menu</span>
</a>

```html
<a href="#">
    <svg aria-hidden="true" width="13" height="15" fill="#78458E" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/></svg>
    <span class="text">Menu</span>
</a>
```

#### Icon conveying information with visible text

<a href="tel:01708X4596" aria-label="Fax : 01 70 8X 45 96 opening of the call manager" class="new-window-off">
    <svg role="img" aria-label="Fax" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>Fax</title>
        <path d="M480 136.88v-30.37c0-16.97-6.74-33.25-18.74-45.26l-42.51-42.51A64.037 64.037 0 0 0 373.49 0H174.48C157.64 0 144 14.33 144 32v104.88c-9.45-5.5-20.28-8.88-32-8.88H64c-35.35 0-64 28.65-64 64v256c0 35.35 28.65 64 64 64h48c15.22 0 29.01-5.54 40-14.41 10.99 8.87 24.78 14.41 40 14.41h256c35.35 0 64-28.65 64-64V192c0-23.63-12.95-44.04-32-55.12zM128 448c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V192c0-8.82 7.18-16 16-16h48c8.82 0 16 7.18 16 16v256zm64-400h176v48c0 8.84 7.16 16 16 16h48v80H192V48zm272 400c0 8.82-7.18 16-16 16H192c-8.82 0-16-7.18-16-16V240h288v208zM352 336h32c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16zm-96 96h32c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16zm0-96h32c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16zm96 96h32c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16z"/>
    </svg>
    <span class="text">01 70 8X 45 96</span>
</a>
