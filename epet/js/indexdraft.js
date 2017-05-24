$(function(){

	//左侧菜单点击a标签	
	$('.sideMenu').on('click','a',function(){
		$(this).css('color','#f8675e');
	})

	//重置h1
	$('input').focus(function(){
		$('.status').text('商品信息库');
	})
	
	//添加信息
	$('.btn_add').click(function(){
		var _id = $('.content1').val();
		var _imgurl = $('.content2').val();
		var _name = $('.content3').val();
		var _produce = $('.content4').val();
		var _price = $('.content5').val();
		var _specification = $('.content6').val();

		$.post('/index', {id:_id,imgurl:_imgurl,name:_name,produce:_produce,price:_price,specification:_specification}, function(response){
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

	//删除信息
	$('.btn_del').click(function(){
		var _id = $('.content1').val();
		var _imgurl = $('.content2').val();
		var _name = $('.content3').val();
		var _produce = $('.content4').val();
		var _price = $('.content5').val();
		var _specification = $('.content6').val();

		$.get('/index',{id:_id,imgurl:_imgurl,name:_name,produce:_produce,price:_price,specification:_specification}, function(response){
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

	$('.showShop').click(function(){
		$('.status').text('商品信息库');
		$("input[name='focusIn']").focus();
		$.post('/showShop',{collection:'shop'},function(response){
			var arr = response;
			var str = JSON.stringify(arr)
			for(i=0;i<arr.length;i++){
				$('.datalist').append('<tr><td><input type="checkbox"></td><td><input type="text" class="content1" value="'+arr[i].id+'"></td><td><input type="text" class="content2" value="'+arr[i].imgurl+'"></td><td><input type="text" class="content3" value="'+arr[i].name+'"></td><td><input type="text" class="content4" value="'+arr[i].produce+'"></td><td><input type="text" class="content5" value="'+arr[i].price+'"></td><td><input type="text" class="content6" value="'+arr[i].specification+'"></td><td><button class="btn_add">添加</button></td><td><button class="btn_del">删除</button></td></tr>');
			}
		})
	})


})