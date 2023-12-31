import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxCustomCompsComponent } from './ngx-custom-comps.component';
import { NgxCustomCompsRoutingModule } from './ngx-custom-comps-routing.module';



@NgModule({
  declarations: [
    NgxCustomCompsComponent,
  ],
  imports: [
    CommonModule,
    NgxCustomCompsRoutingModule,
  ],
  exports: [
    NgxCustomCompsComponent,
  ]
})
export class NgxCustomCompsModule { }
