'use strict';

angular.module('ury')
    .controller('TimeslotCtrl', ['$scope', '$routeParams', '$window', 'uryAPI',
        function ($scope, $routeParams, $window, uryAPI) {

            uryAPI().get(
                {
                    module: 'Timeslot',
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
                    module: 'Timeslot',
                    ID: $routeParams.timeslotid,
                    method: 'getCreditsNames'
                },
                function (data) {
                    $scope.credits = data.payload;
                }
            );

            uryAPI().get(
                {
                    module: 'TracklistItem',
                    method: 'getTracklistForTimeslot',
                    timeslotid: $routeParams.timeslotid,
                    offset: 0
                },
                function (data) {
                    $scope.tracklist = data.payload;
                    $scope.tracklist.forEach(function (element) {
                        element.starttime = $window.moment(element.starttime, 'DD-MM-YYYY HH:mm:ss');
                    });
                }
            );

}]);
