import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DetalhePrestadorComponent } from "./components/detalhe-prestador/detalhe-prestador.component";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/listagem-prestador/listagem-prestador.module').then(m => m.ListagemPrestadorModule)
    },
    {
        path: ':id',
        component: DetalhePrestadorComponent
    },
    {
        path: 'incluir',
        component: DetalhePrestadorComponent
    }
];

@NgModule({

    imports: [RouterModule.forChild(routes)],

})

export class PrestadorModule { }