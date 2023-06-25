import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Processo } from 'src/app/utils/models/processo';
import { environment } from 'src/environments/environment.development';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  private readonly _url: string = `${environment.api}/processo`;

  constructor(private _http: HttpClient) { }

  public getProcessos(filtros: Processo): Observable<Processo[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<Processo[]>(this._url, { params: queryParams })
  }

  public getProcesso(id: number): Observable<Processo> {
    return this._http.get<Processo>(`${this._url}/${id}`);
  }

  public postProcesso(processo: Processo): Observable<any> {
    return this._http.post<any>(this._url, processo);
  }
}
