$(function(){
	$('button').click(function(){
		var _username = $('.userName').val();
		var _psd = $('.psd').val();
		window.sessionStorage.setItem('name',_username);
		$.post('/showData',{collection:'epetManager',username:_username},function(response){
			var arr = response;
			if(arr[0].password == _psd){
				$(window).attr('location','index.html');
			}else{
				$('h1').text('登录失败,请输入正确的密码!')
			}
		})
	})
})