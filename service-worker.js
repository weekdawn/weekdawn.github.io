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
    "revision": "c8471566dc7d171d77262d28458750cc"
  },
  {
    "url": "about/index.html",
    "revision": "ce45bcb62d8ed20ff6c2c10a9a6a428e"
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
    "url": "assets/js/16.539fface.js",
    "revision": "66bf6488373e9c8e21186ecfae8086b5"
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
    "url": "assets/js/19.80bf7c6c.js",
    "revision": "777298291d1220b760df8e084f621650"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.583fad31.js",
    "revision": "fc1f0598f5c61a8e5370b247002e1b1b"
  },
  {
    "url": "assets/js/21.18b18428.js",
    "revision": "3fd29729db872af0f62a6b604ade5528"
  },
  {
    "url": "assets/js/22.d4c4e023.js",
    "revision": "bcab1139b49a942c9b959fe8657c910f"
  },
  {
    "url": "assets/js/23.9f2b83bf.js",
    "revision": "fbec28842beeeb550a85e2f3e4c69848"
  },
  {
    "url": "assets/js/24.352daa49.js",
    "revision": "393ff204388b9d999818e434715d63ec"
  },
  {
    "url": "assets/js/25.cce2f703.js",
    "revision": "a11f000452e6221960d0181671596578"
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
    "url": "assets/js/29.6adb4a9a.js",
    "revision": "070821f4e0a9fac5bbbdcc90d908dd07"
  },
  {
    "url": "assets/js/30.2d928835.js",
    "revision": "99931e8ebc83cb8ba0560ee99a540190"
  },
  {
    "url": "assets/js/31.6942937f.js",
    "revision": "a9a6de38e3269b242a8b028f4429ef85"
  },
  {
    "url": "assets/js/32.e64467e4.js",
    "revision": "55ee0f9cfd7553fc7ab140d6819ddb68"
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
    "url": "assets/js/app.d985ac9e.js",
    "revision": "c9c0c02b99f11996489eabd9be20fa0a"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "b0ad3376c5edec15fae3fad14a98a001"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "d414f75f962c146f7253bd75ca234387"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "4f505105fcb36e9c056adf83760e96a3"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "3aae9e8aed58ab30ed97585f00e86f47"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "6465860b97bfa33273ff0bace2d0fd47"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "6af60535df1feaf1aaca365878a48d1f"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "889ec1abd815acdfb18f40d7e2e2b121"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "86c76b375e220b21b395fb47e3ef4d1b"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "658ba2b2679eda8d5fc745aaa6815d24"
  },
  {
    "url": "categories/index.html",
    "revision": "4defa6557f3052b86447fe1d6da07311"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "7b8397e61028b1cb46cac8f12a12c3e2"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "d8372cf78f1bfe025d37db5f6e1b4dc7"
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
    "revision": "eeb83cfd4561b95455ffaad3663ecd3a"
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
    "revision": "edf3d1f4f1088bb1df9c0c927257bfb5"
  },
  {
    "url": "other/index.html",
    "revision": "a42ccdffe7f5b201e01f0c59ed1be0af"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "86ff3305a984858ffb271f163f3f70b9"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "3cd8304c927c1cf54e8be80ba7a6fa76"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "2b1c5f15840a8f288359842718e3fd15"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "1e99190ec6a1d62806da615d9acdfc2e"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "5a6465b2b0a990b072f2cc9ee44e977a"
  },
  {
    "url": "tag/index.html",
    "revision": "d1253516a83b8c0e005b07f6420c0a4a"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "39d28e2df5cb34a2f7ab59c570dd76e8"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "5929d85987fbc634cb6124bc6e6e2fcd"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "a685c0ee69a4fa8a9d54fd17e9233076"
  },
  {
    "url": "timeline/index.html",
    "revision": "969907b706d452e354a7b93ac89f8f90"
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
