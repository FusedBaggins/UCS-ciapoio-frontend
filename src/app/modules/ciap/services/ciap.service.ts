import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';

import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';
import { Instituicao } from 'src/app/utils/components/instituicao/models/instituicao';

@Injectable({
  providedIn: 'root'
})
export class CiapService {

  private readonly _url: string = `${environment.api}/ciap`;

  constructor(private _http: HttpClient) { }

  public getInstituicoes(filtros: Instituicao): Observable<Instituicao[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<Instituicao[]>(this._url, { params: queryParams })
  }

  public getInstituicao(id: number): Observable<Instituicao> {
    return this._http.get<Instituicao>(`${this._url}/${id}`);
  }

  public postInstituicao(instituicao: Instituicao): Observable<any> {
    return this._http.post<any>(this._url, instituicao);

  }
}
