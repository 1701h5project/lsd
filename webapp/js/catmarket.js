requirejs(["config"],function(){
	requirejs(["zhjquery","zhswiper"],function(){
		$(function(){
			$('.header').load('header.html');
			$('.footer').load('footer.html');
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
		
		//tab标签切换
		$(function(){
			$('.tab').on('click','li',function(idx,ele){
				$('.img1').css({'display':'block'});
				$('.img2').css({'display':'none'});
				$(this).children('.img1').css({'display':'none'});
				$(this).children('.img2').css({'display':'block'});
				$('.section2 div').each(function(idx,ele){
					$(ele).css({'display':'none'});
				});
				$('.section2 div').eq($(this).attr('data-idx')).css({'display':'flex'});
			});
			$('.tab li').each(function(idx,ele){
				$(ele).attr('data-idx',idx);
			});	
		});
		
		//滑动图
		$(function(){
			var swiper = new Swiper('.swiper-container1', {
		        slidesPerView: 4,
		        paginationClickable: true,
		        freeMode: true
		    });
		})
		
	});
});