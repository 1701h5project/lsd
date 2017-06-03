require(['config'],function(){
	require(['jquery','global'],function(){
		if(sessionStorage.getItem('phone','value') != ''){
			$.post(epet.baseUrl +'getregister',{phone:sessionStorage.getItem('phone','value')},function(response){
				console.log(response);
				$('.username').empty().text(response.data[0].name);
			});
		}
		else{$('.username').empty().text(sessionStorage.getItem('name','value'))}
		
		$(".headermenu").click(function(){
			$(".herderHide").slideToggle();
		});
		
		$('.icon-jiantou').click(function(){
			history.back();
		})

	})
})