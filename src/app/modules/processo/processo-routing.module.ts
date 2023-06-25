import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProcessoComponent } from './componentes/lista-processo/lista-processo.component';
import { DetalhesProcessoComponent } from './componentes/detalhes-processo/detalhes-processo.component';

const routes: Routes = [
  { path: '', component: ListaProcessoComponent },
  { path: 'incluir', component: DetalhesProcessoComponent },
  { path: ':id', component: DetalhesProcessoComponent },
  { path: '*', redirectTo: '' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessoRoutingModule { }
