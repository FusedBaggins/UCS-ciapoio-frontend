import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemVisitaComponent } from './components/listagem-visita/listagem-visita.component';
import { DetalhesVisitaComponent } from './components/detalhes-visita/detalhes-visita.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemVisitaComponent,
  },
  {
    path: 'incluir',
    component: DetalhesVisitaComponent
  },
  {
    path: ':id',
    component: DetalhesVisitaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }
