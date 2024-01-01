import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PhoneNumberComponent } from "./components/ngx-phone-number/ngx-phone-number.component";


const libRoutes: Routes = [
    {
        path: 'phone',
        component: PhoneNumberComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(libRoutes)],
    exports: [RouterModule]
})
export class NgxCustomCompsRoutingModule {

}