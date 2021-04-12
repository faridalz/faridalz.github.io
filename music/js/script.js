$(function () {
    $("#butt2").blur(function (event) {
        var screenwidth = window.innerWidth;
        if (screenwidth<768) {
            $("#nav1").collapse('hide');
        }
    });

});
