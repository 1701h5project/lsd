var path = require('path');
var db = require('./db.js');
var express = require('express');
var querystring = require('querystring');
var app = express();

//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var server = app.listen(3000, function(){
  console.log('Server running on http://localhost:3000');
});



app.use(express.static(path.join(path.resolve(__dirname, '../'), '/')));



app.get('/', function(request, response){
  response.send('Hello World');
});

app.get('/index.html', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});




//添加商品
app.post('/index', urlencodedParser, function(request, response){
  db.exists('shop', request.body, 'name', function(result){
    if(result){
      response.send('{state: false, message: "用户名已存在"}');
    } else {
      db.save('shop', request.body);   
      response.send('{state: true}');
    }
  })
})


//移除商品
app.get('/index',function(request, response){
  db.exists('shop', request.query, 'name', function(result){
    if(result){
      db.remove('shop', request.query);
      response.send('{state: true}');      
    }
  })
})