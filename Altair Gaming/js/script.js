$(function () {
    $("#butt").blur(function (event) {
        var screenwidth = window.innerWidth;
        if (screenwidth<768) {
            $("#bs-example-navbar-collapse-1").collapse('hide');
        }
    });

});
