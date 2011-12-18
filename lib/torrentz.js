/// <reference path="chrome-api-vsdoc.js"/>

// Find the hash element in the page
var hashElement = $(".trackers > div:contains('Hash')");
if (hashElement.length) {
    var link = {};
    link.hash = hashElement[0].innerText.split(" ")[1];
    chrome.extension.sendRequest({ msg: "torrentzShow", target: link }, function (response) { });
}

function response(response) {
    console.log(response.returnMsg);
}