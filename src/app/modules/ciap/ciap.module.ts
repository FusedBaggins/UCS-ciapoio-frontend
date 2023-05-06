import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./listagem-ciap/listagem-ciap.module').then(m => m.ListagemCiapModule)
    }
];

@NgModule({

    imports: [RouterModule.forChild(routes)],

})

export class CiapModule { }