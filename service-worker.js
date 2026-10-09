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
    "revision": "6d2f81fe126d140f1d8b1e775352b0b9"
  },
  {
    "url": "about/index.html",
    "revision": "8986eb8923190ec0cd0e9188ddccfc39"
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
    "url": "assets/js/16.61ab37e5.js",
    "revision": "2593096818e8cb21f16cbcea1f0cf072"
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
    "url": "assets/js/20.3bd2bbda.js",
    "revision": "71547470cf77e2af3cb926b72be1d956"
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
    "url": "assets/js/23.7de8ac50.js",
    "revision": "b827f63dee4773fa99fb71a524dfdf65"
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
    "url": "assets/js/26.42386a3b.js",
    "revision": "261f432baf89807c968542b484888db7"
  },
  {
    "url": "assets/js/27.fe6f1646.js",
    "revision": "7181e5e91302e164cc331cc55c1654ce"
  },
  {
    "url": "assets/js/28.9b340993.js",
    "revision": "70e28f8a06a9862eac33368ceded0c81"
  },
  {
    "url": "assets/js/29.77b0353f.js",
    "revision": "d11a5a6c78e7c76d9e48a9f2b9061c61"
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
    "url": "assets/js/app.cb1a68ca.js",
    "revision": "e91dd5132887f0d1b5a50de486a0ca58"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "f5ec47513333f94d13c5691c2f6423e8"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "6abbd96751961abd0ab2d96bab079481"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "f91874d3f89dc72659c8477c5be417dd"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "294252de158f064a4f2e906379c76b20"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "2670cf2fbfc43c44b718519481a6f9d7"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "c12bbc8c33c42334293e15ca640ca63b"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "c8314a17ce12eab3dcc853e9df22aa69"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "42143b693fe3617d40eab7a059aad0ce"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "890ae7441c09e7fe92e571f0c6376bbe"
  },
  {
    "url": "categories/index.html",
    "revision": "01ee656d354f19d36ec4bb6c08263bc4"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "a5b86d60998879b2ef6088f255e9b784"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "b4b6d71127c6721b3162460649ba12be"
  },
  {
    "url": "files/loveEyes.js",
    "revision": "c1fda8f1201dbc52af6e3876200fee3d"
  },
  {
    "url": "hide/transferRecord.html",
    "revision": "5cb0cf39c12861254f6c0a1d35b83898"
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
    "revision": "23fa22b05b5d8e99cbf96c1b53bf8482"
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
    "revision": "5e2745e53fafc03f85a47ffacfa1049a"
  },
  {
    "url": "other/index.html",
    "revision": "109701244f1c527f0a62d5654db512a2"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "b0d05fb5be7adbc87b1290da384a9ae8"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "6c66ae42afff88e4b6a583aa7b77c6fb"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "585e71775e672755f7aeb1e404d3919a"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "8c848557bd90e8208955249207f1a250"
  },
  {
    "url": "tag/index.html",
    "revision": "ddb955828515fa8f8dd74e2da4e3be8c"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a37396a8661ee488b04fb2a1aaf2e287"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "c54db21ad2798f58e23df3b7fdeeb13d"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "0babb093fc350f8b585f8beaedd75fe2"
  },
  {
    "url": "timeline/index.html",
    "revision": "eef00caf9cb3e2e5edc650fdfc27b6e5"
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
