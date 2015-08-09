/**
 * Created by Administrator on 2015/8/9.
 */
angular.module('my.controllers.account', [])
.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});