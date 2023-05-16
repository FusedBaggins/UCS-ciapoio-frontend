import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { DetalheUsuarioComponent } from './components/detalhe-usuario/detalhe-usuario.component';
import { ListagemUsuarioComponent } from './components/listagem-usuario/listagem-usuario.component';
import { ListaEntidadeModule } from 'src/app/utils/components/lista-entidade/lista-entidade.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DetalheUsuarioComponent,
    ListagemUsuarioComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,

    ListaEntidadeModule,
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }
