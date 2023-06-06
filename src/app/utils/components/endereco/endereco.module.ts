import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EnderecoComponent } from './endereco.component';
import { SelectsModule } from '../selects/selects.module';


@NgModule({
  declarations: [
    EnderecoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,

    SelectsModule
  ],
  exports: [
    EnderecoComponent
  ]
})
export class EnderecoModule { }
