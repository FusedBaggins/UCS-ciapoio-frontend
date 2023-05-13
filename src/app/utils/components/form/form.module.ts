import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
