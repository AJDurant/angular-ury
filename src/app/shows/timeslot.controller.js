(function() {
  'use strict';

    angular
        .module('ury')
        .controller('TimeslotCtrl', TimeslotCtrl);

    /** @ngInject */
    function TimeslotCtrl ($scope, $routeParams, $window, uryAPI) {

        uryAPI('get',
            {
                module: 'timeslot',
                ID: $routeParams.timeslotid,
                full: true
            }
        ).then(function (data) {
            $scope.timeslot = data.payload;

            if ($scope.timeslot.mixcloud_status.startsWith('/URY1350/')) {
                $scope.embed = 'https://www.mixcloud.com/widget/iframe/'+
                '?autoplay='+
                '&embed_type=widget_standard'+
                '&feed=https://www.mixcloud.com'+$scope.timeslot.mixcloud_status+
                '&hide_artwork='+
                '&hide_cover=1'+
                '&hide_tracklist=1'+
                '&light='+
                '&mini='+
                '&replace=0'+
                '&html5audio=1' +
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
        });
    }
})();
