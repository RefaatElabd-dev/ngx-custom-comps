import { Component, Input } from "@angular/core";
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";

@Component({
    selector: 'ngx-address',
    templateUrl: 'ngx-address-form.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NGXAddressFormComponent,
            multi: true,
        },
    ]
})
export class NGXAddressFormComponent implements ControlValueAccessor
{
    @Input() legend: string = ''

    onTouched = ( ) => {}

    form: FormGroup = this.fb.group({
        addressLine1: [null, [Validators.required]],
        addressLine2: [null, [Validators.required]],
        zibCode: [null, [Validators.required]],
        city: [null, [Validators.required]],
    })

    constructor(private fb: FormBuilder){
        
    }


    writeValue(val: any): void {
        if(val) {
            this.form.setValue(val)
        }
    }

    registerOnChange(onChange: any): void {
        this.form.valueChanges.subscribe( value => onChange())
    }

    registerOnTouched(onTouchedFn: any): void {
        this.onTouched = onTouchedFn
    }

    setDisabledState?(isDisabled: boolean): void {
        if(isDisabled) {
            this.form.disable();
        }
        else {
            this.form.enable()
        }
        
    }
}