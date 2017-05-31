requirejs(["config"],function(){
	requirejs(["zhjquery","global"],function(){
		//ajax请求
		$(function(){
			$(function(){
				$.get(erp.baseUrl+'/index-getdata',{Activity:"yes"},function(data){
					var res='';
					for(var i=0;i<data.length;i++){
						res+=`<li class="pro-section" data-idx="${data[i].id}">
									<a href="details.html">
										<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
										<div class="pro-detial">
											<h1 class="name">${data[i].name}</h1>
											<p class="price">${(data[i].price)[0]}</p>
											<span class="sale">销量:${data[i].salesNum}</span>
										</div>
									</a>
								</li>`
					};
					$('.catList-main').append(res);
				});
				
				//商品点击事件生成本地缓存
				$('.catList-main').on("click",'li',function(){
					console.log($(this).attr('data-idx'));
					window.localStorage.setItem('id',$(this).attr('data-idx'));
				});
				console.log(window.localStorage.getItem('id'));
				
				
			});
		})
		
		//
		$(function(){
			$('.tap-pre').on('click',function(){
				history.back();
			});
			
			$('.tap-menu').on('click',function(){
				$('.onsale-menu').slideToggle();
			})
		});
		
		//搜索点击事件
		$(function(){
			$('.ul-sel').on('click','li',function(){
				$(this).css('color','red');
				$(this).siblings().css('color','#666')
			})
		})
				
	});
});