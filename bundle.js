!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=e=>{e.appendChild(function(){var e=document.createElement("img");return e.src="http://graduateinstitute.ch/files/live/sites/iheid/files/sites/public_relations/venues/venues_resto.jpg",e}()),e.appendChild(function(){var e=document.createElement("div");return e.innerHTML="I'm not good at this creative stuff",e}()),e.appendChild(function(){var e=document.createElement("div");return e.innerHTML="Come check out our amazing restaurant with this great view of trees!",e}())};var i=e=>{e.appendChild(function(){var e=document.createElement("div");return e.innerHTML="Our Menu",e}()),e.appendChild(function(){var e=document.createElement("div");return e.innerHTML="Food items",e}()),e.appendChild(function(){var e=document.createElement("div");return e.innerHTML="Here is what our food tastes like.",e}())};var u=e=>{e.appendChild(function(){var e=document.createElement("div");return e.innerHTML="Contact Us",e}()),e.appendChild(function(){var e=document.createElement("div");return e.innerHTML="This is the address",e}()),e.appendChild(function(){var e=document.createElement("img");return e.src="http://graduateinstitute.ch/files/live/sites/iheid/files/sites/public_relations/venues/venues_resto.jpg",e}())};const o=document.querySelector("#tabs"),a=document.querySelector("#content");function c(){a.innerHTML="","Home"==this.innerHTML?r(a):"Menu"==this.innerHTML?i(a):"Contact"==this.innerHTML&&u(a)}o.appendChild(function(){var e=document.createElement("div");return e.innerHTML="Home",e.classList+="tab left",e}()),o.appendChild(function(){var e=document.createElement("div");return e.innerHTML="Menu",e.classList+="tab left",e}()),o.appendChild(function(){var e=document.createElement("div");return e.innerHTML="Contact",e.classList+="tab",e}()),r(a),document.querySelectorAll(".tab").forEach(e=>e.addEventListener("click",c))}]);