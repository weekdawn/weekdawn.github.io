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
    "revision": "1b368ed2d27dd18b36c372453167a0a7"
  },
  {
    "url": "about/index.html",
    "revision": "d49e6dae796a8221264887f0b70e34ca"
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
    "url": "assets/js/16.e4fee13c.js",
    "revision": "4d2e82ab3f542bc673a6cf6007570281"
  },
  {
    "url": "assets/js/17.b1060eed.js",
    "revision": "3b2451117621a65005b5c9649f1d246d"
  },
  {
    "url": "assets/js/18.168c03cc.js",
    "revision": "707720ccce324f1d21bf56a6a8dcd745"
  },
  {
    "url": "assets/js/19.d431c60b.js",
    "revision": "e5ad577f6d51c39f9f4479305385387e"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.86fe56ed.js",
    "revision": "fc822824ceb9862567c88f36afc7b373"
  },
  {
    "url": "assets/js/21.57e360a9.js",
    "revision": "06ef89ac4d7fa3b997b32d566da0065b"
  },
  {
    "url": "assets/js/22.0e199935.js",
    "revision": "c839293a833be912bcd51283d428c6cc"
  },
  {
    "url": "assets/js/23.181518e5.js",
    "revision": "b570170b9cf9f4e212312b150b94b11f"
  },
  {
    "url": "assets/js/24.07132954.js",
    "revision": "68378d1322d1232e270a8685a13932cf"
  },
  {
    "url": "assets/js/25.cce2f703.js",
    "revision": "a11f000452e6221960d0181671596578"
  },
  {
    "url": "assets/js/26.42386a3b.js",
    "revision": "261f432baf89807c968542b484888db7"
  },
  {
    "url": "assets/js/27.9d81c412.js",
    "revision": "b60340e1f4c209af745189325ef826d7"
  },
  {
    "url": "assets/js/28.aa39afa6.js",
    "revision": "3e7277c1a65a5bad8f277157798ad43f"
  },
  {
    "url": "assets/js/29.f4a39eba.js",
    "revision": "2411c9f42a4c13bf50a1feea068a8162"
  },
  {
    "url": "assets/js/30.2d928835.js",
    "revision": "99931e8ebc83cb8ba0560ee99a540190"
  },
  {
    "url": "assets/js/31.3b4e6712.js",
    "revision": "2b22e79821b55e1c4fd048fb96f60d9c"
  },
  {
    "url": "assets/js/32.f8ed89a3.js",
    "revision": "eacf8743a8221a50a4d08b2f9249fa86"
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
    "url": "assets/js/app.f645f966.js",
    "revision": "d7d89b08b09f2b7acd0ee11f4579a588"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "8c996ff4ac230038e79990b157867123"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "d8cf491c11c62bc56e6e15199abfac9f"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "12e3cd6490e8db2df9efc4390944e8a7"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "0b94d03b472628711dff195d286e9900"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "be9419ee97233f431a1a2f6cc660a491"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "1cfc21b62566e48778f09131ff268051"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "19bfba25929e4153b3bd1b35443fbb17"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "87b98c19a396ba9ab0c795c10cd51c38"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "460227a6b4b98ac42e56a8fb09355e01"
  },
  {
    "url": "categories/index.html",
    "revision": "632a397055baf7a5aa6366c967bc25f9"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "b7cf9b5168df8cc6477b4803d694f651"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "a8eb47b5930ccca18c224e5ff3f71584"
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
    "revision": "c452cdafb44ed048850d2007b9531a7b"
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
    "revision": "a7cb6f520bfadddcd0236e0a196293fe"
  },
  {
    "url": "other/index.html",
    "revision": "dd6bebd494017cf0a0a0e65b612b434c"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "0bfe5e54cb7d17d6cadb975f53093cf1"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "b9052216145ac8cf99c0ed901d550aec"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "9bea49cfffb033449c32b1da7577450e"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "8e6e6f62d3409e01d1083688c22d2d5b"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "f08099ef24358bb4761f5d21e2c42495"
  },
  {
    "url": "tag/index.html",
    "revision": "4e60d4b219cbece2601ea53b264f7b1a"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "d8a05ca932803d8e803613f6d5307867"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "032a1b6a71c10526d6e01f36d7d4574b"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "e4c4c7ce2eaa5751078d97ef027b6dad"
  },
  {
    "url": "timeline/index.html",
    "revision": "3064ec267c2e85cd015bc74b61e9ba74"
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
