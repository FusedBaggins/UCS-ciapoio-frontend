import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { Instituicao } from 'src/app/utils/models/instituicao';

import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';

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
}
