require(['config'],function(){
	require(['zhjquery','global'],function(){
		$.post('/getregister',{},function(response,request){
			console.log(response);
			console.log(request);
			response.forEach(function(item,index){
				console.log(item,index);
				// if(response[index].phone == request.body.phone)
				// 	{$('.username').empty().text(response[index].name);}
			});
			
			//$('.username').empty().text(response[index].name);
		});
		$(".headermenu").click(function(){
			if($(".herderHide").css("display")=="none"){
				$(".herderHide").show();
			}else{
				$(".herderHide").hide();
			}
		});
		
		$("#goback").click(function(){
			history.back();
		});

	});
});