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
"assets/NOTICES": "c16af6d01d6e83ff01daf6a4d693a2e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "8c4ed548bf838bfbeb4db26a4edcd062",
"auction_dashboard_build/.git/COMMIT_EDITMSG": "60b725f10c9c85c70d97880dfe8191b3",
"auction_dashboard_build/.git/config": "902c6167dfa433c673202238157e1f19",
"auction_dashboard_build/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"auction_dashboard_build/.git/FETCH_HEAD": "dae169800ca268fee3425ebd2fd28bfb",
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
"auction_dashboard_build/.git/index": "bb590eceed05915c4f800c88b6e484fc",
"auction_dashboard_build/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"auction_dashboard_build/.git/logs/HEAD": "e8f549d65919e8619f63fd2050f0734a",
"auction_dashboard_build/.git/logs/refs/heads/main": "e8f549d65919e8619f63fd2050f0734a",
"auction_dashboard_build/.git/logs/refs/remotes/origin/HEAD": "15861ec7babeac4e5fb74f376804a3d5",
"auction_dashboard_build/.git/logs/refs/remotes/origin/main": "a2e5387a484a810af499db7b5c7ef0b9",
"auction_dashboard_build/.git/objects/01/6d103987e9106eff9076e699a4955d039e37e4": "d4d55d8897a65e0735a6c02cb10d1438",
"auction_dashboard_build/.git/objects/03/e853dcb3370db9dccee832d3ebcfb3bc8ed81f": "742d8959c9f7457b5483e91ad6cbda3b",
"auction_dashboard_build/.git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
"auction_dashboard_build/.git/objects/14/782cff8ce2b2d30d1470ee42cab44ded8cc92e": "0f0f3694fe3f58872e6d9acce5d4301e",
"auction_dashboard_build/.git/objects/16/7953aa04a8b3a405d79e5fd330f969fa5ad154": "b269a1e7591aa775bb7f7276605b8bbb",
"auction_dashboard_build/.git/objects/18/b9fe231a3c5762da63a6cd4ec77926be8439c2": "9e97e76fd508e985dc04ef682535e1c5",
"auction_dashboard_build/.git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
"auction_dashboard_build/.git/objects/26/3a06f34417421612313b7e23c3c7c10f8fba5d": "4658d7c173d09a13076a8563da8ae511",
"auction_dashboard_build/.git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
"auction_dashboard_build/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
"auction_dashboard_build/.git/objects/33/eecb12e820d4220fe352209277f439277b736e": "fa920118316eca8f1b73baebb284f385",
"auction_dashboard_build/.git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
"auction_dashboard_build/.git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
"auction_dashboard_build/.git/objects/42/b07eafcb1b204841118af358e5b0b84498248f": "32b725311f50cf86da846a10cac3a681",
"auction_dashboard_build/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"auction_dashboard_build/.git/objects/51/e59245e0d8725c243f519afb38d439b598b1f5": "678f6df55b51ba6f5321c678a2d053c6",
"auction_dashboard_build/.git/objects/65/95899ff05563bbe97fb4cd3db4c80bcd9e406c": "0a7acab564181c3a36b8147dec741994",
"auction_dashboard_build/.git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
"auction_dashboard_build/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"auction_dashboard_build/.git/objects/6f/ff27b7158cc952d22c5b6def6964d8b8cb2040": "c73be5bacc9fd4844e7a12fc02de8f3d",
"auction_dashboard_build/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"auction_dashboard_build/.git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
"auction_dashboard_build/.git/objects/86/a59a69a7f0d466a943bdfa14220a3e991c9c5a": "8fe13c2921c7993d9e49bf44d12c0c1c",
"auction_dashboard_build/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"auction_dashboard_build/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"auction_dashboard_build/.git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
"auction_dashboard_build/.git/objects/9c/052823c76688774004923cf9e246cd7f436b66": "ded3156ec829b6a323b4a10538cfe8db",
"auction_dashboard_build/.git/objects/a0/88e8115d5f1961e682cd351fca3837e9dc9524": "599c5fd3baf9651c2355863fc849a047",
"auction_dashboard_build/.git/objects/a0/f617bb3b7615520893a111d1d5309c5c170eab": "30f8591cac1f3ebe0fa1688472506469",
"auction_dashboard_build/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"auction_dashboard_build/.git/objects/a1/e81181f95875c5c016a6164bb597d6f89b303e": "bdd78db4f1d983d8c6a79643c011479e",
"auction_dashboard_build/.git/objects/a9/4666b0bf1e3c481ab4f5b0909c604714741c03": "bb7eea5a40bd860c54b06ba67b13d01f",
"auction_dashboard_build/.git/objects/a9/fd13aea6508ea79b866bc59dae5ea5fc4aedbf": "ce46fe31077c17206d9ed3ed663e7abb",
"auction_dashboard_build/.git/objects/ac/3a9b305bfcf2844c980707b7bcf1bf09604bee": "290b6cd76498ce74450136c9f8bb4add",
"auction_dashboard_build/.git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
"auction_dashboard_build/.git/objects/b2/82042cb75f956062dc4f13c6f1c95e5a68b476": "01572b6ca598c92ae09e1d4dc23cdb50",
"auction_dashboard_build/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"auction_dashboard_build/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"auction_dashboard_build/.git/objects/bc/554a93259af800ecd0abfcf2d69850c6c46d3b": "be197674186784c5c558df6061fc614f",
"auction_dashboard_build/.git/objects/bf/6b8114aa898f22202f4d2253d0bc3a648b9830": "11786890c3efdbd955833dcef9b33e58",
"auction_dashboard_build/.git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
"auction_dashboard_build/.git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
"auction_dashboard_build/.git/objects/d1/659d60491cde6e0f86f8381d99f2fc7acb013e": "f7a334fd9acf8b6f96c054c6b044261d",
"auction_dashboard_build/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"auction_dashboard_build/.git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
"auction_dashboard_build/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"auction_dashboard_build/.git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
"auction_dashboard_build/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"auction_dashboard_build/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"auction_dashboard_build/.git/objects/ec/e2478e0c8e8347c014da4b13df04fa1d7cd81c": "06aa3230b65f540257e92addcac76ba6",
"auction_dashboard_build/.git/objects/f1/95b3d777e25397e0b25e04dddeb0fcb8995e34": "c35606ce3342747344cf0f0db73b74ef",
"auction_dashboard_build/.git/objects/f2/ceb2dba911e778f48e941dfb0db1031d325b9f": "da05db7e6eff1ad5c91bc5cfc1b71439",
"auction_dashboard_build/.git/objects/fb/4f9001c36973f6dee659df4a8e271939fc0e0f": "21d0dd2aa266fd3a11cac7ffdee051bd",
"auction_dashboard_build/.git/refs/heads/main": "193350a845961b7476026580223c5f4a",
"auction_dashboard_build/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"auction_dashboard_build/.git/refs/remotes/origin/main": "193350a845961b7476026580223c5f4a",
"auction_dashboard_build/assets/AssetManifest.json": "3ee5f3d2e8e017a6d23d852c0645bb72",
"auction_dashboard_build/assets/assets/loading.gif": "a8fa6adfcd4be94d1b7de665a4f11df9",
"auction_dashboard_build/assets/assets/logo.png": "53ec64a3aba40e3b38269b6b1a5e61ae",
"auction_dashboard_build/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"auction_dashboard_build/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"auction_dashboard_build/assets/NOTICES": "82bcec2ce9dfc13d383a207916417f7b",
"auction_dashboard_build/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"auction_dashboard_build/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"auction_dashboard_build/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"auction_dashboard_build/assets/shaders/ink_sparkle.frag": "8c4ed548bf838bfbeb4db26a4edcd062",
"auction_dashboard_build/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"auction_dashboard_build/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"auction_dashboard_build/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"auction_dashboard_build/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"auction_dashboard_build/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"auction_dashboard_build/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"auction_dashboard_build/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"auction_dashboard_build/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"auction_dashboard_build/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"auction_dashboard_build/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"auction_dashboard_build/index.html": "aef49c2c8d597bfe7ac24a6c834fa796",
"/": "eae8ca05b2679f130dbfc3d7a10a0883",
"auction_dashboard_build/main.dart.js": "60efc8f3926896e12c0bb939d236ec6a",
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
"index.html": "eae8ca05b2679f130dbfc3d7a10a0883",
"main.dart.js": "188a0d3cb375375a4d1b10cb6fe8bdb7",
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
