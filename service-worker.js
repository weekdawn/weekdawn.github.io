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
    "revision": "a10619d45545db81a9ee1e2ee2205423"
  },
  {
    "url": "about/index.html",
    "revision": "2df0cc917dd3005b8d392d13424cbbf3"
  },
  {
    "url": "assets/css/0.styles.be7ba0c3.css",
    "revision": "b626c55c07e01eb53c144d0080dd7987"
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
    "url": "assets/js/11.4ede0c5d.js",
    "revision": "c1bcb664336c590cfb4e4332579e8563"
  },
  {
    "url": "assets/js/12.469a391a.js",
    "revision": "1757d620ceb00bf5d73260423b929e76"
  },
  {
    "url": "assets/js/13.4e86b06e.js",
    "revision": "8bfa718c361353c70436c95a3cb45744"
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
    "url": "assets/js/19.22693aa9.js",
    "revision": "ce4cad5decd6fe619f8af1ab1be5fec0"
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
    "url": "assets/js/27.b635c5d5.js",
    "revision": "14e1d2191f999dc22b505814ff7f951f"
  },
  {
    "url": "assets/js/28.9b340993.js",
    "revision": "70e28f8a06a9862eac33368ceded0c81"
  },
  {
    "url": "assets/js/29.7318686d.js",
    "revision": "c2a4a8174499d33744ed9b98aa2fe62d"
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
    "url": "assets/js/4.0f679bd4.js",
    "revision": "f68ee53301352d06a93285dfcb8dafb0"
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
    "url": "assets/js/app.595221d8.js",
    "revision": "1164b89dbb04f26b89371f5c9290060d"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "7a485c1c3711cee1f0569b42e50e6632"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "76426d298c5a066ff318a798ec148384"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "50c1aba92f87d7b39f499d849b39b7f1"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "566fbacb75d4cb50060515dc0373de83"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "4c7bca045d8e7ac8f4531727761b9d55"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "398c019c4de716277a91e455a2208638"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "1bb685c1ac33a8c065458aa505e64578"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "fd9ee85bd051498f1c7f140254410da3"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "de8626e0ae2288c34c557d2b2e98c1ef"
  },
  {
    "url": "categories/index.html",
    "revision": "54febccc8467acac6c69edb57c4f1270"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "3ff80a3611eb901a7a711a9eac4e896b"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "f8568ef20479a9ee83d319ffddaac7eb"
  },
  {
    "url": "files/loveEyes.js",
    "revision": "c1fda8f1201dbc52af6e3876200fee3d"
  },
  {
    "url": "hide/transferRecord.html",
    "revision": "0e815156ca7b19667d1804ff3c2c85af"
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
    "revision": "e4438a74d654f7551f0f89e9be1153de"
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
    "revision": "abe324aa60078045f3de74a05895d80b"
  },
  {
    "url": "other/index.html",
    "revision": "2bc2b966e8855cedd52c909d508f149e"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "3887d577e2d237c7d6fbe75c5fbaa8a5"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "7dc87816b1f4759bf2a5f25e402dd087"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "777a8d9fcd6d2d0c51d58368f0804038"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "d054dc31bbcdaed05356fb30c369eacf"
  },
  {
    "url": "tag/index.html",
    "revision": "4a5eeef1d0054a35168c05650b79a6ad"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "636d3c472bdfbae2b58f794f86bb3643"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "f5133f652059f28b1a95d52ded2acde4"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "d3ec079d9881c01fa8db487878d0b204"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a317cf8dd244ec37eec04a305817967"
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
