---
title: Status messages
navigation: scripts
nav: menu-criteria
---

<header>
# Status messages
{: .article-header__title}
</header>

**Impact:** Strong to major

**Users mainly impacted:** Blind, visually impaired, mentally handicapped.

**RGAA criteria:** [Criterion 7.5](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-7-5)
{: .criteria }

## Explanation
Variations in content, such as a warning process, can permanently disorientate users.

Blind and severely visually impaired users who cannot see the entire page may be unaware of the changes or may not be able to interpret them correctly if they are not informed in advance.

A status message is a defined term in WCAG. There are two main criteria that determine whether something meets the definition of a status message:
* the message "provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors;".
* the message is not delivered via **a change in context**.

### Alert
The `alert` role allows you to notify technical assistance when a **data entry error occurs**.<br>
Using `role="alert"` is equivalent to using `aria-live="assertive"` and `aria-atomic="true"`.<br>
The `alert` message interrupts the main activity of the technical assistance (`aria-live="assertive"`) and present the entire contents of the container (`aria-atomic="true"`).
The content is read without affecting the focus, so depending on the case it will be important to manage [the focus back](../navigation/tab-order-keyboard-traps.html#focus-and-focus-back-with-javascript).

Using the alert role is ideal when a form is checked in javascript. If an error occurs, the error message is dynamically added to a container with the role `alert`.

#### Example: checking for error messages in javascript
```html
<form name="signup" id="signup" method="post" action="">
    <p id="errors" role="alert">[Here the content added dynamically]</p>
    <div>
        <label for="first">First Name (required)</label><br>
        <input type="text" name="first" id="first" required>
    </div>
    <div>
        <label for="last">Last Name (required)</label><br>
        <input type="text" name="last" id="last" required>
    </div>
    <div>
        <button type="button">Submit</button>
    </div>
</form>
```

In this case when the alert message will be displayed, it will be read in technical assistance.
Do not forget [the focus back](../navigation/tab-order-keyboard-traps.html#focus-and-focus-back-with-javascript) when user click on submit button the focus must be added on the first field with error.

### Status
The "Status" message allows you to notify technical assistance of **the success or result of an action or the status of an application**.<br>
Using `role="status"` is equivalent to using `aria-live="polite"` and `aria-atomic="true"`.<br>
The `status` message notifies the user only when the technical assistance is available (`aria-live="polite"`) and presents the entire contents of the container (`aria-atomic="true"`).
The content is read without affecting the focus, so depending on the case it will be important to manage [the focus back](../navigation/tab-order-keyboard-traps.html#focus-and-focus-back-with-javascript).

#### Example: Display the number of results after a dynamic search
```html
<p role="status">5 results found</p>
```

When updating the results, the technical assistance will inform the user of the number of results.
In this case, the focus should be returned to the beginning of the list of results.

### Log
The "log" message allows you to notify technical assistance when **content has been appended to sequential information concerning the application's history or logs**.<br>
Using `role="log"` is equivalent to using `aria-live="polite"` and `aria-atomic="false"`.<br>
The `log` message notifies the user only when the technical assistance is available (`aria-live="polite"`) and presents only the new content of the container (`aria-atomic="false"`).
The content is read without affecting the focus.

#### Example: Updating the contents of a chat conversation
```html
<section id="chatRegion" role="log" aria-labelledby="chatHeading">
    <h2 id="chatHeading">Chat History</h2>
    <ul id="conversation">
        <li>The latest chat message</li>
    </ul>
</section>
```
When new message is added, the technical assistance will read only the new message. The focus will be not affected, if the user is in the "Add a message" field, they will not lose the focus.
