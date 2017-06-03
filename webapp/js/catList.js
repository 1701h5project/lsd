requirejs(["config"],function(){
	requirejs(["zhjquery"],function(){
		var sortingSale = function(data) {
		    var j, d;
		    len = data.length;
		    // console.log(len)
		    for (var i = 0; i < len; i++) {
		        for (j = 0; j < len; j++) {
		            if (data[i].salesNum < data[j].salesNum) {
		                d = data[j];
		                data[j] = data[i];
		                data[i] = d;
		            }
		        }
		    }
		    return data;
		}
		//ajax请求
		$(function(){
			if(localStorage.getItem('search')){
				$.post('/showData',{collection:'shop',name:localStorage.getItem('search')},function(data){
					var res='';
					for(var i=0;i<data.length;i++){
						if(data[i].Activity){
							res+=`<li class="pro-section" data-idx="${data[i].id}">
									<a href="details.html">
										<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
										<div class="pro-detial">
											<h1 class="name">${(data[i].name)[0]}</h1>
											<p class="price">${((data[i].price)[0])[0]}</p>
											<span class="sale">销量:${data[i].salesNum}</span>
										</div>
									</a>
								</li>`
						}	
					};
					$('.catList-main').html(res);
				})
				$('.xiaoliang').click(function(){
					$('.pro-section').remove();
					$.post('/showData',{collection:'shop',name:localStorage.getItem('search')},function(data){
						var res='';
						sortingSale(data);
						data.reverse();
						for(var i=0;i<data.length;i++){
							if(data[i].Activity){
								res+=`<li class="pro-section" data-idx="${data[i].id}">
										<a href="details.html">
											<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
											<div class="pro-detial">
												<h1 class="name">${(data[i].name)[0]}</h1>
												<p class="price">${((data[i].price)[0])[0]}</p>
												<span class="sale">销量:${data[i].salesNum}</span>
											</div>
										</a>
									</li>`
							}	
						};
						$('.catList-main').html(res);
					})
				})
			}else{
				$.get('/index-getdata',{Activity:"yes"},function(data){
					var res='';
					for(var i=0;i<data.length;i++){
						res+=`<li class="pro-section" data-idx="${data[i].id}">
									<a href="details.html">
										<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
										<div class="pro-detial">
											<h1 class="name">${(data[i].name)[0]}</h1>
											<p class="price">${((data[i].price)[0])[0]}</p>
											<span class="sale">销量:${data[i].salesNum}</span>
										</div>
									</a>
								</li>`
					};
					$('.catList-main').append(res);
				});
			};	
			//页面搜索
			$('#search-logo').click(function(){
				if($('#search').val()){
					localStorage.removeItem('search');
					$.post('/showData',{collection:'shop',name:$('#search').val()},function(data){
						console.log(data)
						var res='';
						for(var i=0;i<data.length;i++){
							if(data[i].Activity){
								res+=`<li class="pro-section" data-idx="${data[i].id}">
										<a href="details.html">
											<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
											<div class="pro-detial">
												<h1 class="name">${(data[i].name)[0]}</h1>
												<p class="price">${((data[i].price)[0])[0]}</p>
												<span class="sale">销量:${data[i].salesNum}</span>
											</div>
										</a>
									</li>`
							}	
						};
						$('.catList-main').html(res);
					});
				}else{
					alert('搜索不能为空');
				}
			});
			//商品点击事件生成本地缓存
			$('.catList-main').on("click",'li',function(){
				console.log($(this).attr('data-idx'));
				window.localStorage.setItem('id',$(this).attr('data-idx'));
			});
		});
		
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