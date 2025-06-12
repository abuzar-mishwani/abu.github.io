const CACHE_NAME = "abu-zar-portfolio-v1";
const STATIC_CACHE_URLS = [
  "/",
  "/index.html",
  "/images/abu-zar.mishwani-152.webp",
  "/images/abu-zar.mishwani-304.webp",
  "/images/Favicon.webp",
];

const RUNTIME_CACHE = "abu-zar-runtime-v1";

// Install event - cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") return;

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    // Cache external resources like fonts and CDN assets
    if (
      url.hostname.includes("fonts.googleapis.com") ||
      url.hostname.includes("fonts.gstatic.com") ||
      url.hostname.includes("cdnjs.cloudflare.com")
    ) {
      event.respondWith(
        caches.open(RUNTIME_CACHE).then((cache) => {
          return cache.match(request).then((response) => {
            if (response) return response;

            return fetch(request).then((fetchResponse) => {
              // Cache successful responses
              if (fetchResponse.ok) {
                cache.put(request, fetchResponse.clone());
              }
              return fetchResponse;
            });
          });
        })
      );
    }
    return;
  }

  // Handle static assets
  if (request.destination === "image") {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) return response;

        return fetch(request).then((fetchResponse) => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Handle JS/CSS assets
  if (request.destination === "script" || request.destination === "style") {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) return response;

        return fetch(request).then((fetchResponse) => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Handle navigation requests
  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("/index.html").then((response) => {
        if (response) {
          // Serve cached version immediately
          fetch(request)
            .then((fetchResponse) => {
              if (fetchResponse.ok) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put("/index.html", fetchResponse.clone());
                });
              }
            })
            .catch(() => {
              // Network failed, cached version is already being served
            });
          return response;
        }

        // No cache, try network
        return fetch(request).then((fetchResponse) => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put("/index.html", responseClone);
            });
          }
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Default: try cache first, then network
  event.respondWith(
    caches.match(request).then((response) => {
      return response || fetch(request);
    })
  );
});
