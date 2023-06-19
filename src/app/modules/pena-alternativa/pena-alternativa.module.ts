import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormModule } from 'src/app/utils/components/form/form.module';
import { ListaEntidadeModule } from 'src/app/utils/components/lista-entidade/lista-entidade.module';
import { PerguntaRoutingModule } from '../pergunta/pergunta-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SelectsModule } from 'src/app/utils/components/selects/selects.module';
import { ListagemPenaAlternativaComponent } from './components/listagem-pena-alternativa/listagem-pena-alternativa.component';
import { DetalhesPenaAlternativaComponent } from './components/detalhes-pena-alternativa/detalhes-pena-alternativa.component';
import { PenaAlternativaRoutingModule } from './pena-alternativa-routing.module';


@NgModule({
  declarations: [
    ListagemPenaAlternativaComponent,
    DetalhesPenaAlternativaComponent
  ],
  imports: [
    CommonModule,
    PenaAlternativaRoutingModule,

    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PerguntaRoutingModule,

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
    ListaEntidadeModule,
    SelectsModule,
  ]
})
export class PenaAlternativaModule { }
