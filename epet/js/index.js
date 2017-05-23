$(function(){

	// // 输入框内容重置为空
	// $('.shop').on('click','button',function(){
	// 	$('input').val(' ');
	// })

	// //获取table内数据
	// console.log($("table tr td").text())
	// console.log($("table tr td:eq(1)").text())
	
	//重置h1
	$('input').focus(function(){
		$('h1').text('后台管理系统');
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
				$('input').val(' ');
				window.location.reload();
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
				$('input').val(' ');
				window.location.reload();
			}
		})
	})



})
