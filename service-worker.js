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
    "revision": "0ac81f1c54afcf1fab1cb867647c28d2"
  },
  {
    "url": "about/index.html",
    "revision": "13218284b90783c290df7f8856023aae"
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
    "url": "assets/js/19.3d101391.js",
    "revision": "8dfc6b9c27b10f2bdfa8ad1e9fce564e"
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
    "url": "assets/js/26.6091edf1.js",
    "revision": "6804b4ecabae2fbf95f3e1a28a63b2dc"
  },
  {
    "url": "assets/js/27.9d81c412.js",
    "revision": "b60340e1f4c209af745189325ef826d7"
  },
  {
    "url": "assets/js/28.e1d01661.js",
    "revision": "50b5fa006e3cebc3dfccccef1b79a650"
  },
  {
    "url": "assets/js/29.fa79238c.js",
    "revision": "cb45bd4e4c0af5500dab02c97aa45594"
  },
  {
    "url": "assets/js/30.a552eb19.js",
    "revision": "de0cff45660d636fac05d0be9c91dfdf"
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
    "url": "assets/js/app.b7b9ddcd.js",
    "revision": "5a338621963951b2bc2c9de449285ac8"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "9d76e600df91c8d9045f8944e5e5bae4"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "01b47c1aedd9865769e837bf41eeefc0"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "bb9a8de925517c681b653fa4f1dc4beb"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "abbaf251567f71d561bfed52bda2ac62"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "5310c1c8763bf283610fef1bbe60434a"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "20128dd6db8581ab048a0606908e6185"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "5bcbe3a3217f40920959bcb99938773b"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "823283d12e3247a0a6b9ea3a9cc256ba"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "e7b4daca512275886c7b8b675dbdfcaf"
  },
  {
    "url": "categories/index.html",
    "revision": "f887fa840d99ac94ce1ad812ca51d8af"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "ef04128e42bfdb705e8dc13a222095f9"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "3a27292da37fdb3dde1571152234d571"
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
    "revision": "f9b65ccb7aa706ea670b6e9a0036e295"
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
    "revision": "4c55bd3cdf112056f1574842f3dadc75"
  },
  {
    "url": "other/index.html",
    "revision": "98b4b8bb780701fc55226979977c24a4"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "14c7c00ea58c017da3d93feb00fee53f"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "c8357e0eaf22acb7ec8f166c2816e52e"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "544123944bb2c7ef6cd7088fd9aa08e6"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "5d3ddfc9f5eed96277033bde70ff5595"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "de4c75ad5e3861cbbb053d1ffaad40f4"
  },
  {
    "url": "tag/index.html",
    "revision": "f18917775b0c128c5cad7f6cd884b6eb"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a284233184012c62e46813b1a1340104"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "2bf8db39fc8738aa29cb0f77b82877f3"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "c0258a2a600ec1a97c0df053fbcb8ef4"
  },
  {
    "url": "timeline/index.html",
    "revision": "54aa1e87e57bde4749bae293bf2cd1c6"
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
