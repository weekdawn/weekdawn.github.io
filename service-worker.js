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
    "revision": "167feb71254fd4df67f71a8dd143f1bc"
  },
  {
    "url": "about/index.html",
    "revision": "57a347a111762328cbd6dd92767da38b"
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
    "url": "assets/js/16.84dc6219.js",
    "revision": "3d8f1695b0b6f4816057bf89b7172eff"
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
    "url": "assets/js/19.f7276eef.js",
    "revision": "b830c09fdfc06764a7d90a3f52e6b519"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.c70592a2.js",
    "revision": "c5970b170a52f551230599ae1a48bbf3"
  },
  {
    "url": "assets/js/21.e871b16b.js",
    "revision": "d1a3a5d1c85789aa6178c55df7189c8b"
  },
  {
    "url": "assets/js/22.98b1ba2f.js",
    "revision": "f865258c48a94673adccb00200e41741"
  },
  {
    "url": "assets/js/23.cee0e32e.js",
    "revision": "dd46d121ec608d4c60786c63352264f4"
  },
  {
    "url": "assets/js/24.352daa49.js",
    "revision": "393ff204388b9d999818e434715d63ec"
  },
  {
    "url": "assets/js/25.8f1616d8.js",
    "revision": "37679574b5f73302ce8144f495f55ecf"
  },
  {
    "url": "assets/js/26.c7a571fe.js",
    "revision": "8f5f867ec3e36c6a3e0eb2f0d06f061d"
  },
  {
    "url": "assets/js/27.e557936c.js",
    "revision": "80f92549c4cca9ff427400c81664c174"
  },
  {
    "url": "assets/js/28.aa39afa6.js",
    "revision": "3e7277c1a65a5bad8f277157798ad43f"
  },
  {
    "url": "assets/js/29.099cef97.js",
    "revision": "fba4abab831335d97be114c8697d6fb7"
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
    "url": "assets/js/app.1875eb7d.js",
    "revision": "40814ffe63564d118f6bf7e72fdcbd27"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "71f6fc4595c34f6966d9cc1804572f04"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "cddb9a54468295b7946b8d906b0459bb"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "fa42ab53467a75fa9cc2c903206e6062"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "dfb103c11eade0b34fb2452fd4e34150"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "a850646105db45fee31aa36a045fcea3"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "dff17d9a720048e2162cf69565d44f71"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "f91a16d558ad43214043dd188e860c69"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "6a1813b99be21bbb5c212de01e3b21e7"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "edaa60b005b00cf57ab8842f6f1b1c49"
  },
  {
    "url": "categories/index.html",
    "revision": "05737b0049c7b7c44523cfbf3add89aa"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "d2b1cfaabbc1efaf69b38a5b5f32bad0"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "43182588d44c6985204ac61847e3af84"
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
    "revision": "8c02dd2afd5b8f24adffb8bbcc9be84e"
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
    "revision": "37d6a268c715e18316d06cc74d65fa68"
  },
  {
    "url": "other/index.html",
    "revision": "8bba378ac8c0fb6cc087bc5f1f61fdfc"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "e0463ee9ad04afc0480f8ec702c94cdc"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "01988f22fc2aafcf5b2464ce2d7d123d"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "12ea7674331298da5ef1697c7a916b4f"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "393b54621200868c2adaf4eeb18b987d"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "b2c7ee80acb31484475eaac61ef0e4b5"
  },
  {
    "url": "tag/index.html",
    "revision": "78b162b4347495d0f1589b158c59864b"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "9878a4950c1e4b3de6b385bd1b0954cc"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "0a6dbd14fba9cf2d99bc4c234b6a266e"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "d6c62c87dc0438632e31867b79a026fa"
  },
  {
    "url": "timeline/index.html",
    "revision": "9931b55a92b21cc270f50f23f0dd365c"
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
