var redisClient = require('../../config/redis');

const REDIS_NEWS_PREFIX = 'user_';

var getUsersFromRedis = function(id, cb){
	  console.log('run getUsersFromRedis');
	  redisClient.get(REDIS_NEWS_PREFIX + id, function(err, v){
	    if(err) return cb(err, null);
	    if(!v) {
	      console.log('doc not in redis');
	      return cb(null, null);
	    }
	    try {
	      v = JSON.parse(v);
	    } catch(e) {
	      return cb(e, null);
	    }
	    console.log('get doc from redis');
	    return cb(err, v);
	  });
};

var getUsersFromMysql = function(req, id, cb){
	console.log('run getUsersFromMysql');
	req.models.admin_user.findOne({id: id})
	.populate('roles')
	.populate('teams')
	.populate('user_role')
	.exec(function(err, doc){
	if(doc) {
	
	redisClient.set(REDIS_NEWS_PREFIX + id, JSON.stringify(doc));
	console.log('save mysql doc to redis');
	}
	return cb(err, doc);
	});
};

module.exports = {
	  // 处理路由参数
	  getById: function(req, res, next, id){
	    if(!id){
	     return next(new Error('user not Found'));
		 }
	 //    getUsersFromRedis(id, function(err, doc){
	 //      if(err) {
	 //      	return next(err);
		// }
	 //      if(!doc) {
	        getUsersFromMysql(req,id, function(err, doc){
	          if(err) {
	          	return next(err);
		}
	          if(!doc) {
	            return next(new Error('user not Found'));
	          }
	          req.user = doc;
	          return next();
	        })
	      // } else {
	      //   req.user = doc;
	      //   return next();
	      // }
	    // })
	  },
	findOne: function(req, res, next) {
	          return res.json(req.user);
		
	},

	create: function(req, res, next) {
		
		if(!req.body.username || !req.body.password
		 || !req.body.name ){
			return next(new Error('params error'));
		}
		console.log(req.body);
		req.models.admin_user.create({
		  name:req.body.name,
		  password:req.body.password,
		  email:req.body.email,
		  is_enabled:req.body.is_enabled,
		  username:req.body.username
		},function(err,doc) {
			if(err) {
				return next(err);
			}
			 return res.json(doc);
			});	
  
	},
	update: function(req, res, next) {
		
		if(!req.body.username || !req.body.password
		 || !req.body.name ){
			return next(new Error('params error'));
		}
                               console.log("req.body"+JSON.stringify(req.body.roles));
                            
		req.models.admin_user.update({id: req.body.id},
			{username: req.body.username,
			password:req.body.password,
			email:req.body.email,
			is_enabled:req.body.is_enabled,
			name:req.body.name
			})
		
		.exec(function(err,doc) {
			if(err) {
				return next(err);
			}
			
			//return res.json(doc);			
			req.models.admin_user_role.destroy({admin_user_id: req.body.id})
			.exec(function(err,doc) {
				if(err) {
					return next(err);
				}
                                   
                                           	
                                        
				req.models.admin_user_role.create( req.body.user_role,function(err,doc) {
					if(err) {
						return next(err);
					}
					  return res.json(doc);
			});

			});	
			
				
			// req.models.admin_user_team_like.destroy({admin_user_id: req.body.id})
			// 		.exec(function(err,doc) {
			// 			if(err) {
			// 				return next(err);
			// 			}
    						
			// 			req.models.admin_user_team_like.create({admin_user_id: req.body.id,admin_user_team_id: req.body.teams[i].id},function(err,doc) {
			// 				if(err) {
			// 					return next(err);
			// 				}
							
			// });	
			
			// });
		
		



			});	
	},
	delete: function(req, res, next) {
		
		if(!req.params.id){
			return next(new Error('params error'));
		}

		req.models.admin_user.destroy({id: req.params.id})
			.exec(function(err, doc){
				if(err) {
					return next(err);
				}

				 return res.json(doc);
			});	
	},
	find: function(req, res, next) {
			req.models.admin_user.find()
			.populate('roles')
			.populate('teams')
			.populate('user_role')
			.exec(function(err, doc){
				
				if(err) {
					return next(err);
				}
				
				return res.json(doc);
			});


			
	}
	

}




