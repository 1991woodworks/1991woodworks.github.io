//intro
$(function(){

	setTimeout(function(){
		$("#intro").fadeOut(800);
	},3000);

	$("#intro").click(function(){
		$(this).fadeOut(800);
	});
	
})


//index大圖
$(function(){
	
	var photo = $(".big-pic"),
		first = 0;

	photo.css({opacity:0,zIndex:1});
	photo.eq(first).css({opacity:1});

	photos();

})

	//大圖設定
	function photos(){
		var photo = $(".big-pic"),
			first = 0,
			all = photo.length;

		photo.eq(first).addClass('move-img');

			function next(){
				first = (first < all-1) ? first+1 :0;

				photo.css({zIndex:2}).eq(first).addClass('move-img')
					.fadeTo(1000,1,function(){
					photo.eq(first).siblings().css({opacity: 0}).removeClass('move-img');
					}).siblings().css({zIndex:1});

				setTimeout(next,6000);
			}

		setTimeout(next,6000);
	}
