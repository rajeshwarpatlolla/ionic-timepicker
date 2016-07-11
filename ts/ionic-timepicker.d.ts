/**
 * Created by beenotung on 7/3/16.
 */
declare namespace ionic {
    namespace IonicTimePickerService {
        interface ITimePickerOption {
            callback:(val?:number)=>void;
            setLabel?:string;
            closeLabel?:string
            inputTime?:number;
            format?:number;
            step?:number;
        }
    }
    interface IonicTimePickerService {
        openTimePicker(cakkbacoption:IonicTimePickerService.ITimePickerOption):void;
    }
}
