---
title: Technical notes
nav: menu-criteria
---

## Images {#images}

### Criterion 1.2 \[A\] {#TNcrit1-2}

When an image is associated with a
[caption](./glossary.html#mImageCaption), the WCAG technical note
recommends to systematically provide an alternative text for the image
(see [criterion 1.10](./criteria.html#crit-1-10)). In this case the
criterion 1.2 is not applicable.

A WAI-ARIA `role="presentation"` attribute can not be used to specify a
decorative image, in accordance with the use of WAI-ARIA roles
restrictions, as per the current specifications.

### Criterion 1.3 \[A\]: `title` attribute {#TNcrit1-3a}

The WCAG note prohibits the use of the `title` attribute to replace the
`alt` attribute, however it is often useful to use the `title` attribute
to display a tooltip on particularly obscure images. If the `title`
attribute is used in this way, the content of the `title` attribute must
be strictly identical to the alternative.

### Criterion 1.3 \[A\]: `<title>` tag in SVG elements {#TNcrit1-3b}

With SVG, the lack of support for the `<title>` element by assistive
technologies incurs issues when the `<desc>` element is used to
implement the short alternative text for the image, whereas the image
requires a [detailed description](./glossary.html#mDescDetaillee). In
this case it is recommended to use an adjacent text or an [adjacent
link](./glossary.html#mLienAdj) to provide the detailed description.

The 1.3.9 and 1.3.12 tests are used to verify that the implementation of
the alternative is [accessibility
supported](./glossary.html#mCompAccess) (with the chosen
[baseline](./baseline.html)).

### Criterion 1.6 \[A\] {#TNcrit1-6}

With SVG, the lack of support for the `<title>` element by assistive
technologies incurs issues when the `<desc>` element is used to
implement the short alternative text for the image, whereas the image
requires [detailed description](./glossary.html#mDescDetaillee). In this
case it is recommended to use an adjacent text or an [adjacent
link](./glossary.html#mLienAdj) to provide the detailed description.

If the `<desc>` element is used to implement the detailed description,
it is recommended to use an `aria-label` attribute to implement the
short alternative of the image.

The use of the `aria-describedby` attribute is not possible to link an
image to its description, due to lack of support for assistive
technologies.

The adjacent detailed description can be implemented via a
`<figcaption>` in this case the [criterion
1.10](./criteria.html#crit-1-10) must be verified (using `<figure>`,
`role="group"`, etc.).

### Criteria 1.8 \[AA\] and 1.9 \[AAA\] {#TNcrit1-8}

The text in vector images being actual text, it is not affected by these
criteria.

### Criterion 1.10 \[A\] {#TNcrit1-10}

Implementing a `role="group"` on the `<figure>` parent element is
intended to circumvent the current lack of support for the `<figure>`
elements by assistive technologies. Although recommended, the use of a
`figcaption` element in a `figure` element is optional. However the use
of a `figcaption` element to associate a caption to an image requires
the use of a `figure` parent element. The reference to the adjacent
caption can be an expression like "image 1", or an equivalent, when this
expression is included in the caption.

Although recommended by HTML5, the WCAG Note states that the `title`
attribute can not be used for to "label" an image.

The `aria-labelledby` and `aria-describedby` attributes can not be
currently used, due to lack of support by assistive technologies.

**Note:** Captioned images must also meet [criterion
1.3](./criteria.html#crit-1-3) relative to images conveying information.

## Tables {#tableaux}

### Criterion 5.1 \[A\] {#TNcrit5-1}

The specification provides several methods to associate a table with its
summary (table linked to a text passage with `aria-describedby`; table
grouped with a summary, provided as an adjacent text, via a `figure`
element; table grouped with a summary, provided in a `figcaption`
element, via a `figure` element; summary provided via a `details`
element in the `caption` element).

These methods are currently not supported enough to be used reliably.

## Scripts {#script}

### Criterion 7.1 \[A\] {#TNcrit7-1}

Criterion 7.1 implements the concept of "[supported by assistive
technologies](./glossary.html#mCompAccess)" as defined by the WCAG, as
well as the use of the WAI-ARIA API to make a component or functionality
accessible. The proper use of the WAI-ARIA API is verified through tests
7.1.3, 7.1.4, 7.1.5 and 7.1.6.

**Important note**: in an HTML5 environment, many components may require
JavaScript to function. In the case of a JavaScript component that could
not be made ​​accessible, when an alternative is provided, a method must
be provided specifically for the faulty component to enable the user to
replace it (or turn it on again) with its accessible alternative.

This means that disabling JavaScript for the whole page will not be
accepted as a valid method, unless it does not compromize the use of
other components.

### Criterion 7.3 \[A\] {#TNcrit7-3}

For certain user interface components design patterns, ARIA defines a
set of keyboard interactions based on Esc, Space bar, Tab and arrow
keys; and, occasionally, other interactions based on Page Up, Page Down,
Home and End keys, for example. In order to allow gradual implementation
of these components with complex keyboard interactions, the RGAA
restricts the requirements to only main keys (the Esc, Space bar, Tab,
and arrow keys) as per the [ARIA design
patterns](./glossary.html#mDesignPattern).

## Information structure {#structure}

### Criterion 9.1 \[A\] {#TNcrit9-1}

The ARIA specification allows the use of the role `heading` combined
with the `aria-level` property (hierarchical level in the document
outline) to mark headings. Although it is preferable to use the native
&lt;h*x*&gt; elements in HTML , the use of the WAI-ARIA role `heading`
is compatible with accessibility.

While the HTML5 specification allows the use of only level 1 headings
(`<h1>`), the lack of support by assistive technologies makes it
necessary to use a relevant headings hierarchy.

### Criterion 9.2 \[A\] {#TNcrit9-2}

The document tree ([outline](./glossary.html#mDocumentOutline)) is
generated by the use of sectioning` <nav>`, `<article>`, `<section>`,
and `<aside>` tags, and implicit sections generated by using a `<hx>`
(when the `<hx>` is not the first child of a section).

A sectioning tag is used to structure or group content, parts of a
content, or a set of contents that can be considered independently of
the rest of the document.

A [navigation area](./glossary.html#mMenuNav) in the site or in a
subpart of the site, a table of contents or the navigation area of a
[collection of pages](./glossary.html#mCollecPage) (`<nav>`), a content
"complementary" to [main content](./glossary.html#mMain) (`<aside>`),
the main content or the grouping of several content like articles
(`<article>` or `<section>`) or a secondary content such as a comment, a
Twitter widget, RSS feeds (`<article>` or `<section>`) are examples of
sectioning contents.

In the case of content, as opposed to the navigation areas (`<nav>`) or
complementary content areas (`<aside>`), a section should have, if
appropriate, a header (`<header>`) and footer (`<footer>`).

The first heading `<hx>` in a section gives the "name" of this section,
as it will be set in the document tree. The following headings (`<hx>`;)
create implicit sections that will constitute the section's outline.

A section can be considered independently of the rest of the page, the
tree generated by the implicit sections (`<hx>`) is calculated from
Level 1 assigned to the first section heading.

When used, the document tree may therefore be different from the page
content tree based on `<hx>`, although both structures are similar.

This tree must be representative of the document structure and be
consistent with the structure of the content generated by the use of
`<hx>`. Structuring the content generated by the `<hx>` tags could be,
theoretically, deduced from the document tree, thus the HTML5
specification recommends using `<h1>` headings. But this practice is
prohibited by RGAA and requires via the criterion 9.1 to use a relevant
headings hierarchy (`<hx>`).

If the outline (provided that it is relevant) allows exploration and
navigation features with some assistive technologies, it also affects
the headings hierarchy generated by the `<hx>` by changing the level of
rendered headings.

To accompany the gradual support of the document outline algorithm, and
considering the fact that the RGAA requires to have, in any case, a
robust and consistent content structure (tags `<hx>`), it is acceptable
to consider the test 9.2.2 as not applicable when it is not possible to
ensure that the document outline is perfectly consistent.

In this case, non-compliant content for this test should be signaled as
a simple warning.

### Criterion 9.3 \[A\] {#TNcrit9-3}

The WAI-ARIA Roles `list` and `listitem` may require the use of the
`aria-setsize` and `aria-posinset` properties, if the entire list is not
available via the DOM generated at the time of rendering.

Despite the existence of the `definition` role, used in combination with
the `aria-labelledby` property, WAI-ARIA does not offer a role
equivalent to HTML definition lists (`DL`). The `definition` role can
not, therefore, be used as an equivalent of an HTML definition list
`DL`.

The roles `tree`, `tablist`, `menu`, `combobox` and `listbox` are not
equivalent to an HTML `ul` or `ol` list.

References: [The Roles model -
list](http://www.w3.org/WAI/PF/aria/roles#list).

## Presentation of information {#presentation}

### Criterion 10.13 \[A\] {#TNcrit10-13}

WAI-ARIA provides an `aria-hidden` property (`true` or `false`) that
inhibits the rendering of a content to assistive technologies, without
affecting its visibility with visual user agents: content with
`aria-hidden="true"` will not be spoken out but remains visible. Unless
the content controlled by `aria-hidden` is not intended to be rendered
by assistive technologies, the value of the `aria-hidden` attribute must
be consistent with the displayed or hidden status of the on-screen
content.

The HTML5 specification describes a `hidden` attribute that can make
unavailable (when the hidden attribute is present) content in the
generated DOM (similar to `type="hidden"` on a form control).

There can be situations where a content controlled with `hidden` or
`aria-hidden` is momentarily in an inconsistent state with the displayed
or hidden status of the content, for example when an item is meant to be
available but visually displayed only upon further action. In this case,
it is the final state of the content that should be considered for
validation of this criterion.

## Forms {#formulaire}

### Criterion 11.11 \[AA\] {#TNcrit11-11}

Some types of HTML5 form controls manage help messages on input
automatically. For example, input fields of type `email` display a
message like "Please enter a valid email address" if the entered email
address does not match the expected format. These messages are
customizable via the API Constraint Validation, which provides ability
to customize error messages. This validates the criterion, however,
authors are warned that support of this API is not yet stabilized. The
`pattern` type that can automatically perform format control (using
regular expressions) also displays a help message but it is customizable
via the `title` attribute; this mechanism validates the criterion.

Reference: [WHATWG - 4.10.21.3 The constraint validation
API](https://html.spec.whatwg.org/#constraint-validation).

## Navigation {#navigation}

### Criterion 12.10 \[A\] {#TNcrit12-10}

WAI-ARIA provides roles to indicate the main areas (regions) of the
document. These roles are very beneficial to users of screen readers in
particular, but also to sighted keyboard users who can benefit from
features allowing rapid navigation in the document structure. While most
screen readers make these features available to users, browsers have not
yet proposed dedicated navigation features for users who rely on
keyboard exclusively. The implementation of skip links remains a
requirement.
