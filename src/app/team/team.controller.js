(function() {
  'use strict';

    angular
        .module('ury')
        .controller('TeamCtrl', TeamCtrl);

    /** @ngInject */
    function TeamCtrl ($scope, $routeParams, uryAPI, uryStatus) {

        $scope.uryStatus = uryStatus;

        uryAPI('get',
            {
                module: 'team',
                method: 'byalias',
                firstParam: $routeParams.team,
                mixins: 'officers'
            }
        ).then(function (data) {
            $scope.team = data.payload;
        });
    }
})();
