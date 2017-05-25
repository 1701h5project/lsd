requirejs(["config"],function(){
	requirejs(["zhjquery"],function(){
		$(function(){
			$('.header').load('header.html');
			$('.footer').load('footer.html');
			$.getScript('../js/header.js');
		});
		
		$(function(){
			$.get('/catfood-getdata',{catfoodDiscount:"yes"},function(data){
				console.log(data)
				var res='';
				for(var i=0;i<data[0].imgURL.length;i++){
					res+=`<div class="product-sec">
								<div class="product-sec-t">
									<span id="product-title">
										${data[0].name[i]}
									</span>
									<span id="product-tip">
										${data[0].desc[i]}
									</span>
								</div>
								<div class="product-sec-b">
									<a href=""><img src="../img/index/${data[0].imgURL[i]}"/></a>
								</div>
							</div>`
				};
				$('.section3').append(res);
			});
		});
	});
});