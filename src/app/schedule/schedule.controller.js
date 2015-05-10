'use strict';

angular.module('ury')
    .controller('ScheduleCtrl', ['$scope', '$routeParams', '$window',
        function ($scope, $routeParams, $window) {

            $scope.year = $routeParams.year || $window.moment().isoWeekYear();
            $scope.week = $routeParams.week || $window.moment().isoWeek();

            $scope.schedule = [
                {
                    'name': 'Monday',
                    'shows': [
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title',
                            'description': 'Description',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'flagship',
                            'duration': 2
                        },
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title2',
                            'description': 'Description2',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title3',
                            'description': 'Description3',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title4',
                            'description': 'Description4',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 2
                        },
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title5',
                            'description': 'Description5',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title6',
                            'description': 'Description6',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title7',
                            'description': 'Description7',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title8',
                            'description': 'Description8',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 3
                        },
                    ]
                },
                {
                    'name': 'Tuesday',
                    'shows': [
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title',
                            'description': 'Description',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'flagship',
                            'duration': 1
                        },
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title2',
                            'description': 'Description2',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': '28/02/2015 23:00',
                            'title': 'Title3',
                            'description': 'Description3',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'other',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title4',
                            'description': 'Description4',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title5',
                            'description': 'Description5',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title6',
                            'description': 'Description6',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title7',
                            'description': 'Description7',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title8',
                            'description': 'Description8',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title9',
                            'description': 'Description9',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title10',
                            'description': 'Description10',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title11',
                            'description': 'Description11',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title12',
                            'description': 'Description12',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        }
                    ]
                },
                {
                    'name': 'Wednesday',
                    'shows': [
                        {
                            'time': 'Time',
                            'title': 'Title',
                            'description': 'Description',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'flagship',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title2',
                            'description': 'Description2',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title3',
                            'description': 'Description3',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'other',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title4',
                            'description': 'Description4',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title5',
                            'description': 'Description5',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title6',
                            'description': 'Description6',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title7',
                            'description': 'Description7',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title8',
                            'description': 'Description8',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title9',
                            'description': 'Description9',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title10',
                            'description': 'Description10',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title11',
                            'description': 'Description11',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title12',
                            'description': 'Description12',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        }
                    ]
                },
                {
                    'name': 'Thursday',
                    'shows': [
                        {
                            'time': 'Time',
                            'title': 'Title',
                            'description': 'Description',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'flagship',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title2',
                            'description': 'Description2',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 2
                        },
                        {
                            'time': 'Time',
                            'title': 'Title3',
                            'description': 'Description3',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'other',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title4',
                            'description': 'Description4',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title5',
                            'description': 'Description5',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title6',
                            'description': 'Description6',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title7',
                            'description': 'Description7',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title8',
                            'description': 'Description8',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 1
                        },
                        {
                            'time': 'Time',
                            'title': 'Title9',
                            'description': 'Description9',
                            'image': '/assets/images/yeoman.png',
                            'brand': 'news',
                            'duration': 3
                        }
                    ]
                }
            ];
    }]);
