import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private readonly _endpoint: string = environment.api;

  constructor(private _http: HttpClient) { }

  getMenu(): Observable<any[]> {
    return this._http.get<any[]>(`${this._endpoint}/menu`);
  }
}
