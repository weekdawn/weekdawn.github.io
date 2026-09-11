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
    "revision": "3dc0af7646477dc756ccf331941c8019"
  },
  {
    "url": "about/index.html",
    "revision": "cf9a307ac7b5fa5291bd3b2e8fc2cf63"
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
    "url": "assets/js/12.58c755a6.js",
    "revision": "6ad06a1b1e0be5acb7332db0ae3d9a55"
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
    "url": "assets/js/17.6f520fb8.js",
    "revision": "d1bb269eed52d898b7b6c6dc27af32e0"
  },
  {
    "url": "assets/js/18.e78b0603.js",
    "revision": "cea2e60b5d67075425a57de75dc8a758"
  },
  {
    "url": "assets/js/19.552ceca2.js",
    "revision": "7f449a1b2170b0ed0af217e690ed05bc"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.f9985f60.js",
    "revision": "b1289ba0fe0ae4c903969e08b3959022"
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
    "url": "assets/js/26.a2336104.js",
    "revision": "c1647868104ed1e783e582e4ad43f6bc"
  },
  {
    "url": "assets/js/27.4d5ca234.js",
    "revision": "7fc62cbdc9da0d7639cf2abe5acdacd1"
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
    "url": "assets/js/30.2d928835.js",
    "revision": "99931e8ebc83cb8ba0560ee99a540190"
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
    "url": "assets/js/app.fa9b305c.js",
    "revision": "dc8c89afdae1077422682200fed0288b"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "47999078d7ef7b4a7d43d62c2b161737"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "06231234436ac78ae7f8d1ff8f58258f"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "98faa885ef9cdabd49c38d9a95026ad1"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "df30f5a401c9ad131fb26bb63040fe62"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "d56b6e3ca06b4977750d434d5e22450b"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "ac756f8361c79d711969d4e75d13f323"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "6ae7d0b65f340e5d5255e64fb472e046"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "8a4e029f6964a3b83e9401f2e7745a74"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "cfde18520fa280bbb5c484b958108a41"
  },
  {
    "url": "categories/index.html",
    "revision": "2a7b3ea8f92f5681d9a10925770e58ff"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "75b19b4d8b82d69c056749312f507786"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "7623e8482bf51f1651404f2da7163199"
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
    "revision": "d7c603d08fba655761a53bb0b026b125"
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
    "revision": "5e321fb4203434ad4a7525fc5d180aea"
  },
  {
    "url": "other/index.html",
    "revision": "5ce8918029feb9fb9b64cab55c9057ad"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "3ebdc59bf477305af309ce17a93e3982"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "7d371fc26080718ede07ebf178d1a3b9"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "3f5fc609fce1477bc9673d775be814a8"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "bd154029f173c089b3a37715db930736"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "8b039f721b65ed4bdac31afcdb6e7b1b"
  },
  {
    "url": "tag/index.html",
    "revision": "dc8f27046d6748b31ac5e271560188c6"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "c9a59f8407f3788f100e448e8a207dfd"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "7853ce4a434042e2498ac02e484f2b76"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "4c8b98178095fa187935a23d062ccc68"
  },
  {
    "url": "timeline/index.html",
    "revision": "59d212fa330cafeb1e472cd1cd295d1e"
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
