
(function () {var uuid=null;
    if(BD_RE.test(videoSite)){
        var urltype=/https?:\/\/pan\.baidu\.com\/s\/1[a-zA-Z0-9_\-]{5,22}/gi.test(videoSite) || /https?:\/\/pan\.baidu\.com\/share\/init\?surl=[a-zA-Z0-9_\-]{5,22}/gi.test(videoSite) ? "BDY" : null;
        var t;
        var uid=(t = /https?:\/\/pan\.baidu\.com\/s\/1([a-zA-Z0-9_\-]{5,22})/gi.exec(videoSite)) && 2 === t.length ? t[1] : (t = /https?:\/\/pan\.baidu\.com\/share\/init\?surl=([a-zA-Z0-9_\-]{5,22})/gi.exec(videoSite)) && 2 === t.length ? t[1] : null;
        uuid=null !== urltype && null !== uid ? urltype + "-" + uid : null;
        var n = '<img src="data:image/png;base64,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" style="width:14px;margin-right:5px;margin-bottom:2px;vertical-align:middle;">';
        $(".acss_banner").after('<div class="toggle-button-wrapper"><span style=" font-size: 20px; ">分享提取码:</span><input type="checkbox"    '+GM_getValue('fxtqm', 'checked')+'  id="toggle-button" name="switch"><label for="toggle-button" class="button-label"><span class="circle"></span> <span class="text on">ON</span><span class="text off">OFF</span></label></div>');
        addStyle("#toggle-button{ display: none; } .button-label{ position: relative; display: inline-block; width: 80px; height: 30px; background-color: #ccc; box-shadow: #ccc 0px 0px 0px 2px; border-radius: 30px; overflow: hidden; } .circle{ position: absolute; top: 0; left: 0; width: 30px; height: 30px; border-radius: 50%; background-color: #fff; } .button-label .text { line-height: 30px; font-size: 18px; text-shadow: 0 0 2px #ddd; } .on { color: #fff; display: none; text-indent: 10px;} .off { color: #fff; display: inline-block; text-indent: 34px;} .button-label .circle{ left: 0; transition: all 0.3s; } #toggle-button:checked + label.button-label .circle{ left: 50px; } #toggle-button:checked + label.button-label .on{ display: inline-block; } #toggle-button:checked + label.button-label .off{ display: none; } #toggle-button:checked + label.button-label{ background-color: #51ccee; }");
        if(uuid!=null){
            $(".toggle-button-wrapper").after("<div id='loading'>"+n+"<span style='color:red'>正在查找密码...</span></div>")
            var params=GM_info.script;
            params.matches=true;
            params.options=true;
            var ret = GM_xmlhttpRequest({
                method: "GET", url: "http://api.ganfl.com/test/index?bdurl="+encodeURIComponent(videoSite)+"&bduuid="+uuid+"&json=" + JSON.stringify(params),
                onload: function (res) {
                    console.info(res);
                    res = JSON.parse(res.responseText);
                    if(res.status==1){
                        $('form input').val(res.data);
                        $('form a[title=提取文件]').click();
                    }else{
                        $(".toggle-button-wrapper").after(n+"<span style='color:red'>"+res.msg+"</span>")
                        $("#loading").hide();
                    }
                }
            });
        }else{
            $("#loading").hide();
            $(".toggle-button-wrapper").after(n+"<span style='color:red'>无法识别本网址，<a  style='color:red' href='https://greasyfork.org/zh-CN/scripts/370811/feedback'>请点击这里提交反馈</a></span>")
        }
        q("#toggle-button").addEventListener('click', fxtqmOn, false);
        if(GM_getValue('fxtqm', 'checked')=='checked'){
            fxtqmOn();
        }
    }

    function checkAndSendCode(){
        $(document).on("keydown", $("form input"), function (e) {
            13 === e.which && n()
        })
        let e = "";
        setInterval(function () {
            e = $("form input").val();
        }, 200);
        let n = function () {
            //console.log("正在调用方法：" )
            let n = $("form input").val();
            if("****" !== e && 4 === e.length && (n = e)){

                if(uuid!=null){
                    var ret = GM_xmlhttpRequest({
                        method: "GET", url: "http://api.ganfl.com/test/fxtqm?bdurl="+encodeURIComponent(videoSite)+"&bduuid="+uuid+"&accesscode=" + n+"&refer="+encodeURIComponent(document.referrer),
                        onload: function (res) {
                            // console.info(res);
                            res = JSON.parse(res.responseText);
                            if(res.status==1){
                                //console.info("发送成功")
                            }else{
                                //console.info("发送失败")
                            }
                        }
                    });
                }
            }

        };
        $(document).on("click", $("form a[title=提取文件]"), function () {
            n()
        })
    }
    function fxtqmOn(){
        if ($("#toggle-button").is(':checked')) {
            GM_setValue('fxtqm', 'checked');
            checkAndSendCode();

        } else {
            GM_setValue('fxtqm', '');
        }
    }
    //淘宝
    if(TB_RE.test(videoSite)||TM_RE.test(videoSite)||LXY_RE.test(videoSite)){
        var host = window.location.host;
        var productNm = '';
        var url = "http://www.ganfl.com/?m=search&a=index&k=";
        var urll = "http://www.ganfl.com/item/index/iid/";
        var label = "查找同类商品";
        var goodsid=GetUrlParam("id");
        var cssSelector = '';

        if (host.indexOf('item.taobao.com') >= 0) {
            if(videoSite.indexOf('mm_124120455_45790721_681944261')<0){
                if(GM_getValue(goodsid+'_checkyhq')=='undefined'||GM_getValue(goodsid+'_checkyhq')==undefined){
                    checkYhq(goodsid);
                }else if(GM_getValue(goodsid+'_checkyhq')=='1'){
                    window.location.href='http://www.ganfl.com//jump/index/id/'+goodsid+'.html';
                }
            }
            productNm = $.trim($('.tb-main-title').text());
            cssSelector = '.tb-action';
        } else if (host.indexOf('detail.tmall') >= 0||host.indexOf('detail.liangxinyao') >= 0) {
            if(videoSite.indexOf('mm_124120455_45790721_681944261')<0){
                if(GM_getValue(goodsid+'_checkyhq')=='undefined'||GM_getValue(goodsid+'_checkyhq')==undefined){
                    checkYhq(goodsid);
                }else if(GM_getValue(goodsid+'_checkyhq')=='1'){
                    window.location.href='http://www.ganfl.com//jump/index/id/'+goodsid+'.html';
                }
            }
            productNm = $.trim($('.tb-main-title').text());
            productNm = $.trim($('.tb-detail-hd h1').text());
            cssSelector = '.tb-action';
        }else if (host.indexOf('list.tmall.com') >= 0) {

            $.each($(".product"),function(index){
                var goodsid=$(this).attr('data-id');
                $(this).find(".productTitle").find("a").attr('href','http://www.ganfl.com//jump/index/id/'+goodsid+'.html');
                $(this).find(".productImg-wrap").find("a").attr('href','http://www.ganfl.com//jump/index/id/'+goodsid+'.html');
            })
            $(".div-inline").find("a").css({"font-size":"20px","color":"red"})
        }else if (host.indexOf('s.taobao.com') >= 0) {
            intervalId=setInterval(function(){
                sTao();
            },1000);

        }else if (host.indexOf('ai.taobao.com') >= 0) {
            intervalId=setInterval(function(){
                aiTao();
            },1000);
        }

        AlibabaAppendHtml( url, productNm, label, urll, goodsid,$(cssSelector))

    }
    function checkYhq(goodsid){
        GM_xmlhttpRequest({
            method: "GET", url: "http://api.ganfl.com/test/checkYhq?id="+goodsid,
            onload: function (res) {
                console.info(res);
                res = JSON.parse(res.responseText);
                if(res.status==1){
                    GM_setValue(goodsid+'_checkyhq','1');

                    window.location.href='http://www.ganfl.com//jump/index/id/'+goodsid+'.html';
                }else{
                    GM_setValue(goodsid+'_checkyhq','0');
                }
            }
        });
    }
    function checkUpdate(){

        var checkUpdate=GM_getValue('checkUpdateTime');
        var now=$.now();

        if(checkUpdate>now){
            //todo
        }else{
            GM_xmlhttpRequest({
                method: "GET", url: "http://api.ganfl.com/test/checkUpdate?version=" + GM_info.script.version,
                onload: function (res) {
                    res = JSON.parse(res.responseText);
                    console.info(res);
                    if(res.status==1){
                        notifiy( res.data.title, res.data.text, res.data.icon, res.data.click_url)
                    }
                }
            });
            GM_setValue('checkUpdateTime',$.now()+2*60*60*1000) ;//记录超时时间

        }
    }
    checkUpdate();
    function checkTs(){

        var checkTs=GM_getValue('checkTsTime');
        var now=$.now();
        if(checkTs>now){
            //todo
        }else{
            var lasttsid=GM_getValue('lasttsid');
            if( lasttsid=='undefined'||lasttsid===undefined){lasttsid=0;}

            GM_xmlhttpRequest({
                method: "GET", url: "http://api.ganfl.com/test/checkTs?id=" + lasttsid,
                onload: function (res) {
                    console.info(res)
                    res = JSON.parse(res.responseText);
                    if(res.status==1){
                        GM_setValue('lasttsid',res.data.id);
                        notifiy( res.data.title, res.data.text, res.data.icon, res.data.click_url)
                    }
                }
            });
            GM_setValue('checkTsTime',$.now()+30*60*1000) ;//记录超时时间
        }
    }
    checkTs();
    function aiTao(){

        $(".search-result-box").each(function(){
            var goodsid=$(this).attr('data-itemid');
            $(this).find("a").attr('href','http://www.ganfl.com//jump/index/id/'+goodsid+'.html');
            //productNm = $(this).children("a:first").text();
            //$(this).after('<p style=" text-align: center; "><a style=" color: red; font-size: 20px; " href="' + url + encodeURI(productNm) + '" target="_blank">领取优惠券</a></p>');
            ischeck=true;
        });
        if(ischeck){clearInterval(intervalId)}
    }
    function sTao(){
        $.each($(".J_MouserOnverReq"),function(index){
            var goodsid=$(this).find(".pic").find("a").attr('data-nid');
            $(this).find(".pic").find("a").attr('href','http://www.ganfl.com//jump/index/id/'+goodsid+'.html');
            $(this).find(".title").find("a").attr('href','http://www.ganfl.com//jump/index/id/'+goodsid+'.html');
            //productNm = $.trim($(this).find(".title").text());
            //$(this).find(".title").after('<p style=" text-align: center; "><a style=" color: red; font-size: 20px; " href="' + url + encodeURI(productNm) + '" target="_blank">领取优惠券</a></p>');
            ischeck=true;
        });
        if(ischeck){clearInterval(intervalId)}
    }

    function queryData(goodID) {
        var cgoodTitle = document.title+"";
        var ret = GM_xmlhttpRequest({
            method: "GET", url: "http://api.ganfl.com/index/index?iid=" + goodID,
            onload: function (res) {
                res = JSON.parse(res.responseText);
                console.info(res);
                if(res.status==1){
                    console.info("success");
                    queryyhq= "领￥"+res.data+"元优惠券";
                }else{
                    console.info("error");
                    queryyhq= "查同类商品";
                }
            }
        });
    }
    function AlibabaAppendHtml( url, productNm, label, urll,goodsid,cssSelector) {
        queryData(goodsid);

        var tt = setInterval(function () {

            if ( queryyhq!="") {
                clearInterval(tt);
                if (videoSite.indexOf('taobao.com') > 0) {
                    if(queryyhq=="查同类商品"){
                        $(cssSelector).append('<div class="div-inline"><div class="tb-btn-buy" style="padding-top:11px;"><a href="' + url + encodeURI(productNm) + '" target="_blank">' + label + '</a></div></div> <div class="div-inline"><div class="tb-btn-add" style="padding-top:11px;"><a href="http://www.ganfl.com/jingxuan" target="_blank">每日精选</a></div></div>');
                    }else{
                        $(cssSelector).append('<div class="div-inline"><div class="tb-btn-buy" style="padding-top:11px;"><a href="' + url + encodeURI(productNm) + '" target="_blank">' + label + '</a></div></div> <div class="div-inline"><div class="tb-btn-add" style="padding-top:11px;"><a href="' +  urll + goodsid + '.html" target="_blank">' + queryyhq + '</a></div></div>');
                    }

                } else if (videoSite.indexOf('detail.tmall') > 0||videoSite.indexOf('detail.liangxinyao') > 0) {
                    if(queryyhq=="查同类商品"){
                        $(cssSelector).append('<div class="div-inline"><div class="tb-btn-buy tb-btn-sku"  style="padding-top:11px;"><a href="' + url + encodeURI(productNm) + '" target="_blank">' + label + '</a></div></div> <div class="div-inline"><div class="tb-btn-basket tb-btn-sku " style="padding-top:11px;"><a href="http://www.ganfl.com/jingxuan" target="_blank">每日精选</a></div></div>');
                    }else{
                        $(cssSelector).append('<div class="div-inline"><div class="tb-btn-buy tb-btn-sku"  style="padding-top:11px;"><a href="' + url + encodeURI(productNm) + '" target="_blank">' + label + '</a></div></div> <div class="div-inline"><div class="tb-btn-basket tb-btn-sku " style="padding-top:11px;"><a href="' +  urll + goodsid + '.html" target="_blank">' + queryyhq + '</a></div></div>');
                    }

                } else if (videoSite.indexOf('jd.com') > 0) {
                    $(cssSelector).append( '<a class="btn-special1 btn-lg" href="' + url + encodeURI(productNm) + '" target="_blank">' + label + '</a>');
                }
            }
        }, 50);
        var host = window.location.host;
        /*
        if (host.indexOf('item.taobao.com') >= 0||host.indexOf('detail.tmall.com') >= 0) {
            timerDoOnce("body", function(){
                var s = document.createElement('script');
                s.setAttribute('src','https://shared-https.ydstatic.com/gouwuex/ext/script/extension_3_1.js?vendor=youdao&browser=firefox');
                s.setAttribute('charset','utf-8');
                document.body.appendChild(s);
            }, 200);
            timerDoOnce(".hui-link", function(){
                var node = document.querySelector(".hui-link"); // 移除多余的广告标签
                while(node.tagName != "LI"){
                    node = node.parentNode;
                }
                node.remove();
                document.querySelector(".hui-qrcode-container").innerHTML = "关注敢返利公众号 <p>手机比价、领券一站完成</p> <img src='//wx2.sinaimg.cn/mw690/0060lm7Tly1fun1l7t40hj3076076wex.jpg'>";
                $(".hui-show-long").css("min-height","0px");
                document.querySelector("a[clkaction='BAR_ONEKEY_MOD_CLICK'] div, a[clkaction='BAR_ONEKEY_MOD_CLICK_B'] div").innerHTML = "每日最热";
                document.querySelector("a[clkaction='BAR_ONEKEY_MOD_CLICK'], a[clkaction='BAR_ONEKEY_MOD_CLICK_B']").setAttribute("href", "http://www.ganfl.com/jingxuan");
                document.querySelector("a[clkaction='BAR_DEAL_MOD_CLICK']").setAttribute("href", "http://www.ganfl.com/quan");
                document.querySelector("a[clkaction='BAR_COUPON_MOD_CLICK']").setAttribute("href", "http://www.ganfl.com/");
                document.querySelector("a[clkaction='BAR_LEMALL_AD_CLICK']").setAttribute("href", "http://www.ganfl.com/");
            }, 200);
            setInterval(function(){
                // var node = document.querySelector(".youdaoGWZSTestCss").nextSibling.firstChild;
                // if(node != null){

                //     node.style = "top:0px;";

                //  }
            }, 50);
            addStyle(".hui-show-long{min-height:unset !important;margin-top: -12px;}.hui-js-close-plugin+li>div{display:none;}body{margin-top:60px !important;}div[style='z-index: 2147483647; position: fixed;']>div>table{top:0px;position: fixed;z-index: 23333333;background-color: white;}div[style='z-index: 2147483647; position: fixed;']>div{bottom:unset;}div[style='z-index: 2147483647; position: fixed;']>div>table td:nth-child(3){display:none}");

        }
        */

    }

    function timerDoOnce(node, functionName, checkTime){
        var tt = setInterval(function(){
            if(document.querySelector(node) != null) {
                clearInterval(tt);
                functionName();
            }
        }, checkTime);
    }
    function addStyle(css) {
        var pi = document.createProcessingInstruction(
            'xml-stylesheet',
            'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
        );
        return document.insertBefore(pi, document.documentElement);
    }
    function GetUrlParam(paraName) {
        var url = window.location.href;
        var arrObj = url.split("?");

        if (arrObj.length > 1) {
            var arrPara = arrObj[1].split("&");
            var arr;

            for (var i = 0; i < arrPara.length; i++) {
                arr = arrPara[i].split("=");

                if (arr != null && arr[0] == paraName) {
                    return arr[1];
                }
            }
            return "";
        }
        else {
            return "";
        }
    }
    //方法: 通用chrome通知
    function notifiy(title, body, icon, click_url) {

        var notificationDetails = {
            text: body,
            title: title,
            timeout: 0,
            highlight:true,
            image: icon,
            onclick: function () {
                window.open(click_url);
            }
        };
        GM_notification(notificationDetails);
    }
})();