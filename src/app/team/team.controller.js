'use strict';

angular.module('ury')
    .controller('TeamCtrl', ['$scope', '$routeParams', 'uryAPI',
        function ($scope, $routeParams, uryAPI) {

            var team = $routeParams.team;

            uryAPI().get(
                {
                    module: 'team',
                    method: 'byalias',
                    firstParam: team,
                    mixins: 'officers'
                },
                function (data) {
                    $scope.team = data.payload;
                }
            );

}]);
