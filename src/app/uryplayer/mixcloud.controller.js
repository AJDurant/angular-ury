'use strict';

angular.module('ury')
    .controller('MixcloudCtrl', ['$scope', '$routeParams', '$http', 'uryAPI',
        function ($scope, $routeParams, $http, uryAPI) {

            $http.get('http://api.mixcloud.com/URY1350/'+$routeParams.mixcloudid+'/').
                success(function(data, status, headers, config) {
                    $scope.podcast = data;
                    $scope.embed = 'https://www.mixcloud.com/widget/iframe/'+
                    '?autoplay='+
                    '&embed_type=widget_standard'+
                    '&feed='+$scope.podcast.url+
                    '&hide_artwork='+
                    '&hide_cover='+
                    '&hide_tracklist='+
                    '&light='+
                    '&mini='+
                    '&replace=0'+
                    '&stylecolor=';

                    uryAPI('get',
                        {
                            module: 'timeslot',
                            method: 'fromslug',
                            firstParam: $scope.podcast.slug
                        }
                    ).then(function (data) {
                        $scope.timeslot = data.payload;
                    }).then(function () {
                        uryAPI('get',
                            {
                                module: 'timeslot',
                                ID: $scope.timeslot.id,
                                method: 'creditsnames'
                            }
                        ).then(function (data) {
                            $scope.credits = data.payload;
                        });
                    });
                }).
                error(function(data, status, headers, config) {
                    // log error
                });

}]);
