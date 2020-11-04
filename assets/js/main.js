   
    // Category Slider
	$('.home-category-slide-inner').owlCarousel({
	    items:3,
	    loop:true,
	    margin:15,
	    nav:true,
	    dots: false,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
	    autoWidth: false,
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[4000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
    
   // ========Home-Items Slider=========
    $('.home-items-slider-inner').owlCarousel({
	    items:1,
	    loop:true,
	    margin:10,
	    nav:true,
	    dot:false,
	    autoplay:false,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[4000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
    
    // =======Home Top Ranking Items=========
    $('.home-top-ranking-items-inner').owlCarousel({
	    items:4,
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:false,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[4000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})

	//========Home Most Famous Items========
	$('.home-most-famous-items-slide-inner').owlCarousel({
	    items:6,
	    loop:true,
	    margin:2,
	    nav:true,
	    center: true,
	    dots: false,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
	    autoWidth: true,
	    lazyLoad:true,
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[4000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})




	// Home V2 Slide Js
	$('.home-v2-item-slides-inner').owlCarousel({
	    items:1,
	    loop:true,
	    margin:0,
	    nav:true,
	    center: true,
	    dots: false,
	    autoplay:true,
	    autoplayTimeout:6000,
	    autoplayHoverPause:true,
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[4000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})




// Search Box js

$(document).ready(function(){
	$(".search").click(function(event){
		event.preventDefault();
		$(".searchinput").remove();
		$(".search-box").append('<div class="searchinput">\
		  <form method="" action="#">\
		    <input type="text" name="" placeholder=" search..." class="search-input-text" required>\
		    <button type="submit" class="submit"><i class="fas fa-search"></i></button>\
		</div>');
	});
})
	