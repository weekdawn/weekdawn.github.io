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
    "revision": "266bda211618d7adaab21fbba16e6677"
  },
  {
    "url": "about/index.html",
    "revision": "67b137c6a401bd1ddd6d20fefb09891d"
  },
  {
    "url": "assets/css/0.styles.5886819d.css",
    "revision": "98e94bf8c8bf0d492a7c3ca00352c185"
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
    "url": "assets/js/12.2b4bbed1.js",
    "revision": "cabbe151b5c425b6024a8c7b512157f8"
  },
  {
    "url": "assets/js/13.485d936e.js",
    "revision": "5eabf19939764f9c8ac51c85dad26f18"
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
    "url": "assets/js/21.93d8d5b6.js",
    "revision": "f7b4ee58ffe06b98f926d96d31f59268"
  },
  {
    "url": "assets/js/22.0e199935.js",
    "revision": "c839293a833be912bcd51283d428c6cc"
  },
  {
    "url": "assets/js/23.013c2262.js",
    "revision": "dd7a6eba3c14479c3a63145208d9d29a"
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
    "url": "assets/js/26.6908bb86.js",
    "revision": "51355771bdb965efa788a7b98267a261"
  },
  {
    "url": "assets/js/27.4d0b9a82.js",
    "revision": "a7f17a5df87443dfbaf2d43314b10b8f"
  },
  {
    "url": "assets/js/28.cd4f90f2.js",
    "revision": "9d6e9ee0638f10f32d1fbb4cf5b1c506"
  },
  {
    "url": "assets/js/29.6adb4a9a.js",
    "revision": "070821f4e0a9fac5bbbdcc90d908dd07"
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
    "url": "assets/js/app.1e713d64.js",
    "revision": "718fdb22b553006d37a8c0bd861e6540"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "a2052ef21694ffb3b497e36eee9f0ea8"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "e65f44288fc7e77e12b36acd2fe54a49"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "03433a69c0d253f887eee03f38898d85"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "1bca8a2de6d633964139a77570f1bb67"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "fd03aaa06a31f161e0c419d9f80e7240"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "c83f1657e26956cff4936775a31e5d0e"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "3797ee531588f338d825353950023a63"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "e2e95a814a7d4ca37e0824971dd891f3"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "c2c9f832f55571ab4c950fde33e579e0"
  },
  {
    "url": "categories/index.html",
    "revision": "9799fd0e8f9b706599547538ffe000a9"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "3cd4158daf3e247b41995b9192021723"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "93f10e91af9808278be1b943422dbdb9"
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
    "revision": "ced295ceaf345c037e9387292a8d4e6e"
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
    "revision": "74ec8ecc4820c42305d85b470de1f3a9"
  },
  {
    "url": "other/index.html",
    "revision": "9a40c1cdb0771632c6fd80dcc88e5163"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "7915227b3280e79ffe32c3d0137ef68a"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "87cae2e67a6a4652e14eede5f314100a"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "ac9fcc09c9cc33b4f5eb2f92d3f2c471"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "a506a5a0588c073ec50d64b8b1083f08"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "488dc83ece2761bb438e3258abaaf61a"
  },
  {
    "url": "tag/index.html",
    "revision": "d25cfcfc8e4e829032debb14a967229b"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a2caa873461e5a81f7b0049ffef3c2af"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "5c4b11c44e9e6184f58138fb115c4044"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "7ad604ceabe8da1dab54fa5845d7e8b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "d213fc41bf5b97c032652d4823d16efc"
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
