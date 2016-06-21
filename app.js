const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	mysql = require('mysql'),
	pool = mysql.createPool({     //创建一个pool
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


connection.connect(function(err){
    if(err){        
          console.log('[query] - :'+err);
        return;
    }
      console.log('[connection connect]  succeed!');
});  

//执行SQL语句


//index page
app.get('/',function( req , res ) {
        connection.query("select * from users",function(err,result){
                 if(!err) {
                    res.render('index',{
		title : 'index',
		users : result
	})
                 }
            });
	
});

//关闭connection
connection.end(function(err){
    if(err){        
        return;
    }
      console.log('[connection end] succeed!');
});
 app.listen(port);
console.log('weekly started on port'+port);

