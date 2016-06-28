var UsersController = require('../controllers/users.server.controller');

module.exports = function(app){

app.route('/list')
       .get( UsersController.find);
   
  
app.route('/create')
       .post( UsersController.create); //新建操作

//打开指定id的数据
app.route('/update/:uid')
       .get(UsersController.findOne );

//删除操作。删除指定id的数据
app.route('/delete/:id')
       .get(UsersController.delete);

//修改操作。修改指定id的数据
app.route('/update')
       .post(UsersController.update);

//请求id参数，预先处理
app.param('uid', UsersController.getById);
 
};
