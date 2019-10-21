---
title:  onChange on a select
nav: menu-techniques
---

## onChange on a select

### The problem

Users using the keyboard cannot make a selection in a select when the event on it is onChange.

To see this, try selecting the last option in the select below.

*Use the <kbd>tab</kbd> key to naviguate and <kbd>enter</kbd> or <kbd>space</kbd> key to validate. Be careful with the keyboard trap.*

<label for="select">Your favorite GAFA</label><select name="select" id="select"><option value="0">-- Nothing --</option><option value="https://www.google.com">Google</option><option value="https://www.apple.com">Apple</option><option value="https://www.facebook.com">Facebook</option><option value="https://www.amazon.com">Amazon</option></select>

**You can't**, onChange event reload the page always on the first option.

Here are two issues:
* The user cannot select the desired option.
* The user is not notified of the event that will redirect him/her to another page.

### A simple solution

Remove onChange event and add a button.

<label for="select2">Your favorite GAFA *(external redirection)*</label><select name="select2" id="select2"><option value="0">-- Nothing --</option><option value="https://www.google.com">Google</option><option value="https://www.apple.com">Apple</option><option value="https://www.facebook.com">Facebook</option><option value="https://www.amazon.com">Amazon</option></select><button type="submit" id="submit">Submit</button>
