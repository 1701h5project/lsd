var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017);

var db = new mongodb.Db('epetdata', server);

var exists = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				var obj = {};
				obj[key] = data[key];
				collection.find(obj).toArray(function(err, docs){
					callback(docs[0])
				});
			}
			db.close();
		})
	})	
}

var save = function(_collection, data){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				// console.log(data)
				collection.insert(data);
			}
			db.close();
		})
	})
}

var remove = function(_collection, data){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)
			} else {
				collection.remove(data,true);
			}
			db.close();
		})
	})
}

var getShop = function(_collection,data,callback){
	db.open(function(error,db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				db.collection('shop',function(error,collection){
					collection.find().toArray(function(error,shops){
						// console.log(shops);
						callback(shops);
					})
				})
			}
			db.close();
		})		
	})
}

exports.exists = exists;
exports.save = save;
exports.remove = remove;
exports.getShop = getShop;