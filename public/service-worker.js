if(!self.define){let s,i={};const e=(e,l)=>(e=new URL(e+".js",l).href,i[e]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=i,document.head.appendChild(s)}else s=e,importScripts(e),i()})).then((()=>{let s=i[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let u={};const d=s=>e(s,r),j={module:{uri:r},exports:u,require:d};i[r]=Promise.all(l.map((s=>j[s]||d(s)))).then((s=>(n(...s),u)))}}define(["./workbox-534e8662"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"/",revision:"1721610074193"},{url:"/dist/css/app.1ebc99.css",revision:null},{url:"/dist/js/054a19d2a7d0b5a1.js",revision:null},{url:"/dist/js/06e9b98c822e96ce.js",revision:null},{url:"/dist/js/137bc7f2190e32e4.js",revision:null},{url:"/dist/js/13d95784d6b629b3.js",revision:null},{url:"/dist/js/1f8421621a7aed1a.js",revision:null},{url:"/dist/js/238a57fef8011206.js",revision:null},{url:"/dist/js/25597907a116a100.js",revision:null},{url:"/dist/js/2bdf60feb4054c0c.js",revision:null},{url:"/dist/js/38af38020c39f792.js",revision:null},{url:"/dist/js/3b7ef997d0dd0ffc.js",revision:null},{url:"/dist/js/3c9d27b7b84a4329.js",revision:null},{url:"/dist/js/4058076496636369.js",revision:null},{url:"/dist/js/4aad0aa76fa6de52.js",revision:null},{url:"/dist/js/4d0d34c6cbcd6af5.js",revision:null},{url:"/dist/js/4f6ef9b6e99f7c71.js",revision:null},{url:"/dist/js/5c015b3cd6f049b7.js",revision:null},{url:"/dist/js/68c22a2d186a33f3.js",revision:null},{url:"/dist/js/69bbd6a55c82af55.js",revision:null},{url:"/dist/js/6b357b07e87a9329.js",revision:null},{url:"/dist/js/75a652ade89516bb.js",revision:null},{url:"/dist/js/77ebcd45755abfa6.js",revision:null},{url:"/dist/js/925e24688d7b8693.js",revision:null},{url:"/dist/js/948d0395ae3cab25.js",revision:null},{url:"/dist/js/962474fb29b03b48.js",revision:null},{url:"/dist/js/9b147760d6857457.js",revision:null},{url:"/dist/js/9e5e8c656b0ba94f.js",revision:null},{url:"/dist/js/a152ce6c9b24cbfc.js",revision:null},{url:"/dist/js/a65b115008f7705e.js",revision:null},{url:"/dist/js/a96378bc4f4cb2bc.js",revision:null},{url:"/dist/js/app.1ebc99.css",revision:null},{url:"/dist/js/app.89803d.js",revision:null},{url:"/dist/js/b2767302903b1234.js",revision:null},{url:"/dist/js/b553070305390346.js",revision:null},{url:"/dist/js/c50761591fb22e13.js",revision:null},{url:"/dist/js/c572738fed0ec417.js",revision:null},{url:"/dist/js/c901fc37f05fa08c.js",revision:null},{url:"/dist/js/d464b063287a7e43.js",revision:null},{url:"/dist/js/dbda7375433b6ddc.js",revision:null},{url:"/dist/js/dfc1cee306784754.js",revision:null},{url:"/dist/js/dffff3c0113103c9.js",revision:null},{url:"/dist/js/e44975e0c8327311.js",revision:null},{url:"/dist/js/e780ddb5db1bacff.js",revision:null},{url:"/dist/js/e7ebcdec83e48c09.js",revision:null},{url:"/dist/js/ec527e8c02eeb0ef.js",revision:null},{url:"/dist/js/fb429d1836ecf179.js",revision:null},{url:"/dist/js/fdd841e02981fa16.js",revision:null}],{}),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/"))),s.registerRoute(/icon/,new s.CacheFirst({cacheName:"icons",plugins:[new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/api/,new s.NetworkFirst({cacheName:"apis",plugins:[new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/\.(?:svg|ico)$/,new s.CacheFirst({cacheName:"images",plugins:[]}),"GET"),s.registerRoute(/\.(?:png|jpg|jpeg)$/,new s.CacheFirst({cacheName:"images",plugins:[new s.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.CacheableResponsePlugin({statuses:[0,200]}),new s.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]}),"GET")}));
