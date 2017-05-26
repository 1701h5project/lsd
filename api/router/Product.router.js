var multer = require ('multer');
var db = require('../module/db.moudle.js');

//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// var upload = multer({ dest:  "./upload" }); 

var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, '../upload')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
}) 

var upload = multer({ storage: storage })

exports.Register = function(app){

	app.post('/upload', upload.array('photos', 12), function(req, res) {
		console.log(req.files);  
		console.log(req.body); 	 	
	 	res.send('"上传成功"'); 
	});

  //增加商品
  app.post('/index', urlencodedParser, function(request, response){
    db.exists('shop', request.body, 'id', function(result){
      if(result){
        response.send('{state: false, message: "用户名已存在"}');
      } else {
        db.save('shop', request.body);
        response.send('{state: true}');
      }
    })
  })

  //删除商品
  app.get('/index',function(request, response){
    db.exists('shop', request.query, 'id', function(result){
      if(result){
        db.remove('shop', request.query);
        response.send('{state: true}');      
      }else{
        response.send('{state: false, message: "用户名不存在"}');
      }
    })
  })

  //获取商品
  app.post('/showShop',urlencodedParser,function(request,response){
    db.getShop('shop',request.body,function(result){
      response.send(result);  
    });
  })

}