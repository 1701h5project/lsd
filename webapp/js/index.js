requirejs(["config"],function(){
	requirejs(["zhjquery","zhswiper"],function(){
		$(function(){
			$.getScript('js/footer.js');
		});
		//轮播图
		$(function(){
			var swiper = new Swiper('.swiper-container1', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        centeredSlides: true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction: false
		    });
		});
		//倒计时
		$(function(){
			var timer = setInterval(countDown,1000);
			var times = 7200;
			
			function countDown(){
				times--;
				var sec = times%60;//获取秒
				var min = Math.floor(times/60)%60;//获取分钟
				var hour = Math.floor(times/60/60)%24;//获取小时
				
				$('#hours').text(hour);
				$('#minute').text(min);
				$('#second').text(sec);
				if(times <= 0){
					clearInterval(timer);
				}
			}
		});
		//滑动
		$(function(){
			var swiper = new Swiper('.swiper-container', {
		        slidesPerView: 4,
		        paginationClickable: true,
		        freeMode: true
		    });
		});
	});
});