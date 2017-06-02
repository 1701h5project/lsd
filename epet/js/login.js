$(function(){
	console.log(window.sessionStorage.getItem('erpname'))
	$('button').click(function(){
		var _username = $('.userName').val();
		var _psd = $('.psd').val();
		$.post('/showData',{collection:'epetManager',username:_username},function(response){
			var arr = response;
			if(arr.length>0){
				if(arr[0].password == _psd){
					window.sessionStorage.setItem('erpname',_username);
					$(window).attr('location','index.html');
				}else{
					$('h1').text('登录失败,请输入正确的密码!')
				}
			}else{
				$('h1').text('帐号不存在，请注册帐号!')
			}
			
		})
	})
})