import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ciap',
    loadChildren: () => import('./modules/ciap/ciap.module').then(m => m.CiapModule)
  },
  {
    path: 'prestador',
    loadChildren: () => import('./modules/prestador/prestador.module').then(m => m.PrestadorModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
