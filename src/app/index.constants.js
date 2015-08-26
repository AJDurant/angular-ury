(function() {
  'use strict';

  angular
    .module('tempAngular')
    // https://github.com/angular-ui/bootstrap/issues/1350#issuecomment-34595075
    .directive('disableAnimation', function($animate){
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs){
                $attrs.$observe('disableAnimation', function(value){
                    $animate.enabled(!value, $element);
                });
            }
        };
    });
})();
