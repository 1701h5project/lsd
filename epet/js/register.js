$(function(){
	$('button').click(function(){
		var _username = $('.userName').val();
		var _psd = $('.psd').val();
		$.post('/indexData',{collection:'epetManager',id:_username,name:_username,password:_psd},function(response){
				var obj = window.eval('(' + response + ')');
				if(!obj.state){
					$('h1').text(obj.message);
				} else {
					$('h1').text('注册成功');
					$('input').val('');
				}
		})		
	})
})