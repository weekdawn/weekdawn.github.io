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
    "revision": "87c52da2abd03e2b89722fc3baa5e4cd"
  },
  {
    "url": "about/index.html",
    "revision": "66355c81b434519cec647d4b7b560823"
  },
  {
    "url": "assets/css/0.styles.64ba4f13.css",
    "revision": "65541bc745da77f3425badf68814b912"
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
    "url": "assets/js/1.cbc67a13.js",
    "revision": "8bb02878717edf3b0b0d7279133a1396"
  },
  {
    "url": "assets/js/10.8807efad.js",
    "revision": "60a5f661bd1a96ace867cdbe35ecd019"
  },
  {
    "url": "assets/js/11.dceaf9fa.js",
    "revision": "2686bab0d356667cc0aa6ec9a94302c0"
  },
  {
    "url": "assets/js/12.6a4ad4f1.js",
    "revision": "6cfdb2e82e43a4d9b99881c7609a7b4f"
  },
  {
    "url": "assets/js/13.dfa96595.js",
    "revision": "abf5e63726345486f18b0e50a2358a79"
  },
  {
    "url": "assets/js/14.ffa8d54e.js",
    "revision": "56a853e217c49d04e3a196a015024788"
  },
  {
    "url": "assets/js/15.e3c6efc2.js",
    "revision": "edda1c2a3af56956545ff4ee1a7259c4"
  },
  {
    "url": "assets/js/16.523be55c.js",
    "revision": "0b3b0c1c7006918c5432d5c09eb62ad7"
  },
  {
    "url": "assets/js/17.b1060eed.js",
    "revision": "3b2451117621a65005b5c9649f1d246d"
  },
  {
    "url": "assets/js/18.9c0f8542.js",
    "revision": "8eacd36775db491ed5f83d19d818483d"
  },
  {
    "url": "assets/js/19.2d833336.js",
    "revision": "c7466c6bf108ebf4d80f0d4a47f54956"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.1039480f.js",
    "revision": "03185ae4fae79685a51424b245961a76"
  },
  {
    "url": "assets/js/21.1cc8e24b.js",
    "revision": "0313db0714aedc04a7d9be2b5a1c863d"
  },
  {
    "url": "assets/js/22.09c1d6fd.js",
    "revision": "72685f9162abf1d7e5b542efb599fd50"
  },
  {
    "url": "assets/js/23.58a4a3e1.js",
    "revision": "2902aeb0524e099b6425d3b497f26901"
  },
  {
    "url": "assets/js/24.a7921347.js",
    "revision": "12cdc458d7ea07a47bfecefb9e2d0e14"
  },
  {
    "url": "assets/js/25.baa99f1b.js",
    "revision": "e10ba19703c0ee07b00651f879f0efaa"
  },
  {
    "url": "assets/js/26.34c1fcac.js",
    "revision": "6d4adbdcef7f621d9455cd105f37c936"
  },
  {
    "url": "assets/js/27.367d016f.js",
    "revision": "138b0571644eb9eca5bbfb6d1e2f3c92"
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
    "url": "assets/js/30.47116707.js",
    "revision": "787d08698d5ebd8d366da3c540c402ff"
  },
  {
    "url": "assets/js/31.0133bef7.js",
    "revision": "edef83b08b6facef155a0e1c3529d5bc"
  },
  {
    "url": "assets/js/32.c66c6005.js",
    "revision": "db1e49709a53a4a87e09e24340c7b64b"
  },
  {
    "url": "assets/js/33.7813b181.js",
    "revision": "4cc4b6ebf5d9e4961716e5d336d3cc26"
  },
  {
    "url": "assets/js/34.986ade6c.js",
    "revision": "a26010bfe845ca955f988b47d6a3dd62"
  },
  {
    "url": "assets/js/4.9e148f36.js",
    "revision": "5be3e59b3fa87111fff40805c2e903d4"
  },
  {
    "url": "assets/js/5.68f66dc2.js",
    "revision": "3505ab80e2dc44dc03cebdd354d546a0"
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
    "url": "assets/js/app.352b8dff.js",
    "revision": "a264aaacf1bfd5f7dcda4e7e295ed91e"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "af98403ca59ec54ae21fdf90264eb604"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "ee7a986ac148514b183aa8297b580034"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "c56620695525756c06ca3f6ffc1b814e"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "2d83e2b326a89230981b0adfcd904f88"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "8912a8b472ca8dfde3fcf948a27dfee3"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "25774a84284185fbc83e58961a61dfc2"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "4be578a9504b58cc149880479ffdb8b8"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "7b27d03868b77fbd449db9c81274d40c"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "ac21bbc16764b0f131d25b52693bfd2b"
  },
  {
    "url": "categories/index.html",
    "revision": "80d5877836b0423df0426c0cb995f260"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "2982ce9080d92ca57b9c80b56d3dfd72"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "9e4219f4b6816ee9bdeee05856bc8254"
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
    "revision": "9aa347ac5aca0628a86b895d285e9bfc"
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
    "revision": "843076b8688282c2b3beb5f2fa37fc6a"
  },
  {
    "url": "other/index.html",
    "revision": "816b3e8406149e3ab3ce7093beac8df2"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "24f8330f6d1ab69a1f2bd42a10aef350"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "3e07bda62e0cb9b4a17e8cf9b72c6814"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "f35b06af5f06991d7c2557e77e2ad4f0"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "88136bfecc993a462fec8bd9f9a5ac7b"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "3bd96541db59536c3ed3d6777dee7532"
  },
  {
    "url": "tag/index.html",
    "revision": "6de55166d17887f1a1ca91771636a1cd"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "6d8c87ad4cf6c7b41fd8386ae37cc568"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "bfafee6c635921d632989b3656e6e273"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "c1026edbbcb25d16378e6d295210ca34"
  },
  {
    "url": "timeline/index.html",
    "revision": "a10e7fa194666a389c903175d42c95e8"
  },
  {
    "url": "view/heart.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/index.html",
    "revision": "6ed05e37a233b3e381c14549c06a2b75"
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
