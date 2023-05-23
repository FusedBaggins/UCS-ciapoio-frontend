import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
import { ListagemVisitaComponent } from './components/listagem-visita/listagem-visita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormModule } from 'src/app/utils/components/form/form.module';
import { ListaEntidadeModule } from 'src/app/utils/components/lista-entidade/lista-entidade.module';
import { PerguntaRoutingModule } from '../pergunta/pergunta-routing.module';
import { DetalhesVisitaComponent } from './components/detalhes-visita/detalhes-visita.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    ListagemVisitaComponent,
    DetalhesVisitaComponent
  ],
  imports: [
    CommonModule,
    VisitaRoutingModule,

    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PerguntaRoutingModule,
        
   
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormModule,
    ListaEntidadeModule
  ]
})
export class VisitaModule { }