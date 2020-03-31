// This is the service worker with the Cache-first network

const CACHE = "pwabuilder-precache";
const precacheFiles = [
    "assets/css/main.css",
    "assets/css/syntax.css",
    "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
    "assets/js/main.js",
    "https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI9w2_FQft1dw.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI9w2_Gwft.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAUi-qJCY.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-q.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI5wq_FQft1dw.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI5wq_Gwft.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwaPGR_p.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwiPGQ.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjxAwXjeu.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXg.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwaPGR_p.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPGQ.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh50XSwaPGR_p.woff2",
    "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh50XSwiPGQ.woff2",
    "img/braille-terminal.jpg",
    "img/british-museum.png",
    "index.html",
    "about-me.html",
    "about-people-with-disabilities.html",
    "accessibility.html",
    "hearing-disability.html",
    "mental-disability.html",
    "motor-disability.html",
    "sources.html",
    "techniques.html",
    "visual-disability.html",
    "techniques/accessible-icons.html",
    "techniques/aria-label-labelledby-describedby.html",
    "techniques/news-on-rgaa-v4.html",
    "techniques/onchange-on-a-select.html",
    "techniques/tools.html",
    "accessibility/images.html",
    "accessibility/images/image-conveying-information.html"
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
