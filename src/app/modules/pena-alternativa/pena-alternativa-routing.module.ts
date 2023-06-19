import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPenaAlternativaComponent } from './components/listagem-pena-alternativa/listagem-pena-alternativa.component';
import { DetalhesPenaAlternativaComponent } from './components/detalhes-pena-alternativa/detalhes-pena-alternativa.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemPenaAlternativaComponent,
  },
  {
    path: 'incluir',
    component: DetalhesPenaAlternativaComponent
  },
  {
    path: ':id',
    component: DetalhesPenaAlternativaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenaAlternativaRoutingModule { }
