'use strict';

angular.module('ury', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .when('/schedule', {
                templateUrl: 'app/schedule/schedule.html',
                controller: 'ScheduleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .value('Status', {
        onAir: false,   // Global status for feature control across controllers
    })
;
