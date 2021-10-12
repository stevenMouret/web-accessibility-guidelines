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

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
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
