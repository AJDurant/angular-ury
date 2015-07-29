'use strict';

angular.module('ury')
    .controller('TeamCtrl', ['$scope', '$routeParams', 'uryAPI',
        function ($scope, $routeParams, uryAPI) {

            uryAPI().get(
                {
                    module: 'team',
                    method: 'byalias',
                    firstParam: $routeParams.team,
                    mixins: 'officers'
                },
                function (data) {
                    $scope.team = data.payload;
                }
            );

}]);
