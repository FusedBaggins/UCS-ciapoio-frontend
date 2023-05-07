import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { UsuarioAutenticacao } from '../models/usuario-autenticacao.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _url: string = `${environment.api}/login`;

  constructor(private _http: HttpClient) { }

  login(user: UsuarioAutenticacao): Observable<any> {
    const { username, password } = user;
    return this._http.post(this._url, { username, password });
  }
}
