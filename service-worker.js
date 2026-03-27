const CACHE_NAME = "installer-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "jsqr.min.js",
  "manifest.json",
  "icon192.png",
  "icon512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});