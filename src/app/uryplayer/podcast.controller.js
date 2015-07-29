'use strict';

angular.module('ury')
    .controller('PodcastCtrl', ['$scope', '$routeParams', '$sce', 'uryAPI',
        function ($scope, $routeParams, $sce, uryAPI) {

            uryAPI().get(
                {
                    module: 'podcast',
                    ID: $routeParams.podcastid
                },
                function (data) {
                    $scope.podcast = data.payload;
                }
            );

            uryAPI().get(
                {
                    module: 'podcast',
                    ID: $routeParams.podcastid,
                    method: 'uri'
                },
                function (data) {
                    // TODO: remove in prod
                    $scope.audio = 'http://ury.org.uk' + data.payload;
                }
            );

            uryAPI().get(
                {
                    module: 'podcast',
                    ID: $routeParams.podcastid,
                    method: 'creditsnames'
                },
                function (data) {
                    $scope.credits = data.payload;
                }
            );

}]);
