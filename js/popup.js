!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=141)}({141:function(e,t,n){n(142),e.exports=n(143)},142:function(e,t){var n;document.addEventListener("DOMContentLoaded",function(){function e(e){document.getElementById(e).style=""}chrome.tabs.query({active:!0,lastFocusedWindow:!0},function(t){var o,r,c;o=t[0].url,r=o.substr(0,6),chrome.storage.local.get(["key"],function(t){c=t.key,"chrome"!==r&&""!==c&&void 0!==c?chrome.runtime.sendMessage({msg:"start",API_key:"".concat(c),pageUrl:"".concat(o)},function(t){"undefined"===(n=t.shortUrl)?document.getElementById("url__content-inner").textContent="API Error!!":(document.getElementById("url__content-inner").textContent=n,document.getElementById("qr_code").src="".concat("https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=").concat(n),e("button__copy"),e("button__details"),e("button__qrcode"))}):document.getElementById("url__content-inner").textContent="chrome"===r?"Not a Valid URL!!":""===c||void 0===c?"Set API Key in Settings!":"Error!!!"})}),document.getElementById("button__copy").addEventListener("click",function(){try{var e="".concat(n),t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.focus(),t.select(),document.execCommand("copy"),t.remove()}catch(e){console.log("Oops, unable to copy")}}),document.getElementById("button__details").addEventListener("click",function(){window.open("".concat(n,"+"),"_blank").focus()}),document.getElementById("button__qrcode").addEventListener("click",function(){document.getElementById("button__qrcode").style="display: none;",e("qr_code")})})},143:function(e,t){e.exports="../popup.css"}});