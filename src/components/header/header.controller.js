'use strict';

angular.module('ury')
    .controller('HeaderCtrl', ['$scope', 'uryAPI', 'onAir',
        function ($scope, uryAPI, onAir) {

            $scope.onAir = onAir;

            uryAPI().get(
                {
                    module: 'timeslot',
                    method: 'currentandnext'
                },
                function(data) {
                    $scope.show = data.payload;
                    // Update global status
                    $scope.onAir.status = (typeof $scope.show.current.url !== 'undefined');
                }
            );

    }]);
