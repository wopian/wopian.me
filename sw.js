if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const t=e=>n(e,d),c={module:{uri:d},exports:r,require:t};i[d]=Promise.all(o.map((e=>c[e]||t(e)))).then((e=>(s(...e),r)))}}define(["./workbox-e8f5ea68"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"28086721c539ccb5bd61691a5330b25e"},{url:"favicon.png",revision:"41235024c525aa134bc0ea7de5add705"},{url:"favicon.svg",revision:"035726755540dd5d3842b3330df44220"},{url:"index.html",revision:"f96deacb0385eb215fdc98e9ffe4898a"},{url:"logo.png",revision:"4844695d5716a0d4ed0f77f15e0d30e8"},{url:"logo.svg",revision:"3df232935fa956eb77f13c69adb4ada6"},{url:"main.min.css",revision:"b8ea45e6bdbbede024e4ddff95d1edbd"},{url:"mask-icon.svg",revision:"173e780e2d6911f25fa712a34f892ceb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts",plugins:[]}),"GET")}));
