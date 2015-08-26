(function() {
  'use strict';

    angular
        .module('ury')
        .controller('URYPlayerCtrl', URYPlayerCtrl);

    /** @ngInject */
    function URYPlayerCtrl ($scope, uryAPI) {

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        uryAPI('get',
            {
                module: 'podcast',
                method: 'allpodcasts'
            }
        ).then(function (data) {
            $scope.podcasts = data.payload;
        });
    }
})();
