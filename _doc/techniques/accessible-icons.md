---
title:  Accessible icons
nav: menu-techniques
---

# Accessible icons

How to integrate icons in an accessible way.
{: .article-header__teaser}

## 1 Icon font

Some assistive technologies (such as VoiceOver) read CSS content property. When using an icon font, the unicode code of the character is added to the content property.
This character, which should not be returned to the user, is therefore read. In order to fix that, we ask to the technical assistance to not read the content of the tag with the icon with the `aria-hidden` attribute.

*The icon font examples below are based on FontAwesome but the principle is the same as a custom icon font.*

### 1.1 Decorative icon

#### 1.1.1 With visible text

A simple example, in order not to read the CSS content property in assistive technology, we add an `aria-hidden` attribute to true on the span that displays the icon.
The icon being decorative, the text being visible and explicit, there is no need for anything else.

<button type="button">
    <span class="fas fa-bars" aria-hidden="true"></span>
    <span class="text">Menu</span>
</button>

```html
<button type="button">
    <span class="fas fa-bars" aria-hidden="true"></span>
    <span class="text">Menu</span>
</button>
```

### 1.2 Icon conveying information

#### 1.2.1 With visible text

The fax icon conveys information. If you hide this icon, you do not know that it is a fax number and not a phone number. It is therefore important to return this information to the user.

To do this, we use a visually hidden text and the `title` attribute:
* The class sr-only visually hides the text, but this text can be read in the assistive technologies;
* The `title` attribute provides a visual information for people who do not understand the icon.

<p>
    <span class="fas fa-fax tooltip" aria-hidden="true" title="Fax"></span>
    <span class="sr-only">Fax :</span>
    <span class="text">01 70 8X 45 96</span>
</p>

```html
<p>
    <span class="fas fa-fax tooltip" aria-hidden="true" title="Fax"></span>
    <span class="sr-only">Fax :</span>
    <span class="text">01 70 8X 45 96</span>
</p>
```

#### 1.2.2 With visible text in a link

##### 1.2.2.1

The trash icon conveys information, the purpose of this link is to delete an element. This information should not be only visual:

* With `aria-hidden` attribute, the icon will not be read by the assistive technologies;
* The `aria-label` attribute overrides the content text, and the `title` attribute in the assistive technologies;
* The `title` is a visual information, but a JS script is added to display the `title` on hover and focus.

<a href="#" title="Remove News (15)" aria-label="Remove News (15)">
    <span class="fas fa-trash-alt" aria-hidden="true"></span>
    <span class="text">News (15)</span>
</a>

```html
<a href="#" title="Remove News (15)" aria-label="Remove News (15)">
    <span class="fas fa-trash-alt" aria-hidden="true"></span>
    <span class="text">News (15)</span>
</a>
```

Another way:

<a href="#">
    <span class="sr-only">Remove</span>
    <span class="fas fa-trash-alt" aria-hidden="true" title="remove"></span>
    <span class="text">News (15)</span>
</a>

```html
<a href="#">
    <span class="sr-only">Remove</span>
    <span class="fas fa-trash-alt" aria-hidden="true" title="remove"></span>
    <span class="text">News (15)</span>
</a>
```

##### 1.2.2.2

Another very frequent example.
The phone icon conveys information. If you hide this icon, you do not know if it is a phone number or a fax number. It is therefore important to return this information to the user.

* With `aria-hidden` attribute, the icon will not be read by the technical assistance;
* When CSS is disabled, the icon is invisible, and this information (phone) is added in the `title` and `aria-label` attributes of the link;
* The `aria-label` attribute overrides the content text, and the `title` attribute in the assistive technologies. This is why it includes all the information of the link;

<a href="tel:01708X4596" title="Phone 01 70 8X 45 96" aria-label="Phone 01 70 8X 45 96">
    <span class="fas fa-mobile" aria-hidden="true"></span>
    <span class="text">01 70 8X 45 96</span>
</a>

```html
<a href="tel:01708X4596" title="Phone 01 70 8X 45 96" aria-label="Phone 01 70 8X 45 96">
    <span class="fas fa-mobile" aria-hidden="true"></span>
    <span class="text">01 70 8X 45 96</span>
</a>
```

Another way:

<a href="tel:01708X4596">
    <span class="fas fa-mobile" aria-hidden="true" title="Phone"></span>
    <span class="sr-only">phone</span>
    <span class="text">01 70 8X 45 96</span>
</a>

```html
<a href="tel:01708X4596">
    <span class="fas fa-mobile" aria-hidden="true" title="Phone"></span>
    <span class="sr-only">phone</span>
    <span class="text">01 70 8X 45 96</span>
</a>
```

#### 1.2.3 With visible text in a link that opens in a new window

<a href="https://www.w3.org/WAI/" target="_blank">
    Discover the Web Accessibility Initiative (new window)
</a>

```html
<a href="https://www.w3.org/WAI/" target="_blank">
    Discover the Web Accessibility Initiative (new window)
</a>
```

Another way:

<a href="https://www.w3.org/WAI/" target="_blank" title="Discover the Web Accessibility Initiative, new window" aria-label="Discover the Web Accessibility Initiative, new window">
    Discover the Web Accessibility Initiative <span class="fas fa-window-restore" aria-hidden="true"></span>
</a>

```html
<a href="https://www.w3.org/WAI/" target="_blank" title="Discover the Web Accessibility Initiative, new window" aria-label="Discover the Web Accessibility Initiative, new window">
    Discover the Web Accessibility Initiative
    <span class="fas fa-window-restore" aria-hidden="true"></span>
</a>
```

Another way:

<a href="https://www.w3.org/WAI/" target="_blank">
    Discover the Web Accessibility Initiative
    <span class="fas fa-window-restore" aria-hidden="true" title="New window"></span>
    <span class="sr-only">new window</span>
</a>

```html
<a href="https://www.w3.org/WAI/" target="_blank">
    Discover the Web Accessibility Initiative
    <span class="fas fa-window-restore" aria-hidden="true" title="New window"></span>
    <span class="sr-only">new window</span>
</a>
```

#### 1.2.4 Icon font in a link or a button

<a href="#" title="Home">
    <span class="fas fa-home" aria-hidden="true"></span>
    <span class="sr-only">Home</span>
</a>

```html
<a href="#" title="Home">
    <span class="fas fa-home" aria-hidden="true"></span>
    <span class="sr-only">Home</span>
</a>
```

<button type="submit" title="Filter news">
    <span class="fas fa-filter" aria-hidden="true"></span>
    <span class="sr-only">Filter news</span>
</button>

```html
<button type="submit" title="Filter news">
    <span class="fas fa-filter" aria-hidden="true"></span>
    <span class="sr-only">Filter news</span>
</button>
```

#### 1.2.5 Icon font in a link or a button that opens in a new window

<a href="#" target="_blank" class="new-window-off" title="Share on Facebook, new window">
    <span class="fab fa-facebook-square" aria-hidden="true"></span>
    <span class="sr-only">Share on Facebook, new window</span>
</a>

```html
<a href="#" target="_blank" title="Share on Facebook, new window">
    <span class="fab fa-facebook-square" aria-hidden="true"></span>
    <span class="sr-only">Share on Facebook, new window</span>
</a>
```

## 2 Inline SVG

### 2.1 Decorative icon

#### 2.1.1 With visible text

As for an icon font, the SVG being decorative, we add the `aria-hidden` attribute to true so that it is not read in the assistive technology.

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

### 2.2 Icon conveying information

For all SVG that convey information, it is necessary to provide an alternative and modify the role of the SVG:

* Adding the `role` attribute to img;
* Adding the `aria-label` attribute for assistive technologies;
* Adding in the `<svg>` a `<title>` to give visual information.

#### 2.2.1 With visible text

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

#### 2.2.2 With visible text in a link

<a href="#" title="Fax 01 70 8X 45 96" aria-label="Fax 01 70 8X 45 96">
    <svg aria-hidden="true" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64 128H32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zm416 32V77.25c0-8.49-3.37-16.62-9.37-22.63L425.37 9.37c-6-6-14.14-9.37-22.63-9.37H160c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zM288 432c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm0-128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm128 128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm0-128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm16-112H176V48h208v32c0 8.84 7.16 16 16 16h32v96z"/>
    </svg>
    <span class="text">01 70 8X 45 96</span>
</a>

```html
<a href="#" title="Fax 01 70 8X 45 96" aria-label="Fax 01 70 8X 45 96">
    <svg aria-hidden="true" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64 128H32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zm416 32V77.25c0-8.49-3.37-16.62-9.37-22.63L425.37 9.37c-6-6-14.14-9.37-22.63-9.37H160c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zM288 432c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm0-128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm128 128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm0-128c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v32zm16-112H176V48h208v32c0 8.84 7.16 16 16 16h32v96z"/>
    </svg>
    <span class="text">01 70 8X 45 96</span>
</a>
```

#### 2.2.3 SVG in a link

<a href="#" title="Home">
    <svg role="img" aria-label="Home" width="15" height="13"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z"/>
    </svg>
</a>

```html
<a href="#" title="Home">
    <svg role="img" aria-label="Home" width="15" height="13"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z"/>
    </svg>
</a>
```
*[AT]: Assistive technologies
