(function() {
  'use strict';

    angular
        .module('ury')
        .controller('GetInvolvedCtrl', GetInvolvedCtrl);

    /** @ngInject */
    function GetInvolvedCtrl ($scope, uryAPI, vcRecaptchaService) {

        $scope.submit = function() {

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
    }
})();
