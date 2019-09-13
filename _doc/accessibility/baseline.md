---
title: Baseline
nav: menu-criteria
---

## Baseline

Several RGAA criteria refer to rendering tests on a range of assistive technologies, browsers and operating systems. This document describes and explains the combinations selected to constitute the baseline.

### Compatible with assistive technologies - Baseline

The reference baseline consists of configurations (assistive technology, operating system, browser) used to declare a HTML5 / ARIA based piece of software is ["accessibility supported" as defined by WCAG](http://www.w3.org/Translations/WCAG20-fr/#accessibility-supporteddef).

It is established by consensus from the list of assistive technologies that are in a sufficiently widespread used, or in some cases when provided natively, and is the users' preferred means of access to information and functionality.

### Baseline

The baseline that covers the widest proportion of uses consists of combinations involving assistive technologies sufficiently widespread, the two operating systems Windows XP (and later) and OS X + and the three browsers IE9+, Firefox and Safari.

For a HTML5 / ARIA device or its alternative to be considered compatible with accessibility, it has to be fully functional in terms of restitution and features, at least for one of the following combinations:

<table>
    <caption>Baseline - Combination 1</caption>
    <thead>
        <tr>
            <th scope="col">Assistive technology</th><th scope="col">AT version</th><th scope="col">Browser</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>NVDA</td><td>Latest version</td><td>Firefox</td>
        </tr>
        <tr>
            <td>JAWS</td><td>Previous version</td><td>Firefox or Internet Explorer 9+</td>
        </tr>
        <tr>
            <td>Voice Over</td><td>Latest version</td><td>Safari</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>Baseline - Combination 2</caption>
    <thead>
        <tr>
            <th scope="col">Assistive technology</th><th scope="col">AT version</th><th scope="col">Browser</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>JAWS</td><td>Previous version</td><td>Firefox</td>
        </tr>
        <tr>
            <td>NVDA</td><td>Latest version</td><td>Firefox or Internet Explorer 9+</td>
        </tr>
        <tr>
            <td>Voice Over</td><td>Latest version</td><td>Safari</td>
        </tr>
    </tbody>
</table>

### Additional requirements

The following rules must be observed:

1.  All HTML5 / ARIA devices, or their alternatives, must be fully functional on all pages of the site without needing to use a different assistive technology;
2.  When alternatives to HTML5 / ARIA devices are proposed, they should not require deactivation of a technology (eg.: JavaScript or Flash plugin) unless there is a feature offered by the website itself. For example:
    *   the site provides a fully functional, compliant alternative version, that does not require technologies that are not accessibility supported;
    *   the site offers feature allowing to replace HTML5 / ARIA devices by compatible alternative devices;
3.  Users of assistive technologies are provided with a means to report issues, and get through a compensation system, the information they would be blocked from otherwise;
4.  If a conformance declaration is provided, it must include a list of assistive technologies with which the HTML5 / ARIA devices were tested, and the results of these tests (eg. "supported", "not supported", "partially supported"), at least.

### Controlled environment

When the website is intended to be distributed and used in a [controlled environment](./glossary.html#mEnvMait), the baseline consists of configurations (assistive technology, operating system, browser) actually used in the controlled environment.

For example, when the website is exclusively distributed in a GNU / Linux environment, the tests must be carried out only on browsers and assistive technologies actually used by users in this environment. This baseline replaces the baseline used in uncontrolled environments.
