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


 //增加数据
  app.post('/indexData', urlencodedParser, function(request, response){
    var obj = request.body;
    db.exists(obj.collection, request.body, 'id', function(result){
      if(result){
        response.send('{state: false, message: "用户名已存在"}');
      } else {
        db.saveData(obj.collection, request.body);
        response.send('{state: true}');
      }
    })
  })

  //删除数据
  app.get('/indexData',function(request, response){
    var obj = request.query;
    db.exists(obj.collection, request.query, 'id', function(result){
      if(result){
        db.removeData(obj.collection, request.query);
        response.send('{state: true}');      
      }else{
        response.send('{state: false, message: "用户名不存在"}');
      }
    })
  })

  //获取数据
  app.post('/showData',urlencodedParser,function(request,response){
    var obj = request.body;
    db.showData(obj.collection,request.body,function(result){
      response.send(result);
    }); 
  })

  //更新数据
  app.post('/updateData', urlencodedParser, function(request, response){
    var obj = request.body;
    db.updateData(obj.collection, request.body);
    response.send('{state: true}');
  }) 
/*------------------------------------------------------*/
  //获取主页数据
  app.get('/index-getdata',function(request,respond){
    db.indexGetdata('shop', request.query, 'Activity', function(data){
       respond.send(data);
    })
  });
  
  app.get('/index-Fy',function(request,respond){
    db.indexFy('shop', request.query, 'Activity', function(data){
       respond.send(data);
    })
  });
  //获取罐头页数据
  app.get('/catcan-getdata',function(request,respond){
    db.indexGetdata('shop', request.query, 'Activity', function(data){
       respond.send(data);
    })
  });
  //获取猫粮页品牌数据
  app.get('/catfood-getdata',function(request,respond){
    db.indexGetdata('shop', request.query, 'catfoodDiscount', function(data){
       respond.send(data);
    })
  });
  
  app.get('/product-data',function(request,respond){
    db.indexGetdata('shop', request.query, 'id', function(data){
       respond.send(data);
    })
  });

}