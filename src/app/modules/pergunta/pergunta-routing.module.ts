import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesPerguntaComponent } from './components/detalhes-pergunta/detalhes-pergunta.component';
import { ListagemPerguntaComponent } from './components/listagem-pergunta/listagem-pergunta.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemPerguntaComponent,
  },
  {
    path: ':id',
    component: DetalhesPerguntaComponent
  },
  {
    path: 'incluir',
    component: DetalhesPerguntaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerguntaRoutingModule { }
