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
    "revision": "fd79c154c4f45d997223efc97e04ea99"
  },
  {
    "url": "about/index.html",
    "revision": "57790c489c65421c35e62408a2d61a36"
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
    "url": "assets/js/16.61ab37e5.js",
    "revision": "2593096818e8cb21f16cbcea1f0cf072"
  },
  {
    "url": "assets/js/17.b1060eed.js",
    "revision": "3b2451117621a65005b5c9649f1d246d"
  },
  {
    "url": "assets/js/18.b52dd2f7.js",
    "revision": "606638efb3bc09276cf10000a03cd959"
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
    "url": "assets/js/21.15cf62ad.js",
    "revision": "86835e0f5b58f0e969bccacd9a3bab71"
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
    "url": "assets/js/24.79193305.js",
    "revision": "3a8735743561e1e96367105185822d3b"
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
    "url": "assets/js/28.cd4f90f2.js",
    "revision": "9d6e9ee0638f10f32d1fbb4cf5b1c506"
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
    "url": "assets/js/31.3b4e6712.js",
    "revision": "2b22e79821b55e1c4fd048fb96f60d9c"
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
    "url": "assets/js/app.f206acd0.js",
    "revision": "4f876070014222d0ddb05e52beeea4f7"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "42e32388e9d1f0fc576c69f30ee0e77a"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "1af9840afdd4a8df6ea48a1880ff903a"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "4ffaa6e725e945454e16488b02208dd9"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "3a76e04dbf30546d160ac7a20e43a879"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "6113229306356d0068cd63efe7aed635"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "8dfa932994f7c2580caaf458443ac35c"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "eb83c49ae271ec643f29393d7f09fab2"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "6eed0410e8083a2965d1659f4fb056ac"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "d5317493d0734129908beec8c791b4bf"
  },
  {
    "url": "categories/index.html",
    "revision": "585731319c1cf2816efaab943e4dbbcf"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "c54939affb88eb5fa9ee6134d29b50e3"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "4e8b746e0ab0ccd22437140e24234f98"
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
    "revision": "94ace67c6f6f307802230755de06e53e"
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
    "revision": "79d03a07ed3d15537eec5c2b0798a366"
  },
  {
    "url": "other/index.html",
    "revision": "68407f053df764367dc247565f6ac71e"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "ae7ccdb451a2d3d5d741e37a455ca9ee"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "be3f0ecad4e113cfd9652996a7cab74d"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "f91376d153523a7f9582825bdcab115f"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "2c7bd3baec95469cda0b89a132136ba4"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "24f5dc30201c45128b6cd3f19b1f520a"
  },
  {
    "url": "tag/index.html",
    "revision": "22fec3999f82a40930e8128d2ed48a59"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "2b57fef91939fad113f0f8b09492286f"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "fdbdea059df1f859164c22d416128e12"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "b808a49a2752da2068c155f2d7766aaf"
  },
  {
    "url": "timeline/index.html",
    "revision": "b24699c1491b8e41a6aebf7c19f68d57"
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
