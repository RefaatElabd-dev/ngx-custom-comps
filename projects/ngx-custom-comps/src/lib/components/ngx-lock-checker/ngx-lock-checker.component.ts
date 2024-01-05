import { Component, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { v4 } from "uuid";
import { CheckTypeEnum } from "./checkType.enum";

@Component({
    selector: 'lib-lock-checker',
    templateUrl: 'ngx-lock-checker.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NGXLockCheckerComponent,
            multi: true,
        },
    ],
    styleUrls: ['ngx-lock-checker.component.css']
})
export class NGXLockCheckerComponent implements ControlValueAccessor
{
    @Input() displayName: string = '';
    @Input() id: string;
    @Input() checkType: CheckTypeEnum = CheckTypeEnum.Magic;
    innerValue: boolean = false;

    constructor() {
      this.id = v4();
    }

    set value(val: boolean) {
        this.innerValue = val
        this.onChange(val)
    }

    get value() : boolean {
        return this.innerValue;
    }

    onChange = (val: boolean) => {}
    onTouch = () => {}

    writeValue(val: boolean): void {
        this.value = val;
    }

    registerOnChange(onChange: any): void {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: any): void {
        this.onTouch = onTouched;
    }
    setDisabledState?(isDisabled: boolean): void {
        
    }
}