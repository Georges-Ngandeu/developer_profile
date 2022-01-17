/*

Template: Profyl - Personal Vcard Resume HTML Template
Author: iqonicthemes.in
Version: 1.0

*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Portfolio isotope
3.NiceScroll
4.Progress Bar
5.Magnific Popup
6.Typer
7.Owl Carousel

------------------------------------------------
Index Of Script
----------------------------------------------*/

$(document).ready(function() {

    /*------------------------
    Page Loader
    --------------------------*/
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");


    /*------------------------
    Portfolio isotope
    --------------------------*/
    $(window).on("load resize", function(e) {
        var $container = $('.isotope'),
            colWidth = function() {
                var w = $container.width(),
                    columnNum = 1,
                    columnWidth = 0;
                return columnWidth;
            },
            isotope = function() {
                $container.isotope({
                    resizable: true,
                    itemSelector: '.grid-item',
                    masonry: {
                        columnWidth: colWidth(),
                        gutterWidth: 10
                    }
                });
            };
        isotope();
        var $isotopefilters = $('.isotope-filters');
        // bind filter button click
        $isotopefilters.on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
        });
        // change active class on buttons
        $isotopefilters.each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    });



    /*------------------------
    NiceScroll
    --------------------------*/
    if ($(window).width() < 767) {
        $("#boxscroll").getNiceScroll().hide();
    } else {

        $("#boxscroll").niceScroll();
    }

    /*------------------------
    Magnific Popup
    --------------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
        preloader: false,
        removalDelay: 160,
        fixedContentPos: false
    });
});