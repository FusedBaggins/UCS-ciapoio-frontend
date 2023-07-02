import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormModule } from 'src/app/utils/components/form/form.module';
import { EntidadeParceiraRoutingModule } from './entidade-parceira-routing.module';
import { InstituicaoModule } from 'src/app/utils/components/instituicao/instituicao.module';
import { ListaEntidadeModule } from 'src/app/utils/components/lista-entidade/lista-entidade.module';
import { DetalheEntidadeParceiraComponent } from './components/detalhe-entidade-parceira/detalhe-entidade-parceira.component';
import { ListagemEntidadeParceiraComponent } from './components/listagem-entidade-parceira/listagem-entidade-parceira.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DetalheEntidadeParceiraComponent,
    ListagemEntidadeParceiraComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    EntidadeParceiraRoutingModule,

    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,

    FormModule,
    InstituicaoModule,
    ListaEntidadeModule
  ]
})
export class EntidadeParceiraModule { }
