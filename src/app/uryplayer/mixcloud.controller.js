'use strict';

angular.module('ury')
    .controller('MixcloudCtrl', ['$scope', '$routeParams', '$sce', '$http',
        function ($scope, $routeParams, $sce, $http) {

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
                }).
                error(function(data, status, headers, config) {
                    // log error
                });

}]);
