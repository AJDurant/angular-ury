'use strict';

angular.module('ury')
    .factory('uryAPI', ['$resource', function($resource) {

        var apiURL = 'https://ury.org.uk/api';
        var apiKey = '00687b83-73b2-43ee-8083-fcbd7811def6';

        return function(/*, options*/){
            var options = arguments[0] || {};
            options.api_key = apiKey;

            return $resource(
                apiURL + '/:module/:ID/:method',
                options
            );

        };
    }]);
