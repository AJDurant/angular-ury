(function() {
  'use strict';

  angular
    .module('ury')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    // Set up application routes
    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })
        .when('/listen', {
            templateUrl: 'app/listen/listen.html',
            controller: 'ListenCtrl'
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
  }

})();
