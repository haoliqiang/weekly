var express = require('./config/express');

var app = express();

module.exports = app;
	// mysql = require('mysql'),
	// pool = mysql.createPool({     //创建一个connection
	// 	host     : '127.0.0.1',       //主机
	// 	user     : 'root',               //MySQL认证用户名
	// 	password : 'root',        //MySQL认证用户密码
	// 	port: '3306',                   //端口号
	// 	database:'test'
	// 	}); 
	//port=process.env.PORT || 3000,
// 	app = express();


// app.use(express.static(path.join(__dirname,'public')));
// app.use(bodyParser.urlencoded({extended:true}));


//执行SQL语句



//用户列表
// app.get('/',function( req , res ) {
// 	pool.getConnection(function(err, connection) {
//         connection.query("select * from users",function(err,result){
//         	console.log(result);
//                  if(!err) {
//                     res.render('pages/user',{
// 		title : 'user',
// 		users : result
// 	})
//                  }
//             });
//         });
	
// });

// //新增
// app.get('/create', function(req, res) {
//  res.render('pages/create', {
//  title : '增加新用户',
//  user : ''
//  });
// });

// app.post('/create', function(req, res) {
// 	console.log(req.body);
//  pool.getConnection(function(err, connection) {
//  connection.query('insert into users set ?', {
// login_name : req.body.login_name,
// password : req.body.password,
//  name : req.body.name,
//  team : req.body.team,
//  job: req.body.job
//  }, function(err, fields) {
//  if (err)
//  throw err;
//  //console.log('Insert is success.');
//  //req.flash('info','User created');
//  });
//  connection.release();
//  res.redirect('/');
 
//  });
// });


// //修改操作。修改指定id的数据
// app.get('/update/:id', function(req, res) {
//  pool.getConnection(function(err, connection) {
//  connection.query('SELECT * from users where id=?',[req.params.id],function(err, rows, fields) {
//  if (err)
//  throw err;
//  console.log('search is success.');
//  res.render('pages/create', {
//  title : 'Update user',
//  user: rows[0]
//  });
//  });
//  connection.release();
//  });
// });
// app.post('/update', function(req, res) {
//  pool.getConnection(function(err, connection) {
//  connection.query('update users set ? where id = ?', [{
//  login_name : req.body.login_name,
// password : req.body.password,
//  name : req.body.name,
//  team : req.body.team,
//  job: req.body.job
//  },req.body.id], function(err, fields) {
//  if (err)
//  throw err;
//  //console.log('Insert is success.');
//  });
//  connection.release();
//  res.redirect('/');
//  });
// });


// //删除操作。删除指定id的数据
// app.get('/delete/:id', function(req, res) {
//  pool.getConnection(function(err, connection) {
//  connection.query('delete from  users  where id = ?', [req.params.id], function(err, fields) {
//  if (err)
//  throw err;
//  });
//  connection.release();
//  res.redirect('/');
//  });
// });
// //链接数据库测试 end


