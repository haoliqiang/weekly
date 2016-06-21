const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	mysql = require('mysql'),
	pool = mysql.createPool({     //创建一个connection
		host     : '127.0.0.1',       //主机
		user     : 'root',               //MySQL认证用户名
		password : 'root',        //MySQL认证用户密码
		port: '3306',                   //端口号
		database:'test'
		}); 
	port=process.env.PORT || 3000,
	app = express();

app.set('views','./app/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));


 

//执行SQL语句


//index page
app.get('/',function( req , res ) {
	pool.getConnection(function(err, connection) {
        connection.query("select * from users",function(err,result){
                 if(!err) {
                    res.render('index',{
		title : 'index',
		users : result
	})
                 }
            });
        });
	
});

app.post('/create', function(req, res) {
 pool.getConnection(function(err, connection) {
 connection.query('insert into users set ?', {
 id : req.body.user.id,
 login_name : req.body.user.login_name,
 name : req.body.user.name,
 password : req.body.user.password
 }, function(err, fields) {
 if (err)
 throw err;
 //console.log('Insert is success.');
 //req.flash('info','User created');
 });
 connection.release();
 res.redirect('/');
 
 });
});


//修改操作。修改指定id的数据
app.get('/update/:id', function(req, res) {
 pool.getConnection(function(err, connection) {
 connection.query('SELECT * from users where id=?',[req.params.id],function(err, rows, fields) {
 if (err)
 throw err;
 console.log('search is success.');
 res.render('index', {
 title : 'Update user',
 user: rows[0]
 });
 });
 connection.release();
 });
});
app.post('/update', function(req, res) {
 pool.getConnection(function(err, connection) {
 connection.query('update users set ? where id = ?', [{
 id : req.body.user.id,
 login_name : req.body.user.login_name,
 name : req.body.user.name,
 password : req.body.user.password
 },req.body.user.id], function(err, fields) {
 if (err)
 throw err;
 //console.log('Insert is success.');
 });
 connection.release();
 res.redirect('/');
 });
});


//删除操作。删除指定id的数据
app.get('/delete/:id', function(req, res) {
 pool.getConnection(function(err, connection) {
 connection.query('delete from  users  where id = ?', [req.params.id], function(err, fields) {
 if (err)
 throw err;
 });
 connection.release();
 res.redirect('/');
 });
});
//链接数据库测试 end

 app.listen(port);
console.log('weekly started on port'+port);

