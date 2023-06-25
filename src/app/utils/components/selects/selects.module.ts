import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormModule } from '../form/form.module';
import { SelectCidadeComponent } from './cidade/select-cidade/select-cidade.component';
import { SelectPrestadorComponent } from './prestador/select-prestador/select-prestador.component';
import { SelectVaraPenalComponent } from './vara-penal/select-vara-penal/select-vara-penal.component';
import { SelectSituacaoVisitaComponent } from './visitas/select-situacao-visita/select-situacao-visita.component';
import { SelectInstituicaoParceiraComponent } from './instituicao-parceira/select-instituicao-parceira/select-instituicao-parceira.component';



@NgModule({
  declarations: [
    SelectPrestadorComponent,
    SelectInstituicaoParceiraComponent,
    SelectSituacaoVisitaComponent,
    SelectCidadeComponent,
    SelectVaraPenalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    FormModule,
  ],
  exports: [
    SelectPrestadorComponent,
    SelectInstituicaoParceiraComponent,
    SelectSituacaoVisitaComponent,
    SelectCidadeComponent,
    SelectVaraPenalComponent
  ],
})
export class SelectsModule { }
