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
    "revision": "13a67110440e69442d14524e5be3158d"
  },
  {
    "url": "about/index.html",
    "revision": "991cb140b8c5f4c65fbd31897ef8d50f"
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
    "url": "assets/js/18.71d8b460.js",
    "revision": "e5702e1f6afb15b2b2bf77e955e2eb4e"
  },
  {
    "url": "assets/js/19.bee808dd.js",
    "revision": "f4180ed1a2ca250c5ceb327c6066e983"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.3608fe8f.js",
    "revision": "f1175f6af8e147ac5adea566c71adbfc"
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
    "url": "assets/js/26.c7a571fe.js",
    "revision": "8f5f867ec3e36c6a3e0eb2f0d06f061d"
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
    "url": "assets/js/29.f8208720.js",
    "revision": "bdeffbe345ccb2a7f1f286f6c3323513"
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
    "url": "assets/js/app.bc523ff8.js",
    "revision": "8bf3c11869af058e8ae04625d2ab43ab"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "2e87830fb3fd42c61d756641be62afb3"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "cfe1ebcf075be3a57bd88d0487fd3a57"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "3df0eed4963c0d2a096b26ebfe2302e0"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "d1337e686b3a453fb780cb5fe5132cf2"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "da9fc7e7f24f12414122951c27414a89"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "02d671af7e8321b6866c282817bea9aa"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "a908e3c0ada372dd9523fdfcb0cc980f"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "05b8056cdb35f4e79e285c6f78d3f508"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "b35b32584df3335be57c1057d379e214"
  },
  {
    "url": "categories/index.html",
    "revision": "ff4dd8c873a043646aa5930e6b75a80c"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "84888a3734dd113c68a229e763085aaa"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "cdd5d66916d8129aba7bf7ef9f61bfc7"
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
    "revision": "3ca7980fcee9bd7a1d70d4bbc2c1e610"
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
    "revision": "d95aa2d0d0efbdcf4be67174d6499db2"
  },
  {
    "url": "other/index.html",
    "revision": "98cb45838fe24768d5022e42b418dc60"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "ba160f704b589beb2d837e36fafbb5a9"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "cdb2aec0eb23d77a441d75ffadb581f9"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "e504870fdd6bea9ff1d3b774bd463181"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "ef184eb39dbed6e899f261aadea0066b"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "463134ea8809111d40b682e484423065"
  },
  {
    "url": "tag/index.html",
    "revision": "95ac370aef80e91214adc5ab127ad8b9"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "06f2173e50b1a1fd11d8a1237a7ca75e"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "edc57dbf4b09520882162a18879fb7ca"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "48778dcedb0c6f06e5f67da5d2eedb68"
  },
  {
    "url": "timeline/index.html",
    "revision": "afdae11df26d9b60f65e890d8beea75c"
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
