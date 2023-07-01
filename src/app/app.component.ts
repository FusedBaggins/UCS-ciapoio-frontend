import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AutenticacaoService } from './utils/services/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CIAPoio';

  usuarioAutenticado$!: Observable<boolean>;
  constructor(private _autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
    this.usuarioAutenticado$ = this._autenticacaoService.getUsuarioAutenticado();
  }
}
