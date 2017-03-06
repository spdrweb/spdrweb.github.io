
$( document ).ready(function(){
    $('.modal').modal({
        dismissible: true, 
        opacity: 0.8, 
        inDuration: 300, 
        outDuration: 200, 
        startingTop: '0%', 
        endingTop: '4%',
    });
    $(".button-collapse").sideNav({
        closeOnClick: true,
    });
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.scrollspy').scrollSpy({
        scrollOffset:50
    });
    $("#side-nave-exit").on("click", function(){
        $('.button-collapse').sideNav('hide');
    });
});



 $(window).bind('DOMContentLoaded load resize', function () {
    if ($(window).innerWidth() <= 800) {
        $("#parallax-image").removeClass('responsive-img');
    }else{
        $("#parallax-image").addClass('responsive-img');
    }
 });

 