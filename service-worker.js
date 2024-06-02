const CACHE_NAME = "offline-cache";

const STATIC_ASSETS = [
    "/audio/car.mp3",
    "/audio/creak.mp3",
    "/audio/death.mp3",
    "/audio/light.mp3",
    "/audio/menu.mp3",
    "/audio/move.mp3",
    "/audio/quack.mp3",
    "/audio/river.mp3",
    "/audio/train.mp3",
    "/audio/tree.mp3",
    "/audio/truck.mp3",
    "/image/car.png",
    "/image/duck.png",
    "/image/exit.png",
    "/image/favicon-50x50.png",
    "/image/light.png",
    "/image/log.png",
    "/image/pause.png",
    "/image/play.png",
    "/image/rail.png",
    "/image/reset.png",
    "/image/road.png",
    "/image/train.png",
    "/image/tree.png",
    "/image/truck.png",
    "/image/water.png",
    "/index.html",
    "/service-worker.js"
];

self.addEventListener("install", event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(STATIC_ASSETS)
    }));
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});
