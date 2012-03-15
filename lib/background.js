function added(e) {

    var result = JSON.parse(e.target.responseText);

    var notification = webkitNotifications.createNotification(
          'images/icon48.png', "Furk Result", FurkForChrome.buildNotification(result));

    setTimeout(function () {
        notification.cancel();
    }, FurkForChrome.notificationTimeOut(7));

    notification.show();

    return notification;
}

/// Handle messages from content scripts
function onRequest(request, sender, sendResponse) {
    var tabId = sender.tab.id;

    switch (request.msg) {
        case "torrentzShow":
            chrome.pageAction.setTitle({ tabId: tabId, title: "Download now" });
            chrome.pageAction.setIcon({ tabId: tabId, path: "images/page-action-dl-19.png" });
            chrome.pageAction.show(tab.id);
            chrome.pageAction.onClicked.addListener(function (tab) {
                FurkAPI.addToFurk(request, added);
                sendResponse({});
            });
    }
}


/*
* Add context menu if required
*/
function createContextMenu() {
    var title = "Add to Furk";

    chrome.contextMenus.create({ title: title, contexts: ['link'],
        targetUrlPatterns: FurkForChrome.torrentSites(),
        onclick: function (info, tab) {
            var req = FurkAPI.addToFurk(FurkForChrome.parseUrl(info), added);
        }
    });
}


function init() {
    createContextMenu();
    chrome.extension.onRequest.addListener(onRequest);
}
