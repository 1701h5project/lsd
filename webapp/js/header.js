requirejs(["config"],function(){
	requirejs(["zhjquery"],function(){
		$(function(){
			var localtion=window.localStorage.getItem('localtion-sel');
			console.log(localtion)
			if(localtion){
				$('#localtion').text(localtion.substring(0,2));
			}
		});
		
		//搜索
		$(function(){
			$('#search-logo').click(function(){
				if($('#search').val()){
					localStorage.setItem('search',$('#search').val());
					location.href='catList.html';
				}else{
					alert('搜索不能为空');
				}
			})
		});
	});
});