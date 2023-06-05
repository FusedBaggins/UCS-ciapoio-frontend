import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheEntidadeParceiraComponent } from './components/detalhe-entidade-parceira/detalhe-entidade-parceira.component';
import { ListagemEntidadeParceiraComponent } from './components/listagem-entidade-parceira/listagem-entidade-parceira.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemEntidadeParceiraComponent,
  },
  {
    path: 'incluir',
    component: DetalheEntidadeParceiraComponent
  },
  {
    path: ':id',
    component: DetalheEntidadeParceiraComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadeParceiraRoutingModule { }
