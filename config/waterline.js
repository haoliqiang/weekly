const     Waterline = require('waterline'),
               mysqlAdapter = require('sails-mysql'),
	config =require('./config'),
	Test = require('../app/models/users.server.model'),
	orm = new Waterline();
	wlconfig = {
		adapters: {
		mysql:mysqlAdapter,
		default:'mysql'
		},
		connections:{
		 	mysql:{
		 		adapter:'mysql',
		 		url : 'mysql://root:root@127.0.0.1/test'

		 	}
		 }
	};
orm.loadCollection(Test);
exports.wlconfig =wlconfig;
exports.orm = orm;


// orm.initialize(config,function(err,models) {
// 	if(err){
// 		console.log('orm initialize failed. ', err);
// 		return;
// 	}
// 	console.log('models,',models);
// 	models.collections.user.create({username:'郝里强'},function(err,user) {
//            console.log('after user.create, err ,user:',err, user)
//         });
// })