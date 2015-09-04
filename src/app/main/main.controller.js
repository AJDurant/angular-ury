(function() {
  'use strict';

    angular
        .module('ury')
        .controller('MainCtrl', MainCtrl);

    /** @ngInject */
    function MainCtrl ($scope, $timeout, uryStatus, uryAPI) {

        // Update with global status
        $scope.uryStatus = uryStatus;
        $scope.bannerInterval = 5000;
        $scope.slides = [];
        $scope.comments = '';

        $scope.sendMessage = function (isValid) {
            // Only send if definitely valid
            if (isValid) {
                uryAPI('put',
                    {
                        module: 'timeslot',
                        ID: $scope.uryStatus.timeslot,
                        method: 'sendmessage',
                    },
                    {
                        message: $scope.comments
                    }
                ).then(
                    function () {
                        $scope.comments = "Message has been sent";
                    },
                    function () {
                        $scope.comments = "Message cannot be sent at this time. Is Jukebox on Air?";
                    }
                ).then(
                    function () {
                        $timeout(
                            function () {
                                $scope.comments = '';
                            },
                            3000
                        );
                    }
                );
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
