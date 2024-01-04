import { Component, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

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
    styles: [`
        .lock-checkbox {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }
          
          .lock-checkbox input {
            opacity: 0;
            width: 0;
            height: 0;
          }
          
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 16px;
            width: 16;
            background-color: #fff;
            border: 1px solid #000;
          }
          
          .lock-checkbox input:checked ~ .checkmark::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 16px;
            height: 16px;
            background-color: #000;
            border-radius: 50%;
          }
          
          .lock-checkbox input:checked ~ .checkmark::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 6px;
            height: 10px;
            background-color: #000;
            border-radius: 4px;
          }
          
          .lock-checkbox input:disabled ~ .checkmark {
            background-color: #ccc;
            border-color: #999;
            cursor: not-allowed;
          }
        `
    ]
})
export class NGXLockCheckerComponent implements ControlValueAccessor
{
    @Input() displayName: string = '';
    innerValue: boolean = false;

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