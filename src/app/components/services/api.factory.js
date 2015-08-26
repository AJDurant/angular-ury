(function() {
  'use strict';

    angular
        .module('ury')
        .factory('uryAPI', uryAPI);

    /** @ngInject */
    function uryAPI ($resource, uryStatus) {

        /*
            The API factory sets up a $resource with the basic details (url, key) and the options passed into it.
            It then calls the passed in function (func) which is called and the $promise of this call is returned.
         */

        var apiURL = 'https://ury.org.uk/api-aj/v2';
        var apiKey = '00687b83-73b2-43ee-8083-fcbd7811def6';

        return function(func /*, options, postData*/){
            // get all extra paramerters passed in - these are used for the data object sent with the request
            var options = arguments[1] || {};
            var postData = arguments[2] || {};

            options.api_key = apiKey;

            var apiCall = $resource(
                apiURL + '/:module/:ID/:method/:firstParam', // specified params are in the URL
                options, // all other options are passed as data to the API
                {
                    getCache: {
                        method: 'GET',
                        cache: true
                    }
                }
            );

            // toggle this call as loading here
            uryStatus.loadCount += 1;

            var apiPromise = apiCall[func](postData).$promise;

            apiPromise.finally(function () {
                // toggle this call as loaded
                uryStatus.loadCount -= 1;
            });

            return apiPromise;

        };
    }
})();
