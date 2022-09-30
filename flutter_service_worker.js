'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "502f3cc44b0c0fceece8693e0797297c",
"splash/img/light-2x.png": "d6f6d09f5227b3a73168acc765594791",
"splash/img/dark-4x.png": "973db7ba3c0115a22286dadf68739f66",
"splash/img/light-3x.png": "9483178a1d830147e63c6fd3843c996e",
"splash/img/dark-3x.png": "f8fe2e5bc04280983877a8fe22185ddb",
"splash/img/light-4x.png": "e299a88de100965d904a075fac80aba8",
"splash/img/dark-2x.png": "31a0af8bce6b850e6d00e7927c901957",
"splash/img/dark-1x.png": "f30e33c6fec73d460707cc67f4a81668",
"splash/img/light-1x.png": "ae3235892f35f778455b8894281bf1ff",
"splash/splash.js": "91e52740e285b88e8da8265fbb89c782",
"splash/style.css": "6eba38606acf9f78883592ba0eed2f97",
"index.html": "c63a8aaa893d160e8ff239bc78582f91",
"/": "c63a8aaa893d160e8ff239bc78582f91",
"main.dart.js": "ec88f9b8ec516259fb1c489fbd165124",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "6fe4cc6cb8e75ddb46b7847c781d1a23",
"icons/Icon-192.png": "4296cc8567abb2b68082dc778fc45863",
"icons/Icon-maskable-192.png": "4296cc8567abb2b68082dc778fc45863",
"icons/Icon-maskable-512.png": "b1b2668b6779dbb15c4fcad2b8e96a69",
"icons/Icon-512.png": "b1b2668b6779dbb15c4fcad2b8e96a69",
"manifest.json": "691055575bcb1c36fb0e72ff46ac470b",
"assets/AssetManifest.json": "173d6359ed1946c0b30fc636af30d6c5",
"assets/NOTICES": "7bbba6e93876f52e55e51fe320e6a386",
"assets/FontManifest.json": "8d501ac574479214d315c2e820f73c5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/shaders/ink_sparkle.frag": "a93b5b3f2b514f7516ca3170081dfee3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/calendar_schedule.png": "8924dfe30c6ffb0e5c2c76b9adf903ea",
"assets/assets/images/calendar_month.png": "c6ee3e3da9f22aa3f0d732eac0d4445e",
"assets/assets/images/multi_platform.png": "54cc53f3a0ecf5211417a497548bf1d6",
"assets/assets/images/calendar_day.png": "d0def1c25d5bd817d36b547805ddae11",
"assets/assets/images/custom_attribute.png": "4c0d44b738458cd6fe3316ae0644ad70",
"assets/assets/images/custom_filter.png": "f5fabd487d6f9f02be9b6eb036d55b69",
"assets/assets/images/background_image.png": "0650ae07c59fbaf7e9dace116b01beb8",
"assets/assets/images/icloud.png": "7345cc5b3c0846e2d5751b0b6b58c9f5",
"assets/assets/images/custom_sorter.png": "9c9eb1bb994d62421dd03f6444ba4d69",
"assets/assets/images/multi_theme.png": "d225ffde4b6dcaa7066d546819a24355",
"assets/assets/images/import_export.png": "0394c459c834bbacd1eea3e621f22cfc",
"assets/assets/images/calendar_week.png": "6c213b6a79288065c94845276c52e8ce",
"assets/assets/images/nearby_sync.png": "4ac11423ccff6413e9383e26577250b0",
"assets/assets/images/custom_grouper.png": "19735ef755682abfd8fcae79acf5e3c3",
"assets/assets/images/theme_template.png": "d8daadba5c6477a701bec3f3b68ffea0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
