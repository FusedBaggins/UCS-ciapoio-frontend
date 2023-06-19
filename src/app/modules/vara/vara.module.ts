import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { VaraRoutingModule } from './vara-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormModule } from 'src/app/utils/components/form/form.module';
import { ListaVaraComponent } from './components/lista-vara/lista-vara.component';
import { DetalhesVaraComponent } from './components/detalhes-vara/detalhes-vara.component';
import { ListaEntidadeModule } from 'src/app/utils/components/lista-entidade/lista-entidade.module';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    DetalhesVaraComponent,
    ListaVaraComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
    FormModule,
    VaraRoutingModule,
    ListaEntidadeModule,

    MatIconModule,
    MatListModule,
    MatInputModule, 
    MatButtonModule, 
    MatSnackBarModule,
    MatFormFieldModule,
  ]
})
export class VaraModule { }
