import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private _autenticado$: BehaviorSubject<boolean>;


  constructor() {
    this._autenticado$ = new BehaviorSubject(false);
  }

  setUsuarioAutenticado(autenticado: boolean): void {
    this._autenticado$.next(autenticado);
  }

  getUsuarioAutenticado(): Observable<boolean> {
    return this._autenticado$.asObservable();
  }

  usuarioEstaAutenticado(): boolean {
    return this._autenticado$.value;
  }
}
