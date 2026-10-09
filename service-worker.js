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
    "revision": "da25d0480d3025cb58110573dd38e1f8"
  },
  {
    "url": "about/index.html",
    "revision": "f58c0e912eb58bf958da2fdde4d435c2"
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
    "url": "assets/js/16.23c0b8ba.js",
    "revision": "7756328b8d5a37e1ff06208922ca3236"
  },
  {
    "url": "assets/js/17.b1060eed.js",
    "revision": "3b2451117621a65005b5c9649f1d246d"
  },
  {
    "url": "assets/js/18.e78b0603.js",
    "revision": "cea2e60b5d67075425a57de75dc8a758"
  },
  {
    "url": "assets/js/19.3d101391.js",
    "revision": "8dfc6b9c27b10f2bdfa8ad1e9fce564e"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.3bd2bbda.js",
    "revision": "71547470cf77e2af3cb926b72be1d956"
  },
  {
    "url": "assets/js/21.93d8d5b6.js",
    "revision": "f7b4ee58ffe06b98f926d96d31f59268"
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
    "url": "assets/js/24.e756a1c3.js",
    "revision": "357f7de2fcfb4884c78fc141645e6698"
  },
  {
    "url": "assets/js/25.a673a83b.js",
    "revision": "63626ce2a454c23b86d53fd0118de0b7"
  },
  {
    "url": "assets/js/26.6908bb86.js",
    "revision": "51355771bdb965efa788a7b98267a261"
  },
  {
    "url": "assets/js/27.52d6d68a.js",
    "revision": "0168e495ae80e9ba83821434475ca1d3"
  },
  {
    "url": "assets/js/28.63e437e6.js",
    "revision": "3fc1508a1c85bebefe92ac75bbf5adbc"
  },
  {
    "url": "assets/js/29.9009efe0.js",
    "revision": "9b5200c37b19bdab04d6de8d84d968b4"
  },
  {
    "url": "assets/js/30.6ef2ad44.js",
    "revision": "58b3c0c63e7e2031dfe307c00b33f994"
  },
  {
    "url": "assets/js/31.3a191089.js",
    "revision": "bd5b7115f893b4f986b7a3a3ddee3bed"
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
    "url": "assets/js/app.0a820aa6.js",
    "revision": "5fad3bff1b3be28bb384b7f4879e248d"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "b303638fcfb700e52404fc9489b0a273"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "96082e93c4833b315efc6f985c426fff"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "b5037106c49d0f3f0fb39afb3fa7ecd1"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "7280af5082d7d07200b5d963e85f7517"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "1d027666e264b196a3fe63ca8b25ac78"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "8b61e7b14b641b1753067d3757dfb935"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "1925c43150216c94313f8021c53d0a35"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "a219f7904192f69b2fc0a6c291e658a4"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "95a21ec3e16f10b7a177ce066b0d33ff"
  },
  {
    "url": "categories/index.html",
    "revision": "7237f9f09ad1612475a154771019f5ed"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "efb1820637ec9f3d7d44a7b5122fe604"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "d1b353e7a71d1cb849d9c61368c0b61f"
  },
  {
    "url": "files/loveEyes.js",
    "revision": "c1fda8f1201dbc52af6e3876200fee3d"
  },
  {
    "url": "hide/transferRecord.html",
    "revision": "7aa22c40bfd9786c194f29462b3a3151"
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
    "revision": "a92a11af55701ef94d2b52220f402096"
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
    "revision": "5bf86c3df245a1b3158a57afef492b85"
  },
  {
    "url": "other/index.html",
    "revision": "14084e3a0a0a7d2abd2fc258da6c16bd"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "afa8e59a04ab6d4b6a427f2f7cba1f6e"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "519e167d966d997107e0a17e1e8b389c"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "e560948b0d819c3fbcb3a541a145a61c"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "8c44e1f73516adefe9bb12a0dfa9a011"
  },
  {
    "url": "tag/index.html",
    "revision": "24e04ffa5dc3877ce49d0adbf84ff73b"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "fae0cb603e66fda5ee5c32e7c96e6544"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "c33fd8a20e89ca71e04deee74aeaf1c2"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "6f326220d985780cef63782a3958a319"
  },
  {
    "url": "timeline/index.html",
    "revision": "f2475b9fe76c062a6c29c8cfdc480385"
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
