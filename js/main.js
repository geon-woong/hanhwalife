
window.onload = function(){
    var swMain = new Swiper('.sw-main',{

        // 효과
        loop:true,
        autoplay:{
            delay:10000,
            disableOnInteraction: false,
        },
        pagination:{
            el: ".swiper-pagination",
        }
    })
    var swMd = new Swiper('.sw-md',{
        slidesPerView: 2,
        spaceBetween: 20,
        freeMode: true,
        navigation: {
            nextEl: ".sw-btn-nxt",
            prevEl: ".sw-btn-prev",},
    
    })
    
    $('.gnb').mouseenter(function(){
		$('.header').addClass('header_open');
	});

	$('.gnb').mouseleave(function(){		
		$('.header').removeClass('header_open');
	});

    
}