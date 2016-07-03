/**
 * Created by beenotung on 7/3/16.
 */
declare namespace ionic {
    module TimePicker {
        interface ITimePickerOption {
            callback:(val?:any)=>void;
            setLabel?:string;
            closeLabel?:string
            inputTime?:number;
            format?:number;
            step?:number;
        }
    }
    class TimePicker {
        openTimePicker(cakkbacoption:TimePicker.ITimePickerOption):void;
    }
}
