var FurkAPI = (function () {

    return {
        searchFurk: function (query, onLoadCallBack) {
            var req = new XMLHttpRequest();
            req.open(
        "GET",
        "http://api.furk.net/api/search?" +
            "api_key=ChxcYszORiFkEdv-P6o3qQ&" +
            "q=" + query +
            "&limit=10",
        true);

            req.onload = onLoadCallBack;
            req.send(null);

            return req;
        },
        addToFurk: function (link, onLoadCallBack) {
            var req = new XMLHttpRequest();

            var apiCall = "http://api.furk.net/api/add_tor?";

            if (link.hash === undefined) {
                apiCall += "url=" + link.url;
            } else {
                apiCall += "info_hash=" + link.hash;
            }

            req.open(
                "GET",
                apiCall,
                true);

            req.onload = onLoadCallBack;
            req.send(null);
        }
    };
} ());
