(function() {
  'use strict';

    angular
        .module('ury')
        .controller('SeasonCtrl', SeasonCtrl);

    /** @ngInject */
    function SeasonCtrl ($scope, $routeParams, $window, uryAPI) {

        uryAPI('get',
            {
                module: 'season',
                ID: $routeParams.seasonid,
                full: true
            }
        ).then(function (data) {
            $scope.season = data.payload;
        }).then(function () {
            // Season Credits don't work, so get them from the show. FIXME
            uryAPI('get',
                {
                    module: 'show',
                    ID: $scope.season.show_id,
                    method: 'creditsnames'
                }
            ).then(function (data) {
                $scope.credits = data.payload;
            });
        });

        var seasonOrder = function (a, b) {
            if (a.season_num < b.season_num) {
                return -1;
            }
            if (a.season_num > b.season_num) {
                return 1;
            }
            return 0;
        };

        uryAPI('get',
            {
                module: 'season',
                ID: $routeParams.seasonid,
                method: 'alltimeslots'
            }
        ).then(function (data) {
            $scope.timeslots = data.payload;
            $scope.timeslots.sort(seasonOrder);

            $scope.timeslots.forEach(function (timeslot) {
                timeslot.start_time = $window.moment(timeslot.start_time, 'DD-MM-YYYY HH:mm');
            });
        });
    }
})();
