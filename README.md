##Introduction:

This is a `ionic-timepicker` bower component which can be used with any Ionic framework's application.

[View Demo](http://rajeshwarpatlolla.github.io/TimePickerForIonicFramework/demo/ "Demo") 


##Prerequisites.

1) node.js, bower and gulp.

##How to use:

1) In your project repository install the ionic time picker using bower

`bower install ionic-timepicker --save-dev`

2) Give the path of  `ionic-timepicker.bundle.min.js` in your `index.html` file.

````html
<link href="lib/ionic-timepicker/dist/style.css" rel="stylesheet">

<!-- path to ionic/angularjs js -->
<script src="lib/ionic-timepicker/dist/ionic-timepicker.bundle.min.js"></script>
````    

3) In your application module inject the dependency `ionic-timepicker`, in order to work with the ionic time picker

````javascript
angular.module('modulename', ['ionic', 'ionic-timepicker']){

}
````

4) Use the below format in your template's corresponding controller

````javascript
$scope.timePickerObject = {
  inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
  step: 15,  //Optional
  format: 12,  //Optional
  titleLabel: '12-hour Format',  //Optional
  setLabel: 'Set',  //Optional
  closeLabel: 'Close',  //Optional
  setButtonType: 'button-positive',  //Optional
  closeButtonType: 'button-stable',  //Optional
  callback: function (val) {    //Mandatory
    timePickerCallback(val);
  }
};

$scope.timePickerCallback = function (val) {
  if (typeof (val) === 'undefined') {
    console.log('Time not selected');
  } else {
    console.log('Selected time is : ', val);	// `val` will contain the selected time in epoch
  }
};
````

**$scope.timePickerObject** is the main object, that we need to pass to the directive. The properties of this object are as follows.

**a) inputEpochTime**(Optional) : This the input epoch time to which the time will set initially. Default value is current hour. This is mandatory if you wish to show this on the button before opening the popup.

**b) step**(Optional) : This the minute increment / decrement step. Default value is `15`

**c) format**(Optional) : This the format of the time. It can can two values i.e.`12` or `24`. Default value is `24`

**d) titleLabel**(Optional) : The label for `Title` of the popup. Default value is `Time Picker`

**e) setLabel**(Optional) : The label for the `Set` button. Default value is `Set`

**f) closeLabel**(Optional) : The label for the `Close` button. Default value is `Close`

**g) setButtonType**(Optional) : This the type of the `Set` button. Default value is `button-positive`. You can give any valid ionic framework's button classes. 

**h) closeButtonType**(Optional) : This the type of the `Close` button. Default value is `button-stable`. You can give any valid ionic framework's button classes.

**i) callback**(Mandatory) : This the callback function, which will get the selected time in to the controller. You can define this function as follows.
````javascript
function timePickerCallback(val) {
  if (typeof (val) === 'undefined') {
    console.log('Time not selected');
  } else {
    var selectedTime = new Date(val * 1000);
    console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
  }
}
````

5) Then use the below format in your template / html file

````html
<ionic-timepicker input-obj="timePickerObject">
  <button class="button button-block button-positive overflowShow">
    <standard-time-meridian etime='timePickerObject.inputEpochTime'></standard-time-meridian>
  </button>
</ionic-timepicker>
````

a) `ionic-timepicker` is the directive, to which we can pass required vales.

b) `etime` takes epoch time, which will be converted to UTC.

c) `format` indicates 12 hour or 24 hour format. It can take two values, 12 or 24.

d) `step` indicates minute increment. It can take two values, 1 or 15.

e) `callback` is the callback function, which will be called once the timepicker popup has bees closed. It will return `undefined` if no time has been selected. It will return the `time in epoch` if the user selects some time.

You can also use any of my [directives](https://github.com/rajeshwarpatlolla/my-angularjs-directives) to convert the epoch time to string format.


##Screen Shots:

![12-Hour](https://lh6.googleusercontent.com/-UL18wuskI_A/VNHkGj8tdwI/AAAAAAAADdU/5tBbZcF6_es/w328-h494-no/TimePicker-1.jpg "12-Hour")
![24-Hour](https://lh5.googleusercontent.com/-xgqgH2zRSuA/VNHkGQ6R8cI/AAAAAAAADdQ/5gGJ1nUqmA0/w328-h494-no/TimePicker-2.jpg "24-Hour.")

##Versions:

### 1) v0.1.0
The whole time picker functionality has been implemented, and can be installed with 

bower install ionic-timepicker --save

### 2) v0.1.1
Directive name has been modified.

### 3) v0.1.2
If the minutes and hours are less than 10, then 0 will be prepended to the value of minutes/hours.

### 4) v0.2.0
Callback function added to get the selected time in to the controller.

### 5) v0.2.1
Class names modified as per [this bug](https://github.com/rajeshwarpatlolla/ionic-timepicker/issues/41).

### 6) v0.3.0
Features added to customize this component. 

##License:
[MIT](https://github.com/rajeshwarpatlolla/ionic-timepicker/blob/master/LICENSE.MD "MIT")

##Contact:
gmail : rajeshwar.patlolla@gmail.com

github : https://github.com/rajeshwarpatlolla

twitter : https://twitter.com/rajeshwar_9032

facebook : https://www.facebook.com/rajeshwarpatlolla

paypal : rajeshwar.patlolla@gmail.com

