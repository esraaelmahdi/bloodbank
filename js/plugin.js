/* global $ , alert , consol*/
$(document).ready(function() {

    'use strict';

    /*===================================================*/
    /** start niceScroll **/
    /*===================================================*/
    $("body").niceScroll({

        cursorcolor: "rgba(0, 0, 0, .5)"
    });
    /*===================================================*/
    /** end niceScroll **/
    /*===================================================*/


    /*===============================================*/
    /****  start top-bottom ****/
    /*===============================================*/

    $('.top-bottom').click(function() {

        $('html , body').animate({

            scrollTop: 0
        }, 1000)
    })

    /*===============================================*/
    /****  end top-bottom ****/
    /*===============================================*/


    /*===================================================*/
    /** start navbar-default-fixed-top **/
    /*===================================================*/
    $(window).scroll(function() {

            var scrolTop = $(window).scrollTop();

            if (scrolTop > $('.top-header').height()) {

                $('.navbar-default').addClass('fixed');

            } else {

                $('.navbar-default').removeClass('fixed');
            }


            /**************** top-bottom *******************/
            if (scrolTop > 500) {

                $('.top-bottom').fadeIn(600)

            } else {

                $('.top-bottom').fadeOut(600)

            }

            /**********************************************/

        })
        /*===================================================*/
        /** end navbar-default-fixed-top **/
        /*===================================================*/


    $("#checkdate1 , #checkdate2").datepicker();

});


/*===================================================*/
/**  start owlCarousel **/
/*===================================================*/

$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

/*===================================================*/
/** end owlCarousel **/
/*===================================================*/



/*=================================*/
/*======== loaging =========*/
/*=================================*/

$(window).on('load', function() {

    $('.spinner').fadeOut(1000, function() {

        $('.spinner').parent().fadeOut(1000)

    })




})