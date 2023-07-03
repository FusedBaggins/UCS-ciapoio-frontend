import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemEntrevistaComponent } from './components/listagem-entrevista/listagem-entrevista.component';
import { DetalhesEntrevistaComponent } from './components/detalhes-entrevista/detalhes-entrevista.component';

const routes: Routes = [
  { path: '', component: ListagemEntrevistaComponent },
  { path: 'incluir', component: DetalhesEntrevistaComponent },
  { path: ':id', component: DetalhesEntrevistaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrevistaRoutingModule { }
