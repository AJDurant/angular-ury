'use strict';

angular.module('ury')
    .controller('TeamCtrl', ['$scope', '$routeParams', 'uryAPI',
        function ($scope, $routeParams, uryAPI) {

            var teams = {
                presenting: 16,
                production: 3,
                news: 5,
                speech: 6,
                marketing: 15,
                music: 4,
                engineering: 7,
                computing: 8,
                events: 14
            };

            var team = $routeParams.team;
            var teamID = teams[team];

            uryAPI().get(
                {
                    module: 'Team',
                    ID: teamID,
                    full: true
                },
                function (data) {
                    $scope.team = data.payload;
                }
            );

}]);
