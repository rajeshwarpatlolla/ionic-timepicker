//By Rajeshwar Patlolla
//https://github.com/rajeshwarpatlolla

angular.module('ionic-timepicker', ['ionic', 'ionictimepicker.templates'])
    .directive('ionicTimePicker', ['$ionicPopup', function ($ionicPopup) {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            etime: '=etime',        //epoch time getting from a template
            format: '=format',      //format getting from a template
            step: '=step'           //step getting from a template
        },
        link: function (scope, element, attrs) {

            element.on("click", function () {

                var obj = {epochTime: scope.etime, step: scope.step, format: scope.format};

                scope.time = { hours: 0, minutes: 0, meridian: "" };

                var objDate = new Date(obj.epochTime);       // Epoch time in milliseconds.

                scope.increaseHours = function () {
                    if (obj.format == 12) {
                        if (scope.time.hours != 12) {
                            scope.time.hours += 1;
                        } else {
                            scope.time.hours = 1;
                        }
                    }
                    if (obj.format == 24) {
                        if (scope.time.hours != 23) {
                            scope.time.hours += 1;
                        } else {
                            scope.time.hours = 0;
                        }
                    }
                };

                scope.decreaseHours = function () {
                    if (obj.format == 12) {
                        if (scope.time.hours > 1) {
                            scope.time.hours -= 1;
                        } else {
                            scope.time.hours = 12;
                        }
                    }
                    if (obj.format == 24) {
                        if (scope.time.hours > 0) {
                            scope.time.hours -= 1;
                        } else {
                            scope.time.hours = 23;
                        }
                    }
                };

                scope.increaseMinutes = function () {
                    if (scope.time.minutes != (60 - obj.step)) {
                        scope.time.minutes += obj.step;
                    } else {
                        scope.time.minutes = 0;
                    }
                };

                scope.decreaseMinutes = function () {
                    if (scope.time.minutes != 0) {
                        scope.time.minutes -= obj.step;
                    } else {
                        scope.time.minutes = 60 - obj.step;
                    }
                };

                if (obj.format == 12) {

                    scope.time.meridian = (objDate.getHours() >= 12) ? "PM" : "AM";
                    scope.time.hours = (objDate.getHours() > 12) ? ((objDate.getHours() - 12)) : (objDate.getHours());
                    scope.time.minutes = (objDate.getMinutes());

                    if (scope.time.hours == 0 && scope.time.meridian == "AM") {
                        scope.time.hours = 12;
                    }

                    scope.changeMeridian = function () {
                        scope.time.meridian = (scope.time.meridian === "AM") ? "PM" : "AM";
                    };

                    $ionicPopup.show({
                        templateUrl: 'time-picker-12-hour.html',
                        title: '<strong>12-Hour Format</strong>',
                        subTitle: '',
                        scope: scope,
                        buttons: [
                            { text: 'Cancel' },
                            {
                                text: 'Set',
                                type: 'button-positive',
                                onTap: function (e) {

                                    scope.loadingContent = true;

                                    var totalSec = 0;

                                    if (scope.time.hours != 12) {
                                        totalSec = (scope.time.hours * 60 * 60) + (scope.time.minutes * 60);
                                    } else {
                                        totalSec = scope.time.minutes * 60;
                                    }

                                    if (scope.time.meridian === "AM") {
                                        totalSec += 0;
                                    } else if (scope.time.meridian === "PM") {
                                        totalSec += 43200;
                                    }

                                    // handle timezone offset
                                    var offset = (new Date()).getTimezoneOffset() * 60;
                                    totalSec += offset;

                                    scope.etime = totalSec * 1000;
                                }
                            }
                        ]
                    })

                }

                if (obj.format == 24) {

                    scope.time.hours = (objDate.getHours());
                    scope.time.minutes = (objDate.getMinutes());

                    $ionicPopup.show({
                        templateUrl: 'time-picker-24-hour.html',
                        title: '<strong>24-Hour Format</strong>',
                        subTitle: '',
                        scope: scope,
                        buttons: [
                            { text: 'Cancel' },
                            {
                                text: 'Set',
                                type: 'button-positive',
                                onTap: function (e) {

                                    scope.loadingContent = true;

                                    var totalSec = 0;

                                    if (scope.time.hours != 24) {
                                        totalSec = (scope.time.hours * 60 * 60) + (scope.time.minutes * 60);
                                    } else {
                                        totalSec = scope.time.minutes * 60;
                                    }

                                    // handle timezone offset
                                    var offset = (new Date()).getTimezoneOffset() * 60;
                                    totalSec += offset;

                                    scope.etime = totalSec * 1000;
                                }
                            }
                        ]
                    })

                }

            });

        }
    };
}]);