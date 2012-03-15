var FurkAPI = (function () {

    /// Privileged methods
    // Create, configure, and send XMLHttpRequest
    this.sendRequest = function (method, url, async, callback) {

        var req = new XMLHttpRequest();

        req.open(method, url, async);
        req.onload = callback;
        req.send(null);

        return req;
    }

    /// Privileged methods
    // Send request to API
    //this.spawnRequest = function(method, url, async, callback) {
    //    return sendRequest(method, url, async, callback);
    //}

    // Build API REST URL
    this.apiUrl = function (endPoint) {
        return "http://api.furk.net/api/" + endPoint + "?";
    }


    /// Public methods
    return {
        FurkLoginUrl: function () {
            return "https://www.furk.net/login";
        },
        searchFurk: function (query, cachedOnly, onLoadCallBack, limit) {
            var req = new XMLHttpRequest();

            var q = "http://api.furk.net/api/search?" +
                    "q=" + query

            if (limit !== undefined) {
                q += "&limit=" + limit;
            }

            if (cachedOnly) {
                q += "&filter=cached";
            }

            req.open(
                "GET",
                q,
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
        },
        getFinished: function (ids, hash, onLoadCallBack, limit, sort_col, sort_direction) {

            var q = apiUrl("get_files");

            if (ids !== null) {
                // TODO: fix this
                q += "id=" + ids;
            }

            if (hash !== null) {
                q += "info_hash=" + hash;
            }

            if (limit !== undefined) {
                q += "&offset=" + limit;
            }

            if (sort_col !== undefined) {
                q += "&sort_col=" + sort_col;
            }

            if (sort_direction !== undefined) {
                q += "&sort_typ=" + sort_direction;
            }

            var req = sendRequest("GET",
                                    q,
                                    true,
                                    onLoadCallBack);

        },
        getTorrents: function (id, finishedDate, onLoadCallBack) {

            var q = apiUrl("get_tors");

            if (id !== null) {
                // TODO: fix this
                q += "id=" + id;
            }

            if (finishedDate !== null) {
                q += "finish_dt_gt=" + hash;
            }

            var req = sendRequest("GET",
                                    q,
                                    true,
                                    onLoadCallBack);

        }
    };
} ());
