'use strict';

angular.module('ury')
    .controller('MainCtrl', ['$scope', 'onAir', 'uryAPI',
        function ($scope, onAir, uryAPI) {

        // Update with global status
        $scope.onAir = onAir;

        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
            var newWidth = 850 + slides.length + 1;
            slides.push({
                image: 'http://placekitten.com/' + newWidth + '/300',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }

        uryAPI().get(
                {
                    module: 'Team',
                    method: 'getCurrentTeams'
                },
                function (data) {
                    $scope.teams = data.payload;

                }
            );

    }]);
