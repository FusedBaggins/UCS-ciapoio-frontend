import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEntidadeComponent } from './components/lista-entidade/lista-entidade.component';
import { DetalheEntidadeComponent } from './components/detalhe-entidade/detalhe-entidade.component';



@NgModule({
  declarations: [
    ListaEntidadeComponent,
    DetalheEntidadeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaEntidadeComponent
  ]
})
export class ListaEntidadeModule { }
