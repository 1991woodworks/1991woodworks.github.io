function viewport() {
	var e = window, a = 'inner';
	if (!('innerWidth' in window )) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

$(function(){

	//loading
	$(".loader-logo-show").animate({ width: '90%' },600);
	$(".loader-logo-bg").animate({ width: '10%'	},600);

	//scroll
	function setMainScroll(){
		var win = $(window);
		var scrollTop = win.scrollTop();
		var winHeight = win.height();



		if(scrollTop > winHeight * 0.4 ){
			$(".header").addClass("bg");
			$(".big-mask").addClass("show");
			$(".scrolltop").addClass("show");
			$('.scrolldown').css('display','none');
			$('.big-title').css('bottom',scrollTop+'px');

		}else{
			$(".header").removeClass("bg");
			$(".big-mask").removeClass("show");
			$(".scrolltop").removeClass("show");
			$('.scrolldown').css('display','block');
			$('.big-title').css('bottom','40vh');

		}

		if(scrollTop > winHeight * 0.4 ){
			$('.big-content').css('opacity','0');
		}else{
			$('.big-content').css('opacity','1');
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