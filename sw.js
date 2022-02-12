self.addEventListener('install', function (event) {
    console.log('The service worker is being installed.');
    event.waitUntil(
        caches.open('trackCss').then(function(cache) {
            return cache.addAll([
                '/uomTrack/',
                '/uomTrack/index.html',
                '/uomTrack/common.js',
                '/uomTrack/manifest.json',
                '/uomTrack/track.js',
                '/uomTrack/trackCss.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('The service worker is serving the asset.');
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || caches.match('/index.html');
        })
    );
});
