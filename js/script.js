/*============================================================
                    preloader
=============================================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/*============================================================
                    Team
=============================================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        dotsSpeed: 700,
        nav: true,
        autoplayHoverPause: true,
        dots: false,
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
});
/*============================================================
                    progressbars
=============================================================*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/*============================================================
                    Responsive tabs
=============================================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});
/*============================================================
                    portfolio
=============================================================*/
$(window).on('load', function () {
    // initislize isotope
    $('#isotope-container').isotope({});
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        // get filter value
        var filtervalue = $(this).attr('data-filter');
        // filter portfolio
        $('#isotope-container').isotope({
            filter: filtervalue
        });
        // active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*============================================================
                    Magnifier
=============================================================*/
$(function () {

    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});
/*============================================================
                    Testimonial
=============================================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        dotsSpeed: 700,
        nav: true,
        autoplayHoverPause: true,
        dots: false,
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/*============================================================
                    stats
=============================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/*============================================================
                    clients
=============================================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        dotsSpeed: 700,
        nav: true,
        autoplayHoverPause: true,
        dots: false,
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            480: {
                items: 6
            }
        }
    });
});
/*============================================================
                navigation
=============================================================*/
$(function () {

    showhidenav();

    $(window).scroll(function () {

        showhidenav();

    });

    function showhidenav() {

        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/solo-images/logo/logo-dark.png");

            // show back to top btn
            $("#back-to-top").fadeIn();

        } else {

            $("nav").removeClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/solo-images/logo/logo.png");

            // hide back to top btn
            $("#back-to-top").fadeOut();

        }
    }
});
// smooth scrolling 
$(function () {

    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

/*============================================================
                    Mobile menu
=============================================================*/
$(function () {
    
    /* show mobile nav */
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    /* hide mobile nav */
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});
/*============================================================
                    animation
=============================================================*/
// animate on scroll
$(function(){
    new WOW().init();
});

// home animation on page load
$(window).on('load', function(){
    
   $("#home-heading1").addClass("animated fadeInDown");
    $("#home-heading2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});








