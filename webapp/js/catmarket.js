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
			$.get('/catcan-getdata',{canDiscount:"yes"},function(data){
				console.log(data)
				var res='';
				for(var i=0;i<data[0].imgURL.length;i++){
					res+=`<li class="swiper-slide">
									<a href="">
										<img src="../img/index/${data[0].imgURL[i]}"/>
										<p class="name">${data[0].desc[i]}</p>
										<p class="price">￥${data[0].price[i]}</p>
										<p>${(Number(data[0].price[i])*1.2).toFixed(2)}</p>
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
		});
	});
});