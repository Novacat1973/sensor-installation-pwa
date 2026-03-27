const CACHE_NAME = "installer-cache-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./jsqr.min.js",
  "./manifest.json",
  "./icon192.png",
  "./icon512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
