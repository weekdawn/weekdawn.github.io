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
    "revision": "94a68ff45ba7737cb6e0b02e123aea76"
  },
  {
    "url": "about/index.html",
    "revision": "dc5d9c2c59291dec81362882a79aeed2"
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
    "url": "assets/js/13.9014b8ca.js",
    "revision": "99bde2af7b066dc72eac8a3e95291909"
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
    "url": "assets/js/17.35ed3262.js",
    "revision": "c7a33c370302cb80b6e5f8f7203a7b3b"
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
    "url": "assets/js/20.fda3c457.js",
    "revision": "2662e755218d3430111ed0b1e67ca996"
  },
  {
    "url": "assets/js/21.5a3a1309.js",
    "revision": "0c2ea04d1e5616896cfe301fc3f44f91"
  },
  {
    "url": "assets/js/22.d4c4e023.js",
    "revision": "bcab1139b49a942c9b959fe8657c910f"
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
    "url": "assets/js/26.946bf028.js",
    "revision": "3d0cb0cc829f4f06af5929ea0efccf5e"
  },
  {
    "url": "assets/js/27.b635c5d5.js",
    "revision": "14e1d2191f999dc22b505814ff7f951f"
  },
  {
    "url": "assets/js/28.c8e1365b.js",
    "revision": "fd6079917835c733fcd91589ab0e467d"
  },
  {
    "url": "assets/js/29.9009efe0.js",
    "revision": "9b5200c37b19bdab04d6de8d84d968b4"
  },
  {
    "url": "assets/js/30.2d928835.js",
    "revision": "99931e8ebc83cb8ba0560ee99a540190"
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
    "url": "assets/js/app.7e4736c6.js",
    "revision": "1de41d156fcae8881254a08277e18f15"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "5854649fe86191d0079b8aaddbb81455"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "7377e700f0ea64f21c5ce48e18574e9a"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "c6cfa18cbfed621e1afd175433b71e49"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "c34b930882d7506de49bb297886e2c5c"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "5a23f44786287390bc83b09efcb727ac"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "d7225919cce0bf2f838ee4b8af2e7e14"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "99ac6f37a43c8a366d11aa64a09b36af"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "e276ea30213a407d338610b92b2cc19d"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "13d1193b4447a163b544485e5dd8da6b"
  },
  {
    "url": "categories/index.html",
    "revision": "69f2f6d0d8cdfa04816fc58eca569776"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "5e65b39608728cacc9f86afafdb67a17"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "96007f895b81251e4186a22012880a4f"
  },
  {
    "url": "files/loveEyes.js",
    "revision": "c1fda8f1201dbc52af6e3876200fee3d"
  },
  {
    "url": "hide/transferRecord.html",
    "revision": "882916058a9a04b1103a2d083c7213a7"
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
    "revision": "c79eb7e96542329613d4a5c6a53a2e60"
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
    "revision": "5052110d04a317885705801cb4e2fbdf"
  },
  {
    "url": "other/index.html",
    "revision": "cfeba130b9c5c365378639140752ebbe"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "dfe10af7cd3fc64f3d68e94d8bddca4d"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "235827ca77ec134d803afd39f458932f"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "f0704ca32ad1423b7009606b9a214fe7"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "c11ec98a45225c9758a907c513800a47"
  },
  {
    "url": "tag/index.html",
    "revision": "768f1b86c01dce4cb06dced8245e6c04"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "aaf9493fdab8e4fae87cb4f827d8457d"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "6fb1456f745dc0b67f71d5e6e80c1d07"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "74e73de3f47edee7b886a63813c1ebaf"
  },
  {
    "url": "timeline/index.html",
    "revision": "6b42afadc544c3b8b609e47663f60776"
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
