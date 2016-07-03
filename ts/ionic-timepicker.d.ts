/**
 * Created by beenotung on 7/3/16.
 */
declare namespace ionic {
    module ionicTimePicker {
        interface ITimePickerOption {
            callback:(val?:any)=>void;
            setLabel?:string;
            closeLabel?:string
            inputTime?:number;
            format?:number;
            step?:number;
        }
    }
    class ionicTimePicker {
        openTimePicker(cakkbacoption:ionicTimePicker.ITimePickerOption):void;
    }
}
