angular.module('myApp').service('mirrorService', mirrorService);

mirrorService.$inject = ['$http'];

function mirrorService($http) {
    var self = this,
        uploadUrl = 'http://127.0.0.1:5000/uploadImage';

    self.uploadImage = uploadImage;

    return self;

    function uploadImage(data) {
        return $http.post(uploadUrl, data, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
    }
}
