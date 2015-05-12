'use strict';

angular.module('ury')
    .directive('scheduleItem', ['$window', function($window) {
        return {
            restrict: 'E',
            scope: {
                item: '=show'
            },
            link: function(scope, element) {
                element.css({
                    height: 120 * scope.item.duration + 'px'
                });
                $window.ElementQueries.init();
            },
            templateUrl: 'components/schedule-item/schedule-item.html'
        };
    }]);
