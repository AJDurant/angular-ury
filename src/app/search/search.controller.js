(function() {
  'use strict';

    angular
        .module('ury')
        .controller('SearchCtrl', SearchCtrl);

    /** @ngInject */
    function SearchCtrl ($scope, $q, uryAPI) {

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.keys = {
            show: true,
            podcast: true
        };

        $scope.results = {
            status: '',
            payload: [],
            time: ''
        };

        var metaSearch = function (key, query) {
            return uryAPI('get',
                {
                    module: key,
                    method: 'searchmeta',
                    firstParam: query.replace(' ', '+')
                }
            );
        };

        $scope.search = function (isValid) {
            // Only send if definitely valid
            if (isValid) {

                var searches = [];

                // Run the searches for each enabled key
                angular.forEach($scope.keys, function(enabled, key){
                    if (enabled) {
                        this.push(metaSearch(key, $scope.query));
                    }
                }, searches);

                // async wait for all searches to complete
                $q.all(searches)
                .then(
                    function (data) {
                        var times = [];

                        $scope.results.status = 'OK';
                        // Group payloads and get max time
                        data.forEach(function (search) {
                            $scope.results.payload = $scope.results.payload.concat(search.payload);
                            times.push(search.time);
                        });
                        $scope.results.time = Math.max.apply(null, times);
                    }
                ).then(
                    function () {
                        angular.forEach($scope.results.payload, function(item){

                            item.brand = '';

                            // Get 'brand' from XXXX_id in results eg. show_id, podcast_id
                            Object.keys(item).forEach(function (key) {
                                var re = /(^[A-Za-z]*?)_id$/;
                                if (re.test(key)) {
                                    item.brand = RegExp.$1;
                                }
                            });
                        });
                    }
                );
            }
        };
    }
})();
