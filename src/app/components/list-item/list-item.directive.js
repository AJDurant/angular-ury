(function() {
  'use strict';

    angular
        .module('ury')
        .directive('listItem', listItem);

    /** @ngInject */
    function listItem ($window) {
        return {
            restrict: 'A',
            scope: {
                item: '=item'
            },
            link: function(scope, element) {
                if ((typeof scope.item.duration !== 'undefined')) {
                    element.css({
                        height: 60 * scope.item.duration + 'px'
                    });
                }
                if ((typeof scope.item.brand !== 'undefined')) {
                    element.addClass('brand-' + scope.item.brand.replace(/\W+/g, '-').toLowerCase());
                }
                $window.ElementQueries.init();
            },
            templateUrl: 'app/components/list-item/list-item.html'
        };
    }
})();
