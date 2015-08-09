/**
 * Created by Administrator on 2015/8/9.
 */
angular.module('my.services.chat', ['ionic', 'my.util.conf'])
.factory('Chats', function($q, $http, Conf) {

    return {
        init: function() {
            var defer = $q.defer();
            $http.jsonp(Conf.chatsInit)
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
            $http.jsonp(Conf.chatsUpload + upperid + '?callback=JSON_CALLBACK')
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
            $http.jsonp(Conf.chatsDownload + lowid + '?callback=JSON_CALLBACK')
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
            $http.jsonp(Conf.chatDetail + userid + '?callback=JSON_CALLBACK')
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