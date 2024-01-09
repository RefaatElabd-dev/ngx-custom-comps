import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCustomCompsRoutingModule } from './ngx-custom-comps-routing.module';
import { PhoneNumberComponent } from './components/ngx-phone-number/ngx-phone-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NGXLockCheckerComponent } from './components/ngx-lock-checker/ngx-lock-checker.component';
import { NGXAddressFormComponent } from '../public-api';


export const commonComponents = [
  PhoneNumberComponent,
  NGXLockCheckerComponent,
  NGXAddressFormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCustomCompsRoutingModule,
  ],
  declarations: [...commonComponents,],
  exports: [...commonComponents,]
})
export class NgxCustomCompsModule { }
