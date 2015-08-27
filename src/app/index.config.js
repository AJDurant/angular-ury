(function() {
  'use strict';

  angular
    .module('ury')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider, $sceDelegateProvider) {

    // Enable log
    $logProvider.debugEnabled(true);

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
  }

})();
