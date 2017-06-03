$(function(){
	$('button').click(function(){
		var _username = $('.userName').val();
		var _psd = $('.psd').val();
		window.sessionStorage.setItem('name',_username);
		$.post('/showData',{collection:'epetManager',id:_username},function(response){
			if(response[0].password == _psd){
				
				$(window).attr('location','index.html');
			}else{
				$('h1').text('请输入正确的帐号和密码!')
			}
		})
	})
})