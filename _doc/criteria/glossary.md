---
title: Glossary
nav: menu-criteria
---

## A {#a}

### Access to each page (of the collection of pages) {#mAccColl}

In the cases where the collection contains a large number of pages, it
is usual to provide only links to one page in ten, for instance. This
practice passes the test.

### Accessible and activable either through a keyboard or a mouse {#mAAClavierSouris}

*   A user interface component (link, button, clickable element in a
    Flash movie…) is accessible either through a keyboard and a mouse
    when it can receive focus, indifferently, through the use of the
    mouse pointer or the Tab key.
*   A user interface component (link, button, clickable element in
    Flash…) can be activated either through a keyboard or a mouse when
    the user can initiate the action triggered by the user interface
    component indifferently with a mouse click or the Enter key.
*   **Warning**: for some user interface components such as sliders
    (sliding or rotating button…), it is not possible to control the
    component only with the Enter key. In this situation, other keys
    (such as the arrow keys) can be used.

In the RGAA, the expression "controlled either through a keyboard or a
mouse" also refers to the current definition.

**Important notice:** Some technologies can make focus management too
complex or unstable to rely only upon the Tab, arrow and Enter keys.

In this case, keyboard shortcuts may be the only solution to make the
composant usable.

The criterion can be considered as Conforming, if the keyboard shortcuts
are appropriately documented, and operable for every location of the
focus in the user interface.

The following WCAG Technique: [SL15: Providing Keyboard Shortcuts that
Work Across the Entire Silverlight
Application](https://www.w3.org/TR/WCAG20-TECHS/SL15.html) provides
information on this matter, for the Silverlight technology.

### Accessible version (of a downloadable document) {#mVaccessible}

Downloadable documents provided in format types that are
accessibility-supported must be accessible, or an alternate accessible
version, or an accessible HTML version, must be provided. The document
formats considered as accessibility-supported are:

*   Microsoft Office (Word 2003 and later, OOXML)
*   Open Office Org (ODF)
*   Adobe PDF
*   Epub/Daisy

Contents must conform to the [list of criteria for downloadable office
documents (ODT, 74 kb, in
French)](http://references.modernisation.gouv.fr/sites/default/files/liste-criteres-documents-bureautiques-telechargement-RGAA.odt).

**Note:**The txt format cannot be used to provide an accessible version
of a downloadable document.

### Adapts a design pattern defined by the ARIA API {#mAdaptsARIADP}

The ARIA API defines design patterns, for tab lists or modal windows for
example, designed to provide a standardized behavior for user interface
components. The application of these design patterns is required by the
RGAA.

However, it is possible to adapt these design patterns, by replacing a
poorly supported property by an equivalent one, or by enriching the
component with properties that improve the user experience, or secure
the component's behaviour.

It is the author's responsibility to check that these adaptations are
consistent with the design pattern; that they do not modify the expected
behavior, from a user experience point of view; and that the adapted
component is correctly rendered by assistive technologies.

If these requirements are met, the component can be declared
"conforming" with the design pattern.

### Adjacent link {#mLienAdj}

Link adjacent to an element both in the layout (CSS enabled) and in the
HTML code. In the HTML code, the link must be just before or after the
element it is adjacent to.

### Alert {#mAlerte}

Alert message that interrupts navigation or consultation, requiring the
user to click on a button or a link in order to proceed; for example, a
dialog box generated via the `alert` JavaScript function. By extension,
a pop-in (content presented in an overlay, is inserted in the DOM) that
needs to be closed to proceed, is considered as an alert.

**Note:** An option may be proposed to disable the alerts before they
are triggered, for example, via a user parameter. Other example: when
the first alert is displayed, a checkbox "do not display this alert
anymore" can be ticked by the user.

### Alternate mechanism {#mMecaRempl}

Mechanism (CSS-based, generally), allowing the user to replace text with
an image of text, and reversely, like a style switcher for instance. The
mechanism can rely either on a server-side or client-side script
language.

### Alternative (short and concise) {#mAltCC}

Rendering a text alternative via an assistive technology (like a screen
magnifier for instance), requires that it should be as short as
possible. A length of 80 characters is strongly recommended; it will
reduce the manipulations to read the text alternative for users of
Braille displays or screen magnifiers, in particular.

### Alternative (Text alternative of an image) {#mAltTexteImg}

A text asssociated to an image via an appropriate technique, describing
the information conveyed by the image (in relation with the context of
the Web content it is included in). RGAA considers four types of
alternatives, depending on the purpose of the image:

*   **For an image that conveys information**, the text alternative
    provides the information needed to understand the content the image
    is associated with;
*   **For a decorative image**, the alternative must be empty
    (`alt=""`);
*   **For an image link**, the text alternative describes the purpose or
    the target of the link;
*   **For a CAPTCHA or test image**, the text alternative can not
    provide the information conveyed by the image without compromising
    the associated security function. In this case, the alternative
    should only describe the nature and purpose of the image.

**Note 1:** for a CAPTCHA image, the text alternative can be, for
instance: "anti-spam security code", or "code to check you are human",
or any other text providing the user with the ability to understand the
nature and purpose of the image.

**Note 2:**Groups of non-linked images may constitute a particular case,
when they provide an information as a group rather than as a single
image. For example: several images of a star graphically describe the
average result in an online voting system. In such cases, it is strongly
recommended to provide a text alternative for the first image, that
describes the purpose of the group, while the other images will be
considered as decorative. On this subject, you may read this technical
note: [A group of images that form a single larger picture with no
links](https://www.w3.org/TR/html5/embedded-content-0.html#a-group-of-images-that-form-a-single-larger-picture-with-no-links).

### Alternative (to a script) {#mAltScript}

Text or process associated with the script, via an appropriate
technique, and providing a function or a content similar to the one
provided by the script.

**Note:** when an alternative to a JavaScript functionality is
available, the website must provide the way to access it. It can be a
link or a button providing access to an alternative page not relying
upon JavaScript, or allowing to replace the component by an alternative
component that does not rely on JavaScript, for instance.

### Alternative (to an SVG image) {#alternative-svg}

Are considered as possible alternatives to an SVG image:

*   A replacement mechanism
*   An adjacent link giving access to an alternative which content is
    relevant, and matches the `aria-label` property and the `title`
    attribute content, if present.

### Alternative audio-only version {#mAudioOnly}

An audio-only version is an audio-based version of a content (in a form
of a downloadable MP3 file for instance), provided as an alternative to
video-only (video document with no audio information). The only impacted
users, with video-only content, being users with visual impairments,
WCAG considers as acceptable to provide an audio-only version.

The audio-only version must include all the useful visual information
found in the video.

It is generally simpler to produce an audio version than a textual one
when the video is very descriptive (the transcription requiring then a
heavy workload in terms of copywriting). Authors are reminded, though,
that only text transcripts provide a universal access to the information
provided by the video. Indeed, video incurs potentially other barriers,
like for users who do not have to ability to play the audio or video
content.

### Ambiguous for everybody {#mAmbigueTtMonde}

the purpose cannot be determined from the link and all information of
the Web page presented to the user simultaneously with the link (i.e.,
readers without disabilities would not know what a link would do until
they activated it)

Example: The word guava in the following sentence "One of the notable
exports is guava" is a link. The link could lead to a definition of
guava, a chart listing the quantity of guava exported or a photograph of
people harvesting guava. Until the link is activated, all readers are
unsure and the person with a disability is not at any disadvantage.

### Anchor {#mAncreNom}

In HTML, an anchor (also called bookmark) is composed of an `<a>` tag
with the `id` attribute and with no `href`; for example:
`<a id="content"></a>`. An anchor serves as a target for a link like
`<a href="index.html#content">skip to content</a>`.

### Area (of an image map) {#mZone}

Clickable or non clickable area of a client-side image map, or clickable
area of a server-side image map.

### Area (Clickable) {#mZoneCliquable}

Image map with an attached behavior; for example, triggering an event by
clicking on a link (for a client-side clickable area: `area` tag with a
`href` attribute). The `area` tags are descendants of a `map` tag.

With server-side image maps, the coordinates are stored on the server.

### Area (Non clickable) {#mZoneNonCliquable}

Image map with no attached behavior. A client-side non clickable area is
created with an `area` tag:

*   With the `nohref` attribute in pages where the doctype is not HTML5
*   With no `href` attribute in HTML5

The `area` tags are descendants of a `map` tag.

### Audio description (Extended) {#mAudioDescE}

Audio description that is added to an audiovisual presentation by
pausing the video so that there is time to add additional description.

**Note:** This technique is only used when the sense of the video would
be lost without the additional audio description and the pauses between
dialogue/narration are too short.

### Audio description (Synchronized, time-based media) {#mAudioDesc}

Narration added to the soundtrack to describe important visual details
that cannot be understood from the main soundtrack alone. The audio
description must be synchronized with the time-based media

**Note 1:** Audio description of video provides information about
actions, characters, scene changes, on-screen text, and other visual
content.

**Note 2:** In standard audio description, narration is added during
existing pauses in dialogue. (See also extended audio description.)

**Note 3:** Where all of the video information is already provided in
existing audio, no additional audio description is necessary.

## B {#b}

### Button (form) {#mBtnForm}

A form element designed to perform a predefined action when activated.
For instance, a submit button, when pressed, initiates the transmission
of the data collected from the form to the web server. The button text
must describe the action resulting in its activation (for example:
"Start search", "Send your message").

In HTML, there are three types of button elements:

*   `INPUT` of type `submit`, `reset` or `button`,
*   `INPUT` of type `image`,
*   `BUTTON`.

There can be four types of button text:

*   the content of the `value` attribute, for buttons of type `submit`,
    `reset` or `button`,
*   the content of the `alt` attribute for a button of type `image`,
*   the content of the `title` attribute when it is defined,
*   the content of the `button` tag.

### Bypass or skip links {#mLienEvitement}

Links whose purpose is to navigate inside of content (skip link, link to
the search form or the menu).

## C {#c}

### CAPTCHA {#mcaptcha}

A CAPTCHA is a test designed to tell computers and humans apart. The
test is often based on images containing distorted text, mixed with
other shapes, or with altered colors. The user is requested to key in
the obscured characters. Other forms of CAPTCHA can be based on logical
questions or audio clips.

### Change of context {#mChangContexte}

Major changes in the content of the Web page that, if made without user
awareness, can disorient users who are not able to view the entire page
simultaneously. Changes in context include changes of:

1.  user agent
2.  viewport
3.  focus
4.  content that changes the meaning of the Web page

**Note:** A change of content is not always a change of context. Changes
in content, such as an expanding outline, dynamic menu, or a tab control
do not necessarily change the context, unless they also change one of
the elements listed above (e.g., focus).

**Example:** Opening a new window, moving focus to a different
component, going to a new page (including anything that would seem to to
users as if they had moved to a new page) or significantly re-arranging
the content of a page, are examples of changes of context.

### Change of native role of an HTML element {#mChangeNativeRole}

The WAI-ARIA specification allows to modify the native role of an
element, like for instance changing an `A` element (with an href
attribute) into a `BUTTON` element.

These modifications can be made only under certain conditions, described
in the document [Notes on Using WAI-ARIA in
HTML](https://www.w3.org/TR/aria-in-html/), which defines several
restrictions, in particular.

To be considered conformant, a change of the native role of an HTML
element via WAI-ARIA must comply with these restrictions.

### Changes in luminosity (sudden) or flashing effects {#mChangeLumi}

A rapid alternance of colors with very different levels of luminosity,
that can cause seizures in some people, if the flashing area is large
enough, and the rate of change within specific frequency ranges.

### Characters size, or Font size {#mTailleCaractere}

Size of the characters of textual content found in the page. In order to
be accessible, font sizes must be defined with relative units (`%`, `em`
or `rem`, `vw`, `vh`, `vmin` or `vmax`) or keywords (`xx-small`,
`x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `smaller`,
or `larger`).

`Note:` with regards to the RGAA, the use of the pixel unit (`px`) is
prohibited.

### Collection of pages {#mCollecPage}

Pages linked to each other via hyperlinks, and with a common subject or
nature. For example, the result pages of a search engine or the pages of
a catalogue are collections of pages.

### Consistent labels {#consistent-labels}

Form fields labels available in the same page, or the same set of pages,
and requiring the input of the same information, must be expressed
unambiguously, so that the user understands that the expected
information is the same.

### Consistent (reading or tabbing order) {#mCoherentODL}

Consistent content is readable (the elements order is logical) and
understandable (the reading logic is consistent).

### Contrast (color) {#mContraste}

Significant opposition between a foreground color and a background
color. The contrast ratio is based on the difference of relative
luminance between background and foreground according to the rule: (L1 +
0.05) / (L2 +0.05) where L1 is the relative luminance of the lighter
color, and L2 is the relative luminance of the darker color. The
luminance is calculated according to the following formula: L = 0,2126
\* R + 0,7152 \* G + 0,0722 \* B where R, G and B are defined as:

*   if RsRGB &gt;= 0,03928 then R = RsRGB/12,92 else R =
    ((RsRGB+0,055)/1,055) ^ 2,4
*   if GsRGB &gt;= 0,03928 then --G = GsRGB/12,92 else G =
    ((GsRGB+0,055)/1,055) ^ 2,4
*   if BsRGB &gt;= 0,03928 then B = BsRGB/12.92 else B =
    ((BsRGB+0,055)/1,055) ^ 2,4

and RsRGB, GsRGB, and BsRGB are defined as:

*   RsRGB = R8bit/255
*   GsRGB = G8bit/255
*   BsRGB = B8bit/255

The "^" character is the exponentiation operator.

**Note:** The contrast measurment is related to the text, the image of
text, text and images of text in animations, the text in captions, and
text that is embedded in videos. As far as text and images of text of
animations and the text in captions and embedded text in videos are
concerned, the font size must be measured according to the default
displaying size, (as displayed). Text that is avaailable in the elements
of an image or a video (for example a sign, a poster etc.) are not
concerned.

Source: [Procedure to measure contrasts in the
WCAG](https://www.w3.org/TR/WCAG20-TECHS/G18.html#G18-procedure).

### Control (of autoplaying sound) {#mControlSound}

Ability for the user to pause and play an autoplaying sound.

**Note:** when appropriate, the controlling device should be the first
element in the page.

### Control features (time-based media) {#mFonctionControle}

Functionalities enabling the user to control the playing of a time-based
media, either through a keyboard or a mouse, at least. The following
requirements must be met:

*   List of required control features:
    *   the time-based media must always have at least the following
        features: play, pause, stop ;
    *   if the time-based media has sound, it must have a feature to set
        the sound on and off, and to control the volume;
    *   if the time-based media has captions, it must have a feature
        enabling to display and hide captions;
    *   if the time-based media has an audio description, it must have a
        feature enabling to activate and disactivate the audio
        description.
*   Each functionality mus be accessible either through a keyboard, via
    the Tab key, and the mouse, at least;
*   Each functionality must be actionable either through a keyboard or a
    mouse, at least.

**Note:** If a multimedia object has no sound, there is no need for a
feature to control its volume.

### Control (moving or blinking content) {#mControleMov}

Ability for the user to control the display or reading of moving or
blinking content at least through a keyboard or a mouse.

Every content in motion, except time-based media ruled by the
"Multimedia" criteria category, are concerned: animated images (like
animated GIFs), content in motion served via an `object` tag, JavaScript
code, or CSS effects, for example.

**Note 1:** when appropriate, the controlling device should be the first
element in the page.

**Note 2:** the controlling device must not prevent the user from
interacting with the rest of the page. Consequently, stopping or pausing
a content in motion via an event triggered on focus, fails this
criterion.

**Note 3:** in some cases, the motion is part of the component, and it
can not be controlled by the user. Example: a progress bar indicating by
its movement the progress of an event like a download. In this case, the
criterion is not applicable.

### Controlled environment {#mEnvMait}

Any environment in which access to information, technologies, terms of
use and users profiles can be known and controlled. The main elements
for which control is essential are:

*   The browsers types and versions
*   The supported technologies, their versions and activation statuses
    (JavaScript, WAI-ARIA, Flash…)
*   The assistive technologies and any device used in a specific way by
    users with disabilities
*   The operating systems and accessibility APIs
*   The level of proficiency of users of assistive technologies, for any
    specific device (user interface, online application…) in use in this
    environment.

Authors and administrators must guarantee that the technologies in use,
and the way they are utilized by users, are compatible with their
technologies (including assistive technologies). Information services or
Web sites, whatever their status, that provide public access cannot be
considered as controlled environments.

### Correctly rendered (by assistive technologies) {#mCorrectlyRendered}

When a criterion, a test or a test condition requires to verify that a
device is correctly rendered by assistive technologies, it must be
checked that this rendering is accessibility supported.

The test consists in checking that the rendering is relevant for at
least one combination of the Reference baseline used
to declare that an element, a device or an alternative is "accessibility
supported".

For example: Test 1.3.7 requires to check that the alternative of a
vector image conveying information is correctly rendered.

The rendering is then tested with NVDA (latest version) and Firefox,
JAWS (previous version) and Internet Explorer 9+, and VoiceOver (latest
version) and Safari.

If the alternative is correctly rendered, then the test is passed.

### CSS property defining a color {#mPropCouleur}

This concerns the following CSS properties: `color`,
`background>-color`, `background`, `border-color`, `border`,
`outline-color`, `outline`.

**Note:** the use of a background image to set a color
(`bakground:url(…)` property) is also concerned.

## D {#d}

### Data type and format {#mTypeDonnes}

Indication regarding expected data type and format when information is
entered in a form field. For example:

*   date (yyyy/mm/dd)
*   Total in euros
*   Zip code (5 numbers: eg. 75001)

**Important note**: when the type of the form field involves an input
mask, like for instance fields of types `date` or `time`, the indication
of expected format is not required.

### Default human language {#mLangueDefaut}

Language specification used by the user-agent (including assistive
tchnologies) to apply language-specific rules when rendering content.
The language code is provided via the `lang` and/or `xml:lang`
attributes, defined for the `html` tag (container for the whole document
in the web page), or every descendant tag with content to which these
rules should apply. The choice of attributes depends on the Document
Type Definition (DTD) used:

*   For HTML up to version 4.01: `lang` attribute mandatory, `xml:lang`
    attribute not supported;
*   For XHTML 1.0 served in "text/html": `lang` and `xml:lang`
    attributes mandatory;
*   For XHTML 1.0 served in "application/xhtml+xml": `xml:lang`
    attribute mandatory, `lang` attribute recommended;
*   For XHTML 1.1: `xml:lang` attribute mandatory, `lang` attribute not
    supported;
*   For HTML5: `lang` attribute mandatory.

### Design Pattern {#mDesignPattern}

A design pattern is a model defined by the ARIA API describing the
structure, roles, properties and behaviors a JavaScript component
(widget) must have.

The design patterns are described in this document: [WAI-ARIA 1.0
Authoring Practices](http://www.w3.org/WAI/PF/aria-practices/).

A JavaScript-based component must follow the design pattern
corresponding with its WAI-ARIA role.

**Note 1**: because some WAI-ARIA properties and roles are not supported
by all user agents, and because of the wide variety of situations where
a JavaScript component can be used, it is allowed to adapt design
patterns to specific contexts or uses. In this case, the adapted design
pattern must:

*   respect the general structure; for instance, a tab panel is
    necessarily associated with a tab list;
*   in place of a WAI-ARIA role or property with poor support,
    equivalent WAI-ARIA roles or properties may be used as long as they
    display similar behavior and rendering by user agents

**Note 2:** this does not apply to enrichments of a design pattern with
WAI-ARIA roles or properties, for which accessibility support is
verified through rendering tests with the reference baseline. For
example, adding the `aria-hidden` property on tab panels
(`role="tabpanel"`) is not considered as an adapted design pattern.

### Detailed description (image) {#mDescDetaillee}

Content related to an image in addition to its text alternative, in
order to fully describe information conveyed by the image. The detailed
description can be inserted via:

*   a `longdesc` attribute containing the URL of a page, or of a content
    in the same page, containing the detailed description,
*   a reference, in the `alt` attribute, to a detailed description
    adjacent to the image,
*   A link adjacent to the image, to a page or a content in the same
    page, containing the detailed description,
*   A chunk of text, associated to the image by means of aria-labelledby
    or aria-describedby properties.

### Document outline {#mDocumentOutline}

The Test 9.2.2 requires that the structure of the sectioning elements
(`NAV`, `SECTION`, `ARTICLE` for instance) in the page is coherent;
meaning it's representative of the document's architecture. This
structure is completed by the headings (`h1` to `h6` tags) structure,
which is also a part of it.

Inappropriate use of these sectioning elements could result in an
incoherent document outline, through excessive use of `SECTION` or
`ARTICLE` elements for example.

**Note 1:**The document outline algorithm is progressively supported by
browsers and assistive technologies. Considering that, in any case, the
RGAA requires a robust and coherent headings hierarchy, **it is
acceptable to consider the Test 9.2.2 as not applicable** when a
perfectly coherent document outline can not be guaranteed. You may read
this technical note: [Technical note on document
outline](./technical-notes.html#TNcrit9-2).

**Note 2**You may read, on the same subject, the example provided in the
HTML5 specification: [4.3.10.2 Sample
outlines](http://www.w3.org/TR/html5/sections.html#sample-outlines).

### Document type {#mDTD}

Set of reference data allowing user agents to know the technical
characteristics of the languages used in the page (`doctype` tag).

## E {#e}

### Explicit out of context (link) {#mExpliciteHorsContexte}

A link is explicit out of its context when the link text (content
between `<a href="">` and `</a>`) provides enough information to
understand the function and purpose of the link.

## F {#f}

### Focus {#mPriseFocus}

Focus is the state sent by an element that receives attention after a
user action. In HTML there are three means to give focus to an element:

*   Activating the element with a pointing device (mouse)
*   Activating the element with the Tab key
*   Activating the element with a keyboard shortcut (`accesskey`)

Elements that receive focus natively are: `a`, `area`, `button`,
`input`, `object`, `select`, `label`, `legend`, `optgroup`, `option` and
`textarea`. The element's behaviour, when it is focused, depends on its
nature; a link, for example, must be activated afted it has been focused
(except when a script is used). On the other hand, a form element, such
as `textarea`, must allow input after it has received focus. The `label`
and `legend` elements can only receive focus via the mouse pointer. For
the `label` element, the expected behavior is to transfer focus to the
form field it is associated with.

**Note 1:** The WAI-ARIA specification extends the role assigned to the
`tabindex` attribute, by defining that any HTML element can become
focusable by setting `tabindex` at 0. However, no behavior is defined if
`tabindex` is declared but has no set value. Setting an element's
`tabindex` at -1 (minus one) removes this element from the tabbing
order, inhibiting its ability to signal it has gained focus. Using
`tabindex` accordingly with the WAI-ARIA specification can validate some
tests related to focus management.

**Note 2:** the focus visual cue must not be degraded, meaning that its
visibility is lessened compared to the user agent's default style.

### Footer {#mFooter}

Container of information related to the use of the site, or legal
information. This is generally where can be found links to the help
page, the credits page, terms of use, and the accessibility page,
potentially.

**Note:** this page footer area, unique in a page, must not be mistaken
with footers of sections, defined in HTML5 with the `footer` tag.

See the technical definition as defined by the ARIA API: [Contentinfo
(role)](https://www.w3.org/WAI/PF/aria/roles#contentinfo).

### Form field label {#mEtiquette}

Text located next to the form field describing the nature, type or
format of expected input. The label can be associated with the form
field in several ways:

*   Via a `label` tag
*   Via an `aria-label` property
*   Via an `aria-labelledby` property and its related text
*   Via a `title` attribute.

**Important note:** When more than one of these techniques are used on
the same field, the calculation of the "accessible name" (rendered by
the assistive technologies), follows a strict order:

1.  `aria-labelledby`
2.  Or else, `aria-label`
3.  Or else, `label`
4.  Or else, `title`

This order must be used to evaluate the relevance of the label
([criterion 11.2](./criteria.html#crit-11-2)). For example, even in the
case where a `label` tag is provided, it's the text referenced by
`aria-labelledby` that must be taken into account.

Reference: [Accessible name and description
calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-calculation).

**Important note about the `placeholder` attribute:** When the
`placeholder` attribute is used, it may be rendered instead of the
`title` attribute. Therefore, when both the `title` and `placeholder`
attributes are used, they must have the same values.

### Form input field {#mChpSaisie}

Object, in a form, allowing the user:

*   to enter text or pre-formatted data:
    *   `input type="text"`;
    *   `input type="password"`;
    *   `input type="search"`;
    *   `input type="tel"`;
    *   `input type="email"`;
    *   `input type="number"`;
    *   `input type="tel"`;
    *   `input type="url"`;
    *   `textarea`;
*   to select predefined values:
    *   `input type="checkbox"`
    *   `input type="radio"`
    *   `input type="date"`
    *   `input type="range"`
    *   `input type="color"`
    *   `input type="time"`
    *   `select`
    *   `datalist`
    *   `optgroup`
    *   `option`
    *   `keygen`
*   to download files:
    *   `input type="file"`
*   or to display results:
    *   `output`
    *   `progress`
    *   `meter`

The following form objects are not considered as form fields:

*   `input type="submit"`
*   `input type="reset"`
*   `input type="hidden"`
*   `input type="image"`
*   `input type="button"`
*   `button`

### Frame title {#mTitreCadre}

Value of the `title` attribute of the `iframe` tag, describing the
nature of the content provided via the inline frame, useful when
navigationg from frame to frame, or displaying the list of frames in the
page, for example.

**Note 1:** some inline frames only have a purely technical purpose,
like preprocessing content displayed in the page (commonly found for
social networks widgets like Facebook's, for instance).

If the remote content inside the frame has no title, or if it is not
relevant, generic indications may be used, like for example: "Facebook:
technical contents".

**Note 2:** If there is no impact on the functionality, these contents
may be hidden to assistive technologies, via the `aria-hidden`
attribute, for instance.

## H {#h}

### Header cells (of a table) {#mCelluleTab}

Cells of a data table (first cell in a row or a column, generally),
serving as a title for all, or some of, the row or column other cells. A
column or a row can have several headers (intermediary headers). Header
cells must be coded with a `th` tag.

### Heading {#mTitre}

HTML element (h*n* tag) with 6 hierarchy levels (from `h1` for the most
important heading to `h6` for the less important), allowing to define
and title sections in a Web content. The hierarchy between headings must
be respected on a Web page, and the heading levels cannot be skipped: a
`h3` heading (level 3) cannot be the next heading after a `h1` heading
(level 1), for example. On each Web page, there must be at least one
`h1` heading.

**Note:** Headings hidden via CSS are considered as available to the
user, and validate criterion 9.1.

### Hidden text {#mTexteCache}

Assistive technologies (in particular, screen readers) do not render
content hidden via these properties:

*   (CSS) `display:none`;
*   (CSS) `visibility:hidden`
*   (CSS)`width=0; height=0;`
*   (HTML) `width=0` and `height=0`
*   (CSS) `font-size:0;`
*   (CSS) `clip:0;`
*   (HTML5) `hidden` attribute;
*   (HTML+ARIA) `aria-hidden=true`

All text content using one or more of these properties are scoped by the
criterion 10.13.

## I {#i}

### Image (decorative) {#mImgDeco}

An image that has no purpose and that does not convey any particular
information regarding the content it is associated with. Examples:

*   An image used for layout adjustments only,
*   an image of a rounded corner, used to style a block,
*   an illustrative image that does not provide any information that
    helps understanding the text it is associated with.

### Image object {#mImgObj}

Image inserted or generated via an `object` tag.

### Image (image of text object) {#mImgTextObj}

Image implemented via the `object` tag and displaying text.

### Image caption {#mImageCaption}

For an image, a caption is an adjacent text, containing information
about the image (for instance a copyright, a date, an author…), or
information complementary to the one conveyed by the image (for
instance, text associated with an image in a gallery).

When an image has a caption, it is necessary to tie the image and its
caption together via a structure relationship, so that assistive
technologies can process both as a whole.

The HTML5 specification defines the `figure` (container for the image
and its caption) and `figcaption` (container for the caption) tags.

An image without caption can be:

*   an image that is not included in a `figure` element;
*   an image included in a `figure` element, with no `figcaption`
    element

**Note:** when the text adjacent to the image can serve as its
alternative text, it is not required to use `figure` and `figcaption`
tags; the image can be considered as decorative in this situation.

On this subject, you may read [Requirements for providing text to act as
an alternative for
images](https://www.w3.org/TR/html51/semantics-embedded-content.html#alt-text).

### Image conveying information {#mImgInfo}

An image that conveys information needed to understand the content it is
associated with.

### Image conveying information (provided by color) {#mInfoDonneeCouleur}

Image for which all or part of its content conveys information visually,
by means of color only.

### Image link {#mLienImage}

Link whose content between `<a href="…">` and `</a>` is only constituted
of an image. The link text of an image link is the content of the text
alternative of the image.

An image link may be constituted of:

*   An image (`img` tag); the alternative being the content of the `alt`
    attribute
*   A clickable area (`area` tag) with a `href` attribute; the
    alternative being the content of the `alt` attribute
*   An image object (`object` tag); the alternative being the content
    between `<object>` and `</object>`
*   A bitmap image (`canvas` tag); the alternative being the content
    between `<canvas>` and `</canvas>`
*   An embedded image (`embed` tag); the alternative being the content
    between `<embed>` and `</embed>`
*   A vector image (`svg` tag); the alternative being the content of the
    `title` attribute, of `aria-label`, or of the `desc` tag.

**Note about `embed`:** In HTML5, the `embed` tag has been modified. It
is a self-closing tag that can not include alternative content. ARIA
properties like `aria-label`, that could be used as alternatives, not
being supported consistently, it is currently not possible to use the
`EMBED` HTML5 element to implement accessible informative images.

### Image map {#mImgReactive}

1.  **client-side image map** (`usemap` attribute): image divided into
    clickable or non-clickable areas (`nohref` attribute).
2.  **Server-side image map** (`ismap` attribute) : image for which the
    browser sends the coordinates of the pointing device to the server,
    each set of coordinates corresponding to a resource (URL). The
    server-side image map is extremely rare.

Note: in HTML5, the `ismap` attribute is obsolete non conformant for
form buttons of type image (`input type="image"`).

### Image of text {#mImgText}

Image that displays text.

### Information conveyed by color {#mInfoCouleur}

Information that is visually conveyed by means of color. Indication that
the required fileds of a form are in red; a change of background color
to indicate the current page in a navigation menu; a change of text
color to indicate that an article is unavailable, inside a list of
articles; are all examples of information conveyed by color.

Information conveyed by color must be completed with another means of
conveying information, that does not rely on visual perception, for
users who do not perceive, or not well enough, colors and their
combinations.

It is recommended to use additional text content, or images with
appropriate text alternatives, to satisfy this requirement. Purely
visual effects (change of style, size, boldness, typography, etc.) would
not be considered sufficient, since they would not be perceived by users
who do not have access to the graphical version of the page.

### Information conveyed by shape, size or location {#mInfoShape}

It can be, for instance:

*   a visual cue, to indicate the current page in a navigation menu
    (information conveyed by position),
*   a visual effect to make the active tab in a tablist appear like it
    is in the foreground (information conveyed by shape);
*   a change in text size in a tag cloud (information conveyed by size).

Or any other similar effect.

### Information of same nature {#mInfoMNature}

In a form, a set of fields that can be considered as a group because of
the nature of the expected input.

Examples:

*   Three consecutive fields to enter a date (year/month/day);
*   Consecutive fields for a phone number;
*   Fields for the name and address, when several similar blocks of
    input fields are available in the same form;
*   A set of radio buttons or checkboxes related to a question asked.

These fields must be grouped together via a `fieldset` tag, and a
relevant `legend` tag. In the case of radio buttons, generally, the
legend is the question text.

**Note:** When the form consists in only one block of input fields of
same nature (user name and address, for example) or one single field (a
search engine input field, for example), the `fieldset` tag is not
required.

### Information presentation {#mPresInfo}

Visual rendering of content via a graphic browser. Presentation concerns
style, position and dimensions of HTML elements and their content.
Information presentation must be performed with CSS. Are prohibited
these elements: `basefont`, `blink`, `center`, `font`, `marquee`, `s`,
`strike`, `tt`, `u`, `big`, `small`; and these attributes: `align`,
`alink`, `background`, `bgcolor`, `border`, `cellpadding`,
`cellspacing`, `char`, `charoff`, `clear`, `compact`, `color`,
`frameborder`, `hspace`, `link`, `marginheight`, `marginwidth`, `size`,
`text`, `valign`, `vlink`, `vspace`. The `width` and `height` attributes
used on other elements than `img`, `object`, `embed`, `canvas` and `svg`
tags are also prohibited.

### Inline frame {#mCadreEnLigne}

HTML element (`iframe` tag) providing a way to display contents from
another page, inside the current web page.

### Input control (form) {#mControleSaisie}

All the processes designed to inform the user about required fields,
expected types and formats, and input errors in a form. These controls
can be implemented by the content author, or rely upon HTML attributes
(like `required` or `pattern`), WAI-ARIA properties (like
`aria-required`) or field types automatically generating input
indications or error messages (like `url`, `email`, `date`, `time`, for
example).

Important: after form submission with input errors, if an error handling
page is displayed, the page title must include a mention like "input
errors in the form".

## L {#l}

### Language change, or Change in human language {#mLanguageChange}

An indication of language change tells user agents which
language-specific rules should be applied to render appropriately parts
of the content written in a human language different from the main
language of the content. This includes, notably, the vocal restitution
performed by speech synthesizers. Language changes apply to all
contents, including some attributes like `title`.

**Note:** in HTML, it is not technically possible to signal language
changes inside an attribute value. In this case, the language change is
signalled via the element bearing this attribute. For instance, an
hyperlink with a `title` attribute in German, in a page whose main
language is English, should have a `lang` attribute set to `"de"`. When
the attribute contains several language changes, the criterion is not
applicable.

### Language code {#mCodeLangue}

Code with two characters (ISO 639-1) or 3 characters (ISO 639-2 and
following) specifying the default language of a document or a chunk of
text. The language code is constituted of two parts separated by a dash
on the model `lang="[code][-option]`".

*   \[code\] represents a valid language code of 2 or 3 characters;
*   \[option\] is an indication left to the author's judgment.

When the \[option\] is provided, it defines a language regionalisation.
For example: `"en-us"` for American English. When checking for
conformance against the RGAA, only the \[code\] part is evaluated.

### Link {#mLien}

HTML element (`a` tag) that can be activated by the user (through a
mouse, a keyboard…) and that initiates an action (generally, a page or
file download) or an event generated by a script. A link has at least:

*   a resource reference (`href` attribute);
*   a link text between `<a href="…">` and `</a>`.

### Link (Combined) {#mLienComposite}

Link whose content between `<a href="…">` and `</a>` is formed with at
least 2 elements of different types; for example, text and one or
several images. The link text of a combined link is the whole text and
the content of the text alternatives of the image(s) between
`<a href="…">` and `</a>`.

Important notice: having two identical adjacent links (image and text
links, for instance, with the same purposes, URL and link text) is a
significant inconvenience for some users? Even though this is not a
non-conformance, this practice should be avoided. A way to implement
this kinfd of links is to include the image into the text link, in order
to obtain a combined link.

On this subject, you may read this WCAG Technique: [H2 : Combining
adjacent image and text links for the same
resource](http://www.w3.org/TR/WCAG20-TECHS/H2.html).

### Link context {#mContexteLien}

The link context represents additional information that can be
programmatically determined from relationships with a link, combined
with the link text, and presented to users in different modalities.
Programmatically determined contexts that can make a link explicit are
the following:

*   The content of the sentence enclosing the link;
*   The content of the paragraph (`p` tag) containing the link;
*   The content of the list item (`li` tag), or the content of a parent
    list item (`li` tag) of the list item, containing the link;
*   The content of the heading (`h1` to `h6` tags) that is the closest
    ascendant of the link;
*   The content of the table header cell(s) (`th` tags) associated with
    the table data cell (`td` tag) containing the link;
*   The content of the table data cell (`td` tag) containing the link;
*   The content of the link title (`title` attribute);
*   The content of the `aria-label` property;
*   The content of the chunk(s) of text associated with the link via the
    `aria-labelledby` property.

**Note 1:** One of the 9 link contexts alone must be sufficient to make
the link explicit.

**Note 2:** The RGAA considers that specific links like `mailto` links
(interpreted by the user agent as a clickable e-mail address) are
explicit by nature. therefore it is not required to inform the user, via
a link title for instance, that the link triggers the opening of an
e-mail client application. Authors are advised, however, to adapt this
rule to the situation. For instance, if the page contains multiple
clickable e-mail addresses, some opening thee-mail client application,
other sending to a contact form, then it may be necessary to provide
additional information in order to help the user understand the
different uses of this type of links in this context.

### Links (Identical) {#mLienIdentique}

Two links are considered identical when link x (link text only, content
of the `title` attribute or link context) is equal to link y. This
definition applies to all types of links: text links, image links
(identical images) and combined links.

**Warning:** links with identical texts but with different link titles
or different link contexts are not identical. Example of non-identical
links:
`<a href="link_bar.html" title="click here to download the toolbar">click here</a>`
and
`<a href="link_doc.html" title="click here to download the document">click here</a>`).

### Link text {#mIntituleLien}

Textual information contained between `<a href="…">` and `</a>` of a
link completed if necessary with context information.

The four different types of links are:

*   text link: text between `<a href="…">` and `</a>`, completed, if
    necessary, with context information;
*   image link: text alternative(s) of the image(s) between
    `<a href="…">` and `</a>`, completed, if necessary, with context
    information;
*   combined link: text, and text alternative(s) of the image(s) between
    `<a href="…">` and `</a>`, completed, if necessary, with context
    information;
*   vector link: text alternative of the vector image (`svg` tag)
    between `<a href="…">` and `</a>` completed, if necessary, with
    context information. The link text for a vector link is the content
    of the text alternative for the vector image.

**Note 1:** Read the [image link](#mLienImage) entry for more
information.

**Note 2:** An image link with a missing `alt` attribute is considered
as not applicable for criterion 6.5.

### Link title {#mTitreLien}

Content of the `title` attribute of a link. This content must be set
only if it is necessary to identify the link target in an explicit way.
A link title must duplicate the link text, and add complementary
information. A link title will be considered as not relevant in the
following situations:

*   The link title is empty (`title=""`)
*   The link title is identical to the link text (see note 1)
*   The link title does not include the link text

**Note 1:** By exception, a link title identical to the link text is
tolerated in the case of an image link (a link that only contains
images), like a clickable icon, for example.

Authors are warned that relying upon the `title` attribute to convey
information is unsafe. Specifically, contents in `title` attributes are
not rendered visually when navigating through a keyboard, a tactile
interface, or when an assistive technology user settings prevent them
from being rendered. Therefore, they should be used only as a last
resort solution.

### Link whose nature is not obvious {#mLienNature}

Link that can be confused with normal text, when it is indicated through
color only, by some types of users who have altered or no color
perception. For example, in this text "New strike at SNCF", if the word
"strike" is a link that is specified by color alone, its kind can be
ignored by users who cannot perceive color and who access content with
CSS enabled. On the other hand, in this text "New strike at SNCF, read
more" if "read more" is a link, a user who does not perceive colors will
have no difficulties to understand its nature.

**Note:** "indicated through color only" means that the link is
accompanied by no other visual indication (icon, underline, border…). As
a consequence, a link of the same color as the surrounding text is
targetted by this criterion.

### List {#mListes}

Sequence of elements that can be grouped in the form of a structured
list as ordered, unordered or definition lists. For example, the links
in a navigation menu is an unordered list of links, the different steps
in a process are an ordered list of items, the pair term/definition in a
glossary is a definition list. In HTML, lists are defined using the
following tags:

*   Ordered list: `ol` and `li` tags (each list item is numbered
    incrementally)
*   Unordered list: `ul` and `li` tags (each list item is, potentially,
    marked with a bullet point)
*   Definition list: `dl`, `dt`: term(s) to be defined, and `dd`:
    definition data.

## M {#m}

### Main content area {#mMain}

Container of the main contents of the page, where can be found principal
information and functionalities (therefore excluding menu, the search
form, or secondary content blocks contaning related news, ads, etc.).

**Note:** there must be only one main content area. On some pages,
defining what constitutes the main content can be challenging, like on
homepages for instance.

See the technical definition as defined by the ARIA API: [Main
(role)](https://www.w3.org/WAI/PF/aria/roles#main).

## N {#n}

### Name, role, value, settings and states changes {#mNameRole}

A user interface component must have appropriate role and name; its
values, states and parameters (if any) must also be available and
correctly conveyed to accessibility APIs, in particular.

A component can be based on an interactive HTML element or a
non-interactive element surcharged with an ARIA *ad hoc* role.
**Important:** Buttons (`button` tag or `input` tag with
`type="button"`) must be assessed with the **[criteria
7.1](./criteria.html#crit-7-1)** when they are controlled with
JavaScript.

The name may be the component's text content, like the label of a
button, for example.

The value may be the selected item of a `select` list, or the current
value of a slider, for example.

The role of an element is defined by the HTML specification (native
roles, like for the `button` tag, for example) or the WAI-ARIA API (ARIA
`role="button"`, for example).

The settings are the information specific to a component, generally
defined via the WAI-ARIA API. For example, `aria-controls` is a
parameter informing the APIs that the component controls another one
(referenced via its `id` attribute).

The states changes are generally conveyed via the WAI-ARIA API. For
instance `aria-expanded` is a state informing the accessibility APIs
that the component is "expanded" or "collapsed". **Note:** a state can
also be conveyed by the name, when it is dynamically changed to match
the current state of the component, for instance.

These parameters are not mandatory, but may be required if they are
needed to make the component accessible. When testing for accessibility,
the assessor must decide, based on the context where the component is
used, if these parameters are required.

The assessor must also check that they are implemented according to the
specifications, when they are used.

**Note:** the ARIA roles, properties and states are implemented via
attributes, like `role="banner"`, or `aria-hidden="true"` for instance.

### Navigation bar {#mBarreNav}

List of links providing a means to navigate in the website, in a
category or in a collection of pages. The main navigation bars are:

*   The main navigation menu
*   A breadcrumb trail
*   A navigation list of a results list
*   The menu of a subcategory

### Navigation area, Navigation menu {#mMenuNav}

Area with a list of links, giving access to the main parts of the
website. Most of times, the navigation menus are the main and secondary
menus.

**Note**: links found in the footer, pointing to the credits page, the
legal information page, the sitemap, and other site-related information
pages, are not considered as a navigation menu.

See the technical definition of a navigation area provided by the
WAI-ARIA API: [navigation
(role)](http://www.w3.org/WAI/PF/aria/roles#navigation).

### Navigation system {#mSysNav}

Any process allowing to navigate in the website or in a page. In the
RGAA, the considered navigation systems are:

*   Main navigation menu
*   Table of contents
*   Site map
*   Search engine

### Non time-based media {#mMediaNoTemp}

Content that is not time-dependant, that can be played via a plugin
(Flash, Java, Silverlight…) or via `svg` and `canvas` tags. For example,
an interactive map in Flash, a Flash-based or Java application, a
user-controlled slideshow, are non time-based media. A non time-based
media can contain time-based media (a Flash-based gallery of videos, for
example).

**Note :** the use of the `wmode` parameter for a Flash object with the
values "`transparent`" and "`opaque`" invalidates criterion 4.21 (Can
each non time-based media be controlled either through a keyboard or a
mouse?). When accessed with a screenreader, these values make the Flash
movie inaccessible (the object is ignored, or can not be browsed).
Therefore it can not be tabbed to.

## O {#o}

### Only for layout, or Used for presentation only {#mUniquPres}

Only for layout: use of HTML tags for a purpose different from what is
intended by specifications (with regard to the declared document type).
Examples: use of `Hn` tags only to apply the associated typographical
effect; use of the `blockquote` tag only to indent a block of text; etc.

**Note 1:** the use of `DIV` or `SPAN` elements for paragraphs is
considered as a non conforming use of these elements, and invalidates
the criterion.

**Note 2:** WAI-ARIA provides the `presentation` role, which suppresses
the semantics of an element. For example:
`<h1 role=presentation">Title</h1>`. In this example, the text content
will be rendered, but not the role of heading (the rendered element will
be undefined, in the form of `<>Title</>`).

The `presentation` role may be required for some ARIA design patterns.
It can also be used to suppress semantics on an element used only for
layout. For example: `<blockquote role="presentation">` will have the
same effect as an absence of `BLOCKQUOTE` element.

Although authors are strongly advised against this technique (because it
will fail for older assistive technologies that do not support ARIA, for
instance), it can be considered as WCAG conformant. However, assigning a
`presentation` role to an element whose nature (i.e., its semantics) is
essential to understand the content, is a violation of the WCAG
recommendations (see [Failure
F92](https://www.w3.org/TR/WCAG20-TECHS/F92)) et invalidates the
criterion.

## P {#p}

### Page Header {#PageHeader}

Also called banner. Content block, starting a web page, and containing
generally the document's headline, a logo, a baseline…

**Note:** this header must not be mistaken with section headers, which
can be defined in HTML5 with the `header` tag in any sectioning element.

See the technical definition of a banner as defined by the ARIA API:
[Banner (role)](https://www.w3.org/WAI/PF/aria/roles#banner).

### Percentage of the default font size {#mFontSize}

150% and 120% of the default font size: these two dimensions define the
relative font size equivalent to 18 point (non-bold), and 14 points
(bold), respectively, considering that the body font size is set at
100%.

The default font size is defined by the author for the document body;
and if not specified, the default font size for the user agent (a
browser, generally). In most current browsers, the default font size is
set at 16 pixels.

### Properties and methods conforming with the DOM (Document Object Model) specification {#mDOM}

The content insertion methods conforming with the DOM specification can
be used to create, insert and handle elements via the DOM (for example
document.createElement and element.appendChild) as opposed to the
`document.write` method, which can cause issues in certain contexts
(see:
[](https://www.w3.org/TR/html5/webappapis.html#dom-document-write)https://www.w3.org/TR/html5/webappapis.html\#dom-document-write).

## R {#r}

### Reading direction {#mSensLecture}

Indicates the reading direction of the document or of a chunk of text
via the `dir` attribute. The two accepted values are:

*   `ltr` (left to right) indicates a reading direction from the left to
    the right;
*   `rtl` (right to left) indicates a reading direction from the right
    to the left;

**Note:** When the `dir` attribute is not set either on the `html`
element, the `body` element, or one of the parents of the analyzed text,
the default reading direction is from left to right ("`ltr`" value).

### Redirection {#mRedirectAuto}

Process consisting in automatically redirecting the user from a page to
another, on the same domain or a different domain.

### Refresh process {#mProcedeRafraichissement}

Technique aiming at modifying the content of one or several elements of
the Web page. The refresh process can be performed by an automatic
reloading of the page, or in a dynamic way without reloading the page
(via AJAX, for example). The user must be able to control each refresh
process in an independent way.

### Relevance (information not conveyed through color only) {#mPertinence}

The means to retrieve information other than through color must be
accessible for all. For example, in the case of a list of articles where
articles with texts in yellow are discounted, the use of hidden text via
CSS is a means to retrieve information "discounted", but it is not
relevant because this information will remain hidden for users who
browse the page with CSS enabled.

**Note:** The use of an emphasis tag (`strong` or `em`) as another means
to retrieve information conveyed by color, validates the criterion,
although these elements are generally not supported by assistive
technologies, including screen readers.

## S {#s}

### Script {#mScript}

Computer code generally presented as a list of instructions (in
JavaScript, for example). Client-side scripting languages require a
compatible browser where they are enabled. The instructions of a
client-side scripting language can be either embedded in the HTML code,
or fetched from an external file. In both cases, scripts are included
via `script` tags.

### Search engine (internal to a website) {#mMoteurRecherche}

Component of the site with which the user can perform searches on all
the site's contents.

**Note:** this site-scaled search engine should not be confused with
other search engines specific to subparts of the site's contents, like
the products of an online catalogue, or the list of public calls for
tenders on a purchasing platform.

See the technical definition of a search engine as defined by the ARIA
API: [search (role)](https://www.w3.org/WAI/PF/aria/roles#search).

### Selection list {#mListeChoix}

Form field designed to select items in a pull-down list (`select` tag
with `option` tags).

### Set of pages {#mEnsemblePages}

Pages linked to each other through links, and constituent a consistent
set inside of a website. For example, the pages of an electronic payment
process, the pages of a specific category, the pages of a blog, the
pages to manage an account are sets of pages.

**Note:** A website's home page can be considered as a "set of pages"
(with only one element), as it can be quite different from the rest of
the site.

### Site map page {#mPlanSite}

Dedicated page presenting the structure of a Web site, generally as
lists of categories and subcategories, with links giving access to all
the site's pages.

**Note 1:** the site map's links may be implemented with `a` or `area`
tags.

**Note 2:** it is not necessary that the site map lists the links to all
the site's pages; however, starting from the site map page, the user
should be able to reach every page on the site.

### Styled text {#mTexteStyle}

Text for which presentation is entirely controlled by style properties,
as opposed to by presentational tags.

### Supported by assistive technologies, or Compatible with assistive technologies {#mCompAccess}

A content or a functionality must be supported by users' assistive
technologies, as well as the accessibility features in browsers and
other user agents via an accessibility API.

This concerns the technology, its features and its uses at the same
time:

*   The way the technology is used must be supported by users' assistive
    technology. This means that the way the technology is used has been
    tested for interoperability with users' assistive technologies in
    the human language(s) of the content,
*   the technology is supported natively in widely-distributed user
    agents that are also accessibility supported (such as HTML and CSS)
    or in a widely-distributed plugin that is also accessibility
    supported.

Checking for support by assistive technologies requires to perform tests
that are specific to the technology used. For instance:

*   checking the name, role, value and states changes of user interface
    components;
*   checking that a user interface component is correctly rendered by
    the considered assistive technologies.

### Style sheet {#mFeuilleStyle}

Set of instructions, written in CSS, a standardized language used to
defined the layout of content elements in an HTML document (examples:
page background color, text size/font/color, position in the page…).
Style sheets can be external (CSS file), embedded (declared in the
`head`) or inline (declared via the `style` attribute of a tag).

### Summary (of a table) {#mResumeTab}

A table summary is a chunk of text associated with a complex data table.
It provides information on the nature and structure of the table, in
order to ease its consultation for users of assistive technologies, for
instance.

**Note:** the `summary` attribute is obsolete non conformant in HTML5,
and must not be used anymore.

Among the 5 techniques proposed by the HTML5 specification, the only one
that should be used currently consists in inserting the summary in the
table title (`caption` tag), and hiding it with CSS if necessary.

Read the [Technical note on table
summaries](./technical-notes.html#TNcrit5-1).

### Synchronized captions (media object) {#mSsTitreSynchro}

Synchronized visual and/or text alternative for both speech and
non-speech audio information (including spoken dialogue, but also
equivalents for non-dialogue audio information needed to understand the
program content, including sound effects, music, laughter, speaker
identification and location), needed to understand the media content.

**Note 1:** In order to differentiate audio sources (different speakers,
voice off screen…), it is recommended to use an appropriate mechanism
(square brackets, italics, explicit mention like "voice off screen:…").

**Note 2:** captions should not be mistaken with subtitles, although
both words may be used for the same usage in some countries. "Captions"
(`kind="captions"` in HTML5) refer to alternatives aiming at fulfilling
the needs of people who are deaf or hard-of-hearing, while "subtitles"
(`kind="subtitle"` in HTML5) refer to translation of spoken content in a
different human language. Only captions will be considered as conforming
with the RGAA.

## T {#t}

### Tabbing order {#mOrdTab}

Order in which the focus moves (to the next element or to the previous
element). The natural order is the order of the source code. When it is
modified by the use of the `tabindex` attribute or by scripting, then
the modified order is the reference.

**Warning:** During testing, when an element initiates a change in the
document (change of context, management of hidden areas, content
addition, management of form fields control…) it is necessary to trigger
this change and check that the consistence of the tabbing order is
preserved.

### Table (complex data table) {#mTabDonneeComplexe}

[Data tables](#mTabDonnee) are considered as complex, in the RGAA, when
they have header cells outside of the first row and/or column, or whose
scope does not cover the whole row or column. For these tables it is
necessary to provide a summary, to describe their nature and structure,
in order to ease its consultation by assistive technologies users, in
particular.

### Table (data table) {#mTabDonnee}

HTML element (`table` tag) allowing to structure data in rows and
columns via data cells (`td` tag) and header cells (`th` tag).

### Table (for layout) {#mTabMiseForme}

Web design technique based on the `TABLE` and `TD` elements to position
contents on screen.

### `Target` attribute {#target-attribute}

The `target` attribute opens a new window or a new browser tab,
according to its value. The following values of the `target` attribute
do not open a new window:

*   `_self`
*   `_top`
*   `_parent`.

For all other values of the `target` attribute, the element for which it
is defined will open a new window or a new tab. It is true for the
`_blank` value, for example, but also for any other value (numeral or
alphabetical) not defined by the specification. It should be noted that
these values do not trigger errors when validating the source code, in
HTML5.

### Test image {#mImgTest}

Image used in a test, a [CAPTCHA](#mcaptcha) or an image used for a test
in a quiz or a game. Example: a series of images present a detail from
famous paintings; the title and the painter of each painting must be
found. In this case, it is not possible to provide a relevant
alternative (e.g. the painting title and/or painter) without making the
test useless. The alternative must then only provide the ability to
identify the image; for example "image 1 of the test".

### Text link {#mLienTexte}

Link whose content between `<a href="…">` and `</a>` is only constituted
of text (called the link text).

### Text transcript (time-based media) {#mTranscriptTextuel}

Text content associated with a time-based media through the appropriate
technique (text in HTML, or in a text file located in the same page, or
accessed via a hyperlink). Without having to play the media content, the
user should be able to fully understand it, based on the audio and
visual information transcripted. Only significant and useful information
(audio and visual) should be included.

This textual information must be presented in the same chronological
order as in the time-based media.

Note: if the media is served via an `object` tag, then the text
transcript must not be inside of the `object` tag.

### Time-based media (sound, video or synchronized) {#mMediaTemp}

*   Audio-only time-based media: audio content (Wave, MP3…)
*   Video-only time-based media: images or pictures moving or played in
    sequence
*   Synchronised time-based media: audio or video feed synchronised with
    another time-based media to present information and/or having
    time-based interactive components. A time-based media can be played
    in 2 different ways:
    *   a downloadable file that can be played with a client,
        third-party software,
    *   content embedded in the Web page and that can be played inside
        the Web page via:
        *   a plugin (example: a video played via a Flash-based player)
        *   the `video` element (a video clip, for instance)
        *   the `audio` element (a podcast, for instance)
        *   the `svg` element (an animated vector movie, for instance)
        *   the `canvas` element (an animated bitmap movie, for
            instance)
        *   the `bgsound` element to play a background sound in the
            webpage.

A time-based media can be broadcast live or be provided to be played in
an asynchronous way (prerecorded media).

**Note 1:** The use of the `wmode` parameter for a Flash object with the
values "`transparent`" and "`opaque`" invalidates [criterion 4.20: Can
each non time-based media be controlled either through a keyboard or a
mouse?](./criteria.html#crit-4-20). When accessed with a screenreader,
these values make the Flash movie inaccessible (the object is ignored,
or can not be browsed). Therefore it can not be tabbed to.

**Note 2:** Animated GIFs, and JavaScript-based animations are not
considered as time-based media with regards to RGAA.

**Note 3:** The `bgsound` element is specific to Microsoft Internet
Explorer, and should not be used.

### Title (of a data table) {#mTitreTab}

Content of an HTML element (`caption` tag) describing the content of a
data table. To be accessible the description must be relevant (clear and
concise).

### Title (of a page) {#mTitrePage}

Content of the `title` tag of a Web page, describing in a clear, concise
and unique fashion, the page content/nature ("site map: www.sitename.fr"
for a page dedicated to the sitemap of the sitename.fr website, for
example).

## U {#u}

### URL {#mUrl}

Uniform Resource Locator: a string of characters identifying the
location of a resource and secifying the means to act upon it or obtain
its representation. Also refered as "web address", on the Web it is
applied to identify and provide access to HTML documents, web pages,
images, sounds…

**Note:** In the RGAA, the term URL is used instead of URI (Uniform
Resource Identifier, a URL being a specific type of URI).

## V {#v}

### Valid source code {#mCodeValide}

*   Case of an HTML page: code in which the implementation of tags and
    attributes repects the specifications of the declared document type.
    *   **Note 1:** Unless specified, attributes that are not defined in
        Web standards specifications are not applicable.
    *   **Note 2:** Unless specified, elements that are not defined in
        Web standards specifications are not applicable.
    *   **Note 3:** [guideline C3 of the XHTML specification ("Element
        Minimization and Empty Element
        Content")](http://www.w3.org/TR/xhtml1/#C_3) states that the use
        of minimized elements (`<elm />`) for empty elements (for
        example &lt;p /&gt; instead of &lt;p&gt;&lt;/p&gt;) is not
        advised. This practice constitutes a non-conformance with
        regards to RGAA.
*   Case of a page that implements WAI ARIA: code in which the
    implementation of tags and attributes follows the specifications of
    the declared document type and in which WAI ARIA implementation
    conforms to the WAI ARIA specification.

### Visible content {#mVisibleContent}

For Test 10.2.1: "available content" means that the visible content
remains available when CSS styles have been disabled. For instance, an
image conveying information, used as a background through CSS, fails
this test, since information is not "available" when CSS styles are
disabled. However, an image conveying information, used as a background
through CSS, but accompanied by a hidden text, passes this test because
information is "available" when CSS styles are disabled.

**Note:** authors are formally advised against using images conveying
information as CSS backgrounds, even when hidden texts are available.

## W {#w}

### Website {#mSiteWeb}

Set of Web pages:

*   Linked by hyperlinks,
*   Belonging to the same domain name (eg.:
    references.modernisation.gouv.fr),
*   Constituting a coherent whole from the user point of view.

Particular case: pages of a subdomain. A subdomain can:

*   either belong to the Web site associated with the domain name, if
    the user has a similar browsing experience as with the other pages
    of the Web site (for example: same structure, same navigation…),
*   or not belong to the Web site associated with the domain name (for
    example: a blogging platform where all blogs have their own
    subdomain of the same domain, but bear no similiraties nor
    relationships with each other).

