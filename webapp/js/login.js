require(['config'],function(){
	require(['zhjquery','global','xcConfirm'],function(){
		//点击返回前一个历史页面
		$(function(){
			$("#go-back").click(function(){
				history.back();
			});
			
	      	$('.es_por4').on('click','a',function(){
		        var idx = $(this).index();
		        $('.Content4').children().hide().eq(idx).show();
		        $('.btn_n').children().hide().eq(idx).show();
	      	});
	
	      	$('.btn_n').click(function(){
	
	          	if($(':input').val() == ''){
	          		 window.wxc.xcConfirm('账号和密码不能为空', window.wxc.xcConfirm.typeEnum.error); 
	            	return false;
	          	}
	
	          	$.post(erp.baseUrl +'/login', {
	          		phone: $.trim($('input[name=username]').val()),
					password: $.trim($('input[name=password]').val())
				}, function(response){
	                if(response.status){
	                	var name = response.data[0].name;
	                	sessionStorage.setItem('name',name);
						window.location.href = "Personalcenter.html";					
					} else {
						window.wxc.xcConfirm('账号或密码错误', window.wxc.xcConfirm.typeEnum.error);
						//alert('帐号或密码错误')
					}          		
	          	})   
	      	})   
      	});
	});
});


	   