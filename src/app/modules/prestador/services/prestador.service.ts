import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Prestador } from 'src/app/utils/models/prestador/prestador';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  private readonly _url: string = `${environment.api}/prestador`;

  constructor(private _http: HttpClient) { }

  getPrestadores(): Observable<Prestador[]> {
    return this._http.get<Prestador[]>(this._url);
  }
}
