// ==UserScript==
// @name         New buerscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://event.on24.com/*
// @grant        GM_addStyle
// @grant        GM_log
// @grant        unsafeWindow
// @run-at       document-end
// ==/UserScript==
var hasRun = false;
console.log ("Do you see this?");

var divs =document.getElementsByClassName("rangeslider");
divs=Array.from(divs);
divs.forEach(function(div){
  div.classList.remove('rangeslider--disabled');
});

