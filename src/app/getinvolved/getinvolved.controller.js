(function() {
  'use strict';

    angular
        .module('ury')
        .controller('GetInvolvedCtrl', GetInvolvedCtrl);

    /** @ngInject */
    function GetInvolvedCtrl ($scope, uryAPI, vcRecaptchaService, $log) {

        $scope.teamLists = [
            {
                id: 'news',
                name: 'News Team',
                value: 24
            },
            {
                id: 'speech',
                name: 'Speech Team',
                value: 28
            },
            {
                id: 'music',
                name: 'Music Team',
                value: 29
            },
            {
                id: 'production',
                name: 'Production Team',
                value: 26
            },
            {
                id: 'events',
                name: 'Events Team',
                value: 53
            },
            {
                id: 'marketing',
                name: 'Marketing Team',
                value: 25
            },
            {
                id: 'presenting',
                name: 'Presenting Team',
                value: 27
            },
            {
                id: 'engineering',
                name: 'Engineering Team',
                value: 22
            },
            {
                id: 'computing',
                name: 'Computing Team',
                value: 23
            },
        ];

        $scope.teamSelection = [];

        $scope.toggleSelection = function toggleSelection (id) {
            var idx = $scope.teamSelection.indexOf(id);

            if (idx > -1) { // de-select team
                $scope.teamSelection.splice(idx, 1);
            } else { // select team
                $scope.teamSelection.push(id);
            }
        };

        $scope.submit = function submit () {

            uryAPI('save', {
                    module: 'user',
                    method: 'createactivateapi',
                },
                angular.merge(
                    $scope.user,
                    {captcha: vcRecaptchaService.getResponse()}
                )
            ).then(
                function (data) {
                    $log.debug(data);
                    return data;
                },
                function (data) {
                    $log.debug(data);
                }
            ).then(
                function (data) {
                    for (var i = $scope.teamSelection.length - 1; i >= 0; i--) {
                        uryAPI('put', {
                            module: 'list',
                            ID: $scope.teamSelection[i],
                            method: 'optin'
                        },
                        {
                            userid: data.payload.memberid
                        });
                    }
                }
            );
        };
    }
})();
