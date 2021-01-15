$(".burger").click(function(){
		$(".burger").toggleClass("show");
		$(".header").toggleClass("show");
		$(".nav").toggleClass("show");
	});


$(function(){

	//berger
	$(".burger").click(function(){
		$(".header").toggleClass("active");
		$(".burger").toggleClass("active");
		$(".nav").toggleClass("active");
	});


})