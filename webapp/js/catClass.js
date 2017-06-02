requirejs(["config"],function(){
	requirejs(["zhjquery","zhswiper"],function(){
		$(function(){
			$('.header').load('header.html');
			$('.footer').load('footer.html');
			$.getScript('../js/header.js');
			$.getScript('../js/footer.js');
		});
		//轮播图
		$(function(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        centeredSlides: true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction: false
		    });
		});
			
	});
});