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
    "revision": "b16dceb7920460b309d38d9addd92084"
  },
  {
    "url": "about/index.html",
    "revision": "2e51151aef15c7dd74706778a7b150be"
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
    "url": "assets/js/16.35993ef9.js",
    "revision": "97a5b5d0a5dea757bcdf3b923f4d87b0"
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
    "url": "assets/js/19.4dde093f.js",
    "revision": "46f47d145e9e510b37ca65c5cf958e12"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.0621ae0b.js",
    "revision": "179a9e494c34e2b16c5659c9df11da2b"
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
    "url": "assets/js/24.352daa49.js",
    "revision": "393ff204388b9d999818e434715d63ec"
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
    "url": "assets/js/27.4d0b9a82.js",
    "revision": "a7f17a5df87443dfbaf2d43314b10b8f"
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
    "url": "assets/js/app.58961ca6.js",
    "revision": "951309744da6774f86ccc5c6833ed5b4"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "4d0f7ec4796c237b054e33c70b7a0684"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "bb113f40a07bc5232b34b1cf91a6f200"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "2ac3ed518b57427815d8a90b531f3d13"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "e3d8d83883d82ca18073348854076993"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "186faf9ff33343a4f4d361e7ac0e85a6"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "6c880586119fb048d1f3ff095e2e7228"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "9cd7bfac7c16f222d940aa64149e8cb5"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "835d8ab465b07dea84ba8330b7a6fe17"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "118f443be61298d6fe4e1b2a41fb04cf"
  },
  {
    "url": "categories/index.html",
    "revision": "89ce235afba7f7d9cbfc0724d2441cb4"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "3d00406d6018971648bc29f3614f50cd"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "6cf351b00866d1c90edcd40e168e1eb1"
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
    "revision": "d3e293dd1cfe85aada1a7961684d5fef"
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
    "revision": "9fa687086d8a6eecf3374780e931877e"
  },
  {
    "url": "other/index.html",
    "revision": "3f3de5dfb99e724c7da05188b54e3198"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "d86a5abdda0092f3269f9c37eef3b406"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "aec8d4851aa7b00b51e3e20f54c54854"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "5ea7e72d876791d131425856d0b73ccb"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "691be5d0985328bd5877b1957650d84a"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "2820dee23809191a2db2beef93cc181e"
  },
  {
    "url": "tag/index.html",
    "revision": "c3430609a9563b01d2fc08dfa47f4c15"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a3fa82a5f93eb5e00c32786d2c45736d"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "d448c10acf958e5ce64e7499f9808085"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "2994a2551413474a0153f9db1b5c1ca0"
  },
  {
    "url": "timeline/index.html",
    "revision": "9acb0bd61702cedc171edd496dd43f81"
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
