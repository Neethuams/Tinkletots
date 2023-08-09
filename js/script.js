jQuery(document).ready(function($) {
    $(window).scroll(function () { 
        var scrollTop = $(this).scrollTop();
        if(scrollTop >= 55) {
            $('header .navbar').addClass('fixed');
            $('body').addClass('scrolling');
        } else {
            $('header .navbar').removeClass('fixed');
            $('body').removeClass('scrolling');
        }
    });

    jQuery('header .navbar .container .toggler').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $('header .navbar .container .menu').toggleClass('active');
    });
})