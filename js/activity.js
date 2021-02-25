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
    setTimeout(function() {
        $(".big").addClass("open");
    }, 1000);

    //漏斗
    $('.activity-tag-list li').click(function(){
        showNow=$(this).attr("id");
        $('.activity-article-item').css({display:'none'})
        $('.activity-article-item').each(function(index, element) {
            if(showNow=="all"){
                $(this).fadeIn()
            }else{
                if($(this).hasClass(showNow)){
                    $(this).fadeIn()
                }
            }
        });
        
        $(this).addClass('active').siblings().removeClass('active');
        
        return false;
    })




    //動態
    function setScroll() {
        var win = $(window);
        var hWin = win.height();
        var wWin = win.width();
        var scroll = win.scrollTop();
        var move = $(".contact-title, .contact-text, .contact-info-list, .contact-form, .map");
        var color = $(".big-title");
        var eList = $(".activity-article-item");

        move.each(function() {
            var tCont = $(this).offset().top;

            if (scroll > tCont - hWin * 0.8) {
                $(this).addClass("show");
            }
        })

        
        color.each(function() {
            var tCont = $(this).offset().top;

            if (scroll > hWin * 0.4) {

                $('.big-title').css('color', '#f2f2f2');
                $('.open span').css('opacity', '1');


            } else {

                $('.big-title').css('color', '#bc9a65');
                $('.open span').css('opacity', '0.9');

            }
        })

        //set list
        
		eList.each(function() {
			var tCont = $(this).offset().top;
			var hCont = $(this).outerHeight();
			var eImg = $(this).find(".activity-article-img img");

            //set img
            var startImg = -50; //-60
            var moveImg = 45; //100
            var yImg;

            if (scroll < tCont - hWin * 1) {
                yImg = startImg;
            } else if (scroll >= tCont - hWin * 1 && scroll < tCont + hCont) {
                yImg = startImg + moveImg * (scroll - tCont + hWin * 1) / (hCont + hWin * 1);
            } else {
                yImg = startImg + moveImg;
            }

            eImg.css({ top: yImg + "%" });

        })


    }

    setScroll();

    $(window).scroll(function() {
        setScroll();
    })

})



