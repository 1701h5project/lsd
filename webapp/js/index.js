requirejs(["config"],function(){
	requirejs(["zhjquery","zhswiper"],function(){
		$(function(){
			$.getScript('js/footer.js');
		});
		//ajax请求
		$(function(){
			$.get('/index-getdata',{homeDiscount:"yes"},function(data){
				var res='';
				for(var i=0;i<data[0].imgURL.length;i++){
					res+=`<li class="swiper-slide">
								<a href="">
									<img src="img/index/${data[0].imgURL[i]}"/>
									<p class="price">￥${data[0].price[i]}</p>
									<p>￥${(Number(data[0].price[i])*1.2).toFixed(2)}</p>
								</a>
							</li>`
				};
				$('#ul1').append(res);
				//滑动
				var swiper = new Swiper('.swiper-container', {
			        slidesPerView: 4,
			        paginationClickable: true,
			        freeMode: true
		   		 });
			})
		});
		//轮播图
		$(function(){
			var swiper = new Swiper('.swiper-container2', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        centeredSlides: true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction: false
		    });
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
			var times;
			var end = Date.parse('2017/5/25');
			function countDown(){
				var now = Date.now();
				times=Math.floor((end - now)/1000);
				var sec = times%60;//获取秒
				var min = Math.floor(times/60)%60;//获取分钟
				var hour = Math.floor(times/60/60)%24;//获取小时
				hour = hour<10 ? "0"+hour : hour;
				min = min<10 ? "0"+min : min;
				sec = sec<10 ? "0"+sec : sec;
				$('#hours').text(hour);
				$('#minute').text(min);
				$('#second').text(sec);
				if(times <= 0){
					clearInterval(timer);
				}
			}
		});
		
		//获取地址
		$(function(){
			var localtion=window.localStorage.getItem('localtion-sel');
			if(localtion){
				$('#localtion').text(localtion.substring(0,2));
			}
		});
		
		
	});
});