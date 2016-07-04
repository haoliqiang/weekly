angular.module('clientModule')
  .controller('UsersController', ['$scope', 'UsersService', UsersController]);

function UsersController($scope, UsersService){
  $scope.users = [];
  $scope.user = {};
  $scope.status =true;

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
        console.log($scope.users);
      },
      function(err){}
    );
  };

  $scope.loadNews();
}