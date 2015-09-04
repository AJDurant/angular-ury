(function() {
  'use strict';

    angular
        .module('ury')
        .service('uryStatus', uryStatus);

    // Global status for feature control across controllers
    function uryStatus () {
        var serviceMembers = {
            onAir: false,
            timeslot: null,
            loadCount: 0
        };
        return serviceMembers;
    }
})();
