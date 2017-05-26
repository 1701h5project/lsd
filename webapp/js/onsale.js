requirejs(["config"],function(){
	requirejs(["zhjquery"],function(){
		
		$(function(){
			$('.tap-pre').on('click',function(){
				history.back();
			});
			
			$('.tap-menu').on('click',function(){
				$('.onsale-menu').slideToggle();
			})
		});
	});
});