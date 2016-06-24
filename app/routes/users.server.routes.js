var UsersController = require('../controllers/users.server.controller');

module.exports = function(app){

app.get('/', UsersController.find);
   
  //新增
app.get('/create', function(req, res) {
 res.render('pages/create', {
 title : '增加新用户',
 user : ''
 });
});

//打开指定id的数据
app.get('/update/:id',  UsersController.findOne );

//删除操作。删除指定id的数据
app.get('/delete/:id', UsersController.delete);

//新建操作
app.post('/create',  UsersController.create);

//修改操作。修改指定id的数据
app.post('/update', UsersController.update);


 
};
