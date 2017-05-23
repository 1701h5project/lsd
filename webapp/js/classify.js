$(function(){
	$('.top').on('click','span',function(){
		$('.top span').removeClass('clickTitle');
		$(this).addClass('clickTitle');
	})

	$('.main ul').on('click','span',function(){
		$('.main ul li span').removeClass('clickTitle');
		$(this).addClass('clickTitle');
	})
})