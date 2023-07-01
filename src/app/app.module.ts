import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarModule } from './utils/components/toolbar/toolbar.module';
import { SidenavModule } from './utils/components/sidenav/sidenav.module';
import { HttpInterceptorService } from './utils/interceptors/http-interceptor.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { AutenticacaoService } from './utils/services/autenticacao.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    SidenavModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide:MAT_DATE_LOCALE, useValue:'pt-br'
    },
    AutenticacaoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
