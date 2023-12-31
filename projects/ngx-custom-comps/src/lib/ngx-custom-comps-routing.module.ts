import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NgxCustomCompsComponent } from "./ngx-custom-comps.component";

const libRoutes: Routes = [
    {
        path: '',
        component: NgxCustomCompsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(libRoutes)],
    exports: [RouterModule]
})
export class NgxCustomCompsRoutingModule {

}