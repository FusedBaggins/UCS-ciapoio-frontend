import { NgModule } from '@angular/core';
import { SideComponent } from './side.component';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    MatListModule,
    CommonModule
  ],
  declarations: [
    SideComponent
  ],
  exports: [
    SideComponent
  ]
})
export class SideModule { }