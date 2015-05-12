'use strict';

angular.module('ury')
    .controller('ScheduleCtrl', ['$scope', '$routeParams', '$window', 'uryAPI',
        function ($scope, $routeParams, $window, uryAPI) {

            $scope.year = $routeParams.year || $window.moment().isoWeekYear();
            $scope.week = $routeParams.week || $window.moment().isoWeek();

            uryAPI().get(
                {
                    module: 'Timeslot',
                    method: 'getWeekSchedule',
                    weekno: $scope.week,
                    year: $scope.year
                },
                function (data) {
                    $scope.weekSched = data.payload;
                    var schedule = [];
                    var currentDay;

                    for (var i = 0; i < data.payload.length; i++) {
                        var show = data.payload[i];
                        var time = $window.moment(show.start_time, 'DD-MM-YYYY HH:mm');
                        var duration = $window.moment.duration(show.duration);
                        var endTime = $window.moment(time).add(duration);

                        var showDay = moment(time).startOf('day').add(6, 'h');

                        if (!currentDay || !currentDay.isSame(showDay)) {
                            if (!currentDay && showDay.isoWeekday() !== 1) {
                                // Start week on Monday
                                continue;
                            }
                            currentDay = showDay;
                            schedule.push({name: currentDay.format('dddd'), shows: []});
                        }

                        schedule[showDay.isoWeekday()-1].shows.push(
                            {
                                title: show.title,
                                time: time,
                                description: show.description,
                                image: show.photo,
                                duration: duration.hours(),
                                brand: ''
                            }
                        );

                    }

                    $scope.schedule = schedule.slice(0,7);
                }
            );
    }]);
