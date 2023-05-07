import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./listagem-prestador/listagem-prestador.module').then(m => m.ListagemPrestadorModule)
    }
];

@NgModule({

    imports: [RouterModule.forChild(routes)],

})

export class PrestadorModule { }