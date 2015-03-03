'use strict';

angular.module('ury')
    .controller('HeaderCtrl', ['$scope', 'uryAPI', 'Status',
        function ($scope, uryAPI, Status) {

        uryAPI().get(
            {
                module: 'Timeslot',
                method: 'getCurrentAndNext'
            },
            function(data) {
                $scope.show = data.payload;
            }
        );


        // var res = {
        //    "status":"OK",
        //    "payload":{
        //       "current":{
        //          "title":"URY Jukebox",
        //          "desc":"Non-stop Music",
        //          "photo":"\/assets\/images\/angular.png",
        //          "end_time":1425394800
        //       },
        //       "next":{
        //          "title":"Topic",
        //          "desc":"<p><em>Topic<\/em> is an exotic fusion of Big Ideas, most directly from their owners, and modern electronic music. We'll be chatting about whether we can replace liberty with security, whether we're alone in the universe, and what, if anything, is the nature of the soul, interspersed with some brilliant new artists representing a complete spectrum of modern music, from EDM to singer-songwriter pop. It's a great mix of light hearts and big brains, we hope you can join us!<\/p>",
        //          "photo":"\/static\/img\/default_show_player.png",
        //          "start_time":1425394800,
        //          "end_time":1425398400,
        //          "presenters":"Oliver Wilson",
        //          "url":"http:\/\/ury.org.uk\/schedule\/shows\/timeslots\/135763"
        //       }
        //    },
        //    "time":"0.050105"
        // };

        // $scope.show = res.payload;

        // Update global status
        //Status.onAir = (typeof $scope.show.current.url !== 'undefined');

    }]);
