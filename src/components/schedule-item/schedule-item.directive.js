'use strict';

angular.module('ury')
    .directive('scheduleItem', function() {
        return {
            restrict: 'E',
            scope: {
                item: '=show'
            },
            templateUrl: 'components/schedule-item/schedule-item.html'
        };
    });
