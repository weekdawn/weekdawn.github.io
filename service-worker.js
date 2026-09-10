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
    "revision": "83ddd1d43876f2e155fddf5c5544faba"
  },
  {
    "url": "about/index.html",
    "revision": "d595f8de3832c79766fc02a31fe26c32"
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
    "url": "assets/js/18.e78b0603.js",
    "revision": "cea2e60b5d67075425a57de75dc8a758"
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
    "url": "assets/js/20.f9985f60.js",
    "revision": "b1289ba0fe0ae4c903969e08b3959022"
  },
  {
    "url": "assets/js/21.e871b16b.js",
    "revision": "d1a3a5d1c85789aa6178c55df7189c8b"
  },
  {
    "url": "assets/js/22.6e19c8ff.js",
    "revision": "311b589f5375a2f0259ff8ca49a35459"
  },
  {
    "url": "assets/js/23.9f2b83bf.js",
    "revision": "fbec28842beeeb550a85e2f3e4c69848"
  },
  {
    "url": "assets/js/24.a7921347.js",
    "revision": "12cdc458d7ea07a47bfecefb9e2d0e14"
  },
  {
    "url": "assets/js/25.262c1f3d.js",
    "revision": "f344c07ec4845b0c381888e546d06857"
  },
  {
    "url": "assets/js/26.24ffc69c.js",
    "revision": "2ef628e36459f03e111f295427e4ef31"
  },
  {
    "url": "assets/js/27.4d5ca234.js",
    "revision": "7fc62cbdc9da0d7639cf2abe5acdacd1"
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
    "url": "assets/js/30.2d928835.js",
    "revision": "99931e8ebc83cb8ba0560ee99a540190"
  },
  {
    "url": "assets/js/31.6942937f.js",
    "revision": "a9a6de38e3269b242a8b028f4429ef85"
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
    "url": "assets/js/app.7a152869.js",
    "revision": "3eb405e3b1281bbc69ea4d082c7c41e6"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "00a7e8d650fe364260e1900e2cc84943"
  },
  {
    "url": "bookmarks/常用/claude code配置.html",
    "revision": "76cd32f8d23f70dccdd32ec61a078d70"
  },
  {
    "url": "bookmarks/常用/MacOs.html",
    "revision": "d1c923e83809d40fdac399c55e530326"
  },
  {
    "url": "bookmarks/常用/小鹤双拼.html",
    "revision": "0be262f6f6ef0a68ed7ef18df7c60b3a"
  },
  {
    "url": "bookmarks/常用/工具集.html",
    "revision": "b2e6a58a98bd4bb3646551c9dfb787fc"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "090f4c6f21c7db058bb37ee34543adaa"
  },
  {
    "url": "bookmarks/常用/开发资源库.html",
    "revision": "a5b8e0c8e4dcc864c1da0debe566752b"
  },
  {
    "url": "bookmarks/常用/护眼模式.html",
    "revision": "8aa51760ebd288bd106a735ef0b8f0ed"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "d9a757b6b07ce37ee6f5cfbc6535caa9"
  },
  {
    "url": "categories/index.html",
    "revision": "407a6f7f00d928ab86ff91208d302db0"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "7884d468667a90575ed6974b62350d99"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "d6df712ad698df07b1114e77e338c57a"
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
    "revision": "248582fcc32a5de7e656428c07e3ddb2"
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
    "revision": "e01346de283018d0934dada5ded7b400"
  },
  {
    "url": "other/index.html",
    "revision": "a44c5b8121b06b96110f1281fa3878ef"
  },
  {
    "url": "other/transferRecord.html",
    "revision": "8d4af38f97e2e3d5226bccd1d74b1c85"
  },
  {
    "url": "other/算法学习笔记.html",
    "revision": "6334971abac3d5227d41d36b4ef8ebd5"
  },
  {
    "url": "other/面试问题总结.html",
    "revision": "d5f5665db892f791ee7cf33eeed37af3"
  },
  {
    "url": "other/面试问题解答.html",
    "revision": "3708de10ab76203775bc45d616640eaf"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "3aa830ea622bebf23588aa4c5efb6830"
  },
  {
    "url": "tag/index.html",
    "revision": "27bf397f47e161fdcd7c4f5d36cd8f84"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "60f8fba29bbbacfb599118220d916aa3"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "a9294a5e266429373e7136f29bb720ba"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "fd4b0855d38a76ff5d72bfc583be1b84"
  },
  {
    "url": "timeline/index.html",
    "revision": "e65e8778d895210b59a90b3595f6952a"
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
