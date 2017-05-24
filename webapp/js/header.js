requirejs(["config"],function(){
	requirejs(["zhjquery"],function(){
		$(function(){
			var localtion=window.localStorage.getItem('localtion-sel');
			console.log(localtion)
			if(localtion){
				$('#localtion').text(localtion.substring(0,2));
			}
		});
	});
});