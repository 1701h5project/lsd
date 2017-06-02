requirejs(["config"],function(){
	requirejs(["zhjquery"],function(){
		//判断时候登录
		$(function(){
			$('#fot-center').click(function(){
				if(sessionStorage.getItem('name')){
					window.location.href = "Personalcenter.html";
				}else{
					window.location.href = "login.html";
				}
			})
			
		})
		
	});
});