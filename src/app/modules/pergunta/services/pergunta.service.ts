import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';
import { Pergunta } from 'src/app/utils/models/prestador/entidades/pergunta/pergunta';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {
  private readonly _url: string = `${environment.api}/pergunta`;

  constructor(private _http: HttpClient) { }

  public getPerguntas(filtros: Pergunta): Observable<Pergunta[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<Pergunta[]>(this._url, { params: queryParams })
  }

  public getPergunta(id: number): Observable<Pergunta> {
    return this._http.get<Pergunta>(`${this._url}/${id}`);
  }

  public postPergunta(pergunta: Pergunta): Observable<any> {
    return this._http.post<any>(this._url, pergunta);
  }
}
