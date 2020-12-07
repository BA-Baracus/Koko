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

// a function that loads jQuery and calls a callback function when jQuery has finished loading


var d = new Date();
var seconds = d.getSeconds()
var milliseconds = d.getMilliseconds()
var msLeft = 60 * 1000 - seconds * 1000 - milliseconds;

if (!hasRun) {
        hasRun = true;
        unsafeWindow.setTimeout(doSomething,msLeft);
}


function doSomething(){
   console.log ("=======Preparing countdown timer=========");
   unsafeWindow.setTimeout(doSomething,15000);

var divs =document.getElementsByClassName("rangeslider");
divs=Array.from(divs);
    console.log ("===Time has elapsed, will put the button in=========");
divs.forEach(function(div){
  div.classList.remove('rangeslider--disabled');
 });
}

