'use strict';

angular.module('ury')
    .controller('TeamCtrl', ['$scope', 'uryAPI', '$location',
        function ($scope, uryAPI, $location) {

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

            var team = $location.path().split('/')[2];
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
