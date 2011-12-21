/// <reference path="chrome-api-vsdoc.js"/>
/*
 * Browser bar
 */

$("#spinner").show();

var req = searchFurk("the office", showSearchResults);
//req.onload = showSearchResults;
//req.send(null);

function showSearchResults() {

    var response = JSON.parse(req.responseText);

    var list = document.createElement("ol");
    document.body.appendChild(list);

    for (var i = 0, furkFile; furkFile = response.files[i]; i++) {
        list.appendChild(constructSearchResult(furkFile));
    }

    $("#spinner").hide();
}

function constructSearchResult(file) {
//    var out = document.createElement("li");
//    var link = document.createElement("a");
//    link.setAttribute("href", file.url_dl);
//        out.innerText = file.name;
    return make(["li", "get: ", ["a", { href: file.url_dl }, file.name], "."]); ;
}