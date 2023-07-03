import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

export class AutenticacaoService {

  private _autenticado$: BehaviorSubject<boolean>;


  constructor() {
    this._autenticado$ = new BehaviorSubject(true);
  }

  setUsuarioAutenticado(autenticado: boolean): void {
    this._autenticado$.next(autenticado);
    localStorage.setItem('autenticado', autenticado.toString());
  }

  getUsuarioAutenticado(): Observable<boolean> {
    return this._autenticado$.asObservable();
  }

  public usuarioEstaAutenticado(): boolean {
    return this._autenticado$.value;
  }
}
