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

var saveShop = function(_collection, data){
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

var removeShop = function(_collection, data){
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

var saveLogo = function(_collection, data){
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

var removeLogo = function(_collection, data){
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
				if(data.id != null){
					db.collection('shop',function(error,collection){
						collection.find({id:data.id}).toArray(function(error,shops){
							// console.log(shops);
							callback(shops);
						})
					})					
				}else{
					db.collection('shop',function(error,collection){
						collection.find().toArray(function(error,shops){
							// console.log(shops);
							callback(shops);
						})
					})					
				}
				console.log(data)
					
			}
			db.close();
		})		
	})
}

var getLogo = function(_collection,data,callback){
	db.open(function(error,db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				db.collection('logo',function(error,collection){
					collection.find({},{limit:100}).toArray(function(error,shops){
						// console.log(shops);
						callback(shops);
					})
				})
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
				console.log(obj)
				collection.find(obj).toArray(function(err, docs){
					console.log(docs)
					callback(docs)
				});
			}
			db.close();
		})
	})
}


exports.exists = exists;
exports.saveShop = saveShop;
exports.removeShop = removeShop;
exports.saveLog = saveLogo;
exports.removeLogo = removeLogo;
exports.getShop = getShop;
exports.getLogo = getLogo;
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