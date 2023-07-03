import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioAutenticadoGuard } from './utils/guards/usuario-autenticado.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [UsuarioAutenticadoGuard] },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'ciap', loadChildren: () => import('./modules/ciap/ciap.module').then(m => m.CiapModule) },
  { path: 'prestador', loadChildren: () => import('./modules/prestador/prestador.module').then(m => m.PrestadorModule) },
  { path: 'pergunta', loadChildren: () => import('./modules/pergunta/pergunta.module').then(m => m.PerguntaModule) },
  { path: 'profissional', loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'visita', loadChildren: () => import('./modules/visita/visita.module').then(m => m.VisitaModule) },
  { path: 'instituicao-parceira', loadChildren: () => import('./modules/entidade-parceira/entidade-parceira.module').then(m => m.EntidadeParceiraModule) },
  { path: 'alternativa-penal', loadChildren: () => import('./modules/pena-alternativa/pena-alternativa.module').then(m => m.PenaAlternativaModule) },
  { path: 'vara-penal', loadChildren: () => import('./modules/vara/vara.module').then(m => m.VaraModule) },
  { path: 'processo', loadChildren: () => import('./modules/processo/processo.module').then(m => m.ProcessoModule) },
  { path: 'frequencia', loadChildren: () => import('./modules/frequencia/frequencia.module').then(m => m.FrequenciaModule) },
  { path: 'entrevistas', loadChildren: () => import('./modules/entrevista/entrevista.module').then(m => m.EntrevistaModule) },
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
