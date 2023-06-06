import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { SelectDefault } from '../components/selectModels/selectDefault';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private readonly _url: string = `${environment.api}/selects/cidade`;
  private readonly _selectUrl: string = `${environment.api}/select`;

  constructor(private _http: HttpClient) { }

  public getCidades(): Observable<SelectDefault[]> {
    return this._http.get<SelectDefault[]>(`${this._selectUrl}/cidade`);
  }
}
