'use strict';

angular.module('ury')
    .controller('HeaderCtrl', ['$scope', 'uryAPI', 'uryStatus',
        function ($scope, uryAPI, uryStatus) {

            $scope.uryStatus = uryStatus;
            $scope.pageLoading = false;
            $scope.progress = 0;
            var loadMax = 0;

            uryAPI('get', {
                    module: 'timeslot',
                    method: 'currentandnext'
                }
            ).then(function(data) {
                $scope.show = data.payload;
                // Update global status
                $scope.uryStatus.onAir = (typeof $scope.show.current.url !== 'undefined');
            });

            $scope.$watch('uryStatus.loadCount',
                function (newVal, oldVal) {
                    if (newVal < 1) {
                        $scope.progress = 100;
                        $scope.pageLoading = false;
                        loadMax = 0;
                    } else {
                        if (newVal >= oldVal) {
                            loadMax = newVal;
                        }
                        $scope.progress = Math.min(90, ((loadMax-newVal+1) / loadMax) * 100);
                        $scope.pageLoading = true;
                    }
            });
    }]);
