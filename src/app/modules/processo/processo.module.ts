import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ProcessoRoutingModule } from './processo-routing.module';
import { SelectsModule } from 'src/app/utils/components/selects/selects.module';
import { ListaProcessoComponent } from './componentes/lista-processo/lista-processo.component';
import { ListaEntidadeModule } from 'src/app/utils/components/lista-entidade/lista-entidade.module';
import { DetalhesProcessoComponent } from './componentes/detalhes-processo/detalhes-processo.component';



@NgModule({
  declarations: [
    ListaProcessoComponent,
    DetalhesProcessoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ProcessoRoutingModule,

    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ListaEntidadeModule,
    MatDatepickerModule,
    MatSlideToggleModule,

    SelectsModule
  ]
})
export class ProcessoModule { }
