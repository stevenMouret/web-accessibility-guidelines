---
title:  Accessible icons
nav: menu-techniques
---

## Accessible icons

How to integrate icons in an accessible way.
{: .article-header__teaser}

### 1. Icon font

Some assistive technologies (such as VoiceOver) read CSS content property. When using an icon font, the unicode code of the character is added to the content property.
This character, which should not be returned to the user, is therefore read. In order to fix that, we ask to the technical assistance to not read the content of the tag with the icon with the aria-hidden attribute.

*The icon font examples below are based on FontAwesome but the principle is the same as a custom icon font.*

#### 1.1 Decorative icon with visible text

A simple example, in order not to read the CSS content property in assistive technology, we add an aria-hidden attribute to true on the span with the icon.
The icon being decorative, the text being visible and explicit, there is no need for anything else.

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

#### 1.2 Icon conveying information with visible text

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

#### 1.3 Icon conveying information with visible text in a link

##### 1.3.1

The trash icon provides information, the purpose of this link is to delete an element. This information should not only be visual.
To do this, we use the aria-label attribute and title attribute.
* The aria-label attribute will be read in the assistive technology instead of the link content.
* The title attribute allows you to give visual information for people who do not understand the icon.

<a href="#" aria-label="Remove News (15)" class="new-window-off">
    <span class="fas fa-trash-alt" aria-hidden="true" title="Remove"></span>
    <span class="text">News (15)</span>
</a>

```html
<a href="#" aria-label="Remove News (15)">
    <span class="fas fa-trash-alt" aria-hidden="true" title="Remove"></span>
    <span class="text">News (15)</span>
</a>
```

##### 1.3.2

Another very frequent example.
The phone icon provides information. If you hide this icon, you do not know that it is a phone number and not a fax number. It is therefore important to return this information to the user.
In our case we will add the information related to the phone but also to the opening of the call manager because there is in the href the element tel:.

To do this, we use the aria-label attribute and title attribute.
* The aria-label attribute will be read in the assistive technology instead of the link content.
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

#### 1.4 Icon conveying information with visible text in a link that opens in a new window

The 'Cloud and Rain' icon convey information so it is important to provide an alternative.

* On the icon span we add the title attribute to give visual information about the meaning of the icon.
* On the link we add the title attribute to give visual information about the opening in a new window.
* The aria-label attribute will be read in the assistive technology and give all informations.

<a href="#" target="_blank" aria-label="Weather: cloud and rain (new window)" title="New window" class="new-window-off">
    <span class="text">Weather:</span>
    <span class="fas fa-cloud-rain" aria-hidden="true" title="Cloud and rain"></span>
</a>

```html
<a href="#" target="_blank" aria-label="Weather: cloud and rain (new window)" title="New window">
    <span class="text">Weather:</span>
    <span class="fas fa-cloud-rain" aria-hidden="true" title="Cloud and rain"></span>
</a>
```

#### 1.5 Icon conveying information without text

In this case there is no visible text. It is therefore important to provide visual and code information for assistive technologies.

* For the visual part, we add a title attribute on the icon span.
* For assistive technologies, the class sr-only hide visually the text but this text can be read in the assistive technology.

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

### 2. Inline SVG

#### 2.1 Decorative icon with visible text

As for an icon font the SVG being decorative we add the attribute aria-hidden to true so that it is not read in the assistive technology.

<a href="#">
    <svg aria-hidden="true" width="13" height="15" fill="#78458E" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/></svg>
    <span class="text">Menu</span>
</a>

```html
<a href="#">
    <svg aria-hidden="true" width="13" height="15" fill="#78458E" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/>
    </svg>
    <span class="text">Menu</span>
</a>
```

#### 2.2 Icon conveying information with visible text

For all SVG who convey information it is necessary to provide an alternative and modify the role of the SVG.

* Adding the role attribute to img.
* Adding the aria-label attribute for assistive technologies.
* Adding in the SVG a title attribute to give visual information.

<p>
    <svg role="img" aria-label="Fax" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Fax</title><path d="M64 128H32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zm416 32V77.25c0-8.49-3.37-16.62-9.37-22.63L425.37 9.37c-6-6-14.14-9.37-22.63-9.37H160c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zM288 432c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm0-128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm128 128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm0-128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm16-112H176V48h208v32c0 8.84 7.16 16 16 16h32v96z"/></svg>
    <span class="text">01 70 8X 45 96</span>
</p>

```html
<p>
    <svg role="img" aria-label="Fax" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>Fax</title>
        <path d="M64 128H32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zm416 32V77.25c0-8.49-3.37-16.62-9.37-22.63L425.37 9.37c-6-6-14.14-9.37-22.63-9.37H160c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zM288 432c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm0-128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm128 128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm0-128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm16-112H176V48h208v32c0 8.84 7.16 16 16 16h32v96z"/>
    </svg>
    <span class="text">01 70 8X 45 96</span>
</p>
```
