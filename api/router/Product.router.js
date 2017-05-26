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
  app.post('/indexShop', urlencodedParser, function(request, response){
    db.exists('shop', request.body, 'id', function(result){
      if(result){
        response.send('{state: false, message: "用户名已存在"}');
      } else {
        db.saveShop('shop', request.body);
        response.send('{state: true}');
      }
    })
  })

  //删除商品
  app.get('/indexShop',function(request, response){
    db.exists('shop', request.query, 'id', function(result){
      if(result){
        db.removeShop('shop', request.query);
        response.send('{state: true}');      
      }else{
        response.send('{state: false, message: "用户名不存在"}');
      }
    })
  })

  //增加品牌
  app.post('/indexLogo', urlencodedParser, function(request, response){
    db.exists('logo', request.body, 'id', function(result){
      if(result){
        response.send('{state: false, message: "用户名已存在"}');
      } else {
        db.saveLogo('logo', request.body);
        response.send('{state: true}');
      }
    })
  })

  //删除商品
  app.get('/indexLogo',function(request, response){
    db.exists('logo', request.query, 'id', function(result){
      if(result){
        db.removeLogo('logo', request.query);
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

  //获取品牌
  app.post('/showLogo',urlencodedParser,function(request,response){
    db.getLogo('logo',request.body,function(result){
      response.send(result); 
    });
  })
/*------------------------------------------------------*/
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