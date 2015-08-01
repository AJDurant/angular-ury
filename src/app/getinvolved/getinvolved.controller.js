'use strict';

angular.module('ury')
    .controller('GetInvolvedCtrl', ['$scope', 'uryAPI',
        function ($scope, uryAPI) {

            $scope.submit = function() {
                console.log($scope.user);

                uryAPI('save', $scope.user,
                    {
                        module: 'user',
                        method: 'createoractivate'
                    }
                ).then(
                    function (data) {
                        console.log(data);
                    },
                    function (data) {
                        console.log(data);
                    }
                );
            };
    }]);
