// Requires jQuery to be included
var FurkForChromeOptions = (function () {

    return {
        // Saves options to localStorage.
        saveOptions: function () {
            var textBox = document.getElementById("furkForChrome_apiKey");
            var apiKey = textBox.value;
            localStorage["furkForChrome_apiKey"] = apiKey;

            // Update status to let user know options were saved.
            var status = document.getElementById("status");
            status.innerHTML = "Options Saved.";
            setTimeout(function () {
                status.innerHTML = "";
            }, 750);
        },
        // Restores select box state to saved value from localStorage.
        restoreOptions: function () {
            var furkApiKey = localStorage["furkForChrome_apiKey"];
            if (!furkApiKey) {
                return;
            }
            var textBox = document.getElementById("furkForChrome_apiKey");
            textBox.value = furkApiKey;
        },
        // Attempts to scrape the API key from Furk
        findApiKey: function () {
            
        }
    };
} ());