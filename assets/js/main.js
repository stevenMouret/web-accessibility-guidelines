// Helpers
const wrap = (el, wrapper, classWrapper) => {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.classList.add(classWrapper);
    wrapper.appendChild(el);
};

function getCookie(name) {
    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function setCookie(name, value, days) {
    const d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

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

const burgerMenu = () => {
    const responsiveMenu = document.getElementById('responsive-menu');

    if (responsiveMenu) {
        const responsiveMenuButton = document.getElementById("responsive-menu-button");

        responsiveMenuButton.addEventListener('click', function () {
            if (responsiveMenuButton.getAttribute('aria-expanded') === 'false') {
                responsiveMenuButton.setAttribute('aria-expanded', true);
            } else {
                responsiveMenuButton.setAttribute('aria-expanded', false);
            }
        }, false);
    }
};

if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
        console.log("[PWA Builder] active service worker found, no need to register");
    } else {
        // Register the service worker
        navigator.serviceWorker
            .register("/web-accessibility-guidelines/pwabuilder-sw.js", {
                scope: "/web-accessibility-guidelines/"
            })
            .then(function (reg) {
                console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
            });
    }
}

function Add2HomeScreen() {
    let deferredPrompt;
    const a2hs = document.querySelector('.a2hs');
    const addBtn = a2hs.querySelector('.a2hs__button-install');
    const closeBtn = a2hs.querySelector('.a2hs__button-close');
    a2hs.style.display = 'none';

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (!getCookie('a2hs')) {
            a2hs.style.display = 'block';
        }

        addBtn.addEventListener('click', (e) => {
            a2hs.style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                    setCookie('a2hs', 'true', 30);
                }
                deferredPrompt = null;
            });
        });

        closeBtn.addEventListener('click', (e) => {
            a2hs.style.display = 'none';
            setCookie('a2hs', 'true', 30);
        });
    });

    window.addEventListener('appinstalled', (e) => {
        alert('The app has been successfully installed!');
    });
}



document.addEventListener("DOMContentLoaded", function() {
    anchorHeadingLink();
    searchCriteriaParam();
    searchAnchorParam();
    onChangeOnSelect();
    noOnChangeOnSelect();
    burgerMenu();
    Add2HomeScreen();
});


