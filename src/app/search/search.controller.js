'use strict';

angular.module('ury')
    .controller('SearchCtrl', ['$scope', '$q', 'uryAPI',
        function ($scope, $q, uryAPI) {

            var showSearch = function (query) {
                return uryAPI().get(
                    {
                        module: 'show',
                        method: 'searchmeta',
                        firstParam: query
                    }
                ).$promise;
            };

            var podcastSearch = function (query) {
                return uryAPI().get(
                    {
                        module: 'podcast',
                        method: 'searchmeta',
                        firstParam: query
                    }
                ).$promise;
            };

            $scope.search = function () {
                $scope.results = {
                    status: '',
                    payload: [],
                    time: ''
                };
                var shows = showSearch($scope.keywords);
                var podcasts = podcastSearch($scope.keywords);

                $q.all([shows, podcasts])
                .then(
                    function (data) {
                        $scope.results.status = 'OK';
                        $scope.results.payload = $scope.results.payload.concat(data[0].payload, data[1].payload);
                        $scope.results.time = Math.max(data[0].time, data[1].time);
                    }
                );

            };

}]);
