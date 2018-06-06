
function pageContext(b, a) {
    if (b.pageUrl.indexOf("http://qmdai.cn/") > -1) {
        page = true;
    }else{
		page = true;//all update
	}
	openplayer(b, page);
}

function regexpo(c, a) {
    var b = new RegExp(c);
    if (b.test(a)) {
        return true
    }
    return false
}

function openplayer(b, a) {
    burl = "http://tv.wandhi.com/go.html?url=" + encodeURIComponent(b.pageUrl);
    if (!a) {
        chrome.tabs.create({
            index: tab.index + 1,
            url:  burl,
            selected: true
        }, function (c) {});
        return
    }
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (c) {
        chrome.tabs.update(c[0].id, {
            url: burl + "&title=" + encodeURI(c[0].title)
        })
    })
}
var contexts = ["page", "link"];
var title = ["玩的嗨vip视频解析"];
// Set up context menu tree at install time.
//chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		title: title[0],
		contexts: [contexts[0]],
		documentUrlPatterns:["*://*.mgtv.com/*","*://*.le.com/*","*://*.letv.com/*","*://*.youku.com/*","*://*.iqiyi.com/*","*://*.v.qq.com/*","*://*.tudou.com/*","*://*.wasu.cn/*","*://*.ku6.com/*","*://*.56.com/*","*://*.tv.sohu.com/*","*://*.film.sohu.com/*","*://*.1905.com/*","*://*.pptv.com/*","*://*.baofeng.com/*","*://*.bilibili.com/*","*://*.fun.tv/*","*://*.6.cn/*"],//
		targetUrlPatterns:["http://*/*"],
		onclick: pageContext
	});
	chrome.browserAction.onClicked.addListener(function(b) {
		chrome.tabs.create({
			url:'http://tv.wandhi.com'
		})
	})

    sogouExplorer.contextMenus.create({
    title: title[0],
    contexts: [contexts[0]],
    icon: {path:"vip.ico"},
    documentUrlPatterns:["*://*.mgtv.com/*","*://*.le.com/*","*://*.letv.com/*","*://*.youku.com/*","*://*.iqiyi.com/*","*://*.v.qq.com/*","*://*.tudou.com/*","*://*.wasu.cn/*","*://*.ku6.com/*","*://*.56.com/*","*://*.v.sohu.com/*","*://*.1905.com/*","*://*.fun.tv/*","*://*.6.cn/*"],//
    onclick: pageContext
});
    sogouExplorer.browserAction.onClicked.addListener(function(b) {
    sogouExplorer.tabs.create({
        url:"http://tv.wandhi.com/"
    })
})

  
//});
