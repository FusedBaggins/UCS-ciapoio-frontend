import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheCiapComponent } from './components/detalhe-ciap/detalhe-ciap.component';

const routes: Routes = [
    {
        path: '',
        // component:DetalheCiapComponent,
        loadChildren: () => import('./components/listagem-ciap/listagem-ciap.module').then(m => m.ListagemCiapModule)
    },
    {
        path: ':id',
        component: DetalheCiapComponent
    }
    ,
    {
        path: 'incluir',
        component: DetalheCiapComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CiapRoutingModule { }
