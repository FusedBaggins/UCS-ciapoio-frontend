import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';
import { AgendamentoPrestacao } from 'src/app/utils/models/agendamento-prestacao';
import { AlternativaPenal } from 'src/app/utils/models/prestador/entidades/alternativa-penal/alternativa-penal';
import { Processo } from 'src/app/utils/models/processo';
import { Visita } from 'src/app/utils/models/visita';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PenaAlternativaService {
  private readonly _url: string = `${environment.api}/agendamento-prestacao`;

  constructor(private _http: HttpClient) { }

  public getProcessosPenaAlternativa(filtros: any): Observable<Processo[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<Processo[]>(this._url, { params: queryParams })
  }

  public getAlternativaPenal(id: number): Observable<AgendamentoPrestacao> {
    return this._http.get<AgendamentoPrestacao>(`${this._url}/${id}`);
  }

  public postAlternativaPenal(alternativa: AgendamentoPrestacao): Observable<any> {
    return this._http.post<any>(this._url, alternativa);
  }

  public getDescricaoAlternativaPenal(prestadorId: number, processoId: number): Observable<any> {
    let queryParams: HttpParams = queryParamsSerializer({ prestadorId, processoId });
    return this._http.get<any>(`${this._url}/getDescricaoAlternativaPenal`, { params: queryParams });
  }
}
