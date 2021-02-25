$(function() {

	//loader
	$(".loader-logo-show").animate({ width: '100%' }, 100, function() {
		$(".loader-logo").fadeOut();
		$(".loader-bg").animate({ height: 0 }, 1000, function() {
			$(".loader").hide();
		});
	});
	$(".loader-logo-bg").animate({ width: '0%' }, 100);

	//title出現
	setTimeout(function(){
		$(".big").addClass("open");
	},1000);

	
	

	//動態
	function setScroll() {
		var win = $(window);
		var hWin = win.height();
		var wWin = win.width();
		var scroll = win.scrollTop();
		var move = $(".contact-title, .contact-text, .contact-info-list, .contact-form, .map");
		var color = $(".big-title");

		move.each(function() {
		var tCont = $(this).offset().top;

			if (scroll > tCont - hWin * 0.8) {
				$(this).addClass("show");
			}
		})

		color.each(function() {
            var tCont = $(this).offset().top;

            if (scroll > hWin * 0.3) {

                $('.big-title').css('color', '#161616');

            } else {

                $('.big-title').css('color', '#bc9a65');

            }
        })
	}
    
    setScroll();

	$(window).scroll(function() {
		setScroll();
	})

})