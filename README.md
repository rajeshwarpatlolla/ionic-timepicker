##Introduction:

This is a `ionic-timepicker` bower component which can be used with any Ionic framework's application.

[View Demo](http://rajeshwarpatlolla.github.io/TimePickerForIonicFramework/demo/ "Demo") 


##Prerequisites.

1) node.js, bower and gulp.

##How to use:

1) In your project repository install the ionic time picker using bower

    bower install ionic-timepicker --save-dev
    
2) In your application module inject the dependency `ionic-timepicker`, in order to work with the ionic time picker
    
    angular.module('modulename', ['ionic', 'ionic-timepicker']){
    
    }

3) Use the below format in your template's corresponding controller

    $scope.slots = [
          {epochTime: 12600, step: 15, format: 12},
          {epochTime: 54900, step: 1, format: 24}
     ];

4) Then use the below format in your template / html file

    <ionic-time-picker etime="slots[0].epochTime" format="12" step="15">    
        {{slots[0].epochTime}}
    </ionic-time-picker>


a) `ionic-time-picker` is the directive, to which we can pass required vales.

b) `etime` takes epoch time.
	
c) `format` indicates 12 hour or 24 hour format. It can take two values, 12 or 24.

d) `step` indicates minute increment. It can take two values, 1 or 15.


Tested with `angular#1.3.6` and `ionic#1.0.0-beta.14`. 

 
##Versions:

### 1) v0.2.0
The whole time picker functionality has been implemented, and can be installed with 
    
    bower install ionic-timepicker


##License:
MIT

##Contact:
gmail : rajeshwar.patlolla@gmail.com

github : https://github.com/rajeshwarpatlolla

twitter : https://twitter.com/rajeshwar_9032

facebook : https://www.facebook.com/rajeshwarpatlolla