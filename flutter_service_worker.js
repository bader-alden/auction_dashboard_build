'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3ee5f3d2e8e017a6d23d852c0645bb72",
"assets/assets/loading.gif": "a8fa6adfcd4be94d1b7de665a4f11df9",
"assets/assets/logo.png": "53ec64a3aba40e3b38269b6b1a5e61ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "41e6eb7f0315981b129ceceea999d79c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "8c4ed548bf838bfbeb4db26a4edcd062",
"auction_dashboard_build/.git/config": "e7db6d78fb6b09819063a281411a525f",
"auction_dashboard_build/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"auction_dashboard_build/.git/FETCH_HEAD": "f98536c342d990c04ba5aae9818a8c37",
"auction_dashboard_build/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"auction_dashboard_build/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"auction_dashboard_build/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"auction_dashboard_build/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"auction_dashboard_build/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"auction_dashboard_build/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"auction_dashboard_build/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"auction_dashboard_build/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"auction_dashboard_build/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"auction_dashboard_build/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"auction_dashboard_build/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"auction_dashboard_build/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"auction_dashboard_build/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"auction_dashboard_build/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"auction_dashboard_build/.git/index": "00585ac8e61114461e4fcb10642a73df",
"auction_dashboard_build/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"auction_dashboard_build/.git/logs/HEAD": "3d859bb7282a1b14600c01ad63116d06",
"auction_dashboard_build/.git/logs/refs/heads/main": "3d859bb7282a1b14600c01ad63116d06",
"auction_dashboard_build/.git/logs/refs/remotes/origin/HEAD": "61cb055fa53046523bc92b9042d4d4d1",
"auction_dashboard_build/.git/objects/pack/pack-c4131def774b53ca67053ac45ad98faf0d9960b3.idx": "4b157d3965e74494792bb1af76d7c0cd",
"auction_dashboard_build/.git/objects/pack/pack-c4131def774b53ca67053ac45ad98faf0d9960b3.pack": "d47ec45e8c22ee93422f4f3c6b6dc194",
"auction_dashboard_build/.git/packed-refs": "7257b7315a9499562061da79260f17bd",
"auction_dashboard_build/.git/refs/heads/main": "4a34bcb94a3365a8c194d68b47f5bada",
"auction_dashboard_build/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"auction_dashboard_build/assets/AssetManifest.json": "3ee5f3d2e8e017a6d23d852c0645bb72",
"auction_dashboard_build/assets/assets/loading.gif": "a8fa6adfcd4be94d1b7de665a4f11df9",
"auction_dashboard_build/assets/assets/logo.png": "53ec64a3aba40e3b38269b6b1a5e61ae",
"auction_dashboard_build/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"auction_dashboard_build/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"auction_dashboard_build/assets/NOTICES": "e85c9d4b3a0ab79137e68f01e5aa9b16",
"auction_dashboard_build/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"auction_dashboard_build/assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"auction_dashboard_build/assets/packages/fluttertoast/assets/toastify.js": "7167388315b479d339b1c6013b440bda",
"auction_dashboard_build/assets/shaders/ink_sparkle.frag": "8c4ed548bf838bfbeb4db26a4edcd062",
"auction_dashboard_build/canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"auction_dashboard_build/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"auction_dashboard_build/canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"auction_dashboard_build/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"auction_dashboard_build/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"auction_dashboard_build/flutter.js": "db931120412af26cc1511fa058afaf0a",
"auction_dashboard_build/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"auction_dashboard_build/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"auction_dashboard_build/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"auction_dashboard_build/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"auction_dashboard_build/index.html": "8afb4960a26a96d472e6ebd35f6a5512",
"/": "680538a0b77bb05864024f172042e499",
"auction_dashboard_build/main.dart.js": "7e61561f1b0d465beab852a152d285c4",
"auction_dashboard_build/manifest.json": "3486ab8f927ae09acfed7ad5b0758adc",
"auction_dashboard_build/version.json": "a0b27194d395cdc089ff3adb314236e0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "680538a0b77bb05864024f172042e499",
"main.dart.js": "6d22f36687dfa80e22d02e8c1bd062e4",
"manifest.json": "3486ab8f927ae09acfed7ad5b0758adc",
"version.json": "a0b27194d395cdc089ff3adb314236e0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
