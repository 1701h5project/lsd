$(function(){
	// 用户名
	var nameuses = window.sessionStorage.getItem('name','value');
	$('.usess').text(nameuses);
	// 退出
	$('.tuichu').click(function(){
		window.sessionStorage.removeItem('name','value');
		
	})

	$.post(erp.baseUrl + '/getaddress',{},function(response){
		if (response.length == 0) {
			$('.cartcbox').show();
			$('.cartbg').show();
		}else{
			$('.cartcbox').hide();
			$('.cartbg').hide();
			$('.adde').text(response[0].address);
			$('.usess').text(nameuses);
			$('.m1').text(response[0].phone);
		}	
	})

	$(".headermenu").click(function(){
		$(".herderHide").slideToggle();
	});

})