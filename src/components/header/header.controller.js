'use strict';

angular.module('ury')
    .controller('HeaderCtrl', ['$scope', 'uryAPI', 'uryStatus',
        function ($scope, uryAPI, uryStatus) {

            $scope.uryStatus = uryStatus;

            uryAPI('get', {
                    module: 'timeslot',
                    method: 'currentandnext'
                }
            ).then(function(data) {
                $scope.show = data.payload;
                // Update global status
                $scope.uryStatus.onAir = (typeof $scope.show.current.url !== 'undefined');
            });
    }]);
