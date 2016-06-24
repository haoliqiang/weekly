var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

module.exports = function() {
	console.log('init expesss...');
	var  app = express();
	app.use(express.static(path.join(__dirname,'../public')));
	app.use(bodyParser.urlencoded({extended:true}));
	app.set('views','./app/views');
	app.set('view engine','ejs');
	app.use(function(req,res, next) {
		req.models = app.get('models');

		next();
	});
	require('../app/routes/users.server.routes')(app);


  // 处理所有未知的请求
  app.use(function(req, res, next){
    res.status(404);
    try {
      return res.json('Not Found');
    } catch(e) {
      console.error('404 set header after sent');
    } 
  });

  // 统一处理出错的情况
  app.use(function(err, req, res, next){
    if(!err) {return next()}
    res.status(500);
    try {
      return res.json(err.message || 'server error');
    } catch(e) {
      console.error('500 set header after sent');
    }
  });

  return app;
};

