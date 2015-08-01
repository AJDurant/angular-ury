'use strict';

angular.module('ury')
    .controller('PodcastCtrl', ['$scope', '$routeParams', 'uryAPI',
        function ($scope, $routeParams, uryAPI) {

            uryAPI('get',
                {
                    module: 'podcast',
                    ID: $routeParams.podcastid
                }
            ).then(function (data) {
                $scope.podcast = data.payload;
            });

            uryAPI('get',
                {
                    module: 'podcast',
                    ID: $routeParams.podcastid,
                    method: 'uri'
                }
            ).then(function (data) {
                // TODO: remove in prod
                $scope.audio = 'http://ury.org.uk' + data.payload;
            });

            uryAPI('get',
                {
                    module: 'podcast',
                    ID: $routeParams.podcastid,
                    method: 'creditsnames'
                }
            ).then(function (data) {
                $scope.credits = data.payload;
            });
}]);
