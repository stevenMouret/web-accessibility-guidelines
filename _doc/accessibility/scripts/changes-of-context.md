---
title: Changes of context
navigation: scripts
nav: menu-criteria
---

<header>
# Changes of context
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Blind, visually impaired, mentally handicapped.

**RGAA criteria:** [Criterion 7.4](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-7-4)
{: .criteria }

## Explanation
A change of context is a change in the page that is likely to be ignored or misunderstood by a user who cannot see the page as a whole. This is particularly the case for blind users using a screen reader and visually impaired users who navigate with a screen magnifier.

Example: updating dynamic form fields or changing the dynamic content of the page.

In order to enable them to understand these changes, they must be notified in advance or the changes must be the result of an explicit action on their part.

Mentally and cognitively disabled people may not be able to understand these changes if they are not informed in advance.

The changes of context are numerous on a page or a web application. A change of context is considered to occur in the following cases:
* Change of user agent, for example a link on a phone number that open the call manager.
* A change of restitution space, for example the display of a new page.
* Change of focus, for example moving the focus from one place to another.
* Change of content that changes the meaning of the page or an item, for example a dynamic content update, opening a modal window.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).
</div>

The cases are multiple, here are some concrete cases.

### Change of user agent
User agent changes can be multiple, here are a few examples:
* Opening the call manager for a phone number.
* Opening an email client for an email address.
* Opening a specific software such as a PDF reader.

In order to make this accessible in practice, it is possible to [give the link an accessible name](../links/explicit-link.html).

### Single page application
In a "Single page application" the reloading of a page is dynamic. After the user's action, he/she is not informed of the page reload and loses his focus.

It is therefore necessary to inform him/her when the page reloads and to manage the focus return. So we're going to simulate a page reload.

#### Update page title
As there was no real reload of the page by the user agent, it is necessary to update with Javascript the `<title>` of the page with a [relevant page title](../mandatory-elements/page-title.html).

Updating the `<title>` of the page is important because the user has the possibility at any time to ask for it to be read.

However, when reloading in Javascript, this is not enough because the `<title>` of the page is still not automatically returned in the technical assistance.

#### Simulate reloading the page thanks to focus
When the content is reloaded, the element activated by the user may no longer be present in the page, so he/she loses focus.

It will therefore be important to force the reading of the page title and to return the focus to the right place.

For a "Single page application" for example, in order to simulate a page reload, it will be necessary to reposition the focus at the top of the page.

To do this, let's add a paragraph to the first element of the DOM:

```html
<p class="sr-only" tabindex="-1" id="title-page">[TITLE]</p>
```

* This content will be [hidden in an accessible way](../presentation-of-information/hidden-contents.html#hide-content-only-visually) with the "sr-only" class.
* As the paragraph is not focusable by default, the `tabindex` attribute with the value `-1` will allow to resume focus on the element with the Javascript method `focus()`.
    <div class="important">
    <svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
    With the negative value, the element is not reachable via sequential keyboard navigation, but could be focused with Javascript.
    </div>
* The [TITLE] text will be synchronized with the `<title>` of the page with the `document.title` property.
* Once the [TITLE] is up to date we can force the focus on this paragraph with the method `focus()`.

Once the content is loaded, the user is at the top of the page and the title of the page is rendered by the technical support.

### Major update of a content in the page with faceted search

Let's take as an example a [faceted search](https://en.wikipedia.org/wiki/Faceted_search) system. The whole page is not necessarily reloaded, only the results can be updated.

In a faceted search system, multiple filters (often in the shape of links or checkboxes) are related to each other and update the results.
The action of one filter reloads the results dynamically and it is often necessary to activate several filters to obtain the desired results.

In this case, it is therefore necessary not to send the user back to the top of the page after each action on a filter because the user is likely to activate a new filter.

#### Update page title
As for a "Single page application" ([See above](#single-page-application)) it is necessary to update the `<title>` of the page.

#### Inform the user of a content modification in the page

We assume that there are no changes to the filters, they are always displayed, only their status changes, active or inactive.

In this case the focus is not changed, we keep the user on the filter he/she just activated. This allows him/her to accumulate the filters quickly.

However, it is necessary to give him the information of the update of the results. Indeed, each time a filter is activated, the number of results in the list changes.

For this we will add above the list in a visible way a paragraph with the number of results.

```html
<p id="results" aria-live="polite" aria-atomic="true">10 results</p>
```

* The `aria-live` attribute with the value `polite` indicates that the helper should wait until the user is inactive before presenting an update to the user.
* The `aria-atomic` attribute with the value `true` indicates to the technical assistant to read the whole area, not just the modified elements.

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
Never declare with the `aria-live` attribute a content area with too much information. This would cause the restitution of the entire area which would be inappropriate for the user.
</div>

<div class="important">
<svg role="img" aria-label="Important" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="36"><title>Important</title><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
Some fields such as text or date fields for example may require submission by a button to avoid reloading the list at each action in the field.
</div>

### Status messages
The status messages are changes of context, [more information on status messages can be found on this page](status-messages.html).

*[DOM]: Document Object Model
