angular.module('clientModule')
  .controller('UsersController', ['$scope', 'UsersService', 'RolesService', UsersController]);

function UsersController($scope, UsersService,RolesService){
  $scope.users = [];
  $scope.user = {};
  $scope.status =true;


 $scope.selectRole = function(roleID,roles,id){
   
   var num;
   if(roles[0].id==roleID){
num=0;
   }else if(roles[1].id==roleID){
num=1;
   }else if(roles[2].id==roleID){
num=2;
   }
console.log(num);
  $scope.user.user_role[num].admin_role_id=id;
  //$("#dropdown #"+num+"").val(id);
  //   console.log($("#user_role ."+num+"").val());
  };

  $scope.save = function(){
    $scope.verify();

    UsersService.save($scope.user).then(
      function(data){
         $("#modal-editor").hide();
        $scope.loadNews();
      },
      function(err){
        $scope.editorMessage = err;
      }
    );
  };
   $scope.verify = function(){
   if(!$scope.user.username) {
      $scope.editorMessage = 'username is required';
      return;
    }

    if(!$scope.user.password) {
      $scope.editorMessage = 'password is required';
      return;
    }

if(!$scope.user.name) {
      $scope.editorMessage = 'name is required';
      return;
    }

    // if(!$scope.user.team) {
    //   $scope.editorMessage = 'team is required';
    //   return;
    // }

    // if(!$scope.user.job) {
    //   $scope.editorMessage = 'job is required';
    //   return;
    // }

    $scope.editorMessage = '';
    };

  $scope.update = function(){
 
  $scope.verify();
    UsersService.update($scope.user).then(
      function(data){
           $("#modal-editor").hide();
        $scope.loadNews();
      },
      function(err){
        $scope.editorMessage = err;
      }
    );
  };


  $scope.createUser = function(){
    $("#modal-editor").show();
  };

  $scope.openUserDetail = function(id){
      $scope.status =false;
    $scope.loadDetail(id);
    $scope.createUser();
    
  };

  $scope.loadDetail = function(id){
    UsersService.detail(id).then(
      function(data){
        $scope.user = data;
        console.log($scope.user);
      },
      function(err){}
    );
  };

 $scope.delete = function(id){
    UsersService.delete(id).then(
      function(data){
        
         $scope.loadNews();
      },
      function(err){}
    );
  };

  $scope.formatTime = function(time){
    return moment(time).format('l');
  };



  $scope.loadNews = function(){
    UsersService.list().then(
      function(data){
        $scope.users = data;
        //console.log($scope.users);
      },
      function(err){}
    );
     RolesService.list().then(
      function(data){
        $scope.Aroles = data;
        //console.log($scope.Aroles);
      },
      function(err){}
    );
  };

  $scope.loadNews();
}