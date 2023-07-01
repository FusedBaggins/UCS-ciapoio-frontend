import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';
import { AtestadoComparecimento } from 'src/app/utils/models/atestado-comparecimento';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  private readonly _url: string = `${environment.api}/entrevistas/`;

  constructor(private _http: HttpClient) { }

  public getEntrevistas(filtros: AtestadoComparecimento): Observable<AtestadoComparecimento[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<AtestadoComparecimento[]>(this._url, { params: queryParams })
  }

  public getEntrevista(id: number): Observable<AtestadoComparecimento> {
    return this._http.get<AtestadoComparecimento>(`${this._url}${id}`);
  }

  public postEntrevista(entrevista: AtestadoComparecimento): Observable<any> {
    return this._http.post<any>(this._url, entrevista);
  }
}
