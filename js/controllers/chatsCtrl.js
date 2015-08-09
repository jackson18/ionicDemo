/**
 * Created by Administrator on 2015/8/9.
 */
angular.module('my.controllers.chats', ['my.services.chat'])
.controller('ChatsCtrl', function($scope, $rootScope, Chats) {
    $scope.users = [];

    var promise = Chats.init();
    promise.then(function(data) {
        $scope.users = data.result;
    }, function(data) {
        console.log('get data error...');
    });

    $scope.upLoading = function() {
        if ($scope.users.length) {
            var promise = Chats.upLoad($scope.users[0]._id);
            promise.then(function (data) {
                for (var i = 0; i < data.result.length; i++) {
                    $scope.users.unshift(data.result[i]);
                }
            }, function (data) {
                console.log('get data error...');
            });
        }
        $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.downLoading = function() {
        if ($scope.users.length) {
            var promise = Chats.downLoad($scope.users[$scope.users.length-1]._id);
            promise.then(function(data) {
                for (var i = 0; i < data.result.length; i++) {
                    $scope.users.push(data.result[i]);
                }
            }, function(data) {
                console.log('get data error...');
            });
        }
        $scope.$broadcast('scroll.infiniteScrollComplete');
    };
});