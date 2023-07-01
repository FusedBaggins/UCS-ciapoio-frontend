import { DetalhesEntrevistaComponent } from './components/detalhes-entrevista/detalhes-entrevista.component';
import { ListagemEntrevistaComponent } from './components/listagem-entrevista/listagem-entrevista.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormModule } from 'src/app/utils/components/form/form.module';
import { EntrevistaRoutingModule } from './entrevista-routing.module';
import { InstituicaoModule } from 'src/app/utils/components/instituicao/instituicao.module';
import { ListaEntidadeModule } from 'src/app/utils/components/lista-entidade/lista-entidade.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import { NgxMaskModule } from 'ngx-mask';
import { ListagemEntrevistaGridComponent } from './components/listagem-entrevista-grid/listagem-entrevista-grid.component';

@NgModule({
    declarations: [
        DetalhesEntrevistaComponent,
        ListagemEntrevistaComponent,
        ListagemEntrevistaGridComponent
    ],
    imports: [
        CommonModule,
        EntrevistaRoutingModule,
        FormModule,
        ListaEntidadeModule,
        ReactiveFormsModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        FormModule,
        InstituicaoModule,
        ListaEntidadeModule,
        NgxMatDatetimePickerModule,
        NgxMaskModule.forRoot(),
    ]
})
export class EntrevistaModule { }
