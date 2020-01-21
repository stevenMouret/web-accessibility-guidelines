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

/**
 * Create an accessible icon before or after content of a link.
 *
 * @param el {HTMLElement} Must be a link.
 * @param classes {string} Fontawesome classes or other icon system.
 * @param position {string} Can be 'before' or 'after'.
 * @param text {string} Accessible icon description.
 */
const addIcon = (el, classes, position, text) => {
    const elText = el.textContent;
    const icon = `<span class="${classes}" aria-hidden="true" title="${text}"></span>`;
    const newWindow = el.getAttribute('target') === '_blank' ? ', new window' : '';

    if (position === 'before') {
        el.insertAdjacentHTML('afterbegin', icon);
    } else if (position === 'after') {
        el.insertAdjacentHTML('beforeend', icon);
    }

    el.setAttribute('aria-label', elText + ' (' + text + newWindow + ')')
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
            addIcon(anchor, 'external-link fas fa-external-link-alt', 'after', 'external link');
        } else if (anchor.hostname !== location.hostname && anchor.getAttribute('target') === '_blank') { // If external link and _blank
            addRelNoopener(anchor);
            addIcon(anchor, 'external-link fas fa-external-link-alt', 'after', 'external link');
        } else if (anchor.hostname === location.hostname && anchor.getAttribute('target') === '_blank') { // If internal and blank
            anchor.setAttribute('title', `${getAlt(anchor)} (new window)`);
            addRelNoopener(anchor);
        }
    });
};

const onChangeOnSelect = () => {
    const select = document.getElementById('select');

    if (select) {
        select.addEventListener('change', function () {
            if (this.value !== '0') {
                window.location = this.value;
            }
        }, false);
    }
};

const noOnChangeOnSelect = () => {
    const button = document.getElementById('submit');
    const select2 = document.getElementById('select2');

    if (button && select2) {
        button.addEventListener('click', function () {
            if (select2.value !== '0') {
                window.location.href = select2.value;
            }
        }, false);
    }
};

const searchUrlParam = (param) => {
    const url = new URL(window.location);
    return url.searchParams.get(param);
};

const searchCriteriaParam = () => {
    if (searchUrlParam('criteria') === 'on') {
        if (localStorage.getItem('criteria') !== 'on') {
            localStorage.setItem('criteria', 'on');
        }
    }

    if (searchUrlParam('criteria') === 'off') {
        localStorage.setItem('criteria', 'off');
    }

    const criteria = document.querySelector('.criteria');

    if (localStorage.getItem('criteria') === 'on') {
        if (criteria) {
            criteria.style.display = "block";
        }
    }

    if (localStorage.getItem('criteria') === 'off') {
        localStorage.removeItem('criteria');
    }
};

const anchorHeadingLink = () => {
    const content = document.getElementById('content');
    const headings = content.querySelectorAll('h2, h3, h4, h5, h6');

    headings.forEach((index) => {
        if (index.getAttribute("id")) {
            const anchorLink = document.createElement('a');
            anchorLink.href = `#${index.getAttribute("id")}`;
            anchorLink.classList.add('anchor-heading');
            anchorLink.innerText = '#';

            index.appendChild(anchorLink);
        }
    });
};

const searchAnchorParam = () => {
    if (searchUrlParam('anchor') === 'on') {
        if (localStorage.getItem('anchor') !== 'on') {
            localStorage.setItem('anchor', 'on');
        }
    }

    if (searchUrlParam('anchor') === 'off') {
        localStorage.setItem('anchor', 'off');
    }

    const anchor = document.querySelectorAll('.anchor-heading');

    anchor.forEach((index) => {
        if (localStorage.getItem('anchor') === 'on') {
            if (anchor) {
                index.style.display = "inline-block";
            }
        }
    });

    if (localStorage.getItem('anchor') === 'off') {
        localStorage.removeItem('anchor');
    }
};



document.addEventListener("DOMContentLoaded", function() {
    //anchorMenu();
    anchorHeadingLink();
    searchCriteriaParam();
    searchAnchorParam();
    linkExternalNewWindow();
    onChangeOnSelect();
    noOnChangeOnSelect();
});
