(function() {
  'use strict';

    angular
        .module('ury')
        .controller('MainCtrl', MainCtrl);

    /** @ngInject */
    function MainCtrl ($scope, uryStatus, uryAPI) {

        // Update with global status
        $scope.uryStatus = uryStatus;

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

        uryAPI('get',
            {
                module: 'team',
                method: 'currentteams'
            }
        ).then(function (data) {
            $scope.teams = data.payload;
        });

    }
})();
