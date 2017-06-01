var db = require('../module/db.moudle.js');

var apiResult = require('../module/apiResult.module.js')

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


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
		saveUninitialized: true,
	}))

	app.post('/register', urlencodedParser, function(request, response){
		db.exist('account', request.body, ['phone'], function(data){
			console.log(request.body);
			//console.log(data);
			if(data.length > 0){
				request.session.phone = request.body.phone;
				response.send(apiResult(true,'该手机号已被注册过'))
			} else {
				db.save('account', request.body); 	
				response.send(apiResult(false));
			}
			
		})
	});

	app.post('/login', urlencodedParser, function(request, response){
		console.log(response);
		db.exist('account', request.body, ['phone','password'],function(data){
			if(data.length > 0){
				request.session.phone = request.body.phone;
				response.send(apiResult(true,'',data))

			} else {
				response.send(apiResult(false, '账户或密码错误'));
			}
		})
	})
	
	app.post('/getregister', urlencodedParser, function(request, response){
		db.extract('account',function(result){
			response.send(result);
		});
	});

	app.get('/register', function(request, response){
		response.send('account register');
	})

	app.get('/logout', function(request, response){
		response.send('account logout');
	})	


	app.get('/getsession', function(request, response){
		response.send(apiResult(request.session.name != null, null, request.session.name));
	})
}

