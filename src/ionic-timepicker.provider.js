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
      var $scope = $rootScope.$new();
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


      //Increasing the hours
      $scope.increaseHours = function () {
        $scope.time.hours = Number($scope.time.hours);
        if ($scope.mainObj.format == 12) {
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
      };

      //Decreasing the hours
      $scope.decreaseHours = function () {
        $scope.time.hours = Number($scope.time.hours);
        if ($scope.mainObj.format == 12) {
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
      };

      //Increasing the minutes
      $scope.increaseMinutes = function () {
        $scope.time.minutes = Number($scope.time.minutes);
        $scope.time.minutes = ($scope.time.minutes + $scope.mainObj.step) % 60;
        $scope.time.minutes = ($scope.time.minutes < 10) ? ('0' + $scope.time.minutes) : $scope.time.minutes;
      };

      //Decreasing the minutes
      $scope.decreaseMinutes = function () {
        $scope.time.minutes = Number($scope.time.minutes);
        $scope.time.minutes = ($scope.time.minutes + (60 - $scope.mainObj.step)) % 60;
        $scope.time.minutes = ($scope.time.minutes < 10) ? ('0' + $scope.time.minutes) : $scope.time.minutes;
      };

      //Changing the meridian
      $scope.changeMeridian = function () {
        $scope.time.meridian = ($scope.time.meridian === "AM") ? "PM" : "AM";
      };

      function setMinSecs(ipTime, format) {
        $scope.time.hours = Math.floor(ipTime / (60 * 60));

        var rem = ipTime % (60 * 60);
        if (format == 12) {
          if ($scope.time.hours >= 12) {
            $scope.time.meridian = 'PM';

            if($scope.time.hours > 12){
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
            $scope.mainObj.callback(totalSec);
          }
        });

        buttons.push({
          text: $scope.mainObj.closeLabel,
          type: 'button_close'
        });

        $scope.popup = $ionicPopup.show({
          templateUrl: 'ionic-timepicker.html',
          scope: $scope,
          cssClass: 'ionic_timepicker_popup',
          buttons: buttons
        });

      };

      return provider;

    }];

  });
