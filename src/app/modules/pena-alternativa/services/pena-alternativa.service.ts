import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';
import { AlternativaPenal } from 'src/app/utils/models/prestador/entidades/alternativa-penal/alternativa-penal';
import { Visita } from 'src/app/utils/models/visita';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PenaAlternativaService {
  private readonly _url: string = `${environment.api}/alternativa-penal`;

  constructor(private _http: HttpClient) { }
  
  public getAlternativasPenais(filtros: AlternativaPenal): Observable<AlternativaPenal[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<AlternativaPenal[]>(this._url, { params: queryParams })
  }

  public getAlternativaPenal(id: number): Observable<AlternativaPenal> {
    return this._http.get<AlternativaPenal>(`${this._url}/${id}`);
  }

  public postAlternativaPenal(pergunta: AlternativaPenal): Observable<any> {
    return this._http.post<any>(this._url, pergunta);
  }
}
