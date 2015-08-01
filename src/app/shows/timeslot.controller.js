'use strict';

angular.module('ury')
    .controller('TimeslotCtrl', ['$scope', '$routeParams', '$window', 'uryAPI',
        function ($scope, $routeParams, $window, uryAPI) {

            uryAPI('get',
                {
                    module: 'timeslot',
                    ID: $routeParams.timeslotid,
                    full: true
                }
            ).then(function (data) {
                $scope.timeslot = data.payload;

                $scope.timeslot.start_time = $window.moment($scope.timeslot.start_time, 'DD-MM-YYYY HH:mm');

                if ($scope.timeslot.mixcloud_status.startsWith('/URY1350/')) {
                    $scope.embed = 'https://www.mixcloud.com/widget/iframe/'+
                    '?autoplay='+
                    '&embed_type=widget_standard'+
                    '&feed=https://www.mixcloud.com'+$scope.timeslot.mixcloud_status+
                    '&hide_artwork='+
                    '&hide_cover='+
                    '&hide_tracklist='+
                    '&light='+
                    '&mini='+
                    '&replace=0'+
                    '&stylecolor=';
                } else {
                    $scope.embed = false;
                }
            });

            uryAPI('get',
                {
                    module: 'timeslot',
                    ID: $routeParams.timeslotid,
                    method: 'creditsnames'
                }
            ).then(function (data) {
                $scope.credits = data.payload;
            });

            uryAPI('get',
                {
                    module: 'tracklistItem',
                    method: 'tracklistfortimeslot',
                    firstParam: $routeParams.timeslotid,
                    offset: 0
                }
            ).then(function (data) {
                $scope.tracklist = data.payload;
                $scope.tracklist.forEach(function (track) {
                    track.starttime = $window.moment(track.starttime, 'DD-MM-YYYY HH:mm:ss');
                });
            });
}]);
