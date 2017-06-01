require(['config'],function(){
	require(['jquery','global','xcConfirm'],function(){
	
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

          	$.post(epet.baseUrl +'login', {
          		phone: $.trim($('input[name=username]').val()),
				password: $.trim($('input[name=password]').val())
			}, function(response){
	            console.log(response.data[0].name);
	            var name = response.data[0].name;
                if(response.status){
                	sessionStorage.setItem('name',name);
					window.location.href = "Personalcenter.html";					
				} else {
					window.wxc.xcConfirm('账号或密码错误', window.wxc.xcConfirm.typeEnum.error);
				}          		
          	})   
      	})  

      	$('.icon-jiantou').click(function(){
			history.back();
		}) 
	})
})


	   