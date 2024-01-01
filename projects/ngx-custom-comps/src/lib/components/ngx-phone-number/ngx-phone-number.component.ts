import { Component, Input, OnInit, SimpleChange, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { v4 } from 'uuid';

@Component({
    selector: 'lib-phone',
    templateUrl: './ngx-phone-number.component.html',
    providers: [     
        {   
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => PhoneNumberComponent),
            multi: true     
        }  
    ]
  })
  export class PhoneNumberComponent implements OnInit, ControlValueAccessor {
    ///#region props
    @Input() required: boolean = false;
    @Input() id: string;
    @Input() name: string;
    @Input() pattern :string| null = null;
    @Input() displayName: string = 'phone';
    @Input() readonly: boolean = false;
    @Input() customStyleClass: string = ''

    val = "" // this is the updated value that the class accesses
    //get accessor
    get value(): any {

        if(this.val){
            return this.val.trim();
        }

        return this.val;
    };

    //set accessor including call the onchange callback
    set value(val: string){  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
        this.val = val
        this.onChange(val)
        this.onTouch(val)
    }

    disabled: boolean = false;

    onChange: any = (value: string) => {}
    onTouch: any = () => {}
    ///# end region

    ///region constractor
    constructor(){
        this.id = v4();
        this.name = v4();
    }
    ///# end region

    ///region Implemented methods
    writeValue(value: string): void {
        this.value = value;
        console.log(value)
    }

    registerOnChange(onChange: any): void {
       console.log(onChange)
    }

    registerOnTouched(onTouch: any): void {
        this.onTouch = onTouch
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = this.disabled
    }
    ngOnInit(): void {
        
    }
    ngOnChanges(change: SimpleChange){
        console.log(change)
    }
    ///# end region

    ///#region internel Methods & events
    internelOnChange($event: any) {
        this.onChange(this.value);
    }

    onBluer($event: any){
        this.onTouch();
    }
    ///#end Region
  }