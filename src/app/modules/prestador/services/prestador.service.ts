import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Prestador } from 'src/app/utils/models/prestador/prestador';
import { environment } from 'src/environments/environment.development';
import { SelectDefault } from 'src/app/utils/components/selectModels/selectDefault';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  private readonly _url: string = `${environment.api}/prestador`;
  private readonly _selectUrl: string = `${environment.api}/select`;

  constructor(private _http: HttpClient) { }

  getPrestadores(): Observable<Prestador[]> {
    return this._http.get<Prestador[]>(this._url);
  }

  getPrestadoresSelect(): Observable<SelectDefault[]> {
    return this._http.get<SelectDefault[]>(`${this._selectUrl}/prestador`);
  }
  
  getPrestador(id: number): Observable<Prestador> {
    return this._http.get<Prestador>(`${this._url}/${id}`);
  }

  addPrestadores(prestador: Prestador): Observable<void> {
    return this._http.post<void>(this._url, prestador);
  }
}
