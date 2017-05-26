$(function(){

	//左侧菜单点击a标签	
	$('.sideMenu').on('click','a',function(){
		$('.sideMenu ul li a').css('color','#aeb2b7');
		$(this).css('color','#f8675e');
	})

	//重置h1
	$('input').focus(function(){
		$('.status').text('状态');
	})


	//增删按钮改类名
	$('.showShop').click(function(){
		$('.btn_addlogo').addClass('btn_addshop').removeClass('btn_addlogo');
		$('.btn_dellogo').addClass('btn_delshop').removeClass('btn_dellogo');
	})

	$('.showLogo').click(function(){
		$('.btn_addshop').addClass('btn_addlogo').removeClass('btn_addshop');
		$('.btn_delshop').addClass('btn_delloge').removeClass('btn_delshop');
	})
	







	//添加商品信息
	$('.btn_addshop').click(function(){
		var _id = $('.content1').val();
		var _imgurl = $('.content2').val();
		var _name = $('.content3').val();
		var _produce = $('.content4').val();
		var _price = $('.content5').val();
		var _specification = $('.content6').val();
		$.post('/indexShop', {id:_id,imgurl:_imgurl,name:_name,produce:_produce,price:_price,specification:_specification}, function(response){
			// console.log(response);
			var obj = window.eval('(' + response + ')');
			if(!obj.state){
				$('h1').text(obj.message);
			} else {
				$('h1').text('添加成功');
				$('input').val('');
			}
		})
	})

	//删除商品信息
	$('.btn_delshop').click(function(){
		var _id = $('.content1').val();
		var _imgurl = $('.content2').val();
		var _name = $('.content3').val();
		var _produce = $('.content4').val();
		var _price = $('.content5').val();
		var _specification = $('.content6').val();

		$.get('/indexShop',{id:_id,imgurl:_imgurl,name:_name,produce:_produce,price:_price,specification:_specification}, function(response){
			// console.log(response);
			var obj = window.eval('(' + response + ')');
			if(!obj.state){
				$('h1').text(obj.message);
			} else {
				$('h1').text('删除成功');
				$('input').val('');
			}
		})
	})


	//添加品牌信息
	$('.btn_addlogo').click(function(){
		var _id = $('.content1').val();
		var _imgurl = $('.content2').val();
		var _name = $('.content3').val();
		var _produce = $('.content4').val();
		var _price = $('.content5').val();
		var _specification = $('.content6').val();

		$.post('/indexLogo', {id:_id,imgurl:_imgurl,name:_name,produce:_produce,price:_price,specification:_specification}, function(response){
			// console.log(response);
			var obj = window.eval('(' + response + ')');
			if(!obj.state){
				$('h1').text(obj.message);
			} else {
				$('h1').text('添加成功');
				$('input').val('');
			}
		})
	})

	//删除品牌信息
	$('.btn_dellogo').click(function(){
		var _id = $('.content1').val();
		var _imgurl = $('.content2').val();
		var _name = $('.content3').val();
		var _produce = $('.content4').val();
		var _price = $('.content5').val();
		var _specification = $('.content6').val();
		$.get('/indexLogo',{id:_id,imgurl:_imgurl,name:_name,produce:_produce,price:_price,specification:_specification}, function(response){
			// console.log(response);
			var obj = window.eval('(' + response + ')');
			if(!obj.state){
				$('h1').text(obj.message);
			} else {
				$('h1').text('删除成功');
				$('input').val('');
			}
		})
	})
	
	//点击商品信息库显示信息
	$('.showShop').click(function(){
		$('.datalist tr').remove();
		$("input[name='focusIn']").focus();
		$.post('/showShop',{},function(response){
			var arr = response;
			var str = JSON.stringify(arr)
			for(i=0;i<arr.length;i++){
				$('.datalist').append('<tr><td><input type="checkbox"></td><td><input type="text" class="content1" value="'+arr[i].id+'"></td><td><input type="text" class="content2" value="'+arr[i].imgurl+'"></td><td><input type="text" class="content3" value="'+arr[i].name+'"></td><td><input type="text" class="content4" value="'+arr[i].produce+'"></td><td><input type="text" class="content5" value="'+arr[i].price+'"></td><td><input type="text" class="content6" value="'+arr[i].specification+'"></td></tr>');
			}
		})
	})


	//点击品牌信息库显示信息
	$('.showLogo').click(function(){
		$('.datalist tr').remove();
		$('.status').text('状态');
		$("input[name='focusIn']").focus();
		$.post('/showLogo',function(response){
			var arr = response;
			var str = JSON.stringify(arr)
			for(i=0;i<arr.length;i++){
				$('.datalist').append('<tr><td><input type="checkbox"></td><td><input type="text" class="content1" value="'+arr[i].id+'"></td><td><input type="text" class="content2" value="'+arr[i].imgurl+'"></td><td><input type="text" class="content3" value="'+arr[i].name+'"></td><td><input type="text" class="content4" value="'+arr[i].produce+'"></td><td><input type="text" class="content5" value="'+arr[i].price+'"></td><td><input type="text" class="content6" value="'+arr[i].specification+'"></td></tr>');
			}
		})		
	})

})