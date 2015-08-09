/**
 * Created by Administrator on 2015/8/9.
 */
angular.module('my.controllers.chat', ['my.services.chat'])
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    var promise = Chats.get($stateParams.userid);
    promise.then(function(data) {
        $scope.user = data.result[0];
    }, function(data) {
        console.log('get data error...');
    });
});