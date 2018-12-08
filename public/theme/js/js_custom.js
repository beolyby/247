$(document).ready(function()
				  {
	"use strict";
	/* SlideShow OWL */
	$(".slidehow_owl").owlCarousel({
		navigation: true,
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		singleItem : true,
		transitionStyle : "fade",
		//Autoplay
		autoHeight: true,
		autoPlay : true,
		responsive:true,
		navigationText: [
			"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
			"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
		]
	});

	$(".products_owl").owlCarousel({
		navigation: true,
		pagination : true,
		items:4,
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		stopOnHover:true,
		//Autoplay
		autoPlay : true,
		itemsCustom:[[480,2],[320,1],[768,2],[767,2],[991,3],[1200,4]],
		responsive:true,
		navigationText: [
			"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
			"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
		]
	});
	$(".products_owl_spcl").owlCarousel({
		navigation: true,
		pagination : true,
		items:4,
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		stopOnHover:true,
		//Autoplay
		autoPlay : true,
		itemsCustom:[[480,2],[320,1],[768,2],[767,2],[991,3],[1200,4]],
		responsive:true,
		navigationText: [
			"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
			"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
		]
	});
	$(".owl-news").owlCarousel({
		navigation: false,
		pagination : false,
		items:3,
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		stopOnHover:true,
		//Autoplay
		autoPlay : true,
		itemsCustom:[[480,1],[320,1],[768,2],[767,2],[991,2],[1200,3]], 
		responsive:true,
		navigationText: [
			"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
			"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
		]
	});
	$("#owl-phan_hoi").owlCarousel({
		navigation: false,
		pagination : false,
		items:2,
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		stopOnHover:true,
		//Autoplay
		autoPlay : false,
		itemsCustom:[[480,1],[320,1],[768,2],[767,2],[991,2],[1200,2]], 
		responsive:true,
		navigationText: [
			"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
			"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
		]
	});
	$(".products_top_owl").owlCarousel({
		navigation: true,
		pagination : true,
		items:4,
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		//Autoplay
		autoPlay : false,
		itemsCustom:[[480,2],[320,1],[768,2],[767,2],[991,3],[1200,4]],
		responsive:true,
		navigationText: [
			"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
			"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
		]
	});
	if($(window).width() > 991) {
		$(".products_owl_fix").owlCarousel({
			navigation: true,
			pagination : true,
			items:4,
			slideSpeed : 200,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			//Autoplay
			autoPlay : false,
			itemsCustom:[[480,2],[250,1],[768,2],[767,2],[991,3],[1200,4]],
			responsive:true,
			navigationText: [
				"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
				"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
			]
		});
	};
	$(".products_owl_fix2").owlCarousel({
			navigation: true,
			pagination : true,
			items:4,
			slideSpeed : 200,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			//Autoplay
			autoPlay : false,
			itemsCustom:[[480,2],[250,1],[768,2],[767,2],[991,3],[1200,4]],
			responsive:true,
			navigationText: [
				"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
				"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
			]
		});
	$(".products_owl_2").owlCarousel({
		navigation: true,
		pagination : true,
		items:1,
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		//Autoplay
		autoPlay : false,
		itemsCustom:[[480,2],[250,1],[768,2],[767,2],[991,3],[1200,4]],
		responsive:true,
		navigationText: [
			"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
			"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
		]
	});	
	$("#products_owl_false").owlCarousel({
		navigation: true,
		pagination : false,
		items:4,
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		//Autoplay
		autoPlay : true,
		itemsCustom:[[480,2],[250,1],[768,2],[767,2],[991,3],[1200,4]],
		responsive:true,
		navigationText: [
			"<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
			"<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
		]
	});		
});
// Hover Menu

$(".nav-item").hover(function(){
	var w = $(this).offset().left - $(this).parents('.container').offset().left + $(this).width()/2;
	$(this).find('.fixscaret').css('left',w);	
})

// Scroll To top
$(document).ready(function(){
	if ($('.back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-to-top').addClass('show');
				} else {
					$('.back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 1000);
		});
	}
}); 
// Slider pro
/*$(document).ready(function() {
	$( '#example5' ).sliderPro({
		width: 680,
		height: 520,
		orientation: 'vertical',
		loop: false,
		arrows: true,
		buttons: false,
		autoplay: false,
		thumbnailsPosition: 'right',
		thumbnailPointer: true,
		thumbnailWidth: 130,
		breakpoints: {
			800: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 200,
				thumbnailHeight: 100
			},
			500: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 150,
				thumbnailHeight: 50
			}
		}
	});});*/
//Scroll fixed top change navabar//
$(document).ready(function(){
	var header = $('.category_products_menu');
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll >= 100){
			header.addClass('fixed');
		}
		else{
			header.removeClass('fixed');
		}
	});

}); 

//Scroll fixed top change navabar//

$(document).ready(function(){
	$('.search_btn').mouseover(function(){
		$('.search').addClass('active');
	});
});

$(document).ready(function(){
	$('.block_categories_list li').click(function(){
		$('.block_categories_list li ul').slideToggle(400);
	});
});      
//Footer menu
$(document).ready(function(){
	$('.foot_mobile > .widget-item').click(function(){
		$(this).next().slideToggle('slow');

	});
});

//Fitter mobile


$('#show_boloc_mb').click(function() {
		$('#fitter-mobile').show();
	$('.header-filter-back').show();
		$('#list-collection').hide();
		$('.header-filter').hide();
		
		return false;
	});

$('#hidden_boloc_mb').click(function() {
		$('#fitter-mobile').hide();
	$('.header-filter-back').hide();
		$('#list-collection').hide();
		$('.header-filter').show();
		
		return false;
	});



// Menu mobile
$(document).ready(function() {
	$menuLeft = $('.pushmenu-left');
	$nav_list = $('#nav_list');

	$nav_list.click(function(e) {
		$(this).toggleClass('active');
		$('body').toggleClass('pushmenu-push-toright');
		$menuLeft.toggleClass('pushmenu-open');
	});

	$('.navbar-nav').find('.parent').append('<span></span>');

	$('.navbar-nav .parent span').on("click", function() {
		if ($(this).attr('class') == 'opened') {
			$(this).removeClass().parent('.parent').find('ul').slideToggle();
		} else {
			$(this).addClass('opened').parent('.parent').find('ul').slideToggle();
		}
	});  
});
// Tab mobile 

$(document).ready(function() {
	$.fn.responsiveTabs = function() {
		this.addClass('responsive-tabs');
		this.append($('<span class="glyphicon glyphicon-triangle-bottom"><i class="fa fa-angle-down" aria-hidden="true"></i></span>'));
		this.append($('<span class="glyphicon glyphicon-triangle-top"><i class="fa fa-angle-up" aria-hidden="true"></i></span>'));

		this.on('click', 'li.active > a, span.glyphicon', function() {
			this.toggleClass('open');
		}.bind(this));

		this.on('click', 'li:not(.active) > a', function() {
			this.removeClass('open');
		}.bind(this));
	};

	$('.box_products_brands .nav.nav-tabs').responsiveTabs();
});
// CÄƒn chá»‰nh áº£nh má»i kĂ­ch thÆ°á»›c:
/*
jQuery(document).ready(function ($) {

	$('.product-box .product-thumbnail a img').each(function(){
		var t1 = (this.naturalHeight/this.naturalWidth);		
		var t2 = ($(this).parent().height()/$(this).parent().width());
		if(t1< t2){
			$(this).addClass('bethua');
		}

		var m1 = $(this).height();
		var m2 = $(this).parent().height();
		if(m1 < m2){
			$(this).css('padding-top',(m2-m1)/2 + 'px');
		}
	});
});*/