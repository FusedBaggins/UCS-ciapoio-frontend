import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Instituicao } from 'src/app/utils/models/instituicao';
import tipoInstituicao from '../constants/tipo-instituicao';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {

  private readonly _url: string = environment.api;

  constructor(private _http: HttpClient) { }

  getInstituicoes(tipo: number): Observable<Instituicao[]> {
    let url: string = `${this._url}/${tipoInstituicao[tipo]}`;
    return this._http.get<Instituicao[]>(url);
  }

}
