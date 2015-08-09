/**
 * Created by Administrator on 2015/8/9.
 */
angular.module('my.util.conf', [])
.factory('Conf', function() {
    return {
        chatsInit: 'http://localhost:3000/users/api?callback=JSON_CALLBACK',
        chatsUpload: 'http://localhost:3000/users/api/down/id/',
        chatsDownload: 'http://localhost:3000/users/api/up/id/',
        chatDetail: 'http://localhost:3000/users/api/id/'
    };
});