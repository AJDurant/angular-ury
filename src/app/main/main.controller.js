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
