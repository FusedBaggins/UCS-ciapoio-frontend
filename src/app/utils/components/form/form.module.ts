import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    MatGridListModule,
  ],
  exports: [FormComponent]
})
export class FormModule { }
