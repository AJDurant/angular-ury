'use strict';

angular.module('ury')
    .controller('GetInvolvedCtrl', ['$scope', 'uryAPI', 'vcRecaptchaService',
        function ($scope, uryAPI, vcRecaptchaService) {

            $scope.submit = function() {
                console.log($scope.user);

                uryAPI('save', {
                        module: 'user',
                        method: 'createactivateapi',
                    },
                    angular.merge(
                        $scope.user,
                        {captcha: vcRecaptchaService.getResponse()}
                    )
                ).then(
                    function (data) {
                        console.log(data);
                    },
                    function (data) {
                        console.log(data);
                    }
                );
            };
    }]);
