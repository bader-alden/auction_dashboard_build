'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3ee5f3d2e8e017a6d23d852c0645bb72",
"assets/assets/loading.gif": "a8fa6adfcd4be94d1b7de665a4f11df9",
"assets/assets/logo.png": "53ec64a3aba40e3b38269b6b1a5e61ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b63fca3ee6feb8c779b2354f0f9ddb85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"auction_dashboard_build/.git/COMMIT_EDITMSG": "60b725f10c9c85c70d97880dfe8191b3",
"auction_dashboard_build/.git/config": "e7db6d78fb6b09819063a281411a525f",
"auction_dashboard_build/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"auction_dashboard_build/.git/FETCH_HEAD": "6bd3ffe07fbcc717a53c7dee9441053d",
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
"auction_dashboard_build/.git/index": "5b1d3f1345661da3693f028e5a10e974",
"auction_dashboard_build/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"auction_dashboard_build/.git/logs/HEAD": "91121d66ef3833c45ec583a98adea296",
"auction_dashboard_build/.git/logs/refs/heads/main": "91121d66ef3833c45ec583a98adea296",
"auction_dashboard_build/.git/logs/refs/remotes/origin/HEAD": "50a8496eef889c4d8e706ad3cdc99578",
"auction_dashboard_build/.git/logs/refs/remotes/origin/main": "fc1c8a366b458895d77110a8d34d0ba8",
"auction_dashboard_build/.git/objects/10/7484d395900555303efe211d2a203947b181a9": "61d658f945edb55b588f347ae415979c",
"auction_dashboard_build/.git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
"auction_dashboard_build/.git/objects/27/b3b1b44f5accbdc7f0650440098f3594b273b2": "c514d058955de4af126b8220a46fc904",
"auction_dashboard_build/.git/objects/28/dfd869e847f30be9826900938e4944e8de78fc": "ba140165a6d047c3ad267835760b5af5",
"auction_dashboard_build/.git/objects/2f/a67d96f29405a49f06c132d0dc618637f8cc4f": "fb00cc6017e260072e779b09fa293600",
"auction_dashboard_build/.git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
"auction_dashboard_build/.git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
"auction_dashboard_build/.git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
"auction_dashboard_build/.git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
"auction_dashboard_build/.git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
"auction_dashboard_build/.git/objects/63/9d9bf0fbaa9b7d92acc2d1c07f51bd603ae007": "bf5e9c8ee0924d2d40c192b1c825ce53",
"auction_dashboard_build/.git/objects/69/4d7c3a8c2280938dbd55de73c56592f063ece4": "59f2303f78083990bf78c1cb98a65ae1",
"auction_dashboard_build/.git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
"auction_dashboard_build/.git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
"auction_dashboard_build/.git/objects/81/6c6cb078882b47aea45a2473d5c62b923db0ae": "0bff9682349d0f0de2d36a39f9e6b15a",
"auction_dashboard_build/.git/objects/86/e930dae0a1204ab7e239373d24d8c997e185fb": "ba9ec96d67f965d7a92a2e3454cbe9ba",
"auction_dashboard_build/.git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
"auction_dashboard_build/.git/objects/94/0946f32525caa9b4901089e681f2a282a0047a": "3f833435a68c7db2e551cc7381fd2bbb",
"auction_dashboard_build/.git/objects/a1/7824751a97c01ade637b05f7e4b1ea451b2757": "3d8c2592bf0a2344a94a7fdc81449c01",
"auction_dashboard_build/.git/objects/ae/c3b776a05765065f9ae2b0a351ecfd663218fe": "f447a31e18f459c4ac3de7fcc2facf42",
"auction_dashboard_build/.git/objects/b3/7c1cc027b9ebd82d45beeeb51bee5c63e66f93": "974cb7656760c1834901d1eff96739cc",
"auction_dashboard_build/.git/objects/b8/a001e365a8684723479107294d2f2edf76c9c2": "4d2c7f7ea2b41d0e6532a7b3346c4636",
"auction_dashboard_build/.git/objects/c0/cd5ee85838c204d8b861c8485533c609b10e7c": "18d3192e3eb91e35d0be5725bdc2c462",
"auction_dashboard_build/.git/objects/c0/feaa27e595b81f312d947c00e7823de0fd83bc": "e3a9b3128ecb73ec1783ea02fb428c85",
"auction_dashboard_build/.git/objects/c1/d63727381cabc2aa6a466e3bcf3c70b120c025": "5bbe0f3be9db14f821a80bb259e9dd60",
"auction_dashboard_build/.git/objects/e9/6e1bca9193d30fe24eba3fef51e59b3474079f": "3a784cb0e78eb325b365f41503479da6",
"auction_dashboard_build/.git/objects/eb/8051c0e8af78b092001b7967e3ab675483ace5": "67accee15b5a9591afca39e74e122ddf",
"auction_dashboard_build/.git/objects/f0/8a9fa0981395d141a853bfdd25368959a1ba20": "bba439d1e8cb050b28fc74307a792d06",
"auction_dashboard_build/.git/objects/f5/a0cd80721634e830a010967b1c86cbec20ac47": "8284c0eaf8fb23104a17722b3895cd34",
"auction_dashboard_build/.git/objects/pack/pack-c4131def774b53ca67053ac45ad98faf0d9960b3.idx": "4b157d3965e74494792bb1af76d7c0cd",
"auction_dashboard_build/.git/objects/pack/pack-c4131def774b53ca67053ac45ad98faf0d9960b3.pack": "d47ec45e8c22ee93422f4f3c6b6dc194",
"auction_dashboard_build/.git/packed-refs": "7257b7315a9499562061da79260f17bd",
"auction_dashboard_build/.git/refs/heads/main": "c6f59acebbf892429063cc5d08c7381a",
"auction_dashboard_build/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"auction_dashboard_build/.git/refs/remotes/origin/main": "c6f59acebbf892429063cc5d08c7381a",
"auction_dashboard_build/assets/AssetManifest.json": "3ee5f3d2e8e017a6d23d852c0645bb72",
"auction_dashboard_build/assets/assets/loading.gif": "a8fa6adfcd4be94d1b7de665a4f11df9",
"auction_dashboard_build/assets/assets/logo.png": "53ec64a3aba40e3b38269b6b1a5e61ae",
"auction_dashboard_build/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"auction_dashboard_build/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"auction_dashboard_build/assets/NOTICES": "b63fca3ee6feb8c779b2354f0f9ddb85",
"auction_dashboard_build/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"auction_dashboard_build/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"auction_dashboard_build/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"auction_dashboard_build/canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"auction_dashboard_build/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"auction_dashboard_build/canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"auction_dashboard_build/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"auction_dashboard_build/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"auction_dashboard_build/flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"auction_dashboard_build/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"auction_dashboard_build/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"auction_dashboard_build/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"auction_dashboard_build/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"auction_dashboard_build/index.html": "6f751d30ed7b975f166d0a43d83b0f6b",
"/": "de31eb4b9e8a850859afa9af85eff1d4",
"auction_dashboard_build/main.dart.js": "e2b370ca89d8c3b057d46d18e66aeae7",
"auction_dashboard_build/manifest.json": "3486ab8f927ae09acfed7ad5b0758adc",
"auction_dashboard_build/version.json": "a0b27194d395cdc089ff3adb314236e0",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "de31eb4b9e8a850859afa9af85eff1d4",
"main.dart.js": "e2b370ca89d8c3b057d46d18e66aeae7",
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
