/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01_padroes.html",
    "revision": "e53b948ae75702770e0f2b9ad2772eed"
  },
  {
    "url": "03_GOF.html",
    "revision": "c9568745130ff35d5fdc2aec88759d8f"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "b082c1fc46977aa574ac759b42380446"
  },
  {
    "url": "404.html",
    "revision": "539b908d3e74d9e20bc9c2c241835e89"
  },
  {
    "url": "assets/css/0.styles.47a93a5c.css",
    "revision": "de12224e2d9908711081ece9d8365c1c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2686d00a.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.a7685b5f.js",
    "revision": "45e9205b1fc9a2a6e3f12b34bcacfcfa"
  },
  {
    "url": "assets/js/12.fc11eefa.js",
    "revision": "7cb30a6d6b4600f4e81ea2443cfa4add"
  },
  {
    "url": "assets/js/13.31e4f6cd.js",
    "revision": "d06de999097e24539efa4f0d9b9f44fd"
  },
  {
    "url": "assets/js/14.9c37828a.js",
    "revision": "d82f2d657afa5f9a2de8ee6f42fcb883"
  },
  {
    "url": "assets/js/15.a728bf44.js",
    "revision": "8a5e4eb64f0fd423b5a63c7237ea61f8"
  },
  {
    "url": "assets/js/16.991802d3.js",
    "revision": "a040b61d6e62a84c765ab9113dd6a98b"
  },
  {
    "url": "assets/js/17.e7691df1.js",
    "revision": "a360d8e093739ed13ceb812414eded31"
  },
  {
    "url": "assets/js/18.98381aae.js",
    "revision": "71ba5d635898e36075914dee7aec1e64"
  },
  {
    "url": "assets/js/19.4abd142b.js",
    "revision": "486b6da16af25aa3ba63f95dff01bb90"
  },
  {
    "url": "assets/js/2.63c38da0.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.c4e9abb8.js",
    "revision": "4e3225dc00a4762a09709712baf06dca"
  },
  {
    "url": "assets/js/21.1ea42746.js",
    "revision": "62908741e8fd32cd839a897b7d931e8d"
  },
  {
    "url": "assets/js/22.590de762.js",
    "revision": "9c47a7dfcb5cb21a4f537823f76d0611"
  },
  {
    "url": "assets/js/23.1aac4d31.js",
    "revision": "eb29c8821fdff800183cdef5f51d9eab"
  },
  {
    "url": "assets/js/24.127dd2bd.js",
    "revision": "e79114ba9dda3c3881a437e0a277a99c"
  },
  {
    "url": "assets/js/25.29d15064.js",
    "revision": "d97ecd207f8ba7e508ba1e1fab6098ec"
  },
  {
    "url": "assets/js/26.a8072170.js",
    "revision": "ae2dbfe5532b56f3ff5f346286564115"
  },
  {
    "url": "assets/js/27.033bb7a7.js",
    "revision": "1f53668978f0fe1653ed5422d9d2c60a"
  },
  {
    "url": "assets/js/28.d071379e.js",
    "revision": "1a4dd919a622a1d63c8e625fd60579ec"
  },
  {
    "url": "assets/js/29.c3ae10b4.js",
    "revision": "695f0f68914d1a5e428a3a4ed1b83a62"
  },
  {
    "url": "assets/js/3.5bc5870a.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/4.97fbe56c.js",
    "revision": "4900343ebd96b8021aee66878b9b140b"
  },
  {
    "url": "assets/js/5.2b7133b0.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.28e79f91.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.a41c72a8.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.c3a503dd.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.4e94b1fd.js",
    "revision": "9fd0c73a2d43b14639da7ea5eb85f402"
  },
  {
    "url": "assets/js/app.5c66bfc1.js",
    "revision": "6b6d40f9d801e00aa2aa4ca1194991ba"
  },
  {
    "url": "gof/Criacao/AbstractFactory/index.html",
    "revision": "fd44fcbba4ed1c2269de37d53de1bb17"
  },
  {
    "url": "gof/Criacao/FactoryMethod/index.html",
    "revision": "66fe8981c6371dce00ac8351f28ebd7b"
  },
  {
    "url": "gof/Criacao/index.html",
    "revision": "1ebcae673f0e51d8368a90382d682893"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "57045aa8408f0fe163414ca355ce14d6"
  },
  {
    "url": "gof/Criacao/Strategy.html",
    "revision": "0c9dd7953a7477d88b84b0acecd2b88b"
  },
  {
    "url": "gof/Criacao/TemplateMethod.html",
    "revision": "e8e298d1f957a60bfb61f8e754d2b8d3"
  },
  {
    "url": "icon-192x192.png",
    "revision": "5ece80f031902e56942acad6fb63133d"
  },
  {
    "url": "icon-256x256.png",
    "revision": "43304b267b884bcbc582bc60bb3e16c8"
  },
  {
    "url": "icon-384x384.png",
    "revision": "67a9c81ecdf0ba691d4e38fffa903a11"
  },
  {
    "url": "icon-512x512.png",
    "revision": "efbd3ec066773aeba25d9a5248e9217e"
  },
  {
    "url": "index.html",
    "revision": "d7b6256975768702930f8545848b2285"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "4cb1e520de276f351b8288e042c90263"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "bbbd1c3bd74f94cf734a528311dba5a8"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "4385362e7592750167aa3f34f9e98f3d"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "9d076f21429f5bc498ffd3c1de3fcb30"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "f1aae821d4a7571f4b2a54555b6bee0f"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "172be44b9da45b08ad001f4b855fb924"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "1645b01cbbdff5d5a8f51d9d5db404aa"
  },
  {
    "url": "SOLID/index.html",
    "revision": "8a4728eab96a3bff57918d8405668cb0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
