import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectPrestadorComponent } from './prestador/select-prestador/select-prestador.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormModule } from '../form/form.module';
import { SelectInstituicaoParceiraComponent } from './instituicao-parceira/select-instituicao-parceira/select-instituicao-parceira.component';
import { SelectSituacaoVisitaComponent } from './visitas/select-situacao-visita/select-situacao-visita.component';



@NgModule({
  declarations: [
    SelectPrestadorComponent,
    SelectInstituicaoParceiraComponent,
    SelectSituacaoVisitaComponent,
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
  ],
})
export class SelectsModule { }
