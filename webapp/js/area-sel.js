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
		
		//选择地址事件
		$(function(){
			$('.box').on('click','.sel-area',function(){
				window.localStorage.setItem('localtion-sel',$(this).children('a').children('p').text());
			});	
		});
	});
});