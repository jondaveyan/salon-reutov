// -----------------------------------------------------------------------------
// Main Javascript 
// -----------------------------------------------------------------------------
(function($) {
    "use strict";

    // Preloader
    // ----------------------------------------
    $(window).load(function(){
        if($('#preloader').length > 0){
            $('#preloader').fadeOut('slow',function(){$(this).remove();});
        }
    });

    $(window).on("load resize ", function() {
      var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
      $('.tbl-header').css({'padding-right':scrollWidth});
    }).resize();

    $(document).ready(function($) {  

        var imageArray = ['./assets/lazep1.jpg', './assets/lazep2.jpg'];
        var fillArray = ['rgba(255, 252, 247, 0.9)', 'rgba(70, 66, 59, 0.9)'];
        var imageIndex = 0;

        setInterval(function(){
            var imageUrl = "url(" + imageArray[imageIndex] + ")";
            $('svg.svg1').css('background-image', imageUrl);
            $('#fill').attr('fill', fillArray[imageIndex]);
            imageIndex++;
            if (imageIndex >= imageArray.length) {
                imageIndex = 0;
            }
        }, 3000);

        $(".navbar-fixed-top").css('background-color', 'rgba(70, 66, 59, 0.8)');
        var scroll_start = 0;
        var startchange = $('#startchange');
        var offset = startchange.offset();
         if (startchange.length){
            $(document).scroll(function() { 
               scroll_start = $(this).scrollTop();
               if(scroll_start > offset.top) {
                   $(".navbar-fixed-top").css('background-color', 'rgba(70, 66, 59, 0.8)');
                   $('.navbar-brand .fa-arrow-up').css('display', 'block'); 
                } else {
                   $('.navbar-brand .fa-arrow-up').css('display', 'none');            }
            });
         }

        // Animating the navbar toggle
        // ----------------------------------------
        $('.navbar-toggle').on('click', function () {
            $(this).toggleClass('active');
        });

        // Bootstrap Dropdown on hover
        // ----------------------------------------
        $('.dropdown').on({
            mouseenter: function (){
                $(this).addClass('open');
            },
            mouseleave: function(){
                $(this).removeClass('open');
            }
        });

        // Gallery Filtering
        // ----------------------------------------
        if($('.filter').length > 0){
            $(".filter").on("click", function () {
                var $this = $(this);
                // if we click the active tab, do nothing
                if ( !$this.hasClass("active") ) {
                    $(".filter").removeClass("active");
                    $this.addClass("active"); // set the active tab
                    // get the data-rel value from selected tab and set as filter
                    var $filter = $this.data("rel");
                    // if we select view all, return to initial settings and show all
                    $filter == 'all' ?
                        $(".item")
                        .css('opacity', 1)
                    : // otherwise
                        $(".item")
                        .css('opacity', .2)
                        .filter(function () {
                            // set data-filter value as the data-rel value of selected tab
                            return $(this).data("filter") == $filter;
                        })
                        .css('opacity', 1);
                } // if
            });
        }

        // Sliders
        // ----------------------------------------

        // home splash slider
        if($('.splash-slider').length > 0){
            $('.splash-slider').owlCarousel({
                singleItem: true,
                transitionStyle: 'fade',
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }

        // simple gallery slider
        if($('.gallery-slider').length > 0){
            $('.gallery-slider').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true
            });
        }

        // full width gallery slider
        if($('.full-gallery-slider').length > 0){
            $('.full-gallery-slider').owlCarousel({
                itemsDesktop: [1199,4],
                itemsDesktopSmall: [992,3],
                itemsTablet: [768,3],
                itemsMobile: [479,1],
                slideSpeed: 1000,
                autoPlay: 5000,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
            });
        }

        // testimonials slider
        if($('.popup-video').length > 0){
            $('.popup-video ').owlCarousel({
                singleItem: true,
                transitionStyle: 'fade',
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }

        // Progress
        // ----------------------------------------
        if($('.progress-circle').length > 0){
            $('.progress-circle').circleProgress({
                size: 140,
                startAngle: -Math.PI / 2,
                thickness: 30,
                emptyFill: "#fff",
                fill: {
                    color: "#dcb879"
                }
            });
        }

        // Gallery Popup
        // ----------------------------------------

        // image popup
        if($('.popup').length > 0){
            $('.popup').magnificPopup({
              type: 'image'
            });
        }

        // video popup
        if($('.popup-video').length > 0){
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
    });
})(jQuery);



