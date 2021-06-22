$(function () {
    $("#butt").blur(function (event) {
        var screenwidth = window.innerWidth;
        if (screenwidth<768) {
            $("#bs-example-navbar-collapse-1").collapse('hide');
        }
    });

});


window.addEventListener('scroll',()=>{
    let content2 = document.querySelectorAll('.games');
    content2.forEach((item)=>{
        let ContentPosition2 = item.getBoundingClientRect().top;
        let ScreenPosition = window.innerHeight;
        if(ContentPosition2 < ScreenPosition) {
            item.classList.add('active11');
        } 
        else{
            item.classList.remove('active11');
    };
    })
});