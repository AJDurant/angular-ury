(function() {
  'use strict';

    angular
        .module('ury')
        .controller('FooterCtrl', FooterCtrl);

    /** @ngInject */
    function FooterCtrl ($scope, $window) {

        $scope.year = $window.moment().year();

    }
})();
