var path = require('path');

var AccountRouter = require('./Account.router.js');
var ProductRouter = require('./Product.router.js');
var PersonalcenterRouter = require('./Personalcenter.router.js');

exports.Register = function(express){
	var app = express();

	AccountRouter.Register(app);
	ProductRouter.Register(app);
	PersonalcenterRouter.Register(app);

	app.get('/', function(request, response){
		response.send('root hello world');
	})
	
	app.use(express.static(path.join(path.resolve(__dirname, '../../'), '/')));

	app.listen(3000);
}