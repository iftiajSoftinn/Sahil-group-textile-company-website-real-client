(function($) {

	"use strict";
	
		// Mouse pointer
		$(".wrapper-main").prepend("<div class='mouse-pointer'></div>");

		function showCoords(event) {
			var x = event.pageX;
			var y = event.pageY;
			var follower = $(".mouse-pointer");
			follower.css({
				left: x + (-12.5) + "px",
				top: y + (-12.5) + "px",
			});

		}
		
		$(window).on("mousemove", function(event) {
			showCoords(event);
		});

		$("li, a, button, input, textarea, .navbar-toggles").mouseenter(function () {
			$(".mouse-pointer").css("opacity", "0");
			$("li, a, button, input, textarea, .navbar-toggles").mouseleave(function () {
				$(".mouse-pointer").css("opacity", "1");
			});
		});
		
		
		// fixed-menu
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.top-nav').addClass('fixed-menu');
			} else {
				$('.top-nav').removeClass('fixed-menu');
			}
		});

		
		// blog-slider
		$("#blog-slider").owlCarousel({
			items:3,
			itemsDesktop:[1199,3],
			itemsDesktopSmall:[1000,2],
			itemsMobile : [650,1],
			navigationText:false,
			autoPlay:true
		});
		
		// customers-slider
		$("#customers-slider").owlCarousel({
			items:5,
			itemsDesktop:[1199,5],
			itemsDesktopSmall:[1000,3],
			itemsMobile : [650,2],
			navigationText:false,
			autoPlay:true
		});
		
	
})(window.jQuery);


/* *****************************
********** Key persons *********
********************************/
$(function (){
   $("#key-persons").owlCarousel({
       items: 3,
       autoplay: true,
       smartSpeed: 800,
       loop: true,
       autoplayHoverPause: true,
       responsive : {
           //breakpoint from 0 up
           0:{
               items:1
           },
           //breakpoint from 0 up
           480:{
               items:2
           },
           //breakpoint from 0 up
           768:{
               items:3
           }

       }
   });
});

// Initiate the wowjs animation library
new WOW().init();

// Initialize Venobox
$('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
});

// Gallery carousel (uses the Owl Carousel library)
$(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
 });



// gallery

