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
    "revision": "0adb0a2e4d67024a7802952c8b06cc39"
  },
  {
    "url": "about/index.html",
    "revision": "61cd92055090bfb14ca0f1f9b7f5dfd5"
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
    "url": "assets/js/16.bf21bdaa.js",
    "revision": "0b3b0c1c7006918c5432d5c09eb62ad7"
  },
  {
    "url": "assets/js/17.b1060eed.js",
    "revision": "3b2451117621a65005b5c9649f1d246d"
  },
  {
    "url": "assets/js/18.71fc3f65.js",
    "revision": "7577bddffe78fced882ea12f31514a5e"
  },
  {
    "url": "assets/js/19.f1eaf4de.js",
    "revision": "e0cc19ceeb13db18b296022d52ca7085"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.d154e70f.js",
    "revision": "3fa15df5d252692e2200cdb130bca64e"
  },
  {
    "url": "assets/js/21.6014b1f8.js",
    "revision": "73ead89e8f3b40d2c78fef14f9ae5e4e"
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
    "url": "assets/js/27.4d5ca234.js",
    "revision": "7fc62cbdc9da0d7639cf2abe5acdacd1"
  },
  {
    "url": "assets/js/28.aa39afa6.js",
    "revision": "3e7277c1a65a5bad8f277157798ad43f"
  },
  {
    "url": "assets/js/29.fa79238c.js",
    "revision": "cb45bd4e4c0af5500dab02c97aa45594"
  },
  {
    "url": "assets/js/30.f6bcf79d.js",
    "revision": "92929e3f36d0e6b20c35183747bcc63d"
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
    "url": "assets/js/app.6e21b204.js",
    "revision": "963c2480690035de8d51a6e6b4f5b884"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "1307ef05f40de69649de128b18837c53"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "c746b76a7ff08c94c64e1641aeade921"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "f6fa80cd92f59ddf2e1ff7fc96527360"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "a59ac54469e690bc9574ae4260a0eb05"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "d19087b387a9fdcbc374333c53e0236a"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "d1c2585e7c4f92c76d60882b522cd8a3"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "f8c0c16b058c75fb776d7d6b69021a49"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "311907ee4f03a57eeca671feb4108ecc"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "e650a13e5f17dca75c9e049bfcf2f423"
  },
  {
    "url": "categories/index.html",
    "revision": "7d05b896989058df8b92798426b24df5"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "137ddece8d65970c9abdc5f29802e507"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "b652197d075da61d4ba2accabdca46cb"
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
    "revision": "e863f4b8c14720baed11324410385bd3"
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
    "revision": "caa9350f5aabc5dd4c0e095e536e8bc1"
  },
  {
    "url": "other/index.html",
    "revision": "75ec1fea2de42745cc168149b26ade41"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "66ef3fa34c215c2c189e23c5c1afa518"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "dc8b452caf63df46c209cb1f3692adc1"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "339a2ad68e9a000c9cd0bc26c4e41274"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "7ecbdcf8a2d351ed975be1f747acdcf2"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "262b5448084b2c3d5aef15e99424df92"
  },
  {
    "url": "tag/index.html",
    "revision": "3b1d0c2b62f4590206c296f482ec86e6"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "53db212c79a5bea68aa8cd53d4f9bf60"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "4466396e401daa331bd39f573a57056f"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "c36df9008f68f45d6eb0fc71660b68dc"
  },
  {
    "url": "timeline/index.html",
    "revision": "146911847326dce1daef5e78d1454b2c"
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
