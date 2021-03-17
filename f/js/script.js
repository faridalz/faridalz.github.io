$(function () {
    $("#butt").blur(function (event) {
        var screenwidth = window.innerWidth;
        if (screenwidth<768) {
            $("#bs-example-navbar-collapse-1").collapse('hide');
        }
    });

});


(function (global) {
    var dc = {};
    var homeHtml = "snippets/snippet.html";
    var menuhtml = "menu-categories.html"
    var inserthtml = function(selector, html) {
        var targetelem = document.querySelector(selector);
        targetelem.innerHTML = html;
    };
    var showloading = function(selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        inserthtml(selector, html);
        // ajaxload.info
    };

    document.addEventListener("DOMContentLoaded", function(event) {
        showloading('#main-content');
        $ajaxUtils.sendGetRequest (
            homeHtml,
            function (responseText) {
                document.querySelector('#main-content').innerHTML = responseText;  
            },
        false);
 
    });
    global.$dc = dc
}) (window);