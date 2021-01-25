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
	$(".big").addClass("open");

	//動態
	function setScroll() {
		var win = $(window);
		var hWin = win.height();
		var wWin = win.width();
		var scroll = win.scrollTop();
		var move = $(".contact-title, .contact-text, .contact-info-list, .contact-form, .map");

		move.each(function() {
		var tCont = $(this).offset().top;

			if (scroll > tCont - hWin * 0.8) {
				$(this).addClass("show");
			}
		})
	}
    
    setScroll();

	$(window).scroll(function() {
		setScroll();
	})

})