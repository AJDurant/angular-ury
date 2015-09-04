(function() {
  'use strict';

    angular
        .module('ury')
        .controller('HeaderCtrl', HeaderCtrl);

    /** @ngInject */
    function HeaderCtrl ($scope, uryAPI, uryStatus) {

        $scope.uryStatus = uryStatus;

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
    }
})();
