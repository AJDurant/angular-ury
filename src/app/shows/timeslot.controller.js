'use strict';

angular.module('ury')
    .controller('TimeslotCtrl', ['$scope', '$routeParams', '$window', 'uryAPI',
        function ($scope, $routeParams, $window, uryAPI) {

            uryAPI().get(
                {
                    module: 'timeslot',
                    ID: $routeParams.timeslotid,
                    full: true
                },
                function (data) {
                    $scope.timeslot = data.payload;

                    $scope.timeslot.start_time = $window.moment($scope.timeslot.start_time, 'DD-MM-YYYY HH:mm');
                }
            );

            uryAPI().get(
                {
                    module: 'timeslot',
                    ID: $routeParams.timeslotid,
                    method: 'creditsnames'
                },
                function (data) {
                    $scope.credits = data.payload;
                }
            );

            uryAPI().get(
                {
                    module: 'tracklistItem',
                    method: 'tracklistfortimeslot',
                    firstParam: $routeParams.timeslotid,
                    offset: 0
                },
                function (data) {
                    $scope.tracklist = data.payload;
                    $scope.tracklist.forEach(function (track) {
                        track.starttime = $window.moment(track.starttime, 'DD-MM-YYYY HH:mm:ss');
                    });
                }
            );

}]);
