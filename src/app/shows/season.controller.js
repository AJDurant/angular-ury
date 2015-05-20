'use strict';

angular.module('ury')
    .controller('SeasonCtrl', ['$scope', '$routeParams', '$window', 'uryAPI',
        function ($scope, $routeParams, $window, uryAPI) {

            uryAPI().get(
                {
                    module: 'Season',
                    ID: $routeParams.seasonid,
                    full: true
                },
                function (data) {
                    $scope.season = data.payload;

                    // Season Credits don't work, so get them from the show. FIXME
                    uryAPI().get(
                        {
                            module: 'Show',
                            ID: $scope.season.show_id,
                            method: 'getCreditsNames'
                        },
                        function (data) {
                            $scope.credits = data.payload;
                        }
                    );
                }
            );

            var seasonOrder = function (a, b) {
                if (a.season_num < b.season_num) {
                    return -1;
                }
                if (a.season_num > b.season_num) {
                    return 1;
                }
                return 0;
            };

            uryAPI().get(
                {
                    module: 'Season',
                    ID: $routeParams.seasonid,
                    method: 'getAllTimeslots'
                },
                function (data) {
                    $scope.timeslots = data.payload;
                    $scope.timeslots.sort(seasonOrder);

                    $scope.timeslots.forEach(function (timeslot) {
                        timeslot.start_time = $window.moment(timeslot.start_time, 'DD-MM-YYYY HH:mm');
                    });
                }
            );


}]);
