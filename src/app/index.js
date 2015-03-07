'use strict';

angular.module('ury', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
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
    }])
    .service('onAir', function () {
        var serviceMembers = {
            status: false
        };
        return serviceMembers;
    }) // Global status for feature control across controllers
;
