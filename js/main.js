$(function(){

	//loading
	$(".loader-logo-show").animate({ width: '90%' },600);
	$(".loader-logo-bg").animate({ width: '10%'	},600);

	//scroll
	function setMainScroll(){
		var win = $(window);
		var scrollTop = win.scrollTop();
		var winHeight = win.height();

		if(scrollTop > winHeight * 0.2 ){
			$(".header").addClass("bg");
			$(".big-mask").addClass("show");
			$(".scrolltop").addClass("show");
			$('.big-title-1').css('bottom',scrollTop+'px');
			$('.scrolldown').css('display','none');
		}else{
			$(".header").removeClass("bg");
			$(".big-mask").removeClass("show");
			$(".scrolltop").removeClass("show");
			$('.big-title-1').css('bottom','20vh');
			$('.scrolldown').css('display','block');
		}

		if(scrollTop > winHeight * 0.5 ){
			$('.big-title-2').css('bottom',scrollTop+'px');
		}else{
			$('.big-title-2').css('bottom','50vh');
		}
	}

	setMainScroll(); 

	$(window).scroll(function(){
		setMainScroll(); 
	})

	$(window).resize(function(){
		setMainScroll();
	})

	//burger
	$(".burger").click(function(){
		$(".header").toggleClass("active");
		$(".burger").toggleClass("active");
		$(".nav").toggleClass("active");
	})

	//top
	$(".scrolltop").click(function() {
		$("body,html").animate({scrollTop: 0},500);
	});

})