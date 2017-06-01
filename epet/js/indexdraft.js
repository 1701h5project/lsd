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

	//点击增删
	$('.control').click(function(){
		$('.controlInfo').show();		
		$('.searchInfo').hide();
		$('.shopInfo').hide();
		$('.logoInfo').hide();
	})

	//选择collection
	$('.controlInfo>ul').on('click','span',function(){
		$('.controlInfo>ul li span').removeClass('collection');
		$(this).addClass('collection');
	})



	//添加属性
	$('.addAttr').click(function(){
		$('.btn').append('<div>请输入属性名:<input type="text" />请输入属性值:<input type="text" /><button class="affirmAttr">确认</button><button class="resetAttr">重置</button><button class="leave">退出</button></div>')
	
		$('.affirmAttr').click(function(){
			var attrName = $('.btn div input:eq(0)').val();
			var attrVal = $('.btn div input:eq(1)').val();
			$('.controlUl').append('<li><label for="">'+attrName+'</label><input type="text" class="" value="'+attrVal+'"></li>')
		})

		$('.resetAttr').click(function(){
			$('.btn div input').val('');
		})

		$('.leave').click(function(){
			$('.btn div').remove();
		})
	})




	//添加信息
	$('.btn_add').click(function(){

		var attrObj = {};
		for(i=0;i<$('.controlUl li').length;i++){
			attrObj[$('.controlUl li label:eq('+i+')').text()] = $('.controlUl li input:eq('+i+')').val(); 
		}
		attrObj.collection = $('.controlInfo .collection').text();
		
		$.post('/indexData',attrObj,function(response){
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

		var attrObj = {};
		for(i=0;i<$('.controlUl li').length;i++){
			attrObj[$('.controlUl li label:eq('+i+')').text()] = $('.controlUl li input:eq('+i+')').val(); 
		}
		attrObj.collection = $('.controlInfo .collection').text();

		$.get('/indexData',attrObj,function(response){
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


	//选择collection
	$('.searchInfo>div').on('click','span',function(){
		$('.searchInfo>div span').removeClass('collection');
		$(this).addClass('collection');
	})

	//点击查询
	$('.search').click(function(){

		$('.controlInfo').hide();
		$('.searchInfo').show();		
		$('.shopInfo').hide();
		$('.logoInfo').hide();

		$('.searchInfo div').show();
	})

	//查询信息
	$('.btn_search').click(function(){
		// $('.searchInfo').children().remove();
		var obj = {};
		obj.id = $('.searchId').val();
		if($('.searchName').val() != ''){
			obj.name = $('.searchName').val();
		}
		obj.collection = $('.searchInfo .collection').text();
		$.post('/showData',obj,function(response){
			var arr = response;
			var str = JSON.stringify(arr)
			var list ='';
			
			for(i=0;i<arr.length;i++){
				$('.searchInfo').append('<ul class="data'+i+'"></ul>')
				$.each(arr[i], function(j, val) {  
	    			list+='<li><label>'+j+'</label><input type="text" value="'+arr[i][j]+'" /></li>'
				});
				$('.searchInfo ul:eq('+i+')').append(list);
				list = '';
			}
		})		
	})

	//更新信息
	$('.btn_update').click(function(){
		var attrObj = {};
		for(i=0;i<$('.data0 li').length;i++){
			attrObj[$('.data0 li label:eq('+i+')').text()] = $('.data0 li input:eq('+i+')').val();
		}
		attrObj.collection = $('.searchInfo .collection').text();
		
		$.post('/updateData',attrObj,function(response){
			// console.log(response);
			var obj = window.eval('(' + response + ')');
			if(obj.state){
				$('h1').text('更新成功');
			} else {
				$('h1').text(obj.message);
			}
		})
	})

	//更新信息添加属性
	// $('.addAttr').click(function(){
	// 	$('.searchInfo').append('<div>请输入属性名:<input type="text" /><hr/>请输入属性值:<input type="text" /><button class="affirmAttr">确认</button><button class="resetAttr">重置</button><button class="leave">退出</button></div>')
	
	// 	$('.affirmAttr').click(function(){
	// 		var attrName = $('.searchInfo div:eq(2) input:eq(0)').val();
	// 		var attrVal = $('.searchInfo div:eq(2) input:eq(1)').val();
	// 		$('.searchInfo ul').append('<li><label for="">'+attrName+'</label><input type="text" class="" value="'+attrVal+'"></li>')
	// 	})

	// 	$('.resetAttr').click(function(){
	// 		$('.btn div input').val('');
	// 	})

	// 	$('.leave').click(function(){
	// 		$('.btn div').remove();
	// 	})
	// })

	//点击商品信息库
	$('.showShop').click(function(){
		$('.shopInfo').children().remove();
		$('.controlInfo').hide();
		$('.searchInfo').hide();
		$('.shopInfo').show();		
		$('.logoInfo').hide();

		$.post('/showData',{collection:'shop'},function(response){
			var arr = response;
			var str = JSON.stringify(arr)
			var list ='';
			
			for(i=0;i<arr.length;i++){
				$('.shopInfo').append('<ul class="data'+i+'"></ul><hr />')
				$.each(arr[i], function(j, val) {  
	    			list+='<li><label>'+j+'</label><input type="text" value="'+arr[i][j]+'" /></li>'
				});
				$('.shopInfo ul:eq('+i+')').append(list);
				list = '';
			}
		})
	})

	//点击品牌信息库
	$('.showLogo').click(function(){
		$('.logoInfo').children().remove();
		$('.controlInfo').hide();
		$('.searchInfo').hide();
		$('.shopInfo').hide();
		$('.logoInfo').show();
		$.post('/showData',{collection:'logo'},function(response){
			var arr = response;
			var str = JSON.stringify(arr)
			var list ='';
			
			for(i=0;i<arr.length;i++){
				$('.logoInfo').append('<ul class="data'+i+'"></ul><hr />')
				$.each(arr[i], function(j, val) {  
	    			list+='<li><label>'+j+'</label><input type="text" value="'+arr[i][j]+'" /></li>'
				});
				$('.logoInfo ul:eq('+i+')').append(list);
				list = '';
			}
		})
	})

})