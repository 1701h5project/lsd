require(['config'],function(){
	require(['jquery','global'],function(){
		$.post('/getPersonalcenter',{},function(response){
			console.log(response);
			// 名字写入getPersonalcenter
			console.log(response[0]._id);
			$('.username').empty().text(response[0].name);
		});

	})
})