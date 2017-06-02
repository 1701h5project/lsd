require(['config'],function(){
	require(['zhjquery','global'],function(){
		$('.username').empty().text(sessionStorage.getItem('name','value'));

		$(".headermenu").click(function(){
			$(".herderHide").slideToggle();
		});
		
		$('.icon-jiantou').click(function(){
			history.back();
		})

	});
});