import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Vara } from 'src/app/utils/models/vara';
import { environment } from 'src/environments/environment.development';
import { queryParamsSerializer } from 'src/app/utils/functions/query-params-serializer';

@Injectable({
  providedIn: 'root'
})
export class VaraService {

  private readonly _url: string = `${environment.api}/vara-penal`;

  constructor(private _http: HttpClient) { }

  getVaras(filtros: Vara): Observable<Vara[]> {
    let queryParams: HttpParams = queryParamsSerializer(filtros);
    return this._http.get<Vara[]>(this._url, { params: queryParams });
  }

  getVara(varaId:number):Observable<Vara>{
    return this._http.get<Vara>(`${this._url}/${varaId}`);
  }

  postVara(vara: Vara): Observable<any> {
    return this._http.post<Vara>(this._url, vara);
  }
}
