const  express = require('express'),
            path = require('path'),
            bodyParser = require('body-parser'),
            mysql = require('mysql'),
            connection = mysql.createConnection({     //创建一个connection
	host     : '127.0.0.1',       //主机
	user     : 'root',               //MySQL认证用户名
	password : 'root',        //MySQL认证用户密码
	port: '3306',                   //端口号
	database:'test'
	}); 
            port=process.env.PORT || 3000,
            app = express();

app.set('views','./views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(bodyParser.urlencoded({extended:true}));


connection.connect(function(err){
    if(err){        
          console.log('[query] - :'+err);
        return;
    }
      console.log('[connection connect]  succeed!');
});  

//执行SQL语句


var users;
connection.query('select * from users', function(err, result) { 
			     if (err) {
			             console.log('[ query error] - ',err.message);
			        return;
			     }
			     users=result;
			     console.log(users) ;
			});  
//index page
app.get('/',function( req , res ) {
	
	console.log("users"+users);
	res.render('index',{
		title : 'index',
		users : users
	})
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

