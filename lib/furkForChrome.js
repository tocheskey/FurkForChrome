﻿var FurkForChrome = (function () {

    return {
        notificationTimeOut: function (seconds) {
            return seconds * 1000;
        },
        torrentSites: function () {
            return [
                    '*://*/*.torrent',
                    '*://*/*.torrent?*',
                    'http://www.bt-chat.com/download1.php?id=*',
                    'http://www.kat.ph/torrents/*/',
                    'http://torrentz.eu/*'
                    ];
        },
        buildNotification: function (apiResult) {

            var notificationMessage = "Download ";

            if (apiResult.status == "ok") {
                notificationMessage += " is " + apiResult.torrent.dl_status;
                if (typeof parseInt(apiResult.torrent.size) === 'number') {
                    notificationMessage += ". Size: " + (apiResult.torrent.size / 1048576).toFixed(2) + " MB";
                }
            } else {
                notificationMessage += "failed: " + apiResult.error;

                if (apiResult.error === "access denied") {
                    notificationMessage += ". Please log in at furk.net";
                }
            }

            return notificationMessage;
        },
        parseUrl: function (info) {
            var parse_url = /([a-fA-F0-9]{40})/;
            var result = parse_url.exec(info.linkUrl);

            var link = {};
            link.url = info.linkUrl;
            if (result !== null) {
                link.hash = result[0] || undefined;
            }
            link.text = info.selectionText || ' ';
            link.pageUrl = info.pageUrl;

            return link;
        }
    };
} ());