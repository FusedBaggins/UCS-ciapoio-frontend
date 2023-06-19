import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVaraComponent } from './components/lista-vara/lista-vara.component';
import { DetalhesVaraComponent } from './components/detalhes-vara/detalhes-vara.component';

const routes: Routes = [
  { path: '', component: ListaVaraComponent },
  { path: 'incluir', component: DetalhesVaraComponent },
  { path: ':id', component: DetalhesVaraComponent },
  { path: '*', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaraRoutingModule { }
