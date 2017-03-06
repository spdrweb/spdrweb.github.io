
$( document ).ready(function(){
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.8, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '0%', // Starting top style attribute
        endingTop: '4%', // Ending top style attribute
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

 