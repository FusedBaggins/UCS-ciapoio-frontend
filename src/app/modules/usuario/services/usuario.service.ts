import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment.development';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly _url: string = `${environment.api}/usuario/`;

  constructor(private _http: HttpClient) { }

  getUsuarios(filtros: Usuario): Observable<Usuario[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<Usuario[]>(this._url, { params: queryParams });
  }
}
