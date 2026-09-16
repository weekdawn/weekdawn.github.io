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
    "revision": "cd0b695df3aeb8a2b398675622f5e87a"
  },
  {
    "url": "about/index.html",
    "revision": "f54974bd57fd1402a51197a4b6b998ff"
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
    "url": "assets/js/18.6356afd0.js",
    "revision": "abca207f46eb529486787b4f8378c702"
  },
  {
    "url": "assets/js/19.4cfee2eb.js",
    "revision": "7867a0359af2cf39f450d5c661e752ba"
  },
  {
    "url": "assets/js/2.7f7f97d7.js",
    "revision": "b01b93008326eced1430e19447e32639"
  },
  {
    "url": "assets/js/20.9d4708dd.js",
    "revision": "e72d50d421c8ba00cdbd1c87bd535c9c"
  },
  {
    "url": "assets/js/21.15788d9b.js",
    "revision": "f8f9c9e7118c35e72bb76e535688d001"
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
    "url": "assets/js/30.f6bcf79d.js",
    "revision": "92929e3f36d0e6b20c35183747bcc63d"
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
    "url": "assets/js/app.fa832d37.js",
    "revision": "ec47d747e074be2111823bd74170b3d7"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "39ca6716498cb3d0f0313790a93e3adb"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "1a4ac5600470cabff7fc6551984c5bde"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "eee0169085f3afb10335722cfe5049ab"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "c29feced9ae9a348c3701c2e3a6961ec"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "efa8af62e43d052f3f9396a3eea688f5"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "53dd8759f5e4414c393f732f3e19d81a"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "84171bfca90c322ac4280571fa0e317b"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "79fa71d5cfeec826c8bcbbe2ab700d0f"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "9248912e83881b7f2a13856d4f408f31"
  },
  {
    "url": "categories/index.html",
    "revision": "3ce6382b864b84e83ecdd244f56e216e"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "0930835ecb12cb4311a9788f77434037"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "d144dfadb408fda309fc2e9478ad8e23"
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
    "revision": "9d0d1c9446bd007e9b0c081cce3e47db"
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
    "revision": "ea88eec9c8862cba20443dcd4f18dde0"
  },
  {
    "url": "other/index.html",
    "revision": "472815e2629865b71abde8db4cf5c00b"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "dc011421dc233f154cbbc387a39e5576"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "c69dbb6e5d23bfd17f3f0366aad36bb4"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "fd428aa64b58bdf0dfbcb35b8bd142ff"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "0d19a1216a069204804a7b3fff0b2265"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "d292e5796bac261802f380ca0a3dcd98"
  },
  {
    "url": "tag/index.html",
    "revision": "0f4ff3b643df74b71bcc3430572665da"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a2ebc5f42c26d336378dcd5aebbd7a07"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "a5c030e9428eec2319ef6784c3fece46"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "a28dbd28dc4f1e81ea16f3b5ddc16308"
  },
  {
    "url": "timeline/index.html",
    "revision": "a0b435b466ce938338c98a3d05e80981"
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
