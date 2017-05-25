var db = require('../module/db.moudle.js');

exports.Register = function(app){
	//获取主页数据
	app.get('/index-getdata',function(request,respond){
		console.log(request.query)
		db.indexGetdata('shop', request.query, 'Activity', function(data){
			 respond.send(data);
		})
	});
	//获取罐头页数据
	app.get('/catcan-getdata',function(request,respond){
		console.log(request.query)
		db.indexGetdata('shop', request.query, 'Activity', function(data){
			 respond.send(data);
		})
	});
	//获取猫粮页品牌数据
	app.get('/catfood-getdata',function(request,respond){
		console.log(request.query)
		db.indexGetdata('shop', request.query, 'catfoodDiscount', function(data){
			 respond.send(data);
		})
	});
	
	app.get('/product-data',function(request,respond){
		console.log(request.query)
		db.indexGetdata('shop', request.query, 'id', function(data){
			 respond.send(data);
		})
	});
	
}

