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
    "url": "404.html",
    "revision": "a7b95d07e7848d08663c46c5dc325a69"
  },
  {
    "url": "about/index.html",
    "revision": "e3861068618f51eb9e56ec3ccd123fbe"
  },
  {
    "url": "assets/css/0.styles.b965c77f.css",
    "revision": "b08462de093317fdc417baa817a6ec95"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1bf95556.js",
    "revision": "999e9d597efae4fb400342ab542836dc"
  },
  {
    "url": "assets/js/10.8807efad.js",
    "revision": "60a5f661bd1a96ace867cdbe35ecd019"
  },
  {
    "url": "assets/js/11.73eaedc9.js",
    "revision": "ca71ee669398aa8f7f8090625eb4762a"
  },
  {
    "url": "assets/js/12.469a391a.js",
    "revision": "1757d620ceb00bf5d73260423b929e76"
  },
  {
    "url": "assets/js/13.1bf971e3.js",
    "revision": "9077aeb417c897542710d67c3bb4fdd6"
  },
  {
    "url": "assets/js/14.229d6d47.js",
    "revision": "77b48a0c62c3fa5aff717cf6e4e47e5d"
  },
  {
    "url": "assets/js/15.e3c6efc2.js",
    "revision": "edda1c2a3af56956545ff4ee1a7259c4"
  },
  {
    "url": "assets/js/16.f3f49c14.js",
    "revision": "a2170459d4954c29e90dc090624a86c0"
  },
  {
    "url": "assets/js/17.b1060eed.js",
    "revision": "3b2451117621a65005b5c9649f1d246d"
  },
  {
    "url": "assets/js/18.6356afd0.js",
    "revision": "abca207f46eb529486787b4f8378c702"
  },
  {
    "url": "assets/js/19.599f1131.js",
    "revision": "2af6ab54407dbba6f06a8b220cc4c042"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.c9633972.js",
    "revision": "f926a376eaf3254e24b1dc4d6b23a68b"
  },
  {
    "url": "assets/js/21.57e360a9.js",
    "revision": "06ef89ac4d7fa3b997b32d566da0065b"
  },
  {
    "url": "assets/js/22.a0f6a3df.js",
    "revision": "7681e272acb81b6771677ca0b63853b3"
  },
  {
    "url": "assets/js/23.cee0e32e.js",
    "revision": "dd46d121ec608d4c60786c63352264f4"
  },
  {
    "url": "assets/js/24.a576fb13.js",
    "revision": "32998599ee9c6f6cc2031c3fd6beeb53"
  },
  {
    "url": "assets/js/25.cce2f703.js",
    "revision": "a11f000452e6221960d0181671596578"
  },
  {
    "url": "assets/js/26.a2336104.js",
    "revision": "c1647868104ed1e783e582e4ad43f6bc"
  },
  {
    "url": "assets/js/27.e0cc77af.js",
    "revision": "c3c559638a95dc2d5a81695d49965eff"
  },
  {
    "url": "assets/js/28.93bc886c.js",
    "revision": "4eb10c9d0a6dd3b99382dab6b20a24df"
  },
  {
    "url": "assets/js/29.7562f084.js",
    "revision": "ab47ffed2360d1ba2a53773c4b271f36"
  },
  {
    "url": "assets/js/30.ba0d5cad.js",
    "revision": "93ce5e7505508cef8744caed39adf11e"
  },
  {
    "url": "assets/js/31.32bbc164.js",
    "revision": "df4452c988f23ce89216e3514c9473ea"
  },
  {
    "url": "assets/js/32.a6be0cc6.js",
    "revision": "ca939ef410ca46c380b85a801d177f92"
  },
  {
    "url": "assets/js/33.56b21b8e.js",
    "revision": "0ae0edcdc226e80799b2c3ba7d4dd85d"
  },
  {
    "url": "assets/js/4.9e148f36.js",
    "revision": "5be3e59b3fa87111fff40805c2e903d4"
  },
  {
    "url": "assets/js/5.bb85c144.js",
    "revision": "4062bd44b38d31df79c4a87adf80d017"
  },
  {
    "url": "assets/js/6.f56089ae.js",
    "revision": "71c2dd3eba6166cd682fca28a21b566e"
  },
  {
    "url": "assets/js/7.f277a963.js",
    "revision": "2e8f4fba2342d7a1651c5ed8bfde2ff7"
  },
  {
    "url": "assets/js/8.271b0658.js",
    "revision": "8d9b812ff34eae11d548d1dbfe24588b"
  },
  {
    "url": "assets/js/9.48c9c7c7.js",
    "revision": "1f6a6364cd2f70cc6ca557c85c7ce0c3"
  },
  {
    "url": "assets/js/app.84d144a9.js",
    "revision": "e2f675dd231699acc3b960ef80c61640"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "ba96a3b431a6c1f0effa7e922e5f56d8"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "2b45c5f28fbacf7aa5b5a33b74e22d41"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "53621b8d5ca0aea14382ea39951bd7d7"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "0202f9d3ce0ee336d3677120dd2ade61"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "ecb495576eb2fbaa3233a203fdecdef4"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "3d49410c759ddcf6dfe9a378f2e792a9"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "3f735f5aeb552c900d5157cc485eb03a"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "5a73e7bfa3c3a2d29502425f218eb423"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "b8a1d89b17a784d843a72611f8d389bc"
  },
  {
    "url": "categories/index.html",
    "revision": "b6925d415559a27a09a2ea4a723ae476"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "ff12203369ef0331de6d5e2eb3d1db36"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "839264bdcf50c93db4245a41932bd12f"
  },
  {
    "url": "files/loveEyes.js",
    "revision": "c1fda8f1201dbc52af6e3876200fee3d"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "index.html",
    "revision": "acfcb005e3afd3c11417e9fa491b91a5"
  },
  {
    "url": "js/canvas-nest.js",
    "revision": "5b2a66a5fb6d534069f5aa125165c0c0"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0b83df7086f22f90e3928f1941924efe"
  },
  {
    "url": "other/chatgpt中文调教指南.html",
    "revision": "028ead1192b83b561224a0d036e1cba0"
  },
  {
    "url": "other/index.html",
    "revision": "4188ed6f423798b987ab0a5b55145c57"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "fa6d9368628e45b6965f4033e224a403"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "77d2d3e8115d08e81fa5de6b29d584a1"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "80939f9444fd43b4cb5c49bb4ab77b9f"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "fe21894946f543ead41ca03648b91d9f"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "204bc737baa3b1b80eb59444f360c12b"
  },
  {
    "url": "tag/index.html",
    "revision": "9f2c9d4fe524b7f5989e2e9f1dcb5778"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "d7a6d138b9791a97fd86250200e4c5cf"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "9d1c4173e5751f22a94444cd53b42d9f"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "2a7dbbe9df12f84ab1db38e596d55b40"
  },
  {
    "url": "timeline/index.html",
    "revision": "d74d95ff497c37159185ee66bfe6b8fd"
  },
  {
    "url": "view/heart.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/index.html",
    "revision": "de97917d51b734201a657c8377701342"
  },
  {
    "url": "vuepress/bg.jpg",
    "revision": "a32609c188be7f0283a6a12d5febe3e3"
  },
  {
    "url": "vuepress/head.jpg",
    "revision": "f9e8e24fd7957508428bc8182edce78b"
  },
  {
    "url": "vuepress/logo.png",
    "revision": "eb1388e411beab6ded47ea51995dadc7"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "57231622782601cf6ed2f298c89d8452"
  },
  {
    "url": "vuepress/topic02.png",
    "revision": "c81ef9a04e4e57ae7c74773bbdf39359"
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
