// ==UserScript==
// @name         一键VIP视频解析、去广告（全网）,一站式音乐搜索下载 2019-02-11 可用，报错请及时反馈
// @namespace    http://www.wandhi.com/
// @homepage     https://www.wandhi.com/post-647.html
// @supportURL   https://www.wandhi.com/post-647.html
// @version      3.1.4
// @description  在视频播放页悬浮VIP按钮，可在线播放vip视频；支持优酷vip，腾讯vip，爱奇艺vip，芒果vip，乐视vip等常用视频...一站式音乐搜索解决方案，网易云音乐，QQ音乐，酷狗音乐，酷我音乐，虾米音乐，百度音乐，蜻蜓FM，荔枝FM，喜马拉雅，优惠券查询
// @author       Wandhi
// @icon         https://www.wandhi.com/favicon.ico
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
// @match        *://music.taihe.com/song*
// @match        *://item.taobao.com/*
// @match        *://detail.tmall.com/*
// @match        *://item.jd.com/*
// @match        *://music.163.com/*
// @match        *://y.qq.com/*
// @match        *://www.kugou.com/*
// @match        *://www.kuwo.cn/*
// @match        *://www.xiami.com/*
// @match        *://music.baidu.com/*
// @match        *://www.qingting.fm/*
// @match        *://www.lizhi.fm/*
// @match        *://music.migu.cn/*
// @match        *://www.ximalaya.com/*
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// @require      https://cdn.bootcss.com/clipboard.js/1.5.16/clipboard.min.js
// @require      https://greasyfork.org/scripts/373336-layer-wandhi/code/layer_wandhi.js?version=637587
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
    var reTX = /v.qq/i;
    var reTD = /tudou/i;
    var reMG = /mgtv/i;
    var reSH = /sohu/i;
    var reAF = /acfun/i;
    var reBL = /bilibili/i;
    var reYJ = /1905/i;
    var rePP = /pptv/i;
    var reYYT = /yinyuetai/i;
    var reTaoBao = /taobao.com/i;
    var reTmall = /tmall/i;
    var reJd = /jd/i;
    var reWY = /163(.*)song/i;
	var reQQ = /y.QQ(.*)song/i;
	var reKG = /kugou(.*)song/i;
	var reKW = /kuwo(.*)yinyue/i;
	var reXM = /xiami/i;
	var reBD = /baidu.com/i;
	var reQT = /qingting/i;
	var reLZ = /lizhi/i;
	var reMiGu = /migu/i;
	var reXMLY = /ximalaya/i;
    var html='';
    var name='';
    if(reWY.test(currentUrl)||reQQ.test(currentUrl)||reKG.test(currentUrl)||reKW.test(currentUrl)||reXM.test(currentUrl)||reBD.test(currentUrl)||reQT.test(currentUrl)||reLZ.test(currentUrl)||reMiGu.test(currentUrl)||reXMLY.test(currentUrl))
    {
        var sidenav = '<svg width="0" height="0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="aside-nav bounceInUp animated" id="aside-nav"><label for="" class="aside-menu" title="\u6309\u4f4f\u62d6\u52a8">VIP</label><a href="javascript:void(0)" title="\u7535\u5f71\u641c\u7d22" data-cat="search" class="menu-item menu-line menu-first">\u7535\u5f71<br>\u641c\u7d22</a><a href="javascript:void(0)" title="\u97f3\u4e50\u4e0b\u8f7d" data-cat="process" class="menu-item menu-line menu-second">\u97f3\u4e50<br>\u4e0b\u8f7d</a><a href="javascript:void(0)" title="\u7edd\u4e16\u597d\u5238" data-cat="tb" class="menu-item menu-line menu-third">\u7edd\u4e16<br>\u597d\u5238</a><a href="javascript:void(0)" title="\u4eac\u4e1c\u597d\u5238" data-cat="jd" class="menu-item menu-line menu-fourth">\u4eac\u4e1c<br>\u597d\u5238</a></div>';
        $("body").append(sidenav).append($('<link rel="stylesheet" href="//cdn.wandhi.com/style/tv/asidenav.css">')).append($('<link rel="stylesheet" href="https://lib.baomitu.com/layer/3.1.1/theme/default/layer.css">'));
        var ua = navigator.userAgent;
        /Safari|iPhone/i.test(ua) && 0 == /chrome/i.test(ua) && $("#aside-nav").addClass("no-filter");
        var drags = { down: !1, x: 0, y: 0, winWid: 0, winHei: 0, clientX: 0, clientY: 0 }, asideNav = $("#aside-nav")[0], getCss = function (a, e) { return a.currentStyle ? a.currentStyle[e] : document.defaultView.getComputedStyle(a, !1)[e] };
        $("body").on("mousedown","#aside-nav", function (a) {
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
        }).on("mouseup","#aside-nav", function () {
            drags.down = !1, $(document).off("mousemove")
        });
        $('body').on('click', '[data-cat=process]', function () {
            if(reXMLY.test(currentUrl))
            {
                if(__INITIAL_STATE__.SoundDetailPage!=undefined)
                {
                    window.open('http://music.wandhi.com/?id='+__INITIAL_STATE__.SoundDetailPage.trackId+'&type=ximalaya');
                }else
                {
                    layer.closeAll();
                    var html='<div style="padding:0px 50px 0px 50px;"><ul class="sound-list dOi2">';
                    $.each(__INITIAL_STATE__.AlbumDetailTrackList.tracksInfo.tracks,function(index,item){html+='<li class="dOi2"><a href="http://music.wandhi.com/?id='+item.trackId+'&type=ximalaya" target="_blank">'+item.title+'</a></li>';});
                    html+='</ul></div>';
                    layer.open({type: 1,area: ['auto', '30%'],title: dde("JUU0JUI4JUJBJUU0JUJEJUEwJUU2JTg5JUJFJUU1JTg4JUIwJUU0JUJBJTg2JUU4JUJGJTk5JUU0JUJBJTlCJUU2JTlCJUIyJUU3JTlCJUFFJUU4JUE3JUEzJUU2JTlFJTkwJUUyJTgwJUE2JUUyJTgwJUE2JUU0JUJCJTgwJUU0JUI5JTg4JUVGJUJDJTlGJUU2JTg4JTkxJUU0JUI4JTkxJUVGJUJDJTlGJUU0JUJCJUE1JUU1JTkwJThFJUU1JTg2JThEJUU4JUFGJUI0JUU1JTkwJUE3"),shade: 0.6,maxmin: false,anim: 2,content: html});
                }

            }else
            {
                window.open('http://music.wandhi.com/?url=' + currentUrl);
            }
        });
        $('body').on('click', '[data-cat=search]', function () {
            window.open('http://tv.wandhi.com/');
        });
        $('body').on('click', '[data-cat=tb]', function () {
            window.open('http://www3.huizhek.com/');
        });
        $('body').on('click', '[data-cat=jd]', function () {
            window.open('http://jd.huizhek.com');
        });
    }
    else if (reAqy.test(currentUrl) || reLS.test(currentUrl) || reTX.test(currentUrl) || reTD.test(currentUrl) || reMG.test(currentUrl) || reSH.test(currentUrl) || rePP.test(currentUrl) || reYk.test(currentUrl)) {
        var sidenav = '<svg width="0" height="0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="aside-nav bounceInUp animated" id="aside-nav"><label for="" class="aside-menu" title="\u6309\u4f4f\u62d6\u52a8">VIP</label><a href="javascript:void(0)" title="\u7535\u5f71\u641c\u7d22" data-cat="search" class="menu-item menu-line menu-first">\u7535\u5f71<br>\u641c\u7d22</a><a href="javascript:void(0)" title="\u89c6\u9891\u89e3\u6790" data-cat="process" class="menu-item menu-line menu-second">\u89c6\u9891<br>\u89e3\u6790</a><a href="javascript:void(0)" title="\u7edd\u4e16\u597d\u5238" data-cat="tb" class="menu-item menu-line menu-third">\u7edd\u4e16<br>\u597d\u5238</a><a href="javascript:void(0)" title="\u4eac\u4e1c\u597d\u5238" data-cat="jd" class="menu-item menu-line menu-fourth">\u4eac\u4e1c<br>\u597d\u5238</a></div>';
        $("body").append(sidenav).append($('<link rel="stylesheet" href="//cdn.wandhi.com/style/tv/asidenav.css">'));
        var ua = navigator.userAgent;
        /Safari|iPhone/i.test(ua) && 0 == /chrome/i.test(ua) && $("#aside-nav").addClass("no-filter");
        var drags = { down: !1, x: 0, y: 0, winWid: 0, winHei: 0, clientX: 0, clientY: 0 }, asideNav = $("#aside-nav")[0], getCss = function (a, e) { return a.currentStyle ? a.currentStyle[e] : document.defaultView.getComputedStyle(a, !1)[e] };
        $("body").on("mousedown","#aside-nav", function (a) {
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
        }).on("mouseup","#aside-nav", function () {
            drags.down = !1, $(document).off("mousemove")
        });
        $('body').on('click', '[data-cat=process]', function () {
            window.open('http://tv.wandhi.com/go.html?url=' + currentUrl);
        });
        $('body').on('click', '[data-cat=search]', function () {
            window.open('http://tv.wandhi.com/');
        });
        $('body').on('click', '[data-cat=tb]', function () {
            window.open('http://www3.huizhek.com/');
        });
        $('body').on('click', '[data-cat=jd]', function () {
            window.open('http://jd.huizhek.com');
        });
    }
    else if (reTaoBao.test(currentUrl)) {
        loader();$("body").append($(dde('JTNDc2NyaXB0JTIwdHlwZSUzRCUyMnRleHQlMkZqYXZhc2NyaXB0JTIyJTIwc3JjJTNEJTIyJTJGJTJGdHYud2FuZGhpLmNvbSUyRnN0YXRpYyUyRmpzJTJGc2NyaXB0LmpzJTIyJTNF')));   
        name = $.trim($('.tb-main-title').text());
        html = '<div class="tb-btn-add" style="padding-top:10px;"><a target="_blank" href="http://www3.huizhek.com/index.php?r=searchlist&type=0&kwd=' + encodeURI(name) + '">\u9886\u53d6\u4f18\u60e0\u5238\u0028\u901a\u9053\u4e00\u0029</a></div>';
        html += '<div class="tb-btn-add" style="padding-top: 10px;padding-left: 10px;"><a target="_blank" href="http://www2.huizhek.com/index.php?r=l&kw=' + encodeURI(name) + '">\u9886\u53d6\u4f18\u60e0\u5238\u0028\u901a\u9053\u4e8c\u0029</a></div>';
        $('.tb-action').append(html);
    } else if (reTmall.test(currentUrl)) {
        loader();$("body").append($(dde('JTNDc2NyaXB0JTIwdHlwZSUzRCUyMnRleHQlMkZqYXZhc2NyaXB0JTIyJTIwc3JjJTNEJTIyJTJGJTJGdHYud2FuZGhpLmNvbSUyRnN0YXRpYyUyRmpzJTJGc2NyaXB0LmpzJTIyJTNF')));   
        html = '<div class="tb-btn-basket tb-btn-sku Wandhi" data-p="1" style="padding-top:10px;"><a target="_blank" href="javascript:void(0)">\u9886\u53d6\u4f18\u60e0\u5238\u0028\u901a\u9053\u4e00\u0029</a></div>';
        html += '<div class="tb-btn-basket tb-btn-sku Wandhi" data-p="2"  style="padding-top: 10px;padding-left: 10px;"><a target="_blank" href="javascript:void(0)">\u9886\u53d6\u4f18\u60e0\u5238\u0028\u901a\u9053\u4e8c\u0029</a></div>';
        $('.tb-action').append(html);
        $('body').on('click', '.Wandhi', function () {
            var name=$.trim($(".tb-detail-hd h1").text());
            var url=window.atob("aHR0cDovL3d3dzMuaHVpemhlay5jb20vaW5kZXgucGhwP3I9c2VhcmNobGlzdCZ0eXBlPTAma3dkPQ==")+ encodeURI(name);
            if( $(this).data("p")==2){url=window.atob("aHR0cDovL3d3dy5odWl6aGVrLmNvbS9pbmRleC5waHA/cj1sJmt3PQ==")+ encodeURI(name);}
            window.open(url);
        });
    } else if (reJd.test(currentUrl)) {
        var keywords = $(".sku-name").text().trim();
        $("#choose-btns").prepend('<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">\u67e5\u8be2\u4f18\u60e0\u5238</span></a>');
        $(".btn-yhj").on('click', function () { window.open("http://jd.huizhek.com/?ah=total&kw=" + encodeURIComponent(keywords)); });
    }
    function loader()
    {
        $("body").append($('<script type="text/javascript" src="//cdn.wandhi.com/js/jquery/1.12.4/jquery.js"></script>'));        
        $("body").append($(dde('JTNDc2NyaXB0JTIwdHlwZSUzRCUyMnRleHQlMkZqYXZhc2NyaXB0JTIyJTIwc3JjJTNEJTIyJTJGJTJGdHYud2FuZGhpLmNvbSUyRnN0YXRpYyUyRmpzJTJGc2NyaXB0LmpzJTNGdiUzRDElMjIlM0U=')));   
    }
    function de(a){return window.atob(a);}
    function dde(a){return decodeURIComponent(window.atob(a));}
    function getPar(a) {var b = location.search.match(new RegExp("[\?\&]" + a + "=([^\&]+)", "i"));if (b == null || b.length < 1) {return "";}return b[1];}
})();