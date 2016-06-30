var redisClient = require('../../config/redis');

const REDIS_NEWS_PREFIX = 'news_';

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
	req.models.users.findOne({id: id})
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
	    getUsersFromRedis(id, function(err, doc){
	      if(err) {
	      	return next(err);
		}
	      if(!doc) {
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
	      } else {
	        req.user = doc;
	        return next();
	      }
	    })
	  },
	findOne: function(req, res, next) {
	          return res.json(req.user);
		
	},

	create: function(req, res, next) {
		
		if(!req.body.login_name || !req.body.password
		 || !req.body.name || !req.body.team
		 || !req.body.job){
			return next(new Error('params error'));
		}

		req.models.admin_user.create(req.body,function(err,doc) {
			if(err) {
				return next(err);
			}
			 return res.json(doc);
			});	
  
	},
	update: function(req, res, next) {
		
		if(!req.body.login_name || !req.body.password
		 || !req.body.name || !req.body.team
		 || !req.body.job){
			return next(new Error('params error'));
		}

		req.models.admin_user.update({id: req.body.id},req.body,function(err,doc) {
			if(err) {
				return next(err);
			}
			return res.json(doc);
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
			req.models.admin_user_role.find()
			.populate('admin_role_id')
			.populate('admin_user_id')
			.exec(function(err, doc){
				if(err) {
					return next(err);
				}
				return res.json(doc);
			});
// 		req.models.admin_user.find().populate('role')
// 			.sort({ id: 'desc' })
// 			.exec(function(err, doc){
// 				if(err) {
// 					return next(err);
// 				}
// 				console.log(res.json(doc).models);
// // 				req.models.admin_role.find({json(doc).role[0].admin_role_id}).exec(function(err, doc){
// // 				if(err) {
// // 					return next(err);
// // 				}
// // console.log(doc);
// // 				});
// 				//console.log(doc);
// 				  //return res.json(doc);
// 		});
			
	}
	

}



