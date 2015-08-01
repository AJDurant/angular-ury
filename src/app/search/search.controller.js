'use strict';

angular.module('ury')
    .controller('SearchCtrl', ['$scope', '$q', 'uryAPI',
        function ($scope, $q, uryAPI) {

            $scope.keys = {
                show: true,
                podcast: true
            };

            var metaSearch = function (key, query) {
                return uryAPI().get(
                    {
                        module: key,
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

                var searches = [];

                angular.forEach($scope.keys, function(enabled, key){
                    if (enabled) {
                        this.push(metaSearch(key, $scope.query));
                    }
                }, searches);

                $q.all(searches)
                .then(
                    function (data) {
                        $scope.results.status = 'OK';
                        $scope.results.payload = $scope.results.payload.concat(data[0].payload, data[1].payload);
                        $scope.results.time = Math.max(data[0].time, data[1].time);
                    }
                ).then(
                    function () {
                        angular.forEach($scope.results.payload, function(item){

                            item.brand = '';

                            Object.keys(item).forEach(function (key) {
                                var re = /(^[A-Za-z]*?)_id$/;
                                if (re.test(key)) {
                                    console.log('match: ' + key);
                                    item.brand = RegExp.$1;
                                }
                            });
                        });
                    }
                );

            };

}]);
