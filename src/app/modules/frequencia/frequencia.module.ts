import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormModule } from 'src/app/utils/components/form/form.module';
import { ListaEntidadeModule } from 'src/app/utils/components/lista-entidade/lista-entidade.module';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetalhesFrequenciaComponent } from './components/detalhes-frequencia/detalhes-frequencia.component';
import { FrequenciaRoutingModule } from './frequencia-routing.module';
import { ListaFrequenciaComponent } from './components/lista-frequencia/lista-frequencia.component';
import { DialogFrequenciaComponent } from './components/dialogs/dialog-frequencia/dialog-frequencia.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DetalhesFrequenciaComponent,
    ListaFrequenciaComponent,
    DialogFrequenciaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
    FormModule,
    FrequenciaRoutingModule,
    ListaEntidadeModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,

    MatIconModule,
    MatListModule,
    MatInputModule, 
    MatButtonModule, 
    MatSnackBarModule,
    MatFormFieldModule,
  ]
})
export class FrequenciaModule { }
