[![bitHound Score](https://www.bithound.io/github/rajeshwarpatlolla/ionic-timepicker/badges/score.svg)](https://www.bithound.io/github/rajeshwarpatlolla/ionic-timepicker)

##Introduction:

This is an `ionic-timepicker` bower component, which can be used in any Ionic framework's application. No additional plugins are required for this component.
This plugin is completely open source. Please rate this plugin @ [Ionic Market](http://market.ionic.io/plugins/ionictimepicker)

From version 0.5.0, this component has got so many new features and the way you should use is different from the older versions of this component. If you wish to see the documentation for the previous versions of this component, please check the [previous releases](https://github.com/rajeshwarpatlolla/ionic-timepicker/releases)

[View Demo](http://rajeshwarpatlolla.github.io/TimePickerForIonicFramework/demo/ "Demo")

##Prerequisites.

* node.js, npm
* ionic
* bower
* gulp

##How to use:

1) In your project folder, please install this plugin using bower

`bower install ionic-timepicker --save`

This will install the latest version of `ionic-timepicker`. If you wish to install any specific version(eg : 0.4.0) then
 
`bower install ionic-timepicker#0.4.0 --save`

2) Specify the path of  `ionic-timepicker.bundle.min.js` in your `index.html` file.

````html
<!-- path to ionic -->
<script src="lib/ionic-timepicker/dist/ionic-timepicker.bundle.min.js"></script>
````

3) In your application's main module, inject the dependency `ionic-timepicker`, in order to work with this plugin
````javascript
angular.module('mainModuleName', ['ionic', 'ionic-timepicker']){
//
}
````

4) You can configure this time picker at application level in the config method using the `ionicTimePicker` provider.
Your config method may look like this if you wish to setup the configuration. But this is not mandatory step.

````javascript
.config(function (ionicTimePickerProvider) {
    var timePickerObj = {
      inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
      format: 12,
      step: 15,
      setLabel: 'Set',
      closeLabel: 'Close'
    };
    ionicTimePickerProvider.configTimePicker(timePickerObj);
  })
````
In the above code i am not configuring all the properties, but you can configure as many properties as you can.
 
The properties you can configure are as follows.

**a) inputTime**(Optional) : This is the input epoch time which we can pass to the component. You can give any valid epoch time. Default value is `(((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60))`.

**b) format**(Optional) : This takes two values 12 or 24. If we give 12 as the value, then it will be `12` format time picker or else if you give `24` as the value, then it will be 24 hour format time picker. Default value is `12`.

**c) step**(Optional) : This is the value which will be used to increment/decrement the values of the minutes. You can give any value like 10/15/20/30. Default value is `15`.

**d) setLabel**(Optional) : The label for `Set` button. Default value is `Set`

**e) closeLabel**(Optional) : The label for `Close` button. Default value is `Close`

5) Inject `ionicTimePicker` in the controller, where you wish to use this component. Then using the below method you can call the timepicker.

````javascript
.controller('HomeCtrl', function ($scope, ionicTimePicker) {

  var ipObj1 = {
    callback: function (val) {      //Mandatory
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        var selectedTime = new Date(val * 1000);
        console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
      }
    },
    inputTime: 50400,   //Optional
    format: 12,         //Optional
    step: 15,           //Optional
    setLabel: 'Set2'    //Optional
  };
  
  ionicTimePicker.openTimePicker(ipObj1);
};
````

Apart from the config method, you can re configure all options in the controller also. If you again set any of the properties, they will be overridden by the values mentioned in the controller. This will be useful if there are multiple time pickers in the app, which has different properties.

In all the above steps, only mandatory property is the `callback` where you will get the selected time value.

    
##Screen Shots:

Once you are successfully done with the above steps, you should be able to use this plugin.

The first screen shot shows the popup and the second shows the modal of this plugin.

### iOS : 
<img src="https://lh3.googleusercontent.com/RZmHEf19w3ZozSeIivFYzKfhQAydDPA7xfGgZHzPadYNG32_BpeFnQRin6LTapfzf1asljfxEpV48GpGoU8g1NPOaL-ya10lno1L4Mjefz41FeWCIoW1um5BO1Lu0dRhbgvmUA_C_Q9YiZf6V8MDjAqyNNFkKpdjNDOh3qDPmi1v-XmG9Q-E40G1kdqxDrWMOIF1zhzmpzKaYE35Hp02-eHavfse25J64oyTxoXW1qKFa3yyacPFAs8UkMvJLNjXAryRpVtQwfbkCbac88jgckXAuAeDo7RTMjcT9J0PYufXutT5RlkEr3KMAJqrUSQpoe__iKBSmJCfCcOplVMvRcFUuHq7_4IwJtbqUvWNgL68kgeWsR8HWbBJY5u1uDg3DBuiWWfnKhS1oFu5imjLwfHshsOTT-mjV-VicK_pvcXtaFjkUGdtx436A1JsYN-3QyxqaYHnoedIT1GvKZTiJYNU6_qbUdTfQIZu5s0XPE1ALe56Hhs14zNqcdDYGGa3eyCuyD8qx8LExJZvHtJlJohTJQOUNkSfCKgKItjU6d3LjGpeNmVL9xAKb7UJ9hadqx0Z=w382-h678-no" width="320" height="568" />
<img src="https://lh3.googleusercontent.com/eHFdHG7yAQlVUlARm-i4i0RXje1SBZAAswiYH8-ml-w2nYCPrjQF96qcWpp8ZQwU-Zn4QBkZLJ4kWXGjVJ-kQjTbYvO9KMU4m3LbsA8-iVUPtWbbAHZWSBpaFTmZTvaL4ssCYG1YEZF1tVBHxOkl2Nvunxi4jHjzN1VYLng4fPXc_H2ORGkx93Ns-7rgtaIrbofd36mnUChmkICPMgHa-mitLHe7pBoMQQsWF3IqpFmb8X6NAOHMix5BcGIYMtGYig1iZgY3U1ppPSu6u67sq3b3HKJfAsR12x7CK4uZyUGmv5t3V6O7bKW4qwlqyq9Q7Xw_wJ_RL4YI874daIdLYxnIwv2406Fiz8CvJSHTHyznsBONvPMH58FOjOUjreHemUxGqh3CsaZaNFHPjEV1tQJTYBwe4tlUNbDU3iaJACqyTAMjj93HD-LJDxrbMUBgQKVFshF0i_SCfvid96JiHfiw0t6udFU3V26Gm80FpNb5XRfvsDNNpnY35U0Ei5HMigy2_Tb4LeFppsFjo0oNRW5o_ncGUkjdWl7M-fWNK4G9lljmg8zvPD4AP8QIbU-iWkAx=w382-h678-no" width="320" height="568" />

### Android : 
<img src="https://lh3.googleusercontent.com/E6lLfSOet7X5jNIRfS-OAkbi2783d7lVjc__xkVXa6AgWz-Rhqb0RQF0Zlez_JC4k5FSfGTZerO0fmUjx626fOSBTs78R8wE19U67sHeKss19qHqU5pt84loNyXOHKLa2iNYT9BnN0hrpVQYdg65c9vhQyeqTBmuz79TehSnsh3kj_ZfQb8juLkYkkWPXkAwKu7iErPG0SbHSutX_EiEtu89Hr1YClXQDDb0U_ca_7kBUFei8KVtwce9qAnGvWnZVNq_bzRO9pDGWDhsFv2tZg5986S8MVC0SgmzsBtwCKGkJIth_nGOSR1ezzLTFcIiWJ8mjMi5twYJ1gWgVG7aDl3T3JF0-Z_FI3AVE7R4xY3_1_Z3r6p7UoGGNfq7oi5n3pJobC80m-SfQYf3Am3Db-zy1n-QxuQQrNTsJFmjQ-YeWX9O-0H07xpPgzUVWNk7ybqzHDj9gSAhaUIlZ0P5de0CEVkmse3fDskHcJaUUiuLLg7GRjfeUO80dNTAXPapkbIGqeXR1bVCPoYSYS1BE4gXqVcaF02eZN2AfPr6-XtLmmNa-rvvNVo0-nSG93onkMhi=w382-h678-no" width="360" height="640" />
<img src="https://lh3.googleusercontent.com/d2dRpy0mZ-ivfy48bfXxH8oXQ2w3L21evHZstdTc5Z2z4ukYlSakGAFdnnNJknGx_zRgdUFC5AcTUWO9XyccTc-qzEbnwEq9Kqd6JSH1YKGDhrK0zsx1qGrtn1MNlg2Fa9TUjt_U8SlGQEWin5h8Zqyp93bevDHe_15KS5pXp7WHjpI-eZtWJqUOObnnY5e_54cbx5Rw3Veh25nhYQUyPxIMaHDMr-dUyOKhxVP1dz7keAjD9vqH1XJwX6kkCNSSn-DeZOG6vXqjOgPlv1FQpkG7uEc2Y84bIbBqFcIR5XSIDBppPYpt_tDs20-ZgDLoY7-59mXEnclS9OZlFcTN_SCHsEjQ8NTsXh8jiJWSQsVx0UF2xumCjd8sLLGx3slv2xYv4KuEtzW5fKsgpeEKFheXnwBtLzxwqavlATNe2x3QWLHekR2eFCDpaGhU_m-aCoo-CD-Fpil-VihqhAcJOYBthPdDdgUhahNJHaJaShN1SNj4faoYIUGNboAsmJNcK92448BlH8NUTSWScu3s1tP3W9xd1DDjUlVaNbIyMPpEITNBHAyvzOn5Ddqpa54sPVbJ=w382-h678-no" width="360" height="640" />


##CSS Classes:

###popup
<img src="https://lh3.googleusercontent.com/L4aOxCEmBSduhkmWfrsQmA0UU3eD6-fg1VDjy-uU_ck09bspdsz_ytleW2KrzlZCy3jbFOPS_3SBlkp72SKj2DyjHMS5Eh3YRQFxe32EBU8GmufDHSaqFgjfAvqx4eJMfXsJtdfGD9v_eL-x_7fVg2nUjvNppJ3kY0XxxcbYysTxKFfnMaF40oCGXE1Uj8Dknz_mNVdtPAJeVAgVMxsuGH-zgQWVvoD5DMIgZ0unclt8DakU6N_ZBTZsrPdDPWV6yENUkWaUPmc_YsN53Pzw_h_hg-Oi34GvDyqhIEmvANCMuv6tH9NKSCoxra9dfhtjpa8sfEPfBcG5VLNDkTdnbfeqGGkwf1wTA9aYKrul682aDu84qJAA0jFp3wQvIuToAbpjlZa14MDjBh6wccev4zLt9z8sL10OK_7--0tPq-vCNt5ZlVIoHOA5tVt-lltUP9ZC2PzJRs2GhUVz9pXGi0rSmm06-gFZzb3ycH3nAf_VPlYidb9Znq7QGnWnAvaLdfKyWMDYJVtYuIdkjlFy8SfD5vVROFuXZzW9d9IxjrxOXNQ41sWN5j37UufW0TDaAZrL=w382-h678-no" width="360" height="640" />

#### 1) heading
#### 2) time_picker_arrows 
#### 3) time_picker_box_text
#### 4) time_picker_colon
#### 5) button_set
#### 6) button_close

You can use the below css class as the main class to customise popup.  
####ionic_timepicker_popup

The css class names for the buttons are as follows

a) For `Set` button the class name is `button_set` 

b) For `Close` button the class name is `button_close` 

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

### 7) v0.4.0
#### Bug fixes : [#48](https://github.com/rajeshwarpatlolla/ionic-timepicker/issues/48), [#53](https://github.com/rajeshwarpatlolla/ionic-timepicker/issues/53), [#51](https://github.com/rajeshwarpatlolla/ionic-timepicker/issues/51)

#### PR : [#54](https://github.com/rajeshwarpatlolla/ionic-timepicker/pull/54), 

Few additional enhancements added. 

### 8) v0.5.0
#### Features
a) You can configure the ionic-timepicker from the config method. 

### 9) v0.5.1
#### BugFix : [#75](https://github.com/rajeshwarpatlolla/ionic-timepicker/issues/75)


##License:
[MIT](https://github.com/rajeshwarpatlolla/ionic-timepicker/blob/master/LICENSE.MD "MIT")

##Contact:
Gmail : rajeshwar.patlolla@gmail.com

Github : https://github.com/rajeshwarpatlolla

Twitter : https://twitter.com/rajeshwar_9032

Facebook : https://www.facebook.com/rajeshwarpatlolla

Paypal : rajeshwar.patlolla@gmail.com

Comment or Rate it : http://market.ionic.io/plugins/ionictimepicker