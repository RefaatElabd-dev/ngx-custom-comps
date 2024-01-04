import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCustomCompsRoutingModule } from './ngx-custom-comps-routing.module';
import { PhoneNumberComponent } from './components/ngx-phone-number/ngx-phone-number.component';
import { FormsModule } from '@angular/forms';
import { NGXLockCheckerComponent } from './components/ngx-lock-checker/ngx-lock-checker.component';


export const commonComponents = [
  PhoneNumberComponent,
  NGXLockCheckerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxCustomCompsRoutingModule,
  ],
  declarations: [...commonComponents,],
  exports: [...commonComponents,]
})
export class NgxCustomCompsModule { }
