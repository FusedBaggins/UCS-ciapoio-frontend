import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidenavComponent } from './sidenav.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SidenavComponent,
    ItemMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,

    ToolbarModule,
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
