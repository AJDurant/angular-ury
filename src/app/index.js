'use strict';

angular.module('ury', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap', 'angularMoment'])
    .config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', function ($routeProvider, $locationProvider, $sceDelegateProvider) {

        // Set up application routes
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
            .when('/schedule/shows/:showid', {
                templateUrl: 'app/shows/show.html',
                controller: 'ShowCtrl'
            })
            .when('/schedule/shows/seasons/:seasonid', {
                templateUrl: 'app/shows/season.html',
                controller: 'SeasonCtrl'
            })
            .when('/schedule/shows/timeslots/:timeslotid', {
                templateUrl: 'app/shows/timeslot.html',
                controller: 'TimeslotCtrl'
            })
            .when('/uryplayer/podcasts', {
                templateUrl: 'app/uryplayer/uryplayer.html',
                controller: 'URYPlayerCtrl'
            })
            .when('/uryplayer/podcasts/:podcastid', {
                templateUrl: 'app/uryplayer/podcast.html',
                controller: 'PodcastCtrl'
            })
            .when('/uryplayer/:mixcloudid', {
                templateUrl: 'app/uryplayer/mixcloud.html',
                controller: 'MixcloudCtrl'
            })
            .when('/team/:team', {
                templateUrl: 'app/team/team.html',
                controller: 'TeamCtrl'
            })
            .when('/getinvolved', {
                templateUrl: 'app/getinvolved/getinvolved.html',
                controller: 'GetInvolvedCtrl'
            })
            .when('/about', {
                templateUrl: 'app/about/about.html',
                controller: 'AboutCtrl'
            })
            .when('/search', {
                templateUrl: 'app/search/search.html',
                controller: 'SearchCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        // turn on AJAX loading with URLs
        $locationProvider.html5Mode(true).hashPrefix('!');

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://ury.org.uk/**',
            'http://api.mixcloud.com/URY1350/**',
            'https://www.mixcloud.com/widget/iframe/**'
        ]);
    }]) // https://github.com/angular-ui/bootstrap/issues/1350#issuecomment-34595075
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
