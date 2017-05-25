require(['config'], function() {
	require(['zhjquery','zhswiper'],function(){

			
	$(function(){
		
		//返回上次浏览网页
		$('#pre-location').click(function(){
			history.back();
		});
		
		
		var proid=window.localStorage.getItem('id');
		var d = window.localStorage.getItem('qty');
		$('em').html(d)

		//---------------请求后台数据生成DOM节点-----------------
			$.get('/product-data',{"id":proid},function(response){
				var arr = response;
				console.log(arr)
				var $carousel =  $('.carousel');
				var $goodKG = $('.good_kg');
				var $goodReferral = $('.good_referral');
				var	$goodPrice = $('.price_left');
				var $electKg = $('.elect_KG');
				var $shopLogo = $('.shop_logo');
				var $shopName = $('.shop_name');
				var $shopCountry = $('.shop_country');
				var $shopMsg = $('.shop_msg');
				var $flag = $('.flag');
				var $selected = $('.selected');



				for(i=0;i<arr.length;i++){
					var imgUrl  =arr[i].imgUrl; //轮播路径
					var name = arr[i].name;	//商品名字
					var referral = arr[i].referral; //商品介绍
					var price = arr[i].price; //商品价钱
					var size = arr[i].size; //商品规格
					var logo = arr[i].logo; //商家logo
					var brandName = arr[i].brandName; //名字
					var country = arr[i].country; //商品产地
					var nationalFlag = arr[i].nationalFlag; //产地国旗
					var brandRef = arr[i].brandRef; //商家介绍
					var id = arr[i].id;

					var res='';
					for(var j = 0 ; j<imgUrl.length;j++){
						res+=`<img  class="swiper-slide" id="imgH" src="../img/product/${imgUrl[j]}">`;
					}
					
					$carousel.append(res);

					//-----商品名字------
					$goodKG.append($('<p>').html(name));

					//------商品介绍--------
					$goodReferral.html(`<p>${referral}</p>`);

					//-------商品价钱---------
					$goodPrice.html(`<span class="discount">${price[0]}</span>
                    <del>${price[1]}</del>`);

                    // -----商品规格---------
                    $electKg.html( `<p>重量<a href="javascript:;">${size[0]}</a><a href="javascript:;">${size[1]}</p>`);
                   
                    //---------商家logo-----------
                    $shopLogo.html(`<img src="../img/product/${logo}" alt="">`);

                    //--------商品名-----------
                    $shopName.html(brandName);

                    //-----------商品产地-------
                    $shopCountry.html(country);

                    //-----------商家介绍-------
                    $shopMsg.html(`<p>${brandRef}</p>`);

                    //----------商品国家---------
                    $flag.css(
                    	{
                    		'background':`url(../img/product/${nationalFlag}) no-repeat`,
                    		'background-size': '0.2rem auto'
                    	}
                    )


                 

                     var carlist = window.localStorage.getItem('buyMsg');

					carlist = carlist ? JSON.parse(carlist) : [];
					console.log(carlist)
                    //--------本地储存-------------
					$('.btn_buy').click(function(){
					//	点击添加按钮时，是添加还是修改数量
					var count =$('em').html();
					var $currentID = id;
				
					var $currentSize=size;
					
					//cookie中是否存在当前商品
					var hasGoods = false;
					for(var i = 0; i < carlist.length; i++) {
						if(carlist[i].goodid === $currentID&&
							carlist[i].gsize === $currentSize) {
							hasGoods = true;
							carlist[i].qty+=count;
							
								break;
						}
					}
					if(!hasGoods) {
						var goods = {
							goodid: id,
							gsize: size,
							imgurl: imgUrl[0],
							name: name,
							price: price,
							qty: count
						}

						carlist.push(goods);
					}

					var x =  JSON.stringify(carlist)



						
						window.localStorage.setItem('qty',count);

					// 	var str = []
					// 		"name":"${name}","price":"${price}","id":"${id}",
					// 	"imgUrl":"${imgUrl[0]}","qty":"${count}"
					// }`

						window.localStorage.setItem('buyMsg',x);
						
					console.log(window.localStorage.getItem('buyMsg'))
						
					})
					// var b = window.localStorage.getItem('buyMsg');
					// var c = eval('(' + b + ')');
					// console.log(c)
					

				}


				//------- 商品图片点击滚动--------
				var swiper = new Swiper('.good_pic',{
				        pagination: '.swiper-pagination',
				        // paginationType: 'fraction'
				});

				//--------点击切换规格---------
				$electKg.find('a').click(function(){
					$selected.find('span').html("'重量,"+$(this).html()+"'")
				})
			})


		// ------------------------------------------------------


		





			//隐藏顶部菜单
			$('.herderHide').hide();

			// -----点击显示顶部菜单------
			$('.nav_btn').click(function(){
				$('.herderHide').stop(true).slideToggle();
			})

			//-----点击显示介绍------

			$('.down').click(function(e){
			
				$('.shop_msg').slideToggle()
			});

			
				
			//---------商品滚动--------------
			var a = new Swiper('.rest_goods',{
		            slidesPerView: 'auto',
			        paginationClickable: true,
			        spaceBetween: 10
			})

			//--------点击购买增加数量-----
			var goodCount = $('em')
			var num = 0
		    $(".btn_buy").click(function(){ 
		    	var input = Number($('.emendation').find('input').val());
		   		num += input
		    	
		    	goodCount.text(num)
		    });


		    //--------------点击添加数量------------------------
			var input = $('.emendation').find('input')
			//数量不能为0；
			input.blur(function() {
				
				if(this.value <= 0) {
					alert('请输入正确的数量')
					
					return this.value = 1;
				}

			})
			//添加
			$('.add').click(function() {
				//重新获取值
				var $addCount = Number(input.val())
				$addCount++;
				input.val($addCount);

			})
			//减少
			$('.minus').click(function() {
				//重新获取值
				var $addCount = Number(input.val())
				if($addCount <= 1) {
					alert('商品数量不能少于1');

					return $addCount = 1;
				}
				$addCount--
				input.val($addCount);
			})

			//收藏
			var change = 0;
			$('.collect').click(function(){
				change++;
				if(change%2 !=0){
					$(this).find('i').css('color','pink');
				}else{
					$(this).find('i').css('color','black');
				}
				
			})
		})
	})
})