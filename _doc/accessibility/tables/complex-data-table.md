---
title: Complex data table
navigation: tables
nav: menu-criteria
description: What is a complex data table and how to make it accessible
---

<header>
# Complex data table
{: .article-header__title}
</header>

**Impact:** High to major

**Users mainly impacted:** Blind, severely visually impaired, mentally and cognitively impaired.

**RGAA criteria:** [Criterion 5.1](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-1) - [Criterion 5.2](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-2) - [Criterion 5.4](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-4) - [Criterion 5.5](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-5) - [Criterion 5.6](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-6) - [Criterion 5.7](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-5-7)
{: .criteria }

## Explanation
Compared to a simple data table, a complex data table contains header cells that are not distributed only on the first row and/or column of the table, or whose scope of these header cells is not valid for the whole column or row. In such tables, the header cells span over multiple rows and/or columns. They use the `rowspan` and/or `colspan` attributes on their `<th>` tag.

Here is an example of complex data table:

<table>
    <caption>Average monthly temperature over two years: the first grouping concerns the year 2016, the second the year 2017. The first column represents the month, the second the city of Brest, the third the city of Lyon.</caption>
    <thead>
        <tr>
            <td></td>
            <th id="citybrest">Brest</th>
            <th id="citylyon">Lyon</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th id="year2016" colspan="3" style="text-align:center">2016</th>
        </tr>
        <tr>
            <th id="monthjune2016">June</th>
            <td headers="citybrest year2016 monthjune2016">18°C</td>
            <td headers="citylyon year2016 monthjune2016">26°C</td>
        </tr>
        <tr>
            <th id="monthjuly2016">July</th>
            <td headers="citybrest year2016 monthjuly2016">19°C</td>
            <td headers="citylyon year2016 monthjuly2016">27°C</td>
        </tr>
        <tr>
            <th id="year2017" colspan="3" style="text-align:center">2017</th>
        </tr>
        <tr>
            <th id="monthjune2017">June</th>
            <td headers="citybrest year2017 monthjune2017">21°C</td>
            <td headers="citylyon year2017 monthjune2017">27°C</td>
        </tr>
        <tr>
            <th id="monthjuly2017">July</th>
            <td headers="citybrest year2017 monthjuly2017">24°C</td>
            <td headers="citylyon year2017 monthjuly2017">32°C</td>
        </tr>
    </tbody>
</table>

## A required relevant summary
In a complex data table, <strong>a summary is required</strong>. It must identify the table and describe its nature and structure.

The summary must be implemented in [the same way as the title in the simple data table](data-table.html#an-optional-relevant-title).

## Associate cells with their headers
Unlike the simple data table, the cells and the headers are not associated using the `scope` attribute on the `<th>` tag. In a complex data table, the mechanism to associate headers and cells is specific:
* The `<th>` tags must have a `id` attribute (unique value);
* The `<td>` tags must have a `headers` attribute containing the list of associated header ids.

```html
...
<tr>
    <td></td>
    <th id="citybrest">Brest</th>
    <th id="citylyon">Lyon</th>
</tr>
<tr>
    <th id="year2016" colspan="3" style="text-align:center">2016</th>
</tr>
<tr>
    <th id="monthjune2016">June</th>
    <td headers="citybrest year2016 monthjune2016">18°C</td>
    <td headers="citylyon year2016 monthjune2016">26°C</td>
</tr>
...
```

## Make it simpler: split the table
Browsing and understanding a complex data table using an assistive technology can be very hard for blind, severely visually impaired, mentally and cognitively impaired users. Additionally, complex data tables are usually not supported by rich text editors (CKEditor, TinyMCE...) and must be build manually in HTML.

Always try to replace a complex data table by several simple data tables.

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

<table>
    <caption>Average monthly temperature over the year 2017 at Brest and Lyon.</caption>
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
            <td>21°C</td>
            <td>27°C</td>
        </tr>
        <tr>
            <th scope="row">July</th>
            <td>24°C</td>
            <td>32°C</td>
        </tr>
    </tbody>
</table>
