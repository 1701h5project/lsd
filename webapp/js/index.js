requirejs(["config"],function(){
	requirejs(["zhjquery"],function(){
		$(function(){
//			$('#header').load('header.html');
			$('.footer').load('html/footer.html');
			$.getScript('js/footer.js');
		});
	});
});