var mongodb = require('mongodb');

var server = new mongodb.Server('10.3.133.4', 27017);

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

//添加数据
var saveData = function(_collection, data){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				collection.insert(data);
			}
			db.close();
		})
	})
}

//删除数据
var removeData = function(_collection, data){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)
			} else {
				collection.remove({id:data.id},true);
			}
			db.close();
		})
	})
}

//获取数据
var showData = function(_collection,data,callback){
	db.open(function(error,db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)
			} else {
				if(data.id != null ){
					if(data.name != null){
						var str = data.name;
						db.collection(data.collection,function(error,collection){
							collection.find( { name: { $regex: str, $options: 'i' } } ).toArray(function(error,shops){
								callback(shops);
							});
						})
					}else{
						var str = data.id;
						var arr = str.split(',');
						db.collection(data.collection,function(error,collection){
							collection.find({id:{$in: arr}}).toArray(function(error,shops){
								callback(shops);
							});
						})						
					}


				}else{
					db.collection(data.collection,function(error,collection){
						collection.find().limit(100).toArray(function(error,shops){
							// console.log(shops);
							callback(shops);
						})
					})			
				}
					
			}
			db.close();
		})		
	})
}

//更新数据
var updateData = function(_collection, data){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				collection.remove({id:data.id},true);
				collection.insert(data);
			}
			db.close();
		})
	})
}


var indexGetdata = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}

		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				var obj = {};
				obj[key] = data[key];
				collection.find(obj).toArray(function(err, docs){
					callback(docs)
				});
			}
			db.close();
		})
	})
}


exports.exists = exists;
exports.saveData = saveData;
exports.removeData = removeData;
exports.showData = showData;
exports.updateData = updateData;
exports.indexGetdata = indexGetdata;

var exist = function(_collection, data, arr, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		var obj = {};
		arr.forEach(function (ele) {
			obj[ele] = data[ele]? data[ele] : '';
        });
		
        db.collection(_collection, function(error, collection){
            if(error){
                console.log(error)
            } else {
            	// console.log('obj:',obj);
                collection.find(obj).toArray(function(err, docs){
                    callback(docs);
                });
            }
        });
        db.close();		
	})	
};

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
				collection.insert(data);
			}
			db.close();
		})
	})
}

var del = function(_collection, data){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)
			} else {
				collection.remove({id:data.id},true);
				//collection.remove();
			}
			//callback(true);
			db.close();		
		})
	})
}

var extract = function(_collection,callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		
        db.collection(_collection, function(error, collection){
            if(error){
                console.log(error)
            } else {
            	// console.log('obj:',obj);
                collection.find().toArray(function(err, docs){
                    callback(docs)
                });
            }
        });
        db.close();
		
	})	
}


exports.exist = exist;
exports.save = save;
exports.del = del;
exports.extract = extract;