import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectDefault } from 'src/app/utils/components/selectModels/selectDefault';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';
import { Instituicao } from 'src/app/utils/models/instituicao';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoParceiraServiceService {

  private readonly _url: string = `${environment.api}/instituicao-parceira`;
  private readonly _selectUrl: string = `${environment.api}/select`;

  constructor(private _http: HttpClient) { }

  public getInstituicoes(filtros: Instituicao): Observable<Instituicao[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<Instituicao[]>(this._url, { params: queryParams })
  }

  public getInstituicoesSelect(): Observable<SelectDefault[]> {
    return this._http.get<SelectDefault[]>(`${this._selectUrl}/instituicao-parceira`);
  }

  public getInstituicao(id: number): Observable<Instituicao> {
    return this._http.get<Instituicao>(`${this._url}/${id}`);
  }

  public postInstituicao(instituicao: Instituicao): Observable<any> {
    return this._http.post<any>(this._url, instituicao);

  }
}
