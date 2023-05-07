import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard {

  constructor(
    private _router: Router,
    private _autenticacaoService: AutenticacaoService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._autenticacaoService.usuarioEstaAutenticado()) {
      console.log("oi");
      
      this._router.navigate(['login']);
      return false;
    }

    return true;
  }

}
