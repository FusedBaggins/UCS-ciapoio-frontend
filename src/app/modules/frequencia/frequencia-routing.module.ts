import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFrequenciaComponent } from './components/lista-frequencia/lista-frequencia.component';
import { DetalhesFrequenciaComponent } from './components/detalhes-frequencia/detalhes-frequencia.component';

const routes: Routes = [
  { path: '', component: ListaFrequenciaComponent },
  { path: 'incluir', component: DetalhesFrequenciaComponent },
  { path: ':id', component: DetalhesFrequenciaComponent },
  { path: '*', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrequenciaRoutingModule { }
