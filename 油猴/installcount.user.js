// ==UserScript==
// @name         刷安装量
// @namespace    http://www.wandhi.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// @match        *://*.greasyfork.org/*/scripts/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var a=$(".install-link");
    if(a!=null){
        var o = new XMLHttpRequest;
        o.open("POST", $(a).data("ping-url"), !0);
        o.overrideMimeType("text/plain");
        o.send();
        console.log("发送完毕");
    }
    console.log("3秒后刷新");

    setInterval(function(){
        window.location.reload();
    }, 3000);
    // Your code here...
})();