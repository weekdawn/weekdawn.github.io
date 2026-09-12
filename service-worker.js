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
    "revision": "51687388ce0bc3bea7cd316df65a4297"
  },
  {
    "url": "about/index.html",
    "revision": "8cb0008f882491a014846ee35aa28928"
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
    "url": "assets/js/19.bc0f0242.js",
    "revision": "3319896dc1d76c25b99839e79b148634"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.85a672f8.js",
    "revision": "b3a3cf0b539eb6f942fa8174e5190a69"
  },
  {
    "url": "assets/js/21.b1fc63a6.js",
    "revision": "f75ec84ab4c96bea435f4ddaa2bfc817"
  },
  {
    "url": "assets/js/22.72948f9a.js",
    "revision": "869ebf425325eced8e0c106ebd81879c"
  },
  {
    "url": "assets/js/23.cee0e32e.js",
    "revision": "dd46d121ec608d4c60786c63352264f4"
  },
  {
    "url": "assets/js/24.a576fb13.js",
    "revision": "32998599ee9c6f6cc2031c3fd6beeb53"
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
    "url": "assets/js/27.99f92777.js",
    "revision": "af074c3e8ea8dcc441ec00f3ff8144da"
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
    "url": "assets/js/30.ba0d5cad.js",
    "revision": "93ce5e7505508cef8744caed39adf11e"
  },
  {
    "url": "assets/js/31.32bbc164.js",
    "revision": "df4452c988f23ce89216e3514c9473ea"
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
    "url": "assets/js/app.782900ba.js",
    "revision": "9e7280a8b7be7bc127b1b9187da7c8d8"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "662c487682466733facef21e4f39e101"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "b3b9c6a100bec71cb73fca5c37e14099"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "faea536b736ebd40a82e022a9cb281b2"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "a03272bc11ea008dca47d92196acaf1a"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "2d490b5cb7059fdc8a0c0c8a47206fe4"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "4b1f13b3c5c01d937663972232d7ed7d"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "f7c247ad40a705f34c8dd6a7439dadac"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "8deed93749028ce8a1d773a432b767ce"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "2ff7e4723c8928cff7c3a3320c7292ef"
  },
  {
    "url": "categories/index.html",
    "revision": "b13c792a9acc553fd18787d3aacb54af"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "3750faea080607f02cf3a9cd84659298"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "37b3ef9284505c011fc5b29e2031a60f"
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
    "revision": "fe50b04d95a6067d17fd74d10333f813"
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
    "revision": "96921076a662bc840f7f4feb7d44746c"
  },
  {
    "url": "other/index.html",
    "revision": "ea3a6e53833cc0504bf59ef775889f80"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "fe960c19397579b7c5741a5642795bd2"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "a8ef005955642dc3be3c82a9a2257648"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "6dbed5c3d2b66653936eadaa0415230d"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "efc15a593ad6a52b17f20ff0dd88dea8"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "8b79cd9e82010146c06ea130a6e8b686"
  },
  {
    "url": "tag/index.html",
    "revision": "d35add89e3f95f23e01636cb4201e62c"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "20031efa787e138f818059eb352c49ed"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "3dac5a9ac2974524d3c3ce935a0c4021"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "c24cf436fe8bcc1583fa548f8e7c0972"
  },
  {
    "url": "timeline/index.html",
    "revision": "57eae63ce63e3d055246a174773aded1"
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
