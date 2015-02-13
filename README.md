##Introduction:

This is a time picker for Ionic Framework's application.

[View Demo](http://rajeshwarpatlolla.github.io/TimePickerForIonicFramework/demo/ "Demo") 


##Follow the below mentioned steps.

1) First, install node.js, bower, gulp.

##How to use:

Use the below format in your template / html file

    `<ionic-time-picker etime="slots[0].epochTime" format="12" step="15">`    
    `....`
    `</ionic-time-picker>`

Use the below format in your corresponding template's controller

    `$scope.slots = [`
    `      {epochTime: 12600, step: 15, format: 12},`
    `      {epochTime: 54900, step: 1, format: 24}`
    ` ];`

1) `ionic-time-picker` is the directive, to which we can pass required vales.

2) `etime` takes epoch time.
	
3) `format` indicates 12 hour or 24 hour format. It can take two values, 12 or 24.

4) `step` indicates minute increment. It can take two values, 1 or 15.

##Versions:

### 1) v0.1
The whole time picker functionality has been implemented.

##Contact:
gmail : rajeshwar.patlolla@gmail.com

github : https://github.com/rajeshwarpatlolla