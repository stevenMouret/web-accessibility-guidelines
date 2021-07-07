// This is the service worker with the Cache-first network

const CACHE = "pwabuilder-precache";
const precacheFiles = [
    "manifest.json",
    "pwabuilder-sw.js",
    "assets/css/main.css",
    "assets/css/style.css",
    "assets/css/syntax.css",
    "assets/images/pattern-1.png",
    "assets/js/main.js",
    "https://use.fontawesome.com/releases/v5.5.0/webfonts/fa-brands-400.woff2",
    "https://use.fontawesome.com/releases/v5.5.0/webfonts/fa-regular-400.woff2",
    "https://use.fontawesome.com/releases/v5.5.0/webfonts/fa-solid-900.woff2",
    "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
    "assets/fonts/public-sans-v5-latin-regular.woff2",
    "assets/fonts/public-sans-v5-latin-regular.woff",
    "assets/fonts/public-sans-v5-latin-700.woff2",
    "assets/fonts/public-sans-v5-latin-700.woff",
    "assets/fonts/public-sans-v5-latin-900.woff2",
    "assets/fonts/public-sans-v5-latin-900.woff",
    "assets/fonts/public-sans-v5-latin-italic.woff2",
    "assets/fonts/public-sans-v5-latin-italic.woff",
    "img/320px-Plateau_de_valensole1.jpg",
    "img/braille-terminal.jpg",
    "img/british-museum.png",
    "img/color-3.1-1.png",
    "img/color-3.1-2.png",
    "img/color-3.2-1.png",
    "img/color-3.2-2.png",
    "img/favicon-192.png",
    "img/favicon-512.png",
    "img/images-1.2-1.png",
    "img/images-1.3-1.png",
    "img/images-1.3-2.png",
    "img/images-1.3-3.png",
    "img/web-accessibility-guidelines.png",
    "index.html",
    "about-me.html",
    "about-people-with-disabilities.html",
    "accessibility.html",
    "hearing-disability.html",
    "mental-disability.html",
    "motor-disability.html",
    "sources.html",
    "techniques.html",
    "tools.html",
    "visual-disability.html",
    "techniques/accessible-icons.html",
    "techniques/aria-label-labelledby-describedby.html",
    "techniques/news-on-rgaa-v4.html",
    "techniques/onchange-on-a-select.html",
    "accessibility/colors.html",
    "accessibility/consultation.html",
    "accessibility/forms.html",
    "accessibility/frames.html",
    "accessibility/images.html",
    "accessibility/information-structure.html",
    "accessibility/links.html",
    "accessibility/mandatory-elements.html",
    "accessibility/navigation.html",
    "accessibility/presentation-of-information.html",
    "accessibility/scripts.html",
    "accessibility/colors/color-contrast.html",
    "accessibility/colors/information-by-color.html",
    "accessibility/consultation/files-for-downloading.html",
    "accessibility/consultation/moving-or-blinking-content.html",
    "accessibility/consultation/no-new-window-without-user-action.html",
    "accessibility/forms/complex-selection-list.html",
    "accessibility/forms/group-related-fields.html",
    "accessibility/forms/input-errors.html",
    "accessibility/forms/input-help.html",
    "accessibility/forms/relevance-of-field-labels.html",
    "accessibility/forms/relevant-button.html",
    "accessibility/forms/required-fields.html",
    "accessibility/frames/relevant-frame-title.html",
    "accessibility/images/captcha.html",
    "accessibility/images/decorative-image.html",
    "accessibility/images/image-caption.html",
    "accessibility/images/image-conveying-information.html",
    "accessibility/images/text-in-image.html",
    "accessibility/information-structure/semantic-structure-and-aria-landmarks.html",
    "accessibility/information-structure/quotation.html",
    "accessibility/information-structure/structure-information-by-headings.html",
    "accessibility/information-structure/unordered-ordered-definition-lists.html",
    "accessibility/links/empty-link.html",
    "accessibility/links/explicit-link.html",
    "accessibility/mandatory-elements/multilingual-texts.html",
    "accessibility/mandatory-elements/page-title.html",
    "accessibility/mandatory-elements/use-html-tags-for-their-proper-meaning.html",
    "accessibility/mandatory-elements/valid-source-code.html",
    "accessibility/navigation/access-to-the-main-content-area.html",
    "accessibility/navigation/main-contents-identified.html",
    "accessibility/navigation/sitemap.html",
    "accessibility/navigation/tab-order-keyboard-traps.html",
    "accessibility/presentation-of-information/content-visible-and-understandable-without-css.html",
    "accessibility/presentation-of-information/customizing-the-display.html",
    "accessibility/presentation-of-information/exclusive-css-formatting.html",
    "accessibility/presentation-of-information/hidden-contents.html",
    "accessibility/presentation-of-information/information-by-shape-size-location.html",
    "accessibility/presentation-of-information/visible-focus.html",
    "accessibility/scripts/changes-of-context.html",
    "accessibility/scripts/status-messages.html"
];

self.addEventListener("install", function (event) {
    console.log("[PWA Builder] Install Event processing");

    console.log("[PWA Builder] Skip waiting on install");
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            console.log("[PWA Builder] Caching pages during install");
            return cache.addAll(precacheFiles);
        })
    );
});

// Allow sw to control of current page
self.addEventListener("activate", function (event) {
    console.log("[PWA Builder] Claiming clients for current page");
    event.waitUntil(self.clients.claim());
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") return;

    event.respondWith(
        fromCache(event.request).then(
            function (response) {
                // The response was found in the cache so we responde with it and update the entry

                // This is where we call the server to get the newest version of the
                // file to use the next time we show view
                event.waitUntil(
                    fetch(event.request).then(function (response) {
                        return updateCache(event.request, response);
                    })
                );

                return response;
            },
            function () {
                // The response was not found in the cache so we look for it on the server
                return fetch(event.request)
                    .then(function (response) {
                        // If request was success, add or update it in the cache
                        event.waitUntil(updateCache(event.request, response.clone()));

                        return response;
                    })
                    .catch(function (error) {
                        console.log("[PWA Builder] Network request failed and no cache." + error);
                    });
            }
        )
    );
});

function fromCache(request) {
    // Check to see if you have it in the cache
    // Return response
    // If not in the cache, then return
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
            if (!matching || matching.status === 404) {
                return Promise.reject("no-match");
            }

            return matching;
        });
    });
}

function updateCache(request, response) {
    return caches.open(CACHE).then(function (cache) {
        return cache.put(request, response);
    });
}
