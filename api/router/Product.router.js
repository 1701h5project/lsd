var multer = require ('multer');

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
}