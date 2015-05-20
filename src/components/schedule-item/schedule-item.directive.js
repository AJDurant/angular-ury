'use strict';

angular.module('ury')
    .directive('scheduleItem', ['$window', 'amDateFormatFilter', function($window, amDateFormat) {
        return {
            restrict: 'E',
            scope: {
                item: '=show'
            },
            link: function(scope, element) {
                element.css({
                    height: 60 * scope.item.duration + 'px'
                });
                element.addClass(scope.item.brand.toLowerCase());
                $window.ElementQueries.init();
            },
            templateUrl: 'components/schedule-item/schedule-item.html'
        };
    }]);
