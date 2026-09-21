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
    "revision": "7815f3f1e8d0d1fab28c7434f0c92940"
  },
  {
    "url": "about/index.html",
    "revision": "db500d6cf3fe949dea21fb618a61bbbc"
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
    "url": "assets/js/18.077751ff.js",
    "revision": "33f3e962aef35626bbfd45929f17b6ef"
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
    "url": "assets/js/21.15788d9b.js",
    "revision": "f8f9c9e7118c35e72bb76e535688d001"
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
    "url": "assets/js/24.cfe86327.js",
    "revision": "4f87839d12c5e51e95793719c63161af"
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
    "url": "assets/js/27.b635c5d5.js",
    "revision": "14e1d2191f999dc22b505814ff7f951f"
  },
  {
    "url": "assets/js/28.9b340993.js",
    "revision": "70e28f8a06a9862eac33368ceded0c81"
  },
  {
    "url": "assets/js/29.d5f6a9a1.js",
    "revision": "f967fdc464e525f86de5c790e3e81886"
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
    "url": "assets/js/app.9e7009b0.js",
    "revision": "b70dbc7071edad7c25cabfe085c2569f"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "da6f65f6d86864f7e6832b5e504da06f"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "f65b69a5aaa2de1e48e9e23ca2863538"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "bf2e5e2ead8fa6246406ddd402b54179"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "c01f3bf156f2e037b25f4b244c1fb408"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "bcbcd8229b3aec3715e5b9723fbb9b50"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "ff2f2dfe40436c4106bc091eab8e6811"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "f1224aaa345a5afb5c410f615e1f1c97"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "cc5384b4475c8e09baa5274256a30eca"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "8c5ca5a9ac20b136bdd628a13abbdbe3"
  },
  {
    "url": "categories/index.html",
    "revision": "3b9e81752f066847db636a15a87f4cf8"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "487ab2b71ef2d13f1c1b331806dafa86"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "73d6eeeed25dcca6a7345f5dae2cfebc"
  },
  {
    "url": "files/loveEyes.js",
    "revision": "c1fda8f1201dbc52af6e3876200fee3d"
  },
  {
    "url": "hide/transferRecord.html",
    "revision": "bbd0c0adfb4cdf824c520a6b85eafb19"
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
    "revision": "e5f99d240dc954b2bad4e22020b43d50"
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
    "revision": "ef774514efedd2f3ef366a9baa612ec1"
  },
  {
    "url": "other/index.html",
    "revision": "b3cfa71903b10a32afe270d3506f0547"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "697a602fcdb4e1e30d9638ebd0143199"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "ce28f7580b1e7425029251ebd2fed265"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "d2393eb1b8b405c1bc8318cc115db71c"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "6a9b785491b1a37cf1ae814053ee1fc1"
  },
  {
    "url": "tag/index.html",
    "revision": "84806b1676705e9ec854c4c7aa6a6d57"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "1d315a782ed757804e7f27e0173b6b19"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "5ef8964db67af422f6b95f411cff6755"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "c3eed1c3edd23abd3125b8d6d2aab840"
  },
  {
    "url": "timeline/index.html",
    "revision": "dcf18f7a2d36df40407e96ad591602df"
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
