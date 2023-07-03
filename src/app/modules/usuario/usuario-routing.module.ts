import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheUsuarioComponent } from './components/detalhe-usuario/detalhe-usuario.component';
import { ListagemUsuarioComponent } from './components/listagem-usuario/listagem-usuario.component';


const routes: Routes = [
    { path: '', component: ListagemUsuarioComponent },
    { path: 'incluir', component: DetalheUsuarioComponent },
    { path: ':id', component: DetalheUsuarioComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
