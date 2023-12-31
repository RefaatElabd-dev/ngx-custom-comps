import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { NgxCustomCompsComponent } from "./ngx-custom-comps.component";

const libRoutes: Routes = [
    {
        path: '',
        component: NgxCustomCompsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(libRoutes, { preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class NgxCustomCompsRoutingModule {

}