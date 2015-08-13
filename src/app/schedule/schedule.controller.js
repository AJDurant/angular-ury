'use strict';

angular.module('ury')
    .controller('ScheduleCtrl', ['$scope', '$routeParams', '$window', 'uryAPI', 'uryBrand',
        function ($scope, $routeParams, $window, uryAPI, uryBrand) {

            $scope.year = $routeParams.year || $window.moment().isoWeekYear();
            $scope.week = $routeParams.week || $window.moment().isoWeek();

            var scheduleWeek = $window.moment($scope.year + '-W' + ($scope.week<10 ? '0' : '') + $scope.week);

            $scope.yearprev = $window.moment(scheduleWeek).subtract(1, 'week').isoWeekYear();
            $scope.weekprev = $window.moment(scheduleWeek).subtract(1, 'week').isoWeek();

            $scope.yearnext = $window.moment(scheduleWeek).add(1, 'week').isoWeekYear();
            $scope.weeknext = $window.moment(scheduleWeek).add(1, 'week').isoWeek();

            $scope.hours = [
                '09:00',
                '10:00',
                '11:00',
                '12:00',
                '13:00',
                '14:00',
                '15:00',
                '16:00',
                '17:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00',
                '23:00',
                '00:00',
                '01:00',
                '02:00',
                '03:00',
                '04:00',
                '05:00',
                '06:00',
                '07:00',
                '08:00'
            ];

            $scope.noSchedule = false;

            var proccessShow = function (show, index, arr) {
                var time = $window.moment(show.time * 1000);
                var duration = $window.moment.duration(show.duration);
                var endTime = $window.moment(time).add(duration);

                //Fill in the gap
                if (this.lastTime.unix() !== time.unix()) {
                    this.shows.push(
                        {
                            title: 'URY Jukebox',
                            time: this.lastTime.unix(),
                            description: 'Non-stop Music',
                            image: '',
                            duration: time.diff(this.lastTime) / 3600000,
                            brand: 'Jukebox'
                        }
                    );
                }

                this.shows.push(
                    {
                        title: show.title,
                        time: show.time,
                        description: show.description,
                        image: show.photo,
                        micrositelink: {url: '/schedule/shows/timeslots/' + show.id},
                        duration: duration.asHours(),
                        brand: uryBrand.getBrand(show.title, time)
                    }
                );
                this.lastTime = endTime;
            };

            uryAPI('getCache',
                {
                    module: 'timeslot',
                    method: 'weekschedule',
                    firstParam: $scope.week,
                    year: $scope.year
                }
            ).then(function (data) {
                var schedule = [];

                if (Object.getOwnPropertyNames(data.payload).length > 0) {
                    for (var j = 1; j <= 7; j++) {
                        schedule[j] = {
                            name: $window.moment().isoWeekday(j).format('dddd'),
                            lastTime: $window.moment(scheduleWeek).isoWeekday(j).startOf('day').add(9, 'h'),
                            shows: []
                        };

                        data.payload[j].forEach(proccessShow, schedule[j]);
                    }
                }

                $scope.schedule = schedule.slice(1);

            }).then(function () {
                if ($scope.schedule.length > 0) {
                    $scope.select = {
                        name: ''
                    };
                } else {
                    $scope.noSchedule = true;
                }
            });
    }]);
