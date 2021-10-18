---
title: Layout table
navigation: tables
nav: menu-criteria
description: What is a layout table and how to make it accessible
---

<header>
# Layout table
{: .article-header__title}
</header>

**Impact:** Major

**Users mainly impacted:** Blind and severely visually impaired.

**RGAA criteria:** [Criterion 5.3](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-3) - [Criterion 5.8](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-8)
{: .criteria }

## Explanation
A layout table is a technic that involves using a table to control the display of the information in cells. It's not forbidden, but it must respect some very important rules.

## How to integrate a layout table

### Do no use elements specific to data tables
Because a layout table is used to control the display of the information, it must not use elements specific to data tables. The semantics of the "table" must be disabled to prevent assistive technologies from triggering table-specific rendering and browsing functionalities.

#### Forbidden tags and attributes
* The `<table>` tag should not contain the (obsolete) `summary` attribute, or must be empty.
* The `<table>` tag must not contain the `role="table"` attribute.
* The `<table>` tag must not contain `<caption>`, `<th>`, `<thead>`, `<tfoot>`, `<colgroup>` tags.
* No tag in the `<table>` tag must contain `role="rowheader"` and `role="colheader"` attributes.
* The table cells (`<td>` tag) must not contain `scope`, `headers`, `axis` attributes.

#### Required attribute
To totally remove the semantic of "table", the `<table>` must contain the `role="presentation"` attribute.

### The linearized content must remain understandable
Here is an example of a layout table where the content is not linearized:

<table role="presentation">
    <tr>
        <td>Our cars</td>
        <td>Our competitors' cars</td>
    </tr>
    <tr>
        <td>are very economical</td>
        <td>consume a lot of fuel</td>
    </tr>
</table>

In a visual browser where the entire table is displayed, the table is read in a non-linear way. So the message is read as expected:

<blockquote><p>Our cars are very economical<br>Our competitors' cars consume a lot of fuel</p></blockquote>

But in a non-visual browser (assistive technology, screen reader...) where the content is read line by line, the message is read a little differently:

<blockquote><p>Our cars Our competitors' cars <br>are very economical consume a lot of fuel</p></blockquote>

<div class="tip">
<svg role="img" aria-label="Tip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="28" height="40"><title>Tip</title><path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"/></svg>
Search engines would also read this wrong message because their robots index web pages line by line too.
</div>

#### Linearize the content
Two possibilities:

##### 1 : Reorder the content in cells

<table role="presentation">
    <tr>
        <td>Our cars</td>
        <td>are very economical</td>
    </tr>
    <tr>
        <td>Our competitors' cars</td>
        <td>consume a lot of fuel</td>
    </tr>
</table>

##### 2 : Span the cells

<table role="presentation">
    <tr>
        <td>Our cars <br>are very economical</td>
        <td>Our competitors' cars <br>consume a lot of fuel</td>
    </tr>
</table>

#### Replace by a very better alternative
Such tables should be replaced by other elements providing a very better semantic.

For example:
* Ordered (`<ol><li>`).
* Unordered lists (`<ul><li>`).
* Definition lists (`<dl><dt><dd>`).
* Simple paragraphs `<p>`.
