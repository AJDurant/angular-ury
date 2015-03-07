'use strict';

angular.module('ury')
    .directive('scheduleItem', function() {
        return {
            restrict: 'E',
            scope: {
                item: '=show'
            },
            link: function(scope, element) {
                element.css({
                    height: 60 * scope.item.duration + 'px'
                });
            },
            templateUrl: 'components/schedule-item/schedule-item.html'
        };
    });
