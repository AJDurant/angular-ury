(function() {
  'use strict';

    angular
        .module('ury')
        .controller('HeaderCtrl', HeaderCtrl);

    /** @ngInject */
    function HeaderCtrl ($scope, $interval, uryAPI, uryStatus) {

        $scope.uryStatus = uryStatus;

        var update = function () {
            uryAPI('get', {
                    module: 'timeslot',
                    method: 'currentandnext'
                }
            ).then(function(data) {
                $scope.show = data.payload;
                // Update global status
                $scope.uryStatus.onAir = (typeof $scope.show.current.url !== 'undefined');
                $scope.uryStatus.timeslot = (typeof $scope.show.current.id !== 'undefined') ? $scope.show.current.id : null;
            });
        };

        // update the status immediately, then every 3 mins
        update();
        $interval(update, 180000);

    }
})();
