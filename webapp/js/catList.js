requirejs(["config"], function() {
	requirejs(["zhjquery", "global"], function() {
		var num = 0;
		var status = true;
		//ajax请求
		$(function() {
			if(localStorage.getItem('search')) {
				$('.ul-sel li').css('color', '#666');
				$.post(erp.baseUrl + '/showData', { id: '', collection: 'shop', name: localStorage.getItem('search') }, function(data) {
					var res = '';
					for(var i = 0; i < data.length; i++) {
						if(data[i].Activity) {
							res += `<li class="pro-section" data-idx="${data[i].id}">
									<a href="details.html">
										<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
										<div class="pro-detial">
											<h1 class="name">${(data[i].name)[1]}</h1>
											<p class="price">${((data[i].price)[1])[0]}</p>
											<span class="sale">销量:${data[i].salesNum}</span>
										</div>
									</a>
								</li>`
						}
					};
					$('.catList-main').html(res);
				})
			} else {
				$.get(erp.baseUrl + '/index-Fy', { Activity: "yes", Num: num }, function(data) {
					var res = '';
					for(var i = 0; i < data.length; i++) {
						res += `<li class="pro-section" data-idx="${data[i].id}">
									<a href="details.html">
										<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
										<div class="pro-detial">
											<h1 class="name">${(data[i].name)[1]}</h1>
											<p class="price">${((data[i].price)[1])[0]}</p>
											<span class="sale">销量:${data[i].salesNum}</span>
										</div>
									</a>
								</li>`
					};
					$('.catList-main').append(res);
					num += 5;
				});
			};
			//页面搜索
			$('#search-logo').click(function() {
				if($('#search').val()) {
					localStorage.removeItem('search');
					$.post(erp.baseUrl + '/showData', { id: '', collection: 'shop', name: $('#search').val() }, function(data) {
						if(data.length == 0) {
							alert('没有该搜索的相关商品');
						}
						var res = '';
						for(var i = 0; i < data.length; i++) {
							if(data[i].Activity) {
								res += `<li class="pro-section" data-idx="${data[i].id}">
										<a href="details.html">
											<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
											<div class="pro-detial">
												<h1 class="name">${(data[i].name)[1]}</h1>
												<p class="price">${((data[i].price)[1])[0]}</p>
												<span class="sale">销量:${data[i].salesNum}</span>
											</div>
										</a>
									</li>`
							}
						};
						$('.catList-main').html(res);
					});
				} else {
					alert('搜索不能为空');
				}
			});
			//商品点击事件生成本地缓存
			$('.catList-main').on("click", 'li', function() {
				console.log($(this).attr('data-idx'));
				window.localStorage.setItem('id', $(this).attr('data-idx'));
			});
		});

		//
		$(function() {
			$('.tap-pre').on('click', function() {
				history.back();
			});

			$('.tap-menu').on('click', function() {
				$('.onsale-menu').slideToggle();
			})
		});

		//搜索点击事件
		$(function() {
			$('.ul-sel').on('click', 'li', function() {
				$(this).css('color', 'red');
				$(this).siblings().css('color', '#666');
			})

			$('.all-pro').click(function(){
				num=0;
//				$.get(erp.baseUrl + '/index-getdata', { Activity: "yes" }, function(data) {
//					var res = '';
//					for(var i = 0; i < data.length; i++) {
//						res += `<li class="pro-section" data-idx="${data[i].id}">
//									<a href="details.html">
//										<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
//										<div class="pro-detial">
//											<h1 class="name">${(data[i].name)[1]}</h1>
//											<p class="price">${((data[i].price)[1])[0]}</p>
//											<span class="sale">销量:${data[i].salesNum}</span>
//										</div>
//									</a>
//								</li>`
//					};
//					$('.catList-main').html(res);
//				});
				$.get(erp.baseUrl + '/index-Fy', { Activity: "yes", Num: num }, function(data) {
					var res = '';
					for(var i = 0; i < data.length; i++) {
						res += `<li class="pro-section" data-idx="${data[i].id}">
									<a href="details.html">
										<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
										<div class="pro-detial">
											<h1 class="name">${(data[i].name)[1]}</h1>
											<p class="price">${((data[i].price)[1])[0]}</p>
											<span class="sale">销量:${data[i].salesNum}</span>
										</div>
									</a>
								</li>`
					};
					$('.catList-main').html(res);
					num += 5;
				});
			});

			//销量排序
			$('.saleNum').click(function() {
				$.get(erp.baseUrl + '/index-getdata', { Activity: "yes" }, function(data){
					for(var j = 0; j < data.length; j++) {
						for(var i = 0; i < data.length - j; i++) {
							//防止出现i大于data.length的情况导致报错
							if(i == data.length - j - 1) {
								break;
							}
							if(Number(data[i].salesNum) < Number(data[i + 1].salesNum)){
								var temp = data[i]; 
								data[i] = data[i + 1]; 
								data[i + 1] = temp;
							}
						}
					}
					var res = '';
					for(var i = 0; i < data.length; i++) {
						res += `<li class="pro-section" data-idx="${data[i].id}">
									<a href="details.html">
										<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
										<div class="pro-detial">
											<h1 class="name">${(data[i].name)[1]}</h1>
											<p class="price">${((data[i].price)[1])[0]}</p>
											<span class="sale">销量:${data[i].salesNum}</span>
										</div>
									</a>
								</li>`
					};
					$('.catList-main').html(res);
				});
			});

			//价格排序
			$('.goodPrice').click(function() {
				$.get(erp.baseUrl + '/index-getdata', { Activity: "yes" }, function(data) {
					for(var j = 0; j < data.length; j++) {
						for(var i = 0; i < data.length - j; i++) {
							//防止出现i大于data.length的情况导致报错
							if(i == data.length - j - 1) {
								break;
							}
							if(Number(((data[i].price)[1])[0].slice(1)) < Number(((data[i + 1].price)[1])[0].slice(1))) {
								// 创建一个临时变量
								var temp = data[i]; 
								data[i] = data[i + 1]; 
								data[i + 1] = temp; 
							}
						}
					}
					var res = '';
					for(var i = 0; i < data.length; i++) {
						res += `<li class="pro-section" data-idx="${data[i].id}">
									<a href="details.html">
										<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
										<div class="pro-detial">
											<h1 class="name">${(data[i].name)[1]}</h1>
											<p class="price">${((data[i].price)[1])[0]}</p>
											<span class="sale">销量:${data[i].salesNum}</span>
										</div>
									</a>
								</li>`
					};
					$('.catList-main').html(res);
				});
			});
		})

		//分页
		$(function(){
			$('.main').scroll(function() {
				//console.log(parseInt($('.catList-main').css('height')))
				//console.log(window.innerHeight)
				if($('.all-pro').css("color") == 'rgb(255, 0, 0)'){
					if($('.main').scrollTop() > parseInt($('.catList-main').css('height')) - window.innerHeight - 50 && status) {
						status = false;
						$.get(erp.baseUrl + '/index-Fy', { Activity: "yes", Num: num }, function(data) {
							var res = '';
							for(var i = 0; i < data.length; i++) {
								res += `<li class="pro-section" data-idx="${data[i].id}">
											<a href="details.html">
												<img src="../img/product/${(data[i].imgUrl)[0]}" alt="" />
												<div class="pro-detial">
													<h1 class="name">${(data[i].name)[1]}</h1>
													<p class="price">${((data[i].price)[1])[0]}</p>
													<span class="sale">销量:${data[i].salesNum}</span>
												</div>
											</a>
										</li>`
							};
							$('.catList-main').append(res);
							num += 5;
							status = true;
						});
					}
				}
			})
		})

	});
});