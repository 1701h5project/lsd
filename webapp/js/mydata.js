require(['config'],function(){
	require(['zhjquery','global'],function(){
		$.post(epet.baseUrl +'/getPersonalcenter',{},function(response){
			console.log(response);
			// 名字写入getPersonalcenter
			console.log(response[0]._id);
			$('.username').empty().text(response[0].name);
		});

		$('.icon-jiantou').click(function(){
			history.back();
		})

	})
})