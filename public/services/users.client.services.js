angular.module('clientModule')
  .service("UsersService", ["$http", "$q", UsersService]);


function UsersService($http, $q) {
  function handleRequest(method, url, data) {
    var defered = $q.defer();
    var config = {
      method: method,
      url: url
    };

    if("POST" === method) {
      config.data = data
    } else if('GET' === method) {
      config.params = data;
    }else if('DELETE' === method) {
      config.params = data;
    }

    $http(config).success(function(data){
      defered.resolve(data);
    }).error(function(err){
      defered.reject(err);
       console.log(err);
    });

    return defered.promise;
  }
  return {
    list: function(params){
      return handleRequest('GET', '/list', params);
    },
    save: function(data){
      return handleRequest('POST', '/create', data);
    },
    detail: function(id){
      return handleRequest('GET', '/update/' + id);
    },
    update: function(data){
      return handleRequest('POST', '/update', data);
    },
    delete:function(id){
      return handleRequest('GET',  '/delete/' + id);
    }
  }
}