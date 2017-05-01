angular.module('ionic-timepicker.provider', [])

  .provider('ionicTimePicker', function () {

    var config = {
      setLabel: 'Set',
      closeLabel: 'Close',
      inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
      format: 12,
      step: 15
    };

    this.configTimePicker = function (inputObj) {
      angular.extend(config, inputObj);
    };

    this.$get = ['$rootScope', '$ionicPopup', function ($rootScope, $ionicPopup) {

      var provider = {};
      var maxTime = {}; //in seconds
      var minTime = {}; //in seconds
      var $scope = $rootScope.$new();
      $scope.canIncreaseHours = false;
      $scope.canDecreaseHours = false;
      $scope.canIncreaseMinutes = false;
      $scope.canDecreaseMinutes = false;
      $scope.canAdjustMeridian = false;
      $scope.today = resetHMSM(new Date()).getTime();
      $scope.time = {};

      //Reset the hours, minutes, seconds and milli seconds
      function resetHMSM(currentDate) {
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);
        return currentDate;
      }

      //get picker time in seconds
      function getTimeInSeconds() {
        var totalSec = 0;
        if ($scope.time.format == 12) {
          $scope.time.hours = Number($scope.time.hours);
          if ($scope.time.meridian == 'PM' && $scope.time.hours != 12) {
            $scope.time.hours += 12;
          } else if ($scope.time.meridian == 'AM' && $scope.time.hours == 12) {
            $scope.time.hours -= 12;
          }
          totalSec = ($scope.time.hours * 60 * 60) + ($scope.time.minutes * 60);
        } else {
          totalSec = ($scope.time.hours * 60 * 60) + ($scope.time.minutes * 60);
        }
        return totalSec;
      }

      function getRailwayTime(hours, meridian) { //hours in 12 hour format
        if (meridian === 'AM') {
          return hours;
        }
        else if (hours !== 12 && meridian === 'PM') {
          return 12 + hours;
        }
        return hours;
      }

      //hanlde picker step buttons
      function handlePickerStepButton() {
        if (angular.isDefined($scope.mainObj.maxTime)) {
          var pickerHours = getRailwayTime(Number($scope.time.hours), $scope.time.meridian);
          var pickerMinutes = Number($scope.time.minutes);

          //handle hours
          if (pickerHours === minTime.hours && pickerHours === maxTime.hours) {
            $scope.canIncreaseHours = false;
            $scope.canDecreaseHours = false;
          }
          else if (pickerHours > minTime.hours && pickerHours < maxTime.hours) {
            $scope.canIncreaseHours = true;
            $scope.canDecreaseHours = true;
          }
          else if (pickerHours === minTime.hours && pickerHours < maxTime.hours) {
            $scope.canIncreaseHours = true;
            $scope.canDecreaseHours = false;
          }
          else if (pickerHours > minTime.hours && pickerHours === maxTime.hours) {
            $scope.canIncreaseHours = false;
            $scope.canDecreaseHours = true;
          }

          //handle minutes
          var pickerTotalMinutes = Number(getRailwayTime(Number($scope.time.hours), $scope.time.meridian) * 60) + Number($scope.time.minutes);
          var minTimeTotalMinutes = (minTime.hours * 60) + minTime.minutes;
          var maxTimeTotalMinutes = (maxTime.hours * 60) + maxTime.minutes;
          //check if its a valid time
          if (pickerTotalMinutes <= maxTimeTotalMinutes) {
            if (pickerTotalMinutes === minTimeTotalMinutes && pickerTotalMinutes === maxTimeTotalMinutes) {
              $scope.canIncreaseMinutes = false;
              $scope.canDecreaseMinutes = false;
            }
            else if (pickerTotalMinutes === minTimeTotalMinutes && pickerTotalMinutes < maxTimeTotalMinutes) {
              $scope.canIncreaseMinutes = true;
              $scope.canDecreaseMinutes = false;
            }
            else if (pickerTotalMinutes > minTimeTotalMinutes && pickerTotalMinutes === maxTimeTotalMinutes) {
              $scope.canIncreaseMinutes = false;
              $scope.canDecreaseMinutes = true;
            }
            else if (pickerTotalMinutes > minTimeTotalMinutes && pickerTotalMinutes < maxTimeTotalMinutes) {
              $scope.canIncreaseMinutes = true;
              $scope.canDecreaseMinutes = true;
            }
          }
          else {
            $scope.time.minutes = maxTime.minutes;
            $scope.time.minutes = ($scope.time.minutes < 10) ? ('0' + $scope.time.minutes) : $scope.time.minutes;

            $scope.canIncreaseMinutes = false;
            $scope.canDecreaseMinutes = true;
          }
        }
      }

      function toggleMeridian() {
        if ($scope.time.meridian === 'AM') {
          $scope.time.meridian = 'PM';
        }
        else if ($scope.time.meridian === 'PM') {
          $scope.time.meridian = 'AM';
        }
      }

      //Increasing the hours
      $scope.increaseHours = function () {
        $scope.time.hours = Number($scope.time.hours);
        var minutes = Number($scope.time.minutes)
        if ($scope.mainObj.format == 12) {
          //meridian update
          if ($scope.time.hours === 11) {
            toggleMeridian();
          }

          if ($scope.time.hours != 12) {
            $scope.time.hours += 1;
          } else {
            $scope.time.hours = 1;
          }
        }
        if ($scope.mainObj.format == 24) {
          $scope.time.hours = ($scope.time.hours + 1) % 24;
        }
        $scope.time.hours = ($scope.time.hours < 10) ? ('0' + $scope.time.hours) : $scope.time.hours;
        handlePickerStepButton();
      };

      //Decreasing the hours
      $scope.decreaseHours = function () {
        $scope.time.hours = Number($scope.time.hours);
        if ($scope.mainObj.format == 12) {
          //meridian update
          if ($scope.time.hours === 12) {
            toggleMeridian();
          }

          if ($scope.time.hours > 1) {
            $scope.time.hours -= 1;
          } else {
            $scope.time.hours = 12;
          }
        }
        if ($scope.mainObj.format == 24) {
          $scope.time.hours = ($scope.time.hours + 23) % 24;
        }
        $scope.time.hours = ($scope.time.hours < 10) ? ('0' + $scope.time.hours) : $scope.time.hours;
        handlePickerStepButton();
      };

      //Increasing the minutes
      $scope.increaseMinutes = function () {
        $scope.time.minutes = Number($scope.time.minutes);
        var minutesNow = $scope.time.minutes;
        $scope.time.minutes = ($scope.time.minutes + $scope.mainObj.step) % 60;
        var minutesAfter = $scope.time.minutes;
        if ($scope.mainObj.format == 24) {
          if ((Number($scope.time.minutes) === 12) && (minutesNow === 59) && (minutesAfter === 0)) {
            toggleMeridian();
          }
        }
        $scope.time.minutes = ($scope.time.minutes < 10) ? ('0' + $scope.time.minutes) : $scope.time.minutes;
        handlePickerStepButton();
      };

      //Decreasing the minutes
      $scope.decreaseMinutes = function () {
        $scope.time.minutes = Number($scope.time.minutes);
        var minutesNow = $scope.time.minutes;
        $scope.time.minutes = ($scope.time.minutes + (60 - $scope.mainObj.step)) % 60;
        var minutesAfter = $scope.time.minutes;
        if ($scope.mainObj.format == 24) {
          if ((Number($scope.time.minutes) === 1) && (minutesNow === 0) < (minutesAfter === 59)) {
            toggleMeridian();
          }
        }
        $scope.time.minutes = ($scope.time.minutes < 10) ? ('0' + $scope.time.minutes) : $scope.time.minutes;
        handlePickerStepButton();
      };

      //Changing the meridian
      $scope.changeMeridian = function () {
        $scope.time.meridian = ($scope.time.meridian === "AM") ? "PM" : "AM";
      };

      function getHMMFromSeconds(time, format) { //time in seconds
        var hours, minutes, meridian;
        hours = Math.floor(time / (60 * 60));

        var rem = time % (60 * 60);
        if (format == 12) {
          if (hours >= 12) {
            meridian = 'PM';

            if (hours > 12) {
              hours -= 12;
            }
          }
          else {
            meridian = 'AM';
          }
        }

        if (hours === 0) {
          hours = 12;
        }

        minutes = rem / 60;
        hours = Math.floor(hours);
        minutes = Math.floor(minutes);

        return {
          hours: hours,
          minutes: minutes,
          meridian: meridian
        }
      }

      function setMinSecs(ipTime, format) {
        $scope.time.hours = Math.floor(ipTime / (60 * 60));

        var rem = ipTime % (60 * 60);
        if (format == 12) {
          if ($scope.time.hours >= 12) {
            $scope.time.meridian = 'PM';

            if ($scope.time.hours > 12) {
              $scope.time.hours -= 12;
            }
          }
          else {
            $scope.time.meridian = 'AM';
          }
        }

        if ($scope.time.hours === 0) {
          $scope.time.hours = 12;
        }

        $scope.time.minutes = rem / 60;

        $scope.time.hours = Math.floor($scope.time.hours);
        $scope.time.minutes = Math.floor($scope.time.minutes);

        if ($scope.time.hours.toString().length == 1) {
          $scope.time.hours = '0' + $scope.time.hours;
        }
        if ($scope.time.minutes.toString().length == 1) {
          $scope.time.minutes = '0' + $scope.time.minutes;
        }
        $scope.time.format = $scope.mainObj.format;
      }

      provider.openTimePicker = function (ipObj) {
        var buttons = [];
        $scope.mainObj = angular.extend({}, config, ipObj);
        setMinSecs($scope.mainObj.inputTime, $scope.mainObj.format);

        buttons.push({
          text: $scope.mainObj.setLabel,
          type: 'button_set',
          onTap: function (e) {
            var totalSec = getTimeInSeconds();
            $scope.mainObj.callback(totalSec);
          }
        });

        buttons.push({
          text: $scope.mainObj.closeLabel,
          type: 'button_close'
        });

        $scope.popup = $ionicPopup.show({
          templateUrl: 'lib/ionic-timepicker/src/ionic-timepicker.html',
          scope: $scope,
          cssClass: 'ionic_timepicker_popup',
          buttons: buttons
        });

        if (angular.isDefined($scope.mainObj.maxTime)) {
          maxTime = getHMMFromSeconds($scope.mainObj.maxTime, 24);
          minTime = getHMMFromSeconds($scope.mainObj.inputTime, 24);
          handlePickerStepButton();
        }
        else {
          $scope.canIncreaseHours = true;
          $scope.canDecreaseHours = true;
          $scope.canIncreaseMinutes = true;
          $scope.canDecreaseMinutes = true;
          $scope.canAdjustMeridian = true;
        }
      };

      return provider;

    }];

  });
