import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, startWith, switchMap } from 'rxjs';
import { Visita } from 'src/app/utils/models/visita';
import * as moment from 'moment';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';
import { PenaAlternativaService } from '../../services/pena-alternativa.service';
import { AlternativaPenal } from 'src/app/utils/models/prestador/entidades/alternativa-penal/alternativa-penal';

@Component({
  selector: 'app-listagem-pena-alternativa',
  templateUrl: './listagem-pena-alternativa.component.html'
})
export class ListagemPenaAlternativaComponent {
  public filtros: FormGroup;
  public penaAlternativa$!: Observable<AlternativaPenal[]>;

  public entidadeConfig: ListaEntidadeConfiguracao = {
    exibirAvatar: false,
    exibirCarregamento: true,
    exibirIdentificador: false,
  }

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _penaAlternativaService: PenaAlternativaService,
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });
  }

  ngOnInit(): void {
    this.penaAlternativa$ = this.filtros.valueChanges.pipe(
      startWith({}),
      debounceTime(500),
      switchMap((filtros: any) => {
        return this._penaAlternativaService.getAlternativasPenais(filtros)
      })
    );
  }
}
