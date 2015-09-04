(function() {
  'use strict';

    angular
        .module('ury')
        .controller('MainCtrl', MainCtrl);

    /** @ngInject */
    function MainCtrl ($scope, uryStatus, uryAPI) {

        // Update with global status
        $scope.uryStatus = uryStatus;
        $scope.bannerInterval = 5000;
        $scope.slides = [];
        $scope.message = '';

        $scope.sendMessage = function () {
            // Only send if definitely valid
            if ($scope.sendMessageForm.$valid) {

            }
        };

        uryAPI('get',
            {
                module: 'banner',
                method: 'livebanners'
            }
        ).then(function (data) {
            $scope.slides = data.payload;
        });

        uryAPI('get',
            {
                module: 'team',
                method: 'currentteams'
            }
        ).then(function (data) {
            $scope.teams = data.payload;
        });

    }
})();
