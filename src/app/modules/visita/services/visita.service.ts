import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';
import { Visita } from 'src/app/utils/models/visita';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  private readonly _url: string = `${environment.api}/visita`;

  constructor(private _http: HttpClient) { }
  
  public getVisitas(filtros: Visita): Observable<Visita[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<Visita[]>(this._url, { params: queryParams })
  }

  public getVisita(id: number): Observable<Visita> {
    return this._http.get<Visita>(`${this._url}/${id}`);
  }

  public postVisita(pergunta: Visita): Observable<any> {
    return this._http.post<any>(this._url, pergunta);
  }
}
