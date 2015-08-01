'use strict';

angular.module('ury')
    .controller('ScheduleCtrl', ['$scope', '$routeParams', '$window', 'uryAPI', 'uryBrand',
        function ($scope, $routeParams, $window, uryAPI, uryBrand) {

            $scope.year = $routeParams.year || $window.moment().isoWeekYear();
            $scope.week = $routeParams.week || $window.moment().isoWeek();

            $scope.yearprev = $window.moment($scope.year + '-W' + ($scope.week<10 ? '0' : '') + $scope.week).subtract(1, 'week').isoWeekYear();
            $scope.weekprev = $window.moment($scope.year + '-W' + ($scope.week<10 ? '0' : '') + $scope.week).subtract(1, 'week').isoWeek();

            $scope.yearnext = $window.moment($scope.year + '-W' + ($scope.week<10 ? '0' : '') + $scope.week).add(1, 'week').isoWeekYear();
            $scope.weeknext = $window.moment($scope.year + '-W' + ($scope.week<10 ? '0' : '') + $scope.week).add(1, 'week').isoWeek();

            uryAPI('get',
                {
                    module: 'timeslot',
                    method: 'weekschedule',
                    firstParam: $scope.week,
                    year: $scope.year
                }
            ).then(function (data) {
                var schedule = [];
                var currentDay;
                var dayIndex = -1;
                var lastTime;

                for (var i = 0; i < data.payload.length; i++) {
                    var show = data.payload[i];
                    var time = $window.moment(show.start_time, 'DD-MM-YYYY HH:mm');
                    var duration = $window.moment.duration(show.duration);
                    var endTime = $window.moment(time).add(duration);
                    var showDay;

                    // Start URY days at 9 am
                    if (time.hour() < 9) {
                        showDay = $window.moment(time).startOf('day').subtract(1, 'day').add(9, 'h');
                    } else {
                        showDay = $window.moment(time).startOf('day').add(9, 'h');
                    }

                    if (!currentDay || !currentDay.isSame(showDay)) {
                        if (!currentDay && showDay.isoWeekday() !== 1) {
                            // Start week on Monday
                            continue;
                        }
                        dayIndex += 1;
                        if (dayIndex >= 7) {
                            // Stop after 7 days
                            break;
                        }
                        currentDay = showDay;
                        lastTime = currentDay;
                        schedule.push({name: currentDay.format('dddd'), shows: []});
                    }
                    //Fill in the gap
                    if (lastTime.unix() !== time.unix()) {
                        schedule[dayIndex].shows.push(
                            {
                                title: 'URY Jukebox',
                                time: lastTime,
                                description: 'Non-stop Music',
                                image: '',
                                duration: time.diff(lastTime) / (60*60*1000),
                                brand: 'Jukebox'
                            }
                        );
                    }

                    schedule[dayIndex].shows.push(
                        {
                            title: show.title,
                            time: time,
                            description: show.description,
                            image: show.photo,
                            url: '/schedule/shows/timeslots/' + show.id,
                            duration: duration.asHours(),
                            brand: uryBrand.getBrand(show.title, time)
                        }
                    );
                    lastTime = endTime;
                }

                $scope.schedule = schedule.slice(0,7);
            });
    }]);
