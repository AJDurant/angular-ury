'use strict';

angular.module('ury')
    .controller('URYPlayerCtrl', ['$scope', 'uryAPI',
        function ($scope, uryAPI) {

            uryAPI('get',
                {
                    module: 'podcast',
                    method: 'allpodcasts'
                }
            ).then(function (data) {
                $scope.podcasts = data.payload;
            });

}]);
