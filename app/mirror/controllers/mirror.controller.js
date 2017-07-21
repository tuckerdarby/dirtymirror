

angular.module('myApp').controller('MirrorController', MirrorController);

MirrorController.$inject = ['$scope', '$element', '$timeout', 'mirrorService'];

function MirrorController($scope, $element, $timeout, mirrorService) {
    var vm = this,
        uploadBtn = $element[0].querySelector('#upload-image');

    $scope.add = add;
    $scope.waiting = false;
    $scope.uploadedImage = {
        uploaded: false,
        dataUrl: ""
    };
    $scope.responseImage = {
        responded: false,
        dataUrl: ""
    };

    uploadBtn.click(function(e) {
        console.log('clicked');
    });

    return vm;

    function add() {
        var file = document.getElementById('upload-image').files[0],
            fd = new FormData();

        fd.append('image', file);

        mirrorService.uploadImage(fd)
            .then(loadResponse)
            .catch(uploadError)
            .finally(stopLoading);
    }

    function loadResponse(response) {
        $scope.responseImage = {
            dataUrl: response.data,
            responded: true
        };
    }

    function uploadError(error) {

    }

    function stopLoading() {
        $scope.waiting = false;
    }
}