import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidenavComponent } from './sidenav.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';


@NgModule({
  declarations: [
    SidenavComponent,
    ItemMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatListModule,
    MatSidenavModule,
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
