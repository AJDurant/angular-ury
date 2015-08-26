(function() {
  'use strict';

    angular
        .module('ury')
        .directive('listItem', listItem);

    /** @ngInject */
    function listItem ($window) {
        return {
            restrict: 'E',
            scope: {
                item: '=item'
            },
            link: function(scope, element) {
                element.css({
                    height: 60 * scope.item.duration + 'px'
                });
                element.addClass('brand-' + scope.item.brand.replace(/\W+/g, '-').toLowerCase());
                $window.ElementQueries.init();
            },
            templateUrl: 'app/components/list-item/list-item.html'
        };
    }
})();
