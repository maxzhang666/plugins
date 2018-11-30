$("#article_content").css("overflow", "overlay");
$("#article_content").css("height", "auto");
$("article.baidu_pl > div.hide-article-box").remove();
$("div.pulllog-box").remove();
$("div.container > aside > div:eq(1)").remove();
$("#asideFooter > .aside-box:eq(0)").remove();
$(".adblock").remove();
$("li.bdsharebuttonbox").remove();
$("#dmp_ad_58").remove();
$("div.recommend-box > div.recommend-ad-box").remove();

csdn.copyright.init("", "", ""); //去除剪贴板劫持
function removeRecommandAds() {
    var lastLength = $("div.recommend-box").children().size();
    for(var i = 0; i < length; i++) {
        var content = $("div.recommend-box > div").eq(i).find("div.content > a").attr("title");
        if(content === null || content === undefined) {
            $("div.recommend-box > div").eq(i).remove();
            i--;
        }
    }
    if($("#btn-readmore").length>0)
    {
      $("#btn-readmore").click();
    }
}
setTimeout(removeRecommandAds, 2000);