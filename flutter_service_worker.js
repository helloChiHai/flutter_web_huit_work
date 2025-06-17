'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c71cb2dbbfced2d9566241bc22ff11ac",
"version.json": "8e657de1dbdd0ad4853b34565605a05b",
"index.html": "71a8fa55797cfd7bb796f5a3d719d87e",
"/": "71a8fa55797cfd7bb796f5a3d719d87e",
"main.dart.js": "f17b7cbecf200b4c0768706612fbdf66",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b1dfecdbbd236287794fe499ef8b745",
"assets/AssetManifest.json": "fc0e526f0b1ba72c13c95c4bb7866b86",
"assets/NOTICES": "c0cab7adada84ba7db20b7dbddbe1656",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e5ae3a2b1677e4ddfce2f203b100eeff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f926ddd9636679b64808b31e75607ea4",
"assets/fonts/MaterialIcons-Regular.otf": "8d9669d2b75b081cc734e2ee7c7fb936",
"assets/assets/images/logoVietNam.png": "c70a314225401a903eeadcc70280634c",
"assets/assets/images/icon_tick_circle.png": "4a730eabb221bab539e58b9f7c022b66",
"assets/assets/images/icAccepter.png": "36c7afa98c53d44fe55c05d916cd579f",
"assets/assets/images/jwTime.png": "e7fdb0c60592679afb0df04bb1daecbe",
"assets/assets/images/icManyPeople.png": "ceea754f4985fa8dd02280f12aa6ff33",
"assets/assets/images/icWorkingHour.png": "9cf6d67e08430f0a9a279b1473b45891",
"assets/assets/images/flag.png": "2fcb4b68d100277727c0be0360449380",
"assets/assets/images/icDeleteCircle.png": "c98c6814110c356fb1a5b1fa4dd1de86",
"assets/assets/images/icAddBlue.png": "5e23a050786d89e2c488154487b61de4",
"assets/assets/images/icToDay.png": "a7d292c06cd0cb3b9e212dea401c1207",
"assets/assets/images/ic_loading.png": "d694959df05526c33bd64e8580278f05",
"assets/assets/images/jwTinhTrang.png": "3fbb9bbd50023d77dd7108ce510e91bc",
"assets/assets/images/icSearch.png": "c74c4ffbca41a4b8955d531ac30e61b0",
"assets/assets/images/seen.png": "4de4d65d82636762a6804544f98303c8",
"assets/assets/images/icSend.png": "6bb8865eebedd1d59770ec809faa9ae0",
"assets/assets/images/icCalendar.png": "6ac063f40648ee79f034abcacb821067",
"assets/assets/images/jwAddTime.png": "23f85560d5bb6db6b05730a548e5701e",
"assets/assets/images/anxiety.png": "b558b2ed14e403714bc18cac67beb350",
"assets/assets/images/icModel.png": "e8ae583136dd4e503e50ebb881d7832d",
"assets/assets/images/header_menu.png": "4f2a109287ccecc556519c326df64b99",
"assets/assets/images/icBookOpen.png": "2ab7cd0c09907fdaa3cd735789bd3536",
"assets/assets/images/icTouchChuaChon.png": "cf834ba7b6a9310ad9bec492547b6f16",
"assets/assets/images/heart.png": "93652e5b34f975344fdb29f43ec5294d",
"assets/assets/images/icClock.png": "07bee77c0c52d2b796f5dda894a3a9ac",
"assets/assets/images/angry.png": "e6df7787b4f0e09d5dce61cc5b451fd8",
"assets/assets/images/icon_avt_assignTask.png": "8db7a5f88596646e1f0e58629b9dd1ba",
"assets/assets/images/icTouchDaChon.png": "a9aab9a8a0bb58840d5bbff4e81c6773",
"assets/assets/images/manager.png": "59ce09e860276f2e98381b0fa245ff21",
"assets/assets/images/ic_search.png": "4c0218469fa0af29cb289d5a80841b71",
"assets/assets/images/calendar.png": "e4817305865108e319dd2b7f24752150",
"assets/assets/images/tag_task.png": "18c3994e4ed29f161bc1210834e3e618",
"assets/assets/images/icChevronRight.png": "c4e10c2c8cbbc98e5d61847ab4571ab0",
"assets/assets/images/icHeart.png": "df86d73ee1f81dcfacd050ab204a8a3e",
"assets/assets/images/icMoreVertical.png": "808df0fd87a9af8185701fc874bae0b6",
"assets/assets/images/icMan.png": "2c811b0b67fffcb9e95dd0ab06ca9fcd",
"assets/assets/images/eye.png": "7d81a90c9b3d844dfe3327e3ec9de4c1",
"assets/assets/images/LineTop.png": "916726d002c578641db91317d3980535",
"assets/assets/images/icon_list.png": "b4ca82d82617895cd557c331705a3e36",
"assets/assets/images/icFlag.png": "de592c58513ae0b7a97a6c5f71e4130f",
"assets/assets/images/imgUserDefault.png": "b0db518dcc4f9cc195d85d97f97f69fa",
"assets/assets/images/icLoc.png": "603533c409a41ebf012caa4598fd2f14",
"assets/assets/images/icProjectS.png": "78216405e9529738a6f1616261b0d600",
"assets/assets/images/icUser.png": "06c5c836cdef3dec2e8b07623065b021",
"assets/assets/images/icOClock.png": "281a3b45330cd5d0e02d1b93878c2e18",
"assets/assets/images/icHome.png": "c13ece4b9aece72228fe309264faf3fa",
"assets/assets/images/icList.png": "96df882247cea1c988f5671afed3ad67",
"assets/assets/images/jwMucDo.png": "fc42a0f7ce503e9cbaaa30ddbf907f89",
"assets/assets/images/icPinBold.png": "6c3c7675e6bd26cabb7582e237e7d27f",
"assets/assets/images/logoUnitedKingdom.png": "9af8c26db94489eab89d7ab69d5f5024",
"assets/assets/images/icon_pin.png": "19eae55d0dd9df5d9f66a82351c1d3aa",
"assets/assets/images/icDocument.png": "e73c6859f4f19a06f000bda4702b6fb0",
"assets/assets/images/close.png": "1634d0a4a2c52e6dda4f9e89f7fec36c",
"assets/assets/lang/en.json": "4538bba6b32eb03b8432dd0ce5e7628b",
"assets/assets/lang/vi.json": "52c72345b20605c370465a9f081dde2b",
"assets/assets/lottie/Empty.json": "d03c5723bba3d069315f5d35f29cd917",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
