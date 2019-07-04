// Helpers
const insertAfter = (referenceNode, newNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const wrap = (el, wrapper, classWrapper) => {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.classList.add(classWrapper);
    wrapper.appendChild(el);
};

const flatten = arr => [].concat(...arr || []);

const addClass = (el, className) => {
    if (!el || !(el instanceof Element)) {
        throw new Error('addClass. Parameter `el` should be a DOM Object');
    }

    const classNames = flatten([className]);
    for (let i = 0; i < classNames.length; i++) {
        if (el.classList) {
            el.classList.add(classNames[i]); // IE 10+
        } else {
            el.className += ` ${classNames[i]}`; // IE 8+
        }
    }
};

// Scripts

// Wrap table
const tables = document.getElementsByTagName('table');

for (let i = 0; i < tables.length; i++) {
    const table = tables[i];

    wrap(table, document.createElement('div'), 'table-responsive');
}

// Create h3 navigation
const anchorMenu = () => {
    const content = document.getElementById('content');
    const h3Els = content.getElementsByTagName('h3');

    // Create menu
    const anchorMenuContainer = document.createElement('ul');
    anchorMenuContainer.classList.add('menu-anchor');

    // Loop on each h3
    for(let i = 0; i < h3Els.length; i++) {
        const item = h3Els[i];
        const itemId = item.getAttribute('id');
        const itemText = item.textContent;
        const itemLi = document.createElement('li');
        const itemLink = document.createElement('a');

        itemLink.href = '#' + itemId;
        itemLink.innerHTML = itemText;

        itemLi.appendChild(itemLink);
        anchorMenuContainer.appendChild(itemLi);
    }

    const refNode = document.querySelector('.content > header');

    if(refNode) {
        insertAfter(refNode, anchorMenuContainer);
    }
};

// Manage _blank and external link
/**
 * Add to external link the mention 'alt + (External link)'
 * Add to blank link the mention 'alt + (New window)', and the rel noreferrer, noopener
 * Add to external and blank link the mention 'alt + (New window External link)', and the rel noreferrer, noopener
 */
const linkExternalNewWindow = () => {

    // Get anchors and filter them
    let anchors = Array.prototype.slice.call(document.querySelectorAll('body a'));
    anchors = anchors.filter(anchor => !anchor.classList.contains('new-window-off')); // Skip if anchor has .new-window-off class

    // Add rel noopener to elemnt
    const addRelNoopener = (elem) => {
        const elemRel = elem.hasAttribute('rel') && elem.getAttribute('rel');
        if (elemRel) {
            if (elemRel.split(' ').indexOf('noopener') < 0) {
                elem.setAttribute('rel', `${elemRel} noopener`);
            }
        } else {
            elem.setAttribute('rel', 'noopener');
        }
    };

    // Add aria-label to element
    const getAlt = (elem) => {
        const title = elem.getAttribute('title');
        const ariaLabel = elem.getAttribute('aria-label');
        let text;

        if (title) {
            text = title;
            elem.removeAttribute('title');
        } else if (ariaLabel) {
            text = ariaLabel;
        } else {
            const textArray = [];
            const elemChildren = Array.prototype.slice.call(elem.childNodes);

            elemChildren.forEach((child) => {
                if (child.nodeName === 'IMG') {
                    textArray.push(child.alt);
                } else if (child.nodeName === 'PICTURE') {
                    child.childNodes.forEach((child2) => {
                        if (child2.nodeName === 'IMG') {
                            textArray.push(child2.alt);
                        }
                    });
                } else if (child.nodeName === '#text') {
                    textArray.push(child.textContent.trim().toLowerCase());
                } else if (child.nodeName === 'svg') {
                    textArray.push(child.getAttribute('aria-label'));
                } else {
                    textArray.push(child.textContent.trim().toLowerCase());
                }
            });

            text = textArray.join(' ');
        }
        return text;
    };

    // Main loop
    anchors.forEach((anchor) => {
        // If external link but not _blank
        if (anchor.hostname !== location.hostname && anchor.getAttribute('target') !== '_blank') {
            anchor.setAttribute('title', `${getAlt(anchor)} (external link)`);
            addClass(anchor, 'link-external');
        } else if (anchor.hostname !== location.hostname && anchor.getAttribute('target') === '_blank') { // If external link and _blank
            anchor.setAttribute('title', `${getAlt(anchor)} (new window, external link)`);
            addRelNoopener(anchor);
            addClass(anchor, 'link-external');
        } else if (anchor.hostname === location.hostname && anchor.getAttribute('target') === '_blank') { // If internal and blank
            anchor.setAttribute('title', `${getAlt(anchor)} (new window)`);
            addRelNoopener(anchor);
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    anchorMenu();
    linkExternalNewWindow();
});
