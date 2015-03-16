##Introduction:

This is a `ionic-timepicker` bower component which can be used with any Ionic framework's application.

[View Demo](http://rajeshwarpatlolla.github.io/TimePickerForIonicFramework/demo/ "Demo") 


##Prerequisites.

1) node.js, bower and gulp.

##How to use:

1) In your project repository install the ionic time picker using bower

    bower install ionic-timepicker --save-dev
    
2) Then you can see the following directory structure see in your project folder
   
![Directory Structure](https://lh3.googleusercontent.com/_s2lFLFfgYSUfhdmZO0r4w6td80dEErTN4pLc7Louo8=w200-h300-p-no "Directory Structure")

Give the path of  `style.css, templates.js and ionic-timepicker.js` in your `index.html` file.

````html
<link href="lib/ionic-timepicker/dist/style.css" rel="stylesheet">

<!-- path to ionic/angularjs js -->
<script src="lib/ionic-timepicker/dist/templates.js"></script>
<script src="lib/ionic-timepicker/dist/ionic-timepicker.js"></script>
````    
    
3) In your application module inject the dependency `ionic-timepicker`, in order to work with the ionic time picker
    
````javascript
angular.module('modulename', ['ionic', 'ionic-timepicker']){

}
````

4) Use the below format in your template's corresponding controller

````javascript
$scope.slots = {epochTime: 12600, format: 12, step: 15};
````

5) Then use the below format in your template / html file

````html
<ionic-time-picker etime="slots.epochTime" format="slots.format" step="slots.step">    
    {{slots.epochTime}}
</ionic-time-picker>
````


a) `ionic-time-picker` is the directive, to which we can pass required vales.

b) `etime` takes epoch time, which will be converted to UTC.
	
c) `format` indicates 12 hour or 24 hour format. It can take two values, 12 or 24.

d) `step` indicates minute increment. It can take two values, 1 or 15.


Tested with `angular#1.3.6` and `ionic#1.0.0-beta.14`. 

 
##Versions:

### 1) v0.2.0
The whole time picker functionality has been implemented, and can be installed with 
    
    bower install ionic-timepicker --save


##License:
MIT

##Contact:
gmail : rajeshwar.patlolla@gmail.com

github : https://github.com/rajeshwarpatlolla

twitter : https://twitter.com/rajeshwar_9032

facebook : https://www.facebook.com/rajeshwarpatlolla
