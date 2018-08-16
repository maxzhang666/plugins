// ==UserScript==
// @name         一键VIP视频解析、去广告（全网） 2018-08-15 可用
// @namespace    http://www.wandhi.com/
// @version      2.7
// @description  在视频标题旁上显示“vip解析(去广告)”按钮和“搜索电影”按钮，在线播放vip视频；支持优酷vip，腾讯vip，爱奇艺vip，芒果vip，乐视vip等常用视频...
// @author       Wandhi
// @match        *://v.youku.com/v_show/*
// @match        *://*.iqiyi.com/v_*
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
    var currentUrl = '';
    var currentKey = '';
    var VideoUrl = window.location.href;
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
    var reJd=/jd/i;
    var GoBtn = '<a id="wandhiVipBtn" style="cursor:pointer;text-decoration:none;color:red;padding:0 5px;border:1px solid red;">vip解析</a>';
    var SearchBtn = '<a id="wandhiSearchBtn" target="_blank" style="cursor:pointer;text-decoration:none;color:red;padding:0 5px;border:1px solid red;">搜索电影</a>';
    var name = '';
    var html = '';    
    if (reAqy.test(VideoUrl) || reLS.test(VideoUrl) || reTX.test(VideoUrl) || reTD.test(VideoUrl) || reMG.test(VideoUrl) || reSH.test(VideoUrl) || rePP.test(VideoUrl) || reYk.test(VideoUrl)) {
        if (reAqy.test(VideoUrl)) {
            var iqiyiTitle = $('#widget-videotitle');
            if (iqiyiTitle.parent('.mod-play-tit') > 0) {
                iqiyiTitle.parent('.mod-play-tit').append(GoBtn).append(SearchBtn);
            } else {
                iqiyiTitle.append(GoBtn).append(SearchBtn);
            }
            $('#wandhiVipBtn').css({
                'font-size': '17px',
                'display': 'inline-block',
                'height': '24px',
                'line-height': '24px',
                'margin': '0 5px'
            });
            $('#wandhiSearchBtn').css({
                'font-size': '17px',
                'display': 'inline-block',
                'height': '24px',
                'line-height': '24px',
                'margin': '0 5px'
            });
            if ($('#drama-series-title').length !== 0) {
                currentKey = $('#drama-series-title').find('a').text();
            } else {
                currentKey = iqiyiTitle.text();
            }

        } else if (reLS.test(VideoUrl)) {
            var lsTitle = $('.j-video-name');
            lsTitle.append(SearchBtn).append(GoBtn);
            lsTitle.css('float', 'left');
            $('#wandhiVipBtn').css({
                'font-size': '16px',
                'display': 'inline-block',
                'height': '20px',
                'line-height': '20px',
                'margin': '0 5px'
            });
            $('#wandhiSearchBtn').css({
                'font-size': '16px',
                'display': 'inline-block',
                'height': '20px',
                'line-height': '20px',
                'margin': '0 5px'
            });
            if ($('.Info').find('.title').find('h3').length !== 0) {
                currentKey = $('.Info').find('.title').find('h3').text();
            } else {
                currentKey = lsTitle.text();
            }
        } else if (reTX.test(VideoUrl)) {
            var qqTitle = $('.mod_intro').find('.video_title');
            qqTitle.eq(0).append(SearchBtn).append(GoBtn);
            $('#wandhiVipBtn').css({
                'font-size': '24px',
                'display': 'inline-block',
                'height': '36px',
                'line-height': '36px',
                'margin': '0 5px'
            });
            $('#wandhiSearchBtn').css({
                'font-size': '24px',
                'display': 'inline-block',
                'height': '36px',
                'line-height': '36px',
                'margin': '0 5px'
            });
            if ($('.player_title').length !== 0 && $('.player_title').find('a').length === 0) {
                currentKey = $('.player_title').text();
            } else {
                currentKey = $('._base_title').text();
            }
            if (currentKey === '') {
                currentKey = $('.player_title').text();
            }
        } else if (reTD.test(VideoUrl)) {
            var tdTitle = $('#videoKw');
            tdTitle.parent('.fix').append(GoBtn);
            $('#wandhiVipBtn').css({
                'font-size': '18px',
                'display': 'inline-block',
                'height': '22px',
                'line-height': '22px',
                'margin': '14px 5px 0'
            });
        } else if (reMG.test(VideoUrl)) {
            var mgTitle = $('.v-panel-title');
            mgTitle.append(SearchBtn).append(GoBtn);
            mgTitle.css({
                'float': 'left',
                'margin-right': '0'
            });
            $('#wandhiVipBtn').css({
                'font-size': '22px',
                'display': 'inline-block',
                'height': '40px',
                'line-height': '40px',
                'margin': '0 5px'
            });
            $('#wandhiSearchBtn').css({
                'font-size': '22px',
                'display': 'inline-block',
                'height': '40px',
                'line-height': '40px',
                'margin': '0 5px'
            });
            currentKey = mgTitle.text();

        } else if (reSH.test(VideoUrl)) {
            var shTitle = $('.player-top-info-name');
            shTitle.append(GoBtn).append(SearchBtn);
            shTitle.find('h2').css({
                'float': 'left'
            });
            $('#wandhiVipBtn').css({
                'font-weight': 'bold',
                'font-size': '16px',
                'display': 'inline-block',
                'height': '36px',
                'line-height': '36px',
                'margin': '0 5px'
            });
            $('#wandhiSearchBtn').css({
                'font-weight': 'bold',
                'font-size': '16px',
                'display': 'inline-block',
                'height': '36px',
                'line-height': '36px',
                'margin': '0 5px'
            });
            currentKey = shTitle.find('h2').text();

        } else if (rePP.test(VideoUrl)) {
            var pptvTitle = $('.title_video').find('h3');
            pptvTitle.append(SearchBtn).append(GoBtn);
            $('#wandhiVipBtn').css({
                'font-weight': 'bold',
                'font-size': '16px',
                'display': 'inline-block',
                'height': '36px',
                'line-height': '36px',
                'margin': '0 5px'
            });
            $('#wandhiSearchBtn').css({
                'font-weight': 'bold',
                'font-size': '16px',
                'display': 'inline-block',
                'height': '36px',
                'line-height': '36px',
                'margin': '0 5px'
            });
            currentKey = pptvTitle.text();
        } else if (reYk.test(VideoUrl)) {
            var youkuTitle = $('#subtitle');
            if (youkuTitle.length !== 0) {
                youkuTitle.append(SearchBtn).append(GoBtn);
                $('#wandhiVipBtn').css({
                    'font-size': '17px',
                    'display': 'inline-block',
                    'height': '22px',
                    'line-height': '22px',
                    'margin': '0 5px',
                    'vertical-align': 'bottom'
                });
                $('#wandhiSearchBtn').css({
                    'font-size': '17px',
                    'display': 'inline-block',
                    'height': '22px',
                    'line-height': '22px',
                    'margin': '0 5px',
                    'vertical-align': 'bottom'
                });
                if ($('.tvinfo').length !== 0) {
                    currentKey = $('.tvinfo').find('h2').eq(0).find('a').text();
                } else {
                    currentKey = $('.title').attr('title');
                }
            } else {
                $('.title').append(SearchBtn).append(GoBtn);
                $('#wandhiVipBtn').css({
                    'font-size': '17px',
                    'display': 'inline-block',
                    'height': '22px',
                    'line-height': '22px',
                    'margin': '0 5px',
                    'vertical-align': 'bottom'
                });
                $('#wandhiSearchBtn').css({
                    'font-size': '17px',
                    'display': 'inline-block',
                    'height': '22px',
                    'line-height': '22px',
                    'margin': '0 5px',
                    'vertical-align': 'bottom'
                });
                if ($('.tvinfo').length !== 0) {
                    currentKey = $('.tvinfo').find('h3').eq(0).text();
                } else {
                    currentKey = $('.title').attr('title');
                }
            }
        }

        AddUrl();    
        //http://www1.huizhek.com/index.php?r=searchlist&kwd=123&type=0#
    } else if (reTaoBao.test(VideoUrl)) {
            name = $.trim($('.tb-main-title').text());
            html = '<div class="tb-btn-add" style="padding-top:10px;"><a target="_blank" href="http://www1.huizhek.com/index.php?r=searchlist&type=0&kwd=' + encodeURI(name) + '">领取优惠券(通道一)</a></div>';
            html += '<div class="tb-btn-add" style="padding-top: 10px;padding-left: 10px;"><a target="_blank" href="http://www2.huizhek.com/index.php?r=l&kw=' + encodeURI(name) + '">领取优惠券(通道二)</a></div>';
              $('.tb-action').append(html);
    } else if (reTmall.test(VideoUrl)) {
        name = $.trim($('meta[name=keywords]').attr('content'));
        html = '<div class="tb-btn-basket tb-btn-sku"  style="padding-top:10px;"><a target="_blank" href="http://www1.huizhek.com/index.php?r=searchlist&type=0&kwd=' + encodeURI(name) + '">领取优惠券(通道一)</a></div>';
        html += '<div class="tb-btn-basket tb-btn-sku"  style="padding-top: 10px;padding-left: 10px;"><a target="_blank" href="http://www2.huizhek.com/index.php?r=l&kw=' + encodeURI(name) + '">领取优惠券(通道二)</a></div>';
      $('.tb-action').append(html);
    } else if(reJd.test(VideoUrl)){
        var keywords=$(".sku-name").text().trim();
        $("#choose-btns").prepend('<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">领券购买</span></a>');
        $(".btn-yhj").on('click',function(){window.open("http://jd.huizhek.com/?ah=total&kw="+encodeURIComponent( keywords));});
    }


    function AddUrl() {
        $('#wandhiSearchBtn').attr('href', 'http://tv.wandhi.com/search/' + currentKey);
        $('#wandhiVipBtn').on('click', function () {
            currentUrl = window.location.href;
            window.location.href = 'http://tv.wandhi.com/go.html?url=' + currentUrl;
        });
    }
})();