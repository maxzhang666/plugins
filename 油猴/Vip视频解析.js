// ==UserScript==
// @name         一键VIP视频解析、去广告（全网）,音乐解析下个版本更新 2018-08-29 可用
// @namespace    http://www.wandhi.com/
// @version      2.8.7
// @description  在视频播放页悬浮VIP按钮，可在线播放vip视频；支持优酷vip，腾讯vip，爱奇艺vip，芒果vip，乐视vip等常用视频...在淘宝天猫商品页添加优惠券查询按钮，可自行点击查询优惠券，
// @author       Wandhi
// @match        *://v.youku.com/v_show/*
// @match        *://*.iqiyi.com/v_*
// @match        *://*.iqiyi.com/w_*
// @match        *://*.iqiyi.com/a_*
// @match        *://*.iqiyi.com/dianying/*
// @match        *://*.le.com/ptv/vplay/*
// @match        *://v.qq.com/x/cover/*
// @match        *://v.qq.com/x/page/*
// @match        *://*.tudou.com/listplay/*
// @match        *://*.tudou.com/albumplay/*
// @match        *://*.tudou.com/programs/view/*
// @match        *://*.mgtv.com/b/*
// @match        *://film.sohu.com/album/*
// @match        *://*.acfun.cn/v/*
// @match        *://*.bilibili.com/video/*
// @match        *://*.bilibili.com/anime/*
// @match        *://vip.pptv.com/show/*
// @match        *://v.pptv.com/show/*
// @match        *://v.yinyuetai.com/video/*
// @match        *://v.yinyuetai.com/playlist/*
// @match        *://*.wasu.cn/Play/show/*
// @match        *://pan.baidu.com/disk/home*
// @match        *://yun.baidu.com/disk/home*
// @match        *://pan.baidu.com/s/*
// @match        *://yun.baidu.com/s/*
// @match        *://pan.baidu.com/share/link*
// @match        *://yun.baidu.com/share/link*
// @match        http*://item.taobao.com/*
// @match        http*://detail.tmall.com/*
// @match        http*://item.jd.com/*
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @require      https://cdn.bootcss.com/clipboard.js/1.5.16/clipboard.min.js
// @grant        GM_setClipboard
// @run-at       document-end
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';
    var currentUrl = window.location.href;
    var reYk = /youku/i;
    var reAqy = /iqiyi/i;
    var reLS = /le.com/i;
    var reTX = /qq/i;
    var reTD = /tudou/i;
    var reMG = /mgtv/i;
    var reSH = /sohu/i;
    var reAF = /acfun/i;
    var reBL = /bilibili/i;
    var reYJ = /1905/i;
    var rePP = /pptv/i;
    var reYYT = /yinyuetai/i;
    var reTaoBao = /taobao/i;
    var reTmall = /tmall/i;
    var reJd = /jd/i;
    var html='';
    var name='';
    if (reAqy.test(currentUrl) || reLS.test(currentUrl) || reTX.test(currentUrl) || reTD.test(currentUrl) || reMG.test(currentUrl) || reSH.test(currentUrl) || rePP.test(currentUrl) || reYk.test(currentUrl)) {
        var sidenav = '<div class="aside-nav bounceInUp animated" id="aside-nav"><label for="" class="aside-menu" title="\u6309\u4f4f\u62d6\u52a8">VIP</label><a href="javascript:void(0)" title="\u7535\u5f71\u641c\u7d22" data-cat="search" class="menu-item menu-line menu-first">\u7535\u5f71<br>\u641c\u7d22</a><a href="javascript:void(0)" title="\u89c6\u9891\u89e3\u6790" data-cat="process" class="menu-item menu-line menu-second">\u89c6\u9891<br>\u89e3\u6790</a><a href="javascript:void(0)" title="\u7edd\u4e16\u597d\u5238" data-cat="tb" class="menu-item menu-line menu-third">\u7edd\u4e16<br>\u597d\u5238</a><a href="javascript:void(0)" title="\u4eac\u4e1c\u597d\u5238" data-cat="jd" class="menu-item menu-line menu-fourth">\u4eac\u4e1c<br>\u597d\u5238</a></div>';
        $("body").append(sidenav).append($('<link rel="stylesheet" href="//tv.wandhi.com/static/style/asidenav.css">'));
        var ua = navigator.userAgent;
        /Safari|iPhone/i.test(ua) && 0 == /chrome/i.test(ua) && $("#aside-nav").addClass("no-filter");
        var drags = { down: !1, x: 0, y: 0, winWid: 0, winHei: 0, clientX: 0, clientY: 0 }, asideNav = $("#aside-nav")[0], getCss = function (a, e) { return a.currentStyle ? a.currentStyle[e] : document.defaultView.getComputedStyle(a, !1)[e] };
        $("#aside-nav").on("mousedown", function (a) {
            drags.down = !0, drags.clientX = a.clientX, drags.clientY = a.clientY, drags.x = getCss(this, "right"), drags.y = getCss(this, "top"), drags.winHei = $(window).height(), drags.winWid = $(window).width(), $(document).on("mousemove", function (a) {
                if (drags.winWid > 640 && (a.clientX < 120 || a.clientX > drags.winWid - 50))
                    return !1;
                if (a.clientY < 180 || a.clientY > drags.winHei - 120)
                    return !1;
                var e = a.clientX - drags.clientX,
                    t = a.clientY - drags.clientY;
                asideNav.style.top = parseInt(drags.y) + t + "px";
                asideNav.style.right = parseInt(drags.x) - e + "px";
            })
        }).on("mouseup", function () {
            drags.down = !1, $(document).off("mousemove")
        });
        $('body').on('click', '[data-cat=process]', function () {
            window.open('http://tv.wandhi.com/go.html?url=' + currentUrl);
        });
        $('body').on('click', '[data-cat=search]', function () {
            window.open('http://tv.wandhi.com/');
        });
        $('body').on('click', '[data-cat=tb]', function () {
            window.open('http://www1.huizhek.com/');
        });
        $('body').on('click', '[data-cat=jd]', function () {
            window.open('http://jd.huizhek.com');
        });
    } else if (reTaoBao.test(currentUrl)) {
        name = $.trim($('.tb-main-title').text());
        html = '<div class="tb-btn-add" style="padding-top:10px;"><a target="_blank" href="http://www1.huizhek.com/index.php?r=searchlist&type=0&kwd=' + encodeURI(name) + '">\u9886\u53d6\u4f18\u60e0\u5238\u0028\u901a\u9053\u4e00\u0029</a></div>';
        html += '<div class="tb-btn-add" style="padding-top: 10px;padding-left: 10px;"><a target="_blank" href="http://www2.huizhek.com/index.php?r=l&kw=' + encodeURI(name) + '">\u9886\u53d6\u4f18\u60e0\u5238\u0028\u901a\u9053\u4e8c\u0029</a></div>';
        $('.tb-action').append(html);
    } else if (reTmall.test(currentUrl)) {
        name = $.trim($('meta[name=keywords]').attr('content'));
        html = '<div class="tb-btn-basket tb-btn-sku"  style="padding-top:10px;"><a target="_blank" href="http://www1.huizhek.com/index.php?r=searchlist&type=0&kwd=' + encodeURI(name) + '">\u9886\u53d6\u4f18\u60e0\u5238\u0028\u901a\u9053\u4e00\u0029</a></div>';
        html += '<div class="tb-btn-basket tb-btn-sku"  style="padding-top: 10px;padding-left: 10px;"><a target="_blank" href="http://www2.huizhek.com/index.php?r=l&kw=' + encodeURI(name) + '">\u9886\u53d6\u4f18\u60e0\u5238\u0028\u901a\u9053\u4e8c\u0029</a></div>';
        $('.tb-action').append(html);
    } else if (reJd.test(currentUrl)) {
        var keywords = $(".sku-name").text().trim();
        $("#choose-btns").prepend('<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">\u9886\u5238\u8d2d\u4e70</span></a>');
        $(".btn-yhj").on('click', function () { window.open("http://jd.huizhek.com/?ah=total&kw=" + encodeURIComponent(keywords)); });
    }
})();