$(function(){
	// 用户名
	var nameuses = window.sessionStorage.getItem('name','value');
	// $('.usess').text(nameuses);
	// // 退出
	// $('.tuichu').click(function(){
	// 	window.sessionStorage.removeItem('name','value');
		
	// })
	$.post(erp.baseUrl + 'getaddress',{phone:sessionStorage.getItem('phone','value')},function(response){
		if (response.data.length == 0) {
			$('.cartcbox').show();
			$('.cartbg').show();
		}else{
			console.log(response.data)
			$('.cartcbox').hide();
			$('.cartbg').hide();
			if (response.data!=null) {
				$('.adde').text(response.data[0].address);
				$('.usess').text(nameuses);
				$('.m1').text(response.data[0].phone);
			}
			
		}
		
				
	})

	$(".headermenu").click(function(){
		$(".herderHide").slideToggle();
	});

})