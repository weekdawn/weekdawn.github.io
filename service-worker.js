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
    "revision": "a41d834e560807a7ced03136c4e8e137"
  },
  {
    "url": "about/index.html",
    "revision": "82ed49eb009eb9351f7a1c4a4895c531"
  },
  {
    "url": "assets/css/0.styles.0d1a8836.css",
    "revision": "31682bf662b60a475d924a57601c3aab"
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
    "url": "assets/js/1.12450c52.js",
    "revision": "74a8679691f39ec5f654681fcfb38b3b"
  },
  {
    "url": "assets/js/10.0236313a.js",
    "revision": "d27eac13635130d09a51f67a4b82c024"
  },
  {
    "url": "assets/js/100.a52df9ea.js",
    "revision": "4d8b64603e4ea103d256675a5f66ec46"
  },
  {
    "url": "assets/js/101.4aeff555.js",
    "revision": "0124dc8a6da97e6f5fb875bd9e291f0e"
  },
  {
    "url": "assets/js/102.783c51df.js",
    "revision": "83d90534e6ae191b695faebb77b0b63f"
  },
  {
    "url": "assets/js/103.4c57f168.js",
    "revision": "a715cbe3f7397b13e776fa89590a2175"
  },
  {
    "url": "assets/js/104.005db132.js",
    "revision": "685b3dd0255faa40b1a1250f8b6478ac"
  },
  {
    "url": "assets/js/105.bd6ed813.js",
    "revision": "113fec41effb5823cc0f5846527f9488"
  },
  {
    "url": "assets/js/106.bd4af559.js",
    "revision": "9e28b0ca2ee832117151d9094218bb02"
  },
  {
    "url": "assets/js/107.ead5268b.js",
    "revision": "02014b7a58d98999892ebf5b963f5d1a"
  },
  {
    "url": "assets/js/108.b2906daf.js",
    "revision": "282d912152317f6cb456075856c470f5"
  },
  {
    "url": "assets/js/109.8ad379fd.js",
    "revision": "594de1eea6fa558b0ac0a3f8addf38ee"
  },
  {
    "url": "assets/js/11.42499bff.js",
    "revision": "1a2bfb553ff67ad47a860644be728b88"
  },
  {
    "url": "assets/js/110.89bcac05.js",
    "revision": "78dae3cb13b77babe7be3167af354f5e"
  },
  {
    "url": "assets/js/111.d7455dc8.js",
    "revision": "0b25041c38788a32f3008417fc05ebd8"
  },
  {
    "url": "assets/js/112.82fd1904.js",
    "revision": "5a150b00a53323c43f73081b4c999c76"
  },
  {
    "url": "assets/js/113.85a5b45c.js",
    "revision": "4e49abaa7040549e0428b70735d8abab"
  },
  {
    "url": "assets/js/114.677632b0.js",
    "revision": "371f18f0601ac006d75b0397c795ca41"
  },
  {
    "url": "assets/js/115.fa713fd6.js",
    "revision": "dfbe9b859a707930f950ee27e46de52d"
  },
  {
    "url": "assets/js/116.76d7f2bb.js",
    "revision": "e1849a70924d69cc3aed94db2506e1d0"
  },
  {
    "url": "assets/js/117.f93baee7.js",
    "revision": "8fb727af1a6afb8e8c954e8cab16a973"
  },
  {
    "url": "assets/js/118.6666f7c8.js",
    "revision": "6e1a109b0803173b188d47cac8e40e4f"
  },
  {
    "url": "assets/js/119.8c8e4140.js",
    "revision": "c64b011cedc0722465e375e4487d5668"
  },
  {
    "url": "assets/js/12.4cbc12fe.js",
    "revision": "e2bfe9b79d52b69076bea23197664caa"
  },
  {
    "url": "assets/js/120.935e2af2.js",
    "revision": "53b965c58f8fd2e7c690cd7d5a00e49b"
  },
  {
    "url": "assets/js/121.c44154d7.js",
    "revision": "2ef8fc923a3397b1b68b302a3ca204cb"
  },
  {
    "url": "assets/js/122.a6ccb668.js",
    "revision": "c5b7bd61e2c68664c33b3bbd7f27510a"
  },
  {
    "url": "assets/js/123.4fa82d9d.js",
    "revision": "64598efbfbe0e91e7722afebb30ee978"
  },
  {
    "url": "assets/js/124.089020cd.js",
    "revision": "0b5a6b4b67a3a9767c119f39c93d32fc"
  },
  {
    "url": "assets/js/125.fa7b2f21.js",
    "revision": "10a814fec16240df51cb6dd04c8d303a"
  },
  {
    "url": "assets/js/126.69b8fde0.js",
    "revision": "7465462751fbda280b409cae30c47275"
  },
  {
    "url": "assets/js/127.726938e3.js",
    "revision": "1b4f73f20f81710a1024dcbd5c1d744b"
  },
  {
    "url": "assets/js/128.897c1f76.js",
    "revision": "760dcd9136640486dc7e11f2b3e1ddb5"
  },
  {
    "url": "assets/js/129.bdde42a2.js",
    "revision": "f3991680776fcbe14de91896a80ab37d"
  },
  {
    "url": "assets/js/13.b04fa097.js",
    "revision": "76571f4e53f4abbdedf9228ce752f4ef"
  },
  {
    "url": "assets/js/130.75499bf8.js",
    "revision": "678b91827083afa5e931307e13f62445"
  },
  {
    "url": "assets/js/131.f04c6be0.js",
    "revision": "9784c0f9baed6e5b36f9dc2d8b25de68"
  },
  {
    "url": "assets/js/132.293a5460.js",
    "revision": "e391b4da8cf02f1530544353c41d4ef3"
  },
  {
    "url": "assets/js/133.371b2dc4.js",
    "revision": "073f42a0d74ba83893ab2a7363ec4c0f"
  },
  {
    "url": "assets/js/134.65c12ca1.js",
    "revision": "06136f12fb42ac720c63217b180f5ef9"
  },
  {
    "url": "assets/js/135.caa3e969.js",
    "revision": "95ea95c59b3b1b5d5e44c46148521b4a"
  },
  {
    "url": "assets/js/136.de33c225.js",
    "revision": "6b896ceea3b0ceec3682b0fd4b6e9027"
  },
  {
    "url": "assets/js/137.63ad3ff9.js",
    "revision": "5d03e0344a48f48f6db1e83edae453a0"
  },
  {
    "url": "assets/js/138.a080779d.js",
    "revision": "2beaf969a8663d43792138686e053315"
  },
  {
    "url": "assets/js/139.ed0caa27.js",
    "revision": "d2527fecfe28d96f65d7e1f6b04cc8d5"
  },
  {
    "url": "assets/js/14.7335aa06.js",
    "revision": "a548b578ea2c905ef88a45b89bb895e7"
  },
  {
    "url": "assets/js/140.d2e233c1.js",
    "revision": "161739d2578106b6eeb6928ad6502ef7"
  },
  {
    "url": "assets/js/141.352ee61c.js",
    "revision": "a309074e5096cede645996657bcd096e"
  },
  {
    "url": "assets/js/142.e3b8ef17.js",
    "revision": "fc1eff8910547739ce82203cc016ec27"
  },
  {
    "url": "assets/js/143.9ccb5e68.js",
    "revision": "3ceebbe58aad6259adaa947c637b2f17"
  },
  {
    "url": "assets/js/144.f0d92f76.js",
    "revision": "9ed7b979e59222ee61f2c4a7c116865e"
  },
  {
    "url": "assets/js/145.a9e98e34.js",
    "revision": "05725f520a10a925378450deef1cc975"
  },
  {
    "url": "assets/js/146.b15610a6.js",
    "revision": "cd7a0c133d5bc3f6c499474985fb0b5d"
  },
  {
    "url": "assets/js/147.5a386413.js",
    "revision": "bb408f05c9a412a3808930c38b48838f"
  },
  {
    "url": "assets/js/148.e5481f01.js",
    "revision": "0fef7fca2cd00f6c0978e00c6878fd09"
  },
  {
    "url": "assets/js/149.9c4945dc.js",
    "revision": "3cd67ccc966a1f9e20bd6da57dd581d9"
  },
  {
    "url": "assets/js/15.9fc6f898.js",
    "revision": "054d394a0a04af5f6594a720382cac8e"
  },
  {
    "url": "assets/js/150.6200473a.js",
    "revision": "a57be88f937a19272e757c79123c3da5"
  },
  {
    "url": "assets/js/151.f54e9c84.js",
    "revision": "b5be15e31cfe043ab04fade140ed77e9"
  },
  {
    "url": "assets/js/152.0857b100.js",
    "revision": "c5bd78e153c2f44c25204b848e069a34"
  },
  {
    "url": "assets/js/153.977353f0.js",
    "revision": "01271396d06dd733143c84f9d57b0d00"
  },
  {
    "url": "assets/js/154.7ab63b3c.js",
    "revision": "6e73d2f7798de84630f1cf9c47a3e87b"
  },
  {
    "url": "assets/js/155.9d31f8c8.js",
    "revision": "fc8bbf29774dbd3180e7cbd26ffb3138"
  },
  {
    "url": "assets/js/156.49ebfca8.js",
    "revision": "330c9aca2a3c6e9cc2ae73e54c3a9338"
  },
  {
    "url": "assets/js/157.dc781ba8.js",
    "revision": "23408597f86aa91322e616f4fd531164"
  },
  {
    "url": "assets/js/158.0dfefe6b.js",
    "revision": "5fdd8d206618c77b7aa95cd4659ea7ba"
  },
  {
    "url": "assets/js/159.395c4ca0.js",
    "revision": "b0f1cc59f655127acf465bd8192bec0b"
  },
  {
    "url": "assets/js/16.a975c5a3.js",
    "revision": "29e26585f391babb600225edd92d1714"
  },
  {
    "url": "assets/js/160.1ecffa00.js",
    "revision": "b40462337315cf00a2d75e23de83cfdd"
  },
  {
    "url": "assets/js/161.7acb83dc.js",
    "revision": "0b32185158c339d78097718552a4c767"
  },
  {
    "url": "assets/js/162.ecdd8d82.js",
    "revision": "8876ae71a595aecc05195aee468df1dc"
  },
  {
    "url": "assets/js/163.8c48280c.js",
    "revision": "d31ba272cbf34f7a6dfcaadddb1ad779"
  },
  {
    "url": "assets/js/164.c0b1f112.js",
    "revision": "42210bf80166610b0ac6fb2b51d58820"
  },
  {
    "url": "assets/js/165.5ed657c4.js",
    "revision": "8abc6124cd84c64bd916869511fc9efa"
  },
  {
    "url": "assets/js/166.eac444ee.js",
    "revision": "00c75216231d4a9820c4dc1a45719ac4"
  },
  {
    "url": "assets/js/167.1104e185.js",
    "revision": "c90df14e2940592d9285d5504c1ac3a5"
  },
  {
    "url": "assets/js/168.20ee3f39.js",
    "revision": "3fc21e84a7e86e98be090e5af9b979db"
  },
  {
    "url": "assets/js/169.63996ea5.js",
    "revision": "80d123dfcb470c0ca0bcbd1f24e62cbc"
  },
  {
    "url": "assets/js/17.4bed1b29.js",
    "revision": "7d99ccb0387027fb9f8acdb151741b6f"
  },
  {
    "url": "assets/js/170.e9b564fc.js",
    "revision": "fb7075d18940bd0748cfe3194d5cf901"
  },
  {
    "url": "assets/js/171.770e82e1.js",
    "revision": "c8a9a33d44e94671b435e1b6c6be8518"
  },
  {
    "url": "assets/js/172.11671fc1.js",
    "revision": "2d060c42a9fad113050cc133782a1745"
  },
  {
    "url": "assets/js/173.309e1395.js",
    "revision": "03cfabde2a1ba8a64936e80fba40c57b"
  },
  {
    "url": "assets/js/174.5c76d07e.js",
    "revision": "5058813a77f24506637921c2d1231375"
  },
  {
    "url": "assets/js/175.f14bb8f2.js",
    "revision": "0cbaa14ed35be73a9268d010bc5ff0fc"
  },
  {
    "url": "assets/js/176.52dc4628.js",
    "revision": "b0709f9566d95e0d5cda377f1f0a5afb"
  },
  {
    "url": "assets/js/177.e879b4ed.js",
    "revision": "32b9f5cd56a77e604de38b6efeee6ded"
  },
  {
    "url": "assets/js/178.16e4dc59.js",
    "revision": "514886e0f5ad1c43d9a204a925a4d014"
  },
  {
    "url": "assets/js/179.e9ad6fda.js",
    "revision": "188326314089bcf9ac3a3f88d4dc1b02"
  },
  {
    "url": "assets/js/18.e818ceb2.js",
    "revision": "0b55429b0cbdb55cff7f4cabb6e12708"
  },
  {
    "url": "assets/js/180.b23ed2eb.js",
    "revision": "3775180e6b4fd11361bb54a33e22d0f8"
  },
  {
    "url": "assets/js/181.774d1ac9.js",
    "revision": "f0de37feeee776238345fdf0a4274d38"
  },
  {
    "url": "assets/js/182.a86daed3.js",
    "revision": "87a1f4ac33cc4f91bb5e5ac68b5f0038"
  },
  {
    "url": "assets/js/183.19fafa7e.js",
    "revision": "2fed548c856effd9fa655ba663a1b523"
  },
  {
    "url": "assets/js/184.d3a747c1.js",
    "revision": "29f55e6fb9643dba503c731c5287a76e"
  },
  {
    "url": "assets/js/185.16f429c1.js",
    "revision": "74db1e74f3de2ddd7badac34cac9241c"
  },
  {
    "url": "assets/js/186.0ef4927a.js",
    "revision": "d2736381316cc4fac6a64c3d24c9d9d0"
  },
  {
    "url": "assets/js/187.78473dbe.js",
    "revision": "fd71d2412f094d201ba1a62743e64cd1"
  },
  {
    "url": "assets/js/188.133e3e83.js",
    "revision": "b2162d262984872f6204df6bcd849963"
  },
  {
    "url": "assets/js/189.bf659b74.js",
    "revision": "0ce1d6e0d06384072561735b1d1d69c8"
  },
  {
    "url": "assets/js/19.05f665fd.js",
    "revision": "380f3a28519105a01da77f5c8291c8a2"
  },
  {
    "url": "assets/js/190.adc0bc98.js",
    "revision": "9db1f3efc68bafe87bdf50b02d6a4d32"
  },
  {
    "url": "assets/js/191.8f38cf09.js",
    "revision": "c1ff8f33bd5a7c913fbb1e95a76e3565"
  },
  {
    "url": "assets/js/192.ba36e752.js",
    "revision": "3a924d7ebbcca377ad52e78f638670fe"
  },
  {
    "url": "assets/js/193.2092c173.js",
    "revision": "bb80bac2aec4e119412b37bc400bdd0a"
  },
  {
    "url": "assets/js/194.2865257a.js",
    "revision": "9b014beba8b4b3036b5e7b0a171fe99d"
  },
  {
    "url": "assets/js/195.1abed6b8.js",
    "revision": "66cb71b7cef087ef4ff0c3992db20699"
  },
  {
    "url": "assets/js/196.e5c8d0d3.js",
    "revision": "0778c595f0b6d6b1877c8d8f2c0b0e55"
  },
  {
    "url": "assets/js/197.e24bef1b.js",
    "revision": "683c9c151ecf719968e6d754a48a42bc"
  },
  {
    "url": "assets/js/198.93e2fcb6.js",
    "revision": "e796ea895f1023336218564cbdce6176"
  },
  {
    "url": "assets/js/199.f76645b8.js",
    "revision": "947ca1f2b012be121ec693895fffc3b5"
  },
  {
    "url": "assets/js/2.2c50e1b4.js",
    "revision": "66a24762de37a418e5f88a251085002b"
  },
  {
    "url": "assets/js/20.161c6fa6.js",
    "revision": "284d1ef8e2e17575311adb6d70e6dad0"
  },
  {
    "url": "assets/js/200.8aca9fae.js",
    "revision": "9aa95169cacc0de96928eeb4ab9e8c55"
  },
  {
    "url": "assets/js/201.a3848d7a.js",
    "revision": "70a3f994134fbf6cf1f8ecc2a3f144e9"
  },
  {
    "url": "assets/js/202.251684c5.js",
    "revision": "abf7c5bec17045efa1576182f0f20b5b"
  },
  {
    "url": "assets/js/203.b04e79a5.js",
    "revision": "ce1c36bab2fe46449bfce122c076a17a"
  },
  {
    "url": "assets/js/204.813ef8f6.js",
    "revision": "0a0ea8b75f3cdd35ffc5ad55aef54241"
  },
  {
    "url": "assets/js/205.5fdd8902.js",
    "revision": "68b44484fc607606d28b49183b4540fa"
  },
  {
    "url": "assets/js/206.6ff3d860.js",
    "revision": "5e06f926bfc43eff7c12be602916b6d4"
  },
  {
    "url": "assets/js/207.101cbd4a.js",
    "revision": "c0c0ada8772fc4c322f2b9818b71f177"
  },
  {
    "url": "assets/js/208.3ad41e37.js",
    "revision": "1b69680f3cc8a87b95dedaedcd7d5574"
  },
  {
    "url": "assets/js/21.2941197a.js",
    "revision": "bec6bb3957441d49acea1359001647d5"
  },
  {
    "url": "assets/js/22.6f9e285c.js",
    "revision": "4aa2a7d1da3266cce503491c76173168"
  },
  {
    "url": "assets/js/23.b2e8c601.js",
    "revision": "c81c1e86ed6f761bf49140542efc8c26"
  },
  {
    "url": "assets/js/24.fe3d1cfe.js",
    "revision": "42b9022da0d18bb3311fc33fb7287bd7"
  },
  {
    "url": "assets/js/25.736d8e65.js",
    "revision": "32b923137f3042249982cdd59c29263e"
  },
  {
    "url": "assets/js/26.8f6b4506.js",
    "revision": "09b254598cf7927d4c40a4a8c49e838a"
  },
  {
    "url": "assets/js/27.05a61e75.js",
    "revision": "ac9b162c84780454b2cb78adadd78960"
  },
  {
    "url": "assets/js/28.d09f554a.js",
    "revision": "375124b000ad5a685b3dfab6bca3d44f"
  },
  {
    "url": "assets/js/29.cfa4417a.js",
    "revision": "a6201193611d23450929c76e1f82ec36"
  },
  {
    "url": "assets/js/30.599355b6.js",
    "revision": "4eb04f1ee70dde8be83092aef241fbfe"
  },
  {
    "url": "assets/js/31.f7ff14be.js",
    "revision": "f08858dcd5a38d53e5b19f8408cb76d3"
  },
  {
    "url": "assets/js/32.5fa7b0f7.js",
    "revision": "a536836fd08343dfa09522af03d44779"
  },
  {
    "url": "assets/js/33.8401cace.js",
    "revision": "d6afc0bc65bf5c5e30a9dbdb6168f61a"
  },
  {
    "url": "assets/js/34.872a37f3.js",
    "revision": "3108fc528e804d4c66d7bfa9dac1aad5"
  },
  {
    "url": "assets/js/35.aaa98bce.js",
    "revision": "0bfc1877bf8d478320ad908503e7a29d"
  },
  {
    "url": "assets/js/36.4369eb0c.js",
    "revision": "27b57885a26d418c6bf7076649084441"
  },
  {
    "url": "assets/js/37.9a04f984.js",
    "revision": "94bee1e0e64770a0a52758093feaa318"
  },
  {
    "url": "assets/js/38.211e2282.js",
    "revision": "f6f8709b2a9fdbba79a4a494bb7775a7"
  },
  {
    "url": "assets/js/39.b2c1c554.js",
    "revision": "c87a8369dd2f9418c68e8423bbb3fb69"
  },
  {
    "url": "assets/js/4.6f6867eb.js",
    "revision": "2020ed1713514401c21d9562a247ffae"
  },
  {
    "url": "assets/js/40.4cbebc2e.js",
    "revision": "abfb6ac6eb4240ad1d98790c90ca482c"
  },
  {
    "url": "assets/js/41.ca52f632.js",
    "revision": "892833a0f451782ab2e311b79b484ad9"
  },
  {
    "url": "assets/js/42.a2a68bb8.js",
    "revision": "3f78d0c47b0b91d6407542050bcf4c95"
  },
  {
    "url": "assets/js/43.ef9a4c01.js",
    "revision": "6fd6eeda98ab1a96e875f64b54ba8019"
  },
  {
    "url": "assets/js/44.19b1c3b5.js",
    "revision": "49ea1bc6bdc4d8c34f8d4e4b75e3aca4"
  },
  {
    "url": "assets/js/45.b5115cbe.js",
    "revision": "ce42d877e62151bc116b40c89140b45d"
  },
  {
    "url": "assets/js/46.c0590dcc.js",
    "revision": "f5a57c73b1f580433434d69fdb8a8ed0"
  },
  {
    "url": "assets/js/47.93dc13b2.js",
    "revision": "e671f242c7fadc3fa604f0431a30ede0"
  },
  {
    "url": "assets/js/48.b80be821.js",
    "revision": "37b327d56bfda7e6c964443f69ecb500"
  },
  {
    "url": "assets/js/49.e23720e7.js",
    "revision": "c66a5206f8d92505514e1d09d0f9a154"
  },
  {
    "url": "assets/js/5.b57da069.js",
    "revision": "bb9de7dcd6ff9bfc988bd888b12a64c2"
  },
  {
    "url": "assets/js/50.51292be6.js",
    "revision": "e8a5a41da96b0aafd94e89b2dde3bf56"
  },
  {
    "url": "assets/js/51.bf1f06e0.js",
    "revision": "89a4c92601f526734a6c206b8941fdda"
  },
  {
    "url": "assets/js/52.ee7de589.js",
    "revision": "ec2dea63451240e0cd7e11fee51e6e26"
  },
  {
    "url": "assets/js/53.0d1bb75c.js",
    "revision": "fdd63a71321f2d2698f8ab248fd539d1"
  },
  {
    "url": "assets/js/54.94ea58b2.js",
    "revision": "e1e642ec95285046568ef2150efd0f25"
  },
  {
    "url": "assets/js/55.460a720b.js",
    "revision": "01180ee03fdb0ef849ddf28527a12569"
  },
  {
    "url": "assets/js/56.e65bd688.js",
    "revision": "fe972110466606037627ce2abefdfdda"
  },
  {
    "url": "assets/js/57.6358b87f.js",
    "revision": "8b41ece0f8837cc4636a3b4864c0bb34"
  },
  {
    "url": "assets/js/58.e3eb3c4b.js",
    "revision": "6e8114d1212e070384d7315038b3b37a"
  },
  {
    "url": "assets/js/59.c55c21ac.js",
    "revision": "23df3947d164c97b041eaa817378850c"
  },
  {
    "url": "assets/js/6.674d6b61.js",
    "revision": "737452b6fb8eec0f43d810bce1a6e04d"
  },
  {
    "url": "assets/js/60.2daa8e6f.js",
    "revision": "876da9c673e96a5a84f53eea26398d95"
  },
  {
    "url": "assets/js/61.c27a0206.js",
    "revision": "6a00b12f692d9ed5bd0563f3e2d7f3bd"
  },
  {
    "url": "assets/js/62.801df142.js",
    "revision": "6fbac084e829f9123df9bb4f742eebeb"
  },
  {
    "url": "assets/js/63.4b83250d.js",
    "revision": "0c803ef725a6f5ef94fb7c9e26b458a7"
  },
  {
    "url": "assets/js/64.c3a4696c.js",
    "revision": "4da7576180f1afde9f21b169692cbe14"
  },
  {
    "url": "assets/js/65.7e79a7d1.js",
    "revision": "0cc0ac7278765111499f572ed7d01b4a"
  },
  {
    "url": "assets/js/66.850c38b1.js",
    "revision": "b7bef64c4983dad82b70b0ad6508aef6"
  },
  {
    "url": "assets/js/67.f4cff122.js",
    "revision": "a0cd35899b59656ef445b34e0d5e11fc"
  },
  {
    "url": "assets/js/68.5efdd328.js",
    "revision": "d8f0fd27258cf6b7ce22fdd199bd7bfe"
  },
  {
    "url": "assets/js/69.01146de6.js",
    "revision": "b138447b1717da458477303d8bdf86aa"
  },
  {
    "url": "assets/js/7.00b87407.js",
    "revision": "495042b99ed45bf920e97dc583ed0334"
  },
  {
    "url": "assets/js/70.36321d5d.js",
    "revision": "61e3a3508a8aac23f7ac29ed8e82cb76"
  },
  {
    "url": "assets/js/71.af22b512.js",
    "revision": "7d201057234e88930bbb08ed6fda3d12"
  },
  {
    "url": "assets/js/72.75897932.js",
    "revision": "517935d90795670f1b51efdc2d8c455d"
  },
  {
    "url": "assets/js/73.3bf3768c.js",
    "revision": "37ead8bc06d7c3727b528a16dab8f0ae"
  },
  {
    "url": "assets/js/74.e4696e91.js",
    "revision": "caf33622349597aae7c0b5b671b1c579"
  },
  {
    "url": "assets/js/75.8d7c2474.js",
    "revision": "8da4f9c079f7d65413db48f5556911d3"
  },
  {
    "url": "assets/js/76.45eeaa17.js",
    "revision": "9f46983edf970fc84005d7afd804616b"
  },
  {
    "url": "assets/js/77.afaeb100.js",
    "revision": "84c36dafbbe7ae5f6d9b95e1385f93cd"
  },
  {
    "url": "assets/js/78.6a416efb.js",
    "revision": "11f523592884f71f34d8a9e9892d63a7"
  },
  {
    "url": "assets/js/79.22b37e6d.js",
    "revision": "be3ab56e65435fd83e4ab7db9d83a733"
  },
  {
    "url": "assets/js/8.6b96dca6.js",
    "revision": "a1faad942f7bc0dba68d1b7dc92b5b6b"
  },
  {
    "url": "assets/js/80.94180cc2.js",
    "revision": "0cc4f70417b1433d685b308391d4c5c2"
  },
  {
    "url": "assets/js/81.071ade3b.js",
    "revision": "d3f5c30d1d8d0e1846521cca7cb281a9"
  },
  {
    "url": "assets/js/82.1932b897.js",
    "revision": "8bc79126b56b9964e587b45ac91f0837"
  },
  {
    "url": "assets/js/83.d93ee3fa.js",
    "revision": "a8eef11dc9988de13165c3a76940fd81"
  },
  {
    "url": "assets/js/84.2b206000.js",
    "revision": "bb3b35c3f54630741441b5d3254b262a"
  },
  {
    "url": "assets/js/85.128de3b9.js",
    "revision": "41109d5c33805f7384fb09fc348dbd2d"
  },
  {
    "url": "assets/js/86.3235b94e.js",
    "revision": "4996e19832295e9074bd73e52d382fff"
  },
  {
    "url": "assets/js/87.ade25e17.js",
    "revision": "8691d905f99fa8a38f1618df8b81cbfb"
  },
  {
    "url": "assets/js/88.4b5f05dc.js",
    "revision": "96bf055830bd377b784e1d97c3ea5b97"
  },
  {
    "url": "assets/js/89.975dbf52.js",
    "revision": "e2626a711e2429060e4a8717c8f2274f"
  },
  {
    "url": "assets/js/9.d6cb8e44.js",
    "revision": "d7eb73602ec7f20606d3c5190740d8c2"
  },
  {
    "url": "assets/js/90.4a050388.js",
    "revision": "199bdfe3c43f8cef0aab76365974868d"
  },
  {
    "url": "assets/js/91.73c871e1.js",
    "revision": "bd3842199ee560e5ab334ee395c39fe8"
  },
  {
    "url": "assets/js/92.333d83b6.js",
    "revision": "01567ab4642fec806d840e5efbe20530"
  },
  {
    "url": "assets/js/93.25e4aff6.js",
    "revision": "9fae955b3bcf4a8d0d687a27b46481ba"
  },
  {
    "url": "assets/js/94.303e35d3.js",
    "revision": "f918d232bdda1647cdc15a8733bb0929"
  },
  {
    "url": "assets/js/95.4ea363f4.js",
    "revision": "92b66e1dc876d2ffd0af955457d92729"
  },
  {
    "url": "assets/js/96.29333c28.js",
    "revision": "2a04e9c9d785dd6bebe9e521b64366de"
  },
  {
    "url": "assets/js/97.4cd8c80f.js",
    "revision": "610fb2ffee3953c6930215ab22bd5b86"
  },
  {
    "url": "assets/js/98.827b1583.js",
    "revision": "0cf3a31d8ea05d96b40349b943f465bf"
  },
  {
    "url": "assets/js/99.1a612863.js",
    "revision": "731d085179e939d6351ff7c454de1495"
  },
  {
    "url": "assets/js/app.a1dcc4f6.js",
    "revision": "6ffcad66483387618209fe948523fc40"
  },
  {
    "url": "blogs/AI/index.html",
    "revision": "f96839b2e756a12beade9f7992fd9cfc"
  },
  {
    "url": "blogs/AI/模型/keras.html",
    "revision": "c1a0c33b060313ac8e9f2fa57a2c60c8"
  },
  {
    "url": "blogs/AI/模型/lstm.html",
    "revision": "004a08780e2e670ed2a098a7d6b79fba"
  },
  {
    "url": "blogs/AI/模型/机器学习算法地图.html",
    "revision": "652a468dab5eb2da3b6a34bb6794447b"
  },
  {
    "url": "blogs/index.html",
    "revision": "db2fc5a6d34ba213e3d219389c1f11bb"
  },
  {
    "url": "blogs/wiki/blog/Aifred5搜索不到本地文件的解决办法.html",
    "revision": "6a758d7d5788f817b0c7a112a938dd16"
  },
  {
    "url": "blogs/wiki/blog/docker安装vim.html",
    "revision": "822de87caab415916ba3271e817e3945"
  },
  {
    "url": "blogs/wiki/blog/Docker搭建iMaoTai脚本实现自动化申购.html",
    "revision": "1857bf80bed2f46bd6504dbfaffc84b6"
  },
  {
    "url": "blogs/wiki/blog/docker设置开机自启和容器自启.html",
    "revision": "4ed316d32166d0248146c13eeed652cd"
  },
  {
    "url": "blogs/wiki/blog/mac使用homebrew无法安装nginx解决方案.html",
    "revision": "7bf10499a45b5cc7868345ada298d267"
  },
  {
    "url": "blogs/wiki/blog/nextcloud不被信任.html",
    "revision": "93a4f949ba09b4362aad548c3ba5bebd"
  },
  {
    "url": "blogs/wiki/blog/ubuntu设置虚拟显示器且远程连接.html",
    "revision": "2b523f70648ac1f6d3461f1642c328d4"
  },
  {
    "url": "blogs/wiki/blog/使用基于 Github Actions 实现一个免费的任务调度工具.html",
    "revision": "49f5c896db05da10e61d680c659a254b"
  },
  {
    "url": "blogs/wiki/blog/部署Django项目并使其在后台一直运行.html",
    "revision": "10a3824dab5fb4ee449fd977673a3a3a"
  },
  {
    "url": "blogs/wiki/index.html",
    "revision": "b1ade77509b5830e4ff49d2928c2a9d7"
  },
  {
    "url": "blogs/wiki/其他/IaaS、PaaS、SaaS的区别.html",
    "revision": "00ada48bdd10bc9bda69528334abd8f4"
  },
  {
    "url": "blogs/wiki/其他/最适合程序员的笔记软件.html",
    "revision": "969d93d937ac1de823dc83baac045eaa"
  },
  {
    "url": "blogs/wiki/笔记/bat批处理语法.html",
    "revision": "de6e0717c891131e7add098e10d1e7c0"
  },
  {
    "url": "blogs/wiki/笔记/conda命令.html",
    "revision": "3e36293811c8ddc96b914c0ba2a7151f"
  },
  {
    "url": "blogs/wiki/笔记/docker命令.html",
    "revision": "cc70617ae2994c6a4ab45f80be8a5d54"
  },
  {
    "url": "blogs/wiki/笔记/Docker的基本了解和使用.html",
    "revision": "855b1011b84fe417587a09facc12f7b2"
  },
  {
    "url": "blogs/wiki/笔记/dokcer容器常用命令总结.html",
    "revision": "ee160fefa50308dc7f4fe527972b3b93"
  },
  {
    "url": "blogs/wiki/笔记/git使用手册.html",
    "revision": "7f1107398e9da0fa3023cc0974294655"
  },
  {
    "url": "blogs/wiki/笔记/git常用命令速查.html",
    "revision": "2fc9267830b8521632ab97531df39863"
  },
  {
    "url": "blogs/wiki/笔记/git提交规范.html",
    "revision": "f1d4d21a57fecef2e98ddc5269b65e08"
  },
  {
    "url": "blogs/wiki/笔记/k8s基本命令与pod管理.html",
    "revision": "dc412440decccbdadff47a53dccede49"
  },
  {
    "url": "blogs/wiki/笔记/linux常用命令.html",
    "revision": "d9ed372348f6f718cf4c7a5351bb263a"
  },
  {
    "url": "blogs/wiki/笔记/markdown语法.html",
    "revision": "ede9193a002ef2e43ff9402920764e8c"
  },
  {
    "url": "blogs/wiki/笔记/npm和yarn常用命令.html",
    "revision": "df1e6f69b661007c4621bec3308794ed"
  },
  {
    "url": "blogs/wiki/笔记/npm常用命令.html",
    "revision": "a2897aaf92251ebbef64ebd5aec62ab7"
  },
  {
    "url": "blogs/wiki/笔记/nvm常用命令.html",
    "revision": "f3c357aefb6ca919dae1b3d0ec9b17e7"
  },
  {
    "url": "blogs/wiki/笔记/pnpm的安装与使用.html",
    "revision": "430fb6cfd4d069b5a3cc605069329e37"
  },
  {
    "url": "blogs/wiki/笔记/py3和py2的区别总结.html",
    "revision": "5fe95b8d26cd26b74fbea01773f1101d"
  },
  {
    "url": "blogs/wiki/笔记/Scala学习笔记.html",
    "revision": "a91bacad5a1161cd51d6247f07304d40"
  },
  {
    "url": "blogs/wiki/笔记/TCP&UDP.html",
    "revision": "1fac83b4d5c625fc779a1f740ca88c01"
  },
  {
    "url": "blogs/wiki/笔记/threeJs笔记.html",
    "revision": "d1e6df387fa1e8785a895c3e3b4137f4"
  },
  {
    "url": "blogs/wiki/笔记/windows查看端口占用且结束进程.html",
    "revision": "ecd6de521195fbcd198a486c215bd4e3"
  },
  {
    "url": "blogs/wiki/笔记/yaml学习笔记.html",
    "revision": "15fab11e12f850c5dfbf33a96356ff98"
  },
  {
    "url": "blogs/wiki/笔记/常用bat命令.html",
    "revision": "e28f5623ca889f2f99b872fb248abcf1"
  },
  {
    "url": "blogs/wiki/笔记/常用正则表达式.html",
    "revision": "9662402faab6d60dd686c023e4f7c24c"
  },
  {
    "url": "blogs/wiki/笔记/正则表达式语法.html",
    "revision": "c44c6fa79729ab6cb77974b0822037a1"
  },
  {
    "url": "blogs/wiki/笔记/算法的时间复杂度和空间复杂度.html",
    "revision": "6730c6a7fec3fe4c5d2a75910c719689"
  },
  {
    "url": "blogs/前端/index.html",
    "revision": "5a11b2dec1e3f36e5e24e132838b231d"
  },
  {
    "url": "blogs/前端/react/react教程.html",
    "revision": "f8d240b5819b5a8dd7ad074606ff42f6"
  },
  {
    "url": "blogs/前端/vue/vue移动端适配方案.html",
    "revision": "dce912110f320db81215468daf25b9bc"
  },
  {
    "url": "blogs/前端/vue/vue组件间传值的11种方式.html",
    "revision": "a69a9d5d0a9afc9286a84389b3093e07"
  },
  {
    "url": "blogs/前端/vue/vue路由模式为history，打包后页面空白的处理方式.html",
    "revision": "6772c3c1f9991a27498dbb0b107f469a"
  },
  {
    "url": "blogs/前端/vue/使用vue+iview Form组件,按enter键阻止页面刷新.html",
    "revision": "a4b00121e7f97bbebfa68f59ef46b6ab"
  },
  {
    "url": "blogs/前端/vue/基于xterm的网页版终端.html",
    "revision": "f981e4100f621e2e9a846aac6858d548"
  },
  {
    "url": "blogs/前端/基础/CSS动画.html",
    "revision": "036a66b5d2ba9815911b3c5f5e2fc773"
  },
  {
    "url": "blogs/前端/基础/CSS定位详解.html",
    "revision": "28753d7d84e504a5464b3b71cf6680f0"
  },
  {
    "url": "blogs/前端/基础/flex布局.html",
    "revision": "df9eb6ebdb11be84c7fc099917745f08"
  },
  {
    "url": "blogs/前端/基础/js模块的导入导出.html",
    "revision": "b7ce5a2ab90ae8f213175c6afb621347"
  },
  {
    "url": "blogs/前端/基础/sass用法指南.html",
    "revision": "dd29f1b1ca1f6e9e2bb5444a3528f7d0"
  },
  {
    "url": "blogs/前端/基础/前端开发的历史和趋势.html",
    "revision": "ae3486e9b94b88dfa8b958c469f6520d"
  },
  {
    "url": "blogs/前端/基础/前端模块化详解.html",
    "revision": "3ef963ad823e9436f69559af9ed87d03"
  },
  {
    "url": "blogs/前端/基础/网页中使用希腊字母.html",
    "revision": "275d48a61c2a29e853dde95cd37753b0"
  },
  {
    "url": "blogs/前端/基础/网页色彩方案.html",
    "revision": "c07e8b739c6c0a2c6d676fbe68753836"
  },
  {
    "url": "blogs/前端/基础/跨域的几种常见解决方案.html",
    "revision": "2e9645124f529f3014d25ee215a38f44"
  },
  {
    "url": "blogs/前端/技巧/prettier常用配置项.html",
    "revision": "d20717a636f052b4390957de40cae48f"
  },
  {
    "url": "blogs/前端/技巧/前端抓包神器whistle.html",
    "revision": "372438971ee7c812184081d072f1182e"
  },
  {
    "url": "blogs/前端/技巧/简易代码编辑框示例.html",
    "revision": "d7c4a89320b43c09fb454bc36c5617ad"
  },
  {
    "url": "blogs/前端/技巧/阿里巴巴前端代码规范集成工具F2ELint使用教程.html",
    "revision": "c5af2a2a4206ed8385794677644f6432"
  },
  {
    "url": "blogs/后端/index.html",
    "revision": "0aaa054c168049a4459e9453b222673a"
  },
  {
    "url": "blogs/后端/python/JsonItemExporter和JsonLinesItemExporter保存数据的异同.html",
    "revision": "eb5403d30ee04d113f867dcd98496f2e"
  },
  {
    "url": "blogs/后端/python/python 爬虫利器之 PyQuery 的用法.html",
    "revision": "5fdcc2096e180d6420a1e0c378dbd397"
  },
  {
    "url": "blogs/后端/python/pythonic.html",
    "revision": "84d71f6c3c24ddfee132dc120842de19"
  },
  {
    "url": "blogs/后端/python/python中list的五种查找方法.html",
    "revision": "4eac7a633acd9c8f13fc1b3a81146865"
  },
  {
    "url": "blogs/后端/python/python将list转换为csv.html",
    "revision": "41c80213b0678d0cfd8afb0732136030"
  },
  {
    "url": "blogs/后端/python/python异常处理.html",
    "revision": "46ce452ca5e64c847e5ed8643ccf3fc9"
  },
  {
    "url": "blogs/后端/python/python爬虫利器之scrapy的用法.html",
    "revision": "5f1cd7afda9bec5a53fdedbe9411e35b"
  },
  {
    "url": "blogs/后端/数据库/mongodb教程.html",
    "revision": "626fc816cf3623096e321d2dd32b1a6b"
  },
  {
    "url": "blogs/后端/数据库/mongodb配置和操作.html",
    "revision": "c4b68b3d130d62b7e28a2e123cb4a63c"
  },
  {
    "url": "blogs/官方文档/index.html",
    "revision": "ca0f2ec8f85fa62919128a1fcd4f179c"
  },
  {
    "url": "blogs/官方文档/常用/ts.html",
    "revision": "b3df3030e39d8a00e381fa1771de523f"
  },
  {
    "url": "blogs/官方文档/常用/vue.html",
    "revision": "f6cd4d8912cd2f34df3aa40fde7ee73b"
  },
  {
    "url": "blogs/官方文档/常用/vuepress.html",
    "revision": "77a66e8257ba01f4641b6fdb903e65d7"
  },
  {
    "url": "bookmarks/stock/不同炒作阶段特征及介入点.html",
    "revision": "4452c15a30ed28a3f97451a578dafe8f"
  },
  {
    "url": "bookmarks/stock/交易该如何复盘.html",
    "revision": "f54d098eb01a418f644599ce2b410d0e"
  },
  {
    "url": "bookmarks/stock/交易该如何看盘.html",
    "revision": "3409a76c43a7b5894a702716e3e1796e"
  },
  {
    "url": "bookmarks/stock/千股千炒.html",
    "revision": "326f4c3b2234be41820d867c6e06fcb3"
  },
  {
    "url": "bookmarks/stock/名词解释高低切.html",
    "revision": "f53ed1cee2de68d7ed85a276dd54336e"
  },
  {
    "url": "bookmarks/stock/市场情绪周期演变.html",
    "revision": "2e3c5abd491d908ac01d9f9c6a0c7edb"
  },
  {
    "url": "bookmarks/stock/市场情绪战连板龙连载小周期切换节点.html",
    "revision": "30e427c48ed0d49c33c7683de7c6d775"
  },
  {
    "url": "bookmarks/stock/市场情绪战连板龙连载小周期首板高低切.html",
    "revision": "b0bcbed124427d580898da73bd5c5797"
  },
  {
    "url": "bookmarks/stock/市场行情启动特征.html",
    "revision": "1ad939135cb8f17fe2ac1e20fcb2f4d3"
  },
  {
    "url": "bookmarks/stock/情绪大于题材，关键周期阶段特征详解析.html",
    "revision": "68b77e9f2fff015896c832391013eea0"
  },
  {
    "url": "bookmarks/stock/情绪拐点具体标准.html",
    "revision": "acf9299ffd668b7a47ddb8703ff2d867"
  },
  {
    "url": "bookmarks/stock/日内级别情绪判断参考(1).html",
    "revision": "15e1b8f0a5a959186ec65e75dd4b4556"
  },
  {
    "url": "bookmarks/stock/日内级别情绪判断概述(2).html",
    "revision": "5ff8e185cc1f3aa517d26d66450ade71"
  },
  {
    "url": "bookmarks/stock/混沌情绪结构.html",
    "revision": "6a135b63cbdc139a383af770e0f5c2ce"
  },
  {
    "url": "bookmarks/stock/混沌情绪结构详细分析(5).html",
    "revision": "2b9a6cff547e61d1d78507958cff562f"
  },
  {
    "url": "bookmarks/stock/混沌期如何介入(6).html",
    "revision": "5537531d0f9e1d8fb0ba572fdfc8321c"
  },
  {
    "url": "bookmarks/stock/游资传-小鳄鱼.html",
    "revision": "dc355b454ce0eebeb92e4b10cfaecbc5"
  },
  {
    "url": "bookmarks/stock/游资传习录-金田哥大力男.html",
    "revision": "b0a045d41de093cdab718a693221c80b"
  },
  {
    "url": "bookmarks/stock/论大局观及情绪周期.html",
    "revision": "7851e2f0d4277931fea310fe0f2393b9"
  },
  {
    "url": "bookmarks/stock/退潮期介入策略(7).html",
    "revision": "2dff938b2db385caa6f72a33e3f35d93"
  },
  {
    "url": "bookmarks/stock/退潮期情绪分析(1).html",
    "revision": "d91dfe035ce7a66112e741f3dc3ccba8"
  },
  {
    "url": "bookmarks/stock/退潮期结构2.html",
    "revision": "03caa064d70629f558b9616f1f379271"
  },
  {
    "url": "bookmarks/stock/集合竞价解释篇-1.html",
    "revision": "4a82295ac7e1abf1877c6a5f4bdbba07"
  },
  {
    "url": "bookmarks/stock/集合竞价解释篇-2.html",
    "revision": "5cf1667c84ccceb9d335cdb20ef38eb5"
  },
  {
    "url": "bookmarks/stock/题材联动与扩散及板块轮动的梯层与次序.html",
    "revision": "023915522624933a1e8f0cc97715d25a"
  },
  {
    "url": "bookmarks/其他/awesomeGithub.html",
    "revision": "2f723604cec6a799d5eeaaf7764ee76f"
  },
  {
    "url": "bookmarks/其他/世界杯历史赛程比分全集.html",
    "revision": "91ac8ad1fe70dac2fcbd0688b832a270"
  },
  {
    "url": "bookmarks/其他/备忘.html",
    "revision": "2cdf52fd52637b53d3baeeb694d85d33"
  },
  {
    "url": "bookmarks/复盘/个股详情/中天科技.html",
    "revision": "046b4f1cff3fcb9c689a6d8cfaf113e8"
  },
  {
    "url": "bookmarks/复盘/个股详情/中际旭创.html",
    "revision": "2c60b1662b3eb35d5ffce5f3145eee00"
  },
  {
    "url": "bookmarks/复盘/个股详情/云南锗业.html",
    "revision": "e04d659e04ec2be08fbd7a982edd5446"
  },
  {
    "url": "bookmarks/复盘/个股详情/亨通光电.html",
    "revision": "da9a2ad9f1f6ad150c95c24c27442d8a"
  },
  {
    "url": "bookmarks/复盘/个股详情/利通电子.html",
    "revision": "8c1e133c2b93b5d2ac6c476713caefd8"
  },
  {
    "url": "bookmarks/复盘/个股详情/华特气体.html",
    "revision": "57a1a991af8ed50a636dc43fac087c4a"
  },
  {
    "url": "bookmarks/复盘/个股详情/协创数据.html",
    "revision": "430484b0f53849fe9d35a1df85f04b3a"
  },
  {
    "url": "bookmarks/复盘/个股详情/天孚通信.html",
    "revision": "dfa9b771e82944200572537bc31c0546"
  },
  {
    "url": "bookmarks/复盘/个股详情/天通股份.html",
    "revision": "256b410e5ca99906fb4d31148b6323e1"
  },
  {
    "url": "bookmarks/复盘/个股详情/宏景科技.html",
    "revision": "5f832d0f51b495ad05dd7a0e05632fe8"
  },
  {
    "url": "bookmarks/复盘/个股详情/帝尔激光.html",
    "revision": "05629eda771f9b60c8f18788ece81dd4"
  },
  {
    "url": "bookmarks/复盘/个股详情/恒为科技.html",
    "revision": "bd51fee2e89c8fb2414bbb1dadf3db8e"
  },
  {
    "url": "bookmarks/复盘/个股详情/拓维信息.html",
    "revision": "7613e7d680e6c69adf983392b3a5c8e1"
  },
  {
    "url": "bookmarks/复盘/个股详情/新易盛.html",
    "revision": "e411821a0d421617138423dd65b00ee5"
  },
  {
    "url": "bookmarks/复盘/个股详情/欧莱新材.html",
    "revision": "f1fddb18301e447d069518faccf5a57d"
  },
  {
    "url": "bookmarks/复盘/个股详情/沃格光电.html",
    "revision": "c1519eb7866531706524952bb5a6832b"
  },
  {
    "url": "bookmarks/复盘/个股详情/源杰科技.html",
    "revision": "29f0bfedaa18cb1275df500153eaf17d"
  },
  {
    "url": "bookmarks/复盘/个股详情/烽火通信.html",
    "revision": "f969d91d9287d5970c70d653c6386c11"
  },
  {
    "url": "bookmarks/复盘/个股详情/路维光电.html",
    "revision": "70510eb34f7322de254a1b6e52dc0431"
  },
  {
    "url": "bookmarks/复盘/个股详情/通鼎互联.html",
    "revision": "d05536f3b36cce8d59bcf4f3189c67a5"
  },
  {
    "url": "bookmarks/复盘/个股详情/长飞光纤.html",
    "revision": "b3a4c45b47a6c90d1226a6f3d725a8e1"
  },
  {
    "url": "bookmarks/复盘/概念/AI算力细分领域.html",
    "revision": "4fa7b5db61342451c0fc350258b2699f"
  },
  {
    "url": "bookmarks/复盘/概念/CPO.html",
    "revision": "3ef528a3897505e582bd26565280415a"
  },
  {
    "url": "bookmarks/复盘/概念/OCS.html",
    "revision": "4b781ba44f4cfa04126483b95324a5fd"
  },
  {
    "url": "bookmarks/复盘/概念/先进封装.html",
    "revision": "96416408646355e297c6cec2716da0a1"
  },
  {
    "url": "bookmarks/复盘/概念/光模块.html",
    "revision": "a015fab7f22d12c929187ab39df394af"
  },
  {
    "url": "bookmarks/复盘/概念/光纤光缆.html",
    "revision": "d3ad79e478a226a1c3765c962607ba36"
  },
  {
    "url": "bookmarks/复盘/概念/电力.html",
    "revision": "c8f06cf5d704a88bd29f8dc59e29e883"
  },
  {
    "url": "bookmarks/复盘/概念/电子布.html",
    "revision": "f059a3d8a2878842f1dd3074ab6d0e50"
  },
  {
    "url": "bookmarks/复盘/概念/算力租赁&华为昇腾.html",
    "revision": "ca52b74696d8e8222973abf8c0e7e455"
  },
  {
    "url": "bookmarks/复盘/概念/钠离子电池.html",
    "revision": "1e2c8aa22c65de3b82614eebb1527474"
  },
  {
    "url": "bookmarks/大模型/llamacpp部署脚本.html",
    "revision": "7b20610f9101589c5cb52a052611b94f"
  },
  {
    "url": "bookmarks/大模型/openclaw.html",
    "revision": "fda4b217f22f604dba5c7ef88e323aa9"
  },
  {
    "url": "bookmarks/大模型/文生图测试 - flux.1 kontext.html",
    "revision": "7412c6ef0f87997c4d11dc36b33a5170"
  },
  {
    "url": "bookmarks/大模型/模型测试.html",
    "revision": "10734aae73e422c09f52e27dd5242d98"
  },
  {
    "url": "bookmarks/实用技巧/2024最新国内外手机短信验证码接码平台收集汇总（可免费用）.html",
    "revision": "f7ae3f54e7b63e12107d62bfd7d5f30d"
  },
  {
    "url": "bookmarks/实用技巧/mac微信多开.html",
    "revision": "20073eb55a56f25079f69f773cc5f83a"
  },
  {
    "url": "bookmarks/实用技巧/Mac技巧之苹果电脑睡眠唤醒后 WiFi 网速变慢甚至连不上网的解决方法.html",
    "revision": "c4281ccbf96980ea240e0c45636b50fd"
  },
  {
    "url": "bookmarks/实用技巧/Windows自带微软拼音一键添加小鹤双拼.html",
    "revision": "c36fe186d93d1cd4f04578b2ee3d5910"
  },
  {
    "url": "bookmarks/实用技巧/换系统指南.html",
    "revision": "205b345226365d9f0fed45e37a750a6d"
  },
  {
    "url": "bookmarks/实用技巧/苹果手机IOS如何去除常用软件的开屏广告？.html",
    "revision": "af5e192d1b2596e9b7c94eff36f988b2"
  },
  {
    "url": "bookmarks/常用/AI.html",
    "revision": "4f4d5c8fecbcde053594e1219c75fb10"
  },
  {
    "url": "bookmarks/常用/前端常用.html",
    "revision": "778c7f0e681e89678b541135206e3c7c"
  },
  {
    "url": "bookmarks/常用/小工具.html",
    "revision": "b9c2a92adcf1d6acf2c6ba2bfee8b2c6"
  },
  {
    "url": "bookmarks/常用/常用网址.html",
    "revision": "53e1698a1877276a5798a0977ae19f25"
  },
  {
    "url": "bookmarks/常用/提示词.html",
    "revision": "46adc9cb0212cd38e74e2b7bbdf92da1"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "b88311c907a9fb67d544e218dda841c3"
  },
  {
    "url": "categories/chatgpt/index.html",
    "revision": "04f2ecd725c8bef4a9b5b126981c089e"
  },
  {
    "url": "categories/index.html",
    "revision": "151773e4c4dc659b796502d5bd92234a"
  },
  {
    "url": "categories/ItemExporter/index.html",
    "revision": "e645f1677baaeb02e1247265dcc8de76"
  },
  {
    "url": "categories/mongodb/index.html",
    "revision": "0f1ed46fba1b8f3e6f4efcfe548bd611"
  },
  {
    "url": "categories/PyQuery/index.html",
    "revision": "1e9d7fa2ec236b67934a7fdf0422ad05"
  },
  {
    "url": "categories/python/index.html",
    "revision": "1b882e485bee484e400320333bec4a8e"
  },
  {
    "url": "categories/世界杯/index.html",
    "revision": "b555aa12aeadfe992eb9c446f3406f95"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c4e7c523932fa1c43e68b3cfd549766c"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "f629bfd1040601d9c160f5d2fe1b2846"
  },
  {
    "url": "categories/前端教程/index.html",
    "revision": "b2eeba16217e76ecb99c51c44bbc3b02"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "477139f9bc85a6b12ebf6b5edd58b0fe"
  },
  {
    "url": "categories/备忘/index.html",
    "revision": "5c4550ec93b497e028361af547b1c76c"
  },
  {
    "url": "categories/常用/index.html",
    "revision": "563a17348ecf789e3335ba2c2f60872a"
  },
  {
    "url": "categories/微信/index.html",
    "revision": "46bfc568625af242aa15bedd537db515"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "b78e51695b19bc8dc578f977129102f1"
  },
  {
    "url": "categories/收藏/page/2/index.html",
    "revision": "74cd6aefebadc0772667bd2bd44f1789"
  },
  {
    "url": "categories/教程/index.html",
    "revision": "2e63b3f428b64b9604a2b967a77141f8"
  },
  {
    "url": "categories/爬虫/index.html",
    "revision": "aa317a075f6432880d50e4d0e194ee5e"
  },
  {
    "url": "categories/社会/index.html",
    "revision": "dd835fa49b763895d3e1541308b07e58"
  },
  {
    "url": "categories/科普/index.html",
    "revision": "71ea9458316a7640cb298d60d45dc05b"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "1291fe1931e020aa7fc8a55d801d8353"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "1610b9920d69b06693fa5dad28019a79"
  },
  {
    "url": "categories/股票/index.html",
    "revision": "7db71bb9a49a8d3eea5f114996ed1e42"
  },
  {
    "url": "categories/股票/page/2/index.html",
    "revision": "d183641e11c75e3d883cb28fb4bf2175"
  },
  {
    "url": "categories/股票/page/3/index.html",
    "revision": "f8c2fdd5bfc4056c4217ca2e37e6edac"
  },
  {
    "url": "categories/解决方案/index.html",
    "revision": "e099f7804109cb8f3b5c56b21a2bda68"
  },
  {
    "url": "files/loveEyes.js",
    "revision": "c1fda8f1201dbc52af6e3876200fee3d"
  },
  {
    "url": "friends/index.html",
    "revision": "c01fb31c76fc07df4eee80090b80a3ca"
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
    "revision": "4ed16c919ff2737862895867046117ec"
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
    "url": "others/index.html",
    "revision": "087aab1a3529adc9a1053afb2785b4af"
  },
  {
    "url": "others/interview/全国互联网公司汇总.html",
    "revision": "487226a9efc1c10cb40335f329ed0484"
  },
  {
    "url": "others/interview/前端学习路线.html",
    "revision": "2dfcbb239ba1cf0d58e336f1b5024025"
  },
  {
    "url": "others/interview/前端面试之 CSS 篇.html",
    "revision": "a794ea2bb6d816635e0308c442151603"
  },
  {
    "url": "others/interview/前端面试之 HTML 篇.html",
    "revision": "9255ba3c9cde1d3389159728364c19ff"
  },
  {
    "url": "others/interview/前端面试之 JavaScript 篇.html",
    "revision": "3089c010546accf8c66e7700b6687558"
  },
  {
    "url": "others/interview/前端面试之 vue 篇.html",
    "revision": "3c7a06c1c60b52b9bf52534bcbd70c2a"
  },
  {
    "url": "others/interview/前端面试之前端工程化篇.html",
    "revision": "ec4533ee4e8b7b7698df0ac2df4abd52"
  },
  {
    "url": "others/interview/前端面试之性能优化篇.html",
    "revision": "4d2508125147b9f5568f46a173a04467"
  },
  {
    "url": "others/interview/前端面试之浏览器原理篇.html",
    "revision": "32093ae96624298f065d102499a5954c"
  },
  {
    "url": "others/interview/前端面试之计算机网络篇.html",
    "revision": "44589d2e7f24d9255f1beecfd4839252"
  },
  {
    "url": "others/interview/前端面试准备.html",
    "revision": "b40c1afafbce2f155f9f910e184ebb81"
  },
  {
    "url": "others/interviewReady.html",
    "revision": "355571371b996c55631f89bfa62345f6"
  },
  {
    "url": "others/jsontool.html",
    "revision": "ff48307a614c9bbf6e751f8ff245dfdd"
  },
  {
    "url": "others/loveU.html",
    "revision": "0e08adf8b07a15e363585a9e2df63e84"
  },
  {
    "url": "others/other/other/pastLife.html",
    "revision": "84f70e88a7b7568caf024058e8e00d59"
  },
  {
    "url": "others/other/other/socialEngineering.html",
    "revision": "1a6ce1ddc5ab27d251fb62f39b8b6c38"
  },
  {
    "url": "others/other/other/transferRecord.html",
    "revision": "f3fa9b60b5e3db56f41c74927c39a682"
  },
  {
    "url": "others/projects.html",
    "revision": "d7a8cf9c44def8f64425727ee1a174f7"
  },
  {
    "url": "others/resume.html",
    "revision": "505f2e2445c1b8771bf0eae7ea8066d8"
  },
  {
    "url": "others/summary-question.html",
    "revision": "d1b29f865ebf9d5964dcdac2ec0a199d"
  },
  {
    "url": "others/备份/chatgpt中文调教指南.html",
    "revision": "78bf76ae128a367e92d45fcae3f85c0a"
  },
  {
    "url": "others/备份/note.html",
    "revision": "cf8bf94744d7284c5da56041efe791e2"
  },
  {
    "url": "others/备份/中台.html",
    "revision": "b8815a40044b5bf0b79104c8edd41026"
  },
  {
    "url": "others/备份/凉粉为什么不降价.html",
    "revision": "ccdd68b3628228e09966d9fb4f3a884a"
  },
  {
    "url": "others/备份/笔记本电脑的wifi、蓝牙突然消失的解决办法.html",
    "revision": "6ffea4c58062f9fdff4658ca2ddd036e"
  },
  {
    "url": "others/备忘.html",
    "revision": "8f063a5e3bfc48fc9952b6e4ef52c57b"
  },
  {
    "url": "others/算法学习笔记.html",
    "revision": "2f13b39182f1f923da4ae26821840b2a"
  },
  {
    "url": "tag/actions/index.html",
    "revision": "7b4a7b7cab4890db7c3018338c1b8d33"
  },
  {
    "url": "tag/Aifred/index.html",
    "revision": "1f136a005e19c132ff094432853f1aca"
  },
  {
    "url": "tag/amd/index.html",
    "revision": "5e3124c28ba95449ffeee1f175fafc81"
  },
  {
    "url": "tag/bat/index.html",
    "revision": "bf1d7947d88d5ab918022177ba8ffc4c"
  },
  {
    "url": "tag/chatgpt/index.html",
    "revision": "3dc10f5366be59e9f3bbe79e8d1eda37"
  },
  {
    "url": "tag/CICD/index.html",
    "revision": "9ceb340bf04e0a5c85e6c1b51bab63da"
  },
  {
    "url": "tag/commonjs/index.html",
    "revision": "604677a2b3faa85e5a5f796af8aa4918"
  },
  {
    "url": "tag/conda/index.html",
    "revision": "d06d5fce03d47b2fe0fcdc5a63dc57eb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "f229f332f8a751e3ad58d20d4b01407d"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "9f88ba5bc7edfe1acf57dbab76ade1c4"
  },
  {
    "url": "tag/ddns/index.html",
    "revision": "dff5753de2941ea366df2631977f1a39"
  },
  {
    "url": "tag/django/index.html",
    "revision": "bec51874653f5a607c970dd6a35a8c56"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "055f44dfaadd1423eb878810d6bccd8d"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "885a0dbefdfd7887ba4928a09b365494"
  },
  {
    "url": "tag/enter/index.html",
    "revision": "b0bbb3d5ff592fbb6bb1a0cd0e34a577"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "7f383da09662d5b2b1cbadcbb44db586"
  },
  {
    "url": "tag/f2elint/index.html",
    "revision": "d785d9816c8154a2e0541d226c87d3a1"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "ccb57a7a9e7643b9a28def5b3717f448"
  },
  {
    "url": "tag/git/index.html",
    "revision": "dbe68536b8144cf02e9c40c66e41c0b9"
  },
  {
    "url": "tag/github/index.html",
    "revision": "9c93790f1d65da587af380fd2d92743a"
  },
  {
    "url": "tag/history/index.html",
    "revision": "9717e77c0f4403e3a8ee359b235b422d"
  },
  {
    "url": "tag/homebrew/index.html",
    "revision": "4c0767669b355ebf0d29224dfd2131d0"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "aafcc0195b84dfd2927f69497dd29baa"
  },
  {
    "url": "tag/index.html",
    "revision": "9940e584cba4e906a2af027c605f8f92"
  },
  {
    "url": "tag/iview/index.html",
    "revision": "cfce5845cdc371b09009177dbc7a24ea"
  },
  {
    "url": "tag/i茅台/index.html",
    "revision": "ca19117ee12b689a566d72fd58f74bcc"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "37d80c5165ed2ec007a4119a76e5cc3f"
  },
  {
    "url": "tag/keras/index.html",
    "revision": "6bee793a556d953f96003f7ae9da4605"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "5fdd1c137098c3e84279270eff946f8a"
  },
  {
    "url": "tag/lstm/index.html",
    "revision": "b0b835e5351a6037b529d1ceff85ef67"
  },
  {
    "url": "tag/mac/index.html",
    "revision": "43178aac91f64a64aef1712f6bf02dff"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "7f913c3b8aed33705d51093cf68d7804"
  },
  {
    "url": "tag/nextcloud/index.html",
    "revision": "7d1145d6cdbee4a8947ac46476fc0d0d"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "c4b12651e9051a8eb32d9344c1278a22"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "d9d12f27268c3f365712442cac7ecc7c"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "ea3894d5e3b422928ee27e02a5d00550"
  },
  {
    "url": "tag/pnpm/index.html",
    "revision": "792f908fb2efcc01a40f8b602f347fb2"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "52b1447314a1aab3a5ab6c0645ad5b21"
  },
  {
    "url": "tag/prettier/index.html",
    "revision": "628929a5d066f321f5fed3708d81332c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "768f1dd7a9182f6a199abbe88d7a1d4f"
  },
  {
    "url": "tag/react/index.html",
    "revision": "00b0fff9bd1a8ced82d6cb35c366d079"
  },
  {
    "url": "tag/sass/index.html",
    "revision": "ed2d66893ea0e66b7f1cfa7a9f848b6d"
  },
  {
    "url": "tag/scala/index.html",
    "revision": "83ebadb75a013346383763a851ccf3e3"
  },
  {
    "url": "tag/scrapy/index.html",
    "revision": "2f89ed5a1810c176fb63e95d225317c0"
  },
  {
    "url": "tag/Sequential/index.html",
    "revision": "cee8386e55f50241043380ee467ebfcf"
  },
  {
    "url": "tag/TCP/index.html",
    "revision": "73e53ff13916c549837ad70a120a49fd"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "2fffe5408d629911378ab4e19d62d75f"
  },
  {
    "url": "tag/UDP/index.html",
    "revision": "554b94c9b16fa305535aa3e4ce542ccf"
  },
  {
    "url": "tag/vim/index.html",
    "revision": "aedec66c2bcd0e4ef6ff0661301ffc03"
  },
  {
    "url": "tag/vnc/index.html",
    "revision": "aae37445e20e10c4847937871f028cc2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b84f312b8fd7bc9d60b95f1a971f4d3b"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "7c3d7a73900042b6406e80c2da6708b6"
  },
  {
    "url": "tag/websocket/index.html",
    "revision": "3f6205bb73a1cadcc1667930c55296f1"
  },
  {
    "url": "tag/whistle/index.html",
    "revision": "4892ab665135d11f91d075a2c73fcb74"
  },
  {
    "url": "tag/wifi/index.html",
    "revision": "b1da0f10a77e6138022371f6210b677a"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "cf4cd6a4351acd0a942f1f7782452598"
  },
  {
    "url": "tag/xterm/index.html",
    "revision": "1f9a2989bb44a9a59800203f392bb15f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "21c5bb9c3c4d6d6ee885d87285f62272"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "e8dddc2ba785309b5dc7128305e240ec"
  },
  {
    "url": "tag/世界杯/index.html",
    "revision": "aba7cd6547f54ca8098dfac5d94e2484"
  },
  {
    "url": "tag/中台/index.html",
    "revision": "ea498ac934ad3192e7d3324c7b4b903a"
  },
  {
    "url": "tag/传记/index.html",
    "revision": "738bb7628466670bdc5075770aac35ed"
  },
  {
    "url": "tag/内网穿透/index.html",
    "revision": "43b3dd2551bb22e3f6b189e0a77ce63f"
  },
  {
    "url": "tag/动画/index.html",
    "revision": "a1722c08ae9db88fd911b9216542f3cb"
  },
  {
    "url": "tag/区别/index.html",
    "revision": "4283e0a06fd5ae0b02cc35aff1482368"
  },
  {
    "url": "tag/历史/index.html",
    "revision": "e895e3c3636657127d02543ad7717d85"
  },
  {
    "url": "tag/备忘/index.html",
    "revision": "17d011951bb5486335731b1af805b8ab"
  },
  {
    "url": "tag/复杂度/index.html",
    "revision": "305bd05eb9f4001697234cd0c75bcc6d"
  },
  {
    "url": "tag/定位/index.html",
    "revision": "1d3efd9e49c24b697880174f080d0bec"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "61306f753b96ea21adc91ddba173cb0b"
  },
  {
    "url": "tag/布局/index.html",
    "revision": "6c114df66efb2f20568582339071ffa3"
  },
  {
    "url": "tag/希娜字母/index.html",
    "revision": "1695c21bf017278134ee73932186a221"
  },
  {
    "url": "tag/常用命令/index.html",
    "revision": "ead4ba79c67f41e43dab26903b0c14b7"
  },
  {
    "url": "tag/开机自启/index.html",
    "revision": "063b4ede9b9369e26e4e5190a98d05f5"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "4e2224b00a040b51a7f1ab024da14264"
  },
  {
    "url": "tag/心得/index.html",
    "revision": "92d701243bd517759129cd452b889dc7"
  },
  {
    "url": "tag/心得/page/2/index.html",
    "revision": "48f9ec083651d5758c7d8fdca6826a4c"
  },
  {
    "url": "tag/心得/page/3/index.html",
    "revision": "d25e23c2c7fc21172e25ebb65001c8c3"
  },
  {
    "url": "tag/抓包/index.html",
    "revision": "f88d32604ccfb5aae80f90d299b572da"
  },
  {
    "url": "tag/换系统/index.html",
    "revision": "0cad6a7c427c7f5d679924d8b26b5ef8"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "681fee3bd3fac4f0814becc955ad946e"
  },
  {
    "url": "tag/板块/index.html",
    "revision": "14cf10a0aec3ea2c6120c298755ec1b1"
  },
  {
    "url": "tag/格式化/index.html",
    "revision": "a6a90eb8ef51d6ab2b58873822750770"
  },
  {
    "url": "tag/模块/index.html",
    "revision": "8e37feb29556ac82f8785a082fec00f4"
  },
  {
    "url": "tag/模块化/index.html",
    "revision": "8d490fb125c983d428169a4959733240"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "89562a67c71b6627b48157aa62660cf2"
  },
  {
    "url": "tag/消失/index.html",
    "revision": "27cacdf03d0b832d603655286ac196f1"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "b04ee41162d1cadb15623bb9cba6ace6"
  },
  {
    "url": "tag/移动适配/index.html",
    "revision": "fc306de585e101651944d5faaacf9001"
  },
  {
    "url": "tag/笔记软件/index.html",
    "revision": "593638390d0c5396d7e056d55632ce0c"
  },
  {
    "url": "tag/系统/index.html",
    "revision": "08cde7c0c9bea64366114ba89fafc457"
  },
  {
    "url": "tag/组件传值/index.html",
    "revision": "473214e2895e440695e70c35693683e9"
  },
  {
    "url": "tag/终端/index.html",
    "revision": "7eebbcabf1f7f88ff98bdb94800dcca8"
  },
  {
    "url": "tag/网址/index.html",
    "revision": "a1d179e72393624e5f2ba05b7aed5883"
  },
  {
    "url": "tag/股票/index.html",
    "revision": "319a4a39258ac06af935a0534d877867"
  },
  {
    "url": "tag/股票/page/2/index.html",
    "revision": "99aece3b2ea246a407fab0cbde27218e"
  },
  {
    "url": "tag/股票/page/3/index.html",
    "revision": "79c60023fac905ef0ed2e219309a9d98"
  },
  {
    "url": "tag/蓝牙/index.html",
    "revision": "23cf407e44d42326d1789225a6cca1c7"
  },
  {
    "url": "tag/虚拟显示器/index.html",
    "revision": "9628b729fb04ba385d3bcce440e71dbe"
  },
  {
    "url": "tag/计算机网络/index.html",
    "revision": "a17fee420584f5c7be35ab061691455d"
  },
  {
    "url": "tag/跨域/index.html",
    "revision": "d02a446d06ea83288a0b069fe993ca6a"
  },
  {
    "url": "tag/配色/index.html",
    "revision": "103191b2bbf871d8fb26780ad5fbf496"
  },
  {
    "url": "tag/面试汇总/index.html",
    "revision": "7619881af78ad0ed24d01bd3ca37ac90"
  },
  {
    "url": "tag/页面刷新/index.html",
    "revision": "49a312a3c503e1f203b11827aca4d783"
  },
  {
    "url": "tag/题材/index.html",
    "revision": "2ca63305702b4771992845f69f6ccc1b"
  },
  {
    "url": "tag/验证码/index.html",
    "revision": "6969b3fc664139330b6f9ec754150660"
  },
  {
    "url": "timeline/index.html",
    "revision": "7b40bc1dd536dc66a8d3231bbea46aa7"
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
