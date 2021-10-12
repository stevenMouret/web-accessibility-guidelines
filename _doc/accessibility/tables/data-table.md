---
title: Data table
navigation: tables
nav: menu-criteria
description: What is a data table and how to make it accessible
---

<header>
# Data table
{: .article-header__title}
</header>

**Impact:** High to major

**Users mainly impacted:** Blind, severely visually impaired, mentally and cognitively impaired.

**RGAA criteria:** [Criterion 5.4](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-4) - [Criterion 5.5](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-5) - [Criterion 5.6](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-6) - [Criterion 5.7](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-7)
{: .criteria }

## Explanation
A simple data table contains header cells distributed only on the first row and/or column of the table. Their scope is valid for the entire column or row. The attributes `rowspan` and `colspan` are not used in the `<th>` tags.

Here is an example of simple data table:

<table>
    <caption>Average monthly temperature over the year 2016 at Brest and Lyon.</caption>
    <thead>
        <tr>
            <td></td>
            <th scope="col">Brest</th>
            <th scope="col">Lyon</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">June</th>
            <td>18°C</td>
            <td>26°C</td>
        </tr>
        <tr>
            <th scope="row">July</th>
            <td>19°C</td>
            <td>27°C</td>
        </tr>
    </tbody>
</table>

## An optional relevant title
In a simple data table, <strong>an optional title</strong> can be added. If it exists, it must be relevant by clearly identifying the table.

The title can be implemented as follows:
* Using a `<caption>` tag directly below the `<table>` tag (recommended method, best support);
* Using a `title` attribute on the `<table>` tag;
* Using a `aria-label` attribute on the `<table>` tag;
* Using a `aria-labelledby` attribute on the `<table>` tag, where the value matches the `id` of an element of the page (e.g. a previous heading or paragraph).

```html
<table>
    <caption>Average monthly temperature over the year 2016 at Brest and Lyon.</caption>
...
```

```html
<h2 id="table-title">Average monthly temperature over the year 2016 at Brest and Lyon.</h2>
<table aria-labelledby="table-title">
...
```

## Associate cells with their headers
The cells and the headers must be associated as follows:
* Row and column headers must be identified with the `<th>` tag;
* Row headers must use the `scope` attribute with the value `row`;
* Column headers must use the `scope` attribute with the value `col`.

```html
...
    <tr>
        <td></td>
        <th scope="col">Brest</th>
        <th scope="col">Lyon</th>
    </tr>
    <tr>
        <td>18°C</td>
        <td>26°C</td>
    </tr>
</table>
```
