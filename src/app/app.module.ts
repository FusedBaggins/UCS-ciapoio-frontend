import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestService } from './utils/services/request.service';
import { ToolbarModule } from './utils/components/toolbar/toolbar.module';
import { SidenavModule } from './utils/components/sidenav/sidenav.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    SidenavModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
