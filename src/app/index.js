'use strict';

angular.module('ury', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap', 'angularMoment'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .when('/schedule', {
                templateUrl: 'app/schedule/schedule.html',
                controller: 'ScheduleCtrl'
            })
            .when('/schedule/:year/w:week', {
                templateUrl: 'app/schedule/schedule.html',
                controller: 'ScheduleCtrl'
            })
            .when('/team/:team', {
                templateUrl: 'app/team/team.html',
                controller: 'TeamCtrl'
            })
            .when('/getinvolved', {
                templateUrl: 'app/getinvolved/getinvolved.html',
                controller: 'GetInvolvedCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true).hashPrefix('!');
    }]) // Global status for feature control across controllers
    .service('onAir', function () {
        var serviceMembers = {
            status: false
        };
        return serviceMembers;
    }) // https://github.com/angular-ui/bootstrap/issues/1350#issuecomment-34595075
    .directive('disableAnimation', function($animate){
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs){
                $attrs.$observe('disableAnimation', function(value){
                    $animate.enabled(!value, $element);
                });
            }
        };
    })
;
