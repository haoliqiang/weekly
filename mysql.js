var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({     
  host     : '127.0.0.1',       //主机
  user     : 'root',               //MySQL认证用户名
  password : 'root',        //MySQL认证用户密码
  port: '3306',                   //端口号
  database:'test'
}); 
//创建一个connection
connection.connect(function(err){
    if(err){        
          console.log('[query] - :'+err);
        return;
    }
      console.log('[connection connect]  succeed!');
});  
var userModSql = 'select * from users';
var userModSql_Params = ['钟慰', '22',1];
//执行SQL语句
connection.query(userModSql, function(err, result) { 
     if (err) {
             console.log('[UPDATE ERROR] - ',err.message);
        return;
     }
      console.log('--------------------------result----------------------------');
console.log('result',result);
console.log('-----------------------------------------------------------------');
});  
//关闭connection
connection.end(function(err){
    if(err){        
        return;
    }
      console.log('[connection end] succeed!');
});