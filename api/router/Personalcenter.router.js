var db = require('../module/db.moudle.js');

var apiResult = require('../module/apiResult.module.js');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


//如果要使用cookie，需要显式包含这个模块
var cookieParser = require('cookie-parser');
//如果要使用session，需要单独包含这个模块
var session = require('express-session');


exports.Register = function(app){

	//设置 session
	app.use(cookieParser());
	app.use(session({
		secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
		name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
		cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
		resave: false,
		saveUninitialized: true
	}));


	app.post('/Personalcenter', urlencodedParser, function(request, response){

		db.exist('Personalcenter', request.body,[], function(data){
			console.log(data);
			if(data.length > 0){
				request.session.phone = request.body.phone;
				response.send(apiResult(true))
                //console.log(request.session,request.body.phone);
			} else {
				db.del('Personalcenter',function(result){
					if(result){
						db.save('Personalcenter', request.body);
					}
				});
				
				response.send(apiResult(false, '资料修改成功'));
			}
		})
	});

	app.post('/adress', urlencodedParser, function(request, response){
		db.exist('address', request.body,['name','phone','address','onlyphone'], function(data){
			console.log(data)			
				db.save('address', request.body);			
				response.send(apiResult(false, '资料修改成功',data));
		})
	});

	app.post('/updataadress', urlencodedParser, function(request, response){
		//console.log(request.body.data);
	    //需要修改的数据
	    var data = JSON.parse(request.body.data);
	    // 根据id是否查询,转成ObjectId类 
	    var isUpdate = false;
	    db.exist('address',{},[],function(result){
	      	result.forEach(function(item){	 	      		
		        if(item._id == request.body._id){
		        	console.log(item._id == request.body._id);
		          	isUpdate = true; 
		          	//console.log(item._id);  		         
		          	db.updateData('address',item,data);
		          	return false;
		        }
	      	});
	    });
	    //返回修改状态
	    !isUpdate ? response.send(apiResult(true, '修改成功',request.body)):response.send(apiResult(false, '修改失败'));
	});

	// 获取我的资料的数据
	app.post('/getPersonalcenter', urlencodedParser, function(request, response){
		db.extract('Personalcenter',function(result){
			response.send(result);
		});
	});

	app.post('/getaddress', urlencodedParser, function(request, response){
		db.exist('address', {} ,[],function(result){
			var arr = []
			result.forEach(function(item,index){	 	      		
		        if(item.onlyphone == request.body.phone){
					arr.push(item);				
		        }		
			})		
			console.log(arr);	
			response.send(apiResult(false, '资料修改成功',arr));		
		})
	});

	app.post('/deladdress', urlencodedParser, function(request, response){
		 db.exist('address',{},[],function(result){
	      	result.forEach(function(item){	 	      		
		        if(item._id == request.body._id){
		        	db.del('address',item);
					response.send(result);
		        }
	      	});
	    });
	});


	// app.post('/register',urlencodedParser, function(request, response){
	// 	console.log(request.body)
	// 	db.exists('sexUser', request.body,['phone'], function(data){
			
	// 		if(data.length > 0){
	// 			request.session.phone = request.body.phone;
	// 			response.send(apiResult(true,'该手机号已被注册过'))
 //                //console.log(request.session,request.body.phone);
	// 		} else {
	// 			db.save('sexUser', request.body);
	// 			response.send(apiResult(false));
	// 		}
	// 	})
	// });

	// app.get('/logout', function(request, response){
	// 	response.send('account logout');
	// });

	// app.get('/getsession', function(request, response){
	// 	response.send(apiResult(request.session.name != null, null, request.session.name));
	// });
    
   /* //设置跨域访问
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });*/
}
