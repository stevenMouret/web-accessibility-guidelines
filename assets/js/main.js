// Helpers
const wrap = (el, wrapper, classWrapper) => {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.classList.add(classWrapper);
    wrapper.appendChild(el);
};

// Scripts

// Wrap table
const tables = document.getElementsByTagName('table');

for (let i = 0; i < tables.length; i++) {
    const table = tables[i];

    wrap(table, document.createElement('div'), 'table-responsive');
}

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
    const headings = content.querySelectorAll('h3, h4, h5, h6');

    headings.forEach((index) => {
        if (index.getAttribute("id")) {
            const anchorLink = document.createElement('a');
            anchorLink.href = `#${index.getAttribute("id")}`;
            anchorLink.classList.add('anchor-heading');
            anchorLink.innerText = '§';

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
    anchorHeadingLink();
    searchCriteriaParam();
    searchAnchorParam();
    onChangeOnSelect();
    noOnChangeOnSelect();
});
