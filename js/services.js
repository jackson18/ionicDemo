angular.module('starter.services', ['ionic'])
.factory('Chats', function($q, $http) {

  return {
    init: function() {
      var defer = $q.defer();
      $http.jsonp('http://localhost:3000/users/api?callback=JSON_CALLBACK')
      .success(function(data) {
        defer.resolve(data);
      })
      .error(function(err) {
        deferred.reject(err);
      });
      return defer.promise;
    },
    upLoad: function(upperid) {
      var defer = $q.defer();
      $http.jsonp('http://localhost:3000/users/api/down/id/' + upperid + '?callback=JSON_CALLBACK')
      .success(function(data) {
        defer.resolve(data);
      })
      .error(function(err) {
        deferred.reject(err);
      });
      return defer.promise;
    },
    downLoad: function(lowid) {
      var defer = $q.defer();
      $http.jsonp('http://localhost:3000/users/api/up/id/' + lowid + '?callback=JSON_CALLBACK')
      .success(function(data) {
        defer.resolve(data);
      })
      .error(function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    get: function(userid) {
      var defer = $q.defer();
      $http.jsonp('http://localhost:3000/users/api/id/' + userid + '?callback=JSON_CALLBACK')
      .success(function(data) {
        defer.resolve(data);
      })
      .error(function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  };

});
