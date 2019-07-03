---
title: Particular cases
nav: menu-criteria
---

## Images

### Criterion 1.3

There is a particular case management when the image is used as a [CAPTCHA](./glossary.html#captcha) or as a [test image](./glossary.html#test-image). In this situation, where it is not possible to give a relevant alternative without compromizing the function of the CAPTCHA or test, the criterion is not applicable.

**Note:** the case of CAPTCHAs and test images is handled specifically by the [criterion 1.4](./criteria/images/criterion-1-4.html).

### Criterion 1.8

For this criterion, there is a particular case management when the text is part of a logo or a graphic element associated with the identity of an organization or a company (a slogan, for example). In these situations, the criterion is not applicable for these items.

**Note 1:** Changes of color when taking focus are not affected by the application of the test, unless the content also changes when taking focus.

**Note 2:** the indications of link state (active or visited) are not affected by the application of the criterion.

### Criterion 1.9

For this criterion, there is a particular case management when the text is part of a logo or a graphic element associated with the identity of an organization or a company (a slogan, for example). In these situations, the criterion is not applicable for these items.

**Note 1:** Changes of color when taking focus are not affected by the application of the test, unless the content also changes when taking focus.

**Note 2:** the indications of link state (active or visited) are not affected by the application of the criterion.

## Colors

### Criteria 3.3 - 3.4

For these criteria, there is a particular case management when the text is part of a logo or a graphic element associated with the identity of an organization or a company. In these situations, the criteria are not applicable for these items.

**Note 1:** The particular case concerning the texts associated with the graphic identity of an organization or a company should be limited to specific elements such as a slogan. In case it is an entire graphic identity, especially when the graphic identity is imposed, that is problematic, like a choice of font color for example, the solution is to resort to an alternative version, with sufficiently high contrast.

**Note 2:** Changes of color when taking focus are not affected by the application of the test, unless the content also changes when taking focus.

**Note 3:** the indications of link state (active or visited) are not affected by the application of the criterion.

For these criteria, there is a particular case of management when the image of text is used as a [CAPTCHA](./glossary.html#captcha) or as a [test image](./glossary.html#test-image). In this situation, the criteria are not applicable.

## Multimedia

### Criteria 4.1 - 4.2 - 4.3 - 4.5 - 4.7 - 4.9 - 4.11 - 4.13

There is a particular case management when:

*   the [time-based media](./glossary.html#time-based-media-sound-video-or-synchronized) is used for decorative purposes (i.e. it contains no information);
*   the time-based media is itself an alternative to a content in the page (a sign language video or a spoken version of a text, for example);
*   the time-based media is used to access a larger version;
*   the time-based media is used as a [CAPTCHA](./glossary.html#captcha);
*   the time-based media is part of a test that would be useless if the [text transcript](./glossary.html#text-transcript-time-based-media), the [synchronized captions](./glossary.html#synchronized-captions-media-object) or the [audio description](./glossary.html#audio-description-extended) were disclosed.

In these situations, the criterion is not applicable.

### Criterion 4.15

There is a particular case management when the [time-based media](./glossary.html#time-based-media-sound-video-or-synchronized) is used for decorative purposes (ie it contains no information). In this situation, the criterion is not applicable.

### Criterion 4.16

There is a particular case management when:

*   the [non time-based media](./glossary.html#non-time-based-media) is used for decorative purposes (ie it contains no information);
*   the non time-based media is distributed in a [controlled environment](./glossary.html#controlled-environment);
*   the non time-based media is inserted via JavaScript by checking the presence and version of the plug-in, replacing alternative content already present.

In these situations, the criterion is not applicable.

### Criterion 4.19

There is a particular case management when the [time-based media](./glossary.html#time-based-media-sound-video-or-synchronized) is used as a [CAPTCHA](./glossary.html#captcha) or is part of a test that would become useless if the background sound could be disabled, or if the dialogue tracks were 20 decibels higher than the background sound.

In these situations, the criterion is not applicable.

### Criterion 4.22

There is a particular case management when the [time-based](./glossary.html#time-based-media-sound-video-or-synchronized) or [non time-based media](./glossary.html#non-time-based-media) is used for decorative purposes (i.e. it contains no information). In these situations, the criterion is not applicable.

## Tables

### Criterion 5.3

The ARIA API provides a mechanism to override the native role of an HTML element to define components. This way, it is possible to use [tables for layout](./glossary.html#table-for-layout) to build [lists](./glossary.html#list):

    <table role="list">
         <tr role="listitem">
           <td role="presentation"><img src="bullet.png" alt=""/></td>
           <td role="presentation">lorem ipsum</td>
         </tr>
         …
    </table>

Although this is strongly not recommended, it is conformant nevertheless. The table not being rendered as a table but as a list, it is useless to mark it up a table for layout. In this case, the criterion is not applicable.

## Links

### Criteria 6.1 and 6.3

There is a particular case management when the link is [ambiguous for every user](./glossary.html#ambiguous-for-everybody). In this situation, where it is not possible to make the link explicit in [context](./glossary.html#link-context), the criterion is not applicable.

## Scripts

### Criterion 7.3

There is a particular case management when the functionality depends on the use of an event manager without any universal equivalent, for example, a hand drawing application can not be made controllable through a keyboard only. In these situations, the criterion is not applicable.

### Criterion 7.5

There is a particular case management when the unsolicited warning relates to an emergency, event, or a sudden and unexpected situation that requires immediate action to preserve health, safety or property. In these situations, the criterion is not applicable.

## Mandatory elements

### Criterion 8.2

There is a particular case management regarding the compliance of HTML code.

To accompany the gradual support of HTML5 by browsers, accessibility APIs and assistive technologies, some criteria may require the presence of attributes or tags declared "obsolete" in HTML5\. In this case the test is not applicable 8.2.2.

### Criterion 8.7

There is a particular case management regarding the language change in the following cases:

*   Proper name: the criterion is **not applicable**;
*   Common name in a foreign language, present in the official dictionary of the default human language of the web page, the criterion is **not applicable** (**Note:** the official dictionary is recommended by the academy in charge of the language in question). For France, for example, the link to the official dictionary is on the [French Academy's website (in French)](http://www.academie-francaise.fr/le-dictionnaire/la-9e-edition). For any request to the service of the dictionary of the French Academy, use the [online French academy contact form (in French)](http://www.academie-francaise.fr/le-dictionnaire/service-du-dictionnaire);
*   The term in foreign language was previously submitted by the user via a form field and displayed on the page (such as the reminder of the search term, in the case of a search engine), the criterion is **not applicable**;
*   Text in a language that can not be determined: the criterion is **not applicable**.
*   Text in a dead language, or a fictitious language, for which there is no vocal interpretation: the criterion is **not applicable**.

**Note:** For common names in a foreign language, absent in the official dictionary of the default human language of the website, and adopted in the common language (eg: _rendezvous_): the criterion is **applicable** only when the absence of language specification may cause misunderstanding during restitution.

## Presentation of information

### Criterion 10.11

There is a particular case management for Chinese, Japanese and Korean languages. In these situations, the reference number of characters is 40.

## Navigation

### Criterion 12.1

There is a particular case management when the website consists of a single page or a very limited number of pages (see note) for which the browser search function in the content is considered as equivalent to a search engine. In this case, the criterion is not applicable.

**Note:** in practice, this particular case refers sites with 2 or 3 pages, for example, with few contents.

### Criteria 12.2 - 12.3

There is a particular case management when:

*   The pages of a [set of pages](./glossary.html#set-of-pages) are the result or part of a process (a payment or order taking process, for instance
*   The page is the home page
*   The website has only one page.

In such situations, the criterion is not applicable.

### Criterion 12.8

There is a particular case management when the page is the home page or when the website is constituted of a single page. In this case, the criterion is not applicable.

### Criterion 12.11

There is a particular case management when the website is constituted of a single page.

In this case, the requirement for a quick access link depends on the context of the page: presence or absence of navigation blocks or additional contexts for example. The criterion can be considered as not applicable when it is ascertained that a quick access link is useless.

## Consultation

### Criterion 13.1

There is a particular case management when the time limit is essential, especially when it could not be removed without fundamentally changing the content or functionality related to content.

In these situations, the criterion is not applicable. For example, the refresh of an RSS feed on a page is not a critical time limit; the criterion is applicable. However, an automatic redirection that leads to the new version of a page from an outdated [URL](./glossary.html#mUrl) is essential; the criterion is not applicable.

### Criterion 13.6

There is a particular case management when the document is generated dynamically (eg an invoice). In this situation, the weight indication is optional, other indications (file type and language) are still required.
