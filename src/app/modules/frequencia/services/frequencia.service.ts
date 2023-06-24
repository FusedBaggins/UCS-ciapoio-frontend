import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Vara } from 'src/app/utils/models/vara';
import { environment } from 'src/environments/environment.development';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';
import { AtestadoFrequencia } from 'src/app/utils/models/atestado-frequencia';

@Injectable({
  providedIn: 'root'
})
export class FrequenciaService {

  private readonly _url: string = `${environment.api}/frequencia`;

  constructor(private _http: HttpClient) { }

  getFrequencias(filtros: AtestadoFrequencia): Observable<AtestadoFrequencia[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<AtestadoFrequencia[]>(this._url, { params: queryParams });
  }

  getFrequencia(frequenciaId:number):Observable<AtestadoFrequencia>{
    return this._http.get<AtestadoFrequencia>(`${this._url}/${frequenciaId}`);
  }

  postFrequencia(frequencia: AtestadoFrequencia): Observable<any> {
    return this._http.post<AtestadoFrequencia>(this._url, frequencia);
  }

  getFrequenciasAgrupadoPorProcesso(filtros: AtestadoFrequencia): Observable<AtestadoFrequencia[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<AtestadoFrequencia[]>(`${this._url}/agrupado/processo`, { params: queryParams });
  }

  getFrequenciasPorProcesso(processoId: number): Observable<AtestadoFrequencia> {
    return this._http.get<AtestadoFrequencia>(`${this._url}/agrupado/processo/${processoId}`);
  }

}
