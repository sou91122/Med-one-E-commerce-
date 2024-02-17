(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        //Menu On Hover
        $('body').on('mouseenter mouseleave', '.nav-item,.top-dropdown', function (e) {
            if ($(window).width() > 750) {
                var _d = $(e.target).closest('.nav-item,.top-dropdown'); _d.addClass('show');
                setTimeout(function () {
                    _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                }, 1);
            }
        });
        //Menu On Hover
        //  menu toggler
        $(function () {
            $('.navbar-toggler').on('click', function () {
                $(this).toggleClass('open');
            });
        });
        //  menu toggler
        //  menu sticky
        $(function () {
            //caches a jQuery object containing the header element
            var header = $("#menu-area");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 88) {
                    header.addClass("add-sticky");
                } else {
                    header.removeClass("add-sticky");
                }
            });
            if ($(window).width() < 767) {
                var header = $("#topbar-area");
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();

                    if (scroll >= 88) {
                        header.addClass("add-sticky");
                    } else {
                        header.removeClass("add-sticky");
                    }
                });

            }
        });
        //  menu sticky
        // main-slider starts //
        $('#main-slider').slick({
            dots: false,
            speed: 1500,
            cssEase: 'ease',
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // main-slider ends //
        // product-carousel //
        $('#product-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // product-carousel //
        // best-products-carousel //
        $('#best-products-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // best-products-carousel //
        // sale-products-carousel //
        $('#sale-products-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // sale-products-carousel //
        // related-products-carousel //
        $('#related-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // related-products-carousel //
        // List group item
        $(function () {
            if ($(window).width() < 992) {
                var $slideup = $(".left-list-item a");
                $slideup.on('click', function () {
                    if (!($(this).hasClass("current"))) {
                        $slideup.removeClass("current").next("ul").slideUp();
                    }
                    $(this).toggleClass("current");
                    $(this).next("ul").slideToggle("slow");
                    return false;
                });
            }
        });
        // List group item
        // products details thumb scroll
        $(function () {
            $(".details-inner-indicators").niceScroll(
                {
                    scrollspeed: 80,
                    mousescrollstep: 80,
                    cursorwidth:
                        "0px"
                }
            );
        });
        // products details thumb scroll
        // accordion icon
        $(function(){
            $(".collapse.show").each(function(){
                $(this).prev(".card-header").find(".fas").addClass("fa-minus").removeClass("fa-plus");
            });

            // Toggle plus minus icon on show hide of collapse element
            $(".collapse").on('show.bs.collapse', function(){
                $(this).prev(".card-header").find(".fas").removeClass("fa-plus").addClass("fa-minus");
            }).on('hide.bs.collapse', function(){
                $(this).prev(".card-header").find(".fas").removeClass("fa-minus").addClass("fa-plus");
            });
        });
        // accordion icon
    });
    // loader
    $(window).on('load', function (e) {
        $("#loading").delay(300).fadeOut("slow"); // will fade out the white DIV that covers the website.
    })
    // loader
}(jQuery));
