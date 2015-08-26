(function() {
  'use strict';

    angular
        .module('ury')
        .controller('ShowCtrl', ShowCtrl);

    /** @ngInject */
    function ShowCtrl ($scope, $routeParams, $window, uryAPI) {

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
                module: 'show',
                ID: $routeParams.showid,
                full: true
            }
        ).then(function (data) {
            $scope.show = data.payload;
        });

        uryAPI('get',
            {
                module: 'show',
                ID: $routeParams.showid,
                method: 'allseasons'
            }
        ).then(function (data) {
            $scope.seasons = data.payload;
            $scope.seasons.sort(seasonOrder);

            $scope.seasons.forEach(function (season) {
                season.first_time = $window.moment(season.first_time, 'DD-MM-YYYY HH:mm');
            });
        });

        uryAPI('get',
            {
                module: 'show',
                ID: $routeParams.showid,
                method: 'creditsnames'
            }
        ).then(function (data) {
            $scope.credits = data.payload;
        });
    }
})();
