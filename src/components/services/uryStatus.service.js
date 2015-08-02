'use strict';

angular.module('ury')
     // Global status for feature control across controllers
    .service('uryStatus', function () {
        var serviceMembers = {
            onAir: false,
            loadCount: 0
        };
        return serviceMembers;
    });
