'use strict';

angular.module('ury')
    .factory('uryAPI', ['$resource', function($resource) {

        var apiURL = 'https://ury.org.uk/api-aj/v2';
        var apiKey = '00687b83-73b2-43ee-8083-fcbd7811def6';

        return function(/*, options*/){
            // get all extra paramerters passed in - these are used for the data object sent with the request
            var options = arguments[0] || {};
            options.api_key = apiKey;

            return $resource(
                apiURL + '/:module/:ID/:method/:firstParam', // specified params are in the URL
                options // all other options are passed as data to the API
            );

        };
    }]);
