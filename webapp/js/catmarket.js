requirejs(["config"],function(){
	requirejs(["zhjquery","zhswiper"],function(){
		$(function(){
			$('.header').load('header.html');
			$('.footer').load('footer.html');
			$.getScript('../js/header.js');
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
			$.get('/catcan-getdata',{Activity:"yes"},function(data){
				var res='';
				for(var i=0;i<data.length;i++){
					res+=`<li class="swiper-slide" data-idx="${data[i].id}">
									<a href="details.html">
										<img src="../img/product/${(data[i].imgUrl)[0]}"/>
										<p class="name">${data[i].name}</p>
										<p class="price">${(data[i].price)[0]}</p>
										<p>${(data[i].price)[1]}</p>
									</a>
								</li>`
				};
				$('#ul1').append(res);
			
				var swiper = new Swiper('.swiper-container1',{
			        slidesPerView: 4,
			        paginationClickable: true,
			        freeMode: true
			    });
			});
			
			//商品点击事件生成本地缓存
			$('#ul1').on("click",'li',function(){
				console.log($(this).attr('data-idx'));
				window.localStorage.setItem('id',$(this).attr('data-idx'));
			});
			console.log(window.localStorage.getItem('id'))
		});
	});
});