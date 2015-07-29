'use strict';

angular.module('ury')
    .controller('GetInvolvedCtrl', ['$scope', 'uryAPI',
        function ($scope, uryAPI) {

            $scope.submit = function() {
                console.log($scope.user);

                uryAPI($scope.user).save(
                    {
                        module: 'user',
                        method: 'createoractivate'
                    },
                    null,
                    function(data) {
                        console.log(data);
                    },
                    function(data) {
                        console.log(data);
                    }
                );
            };
}]);
