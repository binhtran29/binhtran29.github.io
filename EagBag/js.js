
    jQuery(document).ready(function ($) {
        $('.owl-carousel').owlCarousel({
            padding:5,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:3
                },
                575:{
                    items:6
                }
            }
        })
    });

    