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
    "revision": "ce8cabb6757fecf34cc3d0fa5fb64a35"
  },
  {
    "url": "about/index.html",
    "revision": "37461f68ff00ca48a109b8b90ed15b72"
  },
  {
    "url": "assets/css/0.styles.bf298c27.css",
    "revision": "82f884f1ede5eebf248b3559a2d3d89b"
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
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
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
    "url": "assets/js/1.d5207ac6.js",
    "revision": "28ed365d50b4f01153ba9985256f7083"
  },
  {
    "url": "assets/js/10.09793738.js",
    "revision": "4370ec56b15e3a54f8716d2e3a940b03"
  },
  {
    "url": "assets/js/100.444f9646.js",
    "revision": "b2510bedd2b5f0b63c8040f92b8bdae2"
  },
  {
    "url": "assets/js/101.ead97877.js",
    "revision": "aad6bbd4f9865c2195a2fbd20f5ff6fb"
  },
  {
    "url": "assets/js/102.cde22e10.js",
    "revision": "e290c4fce4c4e14655b7e7605451b81a"
  },
  {
    "url": "assets/js/103.f1fa5800.js",
    "revision": "d7790fdbcfdbb55077a6c2828654039e"
  },
  {
    "url": "assets/js/104.77b84350.js",
    "revision": "5f802155799cac22aca660076c4abdd5"
  },
  {
    "url": "assets/js/105.49fab090.js",
    "revision": "a17c6f94a8d346f99bd15f1102ee8365"
  },
  {
    "url": "assets/js/106.32aff279.js",
    "revision": "afd5cab0bb1ddddf8924c52279319388"
  },
  {
    "url": "assets/js/107.9af2b272.js",
    "revision": "c587cc1a50f8026775bd6842f748b560"
  },
  {
    "url": "assets/js/108.49f3e15c.js",
    "revision": "663749f358a816ae4a7a0823c74bb5f1"
  },
  {
    "url": "assets/js/109.113c43c5.js",
    "revision": "efb6f51412efc9f9072a445f5a1bfb17"
  },
  {
    "url": "assets/js/11.05d9eec5.js",
    "revision": "83afc1c2c5053090f4b3237ed70d995b"
  },
  {
    "url": "assets/js/110.f54d17f9.js",
    "revision": "47e8d7de2a2522313cfe8b2975968da8"
  },
  {
    "url": "assets/js/111.4c968924.js",
    "revision": "fd450bdd924bdb5b6c4760f782c39e20"
  },
  {
    "url": "assets/js/112.1b470f92.js",
    "revision": "26e7fa30dbb61dfd0a01101b403374e9"
  },
  {
    "url": "assets/js/113.6b08ba1b.js",
    "revision": "e4158a955ce0ecceb19eaa0de812cfbd"
  },
  {
    "url": "assets/js/114.a6cccc9e.js",
    "revision": "519d1c831b0d03c88c33657fd4891768"
  },
  {
    "url": "assets/js/115.8eabf3fa.js",
    "revision": "e3224411e2dfe76dd77c713d54b2ab2f"
  },
  {
    "url": "assets/js/116.23c8af7e.js",
    "revision": "e004cb282afb0a54b3bf64a68d98863d"
  },
  {
    "url": "assets/js/117.1e3b9487.js",
    "revision": "6a1e065a25be20004ff8cef2cea3dfa8"
  },
  {
    "url": "assets/js/118.be51316a.js",
    "revision": "5704419ab711093253d6a966770e50be"
  },
  {
    "url": "assets/js/119.9d634f98.js",
    "revision": "2edeac2623025e027338ddb5da1195f6"
  },
  {
    "url": "assets/js/12.d1afcb74.js",
    "revision": "95cd5ff1d1cdd389d43fad7cfdfe7da2"
  },
  {
    "url": "assets/js/120.2829f2fc.js",
    "revision": "770413f9a198258562f87a1572541f27"
  },
  {
    "url": "assets/js/121.49281519.js",
    "revision": "aa5654ca09278e13503ca30bd3109fa7"
  },
  {
    "url": "assets/js/13.175a7120.js",
    "revision": "8262f5597341eb545369ac873bf8a7e9"
  },
  {
    "url": "assets/js/14.a8c7df9c.js",
    "revision": "0e69d20e0aa07643939d99369b643be9"
  },
  {
    "url": "assets/js/15.f5cfd398.js",
    "revision": "a1cdf75cfdae1c2682e5d23fc4118452"
  },
  {
    "url": "assets/js/16.645f77bf.js",
    "revision": "b25b51e51eb36cc13342c40c0378be3c"
  },
  {
    "url": "assets/js/17.80aab54e.js",
    "revision": "f9bde2ce0d0fa937c3ed6505c3684608"
  },
  {
    "url": "assets/js/18.b87e8de1.js",
    "revision": "3489797c68194082c5f0ed922bcd2bd5"
  },
  {
    "url": "assets/js/19.cc53d5af.js",
    "revision": "0c7f21327e9ab9dedef0891000fec5d7"
  },
  {
    "url": "assets/js/2.9bf63212.js",
    "revision": "f2e2e2f69aff6966019158ff5fffe1d6"
  },
  {
    "url": "assets/js/20.23ca62f8.js",
    "revision": "7137b2520fc71d3ead45ff1a5fa6c9fc"
  },
  {
    "url": "assets/js/21.ad20e9ca.js",
    "revision": "4c466c90b60b95b15f27ff1ecaaade52"
  },
  {
    "url": "assets/js/22.de79e9b4.js",
    "revision": "b01f011dcdc26a369e23b6ce9a68126a"
  },
  {
    "url": "assets/js/23.487a23f7.js",
    "revision": "3cbeadccad0561a4ef2d3181a7a0461a"
  },
  {
    "url": "assets/js/24.a935d5eb.js",
    "revision": "11c256d762f768eb356555e257317697"
  },
  {
    "url": "assets/js/25.1b636312.js",
    "revision": "bae649c624beadb23e85b843642a2dec"
  },
  {
    "url": "assets/js/26.8f288d28.js",
    "revision": "c3df5ec7aada31a84520ab586694d403"
  },
  {
    "url": "assets/js/27.11e16d90.js",
    "revision": "ff6c750c1d39db1bed92c2d666008954"
  },
  {
    "url": "assets/js/28.955fa7b6.js",
    "revision": "e10f34be95ed4198c6b59d4572db0166"
  },
  {
    "url": "assets/js/29.a5b81ba0.js",
    "revision": "c6c2a545a053a0e6d331a4cdf6ab25bc"
  },
  {
    "url": "assets/js/30.c25dcf52.js",
    "revision": "31340328a5f05f1b3da4cc2f82e1baed"
  },
  {
    "url": "assets/js/31.60f3754a.js",
    "revision": "59c4f5d567e6fc53b348b61b7318f36d"
  },
  {
    "url": "assets/js/32.f12ac149.js",
    "revision": "453abaa9d4920f783b196e6ef8b6362a"
  },
  {
    "url": "assets/js/33.e54ea6a1.js",
    "revision": "b93a7ccaf379fba6bef706302d5a2e49"
  },
  {
    "url": "assets/js/34.c34df942.js",
    "revision": "b2acbb5f5c605331ae177689c9f01e0e"
  },
  {
    "url": "assets/js/35.c0e0a7ba.js",
    "revision": "b4e3a744c54d9fc7733a496d4c3473e0"
  },
  {
    "url": "assets/js/36.bcda2ee7.js",
    "revision": "7c78e40b765366fa6140d3190ef6b648"
  },
  {
    "url": "assets/js/37.4917ef02.js",
    "revision": "dcb5ffbef464bb8b304b98dd42415243"
  },
  {
    "url": "assets/js/38.668ea95a.js",
    "revision": "bb341b58c488479e0506f722691cde10"
  },
  {
    "url": "assets/js/39.bb0c9d25.js",
    "revision": "a6e5a3b4c5d7c9eaa325c04b0b5e36e1"
  },
  {
    "url": "assets/js/4.2ab4d284.js",
    "revision": "1f30a59a07794e397e4eb8189698e578"
  },
  {
    "url": "assets/js/40.f2159677.js",
    "revision": "1f6b311afd9ef74ee2167b6e4a081fc6"
  },
  {
    "url": "assets/js/41.6e211d26.js",
    "revision": "c1e4e7034a24e060b6c946d1ab4fcb02"
  },
  {
    "url": "assets/js/42.23d1ad9c.js",
    "revision": "f4334343620336bce392fd5ecbd98012"
  },
  {
    "url": "assets/js/43.a7e53e11.js",
    "revision": "59f24ccac36b8145fb3f013eedb855e1"
  },
  {
    "url": "assets/js/44.e66411d8.js",
    "revision": "940ae707a25d0e3ca7510e89c1dca8b8"
  },
  {
    "url": "assets/js/45.e0cf8915.js",
    "revision": "a65b47462597b1183f687fc2cb8d7d3c"
  },
  {
    "url": "assets/js/46.73b1ba32.js",
    "revision": "878980ba4ff8b40a67566ade9315b531"
  },
  {
    "url": "assets/js/47.542190cf.js",
    "revision": "a9885e45a171bfdf0788cde0ed2cb36f"
  },
  {
    "url": "assets/js/48.f34de944.js",
    "revision": "2d38173fb4e6484f84cc67a059ba792f"
  },
  {
    "url": "assets/js/49.72aa45fc.js",
    "revision": "aee9c49841f358ac66d7730cfd9127d0"
  },
  {
    "url": "assets/js/5.b4259a13.js",
    "revision": "a0c3eca7536ba18236131005325d61f1"
  },
  {
    "url": "assets/js/50.03d33fbb.js",
    "revision": "d3f5e28190038cb1fef8788f3c711a52"
  },
  {
    "url": "assets/js/51.31aea059.js",
    "revision": "5c86e1278143e4db73a930a3d8f73a00"
  },
  {
    "url": "assets/js/52.049365cc.js",
    "revision": "73851c3948b74af67aaa6cfb5aa46bb5"
  },
  {
    "url": "assets/js/53.477c022f.js",
    "revision": "19153ef2798e22b4087ab3a5076fb2de"
  },
  {
    "url": "assets/js/54.889dc8c2.js",
    "revision": "eda418ea22db80ac70bac903b7e098a7"
  },
  {
    "url": "assets/js/55.ae40f7a0.js",
    "revision": "14b1b9b504250cc46d2ed56dbdf7a124"
  },
  {
    "url": "assets/js/56.36f8902d.js",
    "revision": "09dabecf480b868c4a29c87ab127daa6"
  },
  {
    "url": "assets/js/57.5f67e4f3.js",
    "revision": "a873c1486ccc7cc77a1698a8fde8825f"
  },
  {
    "url": "assets/js/58.bdaa240e.js",
    "revision": "6b1aba377dc69d88a51bddd3f9738681"
  },
  {
    "url": "assets/js/59.a3a74f63.js",
    "revision": "f077f78172c54641911fa95fee0659e5"
  },
  {
    "url": "assets/js/6.3e294312.js",
    "revision": "97cdd94688bd5601ca3950dbba9258b0"
  },
  {
    "url": "assets/js/60.489931dc.js",
    "revision": "39bfc7995fdfe90b7e70c266423df0e7"
  },
  {
    "url": "assets/js/61.b8d2bd81.js",
    "revision": "7d3ee1adb8da71cdb7fd8264c7714322"
  },
  {
    "url": "assets/js/62.fd1be7a9.js",
    "revision": "27855d16c31b4bac5d2d96e63b32b90a"
  },
  {
    "url": "assets/js/63.ee2c6120.js",
    "revision": "ccd9de4c4db17fa7b9f57928bdaf0dd2"
  },
  {
    "url": "assets/js/64.916e6bd0.js",
    "revision": "96d6479ca8efee630adaebc8c47fc2e4"
  },
  {
    "url": "assets/js/65.f9c8650c.js",
    "revision": "e79fe0b4cf7d3d844821323b40f929cf"
  },
  {
    "url": "assets/js/66.95841568.js",
    "revision": "bd57c18db8878e563e2fa47e18157917"
  },
  {
    "url": "assets/js/67.f560e6c5.js",
    "revision": "58d5a9706ec1d71b0c8791d0706cd787"
  },
  {
    "url": "assets/js/68.53f16232.js",
    "revision": "3bdb046ef8f103f3f2a29f0cadfce177"
  },
  {
    "url": "assets/js/69.6e32e00b.js",
    "revision": "7e602a66f21368a311fb63d6287e7574"
  },
  {
    "url": "assets/js/7.c14eb7da.js",
    "revision": "bb6e8765e7771f5a9ff0e9a07af04d33"
  },
  {
    "url": "assets/js/70.96a0368f.js",
    "revision": "36a5de4e827e301bd19746a9e54683d3"
  },
  {
    "url": "assets/js/71.69c77b1b.js",
    "revision": "b5f5f32546496c87d3193a8888a94510"
  },
  {
    "url": "assets/js/72.37989379.js",
    "revision": "3d578d818312c235aab4860fbd5f5bd2"
  },
  {
    "url": "assets/js/73.4aeabef3.js",
    "revision": "4c4d5ca46219a10cbb01e5ef688165d5"
  },
  {
    "url": "assets/js/74.489555f0.js",
    "revision": "8f9348b073f1374bd7dab2da6bd60c81"
  },
  {
    "url": "assets/js/75.343decc5.js",
    "revision": "fbbe012932feb2c3c6171849c9014df4"
  },
  {
    "url": "assets/js/76.96d77648.js",
    "revision": "3c6a0b3512f0b679c1ddafa18dc3a2be"
  },
  {
    "url": "assets/js/77.c84cb31d.js",
    "revision": "9f40cf9866240499eb5441cd04edd97e"
  },
  {
    "url": "assets/js/78.45d2487d.js",
    "revision": "9e7f7187e51e0c0998c713125a55d414"
  },
  {
    "url": "assets/js/79.cd2eb25a.js",
    "revision": "33cab3ab8824da9478eee856ef4d2791"
  },
  {
    "url": "assets/js/8.c6c39088.js",
    "revision": "3a87c199d03bafded508ddd64a92a07d"
  },
  {
    "url": "assets/js/80.d40292da.js",
    "revision": "e974a3ead9ef150bca38ff1eeb1320fa"
  },
  {
    "url": "assets/js/81.c67aae5c.js",
    "revision": "ed039e674537d3f156b745c932f5f985"
  },
  {
    "url": "assets/js/82.9aed4cda.js",
    "revision": "7e33f7c9535cdb27a1d5f5a54bd87807"
  },
  {
    "url": "assets/js/83.0f903faa.js",
    "revision": "597a8d702729f4e9c8bb92e06dd61908"
  },
  {
    "url": "assets/js/84.162b803b.js",
    "revision": "59b4a5e8f53524b9fd76f1745bdb7a9f"
  },
  {
    "url": "assets/js/85.71b47814.js",
    "revision": "457f830ec47a976c95fdfe467c6e52ff"
  },
  {
    "url": "assets/js/86.694a5ffc.js",
    "revision": "0c1eb7e7425238f06154c4892e10d85a"
  },
  {
    "url": "assets/js/87.adbddadd.js",
    "revision": "717f246c1aec99db785747755638a7a6"
  },
  {
    "url": "assets/js/88.6614baea.js",
    "revision": "668bdb453d970870eaa622ac47a04735"
  },
  {
    "url": "assets/js/89.3a6afc12.js",
    "revision": "3fbfc201f636ea2dfe98b5686950869e"
  },
  {
    "url": "assets/js/9.ac040250.js",
    "revision": "77858e761e32f58bf5861cc197038e6a"
  },
  {
    "url": "assets/js/90.37f51329.js",
    "revision": "53ad9489ae59fb740e2bdcdf1b3d1973"
  },
  {
    "url": "assets/js/91.f770260f.js",
    "revision": "ac95d2899ca5aada5bebf969b8c591da"
  },
  {
    "url": "assets/js/92.67cf4d2a.js",
    "revision": "d80f17ddc799474b001be9abf553f4cb"
  },
  {
    "url": "assets/js/93.0752e3d1.js",
    "revision": "bcc916674da3d858c7382d98e8c8c6c0"
  },
  {
    "url": "assets/js/94.bbc10051.js",
    "revision": "63f5c937a7aaa804e4d2e85604110694"
  },
  {
    "url": "assets/js/95.7da903d8.js",
    "revision": "9dc06c24ce1a5f194af6acd5644532fe"
  },
  {
    "url": "assets/js/96.443825f8.js",
    "revision": "f5715087e38eb150fdf5d72aeffb2e36"
  },
  {
    "url": "assets/js/97.03daee0d.js",
    "revision": "1a41ae2a7b65e9e79582d4d732e9117b"
  },
  {
    "url": "assets/js/98.e6150e41.js",
    "revision": "b03d64c0cabd8c51a558b69bd15c073d"
  },
  {
    "url": "assets/js/99.6e8c791e.js",
    "revision": "ba9b4407c567a67a64221739bfb4d434"
  },
  {
    "url": "assets/js/app.4937fcac.js",
    "revision": "6b2f0b2d5021fc7a8782f515e5a896d8"
  },
  {
    "url": "blogs/AI/index.html",
    "revision": "afc3f4c975b510977c62d106ecc14cd9"
  },
  {
    "url": "blogs/AI/模型/keras.html",
    "revision": "845664be219e60ab1437b79f0be4413d"
  },
  {
    "url": "blogs/AI/模型/lstm.html",
    "revision": "baabc5ea434f56c4b812d5c04ce9f2f6"
  },
  {
    "url": "blogs/AI/模型/机器学习算法地图.html",
    "revision": "baa3d3801d8951d244364dfa3fe82424"
  },
  {
    "url": "blogs/index.html",
    "revision": "8aeb9ca829a8afff1a2afe4e61d877ac"
  },
  {
    "url": "blogs/其他/index.html",
    "revision": "f15a901e3b277a7dc9e03a7f842190c9"
  },
  {
    "url": "blogs/其他/其他/chatgpt中文调教指南.html",
    "revision": "a27d9c9c9b3551e1ae236dcba82d4c08"
  },
  {
    "url": "blogs/其他/其他/世界杯历史赛程比分全集.html",
    "revision": "e92b87d38899f6077ae73017110cefcd"
  },
  {
    "url": "blogs/其他/其他/复杂度.html",
    "revision": "d7a0fb66cd4d363802e839dc298317b1"
  },
  {
    "url": "blogs/其他/教程/threeJs教程.html",
    "revision": "57afb08387d8e37b60b30432392e4d05"
  },
  {
    "url": "blogs/其他/教程/使用基于 Github Actions 实现一个免费的任务调度工具.html",
    "revision": "adf359a3183e33c1dd4082b9cbb520dc"
  },
  {
    "url": "blogs/其他/教程/内网穿透工具.html",
    "revision": "dcfefcfcb37a4631449e48a2929a6750"
  },
  {
    "url": "blogs/其他/笔记/bat批处理语法.html",
    "revision": "e23606e678b2ff4bb3ecd4e7db01413d"
  },
  {
    "url": "blogs/其他/笔记/conda命令.html",
    "revision": "2bdc39eeca7335264cd4fb7929dc3fc1"
  },
  {
    "url": "blogs/其他/笔记/git使用手册.html",
    "revision": "6998758f3d1d7011946787ddc80f130c"
  },
  {
    "url": "blogs/其他/笔记/git常用命令速查.html",
    "revision": "63ae140985d5b2e9f196b59bf7764f3a"
  },
  {
    "url": "blogs/其他/笔记/git提交规范.html",
    "revision": "bed64f46f6f47c7a224d081764f9bc6e"
  },
  {
    "url": "blogs/其他/笔记/k8s基本命令与pod管理.html",
    "revision": "e9b211e12e8d4363d026c36be16d4d01"
  },
  {
    "url": "blogs/其他/笔记/linux常用命令.html",
    "revision": "840c62c333102a03c51cb53f528a5a9e"
  },
  {
    "url": "blogs/其他/笔记/markdown语法.html",
    "revision": "c4245ec2ca6bcb6bc6923c407e94676b"
  },
  {
    "url": "blogs/其他/笔记/npm和yarn常用命令.html",
    "revision": "7b967967d1b572c0b1c4bd4822b0aa4e"
  },
  {
    "url": "blogs/其他/笔记/npm常用命令.html",
    "revision": "963f6f22ebfb513e19ab0152816f343b"
  },
  {
    "url": "blogs/其他/笔记/py3和py2的区别总结.html",
    "revision": "9c22017544d89badc74fa639e37c32de"
  },
  {
    "url": "blogs/其他/笔记/Scala学习笔记.html",
    "revision": "b29e96cb7b417597a8e9832c6b419499"
  },
  {
    "url": "blogs/其他/笔记/ss.html",
    "revision": "8218a0b056ed0a39344c7c849fa6dadd"
  },
  {
    "url": "blogs/其他/笔记/yaml学习笔记.html",
    "revision": "fd6d55fd1eae0f0be4920580e2ceb277"
  },
  {
    "url": "blogs/其他/笔记/常用bat命令.html",
    "revision": "3265f404e40c5072075e255f605f89d8"
  },
  {
    "url": "blogs/其他/笔记/常用正则表达式.html",
    "revision": "a8eecb83fd791483c70705e436c5495e"
  },
  {
    "url": "blogs/其他/笔记/正则表达式语法.html",
    "revision": "a5c8765c6baf912f285d8aa60a44bb90"
  },
  {
    "url": "blogs/其他/解决方案/docker安装vim.html",
    "revision": "486a2861be63cfa045370a6dcc81cb8c"
  },
  {
    "url": "blogs/其他/解决方案/mac使用homebrew无法安装nginx解决方案.html",
    "revision": "cf582b87be3a319ee9b21976338676fe"
  },
  {
    "url": "blogs/其他/解决方案/nextcloud不被信任.html",
    "revision": "161a6c19582ca9cfe559ec6a9d18b7fe"
  },
  {
    "url": "blogs/其他/解决方案/ubuntu设置虚拟显示器且远程连接.html",
    "revision": "314f14382066c19da38e70d9f8f04ae4"
  },
  {
    "url": "blogs/前端/index.html",
    "revision": "82d783d33ff0ed3fda1b13a3595bad24"
  },
  {
    "url": "blogs/前端/javascript/js计时器.html",
    "revision": "be294b85e73ad5a8e8225afc981f8095"
  },
  {
    "url": "blogs/前端/react/react教程.html",
    "revision": "77da9d5dd76d7999ab09af327644ed7e"
  },
  {
    "url": "blogs/前端/vue/vue移动端适配方案.html",
    "revision": "43f0781125daaf54850769223b7f713e"
  },
  {
    "url": "blogs/前端/vue/vue组件间传值的11种方式.html",
    "revision": "dbb4b97a845faa042b9dd30d6690af9d"
  },
  {
    "url": "blogs/前端/vue/vue路由模式为history，打包后页面空白的处理方式.html",
    "revision": "7efe5ef857ceb7ce210250a31f538589"
  },
  {
    "url": "blogs/前端/vue/使用vue+iview Form组件,按enter键阻止页面刷新.html",
    "revision": "a804106070ee311573905a219aa5bdb1"
  },
  {
    "url": "blogs/前端/vue/基于xterm的网页版终端.html",
    "revision": "461cd374a6fd0e6e8bdce4522404e3b8"
  },
  {
    "url": "blogs/前端/基础/CSS动画.html",
    "revision": "e4a3941aaae9f554d10e9c074f5fdb8d"
  },
  {
    "url": "blogs/前端/基础/CSS定位详解.html",
    "revision": "763601d0d23850e24a490a542628113e"
  },
  {
    "url": "blogs/前端/基础/flex布局.html",
    "revision": "07ac789c849bbe54941c6948d16005de"
  },
  {
    "url": "blogs/前端/基础/js模块的导入导出.html",
    "revision": "85a7e3d308e5ba544e8e2a7930ea7db7"
  },
  {
    "url": "blogs/前端/基础/sass用法指南.html",
    "revision": "429c418f985d7e7865e20d10417366b3"
  },
  {
    "url": "blogs/前端/基础/前端开发的历史和趋势.html",
    "revision": "8ab67253c51313866bb523642c774e14"
  },
  {
    "url": "blogs/前端/基础/前端模块化详解.html",
    "revision": "480a9023570784ab985a07719432aba3"
  },
  {
    "url": "blogs/前端/基础/网页中使用希腊字母.html",
    "revision": "aa459770a89e8e8f0a30a5ed5aed21ec"
  },
  {
    "url": "blogs/前端/基础/网页色彩方案.html",
    "revision": "ed31d0b6df6b49d7a53405e1abbdc43b"
  },
  {
    "url": "blogs/前端/基础/跨域的几种常见解决方案.html",
    "revision": "4d69f19758d3b1dc320210b9d9e7caa2"
  },
  {
    "url": "blogs/前端/技巧/githubAction.html",
    "revision": "565df35346a48b86f431120b94f20225"
  },
  {
    "url": "blogs/前端/技巧/nginx基本配置.html",
    "revision": "8aa6eb84511d3604092df4025ca8c2f0"
  },
  {
    "url": "blogs/前端/技巧/prettier常用配置项.html",
    "revision": "2d07ba6c97b0388958a0ec72d3637774"
  },
  {
    "url": "blogs/前端/技巧/代码编辑框示例.html",
    "revision": "f67ae006a308f559edeb8529bfc63e70"
  },
  {
    "url": "blogs/前端/技巧/前端抓包神器whistle.html",
    "revision": "9b21d5219c7f71ef7cc414b3345e7643"
  },
  {
    "url": "blogs/前端/技巧/部署Django项目并使其在后台一直运行.html",
    "revision": "a4a8e5edfcede7aa9b36b771ab873e1c"
  },
  {
    "url": "blogs/前端/技巧/阿里巴巴前端代码规范集成工具F2ELint使用教程.html",
    "revision": "d6709e335ec1804fcfbb8ad1337c6e30"
  },
  {
    "url": "blogs/后端/index.html",
    "revision": "6bdc4ceb203999f03c81d72b83a159ac"
  },
  {
    "url": "blogs/后端/python/JsonItemExporter和JsonLinesItemExporter保存数据的异同.html",
    "revision": "02f27e03bc1fc93b0eada464692c18b8"
  },
  {
    "url": "blogs/后端/python/python 爬虫利器之 PyQuery 的用法.html",
    "revision": "f70f0cfe008652fd50431918adeacecd"
  },
  {
    "url": "blogs/后端/python/pythonic.html",
    "revision": "bb0568760154076de30db4143936e1a0"
  },
  {
    "url": "blogs/后端/python/python中list的五种查找方法.html",
    "revision": "14c91a0387363c3faabee675fdb5ec54"
  },
  {
    "url": "blogs/后端/python/python将list转换为csv.html",
    "revision": "749b32e13d045af11e7500904cc2f272"
  },
  {
    "url": "blogs/后端/python/python异常处理.html",
    "revision": "f08861c16f08cbdd03280ac3b6b371f4"
  },
  {
    "url": "blogs/后端/python/python爬虫利器之scrapy的用法.html",
    "revision": "e6c1ccac94bc56ae78bbbaa80b42f41f"
  },
  {
    "url": "blogs/后端/其他/docker命令.html",
    "revision": "ae8beda36e6de8bef6d0688f31646a1d"
  },
  {
    "url": "blogs/后端/其他/Docker的基本了解和使用.html",
    "revision": "83f20a434163e532d47609eb2e36ca80"
  },
  {
    "url": "blogs/后端/其他/docker设置开机自启和容器自启.html",
    "revision": "0b5c6a7c239ba1e4676a658c251b0050"
  },
  {
    "url": "blogs/后端/其他/dokcer容器常用命令总结.html",
    "revision": "dc5f122adc49dc2447b62358489a3f65"
  },
  {
    "url": "blogs/后端/其他/TCP&UDP.html",
    "revision": "2bdcce474fc03bf00b01f762d5ebd91e"
  },
  {
    "url": "blogs/后端/其他/中台.html",
    "revision": "eb2b954b919aacd376d9a26e040fdf2b"
  },
  {
    "url": "blogs/后端/数据库/mongodb教程.html",
    "revision": "90a2c31c7a9e8f737109982a23cdd4a3"
  },
  {
    "url": "blogs/后端/数据库/mongodb配置和操作.html",
    "revision": "3e79db841cf050ea2cd46ec61131fb32"
  },
  {
    "url": "blogs/官方文档/index.html",
    "revision": "c4aa4d7dd3e6bebc3f3c16b5bd252453"
  },
  {
    "url": "blogs/官方文档/常用/ts.html",
    "revision": "0db6edfd4902dfa1da215a1dbdd27e51"
  },
  {
    "url": "blogs/官方文档/常用/vue.html",
    "revision": "c02c875bca67ec7520236aedf63f29a6"
  },
  {
    "url": "blogs/官方文档/常用/vuepress.html",
    "revision": "d186251b837ad4ac6e898cb4ea37adc1"
  },
  {
    "url": "bookmarks/其他/awesomeGithub.html",
    "revision": "5942841559d2ed8dbd170a4c9d480746"
  },
  {
    "url": "bookmarks/其他/互联网黑话.html",
    "revision": "3b911293c45f6b516511f66c3622bde1"
  },
  {
    "url": "bookmarks/其他/最适合程序员的笔记软件.html",
    "revision": "a67045299c365d324df8d4eda46e68c6"
  },
  {
    "url": "bookmarks/其他/凉粉为什么不降价.html",
    "revision": "eb08ccdabd3732f2596bf436344b58a3"
  },
  {
    "url": "bookmarks/其他/换系统指南.html",
    "revision": "8a5a55e7620f7881f3a75d79cbc6426b"
  },
  {
    "url": "bookmarks/其他/敬酒话术.html",
    "revision": "0f10e257711ca136ee04103bf9f7e0ef"
  },
  {
    "url": "bookmarks/其他/潜规则.html",
    "revision": "351a24c27ed5060e3c511f08699d09ab"
  },
  {
    "url": "bookmarks/常用/chatgpt相关.html",
    "revision": "44a9d5d0cb6097ad32d5bfc0c0d87e77"
  },
  {
    "url": "bookmarks/常用/全国互联网公司汇总.html",
    "revision": "6e369b56301ad1c600c5bd74141d9432"
  },
  {
    "url": "bookmarks/常用/前端常用.html",
    "revision": "e86863ac371da0c53dab2b88b175705b"
  },
  {
    "url": "bookmarks/常用/小工具.html",
    "revision": "5f134b3ed40a61cd8890f56effc56975"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "4502ab8d4878eed074c8002015b8e7a5"
  },
  {
    "url": "bookmarks/常用/搜索引擎使用技巧.html",
    "revision": "1518f0c2d7bbc911277c056dfc58ca7d"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "0bd8f93a065bb200d3764c203131cdfd"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "b40b6499cba736fa38676f24ab6f7882"
  },
  {
    "url": "categories/index.html",
    "revision": "247e500098cd191ea1d43eaf9f384c6a"
  },
  {
    "url": "categories/ItemExporter/index.html",
    "revision": "f24026c1148efcd29c40e80875c136df"
  },
  {
    "url": "categories/mongodb/index.html",
    "revision": "37262cf17e57766829be8d99199a5463"
  },
  {
    "url": "categories/PyQuery/index.html",
    "revision": "295993193ed19fd7982f33d2da9300a7"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3ac01ad61bed16c2dd6302a822f63fea"
  },
  {
    "url": "categories/世界杯/index.html",
    "revision": "908cf432ccf257045a9bdb49f298bdb8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6315b3270814ce6efad541f2f9a34c6e"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "eab91be3006b11b41d42c38df2b686ef"
  },
  {
    "url": "categories/前端教程/index.html",
    "revision": "af9dd592704d4c6b13be412883db7977"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "4332e3efa3310bf5a124919f3b2aad82"
  },
  {
    "url": "categories/常用/index.html",
    "revision": "48ce31e18172b601060a3d43461b6e3d"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "9ef50a0b919414eb1cba044e7d43b945"
  },
  {
    "url": "categories/教程/index.html",
    "revision": "ae96672fdb3c891391ba8b5b56fd8462"
  },
  {
    "url": "categories/爬虫/index.html",
    "revision": "ba3aefc0af8110742e020cfcad7cdab4"
  },
  {
    "url": "categories/社会/index.html",
    "revision": "e18f6ee2dbbcb07aa66f367325746148"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "8c21e42fa517b174de32c91d18cc13b5"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "2aef57e20bcdfa1f0f18732d9a6f0794"
  },
  {
    "url": "categories/解决方案/index.html",
    "revision": "ada6739fd1d70c0b669d4818c534d32b"
  },
  {
    "url": "categories/话术/index.html",
    "revision": "00329e7d162bf54b02556e8688bf1d3f"
  },
  {
    "url": "friends/index.html",
    "revision": "bd1df3f0120eab6064ee3d69ce72f3e2"
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
    "revision": "f2828de4da522db1147a59b83e05ec8f"
  },
  {
    "url": "js/canvas-nest.js",
    "revision": "5b2a66a5fb6d534069f5aa125165c0c0"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "9a610b2aafd85862611436529cc18e53"
  },
  {
    "url": "others/loveU.html",
    "revision": "162e8d757c6dbd10b69934d456da2a03"
  },
  {
    "url": "others/other/work.html",
    "revision": "9539ad90c9d4381660b708f520622e34"
  },
  {
    "url": "others/projects.html",
    "revision": "c044cfab730d295dec62f42de2869b41"
  },
  {
    "url": "tag/action/index.html",
    "revision": "e64408cbe0b8c964f00ddffae239fc53"
  },
  {
    "url": "tag/actions/index.html",
    "revision": "365f371627b6307766911621b4dbb6c0"
  },
  {
    "url": "tag/amd/index.html",
    "revision": "a020fe18684017fa8df0716b0ae1a5d6"
  },
  {
    "url": "tag/bat/index.html",
    "revision": "646b357136fa6d94f53592b8cd4dd1d3"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "686839933d9a0a7587a3d2242c3067ab"
  },
  {
    "url": "tag/CICD/index.html",
    "revision": "0eeef277a64822d76eab8c5006b6fee0"
  },
  {
    "url": "tag/commonjs/index.html",
    "revision": "286b387776db7d87f056679cb76c7e83"
  },
  {
    "url": "tag/conda/index.html",
    "revision": "1f1ed1da708fc5ae6773e1d00e59f414"
  },
  {
    "url": "tag/css/index.html",
    "revision": "142506e836806d8f6ba80c4f157a125c"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "b61dc8cb18d98101872ccde729f0606f"
  },
  {
    "url": "tag/ddns/index.html",
    "revision": "7ce91d3c68bb19ac28abe9e2a5da446d"
  },
  {
    "url": "tag/django/index.html",
    "revision": "19d45f7c5bca84528d89837edd8d74fb"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "99c1d5d088fec6fcf34afd4d5f63f0be"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "b6893a709884066ac9bf0bfd32a190c8"
  },
  {
    "url": "tag/enter/index.html",
    "revision": "5e2dce70e2def2ac0cafeb598e413801"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "930f5c4eb5aa1201d2f35eabe809dbcb"
  },
  {
    "url": "tag/f2elint/index.html",
    "revision": "100a027e2831acba80ad34095092d2b4"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "3cf048851d4d3ec77ae73938c9e209f3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "558043cefb8730e711b70a5d3b427919"
  },
  {
    "url": "tag/github/index.html",
    "revision": "1aa48f05733217ca2d8eacf9ecad9481"
  },
  {
    "url": "tag/history/index.html",
    "revision": "0cacbbdb2de042efd88e726cf6c0fa58"
  },
  {
    "url": "tag/homebrew/index.html",
    "revision": "5a0e0a7e8636cb48e86efb064f6f7443"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "757c93573b5f70d9bef23c0e34d538d0"
  },
  {
    "url": "tag/index.html",
    "revision": "a03d45e65334c952f3dc52353b56fafd"
  },
  {
    "url": "tag/iview/index.html",
    "revision": "0ac0abb9d572d569917c7ba43e8212f1"
  },
  {
    "url": "tag/js/index.html",
    "revision": "4acab3105c0a85e5b8ac076ab0797ed5"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "3c0c76bb754643e44deba6c83873928b"
  },
  {
    "url": "tag/keras/index.html",
    "revision": "86b1e19b83d686b7cc8c205d981525b8"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "813a98768bc1d2dc1bc8364f8cea6e5d"
  },
  {
    "url": "tag/lstm/index.html",
    "revision": "44d501bc9ed534aa10d067731785e483"
  },
  {
    "url": "tag/mac/index.html",
    "revision": "fa102eee05ffb7f60849d5936f1f9e7c"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "1f163dfd355e0659a15749db97c5eb88"
  },
  {
    "url": "tag/nextcloud/index.html",
    "revision": "c041b415bb944b02caeb9bee985c8329"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "39728d486a91442a1bd9e7236b97dcb3"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "c27200b21a9e20b786493c37e090681d"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "b69bfe07c58b50274bff59443361d325"
  },
  {
    "url": "tag/prettier/index.html",
    "revision": "ca8ea31fd6de6384af2a4128a3acd232"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d6981a4822607245b43e78933ba0bddf"
  },
  {
    "url": "tag/react/index.html",
    "revision": "a51406ccfc254ee917062b8973829a0d"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "3d55662fe02cbb1a3a880af9f4fdc646"
  },
  {
    "url": "tag/scala/index.html",
    "revision": "b347469079420e14b428e275984ada2c"
  },
  {
    "url": "tag/scrapy/index.html",
    "revision": "2b6873146d0011703d3845a72b5379ee"
  },
  {
    "url": "tag/Sequential/index.html",
    "revision": "5f7fec257ec9ae422b91e716decea7f3"
  },
  {
    "url": "tag/TCP/index.html",
    "revision": "7f59be2e3a3046b0f82eb7b4c39611c6"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "b02a5cfd7b349edfddbc5c8492477976"
  },
  {
    "url": "tag/UDP/index.html",
    "revision": "0a6c3392f113d4a07846082def9fbb0d"
  },
  {
    "url": "tag/vim/index.html",
    "revision": "94ae768985f82ac2b62f2df8c234347b"
  },
  {
    "url": "tag/vnc/index.html",
    "revision": "1056da3dd73d8b53d9d77484e651d59a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2269fe015c70ce265a07dd023432db0c"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "9c02dfde7b4621c85fe336cd2bb69833"
  },
  {
    "url": "tag/websocket/index.html",
    "revision": "bb36f49f3b9fb629961ea48d9c57c470"
  },
  {
    "url": "tag/whistle/index.html",
    "revision": "c9a41476fc07ac67eb879b28a48ee071"
  },
  {
    "url": "tag/xterm/index.html",
    "revision": "5fcec78f6ef7b9a9d51e5845b77378e4"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "49023956f2955b65612f5d8935f87113"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "f676ffd9d68aa49177fa4716d38b4cde"
  },
  {
    "url": "tag/世界杯/index.html",
    "revision": "656ab3fb13c94c9b212ebb6a2c864963"
  },
  {
    "url": "tag/中台/index.html",
    "revision": "1a80bce36e38b15134e12bdf891ad50a"
  },
  {
    "url": "tag/互联网黑话/index.html",
    "revision": "360ffa63f15d424432ca9d64c695145a"
  },
  {
    "url": "tag/内网穿透/index.html",
    "revision": "fe8b36a8573e0c86c7236a6e6e44211a"
  },
  {
    "url": "tag/动画/index.html",
    "revision": "40f807aa95f0399bfc977a5626078dd9"
  },
  {
    "url": "tag/历史/index.html",
    "revision": "f47811ea6d7688e9763dfd26f64231a5"
  },
  {
    "url": "tag/复杂度/index.html",
    "revision": "6e24662544482d456601415b38ad10d1"
  },
  {
    "url": "tag/定位/index.html",
    "revision": "62f8a00e623c20b283795b9aec9c3574"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a4ee37a1338dbca2a36bac4ac8ab9f47"
  },
  {
    "url": "tag/布局/index.html",
    "revision": "fd6bce8169950008d74e2e60d1d28ec4"
  },
  {
    "url": "tag/希娜字母/index.html",
    "revision": "89409cae7eefd869c509700ac0d7f4f6"
  },
  {
    "url": "tag/常用命令/index.html",
    "revision": "90048d8a232ddaa12e8802d090fd8d13"
  },
  {
    "url": "tag/开机自启/index.html",
    "revision": "dd909ec50048724b7fd562a949624c07"
  },
  {
    "url": "tag/技巧/index.html",
    "revision": "f5fed2662240510ff89dbad8a88cb102"
  },
  {
    "url": "tag/抓包/index.html",
    "revision": "6dbe6983cd889ab4b98a0ed868fbdecf"
  },
  {
    "url": "tag/换系统/index.html",
    "revision": "2efc13b0f0584af310e38b9e9f0e8263"
  },
  {
    "url": "tag/敬酒/index.html",
    "revision": "318e32de023433bebd607cce7cb5d198"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "32fbcbfeb00176078181d324731bd046"
  },
  {
    "url": "tag/格式化/index.html",
    "revision": "65356565db6e29754ead5f9f6830cf61"
  },
  {
    "url": "tag/模块/index.html",
    "revision": "c2242c6c78f5bf189f73805e13637b0f"
  },
  {
    "url": "tag/模块化/index.html",
    "revision": "07b75de5f97f77107a0d2d121f2700fd"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "4d9247a051060e07742fe4d812bfbf83"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "90a2efad8c6f17014194737849e78357"
  },
  {
    "url": "tag/移动适配/index.html",
    "revision": "d006690b86e08d108f1b54d3c22731d5"
  },
  {
    "url": "tag/笔记软件/index.html",
    "revision": "b03ce4a831d835fea09df4cd66e88060"
  },
  {
    "url": "tag/系统/index.html",
    "revision": "dccf89d094d806e5215e9e0ff8dcb18c"
  },
  {
    "url": "tag/组件传值/index.html",
    "revision": "80d818aeff7ce8373a688238a386e5f1"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "4a7c32656089f7d9f8ef2c3227368c63"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "61e1218490106ef68c26958c83e19ec8"
  },
  {
    "url": "tag/虚拟显示器/index.html",
    "revision": "99693722b3b291a23ebfc0b97c735c9b"
  },
  {
    "url": "tag/计算机网络/index.html",
    "revision": "7ca59ba1cb22a0a65c646f04faaeec3a"
  },
  {
    "url": "tag/跨域/index.html",
    "revision": "73171ad3f4f27d2faa38b9f2ce72c92f"
  },
  {
    "url": "tag/配色/index.html",
    "revision": "42ef0a958f8817e2f15604d99c9944b1"
  },
  {
    "url": "tag/面试汇总/index.html",
    "revision": "aa6cba788179308718cc4e2ef535734e"
  },
  {
    "url": "tag/页面刷新/index.html",
    "revision": "cd8154910bf015233be1229b768afb31"
  },
  {
    "url": "timeline/index.html",
    "revision": "eccc4f7be85a35ef7b7878c18cb57d84"
  },
  {
    "url": "view/heart.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/index.html",
    "revision": "6ed05e37a233b3e381c14549c06a2b75"
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
  },
  {
    "url": "vuepress/wechatPay.jpg",
    "revision": "eb6176545912fea5a15e0d0e5b96afe3"
  },
  {
    "url": "vuepress/wiki.png",
    "revision": "088b58e1c2ee352a03d5d90250cb590d"
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
