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
    "revision": "37f27d2ebf3c337e1f48163aaf5fde15"
  },
  {
    "url": "archives/index.html",
    "revision": "cdeb0cdec53a66eca2e16d59ad88a4d8"
  },
  {
    "url": "assets/css/0.styles.2f80e382.css",
    "revision": "5a50a14a97af211c6e3e532561485136"
  },
  {
    "url": "assets/fonts/bbr.f32a0cd1.woff2",
    "revision": "f32a0cd13ac49e36df74467ecd2dceff"
  },
  {
    "url": "assets/fonts/Icon.4187678c.woff",
    "revision": "4187678c70c491cc0fbd880bfd24782a"
  },
  {
    "url": "assets/fonts/ir.1ac22b3a.woff2",
    "revision": "1ac22b3a85c6d7164927d192654ab170"
  },
  {
    "url": "assets/fonts/jsr.8ffec542.woff2",
    "revision": "8ffec5420781e499563421c2fbb4f84a"
  },
  {
    "url": "assets/fonts/lobster.fe012fb7.woff2",
    "revision": "fe012fb7b22e5776c4a2e91889068974"
  },
  {
    "url": "assets/fonts/ml.0a7c6df0.woff2",
    "revision": "0a7c6df06e85d978d096d4d18fd8d43d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ac8b2e92.js",
    "revision": "dac3095b6b4552a4f38997a4b12f1b96"
  },
  {
    "url": "assets/js/11.4714e108.js",
    "revision": "423d9974d76a2c32dfc511421c979231"
  },
  {
    "url": "assets/js/12.7b3e4f71.js",
    "revision": "80a35b792fd7845308278cbce5e039e3"
  },
  {
    "url": "assets/js/13.3e341aa2.js",
    "revision": "137c0247c988b7ca72befbae9c3a9b97"
  },
  {
    "url": "assets/js/14.624546be.js",
    "revision": "d494f298e8a847df3cd1dae880a23c68"
  },
  {
    "url": "assets/js/15.ce03a108.js",
    "revision": "f77c2ce5e1665ad0f272effc7313322c"
  },
  {
    "url": "assets/js/16.139683fa.js",
    "revision": "4caa55ad43bf7afb65ae35a91e39c806"
  },
  {
    "url": "assets/js/17.56684652.js",
    "revision": "2f2ab49b34cacb0fbaa286bdd7054aaf"
  },
  {
    "url": "assets/js/18.8a506e1a.js",
    "revision": "60c465805c2611a43779b408c0445ca3"
  },
  {
    "url": "assets/js/19.08571a88.js",
    "revision": "9b7a02ca3129198b06d4ec29c3b0b43f"
  },
  {
    "url": "assets/js/20.4b428def.js",
    "revision": "4ac0fd7d952847c0f5cc615eb25607fc"
  },
  {
    "url": "assets/js/21.d4733114.js",
    "revision": "625d0edf9294acdb91b80259dfd1f197"
  },
  {
    "url": "assets/js/22.348a6d4a.js",
    "revision": "0c7ad0309f26ba0b339695c5316016ed"
  },
  {
    "url": "assets/js/23.6a4042da.js",
    "revision": "245d804741d417b57494950736c8ab7e"
  },
  {
    "url": "assets/js/24.e3464cdb.js",
    "revision": "e22583ee422f878e89c32ebbd952559d"
  },
  {
    "url": "assets/js/25.855b64f1.js",
    "revision": "ababb3b530665a49d7cae7734e63e00d"
  },
  {
    "url": "assets/js/26.aa7cb1af.js",
    "revision": "91a834e30ebea1b8cc4a45901fb7dc57"
  },
  {
    "url": "assets/js/27.c2b0f7d6.js",
    "revision": "d9d98e463f09485f9c07078845970e98"
  },
  {
    "url": "assets/js/28.e89c868c.js",
    "revision": "84b4d7c324ca10e01cc40b95d29a1db3"
  },
  {
    "url": "assets/js/4.2449750b.js",
    "revision": "1225ef3b730aab1c5555a7508f20b078"
  },
  {
    "url": "assets/js/5.ff79713e.js",
    "revision": "ca6334ec420d1020aa4285efd42c8e87"
  },
  {
    "url": "assets/js/6.1a67b5c8.js",
    "revision": "56629bc2e8bcee475ea8f4f653e1cb05"
  },
  {
    "url": "assets/js/7.fa92cff9.js",
    "revision": "14aa2ce6aa7c76608effabaad8da11bb"
  },
  {
    "url": "assets/js/8.fba5d909.js",
    "revision": "f2f4655e4cbc32735214a897702717a2"
  },
  {
    "url": "assets/js/9.0f7f066d.js",
    "revision": "46affcd6be61bc9ffd24bbff9f463439"
  },
  {
    "url": "assets/js/app.e57a5b2b.js",
    "revision": "99a838e90bc5d2a767da561e84d3b4a3"
  },
  {
    "url": "assets/js/vendors~flowchart.7a90010b.js",
    "revision": "5e40eb734800118c16aec353ccc36438"
  },
  {
    "url": "assets/js/vuejs-paginate.b89ce8e5.js",
    "revision": "4afab9e377c9635d0b11d9ff4e706bfd"
  },
  {
    "url": "categories/c++/index.html",
    "revision": "612d572baa45efa14130085af7d7101c"
  },
  {
    "url": "categories/dl/index.html",
    "revision": "dafbfde34cdba82cfd9bb6a22a6cad27"
  },
  {
    "url": "categories/index.html",
    "revision": "155fc6ab9b3c52a02dcb52535fbab66c"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "53ce71eddc66acb7d91bd0d08c8b1978"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "ad258433e8cc8a4097fb1173c9fe8856"
  },
  {
    "url": "categories/notes/page/2/index.html",
    "revision": "ae80bade6101ebca56a2037a552b5879"
  },
  {
    "url": "categories/rss/index.html",
    "revision": "e3ec0ec940671b2797894a1d835ecbbd"
  },
  {
    "url": "images/alipay.png",
    "revision": "0e0ba3384ffaed8fe80597cbd5d91e72"
  },
  {
    "url": "images/wechat.png",
    "revision": "2d28a8169d19cf18b988bf03e7bca6e7"
  },
  {
    "url": "index.html",
    "revision": "610d56c4a7a4e4e66bed948b904f7a86"
  },
  {
    "url": "logo.jpg",
    "revision": "c6373039246e81f0806c2895c6b9626f"
  },
  {
    "url": "page/2/index.html",
    "revision": "0dda3188b7061650dfd0133511063578"
  },
  {
    "url": "post/2021/11/22/asf挂卡.html",
    "revision": "62a5e884df041f4b1d63d2bfce5954b8"
  },
  {
    "url": "post/2021/11/27/linux常用命令.html",
    "revision": "1ad67b0656f37605f13c6f7f23661a1b"
  },
  {
    "url": "post/2021/11/27/树莓派2b无屏装centos.html",
    "revision": "c5fa66e0a3c6ce095947a9cc17f77cea"
  },
  {
    "url": "post/2021/11/29/npm-install-g-vuepress-内存溢出.html",
    "revision": "6d1c164b4518d7444639cbd1b01a228c"
  },
  {
    "url": "post/2022/01/15/tmux用法.html",
    "revision": "b563d59965f8a3fba4f5af46c3ef7511"
  },
  {
    "url": "post/2022/01/15/深度学习常用模型.html",
    "revision": "f1c76e62bce71dc22c12cb9150fc5fa8"
  },
  {
    "url": "post/2022/01/25/rsshub订阅源完整版.html",
    "revision": "9ba45e7e8ea16dadcae2a3967201dee3"
  },
  {
    "url": "post/2022/10/25/开源协议.html",
    "revision": "ea4f0805e1fb9197639dd58c25a24033"
  },
  {
    "url": "post/2023/01/31/vuepress测试.html",
    "revision": "275e3db4cdadfe671312516bf1633250"
  },
  {
    "url": "post/2023/02/01/vuepress报错error0308010c.html",
    "revision": "a934a21131d500cf2746f2945142866e"
  },
  {
    "url": "post/2023/03/10/ubuntu-wsl-apt-upgrade-报错.html",
    "revision": "ff87a10398344d608003f5eca36735de"
  },
  {
    "url": "post/2023/03/16/markdown-图表语法.html",
    "revision": "2d171aec1a8f7d6334a7b845f0a33b04"
  },
  {
    "url": "post/2023/04/04/c-基础入门.html",
    "revision": "d274a38a03836a61c0e7ed25323c1bf6"
  },
  {
    "url": "post/2023/04/22/makefile简介.html",
    "revision": "878fd8606ac54065e2a5faed51850e19"
  },
  {
    "url": "post/2023/04/22/makefile编译所有cpp文件.html",
    "revision": "bb8bbe42f33fa08940390784f574a3d4"
  },
  {
    "url": "post/2023/05/01/wsl2配置clash代理.html",
    "revision": "e52498456f004906e0b5f1b78e10e77a"
  },
  {
    "url": "tags/c++/index.html",
    "revision": "535a2af58e0e09020dbfef1ea46555a6"
  },
  {
    "url": "tags/dl/index.html",
    "revision": "aefe1fdde6f1c050c108a55767c7b30e"
  },
  {
    "url": "tags/index.html",
    "revision": "72cd18626b9ae2a15c02c586d398e8a5"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "d7e91d473bb7baca90b2209d80faeec4"
  },
  {
    "url": "tags/linux/page/2/index.html",
    "revision": "14b69e626b78daf58eeea1c9f60e7601"
  },
  {
    "url": "tags/rss/index.html",
    "revision": "6b05e77ec4b6ddfcf53c8f040d5f4288"
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
