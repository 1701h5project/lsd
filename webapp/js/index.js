requirejs(["config"],function(){
	requirejs(["zhjquery","zhswiper"],function(){
		//搜索
		$(function(){
			$('#search-logo').click(function(){
				if($('#search').val()){
					localStorage.setItem('search',$('#search').val());
					location.href='html/catList.html';
				}else{
					alert('搜索不能为空');
				}
			})
		});
		
		//ajax请求
		$(function(){
			$.get(erp.baseUrl+'index-getdata',{Activity:"yes"},function(data){
				var res='';
				for(var i=0;i<data.length;i++){
					res+=`<li class="swiper-slide" data-idx="${data[i].id}">
								<a href="html/details.html">
									<img src="img/product/${(data[i].imgUrl)[0]}"/>
									<p class="price">${((data[i].price)[1])[0]}</p>
									<p>${((data[i].price)[1])[1]}</p>
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
		   		 
		   		 $.get(erp.baseUrl+'catfood-getdata',{catfoodDiscount:"yes"},function(data){
					var res='';
					for(var i=0;i<data[0].imgURL.length;i++){
						res+= `<div class="product-sec">
									<div class="product-sec-t">
										<span id="product-title">
											${data[0].name[i]}
										</span>
										<span id="product-tip">
											${data[0].desc[i]}
										</span>
									</div>
									<div class="product-sec-b">
										<a href=""><img src="img/index/${data[0].imgURL[i]}"/></a>
									</div>
								</div>`
								
					};
					$('.section5').append(res);
				}); 
			});
			
			//商品点击事件生成本地缓存
			$('#ul1').on("click",'li',function(){
				console.log($(this).attr('data-idx'));
				window.localStorage.setItem('id',$(this).attr('data-idx'));
			});
			console.log(window.localStorage.getItem('id'))
			
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
			var end = Date.parse('2017/6/3');
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